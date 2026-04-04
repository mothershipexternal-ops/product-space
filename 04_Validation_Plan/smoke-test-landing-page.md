# Private Beta Waitlist Landing Page

**Product:** Conduit — Text-to-Order SaaS for Trade Contractors
**Goal:** Collect emails for private beta waitlist. Target >5% conversion from cold paid traffic, >25% from warm community traffic.
**Platform:** Static HTML/CSS page (deployable to Vercel, Netlify, or GitHub Pages).
**Email Collection:** Formspree (free tier: 50 submissions/mo; upgrade to $8/mo for autoresponder).
**Last Updated:** 2026-02-28

---

## Page Architecture

Seven sections, single-page scroll, one goal: email capture. The email form appears twice (hero + footer) so the visitor never has to scroll back up.

```
[HERO] -------- Headline + Inline Email Form (above the fold)
[PROBLEM] ----- 4 pain bullets with dollar figures
[DEMO] -------- SMS conversation mockup (visual proof of concept)
[ROI] --------- "What this costs you" calculator with real numbers
[HOW IT WORKS]- 3-step flow
[TRUST] ------- Industry stats + data-backed credibility
[FINAL CTA] --- Email form repeated + referral hook
[FOOTER] ------ Legal, copyright
```

---

## Section 1: Hero (Above the Fold)

**Layout:** Full-width. Dark background (navy or charcoal). White text. Email form is the dominant element. No navigation menu — there is nowhere else to go.

**Headline (H1):**

> **Your guys already text their orders. Now QuickBooks gets them too.**

**Subheadline (H2):**

> Field techs text what they need. AI reads it. A purchase order appears in QuickBooks — matched to the right job, with zero data entry. No app to download. No training required.

**Email Form (inline, not a modal):**

```
[  Enter your work email  ] [ Join the Private Beta -> ]
```

*Form HTML (Formspree):*
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="_gotcha" style="display:none">
  <input type="email" name="email" placeholder="Enter your work email" required>
  <button type="submit">Join the Private Beta</button>
