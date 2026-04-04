# Operational Context: The 5-50 Employee Construction Firm

**Segment framework:** See [`02_Market_Analysis/market/segment-definitions.md`](../02_Market_Analysis/market/segment-definitions.md) — canonical Solo (1–4), Small (5–9), Mid (10–19), Growth (20–49) definitions.

## Summary
A 5–50 employee construction company typically operates with a lean, role-combined structure centered on (1) project management, (2) field supervision, and (3) back-office accounting. Material ordering and cost control flow through a project manager → supplier → accounting approval → job cost tracking loop. Financial performance depends on tight job costing, cash-flow timing, and change-order control.

## 1. Typical Org Structure (5–50 Employees)

Structure varies by size, but most small–mid general contractors follow this pattern:

### Executive / Ownership
*   **Owner / President**: Handles business development, major bids, banking relationships, and final financial oversight. In very small firms (5–10 people), the owner may also act as estimator and project manager.

### Operations (Revenue-Generating Side)
1.  **Project Manager (PM)**
    *   Core role in materials + financial control.
    *   Owns job budget, reviews subcontracts, approves purchase orders (POs).
    *   Tracks job cost vs estimate, approves change orders.
    *   *Load:* Often 1 PM per 3–8 active projects.
2.  **Superintendent (Field Lead)**
    *   Runs jobsite daily, coordinates trades.
    *   Requests materials, tracks deliveries, verifies quantities received.
    *   *Note:* They initiate material needs but typically do not control budget.
3.  **Foreman / Crew Leads**
    *   Execute field work, track labor hours, confirm materials used.
4.  **Estimator (sometimes combined with PM)**
    *   Builds cost estimates, determines material takeoffs, sets original job budget.

### Back Office (Cost & Compliance Control)
5.  **Controller / Bookkeeper**
    *   Critical to material accounting.
    *   Processes vendor invoices, matches invoices to PO + delivery tickets.
    *   Allocates costs to job codes, manages A/P and A/R, tracks WIP.
    *   *Small firms:* Outsourced CPA + part-time bookkeeper.
    *   *Mid-size (20–50):* Full-time controller.
6.  **Accounts Payable (AP) Clerk (if larger)**
    *   Vendor invoice entry, payment scheduling, lien waiver tracking.
7.  **Office Manager**
    *   Permits, subcontract paperwork, insurance certificates.

---

## 1a. Segment Differentiation: How Org Structure Varies by Firm Size

*(Canonical segment definitions in [`segment-definitions.md`](../02_Market_Analysis/market/segment-definitions.md))*

The "5–50 employee" framing above describes the full range, but the org structure — and therefore the Three-Way Match failure mode — differs sharply by segment.

**Solo (1–4 employees):** The owner IS the field worker. There is no PM, no bookkeeper, and no office. The chaos cycle is **truncated**: the owner texts the supplier directly, so the "Drive-and-Call" and "PO Skip" happen in one person's head. Only the invoice leg fails — the owner gets an invoice weeks later and has no receipt to reconcile against because the packing slip is in their glovebox or never existed. The financial loss is real ($4,400+/yr estimated) but more about "lost receipts" than "multi-crew coordination failure." Conduit's Solo tier ($49/mo) addresses this with receipt capture + QBO sync, not full PO workflow.

**Small (5–9 employees):** The owner is now partially off tools — they spend part of the day in the truck, part on site, and part doing admin. The full Van-to-Office cycle is active: a field tech texts the owner, the owner calls the supplier while driving (no PO created), the packing slip goes in the van, and the invoice arrives at the owner's kitchen table. There is no dedicated bookkeeper — QuickBooks entries happen on evenings and weekends. The Starter tier ($99/mo) serves this segment: text-to-PO with zero field friction. The office user is the owner; field texters are the crew.

**Mid (10–19 employees):** A dedicated office manager or part-time bookkeeper has been hired, but the PM role is emerging and not yet clean. The bookkeeper tries to do three-way matching but is manually hunting packing slips and calling the owner for approvals. The bookkeeper is often the internal champion who discovers Conduit — they feel the pain most directly. The Starter→Pro transition tier ($139 blended ARPU) serves this segment. The ProAdvisor referral channel becomes relevant here because the bookkeeper likely has a CPA or QBO ProAdvisor relationship.

