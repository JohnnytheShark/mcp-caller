use crate::config::{ConfigManager, ServerDefinition};
use crate::mcp::types::Tool;
use crate::mcp::McpClient;
use crate::prompt::SchemaForm;
use crate::ui::Output;
use anyhow::{anyhow, Result};
use colored::Colorize;
use inquire::{InquireError, Select, Text};
use std::path::PathBuf;
use std::time::Instant;

// Sentinel strings used in Select menus — kept as constants to avoid
// accidental mismatches between construction and comparison sites.
const OPT_CUSTOM_CMD: &str = "➜ Enter custom command...";
const OPT_EXIT: &str = "✖ Exit";
const OPT_BACK: &str = "⬅ Back to server list";

pub async fn handle_interactive(
    initial_server: Option<String>,
    cmd_override: Option<String>,
    custom_config: Option<PathBuf>,
) -> Result<()> {
    Output::print_banner();

    let manager = ConfigManager::load_all(custom_config.as_deref())?;

    // Fast-path: --cmd bypasses the menu entirely
    if let Some(cmd) = cmd_override {
        let server_def = ServerDefinition::from_command_str(&cmd)?;
        run_server_session("Ad-hoc Server".to_string(), server_def).await?;
        return Ok(());
    }

    // Fast-path: named server jumps straight to session
    if let Some(name) = initial_server {
        if let Some(server_def) = manager.get_server(&name) {
            run_server_session(name, server_def.clone()).await?;
            return Ok(());
        } else {
            eprintln!(
                "{}",
                format!("Server '{}' not found in configs.", name).yellow()
            );
        }
    }

    // Main server selection loop
    loop {
        let servers = manager.list_servers();

        // Build (display_label, name, def) tuples so we never need to
        // reverse-parse the display string to recover the original name.
        // This is the fix for the whitespace-split brittleness.
        let server_entries: Vec<(String, &str, &ServerDefinition)> = servers
            .iter()
            .map(|(name, def, _)| {
                let cmd_summary = def.command.as_deref().unwrap_or("URL");
                (format!("{} ({})", name, cmd_summary), name.as_str(), *def)
            })
            .collect();

        let mut choices: Vec<String> = server_entries
            .iter()
            .map(|(label, _, _)| label.clone())
            .collect();
        choices.push(OPT_CUSTOM_CMD.to_string());
        choices.push(OPT_EXIT.to_string());

        let selection = match Select::new("Select an MCP Server to connect:", choices).prompt() {
            Ok(choice) => choice,
            Err(InquireError::OperationCanceled) | Err(InquireError::OperationInterrupted) => {
                println!("{}", "Exiting...".dimmed());
                break;
            }
            Err(e) => return Err(anyhow!(e)),
        };

        if selection == OPT_EXIT {
            println!("{}", "Goodbye!".bright_cyan());
            break;
        }

        if selection == OPT_CUSTOM_CMD {
            let cmd_input = match Text::new(
                "Enter MCP server command (e.g. 'npx -y @modelcontextprotocol/server-filesystem C:\\'):",
            )
            .prompt()
            {
                Ok(input) => input,
                Err(_) => continue,
            };

            if cmd_input.trim().is_empty() {
                continue;
            }

            match ServerDefinition::from_command_str(&cmd_input) {
                Ok(def) => {
                    let _ = run_server_session("Custom Server".to_string(), def).await;
                }
                Err(e) => {
                    eprintln!("{}", format!("Error parsing command: {}", e).red());
                }
            }
            continue;
        }

        // Look up the selected entry by matching the label — no whitespace splitting.
        if let Some((_, name, def)) = server_entries
            .iter()
            .find(|(label, _, _)| *label == selection)
        {
            let _ = run_server_session(name.to_string(), (*def).clone()).await;
        }
    }

    Ok(())
}

