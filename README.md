# Conduit: Research Library
*(working title: "The Invisible Procurement Stack")*

## Overview
This repository contains the research, market analysis, and implementation strategy for **Conduit** — a SaaS product targeting the "Three-Way Match" (Procurement) problem in the construction industry (specialty trade contractors, NAICS 238, 1–49 employees).

**Canonical segment framework:** Solo (1–4 emp, $49/mo), Small (5–9 emp, $99/mo), Mid (10–19 emp, ~$139 blended), Growth (20–49 emp, $299/mo). See [`segment-definitions.md`](./02_Market_Analysis/market/segment-definitions.md).

**Authoritative TAM/SAM/SOM:** Core TAM ~130,000 firms (NAICS 238, 5–49 emp); Core SAM ~110,000 (×85% QBO); Core SOM Y3 = 3,600 customers ($7.26M ARR). See [`tam-naics-recalculation.md`](./02_Market_Analysis/market/tam-naics-recalculation.md).

## Directory Structure

### [01_Problem_Space](./01_Problem_Space)
**Goal:** Understand the user, the pain, and the operational reality.
*   [`problem-research.md`](./01_Problem_Space/problem-research.md): The "Van-to-Office" Chaos Cycle. Detailed breakdown of the Three-Way Match failure. Table 2 updated with NAICS 238 segment counts (Solo/Small/Mid/Growth canonical names).
*   [`operational-context.md`](./01_Problem_Space/operational-context.md): Organizational structure, financial flows, and roles. Includes Section 1a: segment differentiation showing how org structure and chaos cycle vary by Solo/Small/Mid/Growth.

### [02_Market_Analysis](./02_Market_Analysis)
**Goal:** Validate the market size, competition, pricing, and unit economics.

*   [`business-plan-structure.md`](./02_Market_Analysis/business-plan-structure.md): Master business plan (DRAFT v3) — all sections populated with 4-segment model and NAICS 238-sourced TAM/SAM/SOM.
*   [`brand-naming.md`](./02_Market_Analysis/brand-naming.md): App name selection — **Conduit** — with full rationale, shortlist analysis, and trademark guidance.

**[market/](./02_Market_Analysis/market)**
*   [`segment-definitions.md`](./02_Market_Analysis/market/segment-definitions.md): **NEW — Canonical 4-segment framework.** Solo/Small/Mid/Growth definitions, buyer profiles, churn, LTV, LTV:CAC, GTM channel per segment. All files reference this as the source of truth.
*   [`tam-naics-recalculation.md`](./02_Market_Analysis/market/tam-naics-recalculation.md): **NEW — Authoritative TAM/SAM/SOM.** NAICS 238-sourced market size with 750k discrepancy explained. Validation checklist for pending Census SUSB data.
*   [`market-analysis.md`](./02_Market_Analysis/market/market-analysis.md): The "Missing Middle" thesis. Updated to 4-tier pricing and NAICS 238 TAM figures.
*   [`competitor-benchmarks.md`](./02_Market_Analysis/market/competitor-benchmarks.md): Feature matrix vs. Kojo, Field Materials, Remarcable, Receipt AI.
*   [`competitor-remarcable.md`](./02_Market_Analysis/market/competitor-remarcable.md): Deep dive — Remarcable (Series A, electrical procurement, app-based, enterprise-skewed).
*   [`competitor-receipt-ai.md`](./02_Market_Analysis/market/competitor-receipt-ai.md): Deep dive — Receipt AI (bootstrapped, SMS-to-QBO, expense capture only — Solo tier anchor/validator).
*   [`competitor-field-materials.md`](./02_Market_Analysis/market/competitor-field-materials.md): Deep dive — Field Materials ($19M funded, AI three-way match, $599/mo min, app-required, enterprise-skewed, Pricing Intelligence feature Feb 2026).
*   [`market-verdict.md`](./02_Market_Analysis/market/market-verdict.md): "Conditional GO" decision. Updated with segment-level verdict (Solo: funnel, Small: beachhead, Mid: primary paid, Growth: highest LTV).
*   [`pm-segment-market-sizing.md`](./02_Market_Analysis/market/pm-segment-market-sizing.md): Segmentation by PM-in-office presence. Updated with 4 canonical segments, NAICS 238 counts, and land-and-expand flywheel.
*   [`adjacent-market-opportunities.md`](./02_Market_Analysis/market/adjacent-market-opportunities.md): Scored evaluation of adjacent verticals (landscaping, auto repair, property management, restaurants) with expansion roadmap. TAM figures corrected to NAICS 238 range.

