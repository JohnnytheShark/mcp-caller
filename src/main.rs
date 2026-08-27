mod commands;
mod config;
mod mcp;
mod prompt;
mod ui;

use clap::{Parser, Subcommand};
use colored::Colorize;
use std::path::PathBuf;

#[derive(Parser, Debug)]
#[command(
    name = "mcp-caller",
    author,
    version,
    about = "A lightweight CLI tool (curl for MCP) to discover, inspect, and invoke MCP server tools directly with interactive schema prompts."
)]
struct Cli {
    /// Custom configuration file path (e.g. ./mcp.json)
    #[arg(short, long, global = true)]
    config: Option<PathBuf>,

    /// Ad-hoc MCP server command to run (e.g. "npx -y @modelcontextprotocol/server-filesystem C:\\")
    #[arg(long, global = true)]
    cmd: Option<String>,

    /// Output results in raw JSON format (ideal for piping or scripting)
    #[arg(short = 'j', long, global = true)]
    json: bool,

    #[command(subcommand)]
    command: Option<Commands>,
}

#[derive(Subcommand, Debug)]
enum Commands {
    /// Launch the interactive TUI wizard (default if no subcommand provided)
    Interactive {
        /// Optional server name to connect directly to
        server: Option<String>,
    },

    /// List all discovered and configured MCP servers
    Servers,

    /// List all tools exposed by an MCP server
    List {
        /// Server name from config (optional if --cmd is provided)
        server: Option<String>,
    },

    /// Inspect the JSON Schema and parameter requirements of a specific tool
    Info {
        /// Server name from config (optional if --cmd is provided)
        server: Option<String>,

        /// Name of the tool to inspect
        #[arg(short, long)]
        tool: String,
    },

    /// Call an MCP tool with arguments (or prompt for them interactively)
    Call {
        /// Server name from config (optional if --cmd is provided)
        server: Option<String>,

        /// Name of the tool to invoke
        #[arg(short, long)]
        tool: String,

        /// JSON string of arguments to pass to the tool (e.g. '{"query":"hello"}')
        #[arg(short, long)]
        args: Option<String>,

        /// Disable interactive prompts and fail if required arguments are missing
        #[arg(long)]
        non_interactive: bool,
    },
}

#[tokio::main]
async fn main() {
    let cli = Cli::parse();

    let result = match cli.command {
        None => {
            // Default: run interactive mode
            commands::handle_interactive(None, cli.cmd, cli.config).await
        }
        Some(Commands::Interactive { server }) => {
            commands::handle_interactive(server, cli.cmd, cli.config).await
        }
        Some(Commands::Servers) => commands::handle_servers(cli.config),
        Some(Commands::List { server }) => {
            commands::handle_list(server, cli.cmd, cli.config, cli.json).await
        }
        Some(Commands::Info { server, tool }) => {
            commands::handle_info(server, tool, cli.cmd, cli.config, cli.json).await
        }
        Some(Commands::Call {
            server,
            tool,
            args,
            non_interactive,
        }) => {
            commands::handle_call(
                server,
                tool,
                args,
                cli.cmd,
                cli.config,
                cli.json,
                non_interactive,
            )
            .await
        }
    };

    if let Err(err) = result {
        eprintln!("\n{} {:#}", "Error:".red().bold(), err);
        std::process::exit(1);
    }
}
