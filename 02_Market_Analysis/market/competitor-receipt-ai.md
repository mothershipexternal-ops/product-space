# Competitor Deep Dive: Receipt AI

**Last Updated:** 2026-03-17
**Category:** Workflow-similar competitor — SMS-to-QBO, expense capture only

---

## Overview

Receipt AI is a lightweight, SMS-and-email-based receipt capture tool that extracts data from receipt photos using AI and automatically syncs expense records to QuickBooks Online or Xero. Its tagline positions it as serving "busy, traveling teams." It was bootstrapped by its founders to solve their own expense management problem.

Receipt AI is the **strongest market signal that the SMS-to-QBO model works.** It validates willingness to text financial data to a phone number, QBO App Store as a distribution channel, and AI receipt parsing accuracy for real-world use. However, it solves only one leg of the Three-Way Match.

---

## Company Profile

| | |
|---|---|
| **Founded** | ~2022–2023 |
| **Stage** | Bootstrapped micro-SaaS |
| **Funding** | None (founder-led) |
| **MRR** | ~$1,500/month (Starter Story feature, ~2023–2024 vintage) |
| **Team size** | Very small, founder-led |
| **QBO App Store** | Listed, 5-star rating, 100+ business customers, 12,000+ receipts processed |

---

## Target Market

- **Industry:** Horizontal — any business with mobile employees who incur expenses. Not construction-specific, though construction landing pages have been created.
- **Company size:** Micro-SMB. Pricing tiers go up to 10 members, confirming this is a small-team product.
- **Geography:** Global (available to QuickBooks global customers)
- **Primary use case:** Traveling sales teams, on-site workers, consultants, founders — anyone who needs to submit receipts without being at a desk

---

## Product & Workflow

### How It Works

1. Worker takes a photo of a receipt
2. Texts the photo (with optional memo) to a Receipt AI phone number via SMS — or sends via email
3. AI extracts date, vendor name, total, tax, and line items (within ~5 seconds)
4. File is renamed, categorized against the Chart of Accounts, and uploaded to QBO or Xero
5. Receipt appears in QBO at one of three levels depending on plan

No app download. No login. No new interface. The full interaction is: take photo → send text → done.

### QBO Integration Levels

| Level | What Syncs to QBO |
|---|---|
| Level 1 (Attachment) | Receipt stored as PDF/image attachment only |
| Level 2 (Expense) | Full expense entry: payee, amount, category, receipt attached |
| Level 3 (Line Items) | Individual line-item expense entries synced to QBO |

Categories are automatically mapped against the company's existing Chart of Accounts.

### The PO Number Feature (Important Nuance)

Receipt AI allows users to include a PO number in the SMS text body. It gets recorded as metadata in QBO attached to the expense record.

**This is NOT procurement.** There is no system verification that the PO exists, no amount matching, no supplier invoice reconciliation. It is a text field — manual metadata, not automation. Receipt AI has built construction-specific marketing pages (`/construction_purchase_order`) but the core product does not create POs.

---

## Pricing

Self-serve. No sales call required. Free trial available. Transparent pricing — a direct competitive advantage over Remarcable, Kojo, and Field Materials.

| Plan | Price | Users | SMS Numbers | QBO/Xero Sync | Monthly Receipts |
|---|---|---|---|---|---|
| **Pro** | ~$29/month | 1 | 2 | **No** | 100 |
| **Business Basic** | ~$99/month | Up to 5 | Not specified | **Yes** (QBO + Xero) | 500 |
| **Business Advance** | ~$299/month | 10+ | Not specified | **Yes** (QBO + Xero) | 2,500 |

*(Pricing confirmed via receipt-ai.com pricing article and opentools.ai review, August–October 2025)*

**Critical note for Conduit competitive positioning:** The Pro plan at $29/month does **not** include QuickBooks or Xero sync — that feature is only available at Business Basic ($99/month) and above. This means:
- The "$20–50/mo" range sometimes cited understates what QBO-integrated Receipt AI costs ($99+)
- Conduit's Solo tier ($49/mo) would include QBO sync — making it a better value than Receipt AI's entry-tier ($29 without QBO sync) and less expensive than Receipt AI's QBO-integrated tier ($99)

---

## Customer Reviews & Social Proof

- **QBO App Store:** 5-star rating, 100+ business customers
- **G2:** First documented 5-star review recently announced by company; very low review volume overall — consistent with a micro-scale product
- **Product Hunt:** Listed, upvotes; positioned as "manage receipts with AI and SMS for busy traveling teams"
- **Starter Story:** Featured; reached ~$1,500/month MRR
- **No Trustpilot, Capterra, or app store presence found**

Customer testimonials highlight the founder personally meeting with customers to develop custom solutions — a strength at micro-scale that becomes a liability at growth scale.

