# Configuration Discovery & Priority

**Type**: Explanation | How `mcp-caller` finds, loads, and merges MCP server configurations.

---

## The Discovery Problem

`mcp-caller` is designed to work across many different environments: personal machines with Claude Desktop, project repositories with local `mcp.json` files, and CI environments with explicit config paths. Rather than requiring one canonical config location, it discovers servers from multiple sources and merges them.

---

## Discovery Order & Priority

Configuration is loaded in this order. **First-wins**: if a server name appears in an earlier source, later sources do not override it.

```
1. --config <PATH>            (explicit, highest priority)
2. ./mcp.json                 (local project file)
3. ./.mcp.json                (local project file, dotfile variant)
4. ./.mcprc.json              (local project file, rc variant)
5. Claude Desktop config      (platform-specific system path)
6. Antigravity/Gemini config  (~/.gemini/antigravity-cli/mcp_config.json)
```

### Why First-Wins?

A project-local `mcp.json` defines the servers needed for that project. A system-level config (Claude Desktop) defines your personal setup. If you have a server named `filesystem` in both, the project-local definition is more specific and should take precedence.

---

## The Merge Algorithm

The implementation lives in [`ConfigManager::load_all`](../../src/config/mod.rs):

```rust
// Simplified pseudocode
fn load_all(custom_config) {
    let mut map: HashMap<name, (definition, source_path)> = {};

    for source in [custom_config, local_files, claude, gemini] {
        if source.exists() {
            for (name, def) in parse(source) {
                map.entry(name).or_insert((def, source));  // first-wins
            }
        }
    }
}
```

Errors in loading a particular config source (malformed JSON, unreadable file) are **silently ignored** for auto-discovered sources. Only errors in an explicitly-passed `--config` file are propagated as errors. This prevents a corrupted Claude Desktop config from breaking `mcp-caller` entirely.

---

## Config File Format Detection

`merge_from_file` attempts to parse each file in two formats:

1. **Standard `mcpServers`-wrapped format** (used by Claude Desktop and the official MCP spec):
   ```json
   { "mcpServers": { "my-server": { ... } } }
   ```

2. **Flat map format** (simpler project configs):
   ```json
   { "my-server": { ... } }
   ```

If neither parse succeeds, the file is silently skipped.

---

## Platform-Specific Paths

| Config Source | Windows | macOS | Linux |
|---|---|---|---|
| Claude Desktop | `%APPDATA%\Claude\claude_desktop_config.json` | `~/Library/Application Support/Claude/claude_desktop_config.json` | `~/.config/Claude/claude_desktop_config.json` |
| Antigravity/Gemini | `~\.gemini\antigravity-cli\mcp_config.json` | Same | Same |

---

## Diagnosing Discovery

Run `mcp-caller servers` to see exactly which servers were found and which config file each came from:

```bash
mcp-caller servers
```

```
╭────────────┬───────────────────────────────────┬────────────────────────────────────────────╮
│ Server Name│ Command / URL                     │ Config Source                              │
├────────────┼───────────────────────────────────┼────────────────────────────────────────────┤
│ filesystem │ npx -y @mcp/server-filesystem .   │ ./mcp.json                                 │
│ github     │ npx -y @mcp/server-github         │ C:\Users\...\claude_desktop_config.json    │
╰────────────┴───────────────────────────────────┴────────────────────────────────────────────╯
```

The **Config Source** column shows exactly which file contributed each server definition — useful for debugging unexpected server definitions or priority conflicts.

---

## See Also

- [How to Configure MCP Servers](../how-to/configure-servers.md) — practical setup instructions
- [Configuration File Schema](../reference/config-schema.md) — format specification
