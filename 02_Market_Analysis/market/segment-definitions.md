# Conduit Customer Segment Definitions

**This is the canonical segment reference.** All other research files use these definitions. Do not redefine segments locally in other documents — link here instead.

Last updated: 2026-03-19

---

## Overview

Conduit targets specialty trade contractors (NAICS 238) across four distinct size bands. Each segment has a different version of the Van-to-Office Chaos Cycle, a different buyer, and a different Conduit product tier.

> **The core rule:** Segment size = total headcount including field workers, not just office staff.

---

## The Four Segments

### Segment 1: Solo (1–4 Employees)

| Attribute | Detail |
|---|---|
| **Canonical name** | Solo |
| **Size band** | 1–4 total employees |
| **Typical composition** | Owner + 1–3 field helpers (often family or apprentices) |
| **Who is the buyer** | The owner exclusively — no separate office role exists |
| **QBO tier typical** | QBO Simple Start or Self-Employed; used quarterly for taxes |
| **Conduit tier** | **Solo — $49/mo** |
| **GTM channel** | QBO App Store organic search only; never paid acquisition |

**How the chaos cycle manifests:**

The Van-to-Office Chaos Cycle is *truncated* in this segment. The owner IS the field worker, so there is no field-to-office communication breakdown. The failure mode shifts: receipts accumulate in pockets, gloveboxes, and the bottom of work bags. Material costs get mentally tracked but rarely documented in real time. Job costing for tax purposes happens once a quarter — often with a shoebox of crumpled receipts.

The Three-Way Match problem is reduced to a two-leg failure: **there is no PO** (the owner calls Graybar or Ferguson directly from memory), and the **invoice is paid on trust** because the receipt is long gone. The bookkeeper (often a spouse or seasonal CPA) reconciles what they can at tax time.

**Primary pain:** Receipt and expense capture for job costing. Not procurement workflow.

**Land-and-expand play:** A Solo customer who grows to 5–6 employees becomes a Small customer at $0 incremental CAC. This is the primary strategic value of the Solo tier — not ARPU, but top-of-funnel ownership.

**Unit economics:**
- Monthly churn: ~12% (single owner = single point of failure; cancels in slow season)
- LTV: ~$387 (at $49/mo, 95% gross margin, 12% monthly churn)
- LTV:CAC floor: 2.6:1 at $150 CAC — **organic acquisition only; never pay to acquire Solo customers**

---

### Segment 2: Small (5–9 Employees)

| Attribute | Detail |
|---|---|
| **Canonical name** | Small |
| **Size band** | 5–9 total employees |
| **Typical composition** | Owner + 2–4 field techs + (sometimes) part-time admin |
| **Who is the buyer** | The owner — manages both field and back-office; may have a spouse or part-time bookkeeper for QBO |
| **QBO tier typical** | QBO Essentials; used weekly by owner or part-time bookkeeper |
| **Conduit tier** | **Starter — $99/mo** |
| **GTM channel** | Community (contractor subreddits, trade podcasts, Facebook groups) + QBO App Store |

**How the chaos cycle manifests:**

This is the **core Conduit use case** and the primary beachhead segment. The full Van-to-Office Chaos Cycle is present:

1. Field tech texts a vague material request while driving ("need more Romex")
2. Owner calls supplier from the truck — no formal PO created
3. Packing slip gets crumpled in the van or left at the job site
4. Owner (or part-time bookkeeper) pays the invoice with no receipt to match against

The owner cannot track all field techs simultaneously. Materials bleed out without documentation. A 5-person electrical shop completing 3–5 jobs/month can lose $2,000–5,000/month to unbilled materials and over-paid invoices.

**Primary pain:** Text-to-PO with zero friction for field workers (no login, no app install).

**Unit economics:**
- Monthly churn: ~9% (seasonal; owner-controlled; some annual plan adoption reduces effective churn)
- LTV: ~$997 (at $99/mo, 95% gross margin, 9% monthly churn)
- LTV:CAC: 6.6:1 at $150 CAC — healthy for community channels; marginal for paid at $300+ CAC

---

### Segment 3: Mid (10–19 Employees)

| Attribute | Detail |
|---|---|
| **Canonical name** | Mid |
| **Size band** | 10–19 total employees |
| **Typical composition** | Owner + 1 emerging PM/foreman + 6–14 field techs + part-time bookkeeper |
| **Who is the buyer** | Owner with input from emerging office manager; bookkeeper becomes an internal champion |
| **QBO tier typical** | QBO Plus; used daily by part-time bookkeeper |
| **Conduit tier** | **Starter → Pro transition** ($99–$299/mo depending on feature need) |
| **GTM channel** | QBO App Store + QBO ProAdvisor referrals (bookkeeper recommends) |

**How the chaos cycle manifests:**

A PM role exists but is not yet clean — the same person manages field and some back-office tasks. The bookkeeper is part-time or outsourced and spends 15–25 hours/week on manual reconciliation. Three-way matching is *attempted* in spreadsheets or paper folders, but packing slips are still incomplete, and POs are created inconsistently.

This segment has the **best unit economics for paid acquisition** — they have enough pain to pay $99–$299/mo, and a bookkeeper who advocates for keeping the software (creating a second internal champion beyond the owner).

**Primary pain:** Packing slip digitization + basic three-way match automation. The transition from "we try to do this manually" to "this happens automatically."

**Unit economics:**
- Monthly churn: ~6% (bookkeeper as second internal champion reduces cancellation risk)
- Blended ARPU: ~$139 (mix of Starter and Pro)
- LTV: ~$2,100 (at $139/mo, 95% gross margin, 6% monthly churn)
- LTV:CAC: 14:1 at $150 CAC — best ratio for paid acquisition