async fn run_server_session(name: String, def: ServerDefinition) -> Result<()> {
    let command = def
        .command
        .as_deref()
        .ok_or_else(|| anyhow!("No executable command specified"))?;

    println!(
        "\n{} Connecting to '{}' ({})...",
        "⚡".bright_cyan(),
        name.bold().green(),
        command.dimmed()
    );

    let mut client = match McpClient::connect_stdio(command, &def.args, &def.env).await {
        Ok(c) => c,
        Err(e) => {
            eprintln!("{}", format!("Connection failed: {}", e).red().bold());
            return Ok(());
        }
    };

    let info_str = client
        .server_info()
        .map(|i| format!(" [{} v{}]", i.name, i.version))
        .unwrap_or_default();
    println!(
        "{} Connected successfully!{}",
        "✔".green(),
        info_str.dimmed()
    );
    if let Some(inst) = client.instructions() {
        println!("{}", inst.dimmed());
    }

    let tools = match client.list_tools().await {
        Ok(t) => t,
        Err(e) => {
            eprintln!("{}", format!("Failed to list tools: {}", e).red());
            let _ = client.close().await;
            return Ok(());
        }
    };

    if tools.is_empty() {
        println!("{}", "No tools found on this server.".yellow());
        let _ = client.close().await;
        return Ok(());
    }

    run_tool_loop(&mut client, &tools).await?;

    let _ = client.close().await;
    Ok(())
}

/// Runs the inner tool selection and execution loop for an active server session.
/// Extracted to keep `run_server_session` focused on connection lifecycle only.
async fn run_tool_loop(client: &mut McpClient, tools: &[Tool]) -> Result<()> {
    loop {
        // Build (display_label, &Tool) tuples — never split display strings to recover names.
        let tool_entries: Vec<(String, &Tool)> = tools
            .iter()
            .map(|t| {
                let first_line = t
                    .description
                    .as_deref()
                    .unwrap_or("")
                    .lines()
                    .next()
                    .unwrap_or("");
                let label = if first_line.is_empty() {
                    t.name.clone()
                } else {
                    format!("{} - {}", t.name, first_line)
                };
                (label, t)
            })
            .collect();

        let mut choices: Vec<String> = tool_entries
            .iter()
            .map(|(label, _)| label.clone())
            .collect();
        choices.push(OPT_BACK.to_string());
        choices.push(OPT_EXIT.to_string());

        let tool_choice = match Select::new("Select a tool to execute:", choices).prompt() {
            Ok(choice) => choice,
            Err(_) => break,
        };

        if tool_choice == OPT_EXIT || tool_choice == OPT_BACK {
            break;
        }

        // Look up by label — handles tool names with spaces correctly.
        let selected_tool = match tool_entries.iter().find(|(label, _)| *label == tool_choice) {
            Some((_, t)) => *t,
            None => continue,
        };

        let args = match SchemaForm::prompt_arguments(selected_tool, None)? {
            Some(a) => a,
            None => {
                println!("{}", "Skipped.".dimmed());
                continue;
            }
        };

        println!(
            "\n{} Executing '{}'...",
            "▶".green().bold(),
            selected_tool.name.bold()
        );

        let start = Instant::now();
        match client.call_tool(&selected_tool.name, Some(args)).await {
            Ok(res) => {
                Output::print_call_result(&res, start.elapsed());
            }
            Err(e) => {
                eprintln!("{}", format!("Error executing tool: {}", e).red().bold());
            }
        }

        println!();
        let next_action = Select::new(
            "Next action:",
            vec![
                "Run another tool on this server",
                "Re-run this tool",
                "Back to server list",
            ],
        )
        .prompt();

        match next_action {
            Ok("Run another tool on this server") => continue,
            Ok("Re-run this tool") => {
                let rerun_args = match SchemaForm::prompt_arguments(selected_tool, None)? {
                    Some(a) => a,
                    None => continue,
                };
                let s = Instant::now();
                if let Ok(res) = client
                    .call_tool(&selected_tool.name, Some(rerun_args))
                    .await
                {
                    Output::print_call_result(&res, s.elapsed());
                }
            }
            _ => break,
        }
    }

    Ok(())
}
