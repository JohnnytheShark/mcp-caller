import { TUTORIALS_DATA } from './tutorials.js';
import { HOWTO_DATA } from './how-to.js';
import { REFERENCE_DATA } from './reference.js';
import { EXPLANATION_DATA } from './explanation.js';

export const DOCS_DATA = {
  ...TUTORIALS_DATA,
  ...HOWTO_DATA,
  ...REFERENCE_DATA,
  ...EXPLANATION_DATA
};

export const DOCS_CATEGORIES = [
  {
    id: "tutorials",
    name: "Tutorials",
    badge: "🎓 LEARNING-ORIENTED",
    axis: "Practical Acquisition",
    desc: "Step-by-step guided lessons for newcomers.",
    primaryDoc: "tutorials/getting-started.md",
    keys: ["tutorials/getting-started.md"]
  },
  {
    id: "how-to",
    name: "How-To Guides",
    badge: "🛠️ PROBLEM-ORIENTED",
    axis: "Practical Application",
    desc: "Task-focused recipes to solve specific problems.",
    primaryDoc: "how-to/configure-servers.md",
    keys: [
      "how-to/configure-servers.md",
      "how-to/call-tool-interactively.md",
      "how-to/call-tool-from-cli.md",
      "how-to/inspect-a-tool.md",
      "how-to/add-http-transport.md"
    ]
  },
  {
    id: "reference",
    name: "Reference",
    badge: "📖 INFORMATION-ORIENTED",
    axis: "Theoretical Application",
    desc: "Authoritative specifications for CLI flags and configuration.",
    primaryDoc: "reference/cli-commands.md",
    keys: [
      "reference/cli-commands.md",
      "reference/config-schema.md",
      "reference/mcp-protocol.md",
      "reference/architecture.md"
    ]
  },
  {
    id: "explanation",
    name: "Explanation",
    badge: "💡 UNDERSTANDING-ORIENTED",
    axis: "Theoretical Acquisition",
    desc: "Deep conceptual discussions on architecture and protocol.",
    primaryDoc: "explanation/why-mcp-caller.md",
    keys: [
      "explanation/why-mcp-caller.md",
      "explanation/transport-abstraction.md",
      "explanation/config-discovery.md",
      "explanation/spiker-adr.md"
    ]
  }
];
