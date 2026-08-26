use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::collections::HashMap;

/// Standard JSON-RPC 2.0 Request
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JsonRpcRequest {
    pub jsonrpc: String,
    pub id: u64,
    pub method: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub params: Option<Value>,
}

impl JsonRpcRequest {
    pub fn new(id: u64, method: impl Into<String>, params: Option<Value>) -> Self {
        Self {
            jsonrpc: "2.0".to_string(),
            id,
            method: method.into(),
            params,
        }
    }
}

/// Standard JSON-RPC 2.0 Notification (no id, expects no response)
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JsonRpcNotification {
    pub jsonrpc: String,
    pub method: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub params: Option<Value>,
}

impl JsonRpcNotification {
    pub fn new(method: impl Into<String>, params: Option<Value>) -> Self {
        Self {
            jsonrpc: "2.0".to_string(),
            method: method.into(),
            params,
        }
    }
}

/// Standard JSON-RPC 2.0 Response
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JsonRpcResponse {
    pub jsonrpc: String,
    #[serde(default)]
    pub id: Option<u64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub result: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub error: Option<JsonRpcError>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JsonRpcError {
    pub code: i64,
    pub message: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub data: Option<Value>,
}

impl std::fmt::Display for JsonRpcError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "JSON-RPC Error {}: {}", self.code, self.message)
    }
}

impl std::error::Error for JsonRpcError {}

/// MCP Client Information
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Implementation {
    pub name: String,
    pub version: String,
}

/// MCP Initialize Request Parameters
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializeParams {
    pub protocol_version: String,
    pub capabilities: Value,
    pub client_info: Implementation,
}

/// MCP Initialize Result
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializeResult {
    pub protocol_version: String,
    #[serde(default)]
    pub capabilities: Value,
    #[serde(default)]
    pub server_info: Option<Implementation>,
    #[serde(default)]
    pub instructions: Option<String>,
}

/// MCP Tool Definition
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Tool {
    pub name: String,
    #[serde(default)]
    pub description: Option<String>,
    #[serde(default)]
    pub input_schema: ToolInputSchema,
}

/// JSON Schema for tool input arguments
#[derive(Debug, Clone, Default, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ToolInputSchema {
    #[serde(rename = "type", default = "default_object_type")]
    pub schema_type: String,
    #[serde(default)]
    pub properties: Option<HashMap<String, PropertySchema>>,
    #[serde(default)]
    pub required: Option<Vec<String>>,
    #[serde(default)]
    pub description: Option<String>,
}

fn default_object_type() -> String {
    "object".to_string()
}

/// JSON Schema Property Definition
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PropertySchema {
    #[serde(rename = "type", default)]
    pub prop_type: Option<String>,
    #[serde(default)]
    pub description: Option<String>,
    #[serde(rename = "enum", default)]
    pub enum_values: Option<Vec<Value>>,
    #[serde(default)]
    pub default: Option<Value>,
    #[serde(default)]
    pub items: Option<Box<PropertySchema>>,
}

/// Result of `tools/list`
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListToolsResult {
    pub tools: Vec<Tool>,
    #[serde(rename = "nextCursor", default)]
    pub next_cursor: Option<String>,
}

/// MCP Tool Call Request Parameters
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CallToolParams {
    pub name: String,
    #[serde(default)]
    pub arguments: Option<Value>,
}

/// Result of `tools/call`
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CallToolResult {
    pub content: Vec<ContentBlock>,
    #[serde(default)]
    pub is_error: Option<bool>,
}

/// MCP Content Block
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "camelCase")]
pub enum ContentBlock {
    #[serde(rename = "text")]
    Text { text: String },
    #[serde(rename = "image")]
    Image {
        data: String,
        #[serde(rename = "mimeType")]
        mime_type: String,
    },
    #[serde(rename = "resource")]
    Resource { resource: Value },
    #[serde(other)]
    Unknown,
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    // --- JsonRpcRequest ---

    #[test]
    fn test_request_serializes_correct_version() {
        let req = JsonRpcRequest::new(1, "tools/list", None);
        let val = serde_json::to_value(&req).unwrap();
        assert_eq!(val["jsonrpc"], "2.0");
    }

