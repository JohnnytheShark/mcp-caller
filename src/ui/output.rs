use crate::mcp::types::{CallToolResult, ContentBlock, Tool};
use colored::Colorize;
use comfy_table::modifiers::UTF8_ROUND_CORNERS;
use comfy_table::presets::UTF8_FULL;
use comfy_table::{Cell, Color, Row, Table};
use serde_json::Value;
use std::path::PathBuf;
use std::time::Duration;

pub struct Output;

impl Output {
    pub fn print_banner() {
        println!(
            "{}",
            "╔═══════════════════════════════════════════════════╗".bright_cyan()
        );
        println!(
            "{}",
            "║        ⚡ MCP-Caller  •  The CLI for MCP         ║"
                .bold()
                .bright_cyan()
        );
        println!(
            "{}",
            "║   Direct Tool Discovery, Inspection & Invocation  ║".dimmed()
        );
        println!(
            "{}",
            "╚═══════════════════════════════════════════════════╝".bright_cyan()
        );
        println!();
    }

    pub fn print_servers_table(servers: &[(&String, &crate::config::ServerDefinition, &PathBuf)]) {
        if servers.is_empty() {
            println!("{}", "No MCP servers configured or discovered.".yellow());
            println!(
                "{}",
                "Tip: Add servers to mcp.json or pass --cmd \"<command>\"".dimmed()
            );
            return;
        }

        let mut table = Table::new();
        table.load_preset(UTF8_FULL);
        table.apply_modifier(UTF8_ROUND_CORNERS);
        table.set_header(vec![
            Cell::new("Server Name").fg(Color::Cyan),
            Cell::new("Command / URL").fg(Color::Cyan),
            Cell::new("Config Source").fg(Color::Cyan),
        ]);

        for (name, def, path) in servers {
            let cmd_str = if let Some(cmd) = &def.command {
                let mut full = cmd.clone();
                if !def.args.is_empty() {
                    full.push(' ');
                    full.push_str(&def.args.join(" "));
                }
                full
            } else if let Some(url) = &def.url {
                url.clone()
            } else {
                "-".to_string()
            };

            table.add_row(Row::from(vec![
                Cell::new(name).fg(Color::Green),
                Cell::new(cmd_str),
                Cell::new(path.display().to_string()).fg(Color::DarkGrey),
            ]));
        }

        println!("{table}");
    }

    pub fn print_tools_table(tools: &[Tool]) {
        if tools.is_empty() {
            println!("{}", "Server does not expose any tools.".yellow());
            return;
        }

        let mut table = Table::new();
        table.load_preset(UTF8_FULL);
        table.apply_modifier(UTF8_ROUND_CORNERS);
        table.set_header(vec![
            Cell::new("Tool Name").fg(Color::Cyan),
            Cell::new("Description").fg(Color::Cyan),
            Cell::new("Parameters").fg(Color::Cyan),
        ]);

        for tool in tools {
            let desc = tool
                .description
                .as_deref()
                .unwrap_or("-")
                .replace('\n', " ");

            let mut params_desc = Vec::new();
            if let Some(props) = &tool.input_schema.properties {
                let req_set: std::collections::HashSet<_> = tool
                    .input_schema
                    .required
                    .as_ref()
                    .map(|r| r.iter().cloned().collect())
                    .unwrap_or_default();

                for (name, prop) in props {
                    let req_str = if req_set.contains(name) { "*" } else { "" };
                    let type_str = prop.prop_type.as_deref().unwrap_or("any");
                    params_desc.push(format!("{}{}: {}", name, req_str, type_str));
                }
            }

            let params_text = if params_desc.is_empty() {
                "none".dimmed().to_string()
            } else {
                params_desc.join(", ")
            };

            table.add_row(Row::from(vec![
                Cell::new(&tool.name).fg(Color::Green),
                Cell::new(desc),
                Cell::new(params_text),
            ]));
        }

        println!("{table}");
        println!("{}", "(* indicates required parameter)".dimmed());
    }

    pub fn print_tool_info(tool: &Tool) {
        println!("{}", format!("Tool: {}", tool.name).bold().green());
        if let Some(desc) = &tool.description {
            println!("{}", desc.cyan());
        }
        println!();

        println!("{}", "Input Schema Parameters:".bold());
        if let Some(props) = &tool.input_schema.properties {
            if props.is_empty() {
                println!("  {}", "No parameters required.".dimmed());
            } else {
                let req_set: std::collections::HashSet<_> = tool
                    .input_schema
                    .required
                    .as_ref()
                    .map(|r| r.iter().cloned().collect())
                    .unwrap_or_default();

                for (name, prop) in props {
                    let req = if req_set.contains(name) {
                        "[REQUIRED]".red().bold().to_string()
                    } else {
                        "[optional]".dimmed().to_string()
                    };

                    let ptype = prop
                        .prop_type
                        .as_deref()
                        .map(|t| format!("({})", t).cyan().to_string())
                        .unwrap_or_default();

                    println!("  • {} {} {}", name.bold(), ptype, req);
                    if let Some(d) = &prop.description {
                        println!("      Description: {}", d);
                    }
                    if let Some(def) = &prop.default {
                        println!("      Default:     {}", def);
                    }
                    if let Some(enums) = &prop.enum_values {
                        let enum_strs: Vec<String> = enums.iter().map(|v| v.to_string()).collect();
                        println!("      Enum:        [{}]", enum_strs.join(", "));
                    }
                }
            }
        } else {
            println!("  {}", "No parameters required.".dimmed());
        }
        println!();
    }

    pub fn print_call_result(result: &CallToolResult, duration: Duration) {
        let is_err = result.is_error.unwrap_or(false);
        let badge = if is_err {
            "✖ FAILED".bold().on_red().white()
        } else {
            "✔ SUCCESS".bold().on_green().white()
        };

        println!(
            "\n{} {} ({:.2?})",
            badge,
            if is_err {
                "Tool returned an error"
            } else {
                "Tool execution finished"
            },
            duration
        );
        println!("{}", "─".repeat(60).dimmed());

        for block in &result.content {
            match block {
                ContentBlock::Text { text } => {
                    // Check if JSON
                    if let Ok(val) = serde_json::from_str::<Value>(text) {
                        if let Ok(pretty) = serde_json::to_string_pretty(&val) {
                            println!("{}", pretty);
                            continue;
                        }
                    }
                    println!("{}", text);
                }
                ContentBlock::Image { mime_type, data } => {
                    println!(
                        "{}",
                        format!("[Image: {}, {} base64 bytes]", mime_type, data.len()).yellow()
                    );
                }
                ContentBlock::Resource { resource } => {
                    println!(
                        "{}",
                        format!(
                            "[Resource: {}]",
                            serde_json::to_string_pretty(resource).unwrap_or_default()
                        )
                        .magenta()
                    );
                }
                ContentBlock::Unknown => {
                    println!("{}", "[Unknown content block]".dimmed());
                }
            }
        }
        println!("{}", "─".repeat(60).dimmed());
    }

    pub fn print_raw_json(val: &Value) {
        println!("{}", serde_json::to_string_pretty(val).unwrap_or_default());
    }
}