</form>
```

**Sub-text (below form):**

> Free for early beta users. Works with QuickBooks Online. We'll email you when your spot opens.

**Trust badges (small, below sub-text):**

> `[QuickBooks Compatible]` `[256-bit Encrypted]` `[No Credit Card Required]`

---

## Section 2: The Problem (Agitate)

**Layout:** White background. Left-aligned text. Each bullet is a card or block with an icon.

**Section Header:**

> **You're losing money every week. Here's where it goes.**

**Pain Bullets (4 cards):**

**Card 1 — Lost Receipts**
> "I bought that part last Tuesday... maybe it's in the van?"
>
> Your techs lose packing slips. The office finds out when the invoice hits — with no way to verify it. Industry data: **~22% of invoices require exception handling** before payment — in construction, with verbal POs and lost packing slips, the rate is structurally higher.
>
> *(Source: Ardent Partners AP Metrics, 2025)*

**Card 2 — Blind Payments**
> You pay the invoice because you need to keep the credit line open. But was the price right? Did you even receive everything on the list?
>
> Contractors overpay **0.5-2% of total supplier spend** by paying invoices without matching them to what was actually ordered and delivered.

**Card 3 — $15–$30 Per Invoice**
> Every time your office manager manually processes an invoice — pulling it from email, cross-referencing the job, typing line items into QuickBooks — it costs **$15–$30 in labor time** (IOFM; Ardent Partners 2025). At very small firms where the owner does it themselves, the fully-loaded cost hits $30–$40. Best-in-class automated processing: **$2.88**.
>
> A firm processing 150 invoices/month saves **$18,000–$44,000/year** by automating.

**Card 4 — 83-Day Payment Cycles**
> Commercial construction subcontractors wait an average of **83 days** to get paid — nearly 3x the 30-day standard in other industries (PwC Working Capital Survey). Every manual step in your invoice workflow makes the cycle longer. Late payments strain supplier relationships and kill your credit terms.

---

## Section 3: The Demo (SMS Conversation Mockup)

**Layout:** Centered. Phone-shaped frame showing a text message conversation. This is the single most important visual on the page — it shows the product in action without requiring explanation.

**Section Header:**

> **This is the entire field experience. A text message.**

**Mockup Conversation (styled as iMessage/SMS bubbles):**

```
┌─────────────────────────────────┐
│  Messages    (919) 555-0148     │
│─────────────────────────────────│
│                                 │
│  [GRAY] Hey need 500ft 12-2    │
│  Romex and a box of 1/2 EMT   │
│  connectors for the Johnson    │
│  job on Main St                │
│                      10:14 AM  │
│                                 │
│  [BLUE] Got it. Here's what    │
│  I parsed:                     │
│                                 │
│  - NM-B Cable 12/2, 500 ft    │
│  - EMT Connectors 1/2", 1 box │
│  - Project: Johnson (Main St) │
│                                 │
│  PO #1047 drafted in           │
│  QuickBooks. Office notified.  │
│                      10:14 AM  │
│                                 │
│  [GRAY] 👍                     │
│                      10:15 AM  │
│                                 │
└─────────────────────────────────┘
```

**Caption below mockup:**

> That text just created a purchase order in QuickBooks, tagged to the right project, with line items the AI extracted from construction slang. The tech spent 15 seconds. The office manager spent zero.

---

## Section 4: ROI — "What This Costs You Right Now"

**Layout:** Light gray background. Two-column on desktop (left: cost breakdown, right: savings summary). Single column on mobile.

**Section Header:**

> **The math on doing nothing.**

**Left Column — The Status Quo Cost (for a 15-person firm):**

| Line Item | Annual Cost |
| :--- | ---: |
| Manual invoice processing (150/mo × $25 avg) | $45,000 |
| Material error leakage (1% of $600K spend) | $6,000 |
| Office admin time chasing receipts (10 hrs/wk) | $15,600 |
| Price variance paid without detection (0.5% of spend) | $3,000 |
| **Total annual waste** | **$69,600** |

**Right Column — The Result:**

> **Save $70,000/year.**
> **Pay $3,588/year.** (Pro plan, annual)
>
> That's a **19:1 return.**
>
> Even if you only capture 25% of the savings, you're still getting **$17,000 back for $3,588 spent.**

**CTA below ROI section (text link, not a full form):**

> [Join the beta and stop the leak ->](#hero-form)

---

## Section 5: How It Works

**Layout:** White background. 3 numbered steps, horizontal on desktop, vertical on mobile. Each step has an icon.

**Section Header:**

> **Setup takes 5 minutes. Training takes zero.**

**Step 1 — Connect**
> Link your QuickBooks Online account. We auto-import your vendor list, item catalog, and project names. One click.

**Step 2 — Add Your Crew**
> Enter your field techs' phone numbers. They get a welcome text: "Text your orders to this number." That's their entire onboarding.

**Step 3 — Text and Forget**
> Techs text orders and snap photos of receipts. AI creates draft POs in QuickBooks, matched to the right project. Your office manager reviews and approves with one click.

---

## Section 6: Trust Signals (Data-Backed, No Fake Testimonials)

**Layout:** Dark background (matches hero). White text. 3 stat blocks side by side, then a credibility paragraph.

**Section Header:**

> **Built on real construction industry data.**

**Stat Blocks:**

| Stat | Label |
| :--- | :--- |
| **~130,000** | specialty trade contractors (NAICS 238) in the "Missing Middle" (5–49 employees) |
| **85%** | of small contractors use QuickBooks Online as their accounting system |
| **<10%** | have adopted any specialized procurement software |

**Credibility Paragraph:**

> We are not building another project management platform. This is a **financial control tool** — an invisible layer between your field crews and your books. Every number on this page comes from verified industry research (AnchorGroup, 6sense, IBISWorld, Brentwood Growth). We built this because the problem is real, documented, and expensive.

**No fake testimonials.** Pre-launch pages with fabricated quotes erode trust. Once beta users provide feedback, real quotes replace this section.

---

## Section 7: Final CTA (Email Form Repeated)

**Layout:** Full-width. Same dark background as hero. Email form centered.

**Headline:**

> **Be first in line when we launch.**

**Subheadline:**

> We're onboarding beta users in small batches starting Q2 2026. Early access is free. Spots are limited to ensure we can personally onboard every team.

**Email Form (same Formspree form as hero):**

```
[  Enter your work email  ] [ Join the Private Beta -> ]
```

**Below form — Referral hook:**

> **Want to skip the line?** After signing up, share your personal referral link. Every person you refer moves you up the waitlist.

**Trust line:**

> We will never share your email. Unsubscribe anytime. No spam — just launch updates.

---

## Section 8: Footer

> Conduit | Built for trade contractors who text.
>
> [Privacy Policy] | [Terms of Service]
>
> Copyright 2026. All rights reserved.

---

## Post-Signup Flow

### Thank-You Page (redirect after Formspree submit)

**Headline:**

> **You're on the list.**

**Body:**

> We're building the private beta right now. You'll get an email when your spot opens.
>
> While you wait — help us build this for you. Answer 3 quick questions (30 seconds):

**Micro-Survey (3 questions, embedded on thank-you page):**

These questions qualify the lead and provide product-market fit data.

```
1. What's your role?
   [ ] Owner / President
   [ ] Office Manager / Bookkeeper
   [ ] Project Manager
   [ ] Field Tech / Foreman
   [ ] Other: ___________

