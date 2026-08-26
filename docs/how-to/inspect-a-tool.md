# How to Inspect a Tool's Parameters

**Goal**: Read a tool's full JSON Schema — its parameter names, types, descriptions, defaults, and enum choices — before calling it.

---

## The `info` Command

Use `mcp-caller info` to inspect a specific tool's input schema:

```bash
# Named server from config:
mcp-caller info filesystem --tool write_file

# Ad-hoc server:
mcp-caller info --cmd "npx -y @modelcontextprotocol/server-filesystem ." --tool write_file
```

Output:

```
Tool: write_file
Create a new file or completely overwrite an existing file with new content.

Input Schema Parameters:
  • path (string) [REQUIRED]
      Description: Path of the file to write (relative to allowed directory)
  • content (string) [REQUIRED]
      Description: Content to write to the file
  • encoding [optional]
      Description: File encoding (default: utf-8)
      Default:     "utf-8"
      Enum:        ["utf-8", "base64"]
```

---

## Get Raw JSON Schema

Add `--json` to get the raw tool definition as JSON — useful for scripting or sending to another tool:

```bash
mcp-caller info filesystem --tool write_file --json
```

Output:

```json
{
  "name": "write_file",
  "description": "Create a new file...",
  "inputSchema": {
    "type": "object",
    "properties": {
      "path":     { "type": "string", "description": "..." },
      "content":  { "type": "string", "description": "..." },
      "encoding": { "type": "string", "enum": ["utf-8", "base64"], "default": "utf-8" }
    },
    "required": ["path", "content"]
  }
}
```

---

## Listing All Tools First

If you don't know the tool name, use `mcp-caller list` to see a summary of all available tools and their parameters:

```bash
mcp-caller list filesystem
```

The table shows parameter names, types, and which ones are required (`*`):

```
╭───────────────┬────────────────────────────────────╮
│ Tool Name     │ Parameters                         │
├───────────────┼────────────────────────────────────┤
│ read_file     │ path*: string                      │
│ write_file    │ path*: string, content*: string    │
│ list_directory│ path*: string                      │
╰───────────────┴────────────────────────────────────╯
```

---

## See Also

- [How to Call a Tool Interactively](call-tool-interactively.md) — the prompt engine uses the same schema
- [MCP Protocol Notes](../reference/mcp-protocol.md) — how `inputSchema` is defined in the spec
