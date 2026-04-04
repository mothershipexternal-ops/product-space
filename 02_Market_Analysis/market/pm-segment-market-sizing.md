# Market Segmentation: By Firm Size and PM Presence

**Last Updated:** 2026-03-19
**Supersedes:** Initial version filed 2026-03-18 (added Solo/1-4 band; aligned with canonical segment names)
**Segment framework:** See [`segment-definitions.md`](segment-definitions.md) — canonical Solo/Small/Mid/Growth definitions.
**TAM source:** See [`tam-naics-recalculation.md`](tam-naics-recalculation.md) — NAICS 238-sourced firm counts.
**Related files:** `market-verdict.md`, `unit-economics.md`, `revenue-projections.md`

---

## 1. The Question

Our earlier model treated the 750k-firm TAM as a homogeneous block. It isn't.

The "Van-to-Office Chaos Cycle" — field tech texts a request → PM calls supplier while driving → packing slip gets crumpled → bookkeeper pays blind — presupposes a specific operational structure. Not all segments have this structure.

This file segments the TAM by firm size **and** PM presence, answering: which segment should the initial go-to-market prioritize, and why?

---

## 2. A Note on the 750k Figure

The `market-verdict.md` (pre-2026-03-19) and several investor documents cited **700,000–800,000 construction firms with employees in the U.S.** This figure is NAICS 23 (all construction, including general contractors, highway/civil, homebuilders) — **not specialty trade contractors specifically**.

**The correct TAM uses NAICS 238 (Specialty Trade Contractors only):**
- Core TAM (5–49 employees, NAICS 238): ~**110,000–160,000** establishments
- Solo TAM (1–4 employees, NAICS 238): ~**300,000–360,000** establishments
- Total NAICS 238: ~**460,000–480,000** establishments (all size bands)

The earlier "250k adjusted" figure used in this analysis was a good directional estimate (Census NAICS 23, 5-49 band only). The NAICS 238-specific count is now the authoritative source. See [`tam-naics-recalculation.md`](tam-naics-recalculation.md) for the full calculation.

For this analysis, we use **110,000–160,000 as the Core TAM** and note where the 750k figure appeared.

---

## 3. TAM Segmentation by Firm Size (NAICS 238, Specialty Trades)

Using the four canonical segments from [`segment-definitions.md`](segment-definitions.md):

| Canonical Segment | Size Band | Share of Core TAM (5–49) | Core TAM (130k mid-estimate) | Solo TAM (1-4 emp, separate) |
|---|---|---|---|---|
| **Small** | 5–9 emp | ~50% | ~65,000 | — |
| **Mid** | 10–19 emp | ~30% | ~39,000 | — |
| **Growth** | 20–49 emp | ~20% | ~26,000 | — |
| **Core Total** | 5–49 emp | 100% | **~130,000** | — |
| **Solo** | 1–4 emp | (separate segment) | — | **~330,000** |

*Distribution percentages derived from NAICS 238 SUSB data patterns; see tam-naics-recalculation.md for sourced figures.*

---

## 4. PM-in-Office Penetration by Segment

A "PM in the office" = a dedicated person whose primary function includes coordinating procurement, managing subcontractors, and interfacing with the bookkeeper. Not the owner who also does field work.

| Canonical Segment | Size Band | PM Rate | PM shops (130k Core) | No-PM shops (130k Core) |
|---|---|---|---|---|
| **Solo** | 1–4 emp | 0–5% | ~0–17k (of 330k) | ~313k+ |
| **Small** | 5–9 emp | 10% | ~6,500 | ~58,500 |
| **Mid** | 10–19 emp | 35% | ~13,650 | ~25,350 |
| **Growth** | 20–49 emp | 65% | ~16,900 | ~9,100 |
| **Core Total** | 5–49 emp | ~28% | **~37,000** | **~93,000** |

