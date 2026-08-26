# How to Add an HTTP Transport

**Goal**: Extend `mcp-caller` to connect to MCP servers that communicate over HTTP/SSE rather than stdio.

> **Note**: The HTTP transport is **not bundled** in v0.1.0. This guide shows you exactly where and how to implement it — the architecture is designed for this extension.

---

## Background

Some MCP servers run as long-lived HTTP services rather than short-lived processes. They expose a Server-Sent Events (SSE) endpoint for the server→client stream and accept JSON-RPC POST requests from the client. This is the `http` transport in the MCP spec.

The current `mcp-caller` only has a `stdio` transport. Adding HTTP requires:
1. Implementing the `Transport` trait in a new `src/mcp/http.rs` file
2. Exposing a `connect_http` constructor on `McpClient`
3. Adding `--url` routing in the command handlers

---

## Step 1 — Add Dependencies

Add `reqwest` and `futures` back to `Cargo.toml`:

```toml
# Cargo.toml
reqwest = { version = "0.12", features = ["json", "stream"] }
futures = "0.3"
```

---

## Step 2 — Implement `HttpTransport`

Create `src/mcp/http.rs`:

```rust
use super::transport::Transport;
use super::types::{JsonRpcNotification, JsonRpcRequest, JsonRpcResponse};
use anyhow::{anyhow, Context, Result};
use async_trait::async_trait;
use reqwest::Client;
use serde_json::Value;
use std::sync::atomic::{AtomicU64, Ordering};

pub struct HttpTransport {
    client: Client,
    base_url: String,
    req_id_counter: AtomicU64,
}

impl HttpTransport {
    pub async fn connect(base_url: impl Into<String>) -> Result<Self> {
        let base_url = base_url.into();
        let client = Client::new();

        // Verify the server is reachable
        client
            .get(format!("{}/health", base_url))
            .send()
            .await
            .with_context(|| format!("Cannot reach MCP server at {}", base_url))?;

        Ok(Self {
            client,
            base_url,
            req_id_counter: AtomicU64::new(1),
        })
    }
}

#[async_trait]
impl Transport for HttpTransport {
    async fn send_request(&mut self, method: &str, params: Option<Value>) -> Result<Value> {
        let id = self.req_id_counter.fetch_add(1, Ordering::SeqCst);
        let request = JsonRpcRequest::new(id, method, params);

        let response = self
            .client
            .post(format!("{}/rpc", self.base_url))
            .json(&request)
            .send()
            .await
            .context("HTTP request to MCP server failed")?;

        let rpc_response: JsonRpcResponse = response
            .json()
            .await
            .context("Failed to parse MCP server response")?;

        if let Some(err) = rpc_response.error {
            return Err(anyhow!(err));
        }

        Ok(rpc_response.result.unwrap_or(Value::Null))
    }

    async fn send_notification(&mut self, method: &str, params: Option<Value>) -> Result<()> {
        let notification = JsonRpcNotification::new(method, params);
        self.client
            .post(format!("{}/rpc", self.base_url))
            .json(&notification)
            .send()
            .await
            .context("HTTP notification to MCP server failed")?;
        Ok(())
    }

    async fn close(&mut self) -> Result<()> {
        // HTTP is stateless — nothing to close
        Ok(())
    }
}
```

---

## Step 3 — Expose `connect_http` on `McpClient`

Add to `src/mcp/client.rs`:

```rust
use super::http::HttpTransport;

impl McpClient {
    /// Create a new MCP client over an HTTP transport and perform handshake.
    ///
    /// `base_url` should be the server's root URL, e.g. `"http://localhost:8080"`.
    pub async fn connect_http(base_url: &str) -> Result<Self> {
        let transport = HttpTransport::connect(base_url).await?;
        let mut client = Self {
            transport: Box::new(transport),
            server_info: None,
            instructions: None,
        };
        client.initialize().await?;
        Ok(client)
    }
}
```

---

## Step 4 — Add `url` Routing to `resolve_server_definition`

In `src/commands/mod.rs`, update `resolve_server_definition` to handle the case where a `ServerDefinition` has `url` set but no `command`.

Then in each command handler, check `server_def.url` and call `McpClient::connect_http` instead of `McpClient::connect_stdio`:

```rust
let mut client = if let Some(url) = &server_def.url {
    McpClient::connect_http(url).await?
} else {
    let command = server_def.command.as_deref()
        .ok_or_else(|| anyhow!("No command or URL specified for server"))?;
    McpClient::connect_stdio(command, &server_def.args, &server_def.env).await?
};
```

---

## Step 5 — Update `mcp/mod.rs`

Expose the new module:

```rust
// src/mcp/mod.rs
pub mod http;
```

---

## Step 6 — Register `http.rs` in your module

No changes needed to `main.rs` or the `Cli` struct — the `--cmd` flag already accepts arbitrary strings, and config files can already have `"url"` fields.

Users can now configure HTTP servers:

```json
{
  "mcpServers": {
    "remote-server": {
      "url": "http://192.168.1.100:8080"
    }
  }
}
```

---

## See Also

- [The Transport Abstraction](../explanation/transport-abstraction.md) — understand why this extension requires no changes to the protocol layer
- [Architecture Reference](../reference/architecture.md) — module map
