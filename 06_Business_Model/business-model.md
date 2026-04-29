# Conduit: Business Model

## Value Creation Model

### 1. Who are our customers?

Specialty trade contractors (NAICS 238 — electrical, plumbing, HVAC) with 5–49 employees. Four segments:

| Segment | Size | Primary Buyer | Pain Level | Tier |
|---|---|---|---|---|
| **Solo** | 1–4 emp | Owner (wears all hats) | Receipt capture only | $49/mo |
| **Small** | 5–9 emp | Owner (partially off tools) | Full Van-to-Office chaos | $99/mo — **beachhead** |
| **Mid** | 10–19 emp | Bookkeeper (internal champion) | Manual matching, part-time controller | ~$139 blended |
| **Growth** | 20–49 emp | Controller/PM | $90k+/yr leakage, multi-crew chaos | $299/mo — highest LTV |

**Core TAM:** ~130,000 firms (NAICS 238, 5–49 emp). Core SAM: ~110,000 (×85% QBO penetration). Y3 SOM target: 3,600 customers.

The Small owner is the primary beachhead: problem-aware, self-serve capable, credit card decision, free trial converts. The Mid bookkeeper discovers the tool independently and becomes an internal champion. The Growth controller runs a longer evaluation with ROI justification.

*See: [`client-profile.md`](../02_Market_Analysis/client/client-profile.md), [`segment-definitions.md`](../02_Market_Analysis/market/segment-definitions.md)*

---

### 2. How does the offering create differentiated value?

**The core problem — Three-Way Match failure:** Trade contractors cannot reconcile a Purchase Order + Packing Slip + Invoice before paying because:
- POs are never created (verbal orders while driving)
- Packing slips are lost in the van
- Invoices get paid blind — 23% require exception handling; 0.5–2% result in overpayment

**Financial stakes:** $42/invoice to process manually vs. $2.36 automated. 1–5% of material spend leaks to billing errors ($27k–$80k/yr for an average firm).

**Conduit's answer:** Automate the entire request→delivery→invoice chain without changing field behavior:
1. Field worker texts order (existing behavior — no new app or login)
2. AI parses request and drafts a PO
3. Office manager one-click approves
4. Field worker photos the packing slip via MMS
5. AI reads the slip and matches against the PO
6. System flags discrepancies before the invoice is paid
7. Verified bill syncs to QuickBooks Online

**Why we win vs. each alternative:**

| Alternative | Their failure mode | Our advantage |
|---|---|---|
| Kojo | $20k+/yr, sales-gated, 50+ emp minimum | $99–299/mo, self-serve, instant signup |
| Field Materials | $599/mo minimum, app-required, enterprise-skewed | SMS-first, no field behavior change |
| Remarcable | EDI/API-heavy, enterprise-only | SMB-focused, no supplier onboarding needed |
| Receipt AI | Post-purchase capture only — no ordering or matching | Full chain: ordering → receipt → match |
| QuickBooks (alone) | No field interface, no procurement UX | SMS layer connects field to QBO natively |
| Status quo (Excel + texts) | Manual, error-prone, 10–15 hrs/week | Automated, structured, zero field friction |

*See: [`competitor-benchmarks.md`](../02_Market_Analysis/market/competitor-benchmarks.md), [`problem-research.md`](../01_Problem_Space/problem-research.md)*

---

### 3. What is the value chain? What parts are we in?

The value chain for a trade contractor job flows like this:

```
Material Suppliers         Trade Contractor (internal)                    End Customer
(Wesco, Graybar, etc.)  →  [Field → PO → Delivery → Invoice → Match → QBO]  →  GC / Property Owner billing
```

**Where Conduit sits:** Inside the trade contractor's *internal* procurement workflow — specifically the handoff between field ordering and office accounting. We are not a supplier, not a marketplace, and not an accounting system.

We are **procurement middleware**: the connective tissue that converts unstructured field behavior (texts) into structured accounting data (QBO Draft POs and verified bills).

**What we do not own:**
- Supplier relationships (we route to existing suppliers)
- Accounting (QuickBooks owns this; we sync to it)
- Job management (Procore, Buildertrend own this; we are complementary)

**Our position is narrow by design.** We own the most broken segment of the chain — the part no one has solved for the 5–49 emp market at accessible price points.

---

### 4. What is our go-to-market strategy?

**Primary channels (Y1):**

| Channel | Effort | CAC | Why |
|---|---|---|---|
| QBO App Store | 40% | ~$0 | 85%+ of our customers already use QBO — organic discovery, no sales friction |
| Community-led (Reddit, Facebook trade groups) | 40% | ~$0–50 | Founder-led authenticity; peer recommendations carry high trust in trades |
| Content/SEO | 15% | ~$100–200 | Target pain-aware keywords ("track material costs QuickBooks") not category keywords |
| Paid (Reddit/Facebook ads) | 5% (Y2+) | $200–600 | Scale once product-market fit confirmed |

**Y2+ additions:**
- ProAdvisor channel (bookkeeper/CPA referrals) — near-zero CAC, high-trust handoff for Growth segment
- Podcast sponsorships (niche construction/trade podcasts) — $300–800 CAC for Mid/Growth

**What we avoid:** Cold LinkedIn outreach, "Call for Pricing" gates, requiring field workers to download anything.

