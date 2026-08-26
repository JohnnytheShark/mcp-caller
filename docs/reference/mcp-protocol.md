# MCP Protocol Notes Reference

**Type**: Reference | Technical description of the MCP subset implemented by `mcp-caller`.

This is not a full MCP specification. It documents only the protocol behavior you need to understand to use or extend `mcp-caller`. For the full spec, see the [official MCP documentation](https://modelcontextprotocol.io/).

---

## Transport: stdio

`mcp-caller` v0.1.0 uses the **stdio transport** exclusively. Each MCP server is spawned as a child process. Communication is:

- **Client → Server**: newline-delimited JSON written to the child's `stdin`
- **Server → Client**: newline-delimited JSON read from the child's `stdout`
- **Server logs**: passed through to the parent's `stderr` unchanged

Each message is a single line of JSON terminated with `\n`.

---

## Protocol Version

`mcp-caller` declares `"2024-11-05"` as its `protocolVersion` during initialization. Servers that require a later version may reject the connection.

---

## Message Framing: JSON-RPC 2.0

All messages conform to [JSON-RPC 2.0](https://www.jsonrpc.org/specification).

### Request (client → server, expects response)

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
  "params": {}
}
```

- `id` is a monotonically increasing `uint64`, starting at 1 per session
- `params` is omitted when not needed (not sent as `null`)

### Response (server → client)

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": { ... }
}
```

On error:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32601,
    "message": "Method not found",
    "data": null
  }
}
```

### Notification (client → server, no response)

```json
{
  "jsonrpc": "2.0",
  "method": "notifications/initialized"
}
```

Notifications have no `id` field. `mcp-caller` does not wait for a response after sending one.

---

## Session Lifecycle

Every session follows this exact sequence:

```
Client                          Server
  │──── initialize ────────────────►│
  │◄─── InitializeResult ───────────│
  │──── notifications/initialized ──►│  (notification, no response)
  │                                 │
  │──── tools/list ─────────────────►│  (may repeat with cursor for pagination)
  │◄─── ListToolsResult ────────────│
  │                                 │
  │──── tools/call ─────────────────►│
  │◄─── CallToolResult ─────────────│
  │                                 │
  [client kills child process]
```

---

## `initialize` / `InitializeResult`

**Request params:**

```json
{
  "protocolVersion": "2024-11-05",
  "capabilities": {},
  "clientInfo": {
    "name": "mcp-caller",
    "version": "0.1.0"
  }
}
```

**Response result fields used by `mcp-caller`:**

| Field | Type | Description |
|---|---|---|
| `protocolVersion` | `string` | Server's protocol version |
| `serverInfo.name` | `string` | Server display name |
| `serverInfo.version` | `string` | Server version |
| `instructions` | `string?` | Optional usage instructions shown in interactive mode |

---

## `tools/list`

**Request params:**

```json
{ "cursor": "<opaque-string>" }
```

`cursor` is omitted on the first request. If the response includes `nextCursor`, the next page is fetched by repeating with that cursor.

**Response result:**

```json
{
  "tools": [
    {
      "name": "read_file",
      "description": "Read the complete contents of a file.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": { "type": "string", "description": "..." }
        },
        "required": ["path"]
      }
    }
  ],
  "nextCursor": null
}
```

`mcp-caller` automatically paginates until `nextCursor` is absent or empty.

---

## `tools/call`

**Request params:**

```json
{
  "name": "read_file",
  "arguments": {
    "path": "Cargo.toml"
  }
}
```

**Response result:**

```json
{
  "content": [
    { "type": "text", "text": "[package]\nname = \"mcp-caller\"..." }
  ],
  "isError": false
}
```

### Content Block Types

| `type` | Fields | Description |
|---|---|---|
| `text` | `text: string` | Plain text or JSON string |
| `image` | `data: string`, `mimeType: string` | Base64-encoded image |
| `resource` | `resource: object` | Embedded resource reference |
| *(any other)* | — | Parsed as `Unknown`, displayed as `[Unknown content block]` |

`isError: true` indicates the tool itself returned an error (not a transport/protocol error). The content will contain error details.
