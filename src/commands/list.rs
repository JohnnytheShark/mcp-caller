use super::resolve_server_definition;
use crate::mcp::McpClient;
use crate::ui::Output;
use anyhow::{anyhow, Result};
use colored::Colorize;
use serde_json::json;
use std::path::PathBuf;

pub async fn handle_list(
    server_name: Option<String>,
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

    if raw_json {
        Output::print_raw_json(&json!(tools));
    } else {
        Output::print_tools_table(&tools);
    }

    Ok(())
}
