# App Validation & Research Roadmap: "The Invisible Procurement Stack"

**Segment framework:** See [`../02_Market_Analysis/market/segment-definitions.md`](../02_Market_Analysis/market/segment-definitions.md) — canonical Solo (1–4), Small (5–9), Mid (10–19), Growth (20–49) definitions.

This document outlines the research and validation steps required to de-risk the "Text-to-Order" SaaS product before writing production code.

--

## 1. User Research Strategy: "The Mom Test"

**Goal:** Validate that the "Van-to-Office" chaos is painful enough to pay for, without asking "Would you buy this?" (which leads to false positives).

### 1.1 Who to Interview (The Persona Triangle)
You need to talk to three distinct roles. Their motivations conflict, and your product must satisfy all of them.

| Role | Pain Point | Motivation | Research Goal |
| :--- | :--- | :--- | :--- |
| **The Owner** | Profit Leakage | "Stop losing money on materials." | Determine price sensitivity. |
| **The Office Mgr** | Chaos & time waste | "Stop chasing people for receipts." | Understand current workflow & QBO friction. |
| **The Field Tech** | Hassle / Friction | "Stop making me do paperwork." | Validate "Texting" behavior preference. |

**Segment targeting for interviews:** Not all owners have the same problem. Small (5–9) and Mid (10–19) segments are the highest priority to validate — they are the beachhead. Solo owners (1–4) are relevant but have a different version of the problem (receipt capture, not PO workflow). Growth segment (20–49) interviews are valuable for validating the Pro tier but harder to recruit (need to reach controller/office manager, not just owner).

**Minimum interview targets:**
- 3 Small owners (5–9 emp) — validate Starter tier ($99/mo) value prop
- 3 Mid owners or bookkeepers (10–19 emp) — validate ProAdvisor channel + Pro upgrade trigger
- 2 Growth controllers (20–49 emp) — validate 3-way match automation need at Pro tier ($299/mo)
- 2 Solo owners (1–4 emp) — validate Solo tier ($49/mo) receipt capture need

**Hypothesis priority table (which assumptions to test first):**

| Hypothesis | Segment | Priority | How to test |
| :--- | :--- | :--- | :--- |
| Field workers text orders and won't change that behavior | All | Critical | Interview: "Walk me through your last material order." |
| Small owners feel pain keenly enough to pay $99/mo | Small | Critical | Van Westendorp pricing questions in interview |
| Bookkeeper is the Mid segment champion (not owner) | Mid | High | Recruit bookkeeper/office manager; test if they discover software independently |
| Solo tier at $49/mo converts via QBO App Store (organic, no paid CAC) | Solo | Medium | QBO App Store listing + organic traffic test |
| ProAdvisor referral drives Growth segment acquisition | Growth | Medium | Recruit via CPA/bookkeeper community; ask if they discovered it via advisor |
| Field worker behavior doesn't change (just texts a different number) | All | High | Usability test: give a field worker the phone number; watch what they text |

### 1.2 Recruiting Strategy: Where to find them
Cold LinkedIn messages rarely work for trade contractors. Go where they hang out.

1.  **Digital "Watering Holes":**
    *   **Reddit:** r/electricians, r/plumbing, r/Construction. (Search for complaints about "receipts" or "material orders").
    *   **Facebook Groups:** "Electrician Pros", "HVAC Technician Support Group".
    *   **QuickBooks Community Forums:** Look for users complaining about the "Projects" tag or "Billable Expenses".

2.  **The "Supply House" Stakeout (Guerrilla Tactic):**
    *   Go to a local Graybar, Platt, or Ferguson at 7:00 AM.
    *   Look for the guys in vans drinking coffee.
    *   *Approach:* "Hey, I'm building a tool to help trade guys stop losing receipts. Can I buy you a coffee for 5 mins of your time?"

### 1.3 The Interview Script (The Mom Test)
Do not pitch your idea. Ask about their life.

**Bad Question:** "Would you pay $50/month for an app that lets you text orders?" (They will say yes to be nice).
**Good Question:** "Tell me about the last time a material order went wrong."

**The "Script":**
1.  "How do you currently handle material orders from the field?"
2.  "Walk me through what happens when a packing slip gets lost. What do you do?"
3.  "Have you tried any apps for this before? (e.g., Kojo, generic apps). Why did you stop using them?"
4.  "How much time does your office manager spend matching invoices to receipts each week?"
5.  "Who pays the vendor invoices? How do they know the price is right?"

---

## 2. Technical & Compliance Research (The "Hidden Killers")

Before building, you must research the platform constraints.

### 2.1 Twilio A2P 10DLC (CRITICAL)
SaaS apps sending SMS are now strictly regulated by carriers (AT&T, Verizon, T-Mobile).
*   **Research Task:** Verify if "Application-to-Person" (A2P) rules allow for 2-way conversational procurement.
*   **Risk:** Carriers often block business texting if it looks like spam. You need to research "Conversational Messaging" registration requirements.
*   **Action:** Read Twilio's "A2P 10DLC Starter Brand" vs "Standard Brand" requirements.

### 2.2 Intuit (QuickBooks) Developer Compliance
*   **Research Task:** Read the Intuit App Store requirements for "Accounting Data" scopes.
*   **Risk:** They have strict security assessments for apps that *write* bills to the General Ledger.
*   **Action:** Check requirements for `accounting.transactions.bill` write permissions.

---

## 3. Business & Legal Research

### 3.1 AI Liability
*   **Scenario:** A user texts "Order 10 breakers." AI hallucinates and orders "100 breakers" ($5,000 cost).
*   **Research Question:** Who is liable?
*   **Action:** Research "Terms of Service" of similar AI agents. You likely need a rigorous "Human Confirmation" step or a strict "User Indemnification" clause.

### 3.2 Pricing Psychology (Van Westendorp)
During interviews, ask these four questions to determine your price anchors:
1.  "At what price would this be so cheap that you’d question the quality?"
2.  "At what price would this be a bargain?"
3.  "At what price would this be expensive, but you’d still consider it?"
4.  "At what price would this be too expensive to consider?"

---

## 4. "Smoke Test" (Demand Generation)

Before writing code, try to "sell" it.

1.  **Landing Page:** Build a simple carrd.co or Webflow page describing the "Invisible" app.
    *   *Headline:* "Text your orders. We sync them to QuickBooks. Stop losing receipts."
2.  **The "Fake Door":** Add a "Sign Up with QuickBooks" button.
    *   When clicked, show a modal: "We are onboarding beta users slowly. Join the waitlist."
3.  **Traffic:** Run $100 of Reddit Ads targeting r/smallbusiness or Facebook Ads targeting "Owner, Electrical Contractor".
4.  **Metric:** If you can't get > 5% conversion to Waitlist, your value prop isn't strong enough yet.
