# Competitor Benchmark Analysis

**Last Updated:** 2026-02-28

This document summarizes the competitive landscape features and user feedback to establish a "Quality Bar" for the MVP.

---

## 1. Feature Parity & Differentiation Matrix

| Feature | **Kojo** (Enterprise) | **Field Materials** (AI Challenger) | **Remarcable** (Electrical) | **Receipt AI** (SMS-to-QBO) | **Our MVP** (The "Invisible" App) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Field Entry** | Mobile App (Catalogue) | Mobile App (Photo/Voice) | Mobile App + Web | SMS (Photo) | **SMS / MMS (Zero App)** |
| **Material Database** | Direct Vendor Feeds (Wesco) | Scraped / AI-extracted | 450+ supplier API/EDI | N/A (receipts only) | **Historical QBO Items + AI** |
| **3-Way Match** | Precise, Manual/Rules | AI-Driven | Rules-based + API | No (receipt capture only) | **AI-Driven (Post-MVP)** |
| **Onboarding** | Sales-Led (Weeks) | Sales-Led (Days) | Sales-Led | Self-Serve (Minutes) | **Self-Serve (Minutes via QBO)** |
| **Pricing** | Custom ($20K+/yr est.) | **$599/mo min** (sales-gated) | Custom (sales-gated) | ~$20-50/mo | **SaaS Tiered ($99-299/mo)** |
| **QBO Integration** | Limited (enterprise ERPs) | Bi-directional sync | 25 accounting systems | Direct QBO sync | **One-way push to QBO** |
| **Target Segment** | 50+ employees | **50–5,000 employees** (enterprise-skewed) | Top 50 electrical | Any SMB | **5-50 employees** |

---

## 2. Competitor Deep Dives

### 2.1 Kojo (formerly Agora)

*   **Funding:** ~$100M+ total raised. $10M Series C extension led by Wesco International (October 2025). Backed by Battery Ventures, 8VC, Schneider Electric, RXR, Suffolk Construction (Pulse2, SaaSNews).
*   **Scale:** Serves **600+ contractors** in the U.S. and Canada. **$5 billion+** in materials purchased annually through the platform.
*   **Product:** Full procurement suite — mobile field app, BOM/material lists, automated RFQs, digital POs, smart sourcing, supplier integrations (Wesco partnership), warehouse/inventory management, automated invoice scanning, 3-way matching, job costing.
*   **Pricing:** Custom quotes only. Unlimited users/data included. Requires sales call. Estimated $20,000-30,000+/year for full implementation.
*   **Weakness for our segment:** Opaque pricing kills PLG. Designed for 50+ employee firms. Too complex for a 10-person shop that just needs to order wire and sync to QBO.

### 2.2 Field Materials

*   **Funding:** $19M total ($8.15M seed + $10.5M Series A, April 2025). Lead Series A investor: Navitas Capital. Also: Blumberg Capital, DivcoWest Ventures, S16VC, Superseed Ventures, Zelda Ventures, Zacua Ventures.
*   **Scale:** Processes **$900M+** in material purchases annually across **16 construction trades**, **32 U.S. states**, **3 continents**, **17,000+ projects**, **21,000+ vendors** (fieldmaterials.com, March 2026).
*   **Named enterprise customers:** Swinerton ($5B+ annual contract volume), Teichert, Big-D — all large-to-enterprise contractors.
*   **Product:** AI-powered procurement automation — quote scanning, PO creation, delivery slip capture (app photo), three-way invoice validation, inventory management, ERP sync. Claims 90% reduction in PO/invoice processing time; 5–10% material cost savings. Case study: KRS Electric reduced PO creation from 30 min → 1–2 min.
*   **Pricing:** **$599/month starting price** (confirmed via schema data on fieldmaterials.com and third-party listing sites). Enterprise plans by custom quote. All leads require a demo call — no self-serve signup.
*   **2026 Feature — Pricing Intelligence:** Real-time dashboard of all materials bought, with historical price tracking per vendor, tariff risk flagging, and volume aggregation for negotiation leverage. Launched December 2025; announced via SMACNA partnership February 2026.
*   **QBO integration:** Bi-directional sync — pulls jobs, vendors, cost codes, budgets; pushes POs, invoices, receipts. One-click posting. Assumes contractor has proper QBO job-costing infrastructure configured.
*   **Field worker workflow:** Requires iOS/Android app download and account creation. No SMS-based workflow. Field workers submit requisitions and photograph delivery slips through the app.
*   **Weakness for our segment:** $599/month minimum eliminates sub-$3M revenue shops. Sales-gated onboarding. App download required for field workers. Complex QBO setup assumes dedicated procurement staff. Every case study is a 50+ employee firm. Pricing Intelligence requires months of data — useless for new small customers. Moving upmarket (tariff intelligence, multi-warehouse), not downmarket toward 5–50 employee shops. → *See deep dive: `competitor-field-materials.md`*

### 2.3 Remarcable

