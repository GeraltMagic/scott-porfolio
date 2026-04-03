# Scott Herford — Portfolio

Portfolio site for Scott Herford, Product Manager.

Built with plain HTML/CSS. No build step. Live on GitHub Pages.

## Projects

### AssortIQ — AI Assortment Optimization
AI-powered assortment optimization for mid-market retail. Full product definition and working technical implementation.

**What's included:**
- **MCP Server** — 6 tools (demand forecasting, SKU similarity, store clustering, assortment recommendations, category health, semantic search) and 3 resources, built on FastMCP + Anthropic SDK
- **8 Product Design Surfaces** — Two iterations of UI design:
  - V1: Executive Overview, Assortment Copilot, Scenario Workspace, Approval Governance
  - V2 Command Center: Holistic Business View, Copilot Diagnosis, Simulation & Approval, User Flow
- **Live Prototype** — [Gradio Space on HuggingFace](https://huggingface.co/spaces/TatorTotXX/AssortmentInsights) with 3 interactive tabs (Business Overview, Copilot, Simulation) calling real ML tools
- **Terminal REPL** — Enhanced MerchAssistant with slash commands (`/overview`, `/diagnose`, `/simulate`) and Rich-formatted output
- **Design ↔ API Mapping** — Each design surface maps 1-to-1 to MCP server tools

**Stack:** Python · FastMCP · Anthropic SDK · Chronos-Bolt · sentence-transformers · scikit-learn · Gradio

### WeatherWear — Personalized Recommendation Engine
Personalized clothing recommendation engine with dynamic feature weighting, explainable scoring, and a live feedback loop.

**Stack:** React · JSX · Lucide

### Attribute Enrichment for Ecommerce Discovery
Self-improving attribute enrichment system for ecommerce catalogs with ML pipeline, confidence scoring, and behavioral feedback loops.

**Stack:** React · Hooks

### Royals Player Insights Dashboard
Sports analytics engine with SARIMAX forecasting, feature importance, causal inference, and anomaly detection.

**Stack:** Python · pandas · statsmodels · DoWhy · pybaseball

## Structure

```
├── index.html                          # Home page
├── css/style.css                       # Shared styles
├── projects/
│   ├── assortiq.html                   # AssortIQ case study
│   ├── assortiq-designs.html           # AssortIQ design screens (V1 + V2)
│   ├── attribute-enrichment.html       # Attribute enrichment case study
│   ├── weatherwear.html                # WeatherWear case study
│   └── royals.html                     # Royals dashboard case study
├── images/
│   └── assortiq/
│       ├── 01-executive-overview.png   # V1 screens
│       ├── 02-assortment-copilot.png
│       ├── 03-scenario-workspace.png
│       ├── 04-approval-governance.png
│       ├── 05-holistic-business-view.png  # V2 screens
│       ├── 06-copilot-diagnosis.png
│       ├── 07-simulation-approval.png
│       └── 08-user-flow.png
└── demos/                              # Interactive demos
```

## Hosting

Enable GitHub Pages in repository Settings → Pages → Source: Deploy from branch → `main` → `/ (root)`.
