# Financial Model: 3-Year Revenue Projections

**Last Updated:** 2026-03-19
**Model Type:** Bottom-up SaaS projection, segment-differentiated
**Segment framework:** See [`segment-definitions.md`](../02_Market_Analysis/market/segment-definitions.md)

*(Detailed unit economics in `02_Market_Analysis/financials/unit-economics.md`)*

---

## 1. Revenue Model Overview

The revenue model is a four-tier SaaS subscription:

| Tier | Price | Target Segment | Notes |
| :--- | :--- | :--- | :--- |
| **Solo** | $49/mo | 1–4 emp | Receipt capture + QBO sync. Land-and-expand funnel. |
| **Starter** | $99/mo | 5–9 emp | Full text-to-PO workflow. Primary beachhead tier. |
| **Pro** | $299/mo | 20–49 emp | Full 3-way match + job costing. Highest LTV. |
| **Enterprise** | Custom | 50+ emp | Custom integrations. Out of scope for Years 1–3. |

Mid segment (10–19 emp) transitions between Starter and Pro — modeled at $139 blended ARPU.

**Annual discount:** 2 months free (~17% discount), improving cash flow and reducing effective churn.
**No per-transaction or usage fees.** Unlimited orders, unlimited field texters.

**Solo investor note:** Solo ARR is tracked separately in this model. It is excluded from the "Core" ARPU used in investor-facing summaries because it dilutes the unit economics narrative. Solo is a growth funnel (land-and-expand), not a beachhead revenue line.

---

## 2. Segment Mix Assumptions by Year

| Segment | ARPU | Year 1 % | Year 2 % | Year 3 % | Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Solo (1–4) | $49 | 0% | 10% | 10% | Not launched Y1. Organic-only growth thereafter. |
| Small (5–9) | $99 | 60% | 50% | 35% | Beachhead; high volume, QBO App Store primary |
| Mid (10–19) | $139 | 35% | 30% | 30% | Growing share as product deepens |
| Growth (20–49) | $299 | 5% | 10% | 25% | Low volume Y1; ProAdvisor channel unlocks Y2–3 |

**Year 1:** Solo tier not yet launched. Customer base is entirely core (Small + Mid + Growth). Year 1 is about validation, not scale.

**Year 2:** Solo tier launches via QBO App Store organic listing. Growth segment begins scaling via QBO ProAdvisor referral program.

**Year 3:** Growth segment reaches 25% of customers — only 1,000 firms but they contribute 48% of total MRR. ProAdvisor channel is primary Growth acquisition engine.

---

## 3. Customer Growth Assumptions

| Metric | Year 1 | Year 2 | Year 3 | Basis |
| :--- | :--- | :--- | :--- | :--- |
| **Starting customers** | 0 | 100 | 1,000 | |
| **New customers/month (avg)** | 8–9 | 75–85 | 250–300 | Ramp from organic to paid channels |
| **Weighted monthly churn** | 8.5% | 7.5% | 6.0% | Improves with segment mix shift toward Growth + annual plans |
| **Net new customers/month** | ~6 | ~50–60 | ~200 | After churn |
| **Ending customers (total)** | 100 | 1,000 | 4,000 | |
| **— of which Solo** | 0 | 100 | 400 | Separate tracking |
| **— of which Core (Small+Mid+Growth)** | 100 | 900 | 3,600 | Investor-facing customer count |

**Churn improvement drivers:**
- Annual plan adoption (reduces effective monthly churn by ~3–4 pp for converted cohorts)
- Segment mix shift toward Growth (4% churn) and away from Solo (12% churn)
- QBO sync reliability as primary retention lever — customers don't cancel when reconciliation runs itself

**Growth drivers by phase:**
- **Year 1:** QBO App Store listing (organic), Reddit/Facebook community engagement, founder-led sales, 2–3 micro-influencer partnerships. Goal is validation.
- **Year 2:** Paid social ads (Reddit, Facebook), podcast sponsorships, Solo tier launch via QBO App Store, QBO ProAdvisor program initiation.
- **Year 3:** Scaled paid acquisition, ProAdvisor referral program at scale, word-of-mouth from installed base, potential QBO App Store "Featured" placement.

