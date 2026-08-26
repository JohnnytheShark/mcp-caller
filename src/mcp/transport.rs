use anyhow::Result;
use async_trait::async_trait;
use serde_json::Value;

#[async_trait]
pub trait Transport: Send + Sync {
    /// Send a JSON-RPC request and await the response result
    async fn send_request(&mut self, method: &str, params: Option<Value>) -> Result<Value>;

    /// Send a JSON-RPC notification (no response expected)
    async fn send_notification(&mut self, method: &str, params: Option<Value>) -> Result<()>;

    /// Gracefully close the transport connection and cleanup child processes / sockets
    async fn close(&mut self) -> Result<()>;
}
