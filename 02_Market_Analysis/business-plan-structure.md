# Master Business Plan: The Invisible Procurement Stack

**Status:** DRAFT v3
**Last Updated:** 2026-03-19
**Segment framework:** See [`02_Market_Analysis/market/segment-definitions.md`](market/segment-definitions.md) — canonical Solo (1–4), Small (5–9), Mid (10–19), Growth (20–49) definitions.
**TAM source:** See [`02_Market_Analysis/market/tam-naics-recalculation.md`](market/tam-naics-recalculation.md) — NAICS 238-sourced TAM/SAM/SOM.

---

## 1. Executive Summary

*   **Mission:** Eliminate the "Time Tax" on trade contractors by making procurement invisible.
*   **The Problem:** Trade contractors (1–49 employees) lose 5-10% of net margin due to lost receipts, unbilled materials, and manual data entry. Manual invoice processing costs **$15–$30/invoice** for SMBs (IOFM; Ardent Partners 2025), with fully-loaded costs reaching $30–$40 at very small firms. Approximately **22% of invoices require exception handling** before payment (Ardent Partners 2024/2025). Payment cycles for commercial subcontractors average **83 days** (PwC, 2018–2019). The problem exists across all firm sizes — but manifests differently from a 2-person shop losing receipts in the glovebox to a 40-person firm drowning in invoice exceptions.
*   **The Solution:** A "Text-to-Order" middleware that uses AI to bridge the gap between field SMS and QuickBooks Online — requiring zero behavior change from field workers.
*   **Market Opportunity:** ~130,000 specialty trade contractors (NAICS 238, 5–49 employees) in the U.S., ~110,000 of which use QuickBooks Online (85% QBO share, 6sense 2026). Additional ~330,000 firms in the 1–4 employee band addressed by the Solo tier. Specialized procurement platform adoption in the 5–50 employee segment remains below 10%.
*   **Revenue Model:** Four-tier SaaS subscription ($49–$299/mo) with 95%+ gross margins.
*   **Funding Ask:** Bootstrapped through Phase 1 (0-100 customers). Seed round ($500K-$1M) considered at Phase 2. *(See `05_Financial_Model/revenue-projections.md`)*

---

## 2. Company Overview

*   **Identity:** A "Product-Led Growth" (PLG) SaaS company.
*   **Differentiation:** "Zero-Login" interface for field workers (SMS-based) vs. competitors requiring complex apps. The field worker's entire interaction is texting a phone number—identical to their existing behavior.
*   **Legal Structure:** Delaware C-Corp (recommended for venture-compatible equity structure; consult attorney before filing).
*   **Location:** Remote-first. No physical HQ required for Phase 1.

---

## 3. Market Analysis

*(Sources: `02_Market_Analysis/market/market-analysis.md`, `02_Market_Analysis/client/client-profile.md`, `02_Market_Analysis/client/client-workflow.md`, `02_Market_Analysis/client/client-workload-metrics.md`)*

### 3.1 TAM / SAM / SOM

*(Full methodology in [`tam-naics-recalculation.md`](market/tam-naics-recalculation.md). Note: Earlier versions of this document cited "~700,000 trade contractors" — that figure was NAICS 23, all construction. The corrected scope is NAICS 238, specialty trades only.)*

**Core Market (5–49 employees):**
*   **Core TAM:** ~130,000 specialty trade contractors (NAICS 238, 5–49 emp.) | ~$262M software revenue potential
*   **Core SAM:** ~110,000 firms on QuickBooks (85% QBO adoption) | ~$222M
*   **Core SOM (Year 3):** 3,600 core customers (3.3% SAM penetration) | $7.26M ARR

**Solo Market (1–4 employees — land-and-expand funnel, tracked separately):**
*   **Solo TAM:** ~330,000 specialty trade firms (NAICS 238, 1–4 emp.) | ~$194M at $49/mo
*   **Solo SAM:** ~280,000 firms on QBO
*   **Solo SOM (Year 3):** 400 customers (organic-only) | $235K ARR

**Segment breakdown of Core TAM:**

