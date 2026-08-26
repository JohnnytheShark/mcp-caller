use crate::config::ConfigManager;
use crate::ui::Output;
use anyhow::Result;
use std::path::PathBuf;

pub fn handle_servers(custom_config: Option<PathBuf>) -> Result<()> {
    let manager = ConfigManager::load_all(custom_config.as_deref())?;
    let servers = manager.list_servers();
    Output::print_servers_table(&servers);
    Ok(())
}
