# Conduit App Scope: Features & Pages

*Status: Complete first draft — April 2026. Basis for wireframes, sprint planning, and engineering spec.*

---

## User Roles

Four distinct personas, each with radically different workflows:

| Role | Interface | Primary Goal |
|------|-----------|-------------|
| **Field Tech / Foreman** | SMS only — zero web UI | Send order requests without friction |
| **Project Manager / Office Manager** | Web app — primary daily user | Review, approve, and route draft POs |
| **Owner / Admin** | Web app | Oversight, settings, reports |
| **Bookkeeper / Controller** | Web app — AP focus | 3-way match, audit trail, QBO reconciliation |

---

## Feature List (13 Domains)

### 1. SMS Inbound Processing (Field-Facing, Invisible)
- Natural language order parsing (OpenAI GPT-4o-mini)
- MMS photo parsing — scribbled lists, packing slip photos (GPT-4o vision)
- Per-line-item confidence scoring (0–1 scale; items below 0.8 flagged)
- Construction slang dictionary (e.g., "Romex" → "NM-B Cable", "GFI" → "GFCI Receptacle")
- Deterministic JSON output validation with retry-on-failure
- Auto-acknowledgment SMS reply to tech ("Got it. PO #1234 drafted for Job: Main St.")
- Dead Letter Queue for failed messages (no order is ever lost silently)
- Phone number allow-list enforcement (only registered field workers can trigger POs)
- Duplicate/ambiguous request detection and disambiguation SMS reply

### 2. PO Draft & Approval Workflow (Office-Facing)
- Gmail-like inbox of AI-parsed draft POs awaiting review
- Line-item display with confidence scores and "Needs Review" flags
- Inline edit of line items before approval (quantity, unit, description, vendor, job)
- Approve, reject, or send back for more info
- Batch approve (for trusted foremen or routine items)
- Assign/reassign PO to a vendor (with fuzzy match from QBO vendor list)
- Assign/reassign PO to a job/project (from QBO customer list)
- Internal notes/comments on a PO (PM to bookkeeper)
- "Send to Supplier" — email formal PDF PO to vendor directly from app
- PO status lifecycle: Draft → Under Review → Approved → Sent → Billed → Closed

### 3. QuickBooks Online Integration
- OAuth connect/disconnect (QBO as identity layer for Solo tier)
- Anchor data pull on connect: vendors, customers/jobs, items/SKUs
- Background sync: daily re-pull of vendor, job, item lists
- Draft PO push to QBO (`POST /purchaseorder`) with job/class/location coding
- Vendor deduplication and fuzzy matching ("Home Depot" vs. "The Home Depot")
- Internal PO ID stored in QBO `DocNumber` field for traceability
- Tax mapping without rounding errors
- Retainage and project cost code support
- Bill creation from matched invoice (Phase 2) with `LinkedTxn` → closes PO in QBO
- Sync error log with human-readable explanations ("Vendor not found in QBO — click to create")

### 4. Field Worker Management
- Phone number allow-list — add/remove field worker numbers
- Assign field workers to jobs/projects (scopes their default job code)
- Field worker profiles: name, role, crew assignment
- Per-worker SMS history and PO attribution
- Opt-out/suspension (e.g., if a worker leaves)

### 5. Job / Project Management
- Import jobs from QBO customers (with `Job=true` flag)
- Manually create jobs (synced back to QBO)
- Per-job budget (committed spend vs. actual)
- Link all POs and bills to a job
- Job status: Active, Complete, On Hold

### 6. Vendor Management
- Vendor list synced from QBO
- Per-vendor PO history and spend summary
- Price history per item per vendor
- Preferred vendor tagging
- Vendor contact info (for PDF PO email delivery)

### 7. Notifications & Alerting
- In-app real-time notifications (Socket.io) on new draft PO
- Email notification to PM on new draft PO needing review
- SMS notification option (for PMs who prefer it)
- Low-confidence alert: "3 items need your review on PO #1234"
- Price variance alert: "PO item cost 22% higher than last order from same vendor"
- Unbilled PO alert: "PO #1089 has been open 14 days with no bill received"
- QBO sync failure alert with actionable detail

