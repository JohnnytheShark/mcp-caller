pub mod models;

use anyhow::{Context, Result};
use directories::{BaseDirs, UserDirs};
pub use models::*;
use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};

pub struct ConfigManager {
    discovered_servers: HashMap<String, (ServerDefinition, PathBuf)>,
}

impl ConfigManager {
    /// Load and merge servers from all discovered config locations
    pub fn load_all(custom_config: Option<&Path>) -> Result<Self> {
        let mut discovered = HashMap::new();

        // 1. Check custom path if provided
        if let Some(path) = custom_config {
            if path.exists() {
                Self::merge_from_file(path, &mut discovered)?;
            } else {
                anyhow::bail!("Config file not found at: {}", path.display());
            }
        }

        // 2. Check local directory configurations
        let local_candidates = [
            PathBuf::from("mcp.json"),
            PathBuf::from(".mcp.json"),
            PathBuf::from(".mcprc.json"),
        ];
        for candidate in &local_candidates {
            if candidate.exists() {
                let _ = Self::merge_from_file(candidate, &mut discovered);
            }
        }

        // 3. Check Claude Desktop Config
        if let Some(claude_path) = Self::get_claude_config_path() {
            if claude_path.exists() {
                let _ = Self::merge_from_file(&claude_path, &mut discovered);
            }
        }

        // 4. Check Antigravity / Gemini config
        if let Some(gemini_path) = Self::get_gemini_config_path() {
            if gemini_path.exists() {
                let _ = Self::merge_from_file(&gemini_path, &mut discovered);
            }
        }

        Ok(Self {
            discovered_servers: discovered,
        })
    }

    fn merge_from_file(
        path: &Path,
        map: &mut HashMap<String, (ServerDefinition, PathBuf)>,
    ) -> Result<()> {
        let content = fs::read_to_string(path)
            .with_context(|| format!("Failed to read config from {}", path.display()))?;

        // Attempt parsing as standard McpConfig
        if let Ok(cfg) = serde_json::from_str::<McpConfig>(&content) {
            for (name, srv) in cfg.mcp_servers {
                map.entry(name).or_insert_with(|| (srv, path.to_path_buf()));
            }
            return Ok(());
        }

        // Also attempt parsing if root object is directly the servers map
        if let Ok(servers) = serde_json::from_str::<HashMap<String, ServerDefinition>>(&content) {
            for (name, srv) in servers {
                map.entry(name).or_insert_with(|| (srv, path.to_path_buf()));
            }
            return Ok(());
        }

        Ok(())
    }

    pub fn get_claude_config_path() -> Option<PathBuf> {
        if cfg!(windows) {
            BaseDirs::new().map(|dirs| {
                dirs.config_dir()
                    .join("Claude")
                    .join("claude_desktop_config.json")
            })
        } else if cfg!(target_os = "macos") {
            UserDirs::new().map(|dirs| {
                dirs.home_dir()
                    .join("Library")
                    .join("Application Support")
                    .join("Claude")
                    .join("claude_desktop_config.json")
            })
        } else {
            BaseDirs::new().map(|dirs| {
                dirs.config_dir()
                    .join("Claude")
                    .join("claude_desktop_config.json")
            })
        }
    }

    pub fn get_gemini_config_path() -> Option<PathBuf> {
        UserDirs::new().map(|dirs| {
            dirs.home_dir()
                .join(".gemini")
                .join("antigravity-cli")
                .join("mcp_config.json")
        })
    }

    pub fn get_server(&self, name: &str) -> Option<&ServerDefinition> {
        self.discovered_servers.get(name).map(|(s, _)| s)
    }

    pub fn list_servers(&self) -> Vec<(&String, &ServerDefinition, &PathBuf)> {
        let mut list: Vec<_> = self
            .discovered_servers
            .iter()
            .map(|(k, (v, p))| (k, v, p))
            .collect();
        list.sort_by_key(|(k, _, _)| (*k).clone());
        list
    }
}
