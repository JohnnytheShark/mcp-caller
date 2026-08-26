# Architecture & Module Reference

**Type**: Reference | Accurate description of the source layout, module responsibilities, and extension points.

---

## Directory Structure

```
src/
├── main.rs                     # Binary entrypoint
├── config/
│   ├── mod.rs                  # ConfigManager: discovery, loading, merging
│   └── models.rs               # ServerDefinition, McpConfig (serde types + tests)
├── mcp/
│   ├── mod.rs                  # Module re-exports
│   ├── types.rs                # JSON-RPC 2.0 & MCP protocol types (+ unit tests)
│   ├── transport.rs            # Transport async trait
│   ├── stdio.rs                # StdioTransport: child process + line-framed I/O
│   └── client.rs               # McpClient: high-level protocol API
├── prompt/
│   ├── mod.rs
│   └── schema_form.rs          # SchemaForm: JSON Schema → terminal prompt engine
├── ui/
│   ├── mod.rs
│   └── output.rs               # Output: tables, result blocks, badges
└── commands/
    ├── mod.rs                  # resolve_server_definition() shared function
    ├── interactive.rs          # handle_interactive, run_server_session, run_tool_loop
    ├── list.rs                 # handle_list
    ├── info.rs                 # handle_info
    ├── call.rs                 # handle_call
    └── servers.rs              # handle_servers
```

---

## Module Responsibilities

### `main.rs`
- Parses the CLI using `clap` derive macros
- Routes subcommand variants to their handler functions
- Propagates `Result` errors to stderr with exit code 1
- **No business logic lives here**

### `config/`

#### `ConfigManager` (`mod.rs`)
- `load_all(custom_config)` → discovers and merges servers from all config sources
- `merge_from_file(path, map)` → parses one config file (handles both `mcpServers`-wrapped and flat formats); uses first-wins deduplication
- `get_server(name)` → look up a `ServerDefinition` by name
- `list_servers()` → sorted list of `(name, def, source_path)` tuples
- Static helpers: `get_claude_config_path()`, `get_gemini_config_path()`

#### `ServerDefinition` + `McpConfig` (`models.rs`)
- Pure data types with `serde` derives
- `ServerDefinition::from_command_str(cmd_line)` — POSIX shell-word parsing; documented trust boundary

### `mcp/`

#### `Transport` trait (`transport.rs`)
```rust
#[async_trait]
pub trait Transport: Send + Sync {
    async fn send_request(&mut self, method: &str, params: Option<Value>) -> Result<Value>;
    async fn send_notification(&mut self, method: &str, params: Option<Value>) -> Result<()>;
    async fn close(&mut self) -> Result<()>;
}
```
All transport implementations depend **only** on this trait. `McpClient` is fully decoupled from transport mechanics.

#### `StdioTransport` (`stdio.rs`)
- Spawns a child process with `tokio::process::Command`
- Handles Windows `.cmd`/`.bat` via `cmd.exe /C`
- Reads line-framed JSON from `stdout` via `AsyncBufReadExt`
- Matches responses by `id` (ignores notifications and non-JSON lines from the server)
- `Drop` impl ensures the child is killed even on panic

#### `McpClient` (`client.rs`)
- `connect_stdio(command, args, env)` — spawns transport, runs initialize handshake
- `initialize()` — sends `initialize`, receives `InitializeResult`, sends `notifications/initialized`
- `list_tools()` — paginates through `tools/list` calls, collects all tools
- `call_tool(name, arguments)` — sends `tools/call`, returns `CallToolResult`
- `server_info()`, `instructions()` — accessors for data from `InitializeResult`

#### Types (`types.rs`)
All JSON-RPC 2.0 and MCP protocol structs with `serde` derives. Includes `#[serde(other)]` on `ContentBlock::Unknown` to handle future content types gracefully.

### `prompt/`

#### `SchemaForm` (`schema_form.rs`)
- `prompt_arguments(tool, prefilled)` — main entry point; iterates over the tool's `inputSchema.properties`, sorts required fields first, dispatches to type-specific prompts
- Per-type prompts: `prompt_string`, `prompt_integer`, `prompt_number`, `prompt_boolean`, `prompt_enum`, `prompt_array`, `prompt_object`
- All prompts include inline validation and use `schema.default` values as prefills
- Returns `Option<Value>` — `None` means the user cancelled

### `ui/`

#### `Output` (`output.rs`)
- `print_banner()` — ASCII header for interactive mode
- `print_servers_table(servers)` — `comfy-table` grid of discovered servers
- `print_tools_table(tools)` — `comfy-table` grid of tool names, descriptions, parameters
- `print_tool_info(tool)` — detailed single-tool parameter listing
- `print_call_result(result, duration)` — success/error badge, content blocks, execution time
- `print_raw_json(val)` — pretty-printed JSON for `--json` mode

### `commands/`

#### `resolve_server_definition` (`mod.rs`)
Single shared function resolving the `(server_name, cmd_override, config)` → `ServerDefinition` routing for all command handlers. Emits a warning when both server name and `--cmd` are provided.

#### Command handlers
Each handler follows the same pattern:
1. Call `resolve_server_definition`
2. Extract `command` from the definition
3. Connect via `McpClient::connect_stdio`
4. Execute the relevant protocol operation
5. Render via `Output` (or raw JSON if `--json`)
6. Close the client

---

## Extension Points

| Goal | What to do |
|---|---|
| Add a new transport (e.g. HTTP/SSE) | Implement `Transport` in a new `src/mcp/<name>.rs`, add a `connect_<name>` constructor to `McpClient` |
| Add a new CLI command | Add handler in `src/commands/<name>.rs`, register in `commands/mod.rs`, add `Commands` variant in `main.rs` |
| Support a new JSON Schema type | Add a `match` arm in `SchemaForm::prompt_arguments` dispatching to a new `prompt_<type>` function |
| Add a new config source | Add a new discovery step in `ConfigManager::load_all` |
| Change output formatting | All formatting is isolated in `src/ui/output.rs` — no other module needs to change |

---

## Dependency Map

```
main.rs
  └── commands/
        ├── (all handlers)
        │     ├── config/          ← server discovery
        │     ├── mcp/client       ← protocol
        │     ├── prompt/          ← interactive input
        │     └── ui/output        ← display
        └── mod.rs (resolve_server_definition)
              └── config/          ← server resolution

mcp/client
  └── mcp/transport (trait)
        └── mcp/stdio (impl)

mcp/types    ← shared by client, stdio, commands
config/models ← shared by config/mod, commands
```

No circular dependencies. Each layer only imports from layers below it.
