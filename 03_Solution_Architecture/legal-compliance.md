# Legal & Compliance Framework: The Invisible Procurement Stack

**Last Updated:** 2026-02-28
**Status:** Research — Requires Attorney Review Before Implementation

---

## 1. AI Liability: The "Wrong Order" Problem

### 1.1 The Risk

The core product uses AI to parse unstructured text into structured purchase orders. The AI can misinterpret:

*   **Quantity:** "10 breakers" parsed as "100 breakers" = $5,000 unintended cost.
*   **Item:** "Romex" (NM-B cable) confused with "THHN" (individual conductor) = wrong product delivered.
*   **Project:** "Smith job" matched to wrong Customer:Project in QBO = misallocated costs.

If the system auto-sends a PO to a vendor without human review and the order is wrong, the question of financial liability arises.

### 1.2 Mitigation Architecture

**Mandatory Human-in-the-Loop (HITL):** The system NEVER sends a PO to a vendor automatically. The flow is:

1.  Field worker texts order.
2.  AI creates a **draft PO** (internal only).
3.  Office manager sees draft in dashboard.
4.  Office manager reviews and clicks "Approve & Send."
5.  Only then does the PO go to the vendor.

This architectural decision is the primary legal shield. The AI is a *drafting assistant*, not a decision-maker.

### 1.3 Terms of Service Requirements

The ToS must include:

*   **Disclaimer of AI accuracy:** "AI-generated purchase order drafts are provided as suggestions. The User is solely responsible for reviewing and approving all orders before they are submitted to vendors."
*   **User indemnification:** "User agrees to review all AI-generated drafts before approval. [Company] shall not be liable for orders approved by the User without review."
*   **No warranty of fitness:** "The Service does not guarantee the accuracy of item identification, quantity extraction, or project matching. The Service is a productivity tool, not a substitute for professional procurement judgment."
*   **Limitation of liability:** Cap liability at the amount paid by the customer in the preceding 12 months.

### 1.4 Insurance

*   **Errors & Omissions (E&O) insurance:** Covers claims arising from professional service failures (e.g., AI misparse causes financial loss). Obtain before launching to paying customers.
*   **General liability:** Standard business coverage.
*   **Cyber liability:** Covers data breach costs (employee PII, financial data).

---

## 2. Twilio A2P 10DLC Compliance

### 2.1 Regulatory Background

As of September 1, 2023, **all Application-to-Person (A2P) messaging to U.S. recipients via 10-digit long codes (10DLC) requires registration** with The Campaign Registry (TCR) through Twilio. Unregistered messages are blocked by carriers (AT&T, T-Mobile, Verizon).

Source: Twilio documentation (twilio.com/docs/messaging/compliance/a2p-10dlc)

### 2.2 Registration Requirements

**Brand Registration (Standard Brand):**
*   Business legal name (must match IRS/tax agency records).
*   Employer Identification Number (EIN) — required for Standard Brand.
*   Business address, website, authorized representative.
*   Industry classification.

**Campaign Registration:**
*   Use case: "Conversational Messaging" (2-way communication for procurement).
*   Sample messages (both inbound and outbound).
*   Opt-in/opt-out mechanism description.
*   Message volume estimates.

### 2.3 Trust Score Impact

The TCR assigns a Trust Score based on Brand registration quality. This score determines:
*   **Throughput:** Messages per second allowed.
*   **Daily limits:** Total messages per day.

Higher trust scores require accurate, complete business information. A new SaaS startup with an EIN and legitimate website typically receives a moderate Trust Score sufficient for early-stage volumes (<10,000 messages/day).

### 2.4 Opt-In / Opt-Out Requirements

*   **Opt-In:** When an office manager adds a field worker's phone number, the system must send an initial message: "Your employer [Company Name] has registered you for [Product Name]. Reply STOP to opt out."
*   **Opt-Out:** Must honor "STOP" replies immediately. Twilio handles this natively.
*   **Records:** Maintain records of opt-in consent (timestamp, who added the number).

### 2.5 Fallback Strategy

If 10DLC registration is delayed or rejected:
*   **Toll-Free Numbers:** Different registration process (Toll-Free Verification), potentially faster approval.
*   **WhatsApp Business API:** Not subject to 10DLC rules. Increasingly popular in construction field communication.
*   **Email-based intake:** Degraded UX but functional (forward invoices/slips to an email address for AI parsing).

---

## 3. Intuit / QuickBooks Developer Compliance

### 3.1 App Store Listing Requirements

To list on the QuickBooks App Store (primary distribution channel), the app must pass Intuit's review process:

*   **Functional review:** App must demonstrate working QBO integration.
*   **Security review:** Required for apps requesting sensitive scopes.
*   **Branding guidelines:** Must not misrepresent association with Intuit.

### 3.2 OAuth 2.0 Scopes

The app requires the following QBO API scopes:

