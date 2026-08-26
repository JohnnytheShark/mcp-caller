# Contributing to MCP-Caller

Thank you for your interest in contributing to `mcp-caller`! We welcome bug reports, feature requests, documentation improvements, and code contributions.

---

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Development Setup

### Prerequisites
- [Rust toolchain](https://rustup.rs/) (version 1.75 or newer)
- Git

### Cloning & Building
```bash
git clone https://github.com/JohnnyOrellana/mcp-caller.git
cd mcp-caller
cargo build
```

### Running Tests
Make sure all unit tests pass:
```bash
cargo test
```

### Formatting & Linting
We enforce standard Rust formatting and clippy lints:
```bash
# Check code formatting
cargo fmt --all -- --check

# Run linter
cargo clippy --all-targets --all-features -- -D warnings
```

---

## Architectural Principles

`mcp-caller` follows the **S.P.I.K.E.R.** methodology (see [`docs/explanation/spiker-adr.md`](docs/explanation/spiker-adr.md)):

1. **Isolation of Nerves**: Keep transport mechanics, protocol operations, prompt interactions, and UI rendering cleanly decoupled.
2. **Peripheral Purge**: Do not add dependencies for "future" use cases. Every dependency in `Cargo.toml` must be actively used.
3. **Zero-Signal Testing**: Unit tests should be comprehensive, deterministic, and fast.

---

## Submitting Pull Requests

1. **Fork the repository** and create a feature branch (`git checkout -b feature/my-new-feature`).
2. **Add unit tests** for any new functionality or bug fixes.
3. **Ensure tests and lints pass**:
   ```bash
   cargo test && cargo fmt --all -- --check && cargo clippy --all-targets --all-features -- -D warnings
   ```
4. **Update documentation** if you add CLI flags, configuration options, or change behavior.
5. **Commit your changes** with clear, descriptive commit messages.
6. **Open a Pull Request** describing the motivation, changes, and testing performed.

---

## Reporting Issues

- Search existing [Issues](https://github.com/JohnnyOrellana/mcp-caller/issues) before opening a new one.
- When reporting a bug, provide your OS version, Rust version (`rustc --version`), the exact CLI command run, and any relevant server output.
