use super::resolve_server_definition;
use crate::mcp::McpClient;
use crate::prompt::SchemaForm;
use crate::ui::Output;
use anyhow::{anyhow, Context, Result};
use colored::Colorize;
use serde_json::Value;
use std::path::PathBuf;
use std::time::Instant;

pub async fn handle_call(
    server_name: Option<String>,
    tool_name: String,
    args_json: Option<String>,
    cmd_override: Option<String>,
    custom_config: Option<PathBuf>,
    raw_json: bool,
    non_interactive: bool,
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

    let tool = tools
        .into_iter()
        .find(|t| t.name == tool_name)
        .ok_or_else(|| anyhow!("Tool '{}' not found on server", tool_name))?;

    // Determine arguments: prefilled from CLI, or prompt interactively
    let parsed_args = if let Some(raw) = args_json {
        let val: Value = serde_json::from_str(&raw)
            .with_context(|| format!("Invalid JSON passed to --args: '{}'", raw))?;
        Some(val)
    } else {
        None
    };

    let final_args = if non_interactive {
        parsed_args.or(Some(serde_json::json!({})))
    } else if parsed_args.is_some() {
        parsed_args
    } else {
        match SchemaForm::prompt_arguments(&tool, None)? {
            Some(args) => Some(args),
            None => {
                eprintln!("{}", "Execution cancelled.".yellow());
                client.close().await?;
                return Ok(());
            }
        }
    };

    eprintln!("{} Invoking '{}'...", "▶".green().bold(), tool_name.bold());

    let start = Instant::now();
    let result = client.call_tool(&tool_name, final_args).await?;
    let duration = start.elapsed();

    client.close().await?;

    if raw_json {
        Output::print_raw_json(&serde_json::to_value(&result)?);
    } else {
        Output::print_call_result(&result, duration);
    }

    Ok(())
}
