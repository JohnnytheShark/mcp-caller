use crate::mcp::types::{PropertySchema, Tool};
use anyhow::{anyhow, Result};
use colored::Colorize;
use inquire::validator::Validation;
use inquire::{Confirm, InquireError, Select, Text};
use serde_json::{json, Map, Value};
use std::collections::HashSet;

pub struct SchemaForm;

impl SchemaForm {
    /// Interactively prompts the user for arguments defined in the tool's JSON Schema
    pub fn prompt_arguments(tool: &Tool, prefilled: Option<&Value>) -> Result<Option<Value>> {
        let input_schema = &tool.input_schema;
        let properties = match &input_schema.properties {
            Some(props) if !props.is_empty() => props,
            _ => return Ok(Some(json!({}))), // No parameters required
        };

        let required_set: HashSet<String> = input_schema
            .required
            .as_ref()
            .map(|r| r.iter().cloned().collect())
            .unwrap_or_default();

        let mut args_map = Map::new();

        // If prefilled JSON was passed, start with that
        if let Some(Value::Object(map)) = prefilled {
            for (k, v) in map {
                args_map.insert(k.clone(), v.clone());
            }
        }

        println!(
            "\n{}",
            format!("── Fill Parameters for '{}' ──", tool.name)
                .bold()
                .cyan()
        );

        if let Some(desc) = &tool.description {
            println!("{}", desc.dimmed());
        }
        println!();

        // Sort properties: required first, then alphabetical
        let mut prop_keys: Vec<&String> = properties.keys().collect();
        prop_keys.sort_by(|a, b| {
            let a_req = required_set.contains(*a);
            let b_req = required_set.contains(*b);
            match (a_req, b_req) {
                (true, false) => std::cmp::Ordering::Less,
                (false, true) => std::cmp::Ordering::Greater,
                _ => a.cmp(b),
            }
        });

        for key in prop_keys {
            // If already prefilled and not empty, skip or ask?
            if args_map.contains_key(key) {
                continue;
            }

            let schema = &properties[key];
            let is_required = required_set.contains(key);

            let prompt_label = Self::build_label(key, schema, is_required);

            // Handle enums first
            if let Some(enum_vals) = &schema.enum_values {
                if !enum_vals.is_empty() {
                    let val = Self::prompt_enum(&prompt_label, enum_vals, is_required)?;
                    if let Some(v) = val {
                        args_map.insert(key.clone(), v);
                    }
                    continue;
                }
            }

            let prop_type = schema.prop_type.as_deref().unwrap_or("string");
            match prop_type {
                "boolean" => {
                    let val = Self::prompt_boolean(&prompt_label, schema, is_required)?;
                    if let Some(v) = val {
                        args_map.insert(key.clone(), Value::Bool(v));
                    }
                }
                "integer" => {
                    let val = Self::prompt_integer(&prompt_label, schema, is_required)?;
                    if let Some(v) = val {
                        args_map.insert(key.clone(), json!(v));
                    }
                }
                "number" => {
                    let val = Self::prompt_number(&prompt_label, schema, is_required)?;
                    if let Some(v) = val {
                        args_map.insert(key.clone(), json!(v));
                    }
                }
                "array" => {
                    let val = Self::prompt_array(&prompt_label, schema, is_required)?;
                    if let Some(v) = val {
                        args_map.insert(key.clone(), v);
                    }
                }
                "object" => {
                    let val = Self::prompt_object(&prompt_label, schema, is_required)?;
                    if let Some(v) = val {
                        args_map.insert(key.clone(), v);
                    }
                }
                _ => {
                    // Default to string
                    let val = Self::prompt_string(&prompt_label, schema, is_required)?;
                    if let Some(v) = val {
                        args_map.insert(key.clone(), Value::String(v));
                    }
                }
            }
        }

        Ok(Some(Value::Object(args_map)))
    }

    fn build_label(name: &str, schema: &PropertySchema, is_required: bool) -> String {
        let req_tag = if is_required {
            "[required]".red().bold().to_string()
        } else {
            "[optional]".dimmed().to_string()
        };

        let type_tag = schema
            .prop_type
            .as_deref()
            .map(|t| format!("({})", t).cyan().to_string())
            .unwrap_or_default();

        let desc_tag = schema
            .description
            .as_deref()
            .map(|d| format!("- {}", d).dimmed().to_string())
            .unwrap_or_default();

        format!("{} {} {} {}", name.bold(), type_tag, req_tag, desc_tag)
    }

