# Competitor Deep Dive: Field Materials

**Last Updated:** 2026-03-18
**Category:** Direct competitor — construction procurement, Three-Way Match, QBO integration

---

## 1. Overview

Field Materials (fieldmaterials.com) is an AI-native construction procurement platform that automates the full procurement lifecycle: vendor quotes → purchase orders → delivery slip capture → three-way invoice validation → ERP/accounting sync. It targets mid-to-large general contractors and specialty subcontractors. It is the most technically sophisticated direct competitor in the space and has secured $19M in venture funding as of mid-2025.

**Bottom line for Conduit:** Field Materials is a well-funded, AI-competent platform that has validated demand for automated three-way match — but it is built for mid-market and enterprise clients (Swinerton, Teichert, Big-D), is sales-led, requires app downloads and logins for field workers, and starts at $599/month. It has no SMS-first, zero-login workflow. The 5–50 employee trade contractor is served incidentally, not intentionally.

---

## 2. Company Profile

| | |
|---|---|
| **Founded** | 2022 |
| **HQ** | Charlotte, NC (originally; team also in San Jose, CA) |
| **Stage** | Series A (April 2025) |
| **Total Funding** | ~$19M |
| **Website** | fieldmaterials.com |
| **Founders** | Eldar Sadikov (CEO, ex-PayPal/Jetlore AI acquisition, Stanford PhD candidate in AI); Victor Gane (co-founder, Stanford PhD civil engineering) |

---

## 3. Funding History

| Round | Date | Amount | Lead Investor | Notes |
|---|---|---|---|---|
| Seed (initial) | 2023 | ~$4.65M | Blumberg Capital, Zacua Ventures, s16vc | Market launch mid-2023 |
| Seed extension | June 2024 | $3.5M | DivcoWest Ventures, Navitas Capital, Zelda Ventures, Flyer One Ventures | Brings seed total to $8.15M; customer base grew 3x in Q1 2024, ARR grew 8x |
| Series A | April 2025 | $10.5M | Navitas Capital (lead) | Oversubscribed. Participation: Blumberg Capital, DivcoWest Ventures, S16VC, Superseed Ventures |
| **Total** | | **~$19M** | | Plans to double team, triple revenue in 2025 |

**Notable:** Sadikov previously sold AI startup Jetlore to PayPal in 2018 — strong AI pedigree signals this is a technically credible team, not a spreadsheet wrapper.

---

## 4. Target Market

**Intended primary market:**
- Self-performing General Contractors (GCs) with multi-trade field operations
- Specialty subcontractors: mechanical, electrical, HVAC, plumbing, concrete, masonry, framing, civil, insulation
- Companies with dedicated office procurement staff, project managers, and accounting/AP departments
- Companies managing multiple simultaneous projects and warehouse operations

**Named enterprise customers:**
- Swinerton ($5B+ annual contract volume, 4,300+ employees)
- Teichert (large civil/concrete contractor, California)
- Big-D (large commercial GC, Utah/Mountain West)

**Key inference:** Field Materials' showcase customers are *large companies by construction standards* — Swinerton alone has more employees than the entire addressable market for Conduit. The product is designed around workflows that assume dedicated procurement staff, foremen managing crews, and multi-warehouse inventory operations. The 5–50 employee trade contractor is an afterthought, not the design target.

**Geographic reach:** 32 U.S. states, 3 continents (as of March 2026)