| Segment | Size Band | Core TAM Firms | Core SAM (×85%) |
| :--- | :--- | :--- | :--- |
| Small | 5–9 emp | ~78,500 | ~66,700 |
| Mid | 10–19 emp | ~45,200 | ~38,400 |
| Growth | 20–49 emp | ~38,500 | ~32,700 |
| **Core Total** | **5–49 emp** | **~162,200** | **~137,900** |

*(Working estimates pending US Census SUSB NAICS 238 validation)*

### 3.2 Client Operational Reality

Trade contractors **supply their own materials** by default (included in their bid to the GC), meaning the procurement pain point sits squarely on the subcontractor's AP side. *(Source: `02_Market_Analysis/client/client-profile.md`)*

Key operational patterns:
*   **Active projects:** 4-10 simultaneous per firm; 80-200+ jobs/year. *(Source: `02_Market_Analysis/client/client-workload-metrics.md`)*
*   **Invoices processed:** 75-200+ per month from multiple vendors per project.
*   **Material management:** JIT delivery, van stock (Kanban/two-bin system), direct supplier accounts with 20-50% trade discounts. *(Source: `02_Market_Analysis/client/client-workflow.md`)*
*   **3-way match reality:** Small firms do it manually (spreadsheets, paper folders, QBO attachments). Mid-size firms automate via AP software. Most skip it entirely under workload pressure.

### 3.3 Competitors

*   **Enterprise:** Kojo (600+ contractors, $5B+ volume), Procore (too complex/expensive for SMBs).
*   **AI Challenger:** Field Materials ($19M raised, $700M+ processed, Pricing Intelligence launched Feb 2026).
*   **Electrical Vertical:** Remarcable ($15M Series A, 450+ supplier integrations).
*   **Direct Model Validation:** Receipt AI (SMS-to-QBO, 100+ businesses, 5-star QBO App Store).
*   **Status Quo:** Text + Excel + manual QBO entry (main competitor — 90%+ of market).

---

## 4. Product & Technology

*(Source: `03_Solution_Architecture/implementation-strategy.md`)*

*   **Core Offer:** SMS/MMS -> AI Parser -> QuickBooks PO/Bill sync. One-way push to QBO with human-in-the-loop approval.
*   **Tech Stack:** React + Vite + Shadcn/UI, Node.js + Hono, PostgreSQL + Prisma, GPT-5-mini (parsing) + GPT-5 (vision), Twilio (SMS), BullMQ + Redis (queues), Auth0 (office auth).
*   **IP Strategy:** "Slang Dictionary" for construction terms (trade-specific AI training data as moat). Correction feedback loop for continuous improvement.

---

## 5. Go-to-Market Strategy

*(Sources: `02_Market_Analysis/market/market-verdict.md`, `02_Market_Analysis/financials/pricing-strategy.md`)*

### 5.1 Pricing

*(Full analysis in [`pricing-strategy.md`](financials/pricing-strategy.md))*

| Tier | Price | Target Segment | Includes |
| :--- | :--- | :--- | :--- |
| **Solo** | $49/mo | 1–4 emp | Receipt capture + QBO sync; 1 office user, unlimited field texters |
| **Starter** | $99/mo | 5–9 emp | Text-to-PO workflow; 1 office user, unlimited field texters |
| **Pro** | $299/mo | 20–49 emp | Full 3-way match, AI invoice parsing, unlimited office seats at $29/seat |
| **Enterprise** | Custom | 50+ emp | API access, dedicated CSM, custom integrations |

*Mid segment (10–19 emp) transitions between Starter and Pro at $139 blended ARPU.*
14-day free trial, no credit card required. Annual discount: 2 months free.

**Buyer profile by segment:**
- **Solo:** Owner only. QBO Simple Start. Buys at $49/mo because it's clearly cheaper than losing receipts. Land-and-expand: upgrades to Starter as they grow.
- **Small:** Owner. QBO Essentials. Buys Starter because field techs texting + QBO sync requires zero behavior change.
- **Mid:** Owner + emerging bookkeeper. QBO Plus. Bookkeeper becomes internal champion.
- **Growth:** Office Manager/Controller. QBO Advanced. Pro tier necessary for multi-crew 3-way match; PM + controller both advocate retention.

### 5.2 Channels

