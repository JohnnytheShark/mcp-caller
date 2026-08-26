/**
 * terminal-demo.js — Interactive Terminal Simulator for mcp-caller Workflow
 */

export function renderTerminalDemo(containerId = 'terminal-demo-mount') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = \
    <div class="terminal-card" id="terminal-card-instance" aria-label="Terminal Session Simulation">
      <div class="terminal-header">
        <div class="terminal-dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <span class="terminal-title">mcp-caller session — interactive tool invocation</span>
        <span class="terminal-badge">LIVE DEMO</span>
      </div>

      <div class="terminal-body" id="term-output-body" role="region" aria-live="polite">
        <!-- Lines injected dynamically -->
      </div>

      <div class="terminal-footer">
        <span>Dynamic Prompts + JSON-RPC 2.0</span>
        <button class="term-action-btn" id="term-replay-btn" aria-label="Replay Terminal Demonstration">Replay Demo</button>
      </div>
    </div>
  \;

  startTerminalSimulation();

  const replayBtn = document.getElementById('term-replay-btn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      startTerminalSimulation();
    });
  }
}

let termTimer = null;

function startTerminalSimulation() {
  const body = document.getElementById('term-output-body');
  if (!body) return;

  if (termTimer) {
    clearTimeout(termTimer);
  }

  body.innerHTML = '';

  const steps = [
    {
      delay: 200,
      html: \<div class="term-line"><span class="term-prompt">$ </span><span class="term-user-text">mcp-caller call filesystem --tool read_file</span></div>\
    },
    {
      delay: 900,
      html: \<div class="term-line" style="color: var(--color-taupe);"><br>── Fill Parameters for 'read_file' ──<br>Read the complete contents of a file.<br><br><span style="color: var(--color-leaf);">path</span> (string) [required] - Path of the file to read<br></span><span class="term-prompt">&gt; </span><span class="term-user-text">Cargo.toml</span></div>\
    },
    {
      delay: 1800,
      html: \<div class="term-line"><br><span class="term-success">✔ SUCCESS</span> <span style="color: var(--color-taupe);">Tool execution finished (0.04s)</span><br><span style="color: var(--color-taupe);">────────────────────────────────────────────────────────────</span><br>[package]<br>name = "mcp-caller"<br>version = "0.1.0"<br>edition = "2021"<br><span style="color: var(--color-taupe);">────────────────────────────────────────────────────────────</span></div>\
    },
    {
      delay: 2800,
      html: \<div class="term-line"><span class="term-prompt">$ </span><span class="term-user-text">mcp-caller call github --tool get_issue --args '{"owner":"facebook","repo":"react","issue_number":1}' --json | jq .state</span></div>\
    },
    {
      delay: 3600,
      html: \<div class="term-line"><div class="term-json-box">"closed"</div></div>\
    }
  ];

  function runStep(index) {
    if (index >= steps.length) return;
    const step = steps[index];
    termTimer = setTimeout(() => {
      body.innerHTML += step.html;
      body.scrollTop = body.scrollHeight;
      runStep(index + 1);
    }, step.delay);
  }

  runStep(0);
}