---

## 4. Revenue Projections

### 4.1 Blended ARPU Calculation by Year

| Year | Solo % | Small % | Mid % | Growth % | Blended ARPU | Core ARPU (ex. Solo) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Year 1 | 0% | 60% | 35% | 5% | **$122** | **$122** |
| Year 2 | 10% | 50% | 30% | 10% | **$126** | **$135** |
| Year 3 | 10% | 35% | 30% | 25% | **$156** | **$168** |

*Core ARPU excludes Solo customers and is the investor-facing metric. ARPU increases from Y2 to Y3 primarily from Growth segment mix shift, not price increases.*

### 4.2 Monthly Recurring Revenue (MRR)

| Quarter | Total Customers | Solo Customers | Core Customers | Core ARPU | Solo MRR | Core MRR | Total MRR |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Y1 Q1** | 15 | 0 | 15 | $122 | $0 | $1,830 | **$1,830** |
| **Y1 Q2** | 35 | 0 | 35 | $122 | $0 | $4,270 | **$4,270** |
| **Y1 Q3** | 60 | 0 | 60 | $122 | $0 | $7,320 | **$7,320** |
| **Y1 Q4** | 100 | 0 | 100 | $122 | $0 | $12,200 | **$12,200** |
| **Y2 Q1** | 250 | 25 | 225 | $135 | $1,225 | $30,375 | **$31,600** |
| **Y2 Q2** | 450 | 45 | 405 | $135 | $2,205 | $54,675 | **$56,880** |
| **Y2 Q3** | 700 | 70 | 630 | $135 | $3,430 | $85,050 | **$88,480** |
| **Y2 Q4** | 1,000 | 100 | 900 | $135 | $4,900 | $121,500 | **$126,400** |
| **Y3 Q1** | 1,700 | 170 | 1,530 | $155 | $8,330 | $237,150 | **$245,480** |
| **Y3 Q2** | 2,500 | 250 | 2,250 | $160 | $12,250 | $360,000 | **$372,250** |
| **Y3 Q3** | 3,200 | 320 | 2,880 | $165 | $15,680 | $475,200 | **$490,880** |
| **Y3 Q4** | 4,000 | 400 | 3,600 | $168 | $19,600 | $604,800 | **$624,400** |

*Core ARPU grows through Year 3 as Growth segment share increases. Solo MRR is additive on top.*

### 4.3 Annual Recurring Revenue (ARR)

| Year | Ending Total MRR | Core ARR (ex. Solo) | Solo ARR | **Total ARR** | Total Revenue (sum of monthly MRR) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Year 1** | $12,200 | **$146K** | $0 | **$146K** | ~$76K |
| **Year 2** | $126,400 | **$1.46M** | $59K | **$1.52M** | ~$910K |
| **Year 3** | $624,400 | **$7.26M** | $235K | **$7.49M** | ~$4.98M |

*Total Revenue is the sum of all monthly MRR during the year (not ending ARR). Year 1 is lower because customers ramp throughout the year.*

**Investor-facing ARR summary:**
- Year 1: $146K Core ARR (100 customers, $122 avg)
- Year 2: $1.46M Core ARR (900 core customers, $135 avg) + $59K Solo ARR
- Year 3: $7.26M Core ARR (3,600 core customers, $168 avg) + $235K Solo ARR = **$7.49M Total ARR**

---

## 5. Cost Structure — Unchanged from Prior Model

### 5.1 Year 1: Bootstrap Phase

| Category | Monthly | Annual | Notes |
| :--- | :--- | :--- | :--- |
| Founder compensation | $5,000 | $60,000 | Below-market draw. Sustainable with savings or side income. |
| Cloud infrastructure | $200 | $2,400 | Vercel/Railway, Postgres, Redis (low usage) |
| Twilio | $50 | $600 | ~6,000 messages/year at $0.0083 |
| OpenAI API | $100 | $1,200 | ~200K tokens/month at current pricing |
| Intercom | $75 | $900 | Starter plan |
| Auth0 | $0 | $0 | Free tier (up to 7,500 MAU) |
| Marketing | $200 | $2,400 | Reddit ads, micro-influencer tests |
| Legal (one-time) | — | $5,000 | ToS, Privacy Policy, incorporation |
| Insurance (E&O) | $200 | $2,400 | Estimated |
| Misc (domain, email, tools) | $50 | $600 | |
| **Total Year 1** | | **$75,500** | |

