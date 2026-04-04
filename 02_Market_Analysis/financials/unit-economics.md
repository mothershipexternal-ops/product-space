# Unit Economics Model: Conduit

**Last Updated:** 2026-03-19
**Segment framework:** See [`segment-definitions.md`](../market/segment-definitions.md) for canonical Solo/Small/Mid/Growth definitions.

---

## 1. COGS Per Order (Variable Cost)

Each "order" = one field SMS processed into a QBO draft PO/Bill.

| Component | Cost Per Event | Notes / Source |
| :--- | :--- | :--- |
| **Twilio SMS (inbound)** | $0.0083 | Per message segment. Twilio US pricing, Feb 2026. |
| **Twilio SMS (outbound confirmation)** | $0.0083 | Acknowledgment reply ("Got it. PO #1234 drafted.") |
| **Twilio MMS (inbound photo)** | $0.0165 | If field worker sends photo of packing slip. |
| **OpenAI GPT-4o-mini (text parse)** | ~$0.0005 | ~1K input tokens + 500 output tokens. OpenAI pricing, Feb 2026: $0.15/1M input, $0.60/1M output. |
| **OpenAI GPT-4o (vision, if photo)** | ~$0.005 | For MMS image processing. Higher token cost. |
| **QBO API** | $0.00 | No per-call cost. Free within Intuit developer program. Rate limited to 500 req/min. |
| **Infrastructure (amortized)** | ~$0.005 | Postgres write, Redis queue, compute. |
| **Total (text-only order)** | **~$0.022** | |
| **Total (photo order w/ vision)** | **~$0.035** | |

### Orders Per Customer Per Month (By Segment)

| Segment | Employees | Active Jobs | Orders/mo | COGS/mo | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Solo** (1–4) | 1–4 | 1–3 | 15–30 | ~$0.44 | Owner primarily submitting own materials; fewer orders |
| **Small** (5–9) | 5–9 | 2–5 | 30–60 | ~$0.99 | Multiple techs texting; mixed text + photo |
| **Mid** (10–19) | 10–19 | 4–8 | 60–120 | ~$1.98 | Multiple crews; packing slip photos common |
| **Growth** (20–49) | 20–49 | 6–12 | 100–300 | ~$5.60 | Highest volume; mix of text and vision processing |

---

## 2. Gross Margin (By Tier)

| Tier | Segment | Revenue | COGS (API/SMS) | Stripe (2.9% + $0.30) | Gross Profit | Gross Margin |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Solo** | 1–4 emp | $49.00 | $0.44 | $1.72 | **$46.84** | **95.6%** |
| **Starter** | 5–9 emp | $99.00 | $0.99 | $3.17 | **$94.84** | **95.8%** |
| **Starter/Pro blend** | 10–19 emp | $139.00 | $1.98 | $4.33 | **$132.69** | **95.5%** |
| **Pro** | 20–49 emp | $299.00 | $5.60 | $8.97 | **$284.43** | **95.1%** |

**Blended gross margin** at Year 3 segment mix (10% Solo / 35% Small / 30% Mid / 25% Growth): **~95.3%**

This is consistent with best-in-class SaaS gross margins (median ~80%; top-quartile >90%). The low variable COGS is a structural advantage of the middleware model.

---

## 3. Customer Acquisition Cost (CAC)

### 3.1 CAC by Channel (Estimated)

| Channel | CAC | Volume Potential | Segment Fit |
| :--- | :--- | :--- | :--- |
| **QBO App Store** (organic) | $0–50 | High (long-tail) | All segments; best for Solo + Small |
| **Content/SEO** | $50–150 | Medium | Small + Mid |
| **Reddit / Facebook Groups** | $30–100 | Medium | Small (owner-operated; active in forums) |
| **Micro-Influencers** (Instagram/TikTok) | $200–500 | Medium | Small + Mid |
| **Podcast Sponsorship** | $300–800 | Low-Medium | Mid + Growth |
| **Reddit/Facebook Ads** | $200–600 | High | Small + Mid |
| **QBO ProAdvisor Referrals** | $100–300 | Medium | Mid + Growth (bookkeeper-led) |
| **Cold Outreach (LinkedIn)** | $1,000+ | Low | Avoid for all segments |

