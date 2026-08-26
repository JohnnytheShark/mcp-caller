# How to Configure MCP Servers

**Goal**: Add one or more MCP servers to a local config file so you can reference them by name instead of typing `--cmd` every time.

---

## Option 1 — Local `mcp.json` (Recommended for Projects)

Create a file called `mcp.json` in any directory where you'll run `mcp-caller`. The tool auto-discovers this file on startup.

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    }
  }
}
```

Now you can run:

```bash
mcp-caller list filesystem
mcp-caller call github --tool get_repository --args '{"owner":"octocat","repo":"hello-world"}'
```

---

## Option 2 — `.mcp.json` or `.mcprc.json`

Both of these filenames are also discovered automatically in the current directory:

```bash
# These are equivalent to mcp.json:
.mcp.json
.mcprc.json
```

---

## Option 3 — A Custom Config File Path

Pass any config file explicitly with `--config`:

```bash
mcp-caller --config ~/my-servers.json list
mcp-caller --config /etc/mcp/company-servers.json call my-server --tool ping
```

Custom `--config` takes **highest priority** and is loaded first.

---

## Option 4 — Reuse Claude Desktop Config

If you already have MCP servers configured in Claude Desktop, `mcp-caller` reads them automatically from:

| Platform | Path |
|---|---|
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json` |

No configuration needed — just run `mcp-caller servers` and they'll appear.

---

## Verify Your Configuration

Run the `servers` command to see all discovered servers and which config file each came from:

```bash
mcp-caller servers
```

Output:

```
╭────────────┬──────────────────────────────────────────────┬────────────────────────╮
│ Server Name│ Command / URL                                │ Config Source          │
├────────────┼──────────────────────────────────────────────┼────────────────────────┤
│ filesystem │ npx -y @modelcontextprotocol/server-filesystem │ ./mcp.json           │
│ github     │ npx -y @modelcontextprotocol/server-github   │ ./mcp.json             │
╰────────────┴──────────────────────────────────────────────┴────────────────────────╯
```

---

## Passing Environment Variables

Sensitive values like API keys should be set in the `"env"` block of the server definition — **never hardcoded in shell scripts**:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "python",
      "args": ["server.py"],
      "env": {
        "API_KEY": "sk-...",
        "BASE_URL": "https://api.example.com"
      }
    }
  }
}
```

> **Security Note**: `mcp.json` files should be added to `.gitignore` if they contain secrets. Consider using environment variable substitution or a secrets manager for production use.

---

## See Also

- [Configuration File Schema Reference](../reference/config-schema.md) — full JSON schema for the config file
- [Configuration Discovery & Priority](../explanation/config-discovery.md) — understand the merge order
