pub mod call;
pub mod info;
pub mod interactive;
pub mod list;
pub mod servers;

pub use call::handle_call;
pub use info::handle_info;
pub use interactive::handle_interactive;
pub use list::handle_list;
pub use servers::handle_servers;

use crate::config::{ConfigManager, ServerDefinition};
use anyhow::{anyhow, Result};
use colored::Colorize;
use std::path::Path;

/// Resolves the target `ServerDefinition` from the two mutually-exclusive
/// routing options: a named server from config, or an ad-hoc `--cmd` string.
///
/// Resolution priority: `--cmd` always wins over `server_name`.
/// If both are provided, a warning is printed and `--cmd` is used.
pub fn resolve_server_definition(
    server_name: Option<&str>,
    cmd_override: Option<&str>,
    custom_config: Option<&Path>,
) -> Result<ServerDefinition> {
    match (server_name, cmd_override) {
        // --cmd wins; warn if a server name was also provided (intent ambiguity)
        (Some(_), Some(cmd)) => {
            eprintln!(
                "{} Both a server name and --cmd were provided. --cmd takes precedence.",
                "⚠ Warning:".yellow().bold()
            );
            ServerDefinition::from_command_str(cmd)
        }

        // Pure --cmd path
        (None, Some(cmd)) => ServerDefinition::from_command_str(cmd),

        // Named server from config
        (Some(name), None) => {
            let manager = ConfigManager::load_all(custom_config)?;
            manager
                .get_server(name)
                .cloned()
                .ok_or_else(|| anyhow!("Server '{}' not found in configurations", name))
        }

        // Neither provided — fail with clear guidance
        (None, None) => {
            anyhow::bail!("Please specify a server name or use --cmd \"<command>\"")
        }
    }
}