*   **Funding:** $15M Series A led by Insight Partners (June 2025, PRNewswire).
*   **Scale:** Serves **40% of the top 50 electrical contractors** in the U.S.
*   **Product:** Digital bridge between electrical contractors and suppliers. Seven-point API/EDI integration with **450+ suppliers** (Graybar, Sonepar, Wesco, Rexel). Real-time pricing, availability checks, digital RFQs, invoice tracking. Connects with **25 accounting systems**.
*   **Weakness for our segment:** Hyper-specialized in electrical. Heavy reliance on distributor integrations makes it inflexible for plumbing, HVAC, or general trades. Sales-led, not self-serve. Targets larger contractors.

### 2.4 Receipt AI (Direct Model Validation)

*   **Status:** Live on QuickBooks App Store. **5-star rating**. **100+ business customers**. **12,000+ receipts processed** (Receipt-AI.com, 2026).
*   **Product:** SMS-based receipt capture synced to QuickBooks. Users text photos of receipts to a number. AI extracts line items, categorizes expenses, uploads to QBO. Claims **97% time savings** on receipt management.
*   **Integration:** Three QBO sync levels — attachment only, linked expense, full line-item breakdown. One-click reconciliation.
*   **Pricing:** Estimated ~$20-50/mo (subscription model).
*   **Significance:** Receipt AI is the strongest market signal that the SMS-to-QBO model works. Their traction validates:
    *   Willingness to text financial data to a phone number.
    *   QuickBooks App Store as a viable distribution channel.
    *   AI receipt parsing accuracy is sufficient for real-world use.
*   **Weakness / Our opportunity:** Receipt AI is **reactive only** — it captures receipts *after* purchase. It does not handle the *request* or *ordering* phase. It does not create POs. It does not do 3-way matching. It solves "lost receipt" but not "maverick spend" or "blind payment." We solve the entire chain.

---

## 3. Key Learnings from User Reviews

### 3.1 What Users LOVE (Must-Haves)

1.  **"It just saves time."**
    *   *Insight:* Speed is the only metric that matters. If our "Text-to-PO" flow is slower than calling the supply house, we fail.
    *   *Requirement:* The time from "Text Sent" to "PO Created" must be < 30 seconds.

2.  **"AI Accuracy on Invoices."**
    *   *Insight:* Users of **Field Materials** specifically praise the AI for catching price discrepancies.
    *   *Requirement:* Our AI prompt must be rigorous about price extraction. "About $100" is not good enough.

3.  **"Single Source of Truth."**
    *   *Insight:* **Kojo** users love having all data in one place.
    *   *Requirement:* We must sync *back* to QBO reliably so the accountant (who lives in QBO) sees the same truth as the PM (who lives in our app).

### 3.2 What Users HATE (Traps to Avoid)

1.  **"Steep Learning Curve."**
    *   *Insight:* **Kojo** is powerful but complex.
    *   *Strategy:* Build for the "5-person shop." If it needs a manual, it's too complex.

2.  **"Sync Errors."**
    *   *Insight:* #1 complaint for all QBO apps. Duplicate vendors, missing classes.
    *   *Strategy:* Defensive coding. Check for existing vendor *before* creating. Use fuzzy matching on names ("Home Depot" vs "The Home Depot").

3.  **"Another App to Download."**
    *   *Insight:* Field workers reject apps that require download, login, and learning.
    *   *Strategy:* SMS-first. Zero app download. Zero login for field workers.

---

## 4. The "Winning Wedge" Strategy

To displace these competitors in the 5-50 employee segment:

1.  **Speed to Value:** "Sign up with QuickBooks" -> "Send first text" -> "See PO in QBO" in **< 5 minutes**.
2.  **Zero Training:** Field worker requires **0 minutes of training**. "Just text this number like you text Mike."
3.  **Price Transparency:** Pricing on the website. No "Request a Demo." This is a competitive wedge against Kojo, Field Materials, and Remarcable — all of which gate pricing.
4.  **Receipt AI + Ordering:** We do everything Receipt AI does (receipt capture) *plus* the ordering/PO/3-way match chain that Receipt AI doesn't touch.

---

## 5. Technical Benchmarks (Target Metrics)

*   **SMS Response Time:** < 5 seconds (Acknowledgement).
*   **PO Draft Generation:** < 10 seconds (AI Processing).
*   **QBO Sync Latency:** < 1 minute (Background Job).
*   **AI Confidence Threshold:** > 90% for "Item Name", > 95% for "Quantity".
*   **QBO Sync Success Rate:** > 99.5% (zero tolerance for duplicate vendors/bills).

---

## 6. Competitive Positioning Map

| Axis | Low Friction (Self-Serve) | High Friction (Sales-Led) |
| :--- | :--- | :--- |
| **Narrow Scope** (Receipt/PO only) | **Receipt AI**, **Our MVP** | Spendwise, Tradogram |
| **Broad Scope** (Full Procurement) | *(Gap — this is our Phase 2)* | **Kojo**, **Field Materials**, **Remarcable** |

The bottom-left quadrant (low friction + narrow scope) is where we start. Receipt AI occupies part of it but only the "receipt" slice. We own the "ordering + receipt + matching" slice. As we expand features (Phase 2-3), we move toward the bottom-right while keeping the self-serve model — a position no current competitor occupies.
