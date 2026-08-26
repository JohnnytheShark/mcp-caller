# MCP-Caller Documentation

> **`mcp-caller`** is a lightweight Rust CLI tool — *curl for MCP* — for discovering, inspecting, and invoking Model Context Protocol server tools directly from your terminal, with no LLM required.

---

## What kind of help do you need?

This documentation follows the [Diataxis framework](https://diataxis.fr/), organized into four distinct modes:

| | Learning | Doing | Understanding |
|---|---|---|---|
| **Practical** | [Tutorials](tutorials/index.md) | [How-to Guides](how-to/index.md) | — |
| **Theoretical** | — | — | [Explanation](explanation/index.md) |
| **Reference** | — | [Reference](reference/index.md) | — |

---

## 📚 Tutorials — *Learning-oriented*
Follow step-by-step guides to get hands-on experience, starting from zero.

- [Getting Started — Your First MCP Tool Call](tutorials/getting-started.md)

---

## 🛠 How-to Guides — *Task-oriented*
Solve specific, real-world problems. Assumes you know the basics.

- [How to Configure MCP Servers](how-to/configure-servers.md)
- [How to Call a Tool Interactively](how-to/call-tool-interactively.md)
- [How to Call a Tool from the CLI (Scripting & Piping)](how-to/call-tool-from-cli.md)
- [How to Inspect a Tool's Parameters](how-to/inspect-a-tool.md)
- [How to Add an HTTP Transport](how-to/add-http-transport.md)

---

## 📖 Reference — *Information-oriented*
Accurate, complete technical descriptions. Use while you work.

- [CLI Commands & Flags](reference/cli-commands.md)
- [Configuration File Schema](reference/config-schema.md)
- [MCP Protocol Notes](reference/mcp-protocol.md)
- [Architecture & Module Reference](reference/architecture.md)

---

## 💡 Explanation — *Understanding-oriented*
Background, context, and design rationale. Builds mental models.

- [Why MCP-Caller Exists](explanation/why-mcp-caller.md)
- [The Transport Abstraction](explanation/transport-abstraction.md)
- [Configuration Discovery & Priority](explanation/config-discovery.md)
- [S.P.I.K.E.R. Architecture Decision Record](explanation/spiker-adr.md)
