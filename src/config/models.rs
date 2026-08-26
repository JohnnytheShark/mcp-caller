use serde::{Deserialize, Serialize};
use std::collections::HashMap;

/// Configuration file containing MCP servers definitions
#[derive(Debug, Clone, Default, Serialize, Deserialize)]
pub struct McpConfig {
    #[serde(rename = "mcpServers", default)]
    pub mcp_servers: HashMap<String, ServerDefinition>,
}

/// Server configuration entry
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ServerDefinition {
    #[serde(default)]
    pub command: Option<String>,
    #[serde(default)]
    pub args: Vec<String>,
    #[serde(default)]
    pub env: HashMap<String, String>,
    #[serde(default)]
    pub url: Option<String>,
}

impl ServerDefinition {
    /// Parses a POSIX shell-quoted command string (e.g. `"npx -y server arg"`)
    /// into a `ServerDefinition` with a resolved command and argument list.
    ///
    /// # Trust Boundary
    /// This function constructs a definition that will cause the OS to **execute
    /// an arbitrary system command**. Only call this with input sourced from a
    /// trusted configuration file or a direct operator CLI flag (`--cmd`).
    /// Do **not** pass untrusted remote or user-supplied strings here.
    pub fn from_command_str(cmd_line: &str) -> anyhow::Result<Self> {
        let parts = shell_words::split(cmd_line)?;
        if parts.is_empty() {
            anyhow::bail!("Command string cannot be empty");
        }
        let command = parts[0].clone();
        let args = parts[1..].to_vec();

        Ok(Self {
            command: Some(command),
            args,
            env: HashMap::new(),
            url: None,
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // --- ServerDefinition::from_command_str ---

    #[test]
    fn test_parses_simple_command() {
        let def = ServerDefinition::from_command_str("npx server").unwrap();
        assert_eq!(def.command.as_deref(), Some("npx"));
        assert_eq!(def.args, vec!["server"]);
    }

    #[test]
    fn test_parses_command_with_multiple_args() {
        let def = ServerDefinition::from_command_str("npx -y @scope/server /path/to/dir").unwrap();
        assert_eq!(def.command.as_deref(), Some("npx"));
        assert_eq!(def.args, vec!["-y", "@scope/server", "/path/to/dir"]);
    }

    #[test]
    fn test_parses_quoted_path_with_spaces() {
        let def =
            ServerDefinition::from_command_str(r#"npx server "C:\My Projects\data""#).unwrap();
        assert_eq!(def.command.as_deref(), Some("npx"));
        assert_eq!(def.args, vec!["server", r"C:\My Projects\data"]);
    }

    #[test]
    fn test_empty_command_returns_error() {
        let result = ServerDefinition::from_command_str("");
        assert!(result.is_err(), "Empty command string must fail");
    }

    #[test]
    fn test_whitespace_only_returns_error() {
        let result = ServerDefinition::from_command_str("   ");
        assert!(result.is_err(), "Whitespace-only command string must fail");
    }

    // --- McpConfig deserialization ---

    #[test]
    fn test_mcp_config_deserializes_standard_format() {
        let raw = r#"{
            "mcpServers": {
                "my-server": {
                    "command": "python",
                    "args": ["server.py"],
                    "env": { "API_KEY": "secret" }
                }
            }
        }"#;

        let config: McpConfig = serde_json::from_str(raw).unwrap();
        assert!(config.mcp_servers.contains_key("my-server"));
        let server = &config.mcp_servers["my-server"];
        assert_eq!(server.command.as_deref(), Some("python"));
        assert_eq!(server.args, vec!["server.py"]);
        assert_eq!(
            server.env.get("API_KEY").map(|s| s.as_str()),
            Some("secret")
        );
    }

    #[test]
    fn test_mcp_config_defaults_to_empty_on_missing_servers_key() {
        let raw = r#"{}"#;
        let config: McpConfig = serde_json::from_str(raw).unwrap();
        assert!(config.mcp_servers.is_empty());
    }

    #[test]
    fn test_server_definition_optional_fields_default() {
        let raw = r#"{"command": "python"}"#;
        let def: ServerDefinition = serde_json::from_str(raw).unwrap();
        assert!(def.args.is_empty());
        assert!(def.env.is_empty());
        assert!(def.url.is_none());
    }
}
