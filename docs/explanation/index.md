# Explanation

**Explanation documentation is understanding-oriented.** It discusses, explains, and clarifies. Its purpose is to build a mental model — not to instruct you how to do something.

Read these when you want to understand *why* the tool works the way it does.

---

## Available Explanations

- [Why MCP-Caller Exists](why-mcp-caller.md) — the motivation, the problem, the analogy to `curl`, and when to use it
- [The Transport Abstraction](transport-abstraction.md) — why `Box<dyn Transport>` was chosen, how `StdioTransport` works, and how the system is designed for future transports
- [Configuration Discovery & Priority](config-discovery.md) — how `mcp-caller` finds servers from multiple config sources, and why first-wins is the correct merge strategy
- [S.P.I.K.E.R. Architecture Decision Record](spiker-adr.md) — the full ADR from the post-build audit: all six pillars, findings, and resolutions