**Messaging anchor:** *"Stop chasing crumpled receipts. Connect field to QuickBooks via text."*

*See: [`market-verdict.md`](../02_Market_Analysis/market/market-verdict.md), [`validation-plan.md`](../04_Validation_Plan/validation-plan.md)*

---

## Profit Model

### 5. What are our sources of revenue?

Transparent, tiered SaaS subscriptions. No per-transaction fees. No sales process for Solo–Pro.

| Tier | Price | Included | Target Segment |
|---|---|---|---|
| Solo | $49/mo | Receipt capture + basic QBO sync | Solo (land-and-expand funnel) |
| Starter | $99/mo | Text-to-PO, 1 office user, unlimited field texters | Small — beachhead |
| Pro | $299/mo + $29/seat | Full 3-way match, AI invoice parsing, price alerts, multi-seat | Growth |
| Enterprise | Custom | API, SSO, dedicated CSM | Out of scope Y1–3 |

Revenue trajectory:
- **Y1:** ~$146k ARR (100 customers, 60% Small)
- **Y2:** ~$1.52M ARR (1,000 customers, mix shift toward Growth)
- **Y3:** ~$7.49M ARR (4,000 customers, 25% Growth driving disproportionate revenue)

*See: [`pricing-strategy.md`](../02_Market_Analysis/financials/pricing-strategy.md), [`revenue-projections.md`](../05_Financial_Model/revenue-projections.md)*

---

### 6. What is our cost structure?

**Variable COGS (per transaction) — extremely low:**

| Component | Cost |
|---|---|
| Twilio SMS (in/out) | $0.0083 each |
| Twilio MMS (photo) | $0.0165 each |
| OpenAI GPT-4o-mini (text parse) | ~$0.0005 |
| OpenAI GPT-4o (vision/receipt) | ~$0.005 |
| Infrastructure (amortized) | ~$0.005 |
| **Total per order (text-only)** | **~$0.022** |
| **Total per order (with photo)** | **~$0.035** |

Gross margin: **95%+** at scale.

**Fixed operating costs by year:**

| Year | Cost | Major items |
|---|---|---|
| Y1 | $75.5k | Founder $60k draw, infra $2.4k, API $1.2k, marketing $2.4k |
| Y2 | $249k | Founder $120k, +CS hire $60k, marketing $36k |
| Y3 | $756k | Founder $180k, +engineer $144k, +2×support $120k, +GTM $96k, marketing $120k |

*See: [`unit-economics.md`](../02_Market_Analysis/financials/unit-economics.md)*

---

### 7. What are the key drivers of profitability?

Three levers, in order of leverage:

**1. Segment mix shift (highest leverage)**  
A Growth customer ($299/mo) generates 3× the revenue of a Small customer ($99/mo). Moving the mix from 5% → 25% Growth (Y1→Y3) at the same customer count adds ~$530k ARR. The ProAdvisor channel is the primary mechanism for accelerating Growth acquisition.

**2. Churn reduction (compounding effect)**  
Segment-differentiated churn: Solo 12%/mo → Growth 4%/mo. A 1% reduction in Small churn at 1,000 customers = ~$12k ARR retained per month. Reducing churn is more valuable than equivalent new customer acquisition because there's no CAC to recover.

**3. CAC efficiency (sustains the model)**  
QBO App Store and community channels have near-zero CAC. Paid acquisition ($200–600 CAC) is a Y2+ growth lever once organic channels are saturated. CAC payback is under 3 months across all segments — the model is self-funding once breakeven (~49 customers, month 9–13 of Y1).

*See: [`unit-economics.md`](../02_Market_Analysis/financials/unit-economics.md)*

---

## Logic

### 8. What is the logic of the business?

Trade contractors lose 1–5% of revenue to billing errors because the procurement process is structurally broken at the field-to-office handoff. This is not a technology problem — it's a behavior problem. Field workers text orders from their trucks. PMs approve verbally. Packing slips ride in vans. By the time the invoice arrives, there's nothing to match it against.

Every existing solution fails the same way: it asks the field worker to change their behavior (download an app, log in, fill out a form). Field workers won't do it. So the office stays blind.

Conduit's logic: **intercept existing behavior, structure it for the office, push it to the accounting system they already use.**

- Field worker does nothing new — texts like always
- Office gets a structured PO, a receipt match, and a verified bill
- QuickBooks gets clean data without manual entry

The bet is that the bottleneck is not the field worker's willingness to adopt technology — it's that every product has asked them to adopt the wrong technology. SMS is already their technology. We just make it do more.

---

### 9. What is our goal?

**Near-term (Y3):** 3,600 customers, $7.5M ARR, 85%+ gross margin, CAC payback under 12 months across all segments.

**Strategic goal:** Own the "Invisible Procurement Stack" category for specialty trade contractors (5–49 emp) before enterprise competitors move down-market or QBO builds natively.

The window is open because:
- Enterprise competitors (Kojo, Field Materials) are moving *up-market*, not down
- QBO's App Store model creates a distribution channel, not a competitive threat
- The 130,000-firm market is fragmented — no category leader exists below 50 employees

The goal is to become the default answer to "how do I connect my field guys to QuickBooks" before that question has a canonical answer.
