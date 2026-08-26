# Why MCP-Caller Exists

**Type**: Explanation | Understanding-oriented. Builds the mental model behind the project.

---

## The Problem

The Model Context Protocol (MCP) decouples *tools and data sources* from *AI models*. An MCP server exposes tools (functions with typed schemas) that any compliant client can discover and invoke.

In practice, however, nearly all MCP client implementations are built around a single assumption: **an LLM is orchestrating the calls**.

This creates a critical gap: when the LLM is unavailable — due to an outage, rate-limiting, cost constraints, a restricted environment, or simply because you don't need one — all your MCP servers become unreachable to human operators.

Your filesystem server, your GitHub integration, your database query tool — all of them expose well-defined, machine-readable interfaces. None of them *require* an LLM to function. The LLM is just a router.

---

## The Analogy: curl

`curl` exists because HTTP is a useful protocol that humans and scripts need to speak directly — not just browsers and applications.

`mcp-caller` exists for the same reason. MCP is a useful protocol. The `tools/call` RPC is as straightforward as an HTTP POST. There's no reason a human shouldn't be able to:

1. Connect to any MCP server
2. Discover what tools it offers
3. Fill in the parameters
4. Execute the call

...without an LLM in the loop.

---

## What `mcp-caller` Is Not

It is **not** an LLM replacement. It does not reason about which tool to call, chain multiple tool calls together, or interpret complex natural language into tool arguments. Those are tasks for a model.

It **is** a harness — the equivalent of a test runner or a REPL — that lets you speak the MCP protocol directly when you want to.

---

## Design Philosophy

**Minimal surface area**: The binary does one thing — connect, discover, invoke, display. It has no persistent state, no daemon, no background service.

**Stdio first**: The MCP stdio transport is the standard for local servers and the most universally supported. `mcp-caller` optimizes for this transport with a clean implementation that handles line-framed JSON-RPC over child process I/O.

**Dual interface**: The interactive TUI wizard exists for humans exploring new servers. The scriptable `--json`/`--non-interactive` flags exist for automation pipelines. Both are first-class.

**Zero Entropy** (see [S.P.I.K.E.R. ADR](spiker-adr.md)): The codebase is designed to avoid Technical Debt at commit time. Each module has one responsibility. Extension happens by addition, not mutation.

---

## When to Use `mcp-caller`

| Scenario | Use `mcp-caller`? |
|---|---|
| LLM is down, need to manually invoke a tool | ✅ Yes |
| Debugging why an MCP server's tool returns unexpected results | ✅ Yes |
| Scripting repeated tool calls in CI/CD | ✅ Yes |
| Exploring a new MCP server's capabilities | ✅ Yes |
| Chaining 10 tool calls based on LLM reasoning | ❌ Use an LLM client |
| Natural language → tool argument mapping | ❌ Use an LLM client |

---

## See Also

- [Getting Started Tutorial](../tutorials/getting-started.md)
- [The Transport Abstraction](transport-abstraction.md)
- [S.P.I.K.E.R. Architecture Decision Record](spiker-adr.md)
