# The Transport Abstraction

**Type**: Explanation | Discusses the design decision behind the `Transport` trait.

---

## The Core Insight

The MCP protocol is independent of how bytes get from client to server. Whether you spawn a child process and write JSON to its `stdin`, or you POST JSON to an HTTP endpoint, or you push messages over a WebSocket — the protocol messages are identical.

`mcp-caller` encodes this insight as a trait:

```rust
// src/mcp/transport.rs
#[async_trait]
pub trait Transport: Send + Sync {
    async fn send_request(&mut self, method: &str, params: Option<Value>) -> Result<Value>;
    async fn send_notification(&mut self, method: &str, params: Option<Value>) -> Result<()>;
    async fn close(&mut self) -> Result<()>;
}
```

`McpClient` depends only on this trait — never on a concrete transport type:

```rust
pub struct McpClient {
    transport: Box<dyn Transport>,
    ...
}
```

---

## What This Means in Practice

When you add a new transport (HTTP, WebSocket, Unix socket), you:

1. Create a new file (e.g. `src/mcp/http.rs`)
2. Implement `Transport` for your new type
3. Add a `connect_http` constructor on `McpClient`

That's it. The protocol logic — `initialize`, `list_tools`, `call_tool` — doesn't change. The schema form engine doesn't change. The output formatters don't change. The command handlers only need a one-line branch to pick the right `connect_*` function.

This is what the S.P.I.K.E.R. methodology calls **Isolation of Nerves**: a change in the transport layer cannot propagate into the business logic layer.

---

## Why `Box<dyn Transport>` Instead of Generics

An alternative design would be:

```rust
pub struct McpClient<T: Transport> {
    transport: T,
}
```

This is zero-cost at runtime (monomorphization), but it makes the `McpClient` type itself transport-aware. Every function that accepts a `McpClient` would need a type parameter. The command handler signatures would become:

```rust
pub async fn handle_call<T: Transport>(client: McpClient<T>, ...) {}
```

For a CLI tool where the transport is selected at runtime based on config, `Box<dyn Transport>` is cleaner — the `McpClient` is the same type regardless of how it was connected. The virtual dispatch overhead is negligible for a tool that makes a handful of RPC calls per session.

---

## The `Drop` Guarantee

`StdioTransport` implements `Drop` to ensure the child process is killed even if the program panics or exits abruptly:

```rust
impl Drop for StdioTransport {
    fn drop(&mut self) {
        let _ = self.child.start_kill();
    }
}
```

This means there are no zombie MCP server processes left running after `mcp-caller` exits — whether cleanly or via an error. The `close()` method is an explicit cooperative close; `Drop` is the safety net.

---

## Why `async_trait`?

Rust's native `async fn` in traits requires every caller to know the concrete type at compile time (due to the `-> impl Future` return type being part of the trait signature). Since `McpClient` uses `Box<dyn Transport>`, we need `dyn`-safe async methods. The `async_trait` crate (a proc-macro) desugars async methods into `Pin<Box<dyn Future + Send>>` returns, which are `dyn`-compatible.

When Rust's async trait stabilization matures, `async_trait` can be removed without changing the trait interface.

---

## See Also

- [Architecture & Module Reference](../reference/architecture.md)
- [How to Add an HTTP Transport](../how-to/add-http-transport.md)