### 3.2 Blended CAC Target by Phase

| Phase | Customers | Blended CAC | Primary Channels |
| :--- | :--- | :--- | :--- |
| Phase 1 (0–100) | ~$100–200 | QBO App Store, Reddit, content | |
| Phase 2 (100–1,000) | ~$200–400 | + Influencer, podcast, paid social | |
| Phase 3 (1,000–4,000) | ~$300–500 | + Scaled paid, ProAdvisor program | |

**Solo acquisition rule:** Solo customers are acquired via organic channels only (QBO App Store search, word-of-mouth). Solo is unit-economics-negative at any paid CAC above ~$130. Never run paid campaigns targeting the 1–4 segment.

---

## 4. Lifetime Value (LTV) — Segment-Differentiated

### 4.1 Churn Assumptions by Segment

Churn varies significantly by segment because the number of internal champions (people who lose if the product goes away) increases with company size.

| Segment | Monthly Churn | Avg Lifetime | Rationale |
| :--- | :--- | :--- | :--- |
| **Solo** (1–4) | 12% | 8.3 mo | Single decision-maker; seasonal cancellations; no internal champion except the owner |
| **Small** (5–9) | 9% | 11.1 mo | Owner-controlled; annual plan adoption reduces effective churn; seasonal risk remains |
| **Mid** (10–19) | 6% | 16.7 mo | Part-time bookkeeper is a second internal champion; fights cancellation |
| **Growth** (20–49) | 4% | 25.0 mo | PM + controller both depend on the system; data lock-in via price history + QBO mapping |

*Previous model used a single blended 8% churn rate, which masked the significant economics difference between Solo and Growth segments.*

**Seasonal churn mitigation:** Annual plans (2 months free) convert monthly churn risk to an effective ~5–7% for customers who commit annually. Push annual plan conversion at onboarding for Small and above.

### 4.2 LTV Calculation by Segment

LTV = ARPU × (1 / Monthly Churn) × Gross Margin

| Segment | Tier | ARPU | Monthly Churn | Avg Lifetime | Gross Margin | **LTV** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Solo | $49 | $49 | 12% | 8.3 mo | 95.6% | **~$390** |
| Small | Starter $99 | $99 | 9% | 11.1 mo | 95.8% | **~$1,050** |
| Mid | Starter/Pro $139 | $139 | 6% | 16.7 mo | 95.5% | **~$2,215** |
| Growth | Pro $299 | $299 | 4% | 25.0 mo | 95.1% | **~$7,110** |

**Key insight:** The LTV difference between Solo (~$390) and Growth (~$7,110) is 18x. This is driven more by churn rate (12% vs. 4% = 3x lifetime multiplier) than price (6x price difference). Churn reduction is the highest-leverage financial lever in the model.

---

## 5. LTV:CAC Ratio — Segment-Differentiated

### 5.1 LTV:CAC by Segment and CAC Level

| Segment | LTV | CAC $50 | CAC $150 | CAC $300 | CAC $500 | CAC $1,000 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Solo** | $390 | 7.8:1 | 2.6:1 ⚠️ | 1.3:1 ✗ | 0.8:1 ✗ | 0.4:1 ✗ |
| **Small** | $1,050 | 21:1 | 7.0:1 ✓ | 3.5:1 ✓ | 2.1:1 ⚠️ | 1.1:1 ✗ |
| **Mid** | $2,215 | 44:1 | 14.8:1 ✓ | 7.4:1 ✓ | 4.4:1 ✓ | 2.2:1 ⚠️ |
| **Growth** | $7,110 | 142:1 | 47.4:1 ✓ | 23.7:1 ✓ | 14.2:1 ✓ | 7.1:1 ✓ |