**Solo note:** The Solo segment has no PM by definition — the owner IS the field worker and the office. The "chaos cycle" is truncated (no field-to-office gap). The Solo tier solves receipt capture, not PO workflow.

---

## 5. How PM Presence Changes the Product Dynamics

| Variable | Solo (No PM by def.) | Small (Owner-Operator) | Mid (Emerging PM) | Growth (Dedicated PM/Controller) |
|---|---|---|---|---|
| **Who buys** | Owner only | Owner (reluctant, busy) | Owner + bookkeeper | Office Manager (motivated) |
| **Conversion friction** | Moderate — must see receipt value | High — must pull from field mentally | Low-medium — bookkeeper wants this | Low — PM wants it, it solves daily problem |
| **Tier preference** | Solo ($49) | Starter ($99) | Starter → Pro | Pro ($299) |
| **Churn driver** | Seasonal; single decision-maker | Seasonal slow periods; owner cancels | Bookkeeper advocates retention | PM + controller both depend on it |
| **Monthly churn estimate** | 12% | 9% | 6% | 4% |
| **QBO dependency** | Quarterly for taxes | Weekly; owner-managed | Daily; bookkeeper-managed | Daily; controller-managed; mission-critical |
| **Primary CAC channel** | QBO App Store organic only | Community (Reddit, influencers) | QBO App Store + ProAdvisor | ProAdvisor referrals; direct email |

---

## 6. Unit Economics by Segment

*For full calculation, see [`unit-economics.md`](../financials/unit-economics.md). Summary below.*

| Segment | ARPU | Monthly Churn | LTV | LTV:CAC ($150) | LTV:CAC ($500) |
|---|---|---|---|---|---|
| **Solo** | $49 | 12% | ~$390 | 2.6:1 (organic only) | 0.8:1 (not viable) |
| **Small** | $99 | 9% | ~$1,050 | 7.0:1 | 2.1:1 (marginal) |
| **Mid** | $139 blended | 6% | ~$2,215 | 14.8:1 | 4.4:1 |
| **Growth** | $299 | 4% | ~$7,110 | 47.4:1 | 14.2:1 |

**Key finding:** Growth segment customers are worth 18x more than Solo customers — driven more by churn rate (12% vs 4% = 3x lifetime) than by price (6x). The ProAdvisor channel targets Growth segment directly and is the highest-leverage acquisition investment.

---

## 7. PM vs. No-PM: Revenue Concentration

The PM-in-office shops (37,000 of the 130,000 core) represent:
- ~37% of core TAM — a minority by firm count
- ~65%+ of accessible revenue opportunity — due to dramatically lower churn and higher tier preference

| Mix Scenario | Avg ARPU | ARR at 4,000 core customers | Delta vs. Base |
|---|---|---|---|
| **Base (new segment mix)** | $168 (Y3 core) | $7.26M | — |
| **Chaos-dominant (80% Small, 20% others)** | $117 | $5.62M | -$1.64M |
| **PM-dominant (Growth 35%, Mid 30%, Small 35%)** | $196 | $9.41M | +$2.15M |

The $2.15M ARR delta between chaos-dominant and PM-dominant mixes at the same customer count illustrates why ProAdvisor investment in Year 2–3 is the highest-leverage GTM decision.

---

## 8. Market Penetration Sanity Check

Using Core TAM (130,000) × 85% QBO = **~110,500 SAM**:

| Segment | Estimated firms | × 85% QBO | SAM | Year 3 target | Penetration |
|---|---|---|---|---|---|
| Small (5–9 emp) | 65,000 | 55,250 | 55,250 | 1,400 | 2.5% |
| Mid (10–19 emp) | 39,000 | 33,150 | 33,150 | 1,200 | 3.6% |
| Growth (20–49 emp) | 26,000 | 22,100 | 22,100 | 1,000 | 4.5% |
| **Core Total** | **130,000** | **110,500** | **110,500** | **3,600** | **3.3%** |
| Solo (1–4 emp, tracked separately) | 330,000 | 280,500 | 280,500 | 400 | 0.1% |
| **Grand Total** | **460,000** | **391,000** | **391,000** | **4,000** | **1.0%** |