    fn prompt_enum(label: &str, enum_vals: &[Value], is_required: bool) -> Result<Option<Value>> {
        let mut options: Vec<String> = enum_vals
            .iter()
            .map(|v| match v {
                Value::String(s) => s.clone(),
                other => other.to_string(),
            })
            .collect();

        if !is_required {
            options.push("<skip / omit>".to_string());
        }

        let selection = match Select::new(label, options).prompt() {
            Ok(choice) => choice,
            Err(InquireError::OperationCanceled) | Err(InquireError::OperationInterrupted) => {
                return Err(anyhow!("Operation cancelled by user"));
            }
            Err(e) => return Err(anyhow!(e)),
        };

        if selection == "<skip / omit>" {
            return Ok(None);
        }

        let matched = enum_vals.iter().find(|v| match v {
            Value::String(s) => s == &selection,
            other => other.to_string() == selection,
        });

        Ok(matched.cloned().or(Some(Value::String(selection))))
    }

    fn prompt_boolean(
        label: &str,
        schema: &PropertySchema,
        is_required: bool,
    ) -> Result<Option<bool>> {
        if is_required {
            let default_val = schema
                .default
                .as_ref()
                .and_then(|v| v.as_bool())
                .unwrap_or(false);

            let res = Confirm::new(label).with_default(default_val).prompt();
            match res {
                Ok(val) => Ok(Some(val)),
                Err(InquireError::OperationCanceled) | Err(InquireError::OperationInterrupted) => {
                    Err(anyhow!("Operation cancelled"))
                }
                Err(e) => Err(anyhow!(e)),
            }
        } else {
            let choices = vec!["true", "false", "<skip / omit>"];
            let res = Select::new(label, choices).prompt();
            match res {
                Ok("true") => Ok(Some(true)),
                Ok("false") => Ok(Some(false)),
                Ok(_) => Ok(None),
                Err(InquireError::OperationCanceled) | Err(InquireError::OperationInterrupted) => {
                    Err(anyhow!("Operation cancelled"))
                }
                Err(e) => Err(anyhow!(e)),
            }
        }
    }

    fn prompt_integer(
        label: &str,
        schema: &PropertySchema,
        is_required: bool,
    ) -> Result<Option<i64>> {
        let default_str = schema
            .default
            .as_ref()
            .and_then(|v| v.as_i64())
            .map(|n| n.to_string());

        let mut text = Text::new(label);
        if let Some(ref def) = default_str {
            text = text.with_default(def);
        }

        let validator = move |input: &str| {
            let trimmed = input.trim();
            if trimmed.is_empty() {
                if is_required {
                    return Ok(Validation::Invalid("This integer is required".into()));
                }
                return Ok(Validation::Valid);
            }
            match trimmed.parse::<i64>() {
                Ok(_) => Ok(Validation::Valid),
                Err(_) => Ok(Validation::Invalid("Please enter a valid integer".into())),
            }
        };

        let res = text.with_validator(validator).prompt();
        match res {
            Ok(input) => {
                let trimmed = input.trim();
                if trimmed.is_empty() {
                    Ok(None)
                } else {
                    Ok(Some(trimmed.parse::<i64>()?))
                }
            }
            Err(InquireError::OperationCanceled) | Err(InquireError::OperationInterrupted) => {
                Err(anyhow!("Operation cancelled"))
            }
            Err(e) => Err(anyhow!(e)),
        }
    }

    fn prompt_number(
        label: &str,
        schema: &PropertySchema,
        is_required: bool,
    ) -> Result<Option<f64>> {
        let default_str = schema
            .default
            .as_ref()
            .and_then(|v| v.as_f64())
            .map(|n| n.to_string());

        let mut text = Text::new(label);
        if let Some(ref def) = default_str {
            text = text.with_default(def);
        }

        let validator = move |input: &str| {
            let trimmed = input.trim();
            if trimmed.is_empty() {
                if is_required {
                    return Ok(Validation::Invalid("This number is required".into()));
                }
                return Ok(Validation::Valid);
            }
            match trimmed.parse::<f64>() {
                Ok(_) => Ok(Validation::Valid),
                Err(_) => Ok(Validation::Invalid("Please enter a valid number".into())),
            }
        };

        let res = text.with_validator(validator).prompt();
        match res {
            Ok(input) => {
                let trimmed = input.trim();
                if trimmed.is_empty() {
                    Ok(None)
                } else {
                    Ok(Some(trimmed.parse::<f64>()?))
                }
            }
            Err(InquireError::OperationCanceled) | Err(InquireError::OperationInterrupted) => {
                Err(anyhow!("Operation cancelled"))
            }
            Err(e) => Err(anyhow!(e)),
        }
    }