### 8. 3-Way Match (Phase 2)
- Dedicated inbound email address for invoice forwarding (PDF → AI parse)
- AI extraction of invoice line items, vendor, total, PO reference
- Auto-match invoice to open PO by PO number, vendor, amount
- Packing slip capture: field worker photos MMS'd to a second Twilio number → AI extract
- Match status dashboard: PO / Packing Slip / Invoice — shows what's missing per row
- Price variance detection: ordered price vs. invoiced price per line item
- Exception workflow: flag mismatches for PM/controller review before payment
- One-click "Approve Bill" pushes matched bill to QBO with `LinkedTxn` closing the PO
- Maverick spend detection: line items on invoice with no corresponding PO

### 9. Reporting & Analytics
- Material spend by vendor (period over period)
- Material spend by job (budget vs. actual)
- Price variance report: which vendors/items have price drift
- Unbilled materials report: open POs with no bill received (revenue at risk)
- AI accuracy report: correction rate, flagged items, resolved exceptions
- Processing time: draft PO to approved PO average time
- Export to CSV for all reports

### 10. Audit Trail & Compliance
- Immutable log of every action: who approved/edited/rejected, timestamp
- Full SMS thread history per field worker
- Original AI output stored alongside final approved PO (shows what AI extracted vs. what human corrected)
- CorrectionLog for AI fine-tuning: tracks every human override
- SOC 2-ready event log structure

### 11. Authentication & Access Control
- Auth0 OAuth2/OIDC for office staff login
- "Sign in with QuickBooks" as primary onboarding path
- Role-based access: Owner, Project Manager, Bookkeeper, Read-Only
- Multi-seat management (Owner invites office staff)
- Field workers: no login, access via phone number allow-list only
- Session management, MFA option for Owner/Bookkeeper roles

### 12. Billing & Subscription Management
- Four tiers: Solo ($49/mo), Starter ($99/mo), Pro ($299/mo), Enterprise (custom)
- Annual discount option (2 months free)
- Additional office seats on Pro: $29/seat/mo
- Field texters always unlimited and free
- Stripe integration for payment
- Usage metrics display (SMS processed, POs created, QBO syncs)
- Plan upgrade/downgrade self-serve
- Invoice history and receipt download

### 13. Onboarding
- Guided setup wizard post-signup (3–5 step flow):
  1. Connect QuickBooks
  2. Pull vendors, jobs, items
  3. Get your Twilio SMS number
  4. Add your first field worker (phone number)
  5. Send a test text → watch draft PO appear live
- In-app "quick wins" checklist (HubSpot-style progress bar)
- Contextual empty states with action prompts ("No POs yet — share this number with your crew")

---

## Page Inventory (34 Pages)

### Auth & Onboarding

| # | Page | Description |
|---|------|-------------|
| 1 | **Sign Up** | Email/password or "Sign in with QuickBooks" OAuth |
| 2 | **Log In** | Auth0-powered login with QBO OAuth option |
| 3 | **Forgot Password** | Password reset flow |
| 4 | **Onboarding — Connect QuickBooks** | OAuth handshake; explains what data is pulled |
| 5 | **Onboarding — Configure SMS Number** | Displays assigned Twilio number; instructions to share with crew |
| 6 | **Onboarding — Add Field Workers** | Add first worker(s) by name + phone number |
| 7 | **Onboarding — Test Drive** | Send a test text, watch draft PO appear in real time |
| 8 | **Accept Invitation** | Office staff invited by Owner lands here to set password and join |

### Core App — Office Workflow

| # | Page | Description |
|---|------|-------------|
| 9 | **Dashboard** | KPI cards: POs pending review, open POs, unbilled materials $, QBO sync status. Recent activity feed. Alerts ribbon. |
| 10 | **PO Inbox** | Gmail-style list of draft POs. Sorted by received time. Filter by status, job, field worker, confidence level. Bulk actions. |
| 11 | **PO Detail** | Single PO view: original SMS text, AI-extracted line items with confidence badges, vendor assignment, job assignment, edit controls, approve/reject/send buttons, internal notes thread, SMS history from that tech. |
| 12 | **PO List (All POs)** | Full searchable/filterable table of all POs across all statuses. Columns: PO #, date, tech, vendor, job, amount, status. Export to CSV. |
| 13 | **New PO (Manual)** | Manual PO creation form for orders placed by phone or walk-in (no SMS). Standard line-item entry. Syncs to QBO on save. |