**Industry partnerships:** SMACNA (Sheet Metal and Air Conditioning Contractors' National Association), NFCA, SWACCA, CFMA — all trade associations representing mid-to-large contractors.

---

## 5. Scale Metrics (as of early 2026)

| Metric | Value | Source |
|---|---|---|
| GMV processed annually | $900M+ | fieldmaterials.com homepage |
| Construction projects on platform | 17,000+ | fieldmaterials.com homepage |
| Vendors in network | 21,000+ | fieldmaterials.com homepage |
| Construction trades served | 16 | fieldmaterials.com homepage |
| U.S. states active | 32 | fieldmaterials.com homepage |
| G2/platform rating | 4.8/5 (22 reviews) | fieldmaterials.com |

*Note: Earlier (April 2025) press releases cited $360M GMV, 8,000 vendors, 27 states. Growth from $360M to $900M+ in under a year reflects either the "triple revenue" target being met or a metric definition change.*

---

## 6. Product: What It Does

Field Materials is a **procurement automation platform**, not a field communication tool. The workflow runs from the office and is used primarily by PMs, procurement managers, and accountants.

### Core Modules

**1. Quote Management**
- AI scans vendor quote PDFs/emails, extracts line items (material, unit, qty, price), normalizes units (e.g., "Ea" vs "Each")
- Enables side-by-side quote comparison across vendors
- Generates RFQs and sends to vendor network

**2. Purchase Order Creation**
- AI generates itemized POs from quotes in 1–2 minutes (vs. 30 min manually)
- Auto-assigns cost codes and cost types per QBO/ERP chart of accounts
- Approval workflows with role-based thresholds (foreman can approve < $500, PM < $5,000, owner required above)

**3. Delivery Slip / Receipt Capture**
- Mobile app (iOS + Android, English + Spanish): field worker photographs packing slip
- AI reads delivery slip, matches to open PO, records received quantities
- Works offline with automatic sync on reconnect

**4. Invoice Processing & Three-Way Match**
- AI reads vendor invoices (email or upload)
- Matches invoice to PO and delivery receipt
- Flags discrepancies: wrong price, wrong quantity, wrong vendor
- Claims to catch billing errors worth 5–10% of material cost

**5. Accounting Sync**
- Single-click sync to QuickBooks Online, QuickBooks Desktop, Sage 100/300/Intacct, Viewpoint Vista/Spectrum, Foundation, Procore, CMiC
- Pushes: POs, invoices, receipts, AP payments
- Pulls: Projects/jobs, vendors, cost codes, cost types, tax codes, job budgets

**6. Inventory Management**
- Track warehouse stock and job-site inventory
- Minimum threshold reorder alerts
- Multi-warehouse support
- Full audit trail / transaction ledger

**7. Pricing Intelligence (launched December 2025 / announced February 2026)**
- Real-time dashboard of all materials and equipment the contractor buys, sourced from their own PO/invoice history
- Tracks price fluctuations per material per vendor over time
- Predicts price trends for volatile items (tariff-sensitive: copper wire, steel, PVC)
- Aggregates volume across all projects to identify negotiation leverage
- Announced in partnership with SMACNA; positioned explicitly around 2025–2026 tariff environment
- AI extracts and normalizes unit prices from all historical procurement documents

---

## 7. QuickBooks Online Integration (Deep Dive)

This is the most relevant section for Conduit.

**Data pulled FROM QBO into Field Materials:**
- Projects (jobs) — so FMs can tag orders to the right job
- Vendors / suppliers
- Cost codes (phase codes) and cost types
- Equipment and service codes
- Tax codes by county
- Job budgets organized by cost code and type
- Pre-existing POs created in QBO before FM implementation

**Data pushed FROM Field Materials TO QBO:**
- Purchase Orders — itemized, with cost codes and cost types per line
- Invoices — posted against POs, as direct job costs, or overhead against GL accounts
- Receipts — as AP payments or AP entries

**Three-Way Match in QBO context:**
- Field Materials claims "Automated 3-way invoice validation" — PO + delivery receipt + invoice
- Invoices are matched to POs before posting to QBO
- Discrepancies are flagged before the accountant ever sees the invoice

**Integration method:** Bi-directional real-time sync. One-button push to post. Described as eliminating "double-entry."

**Limitation for small shops:** The integration assumes QBO is already set up with proper cost codes, job structure, and vendor records. A 5-person electrical shop that uses QBO for basic bookkeeping (not job costing) would need significant setup before Field Materials delivers value. The platform is built for QBO *power users*, not casual QBO users.

---

## 8. Field Worker / Mobile Workflow

**The critical question for Conduit: Do field workers need an app?**

**Answer: Yes. Field Materials requires an app download and login.**

- iOS and Android apps required for field workers
- Workers submit "field requisitions" through the app — selecting items, quantities, job, needed date
- Workers photograph delivery slips through the app
- Workers can check warehouse inventory through the app
- Offline mode available, syncs when connected

**There is no SMS-based, zero-login workflow.** A field worker at a company using Field Materials must:
1. Download the app
2. Have an account created by office admin
3. Be assigned to specific projects
4. Learn the requisition workflow in the app

Vendors receive *notifications* via email and SMS, but the field worker-facing interface is entirely app-based.

**This is Conduit's clearest structural advantage.** Field Materials' app requirement is a known friction point in contractor workflows. Workers resist new apps. Spanish-speaking workers in particular may face language/literacy barriers with app-based interfaces even with Spanish localization.

---

## 9. Pricing

**Starting price: $599/month USD** (per fieldmaterials.com structured data, confirmed by third-party listing sites)

**Full pricing:** Not publicly disclosed. Custom quotes for enterprise. Modular — companies can start with one module (e.g., invoice processing only) and add modules.

**Pricing model signals:**
- $599/month minimum represents ~$7,200/year minimum commitment
- Actual implementations for Swinerton-scale customers are likely in the $50,000–200,000+/year range
- The $599 floor rules out all but the most revenue-generating small contractors
- No self-serve, no credit card sign-up, no free tier — all leads go through a demo call

**Implication for Conduit:** At $599/month minimum with a required demo call, Field Materials is inaccessible to a 10-person plumbing shop doing $2M/year in revenue. Conduit's $99–299/month self-serve model occupies a completely different price band.

---

## 10. Customer Reviews & Feedback

**Overall rating:** 4.8/5 (22 reviews across platforms as of early 2026) — limited but very positive review base.

**Key positive themes from available reviews and case studies:**
- "PO creation reduced from 30 minutes to 1–2 minutes" (KRS Electric, electrical contractor, Utah)
- "3-click process instead of 20" (KRS Electric)
- Excellent customer support — weekly meetings with customer success managers
- Real-time visibility: "If I know what we've ordered, received, and been invoiced — I can make decisions weeks or months ahead" (Swinerton PM)
- Faster employee onboarding — process is embedded in the platform
- Eliminates inbox overflow from emailed receipts

**Identified weaknesses from reviews and industry commentary:**
- Learning curve for Sage 100 Contractor integration (noted in search results)
- Implementation timeline is days-to-weeks, not minutes — not self-service
- Still requires field workers to use and maintain app accounts
- Complex setup for QBO power users — assumes proper job costing infrastructure
- Review volume is low (22 reviews total) relative to funding/scale, suggesting limited SMB penetration

---

## 11. 2025–2026 Product Updates & Announcements

| Date | Announcement |
|---|---|
| April 2025 | $10.5M Series A (oversubscribed), plans to double team and triple revenue |
| May 2025 | SiliconAngle, PYMNTS, Construction Dive coverage — "6 contech startups snag $101M collectively" |
| December 2025 | Pricing Intelligence module launched |
| February 2026 | Pricing Intelligence announced publicly via SMACNA partnership; webinar on 2026 material cost trends |
| February 2026 | Blog post: "2026 Construction Material Prices Are A Killer — Here's How to Fight Back" — direct response to tariff environment |
| March 2026 (current) | Metrics updated to $900M+ GMV, 17,000+ projects, 21,000+ vendors, 32 states |

**Strategic direction:** Field Materials is moving upmarket and toward *intelligence* features (price forecasting, tariff risk management) — not downmarket toward SMB simplicity. The Pricing Intelligence launch explicitly targets mid-to-large contractors with enough historical data to make the analytics meaningful.

---

## 12. Three-Way Match: Does It Fully Solve It?

| Match Leg | Field Materials | How |
|---|---|---|
| **PO** | Yes | AI-generated from quotes; pushed to QBO |
| **Packing Slip / Delivery Receipt** | Yes | Mobile app photo capture; AI reads slip |
| **Invoice** | Yes | AI reads vendor invoice; matches to PO and receipt |
| **Discrepancy Flagging** | Yes | Automated alerts before posting to accounting |
| **QBO Posting** | Yes | One-click sync of matched/verified invoices |

**Verdict:** Field Materials is the most complete three-way match solution of any direct competitor. It handles the *full chain* — more completely than Kojo (which is weaker on invoice automation) and far more completely than Remarcable (which focuses on ordering, not receipts). The three-way match is not a gap for Field Materials — it is their core value proposition.

**Conduit's challenge:** We cannot claim to do three-way match *better* than Field Materials on Day 1. We can claim to do it *more accessibly* — for the shop that can't afford $599/month, can't do a sales call, and whose field workers won't download an app.

---

## 13. Competitive Assessment vs. Conduit

### Where Field Materials Wins

| Dimension | Field Materials Advantage |
|---|---|
| **Three-Way Match completeness** | Full PO + receipt + invoice, all AI-automated |
| **AI sophistication** | Proprietary LLMs trained on construction documents |
| **ERP breadth** | 9 major systems vs. Conduit's QBO-only focus |
| **Inventory management** | Full warehouse/job-site inventory tracking |
| **Pricing intelligence** | Historical price tracking, tariff risk, vendor negotiation data |
| **Enterprise credibility** | Swinerton, Teichert, Big-D as reference customers |
| **Funding/runway** | $19M total — well-capitalized for product development |

### Where Conduit Wins (Structural Advantages)

| Dimension | Conduit Advantage |
|---|---|
| **Field worker friction** | Zero-login SMS vs. app download + account creation |
| **Onboarding speed** | < 5 minutes self-serve vs. days-weeks sales-led |
| **Price accessibility** | $99–299/month vs. $599/month minimum |
| **Target segment fit** | Designed for 5–50 employees; FM designed for 50–5,000 |
| **Setup complexity** | No QBO job-costing infrastructure required |
| **Sales process** | No demo call required — pure self-serve |
| **QBO-first simplicity** | One integration done extremely well vs. 9 integrations done adequately |

### The "Missing Middle" Gap

Field Materials serves the *middle-to-top* of the market. The 5–50 employee shop:

- Cannot justify $599/month against $2M revenue
- Does not have a dedicated procurement manager to drive implementation
- Does not have a multi-warehouse operation requiring inventory modules
- Does not have the QBO job-costing infrastructure FM assumes
- Cannot get field workers to download and use a new app
- Cannot afford a multi-week implementation and training cycle

None of the Field Materials case studies feature a company with fewer than ~50 employees. KRS Electric (the closest to SMB) is described as a "commercial, industrial, and utility" contractor — not a 5-person shop. Their head of accounting, Martha Peine, drives the platform adoption — a role that doesn't exist at a 10-person firm.

---

## 14. Key Weaknesses & Gaps (Summary)

1. **App-first, not SMS-first.** Field workers must download an app and maintain accounts. No zero-login workflow.
2. **$599/month floor.** Eliminates the entire sub-$3M revenue contractor segment.
3. **Sales-gated onboarding.** No self-serve. Every customer requires a demo and implementation call.
4. **Complex QBO setup required.** Assumes contractor has proper cost codes, job structure, and QBO infrastructure already configured.
5. **Mid-to-large company design bias.** Every case study, every UI decision, every module is designed around companies with 50+ employees and dedicated procurement staff.
6. **Pricing Intelligence requires data scale.** The new analytics module requires months of historical procurement data to be useful. A new 10-person customer gets no value from this on Day 1.
7. **Overkill for simple use cases.** A plumber who needs to track 20 POs/month does not need inventory management, Sage integration, multi-warehouse tracking, or a buyout management module.
8. **Upmarket trajectory.** The company is moving toward tariff risk management and price intelligence — explicitly targeting larger contractors with complex supply chains. The SMB is being left further behind with each product release.

---

## 15. Recent News & Competitive Moves

- **February 2026:** Pricing Intelligence launch via SMACNA webinar — signals ambition to become a construction materials *intelligence* platform, not just a procurement tool
- **February 2026:** Explicit blog content targeting tariff anxiety among mid-to-large contractors
- **Trajectory:** Series A capital is being deployed to "double the team and triple revenue" — meaning sales team expansion, not product simplification. Customer acquisition strategy remains enterprise sales-led
- **Association partnerships:** SMACNA, NFCA, SWACCA, CFMA memberships suggest a channel strategy through trade associations — all organizations whose membership skews 50+ employees

---

## 16. Strategic Implications for Conduit

1. **Field Materials validates the market.** $900M+ GMV proves contractors will pay to automate procurement. The three-way match problem is real and worth solving.

2. **Field Materials defines the ceiling.** Conduit does not need to beat Field Materials feature-for-feature. Conduit needs to serve the customer Field Materials ignores.

3. **The SMS differentiator is durable.** Field Materials has $19M and a Stanford AI team — they could build SMS if they wanted to. They have chosen not to, because their target customer (Swinerton) doesn't need it. This is a *strategic choice* that creates a structural gap, not a technical gap.

4. **The $599/month pricing floor is a gift.** It anchors the market to believe procurement software costs $600+/month. Conduit at $199/month looks radically cheap, not untrustworthy.

5. **QBO-first is the right wedge.** Field Materials treats QBO as one integration among nine. For the 5–50 employee shop, QBO *is* the accounting system. Building the deepest possible QBO integration is a strategic moat that Field Materials will never prioritize.

6. **Do not try to compete on Pricing Intelligence.** That module requires procurement data at scale. It is irrelevant to a 10-person shop. It is a feature that Field Materials built for customers doing $10M+ in annual material purchases.

---

*Sources: fieldmaterials.com, SiliconAngle (May 2025), PRWeb ($8.15M seed release, $10.5M Series A release), SMACNA.org (Pricing Intelligence announcement), PYMNTS.com, finsmes.com, Field Materials case studies (Swinerton, KRS Electric), Crunchbase, aecplustech.com*
