# Conduit: Research Assistant Instructions

## Project Context

**Conduit** (working title: "The Invisible Procurement Stack") is a SaaS product solving the **Three-Way Match** problem for trade contractors (electrical, plumbing, HVAC) with 5–50 employees.

**The core problem — the "Van-to-Office Chaos Cycle":**
1. Field tech texts a vague request ("Need 500ft Romex") while driving — no structured data
2. PM calls supplier while driving — no formal PO created
3. Packing slip gets crumpled/lost in the van (the "Crumple Effect")
4. Bookkeeper pays the invoice blindly — no PO or receipt to reconcile against

**Financial impact:** 5% of revenue lost to billing errors; $42/invoice to process manually vs $2.36 automated; 83-day payment cycles vs 30-day standard.

**The solution:** Twilio SMS → OpenAI parsing → QuickBooks Online Draft PO. Field worker never touches a screen beyond their existing texts.

## Research Methodology

Prioritize **"Market Pull" over "Technology Push"** — validate the pain first, then the solution.

1. **Read first:** `01_Problem_Space/operational-context.md` then `01_Problem_Space/problem-research.md`
2. **Verify assumptions:** Ask "Does this solve the Three-Way Match failure?" before proposing features
3. **Validate tech:** Check API feasibility (Twilio, QuickBooks Online) before proposing complex AI solutions

## Rules of Engagement

- **Focus on the "Missing Middle":** 5–50 employees. Too big for mental math, too small for Procore.
- **Field First:** If the solution requires a field worker to login, it is wrong.
- **QBO is King:** QuickBooks Online integration must be flawless. All data flows *to* QBO, not just *from* it.
- **Skepticism over enthusiasm:** Validate pain points with evidence before validating solutions.

## Documentation Maintenance

When adding new research files:
1. Place them in the appropriate numbered directory (create the directory if needed)
2. **Always update `README.md`** — link and briefly describe the new file so future agents can find it

## Immediate Objectives

1. **Validate "Text-to-PO" workflow** — verify technical feasibility of Twilio → OpenAI → QBO Draft PO
2. **Execute "Smoke Test"** — set up landing page to test "Stop chasing receipts" value proposition
3. **Conduct 5 interviews** — use guides in `04_Validation_Plan/interviews/` with electricians/plumbers
4. **Legal prep** — draft ToS with AI disclaimer, register Twilio 10DLC, apply to Intuit Developer Program

## Research Library

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| `01_Problem_Space/` | User pain & operational reality | `operational-context.md`, `problem-research.md` |
| `02_Market_Analysis/` | Market size, competition, pricing, unit economics | `business-plan-structure.md`, `brand-naming.md` |
| `02_Market_Analysis/market/` | Market validation | `market-analysis.md`, `competitor-benchmarks.md`, `market-verdict.md` |
| `02_Market_Analysis/client/` | Persona & workflow detail | `client-profile.md`, `client-workflow.md`, `client-workload-metrics.md` |
| `02_Market_Analysis/financials/` | Pricing & unit economics | `pricing-strategy.md`, `unit-economics.md` |
| `02_Market_Analysis/investor/` | Pitch materials | `investor-feedback.md`, `pitch-deck-and-script.md` |
| `03_Solution_Architecture/` | Technical & legal design | `implementation-strategy.md`, `legal-compliance.md` |
| `04_Validation_Plan/` | De-risk before building | `validation-plan.md`, `smoke-test-landing-page.md`, `interviews/` |
| `05_Financial_Model/` | Revenue model & funding path | `revenue-projections.md` |

## Available Slash Commands

- `/new-research` — scaffold adding a new research file with correct placement and index updates