**Growth (20–49 employees):** Multiple crews, multiple job sites, a controller or office manager, and a PM (or two). This is the full operational structure from Section 1 above. The Three-Way Match failure is the most expensive here ($90,000+/yr estimated) because the volume is high and the dollar values per invoice are large. The controller advocates for Pro tier ($299/mo) because the ROI case is clearest: 30:1+ return on a $2,990/yr subscription. The Pro tier's multi-seat office access and 3-way match automation serve the controller + PM dual-user model.

---

## 2. Material Ordering Workflow (Most Common Model)
This is where small contractors often lose margin.

### Step 1: Estimate Sets Baseline
*   **Estimator**: Performs material takeoff, builds cost codes (CSI divisions), creates baseline budget per job.
*   *Example Budget:* 03 Concrete: $85k, 06 Framing: $120k, 09 Finishes: $95k.

### Step 2: Field Identifies Need
*   **Superintendent**: Reviews schedule and requests materials via Email, Text, Paper form, or Construction software (Procore, Buildertrend).

### Step 3: Purchase Order Creation
*   **PM or Office**: Creates PO tied to Vendor, Job number, Cost code, Budget line.
*   *Controls:* Compare PO value vs remaining budget. Require approval if exceeding threshold.

### Step 4: Delivery & Verification
*   **Superintendent**: Signs delivery ticket, confirms quantities. Delivery ticket goes to accounting.

### Step 5: Invoice Matching (3-Way Match)
*   **Accounting**: Matches PO + Delivery ticket + Vendor invoice.
*   If aligned → invoice approved → posted to job cost ledger.

### Step 6: Job Cost Reporting
*   **Controller generates**: Cost-to-date, Committed cost (open POs), Forecast to complete, Variance vs budget.
*   PM reviews weekly or biweekly.

---

## 3. Accounting Structure in Construction

### A. Job Cost Accounting
Each project is its own profit center. Expenses allocated by: Job number, Cost code, Phase.
*   *Software:* QuickBooks (Small), Sage (Mid), Foundation Software.

### B. Revenue Recognition (Critical)
1.  **Percentage-of-Completion (POC)**: Revenue recognized based on Cost incurred ÷ Total estimated cost. Used in larger/audited companies.
2.  **Completed Contract Method**: Revenue recognized only when job finishes. Used by smaller private firms.

### C. Work in Progress (WIP) Report
Core financial control document showing: Contract value, Costs incurred, Billings to date, Over/under billing.
*   *Underbilling* = Cash flow risk.
*   *Overbilling* = Positive short-term cash.

---

## 4. Cash Flow Mechanics
Construction is cash-sensitive.
*   *Typical Cycle:* Contractor buys materials → Pays vendors (30 days) → Submits pay app to client → Client pays (30–60 days).
*   *Funding:* Line of credit, Owner equity, Retainage (5–10% withheld).

---

## 5. Gross Margin Structure (Typical Ranges)
*   **Gross Margin**: 10–25%
*   **Net Margin**: 3–10%
*   *Example Breakdown ($5M Revenue):*
    *   COGS (Labor/Materials/Subs): $4M
    *   Gross Profit: $1M (20%)
    *   Overhead (Office, Insurance, Vehicles): $600k-700k
    *   Net Profit: $300k–400k
*   *Impact:* Material mismanagement often erodes 2–5% margin.

---

## 6. Key Failure Points in Material & Financial Control
1.  No PO system.
2.  Field ordering without budget visibility.
3.  Invoices coded incorrectly.
4.  Change orders not priced immediately.
5.  No weekly job cost review.
6.  Poor vendor term negotiation.

---

## 7. Operational Growth Path
*   **At 30–50 Employees**, structure formalizes:
    *   Owner → Operations Manager → PM Team → Superintendent Team.
    *   Controller → AP/AR → Payroll.
    *   Dedicated Estimator Team.
    *   *Processes:* Monthly WIP review, Cash flow forecast, Project buyout process.

---

## 8. Profitable vs. Weak Companies
*   **Strong Companies**: Lock pricing early (buyout phase), Track committed cost weekly, Separate field approval from financial approval, enforce change order discipline.
*   **Weak Companies**: Treat accounting as afterthought, Don’t reconcile PO vs invoice, Confuse revenue with cash.

---

## 9. The SaaS Opportunity
Material ordering pain points for new software to address:
*   Field-to-office communication gaps.
*   PO approval friction.
*   Real-time budget visibility.
*   Vendor price comparison.
*   SMS-based ordering for crews.
*   Lien waiver tracking.