✓ = Healthy (>3:1) &nbsp; ⚠️ = Marginal (2–3:1) &nbsp; ✗ = Unsustainable (<2:1)

### 5.2 Channel Allocation by Segment (Strategic Implication)

| Segment | Max Viable CAC | Allowed Channels | Not Allowed |
| :--- | :--- | :--- | :--- |
| **Solo** | ~$130 (organic only) | QBO App Store, word-of-mouth | Paid ads, outbound, influencer (all >$130 effective CAC) |
| **Small** | ~$350 | Community, content, micro-influencer, App Store | Cold outreach, expensive podcast sponsorships |
| **Mid** | ~$700 | All channels incl. paid social, ProAdvisor program | Nothing excluded; optimize toward highest LTV:CAC |
| **Growth** | ~$2,000+ | All channels; ProAdvisor preferred ($100–300 CAC) | Nothing excluded; this segment justifies high-touch sales |

**The previous model's blended LTV:CAC of 3.8:1 at $500 CAC was misleading** — it averaged the negative-at-paid-CAC Solo segment with the highly positive Growth segment. These must be tracked separately.

---

## 6. CAC Payback Period (By Segment)

CAC Payback = CAC ÷ (ARPU × Gross Margin)

| Segment | CAC (Phase 3) | Monthly Gross Profit | Payback |
| :--- | :--- | :--- | :--- |
| Solo | $50 (organic) | $46.84 | 1.1 mo |
| Small | $300 | $94.84 | 3.2 mo |
| Mid | $400 | $132.69 | 3.0 mo |
| Growth | $500 | $284.43 | 1.8 mo |

All segments meet the <12-month maximum for construction SaaS. Growth and Mid meet the aggressive 80-day benchmark even at Phase 3 CAC.

---

## 7. Break-Even Analysis

### 7.1 Fixed Cost Structure (Monthly) — Unchanged from Previous Model

| Cost Category | Phase 1 (0–100) | Phase 2 (100–500) | Phase 3 (500+) |
| :--- | :--- | :--- | :--- |
| Founder salary/draw | $5,000 | $8,000 | $12,000 |
| Cloud infrastructure | $200 | $500 | $2,000 |
| Twilio (base) | $50 | $200 | $500 |
| OpenAI API | $100 | $500 | $2,000 |
| Intercom / Support | $75 | $200 | $400 |
| Auth0 | $0 | $250 | $500 |
| Misc (domain, email, tools) | $50 | $200 | $500 |
| Marketing spend | $200 | $2,000 | $10,000 |
| Hires (salary) | $0 | $5,000 | $20,000 |
| **Total Fixed Costs** | **$5,675** | **$16,850** | **$47,900** |

### 7.2 Break-Even Customer Count

Break-Even = Fixed Costs ÷ Weighted Average Gross Profit Per Customer

Year 1 mix (no Solo; 60% Small, 35% Mid, 5% Growth):
Weighted avg gross profit: 0.60×$94.84 + 0.35×$132.69 + 0.05×$284.43 = $56.90 + $46.44 + $14.22 = **$117.56/customer/mo**

| Phase | Fixed Costs/mo | Gross Profit/customer/mo | Break-Even Customers |
| :--- | :--- | :--- | :--- |
| Phase 1 (Y1 mix) | $5,675 | $117.56 | **~49 customers** |
| Phase 2 (Y2 mix) | $16,850 | $120.00 (est.) | **~140 customers** |
| Phase 3 (Y3 mix) | $47,900 | $148.00 (est.) | **~324 customers** |

*Note: Adding Solo tier raises break-even slightly vs. the prior model (which assumed $151/customer) because Solo's $46.84 gross profit pulls down the weighted average.*