---

## Competitive Assessment vs. Conduit

| Dimension | Receipt AI | Conduit (target) |
|---|---|---|
| Requires field worker login/app? | NO — pure SMS, no app, no login | NO — pure SMS |
| Handles full Three-Way Match? | NO — receipt/expense capture only | YES (PO creation + receipt + invoice) |
| Serves 5–50 employee trade contractor? | Right size, wrong scope | Built for it |
| SMS-first workflow? | YES — SMS is the core UX | YES |
| QBO integration? | YES — deep, real-time, 3 levels | YES — Draft PO creation |
| Pricing transparency | YES — self-serve $29–$299/month | Transparent tiers (to be published) |
| Trade-specific intelligence? | NO — horizontal product | YES — trade contractor-specific |
| Proactive vs. reactive? | REACTIVE — captures after purchase | PROACTIVE — starts before purchase |
| Company stage | Bootstrapped micro-SaaS | Pre-revenue |

---

## Key Weaknesses vs. Conduit

1. **Only one leg of the Three-Way Match.** Receipt AI captures expenses after the fact. It does not create POs before the purchase, does not issue POs to suppliers, and cannot reconcile whether what was ordered matches what was delivered matches what was invoiced. It solves the crumpled receipt problem — but not the missing PO or the blind payment problems.

2. **Reactive, not proactive.** Receipt AI captures what already happened. Conduit's workflow starts *before* the purchase — the field tech's text triggers a Draft PO in QBO, which then anchors the receipt and invoice downstream.

3. **No procurement workflow.** No supplier catalog, no approval routing, no PO issuance, no supplier communication. It is an expense ledger, not a procurement system.

4. **Tiny company, limited reliability.** Founder-led, bootstrapped, ~$1.5K/month MRR. No dedicated support team, no SLAs. A 15-person electrical contractor handling $2M in annual materials needs reliability guarantees.

5. **Horizontal product, no trade-contractor intelligence.** No understanding of job costing, cost codes, material categories, or supplier relationships specific to electrical/plumbing/HVAC. Conduit can be purpose-built with trade-specific AI prompting and QBO class/job sync.

6. **PO number is just a text field.** When Receipt AI "supports" PO numbers, the user manually types "PO #1234" in the SMS body. There is no system-level verification — just unvalidated metadata attached to an expense.

7. **Scale ceiling.** At ~$1,500/month MRR after 2+ years, Receipt AI is not growing aggressively. Conduit can out-invest in trade-specific features, support, and integrations.

---

## What Receipt AI Validates for Conduit

This is the most important competitor to study because it proves the model:

| Validated Signal | What It Means for Conduit |
|---|---|
| Users willingly text financial data to a phone number | SMS-first UX adoption is real — not a theoretical user behavior |
| QBO App Store as distribution channel | List on QBO App Store from Day 1 |
| AI receipt parsing accuracy is sufficient for real-world use | AI parsing for material requests is feasible |
| $29–$299/month pricing is acceptable for this workflow | Our $99–$299 pricing tier is calibrated correctly |
| Self-serve onboarding works | No sales team needed at launch |

---

## Positioning Statement Against Receipt AI

> "Receipt AI tells your bookkeeper what you spent *after* you spent it. Conduit tells your bookkeeper *before* the truck leaves the supply house — and reconciles the invoice automatically when it arrives."

---

## Sources

- [Receipt AI Homepage](https://receipt-ai.com/)
- [Receipt AI QuickBooks Integration](https://receipt-ai.com/quickbooks)
- [How Receipts Appear in QBO](https://receipt-ai.com/articles/how-receipts-appear-in-quickbooks-online-with-receipt-ai-attachments-expenses-and-line-items)
- [Receipt AI for Construction (PO landing page)](https://receipt-ai.com/construction_purchase_order)
- [Text Receipts and PO Numbers — Construction Article](https://receipt-ai.com/articles/text-receipts-po-numbers-construction-projects)
- [Receipt AI Pricing Overview](https://receipt-ai.com/articles/receipt-ai-pricing-plans-simple-options-for-every-team-size)
- [Receipt AI on G2](https://www.g2.com/products/receipt-ai/reviews)
- [Receipt AI G2 Pricing](https://www.g2.com/products/receipt-ai/pricing)
- [Receipt AI on Product Hunt](https://www.producthunt.com/products/receipt-ai)
- [Receipt AI — Starter Story (Founding Story + MRR)](https://www.starterstory.com/stories/receipt-ai)
- [Receipt AI on QuickBooks App Store](https://quickbooks.intuit.com/app/apps/appdetails/receipt_ai/en-us/)
- [Receipt AI 5-Star G2 Review Announcement](https://receipt-ai.com/articles/receipt-ai-earns-5-star-review-on-g2)