**[client/](./02_Market_Analysis/client)**
*   [`client-profile.md`](./02_Market_Analysis/client/client-profile.md): Trade contractor material procurement. Now includes "Buyer Profile by Segment" section with Solo/Small/Mid/Growth buyer personas, decision triggers, and purchase process.
*   [`client-workflow.md`](./02_Market_Analysis/client/client-workflow.md): Materials management, invoicing, 3-way match practices. Now includes segment workflow table showing how PM role and Three-Way Match reality differ by segment (Solo: no PM, truncated cycle).
*   [`client-workload-metrics.md`](./02_Market_Analysis/client/client-workload-metrics.md): Project volumes and invoice throughput by segment (Solo → Growth). Includes AP invoice/month estimates and COGS implication per segment.

**[financials/](./02_Market_Analysis/financials)**
*   [`pricing-strategy.md`](./02_Market_Analysis/financials/pricing-strategy.md): 4-tier pricing (Solo $49 / Starter $99 / Pro $299 / Enterprise), competitor anchoring, Van Westendorp per segment, per-segment ROI math.
*   [`unit-economics.md`](./02_Market_Analysis/financials/unit-economics.md): COGS, gross margin, segment-differentiated churn (Solo 12% → Growth 4%), LTV (Solo ~$390 → Growth ~$7,110), LTV:CAC matrix, break-even analysis.

**[investor/](./02_Market_Analysis/investor)**
*   [`investor-feedback.md`](./02_Market_Analysis/investor/investor-feedback.md): Investor verdict and "switching cost" moat analysis. Note added: feedback predates 4-segment framework; moats mapped to segments.
*   [`pitch-deck-and-script.md`](./02_Market_Analysis/investor/pitch-deck-and-script.md): 10-slide pitch deck with 2-minute script. Updated: Slide 6 uses NAICS 238 TAM; Slide 7 has 4-tier pricing + ARPU trajectory; Slide 3 has 4-segment chaos cycle table. Includes Investor Q&A Prep for 750k→130k question.

### [03_Solution_Architecture](./03_Solution_Architecture)
**Goal:** Define *how* we solve the problem technically and legally.
*   [`implementation-strategy.md`](./03_Solution_Architecture/implementation-strategy.md): Technical stack (Twilio + OpenAI + QBO), prompt engineering, "Zero-Login" UX.
*   [`legal-compliance.md`](./03_Solution_Architecture/legal-compliance.md): AI liability, Twilio 10DLC, Intuit compliance, data privacy, insurance.
*   [`app-scope.md`](./03_Solution_Architecture/app-scope.md): Complete product scope — 13 feature domains and 34 pages, phased MVP → Phase 2 (3-Way Match) → Phase 3 (Analytics).

### [04_Validation_Plan](./04_Validation_Plan)
**Goal:** De-risk the product before building.
*   [`validation-plan.md`](./04_Validation_Plan/validation-plan.md): The "Mom Test" interview strategy and smoke test plan. Now includes segment targeting, minimum interview counts per segment, and hypothesis priority table.
*   [`smoke-test-landing-page.md`](./04_Validation_Plan/smoke-test-landing-page.md): Landing page copy and structure. Updated: 750k stat corrected to ~130,000 NAICS 238 firms; A/B testing section added with segment-specific copy variants (Small/Solo/Growth).
*   [`interviews/`](./04_Validation_Plan/interviews): Interview guides for Owner, Office Manager, and Field Tech personas. Owner guide now includes Section 0: Segment Screener (ask "How many employees?" first to place owner in correct segment and adjust follow-up depth).

### [05_Financial_Model](./05_Financial_Model)
**Goal:** Quantify the business opportunity and funding path.
*   [`revenue-projections.md`](./05_Financial_Model/revenue-projections.md): 3-year revenue model with segment mix per year (Solo tracked separately; Core ARPU grows Y1 $122→Y3 $168 via mix shift). Total ARR: Y1 $146K / Y2 $1.52M / Y3 $7.49M.

### [06_Business_Model](./06_Business_Model)
**Goal:** Synthesize how value is created, how profit is captured, and the underlying logic of the business.
*   [`business-model.md`](./06_Business_Model/business-model.md): Value creation model (customers, differentiation, value chain, GTM), profit model (revenue sources, cost structure, profitability drivers), and business logic/goal. Cross-cuts all research into a single synthesized view.

## Quick Start
1.  Read [`operational-context.md`](./01_Problem_Space/operational-context.md) to understand the persona.
2.  Read [`problem-research.md`](./01_Problem_Space/problem-research.md) to understand the "Three-Way Match" failure.
3.  Read [`business-plan-structure.md`](./02_Market_Analysis/business-plan-structure.md) for the full business plan.

## Claude Code

This project is configured for Claude Code. Agent instructions, rules of engagement, and research methodology live in [`CLAUDE.md`](./CLAUDE.md) — auto-loaded into every Claude Code session.

**Available slash commands** (`.claude/commands/`):
*   `/new-research` — scaffold adding a new research file with correct placement and README update