### Jobs & Costing

| # | Page | Description |
|---|------|-------------|
| 14 | **Jobs List** | All active/closed jobs pulled from QBO. Per-job committed spend, budget, variance at a glance. |
| 15 | **Job Detail** | All POs linked to this job, budget vs. actual chart, unbilled materials list, open POs outstanding. |

### Vendors

| # | Page | Description |
|---|------|-------------|
| 16 | **Vendors List** | All vendors from QBO. Per-vendor total spend, last order date, PO count. |
| 17 | **Vendor Detail** | Vendor contact info, all POs from this vendor, price history per item (supports variance alerts). |

### 3-Way Match (Phase 2)

| # | Page | Description |
|---|------|-------------|
| 18 | **Bill Inbox** | AI-parsed invoices received via email forwarding, awaiting match/approval. Gmail layout mirrors PO Inbox. |
| 19 | **Bill Detail** | Invoice line items, auto-matched PO (with match confidence), mismatched items highlighted, approve-to-QBO button. |
| 20 | **3-Way Match Dashboard** | Table of all POs showing match completeness: PO ✓ / Packing Slip ? / Bill ✗. Filter by missing leg. |
| 21 | **Price Variance Alerts** | List of flagged price discrepancies across POs and bills. Sortable by % variance and dollar impact. |

### Reporting (Phase 3)

| # | Page | Description |
|---|------|-------------|
| 22 | **Spend Report** | Material spend by vendor and by job, date range selector, period-over-period comparison, CSV export. |
| 23 | **Unbilled Materials Report** | Open POs with no bill received, age of each, dollar value at risk. Direct link to follow up with supplier. |
| 24 | **AI Accuracy Report** | Correction rate, most-flagged items, items added/removed by human review. Used internally to tune prompts. |
| 25 | **Audit Log** | Immutable, searchable event log. Filter by user, action type, PO, date range. |

### Settings

| # | Page | Description |
|---|------|-------------|
| 26 | **Settings — Company** | Company name, logo, default tax rate, fiscal year start. |
| 27 | **Settings — Integrations** | QBO connection status, re-authenticate button, sync log, last sync time. Future: Procore, Sage. |
| 28 | **Settings — SMS / Twilio** | Assigned Twilio number, copy-to-clipboard, phone number allow-list (add/remove field workers). |
| 29 | **Settings — Users & Roles** | List of office users, roles, invite new user (email invite), remove user. |
| 30 | **Settings — Notifications** | Per-event toggles: new draft PO, low-confidence PO, unbilled alert, price variance, sync error. Per-user email/SMS/in-app preference. |
| 31 | **Settings — Billing** | Current plan, usage stats (SMS, POs, seats), upgrade/downgrade, payment method, invoice history. |

### Error / Edge Case

| # | Page | Description |
|---|------|-------------|
| 32 | **404 Not Found** | Friendly error with navigation back to Dashboard. |
| 33 | **QBO Reconnect Required** | Shown when OAuth token expired; clear CTA to re-authenticate. |
| 34 | **Subscription Expired / Paused** | Grace period messaging, upgrade CTA, read-only mode indication. |

---

## Delivery Phasing

| Phase | Target | Scope |
|-------|--------|-------|
| **MVP (Phase 1)** | Q3–Q4 2026 | Pages 1–17, 26–31 — core SMS → PO → QBO loop |
| **3-Way Match (Phase 2)** | Q1–Q2 2027 | Add pages 18–21 |
| **Analytics (Phase 3)** | Q3 2027 | Add pages 22–25 |

---

## Design Principles

These constraints must hold for every page and feature decision:

1. **Zero-Login Field Experience** — Field workers never touch the web app. Any feature that requires a field worker to log in is disqualified.
2. **One-Click Office Experience** — The most common office action (approve a PO) must never require more than two clicks from the Inbox.
3. **QBO is the System of Record** — Conduit never duplicates QBO data. It pushes to QBO; it does not replace it.
4. **Fail Safe, Never Fail Silent** — Every SMS that fails to parse must land in a Dead Letter Queue and trigger a human alert. No order is silently dropped.
5. **Transparent AI** — Confidence scores are always visible. The original SMS text is always shown next to the AI extraction. Human corrections are logged.
