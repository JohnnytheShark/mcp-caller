#!/usr/bin/env bash
# ==============================================================================
# mcp-caller Installer for Linux and macOS
# Usage: curl -fsSL https://raw.githubusercontent.com/JohnnytheShark/mcp-caller/main/install.sh | bash
# ==============================================================================

set -euo pipefail

REPO="JohnnytheShark/mcp-caller"
GITHUB_API="https://api.github.com/repos/${REPO}/releases/latest"

echo "==========================================================="
echo "  mcp-caller Installer (Linux / macOS)"
echo "==========================================================="

# 1. Detect OS & Architecture
OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

case "${OS}" in
  linux)
    case "${ARCH}" in
      x86_64)
        TARGET="x86_64-unknown-linux-gnu"
        ;;
      aarch64|arm64)
        TARGET="aarch64-unknown-linux-gnu"
        ;;
      *)
        echo "[-] Unsupported Linux architecture: ${ARCH}" >&2
        exit 1
        ;;
    esac
    ;;
  darwin)
    case "${ARCH}" in
      arm64|aarch64)
        TARGET="aarch64-apple-darwin"
        ;;
      x86_64)
        TARGET="x86_64-apple-darwin"
        echo "[-] Precompiled binaries for macOS x86_64 are currently not built by default." >&2
        echo "[-] To install on ${ARCH}, build with cargo: cargo install mcp-caller" >&2
        exit 1
        ;;
      *)
        echo "[-] Unsupported macOS architecture: ${ARCH}" >&2
        exit 1
        ;;
    esac
    ;;
  *)
    echo "[-] Unsupported operating system: ${OS}" >&2
    echo "[-] For Windows, run: irm https://raw.githubusercontent.com/${REPO}/main/install.ps1 | iex" >&2
    exit 1
    ;;
esac

echo "[+] Detected system: ${OS} (${ARCH}) -> Target: ${TARGET}"

# 2. Fetch latest release version
echo "[+] Fetching latest release info from GitHub..."
TAG=$(curl -sSL -H "Accept: application/vnd.github.v3+json" "${GITHUB_API}" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

if [ -z "${TAG}" ]; then
  echo "[!] Could not fetch latest release via API, defaulting to v0.1.0"
  TAG="v0.1.0"
fi

ARCHIVE_NAME="mcp-caller-${TAG}-${TARGET}"
DOWNLOAD_URL="https://github.com/${REPO}/releases/download/${TAG}/${ARCHIVE_NAME}.tar.gz"

echo "[+] Downloading ${ARCHIVE_NAME}.tar.gz (${TAG})..."
TMP_DIR=$(mktemp -d)
trap 'rm -rf "${TMP_DIR}"' EXIT

curl -fsSL "${DOWNLOAD_URL}" -o "${TMP_DIR}/${ARCHIVE_NAME}.tar.gz"

# 3. Extract Archive
echo "[+] Extracting archive..."
tar -xzf "${TMP_DIR}/${ARCHIVE_NAME}.tar.gz" -C "${TMP_DIR}"

# 4. Install Destination
INSTALL_DIR="${HOME}/.local/bin"
if [ -w "/usr/local/bin" ]; then
  INSTALL_DIR="/usr/local/bin"
fi
mkdir -p "${INSTALL_DIR}"

mv "${TMP_DIR}/${ARCHIVE_NAME}/mcp-caller" "${INSTALL_DIR}/mcp-caller"
chmod +x "${INSTALL_DIR}/mcp-caller"

echo ""
echo "==========================================================="
echo "  ✓ Successfully installed mcp-caller to ${INSTALL_DIR}/mcp-caller"
echo "==========================================================="
echo ""

# 5. Check PATH
if ! echo "${PATH}" | grep -q "${INSTALL_DIR}"; then
  echo "[!] Notice: ${INSTALL_DIR} is not in your PATH."
  echo "    Add the following line to your shell profile (~/.bashrc, ~/.zshrc):"
  echo ""
  echo "    export PATH=\"${INSTALL_DIR}:\$PATH\""
  echo ""
fi

echo "Run 'mcp-caller' to get started!"
