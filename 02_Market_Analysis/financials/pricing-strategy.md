# Pricing Strategy: Conduit

**Last Updated:** 2026-03-19
**Segment framework:** See [`segment-definitions.md`](../market/segment-definitions.md) for canonical Solo/Small/Mid/Growth definitions.

---

## 1. Pricing Philosophy

The target customer (trade contractor, 1–49 employees) is **price-sensitive but value-driven**. They will not pay $500/mo for "software," but they will pay $300/mo for a tool that demonstrably saves $40,000+/year. The pricing must feel like an obvious ROI decision, not a discretionary expense.

The mental anchor for this segment is QuickBooks Online (~$50–$100/mo). The ceiling is set by competitors like Jobber ($50–$300/mo) and Contractor Foreman (~$1K/yr). Anything above $500/mo triggers "enterprise evaluation mode" (committee decisions, RFP process) which kills PLG velocity.

**Key rule:** Pricing must be visible on the website, on page load, with no "Call for Pricing" gate. Kojo and Field Materials hide pricing behind sales calls. Transparent pricing is a competitive wedge with the target segment.

---

## 2. Competitor Price Anchoring

| Competitor | Pricing Model | Approximate Cost | Segment Relevance | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **QuickBooks Online** | Monthly subscription | $30–200/mo | All | The "floor." Every customer already pays this. |
| **Receipt AI** | Subscription | $29/mo (no QBO sync) / $99/mo (with QBO sync) | **Solo anchor** | Validates SMS-to-QBO willingness to pay. **Key**: QBO sync requires $99/mo plan. Conduit Solo at $49 with QBO sync is a better value than their entry-tier and half the price of their QBO-integrated tier. |
| **Jobber** | Tiered monthly | $50–300/mo | Small + Mid | Strong SMB anchor in field services. |
| **Housecall Pro** | Tiered monthly | $65–250/mo | Small + Mid | Similar SMB anchor. |
| **Contractor Foreman** | Annual | ~$83/mo ($1K/yr) | Small + Mid | Budget-friendly construction tool. |
| **Spendwise** | Per-user | ~$9/user/mo | Mid | Basic PO book. No AI, no construction features. |
| **Tradogram** | Tiered | Free–$225/mo | Mid | Generalist procurement. Not construction-specific. |
| **Kojo** | Custom quote, annual | $20,000+/yr (est.) | Enterprise only | Opaque. Not accessible to target segment. |
| **Field Materials** | Custom, modular | Undisclosed (sales-gated) | Enterprise only | Transaction/volume-based. Requires demo. |
| **Remarcable** | Custom | Undisclosed | Enterprise only | Sales-led, focused on large electrical contractors. |

**Key insight:** The $100–$300/mo range is the sweet spot where contractors perceive value without triggering enterprise buying behavior. Below $50/mo signals "toy." Above $500/mo signals "not for me."

**Solo anchor:** Receipt AI (~$20–50/mo) specifically validates that 1–4 person shop owners will pay for SMS-to-QBO receipt capture. The $49/mo Solo tier is positioned 10–30% above Receipt AI to signal better QBO integration and construction-specific AI parsing.

---

## 3. Proposed Pricing Model

### 3.1 Four-Tier Structure

| Tier | Monthly Price | Annual Price | Target Segment | Primary Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Solo** | $49/mo | $490/yr (save $98) | Solo (1–4 emp) | Receipt + expense capture; job costing for taxes |
| **Starter** | $99/mo | $990/yr (save $198) | Small (5–9 emp) | Text-to-PO workflow; QBO sync; packing slip capture |
| **Pro** | $299/mo | $2,990/yr (save $598) | Growth (20–49 emp) | Full 3-way match; AI invoice parsing; price variance alerts |
| **Enterprise** | Custom | Custom | 50+ emp | Custom integrations, SSO, dedicated CSM |

*Mid segment (10–19 emp) transitions between Starter and Pro depending on bookkeeper availability and invoice volume. Modeled at $139 blended ARPU.*

