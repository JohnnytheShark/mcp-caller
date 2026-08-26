# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

---

## Reporting a Vulnerability

If you discover a security vulnerability in `mcp-caller`, please **do not open a public issue**. Instead, report it privately via GitHub Security Advisories or by emailing the project maintainer.

Please include:
1. A description of the vulnerability.
2. Steps to reproduce the issue (proof-of-concept command/config).
3. The potential impact.

We will acknowledge receipt within 48 hours and provide a timeline for remediation.

---

## Trust Model & Security Architecture

`mcp-caller` executes child processes on your system to communicate with MCP servers over `stdio`.

### Process Execution Trust Boundary
- **Command execution**: When you supply `--cmd "<command>"` or define a server in an `mcp.json` file with `"command": "..."`, `mcp-caller` invokes the operating system process spawner (`tokio::process::Command`).
- **Input Trust**: Commands and arguments are treated as **trusted local operator input**. Do not load `mcp.json` configuration files from untrusted sources or execute untrusted shell command strings.
- **Environment Variables**: The `env` field in server definitions is injected into the child process environment. Ensure sensitive secrets are protected according to standard operating system file permissions.