### 5.2 Year 2: Growth Phase

| Category | Monthly | Annual | Notes |
| :--- | :--- | :--- | :--- |
| Founder compensation | $10,000 | $120,000 | Closer to market rate |
| CS/Support hire | $5,000 | $60,000 | First employee |
| Cloud infrastructure | $500 | $6,000 | Scaled for 1,000 customers |
| Twilio | $300 | $3,600 | ~36,000 messages/month |
| OpenAI API | $500 | $6,000 | Scaled usage |
| Intercom | $200 | $2,400 | Growth plan |
| Auth0 | $250 | $3,000 | Paid tier |
| Marketing | $3,000 | $36,000 | Influencers, podcasts, paid ads |
| Legal / Compliance | $500 | $6,000 | Ongoing ToS updates, SOC 2 prep |
| Insurance | $300 | $3,600 | |
| Misc | $200 | $2,400 | |
| **Total Year 2** | | **$249,000** | |

### 5.3 Year 3: Scale Phase

| Category | Monthly | Annual | Notes |
| :--- | :--- | :--- | :--- |
| Founder compensation | $15,000 | $180,000 | Market rate |
| Engineering hire | $12,000 | $144,000 | Full-stack engineer |
| CS/Support (2 people) | $10,000 | $120,000 | |
| GTM / Marketing hire | $8,000 | $96,000 | Content, SEO, partnerships |
| Cloud infrastructure | $2,000 | $24,000 | Scaled for 4,000 customers |
| Twilio | $1,000 | $12,000 | ~120,000 messages/month |
| OpenAI API | $2,000 | $24,000 | High-volume parsing |
| Support tooling | $500 | $6,000 | Intercom + Sentry + monitoring |
| Auth0 | $500 | $6,000 | Enterprise tier |
| Marketing spend | $10,000 | $120,000 | Scaled paid acquisition |
| Legal / Compliance | $1,000 | $12,000 | SOC 2 audit |
| Insurance | $500 | $6,000 | |
| Office / Misc | $500 | $6,000 | |
| **Total Year 3** | | **$756,000** | |

---

## 6. Profitability Timeline

| Year | Total Revenue | Total Costs | Net Income | Cash Position |
| :--- | :--- | :--- | :--- | :--- |
| **Year 1** | $76K | $75.5K | **+$0.5K** | Breakeven (founder underpaid) |
| **Year 2** | $910K | $249K | **+$661K** | Strongly profitable |
| **Year 3** | $4.98M | $756K | **+$4.22M** | Highly profitable |

*Year 1 revenue is lower than prior model ($76K vs. $88K) due to lower blended ARPU ($122 vs. $139) from more-accurate segment mix. Year 2 revenue is lower ($910K vs. $1.14M) for the same reason. Year 3 is $4.98M vs. $6.12M. Despite lower revenue, profitability margins are consistent and the business remains viable on the bootstrap path.*

**Caveat:** Year 1 "profit" is artificial — founder is drawing $5K/mo, well below market rate. True profitability (founder at market salary) begins mid-Year 2 at ~140 customers.

---

## 7. Funding Strategy

### 7.1 Option A: Bootstrapped (Recommended)

- **Year 1 capital needed:** ~$75K (founder savings, side income, or small personal loan).
- **Break-even:** Month 9–13 (at ~49 customers with $5K/mo founder draw).
- **Advantages:** Full equity retained. No investor pressure for premature scaling. Product-market fit proven with real revenue.
- **Risk:** Slower growth. Founder financial stress if customer acquisition is slower than projected.

### 7.2 Option B: Seed Round ($500K–$1M)