1.  **QuickBooks App Store** (SEO + listings — primary organic channel).
2.  **Construction Influencers** (Matt Risinger, "The Contractor Fight" podcast, micro-influencers on Instagram/TikTok at $100-500/post).
3.  **Digital Communities** (Reddit r/Electricians, r/Plumbing, r/Construction; Facebook groups).
4.  **Content/SEO** targeting pain keywords: "construction purchase order template free," "how to track material costs in QuickBooks."

### 5.3 Sales Motion

Self-serve PLG. No sales team for accounts under $500/mo. Founder-led sales for Enterprise tier.

---

## 6. Operational Plan

### 6.1 Customer Support

*   **Tooling:** Intercom with AI-first triage (AI resolves tier-1 "how do I" questions; escalates sync/billing issues to human).
*   **SLA:** <4 hour first response during business hours (M-F 8am-6pm ET). <24 hours on weekends.
*   **Escalation Path:** AI Bot -> Founder (Phase 1) -> Dedicated CS hire (Phase 2, post-100 customers).

### 6.2 Onboarding

Automated "Zero-Touch" flow:
1.  User clicks "Connect with QuickBooks" (OAuth 2.0).
2.  System auto-imports: Vendor list, Customer/Project list, Item catalog (up to 1,000 most recent).
3.  User adds field worker phone numbers.
4.  System sends welcome SMS to each field worker with instructions: "Text your orders to this number."
5.  **Target:** Sign up -> first text sent -> PO in QBO in **< 5 minutes**.

### 6.3 Legal & Compliance

*(Full analysis in `03_Solution_Architecture/legal-compliance.md`)*

*   **AI Liability:** Terms of Service include explicit disclaimer that AI-generated POs are *drafts* requiring human approval. User indemnification clause for orders approved without review. The system never auto-sends a PO to a vendor without office manager confirmation.
*   **Data Privacy:** Employee PII (phone numbers) encrypted at rest (AES-256) and in transit (TLS 1.3). CCPA-compliant data deletion on request.
*   **Twilio 10DLC:** Register as Standard Brand with EIN from day 1. Campaign type: "Conversational Messaging" for 2-way procurement communication.
*   **Intuit Compliance:** Security assessment required for `accounting.transactions` write scopes. SOC 2 Type II planned for Phase 2.

---

## 7. Financial Plan

*(Full model in `05_Financial_Model/revenue-projections.md` and `02_Market_Analysis/financials/unit-economics.md`)*

### 7.1 Revenue Model

*(Full model in [`revenue-projections.md`](../05_Financial_Model/revenue-projections.md))*

**Segment mix drives ARPU growth** (not price increases):
- Year 1: 0% Solo, 60% Small, 35% Mid, 5% Growth → Core ARPU $122/mo
- Year 2: 10% Solo, 50% Small, 30% Mid, 10% Growth → Core ARPU $135/mo
- Year 3: 10% Solo, 35% Small, 30% Mid, 25% Growth → Core ARPU $168/mo

| Metric | Year 1 | Year 2 | Year 3 |
| :--- | :--- | :--- | :--- |
| **Total Customers** | 100 | 1,000 | 4,000 |
| **— Core Customers** | 100 | 900 | 3,600 |
| **— Solo Customers** | 0 | 100 | 400 |
| **Core ARPU** | $122/mo | $135/mo | $168/mo |
| **Core MRR** | $12,200 | $121,500 | $604,800 |
| **Core ARR** | $146K | $1.46M | $7.26M |
| **Solo ARR (separate)** | $0 | $59K | $235K |
| **Total ARR** | $146K | $1.52M | $7.49M |

*Previous model (DRAFT v2) projected $180K/$2.1M/$9.6M ARR. Updated model reflects more accurate segment mix (fewer high-ARPU Pro customers in Y1–2; Solo tier addition). Year 3 total ARR of $7.49M is the corrected target.*

### 7.2 Unit Economics

*(Full model in [`unit-economics.md`](financials/unit-economics.md))*

| Segment | ARPU | Monthly Churn | LTV | LTV:CAC ($150 CAC) |
| :--- | :--- | :--- | :--- | :--- |
| Solo | $49 | 12% | ~$390 | 2.6:1 (organic only) |
| Small | $99 | 9% | ~$1,050 | 7.0:1 |
| Mid | $139 | 6% | ~$2,215 | 14.8:1 |
| Growth | $299 | 4% | ~$7,110 | 47.4:1 |

