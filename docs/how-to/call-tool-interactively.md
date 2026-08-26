# How to Call a Tool Interactively

**Goal**: Use the interactive schema-filling wizard to call a tool without knowing its parameters in advance.

---

## When to Use This

Use the interactive mode when you are:
- Exploring a new MCP server for the first time
- Running a one-off tool call where you don't want to construct JSON manually
- Verifying what a tool does before scripting it

---

## Method 1 — Full Wizard (Server + Tool Selection)

Launch `mcp-caller` with no subcommand to open the full interactive menu:

```bash
# With a configured server:
mcp-caller

# With an ad-hoc command:
mcp-caller --cmd "npx -y @modelcontextprotocol/server-filesystem ."
```

The wizard guides you through three screens:

### Screen 1 — Select a Server
```
Select an MCP Server to connect:
❯ filesystem (npx)
  github (npx)
  ➜ Enter custom command...
  ✖ Exit
```

Use arrow keys and press Enter to select.

### Screen 2 — Select a Tool
```
✔ Connected successfully! [filesystem-server v1.0.0]
Select a tool to execute:
❯ list_directory - Get a detailed listing of all files...
  read_file - Read the complete contents of a file...
  write_file - Create a new file or overwrite an existing file...
  ⬅ Back to server list
  ✖ Exit
```

### Screen 3 — Fill Parameters
```
── Fill Parameters for 'list_directory' ──
Get a detailed listing of all files and directories...

path (string) [required] - Path of the directory to list
> src
```

After you submit, results are shown immediately. You're then offered:
```
Next action:
❯ Run another tool on this server
  Re-run this tool
  Back to server list
```

---

## Method 2 — Jump Directly to a Tool's Prompt

If you already know the server and tool name, use `mcp-caller call` with no `--args` flag:

```bash
mcp-caller call filesystem --tool read_file
```

This skips the server/tool menus and goes straight to the parameter prompts for `read_file`.

---

## How the Schema Prompt Engine Works

`mcp-caller` reads the tool's `inputSchema` from the server and generates the appropriate prompt for each parameter type:

| JSON Schema type | Prompt rendered |
|---|---|
| `string` | Free text input field |
| `integer` | Text field with integer validation |
| `number` | Text field with float validation |
| `boolean` | `true` / `false` / `<skip>` selector |
| `enum` | Dropdown list of allowed values |
| `array` | Comma-separated or JSON array input |
| `object` | JSON object input with syntax validation |

Required parameters are marked `[required]` and cannot be left blank. Optional parameters are marked `[optional]` and can be skipped by pressing Enter.

---

## Keyboard Controls

| Key | Action |
|---|---|
| `↑` / `↓` | Navigate menu items |
| `Enter` | Confirm selection |
| `Ctrl+C` | Cancel and exit |
| `Esc` | Cancel current prompt |

---

## See Also

- [How to Call a Tool from the CLI](call-tool-from-cli.md) — scripting and automation
- [How to Inspect a Tool's Parameters](inspect-a-tool.md) — view schema before calling
