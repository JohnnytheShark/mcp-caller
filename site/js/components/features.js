/**
 * features.js — Architecture & Feature Cards Component
 */

export function renderFeatures(containerId = 'features-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section class="section" id="features" aria-label="Architecture & Capabilities">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Architecture & Design</div>
          <h2 class="section-title">Engineered for <span class="title-accent">Speed, Simplicity & Isolation</span></h2>
          <p class="section-desc">
            Built from first principles in Rust to supply human operators and scripts with direct access to MCP servers without LLM overhead.
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3>Zero LLM Overhead</h3>
            <p>
              Instantly discover and call MCP tools using a direct JSON-RPC transport. No token costs, no non-deterministic hallucinations, no rate limits.
            </p>
          </div>

          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3>Dynamic Schema Forms</h3>
            <p>
              Reads a tool's <code>inputSchema</code> and generates an interactive TUI prompting wizard on the fly. Handles nested objects, arrays, required fields, and enums seamlessly.
            </p>
          </div>

          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Native MCP stdio Protocol</h3>
            <p>
              Full compliance with the Model Context Protocol (<code>2024-11-05</code>) over standard input/output. Supports automatic pagination and content block parsing.
            </p>
          </div>

          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </div>
            <h3>Universal Auto-Discovery</h3>
            <p>
              Automatically locates and merges servers configured in local <code>mcp.json</code> files, Claude Desktop configs, and Antigravity profiles.
            </p>
          </div>

          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3>Scriptable and Headless</h3>
            <p>
              Pass direct <code>--args</code> and <code>--json</code> flags to bypass the TUI entirely. Perfect for CI/CD pipelines and cron orchestration.
            </p>
          </div>

          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3>Process Isolation</h3>
            <p>
              Operates strictly over standard I/O pipes as an isolated child process. The built-in Drop handler guarantees servers are gracefully terminated when the call completes.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
