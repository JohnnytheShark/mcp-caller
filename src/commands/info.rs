use super::resolve_server_definition;
use crate::mcp::McpClient;
use crate::ui::Output;
use anyhow::{anyhow, Result};
use colored::Colorize;
use serde_json::json;
use std::path::PathBuf;

pub async fn handle_info(
    server_name: Option<String>,
    tool_name: String,
    cmd_override: Option<String>,
    custom_config: Option<PathBuf>,
    raw_json: bool,
) -> Result<()> {
    let server_def = resolve_server_definition(
        server_name.as_deref(),
        cmd_override.as_deref(),
        custom_config.as_deref(),
    )?;

    let command = server_def
        .command
        .as_deref()
        .ok_or_else(|| anyhow!("No executable command specified for server"))?;

    eprintln!("{} Connecting to MCP server...", "⚡".bright_cyan());

    let mut client = McpClient::connect_stdio(command, &server_def.args, &server_def.env).await?;
    let tools = client.list_tools().await?;
    client.close().await?;

    let tool = tools
        .into_iter()
        .find(|t| t.name == tool_name)
        .ok_or_else(|| anyhow!("Tool '{}' not found on this server", tool_name))?;

    if raw_json {
        Output::print_raw_json(&json!(tool));
    } else {
        Output::print_tool_info(&tool);
    }

    Ok(())
}