*   **COGS per order:** ~$0.022 (text) to ~$0.035 (vision/photo).
*   **Gross Margin:** 95.1–95.8% by tier.
*   **CAC target by segment:** Solo organic-only; Small <$350; Mid <$700; Growth <$2,000.
*   **CAC Payback:** 1.0–3.3 months depending on segment and phase.

### 7.3 Cost Structure (Monthly, Phase 1)

*   Cloud Infrastructure (Vercel/Railway + Postgres + Redis): ~$200
*   Twilio: ~$50 (low volume)
*   OpenAI API: ~$100
*   Auth0: $0 (free tier)
*   Intercom: ~$75
*   Domain/Email/Misc: ~$50
*   **Total Operational Burn (excl. salary): ~$475/mo**

### 7.4 Break-Even

At $99 ARPU (Starter) and $475/mo operational cost: **break-even at ~5 paying customers** (excluding founder salary). At $5K/mo founder draw: break-even at **~55 customers**.

---

## 8. Team & Organization

### 8.1 Founding Team

*   **Founder:** Technical founder handling product, engineering, GTM, and customer development. Augmented by AI agents for code generation, content drafting, support triage, and research.

### 8.2 Hiring Plan

| Phase | Trigger | Hire | Role |
| :--- | :--- | :--- | :--- |
| **Phase 1** | 0-100 customers | None | Founder + AI agents |
| **Phase 2** | 100+ customers | 1st hire | Customer Success / Support (handles onboarding, sync issues, QBO troubleshooting) |
| **Phase 3** | 500+ customers | 2nd hire | Full-stack engineer (QBO integration depth, Xero integration, mobile) |
| **Phase 3** | 500+ customers | 3rd hire | GTM / Content marketer (SEO, influencer partnerships, QBO App Store optimization) |

### 8.3 Advisory Gaps

*   **Construction Operations:** Need a working trade contractor owner as advisor (validates product decisions, provides field credibility).
*   **Accounting/QBO:** Need a CPA or bookkeeper specializing in construction job costing (validates integration logic).

---

## 9. Risk Analysis

| # | Risk | Severity | Probability | Mitigation |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Platform Risk:** Total reliance on QBO API. Intuit changes terms, throttles, or blocks app. | High | Medium | Phase 2: Add Xero integration. Maintain SOC 2 compliance. Build direct relationship with Intuit developer relations. |
| 2 | **AI Hallucination:** GPT orders wrong item/quantity. "10 breakers" becomes "100 breakers" = $5,000 error. | High | Medium | Mandatory human-in-the-loop: No PO sent to vendor without office manager click. Confidence threshold (>0.8) for auto-fill; flag low-confidence items. $0 auto-approval threshold initially. |
| 3 | **Regulatory (Twilio 10DLC):** Carrier blocks messages; registration rejected or delayed. | Medium | Medium | Register as Standard Brand with EIN from day 1. Maintain Twilio Trust Hub compliance. Fallback: WhatsApp Business API or email-based intake. |
| 4 | **Copycat Risk:** Receipt AI already validates the SMS-to-QBO model. Kojo or Procore launches "Lite" for SMBs. | Medium | Medium | Compete on PLG speed (self-serve in 5 min vs. weeks). Construction-specific AI training (Slang Dictionary) as compounding moat. Deep QBO integration quality as differentiator. |
| 5 | **Adoption Risk:** Field workers refuse to use even SMS-based system. | Medium | Low | Zero behavior change required — they already text. The system wraps existing behavior, not replaces it. Risk is low because SMS is the current default workflow. |
| 6 | **Churn Risk:** Construction SaaS faces 15-20% monthly churn. Seasonal business fluctuations. | Medium | High | Proactive health scoring. Usage-based alerts. Annual pricing discount (2 months free) to lock in retention. Aim for 120%+ NRR via upsell. |
| 7 | **Data Breach:** Employee phone numbers, financial data exposed. | High | Low | AES-256 encryption at rest, TLS 1.3 in transit. SOC 2 Type II (Phase 2). Strict RBAC. No local password storage. |