    fn prompt_string(
        label: &str,
        schema: &PropertySchema,
        is_required: bool,
    ) -> Result<Option<String>> {
        let mut text = Text::new(label);

        if let Some(def) = &schema.default {
            if let Some(s) = def.as_str() {
                text = text.with_default(s);
            }
        }

        let validator = move |input: &str| {
            if is_required && input.trim().is_empty() {
                return Ok(Validation::Invalid("This field is required".into()));
            }
            Ok(Validation::Valid)
        };

        let res = text.with_validator(validator).prompt();
        match res {
            Ok(val) => {
                if val.trim().is_empty() && !is_required {
                    Ok(None)
                } else {
                    Ok(Some(val))
                }
            }
            Err(InquireError::OperationCanceled) | Err(InquireError::OperationInterrupted) => {
                Err(anyhow!("Operation cancelled"))
            }
            Err(e) => Err(anyhow!(e)),
        }
    }

    fn prompt_array(
        label: &str,
        _schema: &PropertySchema,
        is_required: bool,
    ) -> Result<Option<Value>> {
        let hint_label = format!(
            "{} (comma-separated or JSON array e.g. [\"a\", \"b\"])",
            label
        );
        let text = Text::new(&hint_label);

        let validator = move |input: &str| {
            let trimmed = input.trim();
            if trimmed.is_empty() {
                if is_required {
                    return Ok(Validation::Invalid("This array field is required".into()));
                }
                return Ok(Validation::Valid);
            }
            // Check if JSON array or comma separated
            if trimmed.starts_with('[') && serde_json::from_str::<Vec<Value>>(trimmed).is_err() {
                return Ok(Validation::Invalid("Invalid JSON array syntax".into()));
            }
            Ok(Validation::Valid)
        };

        let res = text.with_validator(validator).prompt();
        match res {
            Ok(input) => {
                let trimmed = input.trim();
                if trimmed.is_empty() {
                    return Ok(None);
                }
                if trimmed.starts_with('[') {
                    let val: Value = serde_json::from_str(trimmed)?;
                    Ok(Some(val))
                } else {
                    let items: Vec<Value> = trimmed
                        .split(',')
                        .map(|s| Value::String(s.trim().to_string()))
                        .collect();
                    Ok(Some(Value::Array(items)))
                }
            }
            Err(InquireError::OperationCanceled) | Err(InquireError::OperationInterrupted) => {
                Err(anyhow!("Operation cancelled"))
            }
            Err(e) => Err(anyhow!(e)),
        }
    }

    fn prompt_object(
        label: &str,
        _schema: &PropertySchema,
        is_required: bool,
    ) -> Result<Option<Value>> {
        let hint_label = format!("{} (JSON object e.g. {{\"key\": \"val\"}})", label);
        let text = Text::new(&hint_label);

        let validator = move |input: &str| {
            let trimmed = input.trim();
            if trimmed.is_empty() {
                if is_required {
                    return Ok(Validation::Invalid("This object field is required".into()));
                }
                return Ok(Validation::Valid);
            }
            if serde_json::from_str::<Map<String, Value>>(trimmed).is_err() {
                return Ok(Validation::Invalid("Invalid JSON object syntax".into()));
            }
            Ok(Validation::Valid)
        };

        let res = text.with_validator(validator).prompt();
        match res {
            Ok(input) => {
                let trimmed = input.trim();
                if trimmed.is_empty() {
                    Ok(None)
                } else {
                    let val: Value = serde_json::from_str(trimmed)?;
                    Ok(Some(val))
                }
            }
            Err(InquireError::OperationCanceled) | Err(InquireError::OperationInterrupted) => {
                Err(anyhow!("Operation cancelled"))
            }
            Err(e) => Err(anyhow!(e)),
        }
    }
}