3.3% core SAM penetration by Year 3 is achievable and comparable to Field Materials' penetration trajectory in the mid-market.

---

## 9. Strategic Implications

### 9.1 The Four Distinct GTM Sub-Segments

| | Solo | Small (Chaos Mode) | Mid | Growth (Structure Mode) |
|---|---|---|---|---|
| **GTM name** | Receipt Capture | Van-to-Office Chaos | Emerging Procurement | Three-Way Match |
| **Entry point** | QBO App Store (organic) | Community: Reddit, influencers | App Store + ProAdvisor | ProAdvisor + direct outreach |
| **Value prop lead** | "Stop losing receipts" | "Your field guy texts. QBO updates." | "Basic 3-way match, automated" | "Three-way match, automated" |
| **MVP hook** | SMS receipt → QBO expense | SMS → QBO Draft PO | Packing slip photo → verified bill | Full PO → packing slip → invoice match |
| **LTV** | ~$390 | ~$1,050 | ~$2,215 | ~$7,110 |
| **When to target** | Now (organic-only) | Now — primary beachhead | Now — best paid CAC economics | Y2 via ProAdvisor channel |

### 9.2 Recommended Approach: Parallel Tracks, Differentiated Messaging

Don't choose between Chaos Mode and Structure Mode — segment the messaging:

- **QBO App Store listing:** Lead with PM-centric language ("Three-way match, automated. Built for trade contractors."). PMs searching the App Store are solution-aware.
- **Community/influencer:** Lead with chaos-mode language ("Your field guy texts. QuickBooks updates. No crumpled receipts."). Owners in Reddit groups are problem-aware, not solution-aware.
- **Solo landing page:** Separate, minimal: "Stop losing receipts. Text your materials. QuickBooks handles the rest." Never use "procurement" language for Solo.

**Measure separately:** Track churn, ARPU, and LTV by segment from day one. Within 6 months you will have clear signal on which segment is stickiest.

### 9.3 Land-and-Expand: The Solo Flywheel

The land-and-expand play is the primary strategic rationale for the Solo tier:
- A Solo customer at $49/mo grows their business to 6 employees in 24 months
- They upgrade to Starter ($99/mo) at zero incremental CAC
- If they reach 20 employees, they upgrade again to Pro ($299/mo)
- One organic acquisition at $0 CAC becomes a $7,110 LTV customer

Track **Solo → Starter upgrade rate** as a leading indicator of this flywheel working. Target >15% of Solo cohort upgrading within 24 months.

---

## 10. Summary Table (Updated)

| Metric | Solo | Small | Mid | Growth | Core Total |
|---|---|---|---|---|---|
| NAICS 238 Firms | ~330,000 | ~65,000 | ~39,000 | ~26,000 | ~130,000 |
| QBO SAM | ~280,500 | ~55,250 | ~33,150 | ~22,100 | ~110,500 |
| PM Rate | 0–5% | 10% | 35% | 65% | ~28% |
| ARPU | $49 | $99 | $139 | $299 | $168 (Y3) |
| Monthly Churn | 12% | 9% | 6% | 4% | ~6% (Y3) |
| LTV | ~$390 | ~$1,050 | ~$2,215 | ~$7,110 | — |
| Year 3 Target | 400 | 1,400 | 1,200 | 1,000 | 3,600 |
| Year 3 Penetration | 0.1% | 2.5% | 3.6% | 4.5% | 3.3% |

**Bottom line:** Growth segment shops (20–49 employees) are 20% of the Core TAM by firm count but will generate 48% of Year 3 Core MRR due to higher ARPU and dramatically lower churn. The financial model is viable targeting any core segment, but the Growth segment has the most unit-economics headroom. The ProAdvisor/bookkeeper channel is the most efficient path to Growth segment customers.
