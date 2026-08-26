# S.P.I.K.E.R. Architecture Decision Record

**Type**: Explanation | ADR-001 — S.P.I.K.E.R. audit of `mcp-caller` v0.1.0.

> **Methodology**: S.P.I.K.E.R. (Japanese Precision Engineering) — prevents Technical Sepsis by applying the principles of Ikejime (clean kill) to software at the moment of commit.

---

## Context

`mcp-caller` v0.1.0 was audited against the six S.P.I.K.E.R. pillars immediately after initial implementation. Six findings were identified and subsequently resolved. This document records both the findings and their resolutions for architectural transparency.

**Overall verdict**: ✅ **Ikejime-Code** — well-formed for v0.1.0 after remediations.

---

## The Six Pillars — Findings & Resolutions

---

### [S] Systemic Spiking — Intent Precision

> *Destroying ambiguity before the first line of code.*

**Finding**: In `call.rs`, `list.rs`, and `info.rs`, the arm `(Some(_), Some(cmd))` silently discarded the server name when both `--server` and `--cmd` were provided, with no indication to the user that their named server was being ignored.

**Resolution**: Extracted `resolve_server_definition()` in `commands/mod.rs`. When both inputs are provided, the function:
1. Emits a visible `⚠ Warning:` to stderr stating `--cmd` takes precedence
2. Proceeds with `--cmd`, making the resolution rule explicit and auditable

**Status**: ✅ Resolved

---

### [P] Peripheral Purge — Minimalist Hygiene

> *Immediate removal of dead code and "just-in-case" dependencies.*

**Finding**: `reqwest` and `futures` were declared in `Cargo.toml` but had zero usages in the codebase. They added ~15MB to the binary footprint and significant compile time for no benefit. The rationale ("future HTTP transport") violates the Peripheral Purge rule — that's a future ticket, not a current dependency.

**Resolution**: Both crates removed from `Cargo.toml`. They will be added in the commit that introduces the HTTP transport, not before.

**Status**: ✅ Resolved

---

### [I] Isolation of Nerves — Structural Decoupling

> *Severing the spinal cord between unrelated modules.*

**Finding**: The server resolution logic — the `match (server_name, cmd_override)` block — was copy-pasted identically into three command handlers (`call.rs`, `list.rs`, `info.rs`). This is a single "nerve" cut in three places. Any change to resolution priority (e.g., URL-based routing) required three identical edits.

**Resolution**: Extracted `resolve_server_definition(server_name, cmd_override, config) -> Result<ServerDefinition>` into `commands/mod.rs`. All three handlers delegate to it. The resolution logic now has one canonical location.

**Status**: ✅ Resolved

---

### [K] Kinetic Hygiene — Dependency Purity

> *Being aggressively protective of the environment. Every external library is a potential contamination point.*

**Finding**: `ServerDefinition::from_command_str` uses `shell_words::split` to parse user-supplied command strings. This is the correct library for the job, but the function had no documentation on its trust boundary. A future maintainer could inadvertently pass untrusted input (e.g., from a remote API response) and create an arbitrary command execution vulnerability.

**Resolution**: Added a `/// Trust Boundary` doc comment to `from_command_str` explicitly stating that only trusted operator input (config files, CLI flags) should be passed, and that untrusted remote strings must never be passed.

**Status**: ✅ Resolved

---

### [E] Enzymatic Aging — Extensibility

> *Designing code that matures and develops 'Umami' — stable enough to extend without rewriting.*

**Finding**: In `interactive.rs`, after a user selected a server or tool from the `Select` menu, the code recovered the original name by splitting the display string on whitespace:

```rust
// Brittle: breaks for any name containing a space
let server_name = selection.split_whitespace().next().unwrap_or_default();
```

Since the display string was `"server-name (command)"`, any server name containing a space would be silently truncated, causing a "not found" error with no clear cause.

**Resolution**: Replaced the display-string reversal with a `(label, data)` tuple approach. The display string is built from the data once; selection looks up the original data by comparing the full label:

```rust
let server_entries: Vec<(String, &str, &ServerDefinition)> = servers
    .iter()
    .map(|(name, def, _)| (format!("{} ({})", name, ...), name.as_str(), def))
    .collect();
// After selection:
if let Some((_, name, def)) = server_entries.iter().find(|(label, _, _)| *label == selection) { ... }
```

Additionally, `run_tool_loop` was extracted from `run_server_session` to keep each function focused on a single responsibility. Sentinel strings (`OPT_EXIT`, `OPT_BACK`, `OPT_CUSTOM_CMD`) were promoted to `const` to prevent mismatch bugs between construction and comparison sites.

**Status**: ✅ Resolved

---

### [R] Rigorous Refinement — Quality Verification

> *Zero-Signal Testing: tests must fail loudly and pass silently.*

**Finding**: The codebase had zero tests. The JSON-RPC serde round-trips — the foundational correctness guarantee of the entire protocol layer — were completely unverified.

**Resolution**: Added 20 unit tests across two modules:

**`src/mcp/types.rs`** (13 tests):
- `JsonRpcRequest` serialization: version, params omission, method round-trip
- `JsonRpcNotification`: no id field
- `JsonRpcResponse`: result and error deserialization
- `Tool`: full MCP format deserialization, no-parameter defaults
- `PropertySchema`: enum value deserialization
- `ContentBlock`: text round-trip, unknown type graceful handling

**`src/config/models.rs`** (7 tests):
- `from_command_str`: simple command, multiple args, quoted paths with spaces, empty input error, whitespace-only error
- `McpConfig`: standard format deserialization, missing-key defaults
- `ServerDefinition`: optional field defaulting

All 20 tests pass. `cargo test` exits with code 0.

**Status**: ✅ Resolved

---

## Glossary (S.P.I.K.E.R.)

| Term | Definition |
|---|---|
| **Ikejime-Code** | Software that was killed (completed) cleanly and can be aged (maintained) for years |
| **Technical Sepsis** | The rot that sets in when ambiguity, tight coupling, and dead code are left unaddressed |
| **Lactic Acid** | The "sour" taste in a codebase caused by rushing, stress, and poor initial requirements |
| **Sanguineous Logic** | Dead code, unused dependencies, "just-in-case" parameters — all draining value |
| **Nerve Propagation** | Tight coupling where a change in one module forces changes in unrelated modules |
| **The Spike** | The definitive moment logic is solved, before the keyboard is touched |

---

## See Also

- [Architecture & Module Reference](../reference/architecture.md)
- [The Transport Abstraction](transport-abstraction.md)
- [Why MCP-Caller Exists](why-mcp-caller.md)