### 7.3 Break-Even Timeline

- **Phase 1 break-even:** Month 9–13 (4–5 core customers/month).
- **Phase 2 break-even:** Month 15–19 (ramping to 20–30 customers/month with paid channels).
- **Phase 3 break-even:** Month 21–25 (reaching ~324 customers with scaled operations).

---

## 8. Net Revenue Retention (NRR) Strategy

Target: **120%+ NRR** at Phase 3 (SaaSHero benchmark for construction SaaS with hybrid pricing).

| Expansion Lever | Trigger | Impact |
| :--- | :--- | :--- |
| **Solo → Starter upgrade** | Company grows past 4 employees | +$50/mo at $0 CAC |
| **Starter → Pro upgrade** | 10+ employees; manual matching breaks down | +$200/mo at $0 CAC |
| **Additional office seats ($29/mo)** | Pro tier; office team grows | Incremental per head |
| **Annual plan conversion** | Onboarding offer: 2 months free | Reduces effective churn; improves cash flow |
| **Usage growth** | More projects = more orders = stronger lock-in | Stickiness without price increase |

---

## 9. Sensitivity Analysis

### 9.1 Impact of Churn on LTV by Segment

| Monthly Churn | Solo LTV ($49) | Small LTV ($99) | Mid LTV ($139) | Growth LTV ($299) |
| :--- | :--- | :--- | :--- | :--- |
| 3% | $1,561 | $3,153 | $4,423 | $9,466 |
| 5% | $937 | $1,891 | $2,653 | $5,680 |
| **8% (old base)** | $585 | $1,182 | $1,658 | $3,549 |
| **Segment base** | **$390 (12%)** | **$1,050 (9%)** | **$2,215 (6%)** | **$7,110 (4%)** |
| 15% | $312 | $630 | $883 | $1,893 |
| 20% | $234 | $472 | $662 | $1,419 |

*Segment-differentiated churn produces better LTV than the old single 8% rate for Mid and Growth, and worse for Solo and Small. The aggregate model was masking this.*

### 9.2 Impact of Growth Segment Mix on Year 3 ARR

At 4,000 total Year 3 customers with fixed 10% Solo:

| Growth % of Total | Small % | Mid % | Solo % | Blended ARPU | Total MRR | Year 3 ARR |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 15% | 45% | 30% | 10% | $139 | $556K | $6.67M |
| **25% (base)** | **35%** | **30%** | **10%** | **$156** | **$624K** | **$7.49M** |
| 30% | 30% | 30% | 10% | $167 | $668K | $8.02M |
| 35% | 25% | 30% | 10% | $177 | $708K | $8.50M |

**Implication:** Shifting the Growth segment from 25% to 30% of Year 3 customers (+200 Growth customers) increases ARR by ~$0.53M at no additional churn cost. The ProAdvisor/bookkeeper channel — which skews toward Growth contractors — is the highest-leverage growth investment in Year 3.

### 9.3 Critical Thresholds

| Threshold | Condition | Impact |
| :--- | :--- | :--- |
| Solo CAC ceiling | If Solo CAC > $130, unit economics break | Only organic acquisition for Solo |
| Small viability | If Small churn exceeds 14%, LTV:CAC falls below 2:1 at $300 CAC | Retention programs critical for Small |
| Growth lock-in | If Growth churn drops from 4% to 3%, Growth LTV increases 33% ($7,110 → $9,466) | QBO "Neural Pathway" moat drives this |

---

## 10. Sources

- Twilio SMS pricing: Twilio US Console, Feb 2026
- OpenAI pricing (GPT-4o-mini, GPT-4o): OpenAI Pricing Page, Feb 2026
- Construction SaaS churn benchmarks: SaaSHero (2025)
- Stripe processing: Stripe standard pricing (2.9% + $0.30)
- Segment definitions and churn rationale: [`segment-definitions.md`](../market/segment-definitions.md)