---

### Segment 4: Growth (20–49 Employees)

| Attribute | Detail |
|---|---|
| **Canonical name** | Growth |
| **Size band** | 20–49 total employees |
| **Typical composition** | Owner + 1–2 PMs + dedicated office manager or controller + 15–40 field techs |
| **Who is the buyer** | Office Manager or Controller — owner signs off but back-office drives the decision |
| **QBO tier typical** | QBO Advanced; used daily by controller; multiple users |
| **Conduit tier** | **Pro — $299/mo** (potential Enterprise path as seat count scales) |
| **GTM channel** | QBO ProAdvisor channel (bookkeeper/controller recommends) + direct outreach |

**How the chaos cycle manifests:**

Multiple active crews running simultaneously create the highest dollar leakage in aggregate. A procurement process exists on paper, but execution is slow and manual: POs require cross-department emails, invoice exceptions bounce between PM and office manager, and the 83-day average payment cycle hits this segment hardest because vendor relationships are large enough to matter.

This segment is the **highest lifetime value customer** and should receive proportionally higher CAC investment via the ProAdvisor/bookkeeper channel.

**Primary pain:** Full three-way match automation + price variance alerts + multi-job cost tracking. The transition from "we have a process" to "the process runs itself."

**Unit economics:**
- Monthly churn: ~4% (PM + bookkeeper both depend on the system; strong data lock-in via price history and QBO Chart of Accounts mapping)
- ARPU: $299/mo
- LTV: ~$6,775 (at $299/mo, 95% gross margin, 4% monthly churn)
- LTV:CAC: 45:1 at $150 CAC; 13.6:1 at $500 CAC — worth the highest acquisition spend

---

## Segment Summary Table

| | Solo (1–4) | Small (5–9) | Mid (10–19) | Growth (20–49) |
|---|---|---|---|---|
| **Buyer** | Owner only | Owner | Owner + bookkeeper | Office Mgr/Controller |
| **Chaos cycle** | Truncated (owner IS field) | Full cycle | Full cycle, manual reconciliation | Full cycle, highest $ leakage |
| **Primary pain** | Receipt capture / job costing | Text-to-PO, zero field friction | Packing slip capture + basic 3-way match | Full 3-way match + price variance |
| **Conduit tier** | Solo $49/mo | Starter $99/mo | Starter/Pro $99–299/mo | Pro $299/mo |
| **QBO tier** | Simple Start / Self-Employed | Essentials | Plus | Advanced |
| **Monthly churn** | 12% | 9% | 6% | 4% |
| **LTV** | ~$387 | ~$997 | ~$2,100 | ~$6,775 |
| **LTV:CAC ($150)** | 2.6:1 | 6.6:1 | 14:1 | 45:1 |
| **GTM priority** | Growth funnel (land-and-expand) | Beachhead | Primary paid target | Highest-value; ProAdvisor channel |

---

## What Conduit Does NOT Target

- **General Contractors (NAICS 236/237):** They have a different procurement model (subcontractor bids, not materials purchasing) and are served by Procore, Sage, and other GC-focused platforms.
- **Residential homebuilders:** Different buyer, different materials flow, different software ecosystem.
- **Solo self-employed (0 employees, Schedule C):** No employees means no field-to-office gap. Receipt AI and Expensify serve this segment adequately.
- **Firms with 50+ employees:** These firms have dedicated procurement staff and are served by Kojo, Procore, or NetSuite. They are not underserved.

---

## The 750k vs. Corrected TAM Note

Many early research documents cite "750,000 U.S. trade contractors (5–50 employees)" as the TAM. This figure originates from US Census Bureau data for **NAICS 23 (all construction)**, which includes general contractors, homebuilders, and highway/civil construction — all out of Conduit's scope.

The correct TAM uses **NAICS 238 (Specialty Trade Contractors only)**. See [`tam-naics-recalculation.md`](tam-naics-recalculation.md) for the full sourced calculation.

---

## The Solo Tier: Strategic Rationale

Adding a $49/mo Solo tier is not about ARPU — it is about owning the growth trajectory of the smallest shops before they become $99–$299/mo customers.

**Why Solo is included:**
1. Receipt AI ($20–50/mo) already proves willingness to pay for SMS-to-QBO receipt capture at this segment
2. A Solo customer who grows to 7 employees upgrades to Starter at $0 incremental CAC
3. Solo creates community and word-of-mouth among contractors who talk to other contractors

**Why Solo is NOT the beachhead:**
1. At 12% monthly churn, Solo LTV (~$387) is unit-economics-negative at any paid acquisition cost
2. The "invisible procurement stack" brand narrative applies to Starter and above — Solo is receipt capture, which is a different (though adjacent) positioning
3. Investor-facing ARR figures should not blend Solo ARPU — it distorts the unit economics story

**Solo acquisition rule:** Solo customers are acquired exclusively via organic channels (QBO App Store search, word-of-mouth, contractor forums). No paid advertising. No outbound sales. Solo is a growth flywheel, not a revenue line.

---

## Sources

This segment framework is derived from:
- Operational context research: [`01_Problem_Space/operational-context.md`](../../01_Problem_Space/operational-context.md)
- Client profile research: [`02_Market_Analysis/client/client-profile.md`](../client/client-profile.md)
- Client workload metrics: [`02_Market_Analysis/client/client-workload-metrics.md`](../client/client-workload-metrics.md)
- Unit economics: [`02_Market_Analysis/financials/unit-economics.md`](../financials/unit-economics.md)
- TAM recalculation: [`02_Market_Analysis/market/tam-naics-recalculation.md`](tam-naics-recalculation.md)
