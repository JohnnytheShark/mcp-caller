# âš¡ MCP-Caller

[![Crates.io](https://img.shields.io/crates/v/mcp-caller.svg)](https://crates.io/crates/mcp-caller)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange.svg)](https://www.rust-lang.org)
[![CI](https://github.com/JohnnytheShark/mcp-caller/actions/workflows/ci.yml/badge.svg)](https://github.com/JohnnytheShark/mcp-caller/actions)

> **A lightweight CLI tool (*curl for MCP*)** to discover, inspect, and invoke Model Context Protocol (MCP) server tools directly from your terminal â€” with an interactive schema-prompting wizard or headless automation flags.

---

## ðŸŽ¯ Motivation

When an LLM is offline, rate-limited, expensive, or simply not needed for deterministic tasks, your MCP tools shouldn't become unreachable.

MCP servers are typed, structured RPC services over JSON-RPC. **`mcp-caller`** acts as a lightweight, human-facing harness:
1. Connects to any standard MCP server via `stdio` (or custom commands).
2. Auto-discovers servers from your environment (`mcp.json`, Claude Desktop, Antigravity, or custom `--config`).
3. Introspects tool `inputSchema` (JSON Schema) dynamically.
4. Generates terminal prompts tailored to the schema (strings, integers, floats, booleans, enums, arrays, and JSON objects with validation and defaults).
5. Dispatches the JSON-RPC request and renders clean status badges, execution latency, and formatted output.

---

## ðŸš€ Key Features

- **âš¡ Zero Runtime Overhead**: Single compiled native binary built in Rust (`<10MB`), instant startup, zero `node_modules` or Python runtime dependencies needed for the caller.
- **ðŸª„ Dynamic Schema Form Engine**:
  - Automatically identifies `[required]` vs `[optional]` parameters.
  - Renders dropdown selectors for `enum` choices and booleans.
  - Validates numeric inputs (`integer`, `number`) and parses JSON arrays/objects.
  - Automatically uses schema `default` values and displays field descriptions.
- **ðŸ” Auto-Discovery**: Automatically loads MCP servers configured in:
  - Local `./mcp.json`, `./.mcp.json`, or `./.mcprc.json`
  - Claude Desktop (`%APPDATA%\Claude\claude_desktop_config.json` on Windows, `~/Library/Application Support/Claude/...` on macOS, `~/.config/Claude/...` on Linux)
  - Antigravity / Gemini CLI (`~/.gemini/antigravity-cli/mcp_config.json`)
  - Or run ad-hoc servers on the fly with `--cmd "<command>"`.
- **ðŸ› ï¸ Dual Interaction Modes**:
  - **Interactive TUI Wizard**: Pick server $\to$ pick tool $\to$ fill schema prompts $\to$ execute $\to$ re-run / loop.
  - **Scriptable CLI / Automation**: Pass `--args '{"key":"val"}'`, `--non-interactive`, and `-j / --json` for shell pipelines and CI scripts.
- **ðŸ§¹ Clean Code Architecture**: Decoupled transports ([`Transport`](src/mcp/transport.rs) trait), S.P.I.K.E.R. audited, zero unneeded dependencies, with 20 unit tests.

---

## ðŸ“¦ Installation

### Windows (PowerShell)
```powershell
irm https://raw.githubusercontent.com/JohnnytheShark/mcp-caller/main/install.ps1 | iex
```

### macOS / Linux
```bash
curl -fsSL https://raw.githubusercontent.com/JohnnytheShark/mcp-caller/main/install.sh | bash
```

### From crates.io (Requires Rust)
```bash
cargo install mcp-caller
```

### Build from source
```bash
git clone https://github.com/JohnnytheShark/mcp-caller.git
cd mcp-caller
cargo build --release
```
The compiled binary will be located at `target/release/mcp-caller` (or `mcp-caller.exe` on Windows).

---

## âš¡ Quick Start

### 1. Interactive TUI Wizard (Default)
Launch `mcp-caller` without arguments to start the interactive wizard:
```bash
mcp-caller
```

### 2. Run an Ad-Hoc Server
Connect and run a server command on the fly:
```bash
mcp-caller --cmd "npx -y @modelcontextprotocol/server-filesystem ."
```

### 3. List Discovered Servers
```bash
mcp-caller servers
```

### 4. List Server Tools
```bash
# Using a configured server name:
mcp-caller list filesystem

# Or using an ad-hoc command:
mcp-caller list --cmd "python server.py"
```

### 5. Inspect Tool Input Schema
```bash
mcp-caller info filesystem --tool write_file
```

### 6. Invoke a Tool

**Interactive Prompting:**
```bash
mcp-caller call filesystem --tool read_file
```

**Direct JSON Arguments:**
```bash
mcp-caller call filesystem --tool read_file --args '{"path": "Cargo.toml"}'
```

**Raw JSON Output (Piping & Automation):**
```bash
mcp-caller call filesystem --tool read_file --args '{"path": "Cargo.toml"}' --json | jq -r '.content[0].text'
```

---

## ðŸ“š Documentation

Comprehensive documentation built on the [Diataxis Framework](https://diataxis.fr/) is available in the [`docs/`](docs/) directory:

- ðŸŽ“ **[Tutorials](docs/tutorials/index.md)**: [Getting Started â€” Your First MCP Tool Call](docs/tutorials/getting-started.md)
- ðŸ› ï¸ **[How-to Guides](docs/how-to/index.md)**:
  - [How to Configure MCP Servers](docs/how-to/configure-servers.md)
  - [How to Call a Tool Interactively](docs/how-to/call-tool-interactively.md)
  - [How to Call a Tool from the CLI (Scripting & Piping)](docs/how-to/call-tool-from-cli.md)
  - [How to Inspect a Tool's Parameters](docs/how-to/inspect-a-tool.md)
  - [How to Add an HTTP Transport](docs/how-to/add-http-transport.md)
- ðŸ“– **[Reference](docs/reference/index.md)**:
  - [CLI Commands & Flags](docs/reference/cli-commands.md)
  - [Configuration File Schema](docs/reference/config-schema.md)
  - [MCP Protocol Implementation Notes](docs/reference/mcp-protocol.md)
  - [Architecture & Module Reference](docs/reference/architecture.md)
- ðŸ’¡ **[Explanation](docs/explanation/index.md)**:
  - [Why MCP-Caller Exists](docs/explanation/why-mcp-caller.md)
  - [The Transport Abstraction](docs/explanation/transport-abstraction.md)
  - [Configuration Discovery & Priority](docs/explanation/config-discovery.md)
  - [S.P.I.K.E.R. Architecture Decision Record](docs/explanation/spiker-adr.md)

---

## ðŸ§ª Testing

Run the test suite:
```bash
cargo test
```

---

## ðŸ¤ Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before submitting pull requests.

---

## ðŸ›¡ï¸ Security

For security vulnerabilities and our trust boundary model, please review [SECURITY.md](SECURITY.md).

---

## ðŸ“„ License

Licensed under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at [LICENSE](LICENSE) or http://www.apache.org/licenses/LICENSE-2.0.
