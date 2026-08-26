# Configuration File Schema Reference

**Type**: Reference | Complete specification of the `mcp.json` config format.

---

## Supported Filenames

`mcp-caller` auto-discovers configuration from these filenames in the current directory (in priority order):

1. Custom path passed via `--config <PATH>`
2. `./mcp.json`
3. `./.mcp.json`
4. `./.mcprc.json`
5. Claude Desktop config (platform-specific path)
6. Antigravity/Gemini CLI config (`~/.gemini/antigravity-cli/mcp_config.json`)

See [Configuration Discovery & Priority](../explanation/config-discovery.md) for full merge behavior.

---

## Top-Level Schema

```json
{
  "mcpServers": {
    "<server-name>": <ServerDefinition>
  }
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `mcpServers` | `Object<string, ServerDefinition>` | Yes | Map of server names to their definitions |

---

## `ServerDefinition`

Each entry in `mcpServers` is a `ServerDefinition` object:

```json
{
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "."],
  "env": {
    "API_KEY": "your-secret-here"
  },
  "url": null
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `command` | `string` | Conditionally | Executable to spawn (e.g. `"npx"`, `"python"`, `"node"`). Required for stdio servers. |
| `args` | `string[]` | No | Arguments passed to `command`. Defaults to `[]`. |
| `env` | `Object<string, string>` | No | Environment variables injected into the server process. Defaults to `{}`. |
| `url` | `string` | Conditionally | Base URL for HTTP/SSE transport (e.g. `"http://localhost:8080"`). Required for remote servers. |

> **Note**: Either `command` or `url` must be set. If both are set, `url` takes precedence (HTTP transport).

---

## Full Example

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/workspace"],
      "env": {}
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxxxxxxxxxxxxxxxxx"
      }
    },
    "my-python-server": {
      "command": "python",
      "args": ["server.py", "--port", "stdio"],
      "env": {
        "DATABASE_URL": "postgresql://localhost/mydb",
        "LOG_LEVEL": "INFO"
      }
    },
    "remote-server": {
      "url": "http://192.168.1.100:8080"
    }
  }
}
```

---

## Alternative Format: Flat Server Map

If the root of your JSON file is a flat `<server-name>: ServerDefinition` map (without the `"mcpServers"` wrapper), `mcp-caller` will also parse it:

```json
{
  "my-server": {
    "command": "npx",
    "args": ["-y", "my-mcp-server"]
  }
}
```

This is provided for compatibility with tools that emit configs without the wrapper.

---

## Security Notes

- **Do not commit `mcp.json` files with secrets** (API keys, tokens) to version control. Add `mcp.json` to your `.gitignore`.
- The `env` block is injected directly into the child process environment. Use a secrets manager or `.env` substitution for production deployments.
- Values in `command` and `args` are passed through the OS process API and are not shell-interpreted (no injection risk), but the commands themselves execute with full OS privileges. See the trust boundary documentation in the [source code](../../src/config/models.rs).
