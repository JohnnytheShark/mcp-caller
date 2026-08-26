# CLI Commands & Flags Reference

**Type**: Reference | Accurate, complete, non-instructional.

This page documents every command, subcommand, and flag in `mcp-caller`. Use it while you work.

---

## Global Flags

These flags apply to all commands and subcommands.

| Flag | Short | Type | Default | Description |
|---|---|---|---|---|
| `--config <PATH>` | `-c` | Path | — | Custom config file path (overrides auto-discovery) |
| `--cmd <COMMAND>` | — | String | — | Ad-hoc MCP server command (e.g. `"npx -y server arg"`) |
| `--json` | `-j` | Bool | `false` | Output raw JSON to stdout instead of formatted tables |
| `--help` | `-h` | — | — | Print help |
| `--version` | `-V` | — | — | Print version |

> **`--cmd` vs server name**: If both are provided, `--cmd` takes precedence and a warning is printed to stderr.

---

## `mcp-caller` (no subcommand)

Launches the full **interactive TUI wizard**: server selection → tool selection → parameter prompts → execution → loop.

```bash
mcp-caller [--config <PATH>] [--cmd <COMMAND>]
```

**Examples:**

```bash
# Open wizard with all configured servers
mcp-caller

# Open wizard connected directly to an ad-hoc server
mcp-caller --cmd "npx -y @modelcontextprotocol/server-filesystem ."

# Load servers from a custom config
mcp-caller --config ~/team-servers.json
```

---

## `mcp-caller interactive [SERVER]`

Alias for launching the wizard. Optionally skip the server-selection menu by naming a server directly.

```bash
mcp-caller interactive [SERVER] [--cmd <COMMAND>] [--config <PATH>]
```

| Argument | Required | Description |
|---|---|---|
| `SERVER` | No | Server name from config to connect to directly |

**Examples:**

```bash
# Open wizard at server selection screen
mcp-caller interactive

# Jump directly into the 'github' server session
mcp-caller interactive github
```

---

## `mcp-caller servers`

Lists all MCP servers discovered from local config files and system locations. Shows server name, command, and the config file it was sourced from.

```bash
mcp-caller servers [--config <PATH>]
```

**Example output:**

```
╭────────────┬────────────────────────────────────────┬──────────────────────╮
│ Server Name│ Command / URL                          │ Config Source        │
├────────────┼────────────────────────────────────────┼──────────────────────┤
│ filesystem │ npx -y @mcp/server-filesystem .        │ ./mcp.json           │
│ github     │ npx -y @mcp/server-github              │ ./mcp.json           │
╰────────────┴────────────────────────────────────────┴──────────────────────╯
```

---

## `mcp-caller list [SERVER]`

Connects to a server, calls `tools/list`, and displays all available tools with their parameters.

```bash
mcp-caller list [SERVER] [--cmd <COMMAND>] [--config <PATH>] [--json]
```

| Argument | Required | Description |
|---|---|---|
| `SERVER` | Conditionally | Server name from config. Required unless `--cmd` is provided. |

**Examples:**

```bash
# List tools from a configured server
mcp-caller list filesystem

# List tools from an ad-hoc server
mcp-caller list --cmd "python my_server.py"

# Get raw JSON tool list
mcp-caller list filesystem --json
```

---

## `mcp-caller info [SERVER] --tool <TOOL>`

Connects to a server and displays the full JSON Schema of a single tool — parameters, types, descriptions, defaults, and enum values.

```bash
mcp-caller info [SERVER] --tool <TOOL> [--cmd <COMMAND>] [--config <PATH>] [--json]
```

| Argument / Flag | Required | Description |
|---|---|---|
| `SERVER` | Conditionally | Server name from config. Required unless `--cmd` is provided. |
| `--tool <TOOL>` / `-t <TOOL>` | Yes | Name of the tool to inspect |

**Examples:**

```bash
# Inspect 'read_file' on the filesystem server
mcp-caller info filesystem --tool read_file

# Inspect as raw JSON
mcp-caller info filesystem --tool read_file --json
```

---

## `mcp-caller call [SERVER] --tool <TOOL>`

Connects to a server and invokes a tool. If `--args` is not provided, starts the interactive schema-filling prompt.

```bash
mcp-caller call [SERVER] --tool <TOOL> [--args <JSON>] [--cmd <COMMAND>] [--config <PATH>] [--json] [--non-interactive]
```

| Argument / Flag | Required | Description |
|---|---|---|
| `SERVER` | Conditionally | Server name from config. Required unless `--cmd` is provided. |
| `--tool <TOOL>` / `-t <TOOL>` | Yes | Name of the tool to invoke |
| `--args <JSON>` / `-a <JSON>` | No | JSON object of arguments (e.g. `'{"path":"src"}'`) |
| `--non-interactive` | No | Disable all prompts; fail if required args are missing |

**Examples:**

```bash
# Call with interactive prompts (no --args)
mcp-caller call filesystem --tool read_file

# Call with direct arguments (no prompts)
mcp-caller call filesystem --tool read_file --args '{"path":"Cargo.toml"}'

# Call non-interactively and output raw JSON
mcp-caller call filesystem \
  --tool read_file \
  --args '{"path":"Cargo.toml"}' \
  --non-interactive \
  --json

# Ad-hoc server
mcp-caller call \
  --cmd "npx -y @modelcontextprotocol/server-github" \
  --tool get_repository \
  --args '{"owner":"octocat","repo":"hello-world"}' \
  --json
```

---

## Exit Codes

| Code | Meaning |
|---|---|
| `0` | Success |
| `1` | Any error (connection, tool not found, serialization, etc.) |

Error details are always written to **stderr**. Tool output (formatted or `--json`) is always written to **stdout**. This separation makes the tool safe to use in pipelines.