2. How many people work at your company?
   [ ] 1-4
   [ ] 5-15
   [ ] 16-50
   [ ] 51+

3. Do you currently use QuickBooks Online?
   [ ] Yes
   [ ] No, I use QuickBooks Desktop
   [ ] No, I use something else
   [ ] I don't use accounting software
```

*Implementation: Second Formspree form, or Tally.so free embed (cleaner for surveys). Include the user's email as a hidden field so responses link to the waitlist entry.*

**Referral Block (below survey):**

> **Move up the waitlist.** Share this link with other contractors:
>
> `[https://yourproduct.com/?ref=USER_ID]` [Copy Link]
>
> Every signup from your link bumps you up. Top referrers get invited first.

*Implementation note: Referral tracking requires a lightweight backend or a service like Waitlister.me ($0-29/mo) or Viral Loops. For MVP, a simple UTM parameter tracked in a spreadsheet is sufficient.*

---

## Email Collection: Formspree Setup

### Configuration

1. Create account at formspree.io.
2. Create new form. Copy the form endpoint ID.
3. Replace `YOUR_FORM_ID` in the HTML above.
4. Configure redirect URL to the thank-you page.
5. Enable honeypot spam protection (the hidden `_gotcha` field).
6. Connect Google Sheets integration (Formspree dashboard -> Plugins -> Google Sheets) to auto-log every submission.

### Form HTML (complete, production-ready)

```html
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  id="waitlist-form"
>
  <!-- Honeypot (spam protection, hidden from users) -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">

  <!-- Redirect after submission -->
  <input type="hidden" name="_next" value="https://yourproduct.com/thank-you">

  <!-- Email subject line for notifications -->
  <input type="hidden" name="_subject" value="New Waitlist Signup">

  <!-- The actual form field -->
  <input
    type="email"
    name="email"
    placeholder="Enter your work email"
    required
    aria-label="Email address"
  >
  <button type="submit">Join the Private Beta</button>
</form>
```

### Autoresponder (requires Formspree $8/mo plan)

Sends a confirmation email immediately after signup:

> **Subject:** You're on the private beta list
>
> **Body:**
> Hey — thanks for signing up for Conduit.
>
> We're onboarding beta users in small batches starting Q2 2026. You'll hear from us when your spot opens.
>
> In the meantime:
> - Share your referral link to move up: [LINK]
> - Reply to this email with your biggest material ordering headache. We read every one.
>
> — [Founder Name]

---

## Traffic Plan

### Budget: $200 Total (Initial Test)

| Channel | Budget | Targeting | Expected Clicks | Goal |
| :--- | :--- | :--- | :--- | :--- |
| **Reddit Ads** | $100 | r/electricians, r/plumbing, r/Construction, r/smallbusiness | 200-400 | 10-20 signups (5% CVR) |
| **Facebook Ads** | $100 | Interest: "Electrical Contractor" + Title: "Owner" + Company Size: 11-50 | 150-300 | 8-15 signups (5% CVR) |
| **Organic Reddit** | $0 | 3-5 authentic posts in trade subreddits | 100-500 | 25-125 signups (25% CVR from warm) |
| **Organic Facebook** | $0 | Posts in "Electrician Pros," "The Contractor Fight" groups | 50-200 | 12-50 signups (25% CVR from warm) |

### Ad Copy (Reddit)

> **Headline:** "Your guys text their orders anyway. What if QuickBooks got them too?"
>
> **Body:** Building a tool that turns field text messages into purchase orders in QuickBooks. No app for crews to download — just text a number. Looking for electricians and plumbers to try the beta. Free for early users.
>
> **CTA:** Join the waitlist

### Ad Copy (Facebook)

> **Image:** The SMS mockup from Section 3 (phone showing the text conversation).
>
> **Primary Text:** Your techs already text you what they need. What if that text automatically created a PO in QuickBooks — matched to the right job, zero data entry?
>
> We're building it. No app to install. Just a phone number your guys text. Free for beta users.
>
> **Headline:** Stop Chasing Receipts. Just Text Orders.
>
> **CTA Button:** Sign Up

### Success Metrics

| Metric | Threshold | Action If Below |
| :--- | :--- | :--- |
| **Cold traffic CVR** | >5% | Rewrite headline / value prop. Test different pain angles. |
| **Warm traffic CVR** | >25% | Copy resonates but community targeting is off. Adjust subreddits/groups. |
| **Total signups (first $200)** | >30 | Continue to interviews. Signal is strong enough to proceed. |
| **Total signups (first $200)** | <15 | Pause. The value proposition needs reworking before spending more. |
| **Micro-survey completion** | >50% of signups | Qualification data is flowing. Adjust questions if needed. |

### Organic Post Template (Reddit)

Post this in r/electricians or r/plumbing as a genuine question/discussion, not an ad:

> **Title:** "How do you handle material orders from the field? Text, app, phone call?"
>
> **Body:** I'm building a tool for trade contractors that turns text messages into purchase orders in QuickBooks. The idea is your guys just text a number — "need 500ft Romex for the Smith job" — and a PO shows up in QBO automatically, matched to the right project.
>
> Before I build it wrong, I want to know: how does your shop actually handle this today? Do your guys text you? Call the supply house directly? Use an app?
>
> If this sounds useful, I'm looking for beta testers: [link]

---

## Design Notes

### Visual Style

*   **Palette:** Dark navy (#1a1f36) for hero/trust sections, white (#ffffff) for content sections, light gray (#f5f5f5) for ROI section. Accent color: electric blue (#3b82f6) for CTAs and links.
*   **Typography:** System font stack (Inter, -apple-system, Segoe UI). H1 at 48px, H2 at 32px, body at 18px. High contrast for readability on mobile in bright conditions (field workers browse in sunlight).
*   **Imagery:** No stock photos of people in hard hats. The SMS mockup IS the hero image. Optional: a simple diagram of the text -> AI -> QuickBooks flow.
*   **Mobile:** The page must be mobile-first. 83% of waitlist visitors arrive on mobile. The email form must be thumb-friendly with a large input field and button. No horizontal scrolling. No tiny text.

### Page Speed

*   No JavaScript frameworks. Static HTML/CSS only. Inline critical CSS.
*   Total page weight target: <100KB (no images except the mockup, which can be CSS-rendered).
*   Load time target: <1.5 seconds on 3G.

### Hosting

*   **Recommended:** Vercel or Netlify (free tier, auto-SSL, fast CDN).
*   **Alternative:** GitHub Pages (free, manual SSL via Cloudflare).
*   **Domain:** Purchase a short, memorable .com. Avoid hyphens. Examples: `texttoorder.com`, `fieldtext.com`, `orderviatxt.com`.

---

## A/B Testing: Segment-Specific Copy Variants

The current page uses a single value prop ("Your guys already text their orders. Now QuickBooks gets them too.") that works across all segments. Once the initial waitlist test establishes baseline conversion, test segment-specific copy variants to improve CVR per segment.

**Recommended test variants:**

| Variant | Target Segment | Headline | Subheadline emphasis |
| :--- | :--- | :--- | :--- |
| **A (control)** | All | "Your guys already text their orders. Now QuickBooks gets them too." | Zero behavior change; 5-minute setup |
| **B (Small segment)** | 5–9 emp owners | "Your field guy texts. QuickBooks updates. You stop chasing receipts." | Owner relief; no more evenings on QBO |
| **C (Solo segment)** | 1–4 emp owners | "Text your receipts. Your jobs get the right costs. Tax time stops being a nightmare." | Receipt capture + job costing for taxes |
| **D (Growth segment)** | 20–49 emp controllers | "Three-way match, automated. Every invoice verified before you pay it." | 3-way match; audit trail; $90K+ savings |

**Testing approach:**
1. Run control (Variant A) for first 2 weeks — establish CVR baseline.
2. Test Variant B (Small) vs. Variant A when targeting Reddit/Facebook audiences that skew 5–15 employee shops.
3. Test Variant C (Solo) on QBO App Store listing description only (the Solo segment is organic-only; don't run paid ads for Solo).
4. Test Variant D (Growth) only when running ProAdvisor outreach or direct email campaigns to larger shops.

**Segment qualification via micro-survey:** The post-signup survey question "How many people work at your company?" (with options 1–4, 5–15, 16–50, 51+) provides segment data. If the survey shows >60% of signups are Solo (1–4), either: (a) the Solo pain is real and under-addressed, or (b) the headline is pulling too many micro-shops. Adjust targeting if needed.
