use super::stdio::StdioTransport;
use super::transport::Transport;
use super::types::{
    CallToolParams, CallToolResult, Implementation, InitializeParams, InitializeResult,
    ListToolsResult, Tool,
};
use anyhow::{Context, Result};
use serde_json::{json, Value};
use std::collections::HashMap;

pub struct McpClient {
    transport: Box<dyn Transport>,
    server_info: Option<Implementation>,
    instructions: Option<String>,
}

impl McpClient {
    /// Create a new MCP client over StdioTransport and perform handshake
    pub async fn connect_stdio(
        command: &str,
        args: &[String],
        env: &HashMap<String, String>,
    ) -> Result<Self> {
        let transport = StdioTransport::spawn(command, args, env).await?;
        let mut client = Self {
            transport: Box::new(transport),
            server_info: None,
            instructions: None,
        };

        client.initialize().await?;
        Ok(client)
    }

    /// Perform protocol initialization handshake
    pub async fn initialize(&mut self) -> Result<InitializeResult> {
        let init_params = InitializeParams {
            protocol_version: "2024-11-05".to_string(),
            capabilities: json!({}),
            client_info: Implementation {
                name: "mcp-caller".to_string(),
                version: env!("CARGO_PKG_VERSION").to_string(),
            },
        };

        let result_val = self
            .transport
            .send_request("initialize", Some(serde_json::to_value(init_params)?))
            .await
            .context("Failed during MCP 'initialize' request")?;

        let init_result: InitializeResult = serde_json::from_value(result_val)
            .context("Failed to deserialize 'initialize' response")?;

        self.server_info = init_result.server_info.clone();
        self.instructions = init_result.instructions.clone();

        // Send initialized notification
        self.transport
            .send_notification("notifications/initialized", None)
            .await
            .context("Failed to send 'notifications/initialized'")?;

        Ok(init_result)
    }

    /// List all available tools exposed by the server
    pub async fn list_tools(&mut self) -> Result<Vec<Tool>> {
        let mut all_tools = Vec::new();
        let mut cursor: Option<String> = None;

        loop {
            let params = cursor
                .as_ref()
                .map(|c| json!({ "cursor": c }))
                .unwrap_or(json!({}));

            let result_val = self
                .transport
                .send_request("tools/list", Some(params))
                .await
                .context("Failed during 'tools/list' request")?;

            let list_res: ListToolsResult = serde_json::from_value(result_val)
                .context("Failed to deserialize 'tools/list' response")?;

            all_tools.extend(list_res.tools);

            if let Some(next) = list_res.next_cursor {
                if next.is_empty() {
                    break;
                }
                cursor = Some(next);
            } else {
                break;
            }
        }

        Ok(all_tools)
    }

    /// Invoke a specific tool by name with arguments
    pub async fn call_tool(
        &mut self,
        name: &str,
        arguments: Option<Value>,
    ) -> Result<CallToolResult> {
        let params = CallToolParams {
            name: name.to_string(),
            arguments,
        };

        let result_val = self
            .transport
            .send_request("tools/call", Some(serde_json::to_value(params)?))
            .await
            .with_context(|| format!("Failed during 'tools/call' for tool '{}'", name))?;

        let call_res: CallToolResult = serde_json::from_value(result_val)
            .context("Failed to deserialize 'tools/call' response")?;

        Ok(call_res)
    }

    pub fn server_info(&self) -> Option<&Implementation> {
        self.server_info.as_ref()
    }

    pub fn instructions(&self) -> Option<&str> {
        self.instructions.as_deref()
    }

    pub async fn close(&mut self) -> Result<()> {
        self.transport.close().await
    }
}