- **Timing:** After achieving 50–100 paying customers and demonstrating product-market fit.
- **Use of funds:** Accelerate Year 2 growth — hire CS + engineer immediately, increase marketing spend, pursue SOC 2 earlier.
- **Valuation basis:** At 100 customers and $146K Core ARR, a seed round at 10–15x ARR implies $1.46M–$2.19M pre-money valuation. $500K raise = 19–25% dilution.
- **Investor profile:** Construction-tech focused angels or micro-funds. Avoid generalist VCs who will push for enterprise pivot.

### 7.3 Recommendation

Bootstrap through Phase 1. Revisit fundraising at 100 customers if growth rate justifies acceleration.

---

## 8. Sensitivity Analysis

### 8.1 Conservative Scenario (50% of Base Growth)

| Year | Total Customers | Core ARR | Solo ARR | Total ARR | Net Income |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 50 | $73K | $0 | $73K | -$37K |
| 2 | 500 | $730K | $30K | $760K | +$511K |
| 3 | 2,000 | $3.63M | $118K | $3.75M | +$2.0M |

*Year 1 loss requires ~$37K additional capital (covered by savings or small loan).*

### 8.2 Aggressive Scenario (150% of Base Growth)

| Year | Total Customers | Core ARR | Solo ARR | Total ARR | Net Income |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 150 | $219K | $0 | $219K | +$143K |
| 2 | 1,500 | $2.19M | $88K | $2.28M | +$2.03M |
| 3 | 6,000 | $10.9M | $353K | $11.25M | +$8.5M* |

*Cost structure in Y3 aggressive would be higher (~$1.2M+). Net income estimate is approximate.*

### 8.3 Growth Segment Mix Sensitivity (Year 3)

| Growth Segment % | Total ARR | Change vs. Base | Implication |
| :--- | :--- | :--- | :--- |
| 15% (under-invest in ProAdvisor) | $6.67M | -$820K | ProAdvisor channel not developed |
| **25% (base case)** | **$7.49M** | **—** | Base assumption |
| 30% (ProAdvisor at scale) | $8.02M | +$530K | Exceeds prior $8.59M projection if ProAdvisor program succeeds |
| 35% (Growth segment dominates) | $8.50M | +$1.01M | Growth segment at 35% = prior model projection vindicated |

**Insight:** Investing in the ProAdvisor/bookkeeper channel to push Growth from 25% to 35% of Year 3 customers is worth ~$1M in additional ARR at no change in total customer count. This is the highest-leverage single GTM decision in the Year 3 plan.

### 8.4 What If Churn Is 15% Across All Segments?

At 15% blended monthly churn (pessimistic, no segment differentiation):
- Customer lifetime drops to 6.7 months
- Year 1 ending customers: ~55 (vs. 100 base)
- Year 1 revenue: ~$40K (vs. $76K base)
- Break-even pushed to Month 16–20

**Mitigation:** Annual plans (reduce churn to effective 5–6%/mo for annual cohort), proactive health scoring, QBO sync reliability as retention lever, upgrade path from Solo → Small → Pro as company grows.

---

## 9. Key Metrics to Track

| Metric | Target | Frequency |
| :--- | :--- | :--- |
| Total MRR | Per growth table above | Weekly |
| Core MRR (ex. Solo) | Investor-facing metric | Weekly |
| Monthly churn by segment | Solo <14%, Small <10%, Mid <7%, Growth <5% | Monthly |
| Net Revenue Retention (NRR) | >110% (Phase 2), >120% (Phase 3) | Quarterly |
| CAC by segment | Solo <$130, Small <$350, Growth <$1,000 | Monthly |
| Solo → Starter upgrade rate | Target >15% within 24 months | Quarterly |
| LTV:CAC by segment | Small >3:1, Mid >4:1, Growth >10:1 | Quarterly |
| CAC Payback | <6 months for all paid segments | Quarterly |
| Gross Margin | >90% | Monthly |
| QBO Sync Success Rate | >99.5% | Daily |
| AI Parse Accuracy (Golden Set) | >95% | Per deployment |
| NPS | >40 | Quarterly |
