# How to Call a Tool from the CLI (Scripting & Piping)

**Goal**: Invoke MCP tools non-interactively in shell scripts, CI pipelines, and data pipelines.

---

## Basic Non-Interactive Call

Pass `--args` with a JSON object to bypass the interactive prompts:

```bash
mcp-caller call filesystem --tool list_directory --args '{"path": "src"}'
```

If required arguments are missing from `--args`, `mcp-caller` will still prompt you unless you also pass `--non-interactive`.

---

## Fully Scripted (No Prompts at All)

Add `--non-interactive` to suppress all prompts. The call will fail with an error if required arguments are missing:

```bash
mcp-caller call filesystem \
  --tool read_file \
  --args '{"path": "src/main.rs"}' \
  --non-interactive
```

---

## Raw JSON Output for Piping

Add `--json` (or `-j`) to receive raw JSON output on stdout, suitable for piping:

```bash
mcp-caller call filesystem \
  --tool read_file \
  --args '{"path": "Cargo.toml"}' \
  --json
```

Output:
```json
{
  "content": [
    { "type": "text", "text": "[package]\nname = \"mcp-caller\"..." }
  ],
  "isError": false
}
```

---

## Piping into `jq`

Extract specific fields using `jq`:

```bash
# Get just the text content of a file
mcp-caller call filesystem \
  --tool read_file \
  --args '{"path": "Cargo.toml"}' \
  --json | jq -r '.content[0].text'

# Check if a tool call returned an error
mcp-caller call myserver --tool do_something --args '{}' --json \
  | jq '.isError'
```

---

## Using in Shell Scripts

```bash
#!/usr/bin/env bash
set -euo pipefail

SERVER="filesystem"
FILE="README.md"

echo "Reading $FILE from MCP server..."
content=$(mcp-caller call "$SERVER" \
  --tool read_file \
  --args "{\"path\": \"$FILE\"}" \
  --json \
  --non-interactive \
  | jq -r '.content[0].text')

echo "$content" | wc -l
echo "Done."
```

---

## Using an Ad-Hoc Server Without a Config File

Replace the server name with `--cmd`:

```bash
mcp-caller call \
  --cmd "npx -y @modelcontextprotocol/server-filesystem /tmp" \
  --tool list_directory \
  --args '{"path": "."}' \
  --json \
  --non-interactive
```

---

## Conflict Resolution: Server Name vs `--cmd`

If you pass **both** a server name and `--cmd`, `--cmd` takes precedence and a warning is printed to stderr:

```bash
mcp-caller call my-server --tool ping --cmd "python other_server.py"
# ⚠ Warning: Both a server name and --cmd were provided. --cmd takes precedence.
```

Stderr warnings do **not** affect the JSON output on stdout, so scripts using `--json` remain safe.

---

## Exit Codes

| Code | Meaning |
|---|---|
| `0` | Tool call succeeded |
| `1` | Error (connection failed, tool not found, required arg missing, etc.) |

Use exit codes in CI:

```bash
mcp-caller call myserver --tool healthcheck --args '{}' --non-interactive \
  && echo "Server is healthy" \
  || echo "Server health check failed" >&2
```

---

## See Also

- [CLI Commands & Flags Reference](../reference/cli-commands.md)
- [How to Configure MCP Servers](configure-servers.md)