### 3.2 Tier Feature Breakdown

| Feature | Solo ($49) | Starter ($99) | Pro ($299) | Enterprise |
| :--- | :--- | :--- | :--- | :--- |
| SMS receipt capture | Yes | Yes | Yes | Yes |
| MMS packing slip photo capture | Yes | Yes | Yes | Yes |
| Unlimited field texters | Yes | Yes | Yes | Yes |
| Office users | 1 | 1 | Unlimited ($29/seat/mo) | Unlimited |
| QBO sync (Expenses/Bills) | Yes | Yes | Yes | Yes |
| AI line-item extraction | Basic (totals only) | Standard (line items) | Full (line items + job coding) | Full |
| 3-way match (PO vs. Slip vs. Invoice) | No | No | Yes | Yes |
| AI invoice parsing (email forward) | No | No | Yes | Yes |
| Price variance alerts | No | No | Yes | Yes |
| Historical pricing dashboard | No | No | Yes | Yes |
| Job costing (QBO Class/Location) | Basic | Standard | Advanced | Advanced |
| API access | No | No | No | Yes |
| Dedicated CSM | No | No | No | Yes |
| Custom integrations (Xero, Sage) | No | No | No | Yes |

### 3.3 Free Trial

- **Duration:** 14 days.
- **Credit card:** Not required at signup (reduces friction).
- **Tier:** Full Pro features during trial (show maximum value, then downgrade to Starter/Solo if they don't convert to Pro).

---

## 4. Per-Seat vs. Per-Transaction Analysis

| Model | Pros | Cons | Verdict |
| :--- | :--- | :--- | :--- |
| **Per-Seat** | Predictable revenue. Scales with company growth. Industry standard. | Field workers don't "log in" (they text). Charging per texter kills adoption. | Use for office seats only. |
| **Per-Transaction** | Aligns cost with value delivered. | Unpredictable revenue. Seasonal volatility. Customers hate metered billing. | Avoid for primary pricing. |
| **Flat Tier + Per-Seat (Hybrid)** | Predictable base. Office seats scale with company size. Field texters unlimited (removes adoption friction). | Slightly complex to explain. | **Recommended.** |

**Decision:** Flat monthly tier (Solo/Starter/Pro) + per-seat for additional office users on Pro. Field texters are always unlimited and free — this is critical for adoption.

---

## 5. Value Justification (ROI Math by Segment)

### 5.1 Solo (1–4 employees): Owner-Operator Receipt Capture

**Profile:** 2-person electrical shop, $350K revenue, $105K material spend.

| Metric | Status Quo Cost | With Solo Tier | Savings |
| :--- | :--- | :--- | :--- |
| Receipt tracking (manual, 2 hrs/wk) | $3,120/yr (at $30/hr) | $312/yr (90% reduction) | **$2,808/yr** |
| Tax overpayment (uncaptured materials) | $2,000/yr (2% of $105K) | $400/yr (80% reduction) | **$1,600/yr** |
| **Total annual savings** | | | **$4,408/yr** |
| **Annual subscription cost (Solo)** | | | **$490/yr** |
| **ROI** | | | **9:1** |

*At 9:1 ROI, the owner payback threshold is met in 6.5 weeks. The conversation: "Your receipts are costing you $4,400/yr in missed deductions and wasted time. Fix it for $49/mo."*

### 5.2 Small (5–9 employees): Text-to-PO Workflow

**Profile:** 6-person plumbing shop, $900K revenue, $270K material spend.

| Metric | Status Quo Cost | With Starter Tier | Savings |
| :--- | :--- | :--- | :--- |
| Manual invoice processing (40/mo × $42) | $20,160/yr | $1,133/yr (at $2.36/invoice) | **$19,027/yr** |
| Material error leakage (1% of $270K) | $2,700/yr | $270/yr (90% reduction) | **$2,430/yr** |
| Owner time chasing receipts (3 hrs/wk) | $4,680/yr (at $30/hr) | $468/yr (90% reduction) | **$4,212/yr** |
| **Total annual savings** | | | **$25,669/yr** |
| **Annual subscription cost (Starter)** | | | **$990/yr** |
| **ROI** | | | **26:1** |

### 5.3 Growth (20–49 employees): Full 3-Way Match

**Profile:** 15-person electrical contractor, $2M revenue, $600K material spend.

| Metric | Status Quo Cost | With Pro Tier | Savings |
| :--- | :--- | :--- | :--- |
| Manual invoice processing (150/mo × $42) | $75,600/yr | $4,248/yr (at $2.36/invoice) | **$71,352/yr** |
| Material error leakage (1% of $600K) | $6,000/yr | $600/yr (90% reduction) | **$5,400/yr** |
| Office admin time (10 hrs/wk) | $15,600/yr (at $30/hr) | $1,560/yr (90% reduction) | **$14,040/yr** |
| **Total annual savings** | | | **$90,792/yr** |
| **Annual subscription cost (Pro)** | | | **$2,990/yr** |
| **ROI** | | | **30:1** |

*ROI is intentionally conservative. The $42/invoice figure (AnchorGroup, 2025) includes fully-loaded labor costs. Even if the customer captures only 25% of theoretical savings, ROI is still 7.5:1.*

---

## 6. Pricing Psychology: Van Westendorp

Run Van Westendorp price sensitivity questions during customer interviews (see `04_Validation_Plan/interviews/owner-interview-guide.md`):

1. "At what monthly price would this be so cheap you'd question the quality?"
2. "At what price would this be a bargain?"
3. "At what price would this be getting expensive but you'd still consider it?"
4. "At what price would this be too expensive to consider?"

**Hypothesis by segment:**

| Segment | Too Cheap | Bargain | Expensive but OK | Too Expensive |
| :--- | :--- | :--- | :--- | :--- |
| **Solo** | <$15/mo | $25–49/mo | $50–80/mo | >$100/mo |
| **Small** | <$30/mo | $50–100/mo | $150–300/mo | >$500/mo |
| **Growth** | <$50/mo | $100–250/mo | $300–500/mo | >$800/mo |

**Solo hypothesis note:** At $49/mo, the Solo tier sits at the top of the "bargain" range. This is intentional — it signals quality above Receipt AI ($20–50/mo) while remaining below the "expensive but OK" threshold for a 1–4 person shop.

---

## 7. Pricing Anti-Patterns to Avoid

1. **"Call for Pricing"** — This market hates opacity. Kojo and Field Materials gate pricing behind sales calls. Transparent pricing is a competitive wedge.
2. **Annual-Only Contracts** — Offer both monthly and annual. Monthly removes risk for the buyer. Annual (2 months free) rewards commitment and improves cash flow.
3. **Per-Field-Worker Pricing** — Charging per texter kills the core value proposition. The entire point is "just give your guys this number." Adding a new employee should never cost money.
4. **Usage Caps** — Avoid "100 texts per month" limits. Construction ordering is spiky (busy months vs. slow months). Caps create anxiety and churn.
5. **Hiding Solo tier** — The Solo tier must be on the pricing page. Hiding it makes the product look expensive for small shops and drives them to Receipt AI. Better to capture them at $49 and grow with them.

---

## 8. Sources

- Receipt AI pricing: Receipt AI website / QBO App Store listing (validate current pricing before publishing competitive claims)
- AnchorGroup (2025): $42/invoice manual processing cost; $2.36 automated cost
- Jobber, Housecall Pro, Contractor Foreman: public pricing pages
- Kojo, Field Materials: estimated from sales conversations and industry reports (pricing not publicly disclosed)
- Segment framework: [`segment-definitions.md`](../market/segment-definitions.md)
- Unit economics: [`unit-economics.md`](unit-economics.md)
