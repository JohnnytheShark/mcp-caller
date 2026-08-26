# Tutorial: Getting Started — Your First MCP Tool Call

**Type**: Tutorial | **Time**: ~10 minutes | **Outcome**: You will have installed `mcp-caller`, connected to a real MCP server, and successfully invoked a tool — all without an LLM.

> Tutorials are designed for **learning**. Every step here is intentional. Follow them in order even if parts feel familiar.

---

## Prerequisites

Before you begin, make sure you have:

- **Rust toolchain** (`rustc` ≥ 1.75) — install at [rustup.rs](https://rustup.rs/)
- **Node.js** (`node` ≥ 18) — for the example server we'll use in this tutorial
- A terminal (PowerShell on Windows, bash/zsh on macOS/Linux)

---

## Step 1 — Build `mcp-caller`

Clone the repository and compile it:

```bash
git clone https://github.com/your-org/mcp-caller.git
cd mcp-caller
cargo build --release
```

When finished, the binary is at:
- **Windows**: `target\release\mcp-caller.exe`
- **macOS/Linux**: `target/release/mcp-caller`

Verify it works:

```bash
# Windows
target\release\mcp-caller.exe --version

# macOS/Linux
./target/release/mcp-caller --version
```

Expected output:
```
mcp-caller 0.1.0
```

> **Tip**: For convenience, add the binary to your system `PATH` so you can run `mcp-caller` from anywhere.

---

## Step 2 — Understand What We're Connecting To

In this tutorial we'll connect to the official **MCP Filesystem Server** — a real MCP server published by the MCP team that exposes file-system tools via stdio.

It requires no API keys and is installable in a single command via `npx`.

The server exposes tools like:
- `read_file` — read the contents of a file
- `list_directory` — list files in a directory
- `write_file` — write content to a file

---

## Step 3 — List the Server's Tools

Run `mcp-caller list` with the `--cmd` flag to connect directly without any config file:

```bash
mcp-caller list --cmd "npx -y @modelcontextprotocol/server-filesystem ."
```

> `--cmd` accepts a shell-quoted command to spawn any MCP server on the fly.  
> The `.` argument tells the filesystem server to allow access to the current directory.

You should see a table like:

```
╭─────────────────────┬──────────────────────────────────────────┬─────────────────────╮
│ Tool Name           │ Description                              │ Parameters          │
├─────────────────────┼──────────────────────────────────────────┼─────────────────────┤
│ read_file           │ Read the complete contents of a file...  │ path*: string       │
│ list_directory      │ Get a detailed listing of all files...   │ path*: string       │
│ write_file          │ Create a new file or overwrite...        │ path*: string, ...  │
╰─────────────────────┴──────────────────────────────────────────┴─────────────────────╯
(* indicates required parameter)
```

**What just happened?** `mcp-caller` spawned the filesystem server as a child process, completed the MCP handshake, and called `tools/list` via JSON-RPC — then rendered the schema in a human-readable table.

---

## Step 4 — Inspect a Tool's Full Schema

Before calling a tool, inspect its parameter requirements:

```bash
mcp-caller info --cmd "npx -y @modelcontextprotocol/server-filesystem ." --tool list_directory
```

You'll see each parameter with its type, required/optional status, and description:

```
Tool: list_directory
Get a detailed listing of all files and directories in a specified path.

Input Schema Parameters:
  • path (string) [REQUIRED]
      Description: Path of the directory to list
```

---

## Step 5 — Call a Tool Interactively

Now invoke `list_directory` using the interactive prompt. The tool only needs one parameter, so this is quick:

```bash
mcp-caller call --cmd "npx -y @modelcontextprotocol/server-filesystem ." --tool list_directory
```

`mcp-caller` detects the tool's schema and prompts you:

```
── Fill Parameters for 'list_directory' ──
Get a detailed listing of all files and directories...

path (string) [required] - Path of the directory to list
> .
```

Type `.` and press Enter. You'll see output like:

```
✔ SUCCESS Tool execution finished (1.24s)
────────────────────────────────────────────────────────────
[
  { "name": "Cargo.toml", "type": "file", "size": 512 },
  { "name": "src",        "type": "directory" },
  ...
]
────────────────────────────────────────────────────────────
```

🎉 **You've just called your first MCP tool from the command line — with no LLM involved.**

---

## Step 6 — Call a Tool Directly (No Prompts)

For scripting and automation, pass arguments directly with `--args`:

```bash
mcp-caller call \
  --cmd "npx -y @modelcontextprotocol/server-filesystem ." \
  --tool list_directory \
  --args '{"path": "src"}'
```

Combine with `--json` to get raw output for piping into `jq`:

```bash
mcp-caller call \
  --cmd "npx -y @modelcontextprotocol/server-filesystem ." \
  --tool read_file \
  --args '{"path": "Cargo.toml"}' \
  --json | jq '.content[0].text'
```

---

## Step 7 — Use the Interactive Wizard

For ongoing exploration, launch the full TUI wizard:

```bash
mcp-caller --cmd "npx -y @modelcontextprotocol/server-filesystem ."
```

Use the arrow keys to navigate tools, fill in prompts, view results, and re-run — all in a single interactive session.

---

## What You've Learned

| Concept | Command |
|---|---|
| List a server's tools | `mcp-caller list --cmd "<cmd>"` |
| Inspect tool parameters | `mcp-caller info --cmd "<cmd>" --tool <name>` |
| Call a tool interactively | `mcp-caller call --cmd "<cmd>" --tool <name>` |
| Call a tool with direct args | `mcp-caller call ... --args '{"key":"val"}'` |
| Get raw JSON output | Add `--json` to any command |

---

## Next Steps

- **→ [How to Configure MCP Servers](../how-to/configure-servers.md)** — add servers to a config file so you don't need `--cmd` every time
- **→ [CLI Commands Reference](../reference/cli-commands.md)** — full flag documentation
- **→ [Why MCP-Caller Exists](../explanation/why-mcp-caller.md)** — understand the motivation