| Scope | Purpose | Sensitivity |
| :--- | :--- | :--- |
| `com.intuit.quickbooks.accounting` | Read/write access to accounting data | High |

Specific endpoints used:
*   `GET /vendor` — Read vendor list (anchor data).
*   `GET /customer` — Read customer/project list (anchor data).
*   `GET /item` — Read item catalog (SKU matching).
*   `POST /purchaseorder` — Create purchase orders.
*   `POST /bill` — Create bills (with LinkedTxn to PO).
*   `POST /attachable` — Upload receipt images.

### 3.3 Security Assessment

Apps that **write financial transactions** (bills, purchase orders) to the general ledger undergo enhanced security review:

*   **Data handling:** How is QBO access token stored? (Must be encrypted, never logged.)
*   **Token refresh:** OAuth tokens expire. Must implement automatic refresh flow.
*   **Rate limiting:** QBO API throttles at 500 requests/minute. Must implement backoff and queuing.
*   **Error handling:** What happens when sync fails? (Must not create orphaned or duplicate records.)

### 3.4 SOC 2 Consideration

Intuit does not strictly require SOC 2 for App Store listing, but:
*   Large customers (20+ employees) increasingly ask for SOC 2 compliance.
*   SOC 2 Type II demonstrates security maturity and builds trust.
*   **Recommendation:** Plan for SOC 2 Type II in Phase 2 (post-100 customers). Budget ~$10,000-30,000 for audit.

---

## 4. Data Privacy & Employee PII

### 4.1 Data Collected

| Data Type | Source | Sensitivity | Retention |
| :--- | :--- | :--- | :--- |
| Employee phone numbers | Office manager input | PII | Until employee deactivated + 30 days |
| SMS message content | Twilio webhook | Business data | 90 days (then purged, metadata retained) |
| MMS images (receipt/slip photos) | Twilio webhook | Business data | 90 days (then purged) |
| QBO access tokens | OAuth 2.0 flow | Highly sensitive | Encrypted at rest, auto-refresh |
| QBO financial data (vendors, items, POs) | QBO API sync | Business confidential | Cached locally, refreshed daily |

### 4.2 CCPA Compliance (California)

If any employee or customer is a California resident:
*   **Right to know:** Must disclose what data is collected and why.
*   **Right to delete:** Must delete personal data on request within 45 days.
*   **Right to opt-out:** Must provide mechanism to opt out of data sale (N/A — we don't sell data).
*   **Privacy Policy:** Must be published and accessible from the app and website.

### 4.3 Encryption Standards

*   **At Rest:** AES-256 for database fields containing PII (phone numbers, tokens).
*   **In Transit:** TLS 1.3 for all API and web traffic.
*   **Backups:** Encrypted with separate key from production.

### 4.4 Data Processing Agreement (DPA)

Enterprise customers will require a DPA. Template should cover:
*   Data processing purposes (limited to providing the service).
*   Sub-processors (Twilio, OpenAI, cloud provider).
*   Data location (U.S. only for Phase 1).
*   Breach notification timeline (72 hours).

**OpenAI Data Policy:** As of 2026, OpenAI's API does not use customer data for model training by default. This must be verified periodically and disclosed in the privacy policy. The DPA with OpenAI should be executed for enterprise customers.

---

## 5. Intellectual Property

### 5.1 The "Slang Dictionary" Moat

The construction-specific AI training data (trade term mappings, correction logs, confidence calibrations) constitutes a proprietary dataset. This is a trade secret, not patentable, but protectable via:
*   **NDA for employees/contractors** accessing the dataset.
*   **Terms of Service:** Users grant a license for their correction data to improve the system (must be explicit in ToS).
*   **Technical controls:** The Slang Dictionary and correction logs are not exposed via API.

### 5.2 Open Source Considerations

If using open-source libraries (React, Node.js, Prisma — all permissively licensed), ensure:
*   No AGPL or copyleft dependencies in the core product (these require source code disclosure).
*   Maintain a bill of materials (SBOM) for dependency licenses.

---

## 6. Action Items (Pre-Launch Checklist)

| # | Item | Priority | Status |
| :--- | :--- | :--- | :--- |
| 1 | Draft Terms of Service with AI disclaimer and user indemnification | Critical | Not started |
| 2 | Draft Privacy Policy (CCPA-compliant) | Critical | Not started |
| 3 | Register Twilio Standard Brand (10DLC) with EIN | Critical | Not started |
| 4 | Register Twilio Campaign ("Conversational Messaging") | Critical | Not started |
| 5 | Apply for Intuit Developer Program and submit app for review | Critical | Not started |
| 6 | Obtain E&O insurance quote | High | Not started |
| 7 | Execute DPA with OpenAI | Medium | Not started |
| 8 | Plan SOC 2 Type II timeline (Phase 2) | Medium | Not started |
| 9 | Consult attorney on Delaware C-Corp formation | High | Not started |
