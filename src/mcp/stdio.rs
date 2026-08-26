use super::transport::Transport;
use super::types::{JsonRpcNotification, JsonRpcRequest, JsonRpcResponse};
use anyhow::{anyhow, Context, Result};
use async_trait::async_trait;
use serde_json::Value;
use std::collections::HashMap;
use std::process::Stdio;
use std::sync::atomic::{AtomicU64, Ordering};
use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader, Lines};
use tokio::process::{Child, ChildStdin, ChildStdout, Command};

pub struct StdioTransport {
    child: Child,
    stdin: ChildStdin,
    lines: Lines<BufReader<ChildStdout>>,
    req_id_counter: AtomicU64,
}

impl StdioTransport {
    pub async fn spawn(
        command: &str,
        args: &[String],
        env: &HashMap<String, String>,
    ) -> Result<Self> {
        let mut cmd = if cfg!(windows) && (command.ends_with(".cmd") || command.ends_with(".bat")) {
            let mut c = Command::new("cmd.exe");
            c.arg("/C").arg(command);
            for arg in args {
                c.arg(arg);
            }
            c
        } else {
            let mut c = Command::new(command);
            c.args(args);
            c
        };

        cmd.envs(env);
        cmd.stdin(Stdio::piped());
        cmd.stdout(Stdio::piped());
        cmd.stderr(Stdio::inherit()); // Pass server logs directly to stderr

        let mut child = cmd
            .spawn()
            .with_context(|| format!("Failed to spawn MCP server command: '{}'", command))?;

        let stdin = child
            .stdin
            .take()
            .ok_or_else(|| anyhow!("Failed to open stdin for MCP server process"))?;

        let stdout = child
            .stdout
            .take()
            .ok_or_else(|| anyhow!("Failed to open stdout for MCP server process"))?;

        let reader = BufReader::new(stdout);
        let lines = reader.lines();

        Ok(Self {
            child,
            stdin,
            lines,
            req_id_counter: AtomicU64::new(1),
        })
    }
}

#[async_trait]
impl Transport for StdioTransport {
    async fn send_request(&mut self, method: &str, params: Option<Value>) -> Result<Value> {
        let id = self.req_id_counter.fetch_add(1, Ordering::SeqCst);
        let request = JsonRpcRequest::new(id, method, params);
        let json_line = serde_json::to_string(&request)?;

        // Send line
        self.stdin
            .write_all(json_line.as_bytes())
            .await
            .context("Failed to write request to server stdin")?;
        self.stdin
            .write_all(b"\n")
            .await
            .context("Failed to write newline to server stdin")?;
        self.stdin
            .flush()
            .await
            .context("Failed to flush server stdin")?;

        // Read responses until matching ID is found
        while let Some(line) = self.lines.next_line().await? {
            let trimmed = line.trim();
            if trimmed.is_empty() {
                continue;
            }

            // Attempt to parse line as JSON-RPC response
            if let Ok(response) = serde_json::from_str::<JsonRpcResponse>(trimmed) {
                if response.id == Some(id) {
                    if let Some(err) = response.error {
                        return Err(anyhow!(err));
                    }
                    return Ok(response.result.unwrap_or(Value::Null));
                }
            }
            // If it's a non-JSON line (like a log message or notification), keep listening
        }

        Err(anyhow!(
            "Server closed stdout connection before responding to request ID {}",
            id
        ))
    }

    async fn send_notification(&mut self, method: &str, params: Option<Value>) -> Result<()> {
        let notification = JsonRpcNotification::new(method, params);
        let json_line = serde_json::to_string(&notification)?;

        self.stdin.write_all(json_line.as_bytes()).await?;
        self.stdin.write_all(b"\n").await?;
        self.stdin.flush().await?;

        Ok(())
    }

    async fn close(&mut self) -> Result<()> {
        let _ = self.child.kill().await;
        Ok(())
    }
}

impl Drop for StdioTransport {
    fn drop(&mut self) {
        let _ = self.child.start_kill();
    }
}