    #[test]
    fn test_request_omits_params_when_none() {
        let req = JsonRpcRequest::new(1, "tools/list", None);
        let json = serde_json::to_string(&req).unwrap();
        assert!(
            !json.contains("\"params\""),
            "params key must not appear when None"
        );
    }

    #[test]
    fn test_request_includes_params_when_some() {
        let req = JsonRpcRequest::new(2, "tools/call", Some(json!({"name": "ping"})));
        let val = serde_json::to_value(&req).unwrap();
        assert_eq!(val["params"]["name"], "ping");
        assert_eq!(val["id"], 2);
    }

    #[test]
    fn test_request_method_round_trip() {
        let req = JsonRpcRequest::new(99, "notifications/initialized", None);
        let json = serde_json::to_string(&req).unwrap();
        let back: JsonRpcRequest = serde_json::from_str(&json).unwrap();
        assert_eq!(back.method, "notifications/initialized");
        assert_eq!(back.id, 99);
    }

    // --- JsonRpcNotification ---

    #[test]
    fn test_notification_has_no_id_field() {
        let notif = JsonRpcNotification::new("notifications/initialized", None);
        let json = serde_json::to_string(&notif).unwrap();
        assert!(
            !json.contains("\"id\""),
            "notifications must not have an id"
        );
    }

    // --- JsonRpcResponse ---

    #[test]
    fn test_response_deserializes_result() {
        let raw = r#"{"jsonrpc":"2.0","id":1,"result":{"tools":[]}}"#;
        let resp: JsonRpcResponse = serde_json::from_str(raw).unwrap();
        assert_eq!(resp.id, Some(1));
        assert!(resp.result.is_some());
        assert!(resp.error.is_none());
    }

    #[test]
    fn test_response_deserializes_error() {
        let raw =
            r#"{"jsonrpc":"2.0","id":1,"error":{"code":-32601,"message":"Method not found"}}"#;
        let resp: JsonRpcResponse = serde_json::from_str(raw).unwrap();
        let err = resp.error.unwrap();
        assert_eq!(err.code, -32601);
        assert_eq!(err.message, "Method not found");
    }

    // --- Tool & ToolInputSchema ---

    #[test]
    fn test_tool_deserializes_from_mcp_format() {
        let raw = json!({
            "name": "search",
            "description": "Search for things",
            "inputSchema": {
                "type": "object",
                "properties": {
                    "query": { "type": "string", "description": "The search term" }
                },
                "required": ["query"]
            }
        });

        let tool: Tool = serde_json::from_value(raw).unwrap();
        assert_eq!(tool.name, "search");
        assert!(tool.description.is_some());

        let props = tool.input_schema.properties.unwrap();
        assert!(props.contains_key("query"));
        assert_eq!(props["query"].prop_type, Some("string".to_string()));

        let required = tool.input_schema.required.unwrap();
        assert!(required.contains(&"query".to_string()));
    }

    #[test]
    fn test_tool_with_no_parameters_defaults_gracefully() {
        let raw = json!({ "name": "ping", "inputSchema": { "type": "object" } });
        let tool: Tool = serde_json::from_value(raw).unwrap();
        assert_eq!(tool.name, "ping");
        assert!(tool.input_schema.properties.is_none());
        assert!(tool.input_schema.required.is_none());
    }

    #[test]
    fn test_property_schema_deserializes_enum_values() {
        let raw = json!({
            "type": "string",
            "enum": ["add", "subtract", "multiply"]
        });
        let prop: PropertySchema = serde_json::from_value(raw).unwrap();
        let enums = prop.enum_values.unwrap();
        assert_eq!(enums.len(), 3);
        assert_eq!(enums[0], json!("add"));
    }

    // --- ContentBlock ---

    #[test]
    fn test_content_block_text_round_trip() {
        let raw = json!({"type": "text", "text": "hello world"});
        let block: ContentBlock = serde_json::from_value(raw).unwrap();
        match block {
            ContentBlock::Text { text } => assert_eq!(text, "hello world"),
            _ => panic!("Expected Text variant"),
        }
    }

    #[test]
    fn test_content_block_unknown_does_not_panic() {
        let raw = json!({"type": "audio", "data": "base64stuff"});
        let block: ContentBlock = serde_json::from_value(raw).unwrap();
        assert!(matches!(block, ContentBlock::Unknown));
    }
}
