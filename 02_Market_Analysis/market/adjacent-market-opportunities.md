# Adjacent Market Opportunities: The Three-Way Match Problem Beyond Trade Contractors

**Filed:** 2026-03-18
**Related files:** `market-analysis.md`, `market-verdict.md`, `pm-segment-market-sizing.md`

---

## 1. The Core Question

The Three-Way Match failure (PO vs. packing slip vs. invoice) is not unique to trade contractors. It exists wherever **field-based purchasing, physical delivery, and a back-office bookkeeper** are separated from each other.

This file identifies and scores adjacent verticals that share the same structural pain — and asks: could Conduit serve them with minimal product changes?

---

## 2. The Diagnostic Framework

A vertical is a strong expansion candidate if it scores yes on all five questions:

| Diagnostic | What we're looking for |
|---|---|
| **1. Field-initiated purchasing?** | Does someone outside the office place orders verbally/by text/by phone? |
| **2. Physical delivery with a packing slip?** | Does a delivery arrive at a job site, vehicle, or location with a paper receipt? |
| **3. Back-office reconciliation required?** | Is there a bookkeeper/owner trying to match what was ordered vs. delivered vs. billed? |
| **4. SMB "missing middle" gap?** | Does a 5–50 person segment exist that's too big for manual methods, too small for enterprise software? |
| **5. QBO (or Xero) as the system of record?** | Is standard SMB accounting software the financial back-office, not an industry-specific ERP? |

A "4 out of 5" minimum is required. Any vertical needing a bespoke accounting integration drops off immediately — that's a product rewrite, not an expansion.

---

## 3. Candidate Verticals: Scorecard

| Vertical | Field purchase | Packing slip | Back-office recon | SMB gap | QBO back-office | Score |
|---|---|---|---|---|---|---|
| **Trade contractors (current)** | ✓ | ✓ | ✓ | ✓ | ✓ | **5/5** |
| **Landscaping / tree service** | ✓ | ✓ | ✓ | ✓ | ✓ | **5/5** |
| **Auto repair (multi-location)** | ✓ | ✓ | ✓ | ✓ | ✓ | **5/5** |
| **Property management (maintenance)** | ✓ | Partial | ✓ | ✓ | ✓ | **4.5/5** |
| **Restaurant groups (2–5 locations)** | ✓ | ✓ | ✓ | ✓ | Partial | **4/5** |
| **Pest control / cleaning services** | ✓ | Partial | ✓ | ✓ | ✓ | **3.5/5** |
| **Event / catering companies** | ✓ | Partial | ✓ | ✓ | ✓ | **3.5/5** |
| **Independent veterinary (2–5 clinics)** | Partial | ✓ | ✓ | ✓ | ✓ | **3.5/5** |
| **Small hotel chains (2–5 properties)** | ✓ | ✓ | ✓ | ✓ | Partial | **3.5/5** |

---

## 4. Deep Dives: Top Four Candidates

### 4.1 Landscaping & Tree Service

**Why it scores a perfect 5/5:**

This is nearly identical to trade contracting. A landscaping crew lead texts the owner: "Need 10 yards of mulch and 40 flats of annuals." Owner calls the nursery. Delivery arrives at the job site. Packing slip goes in the truck. Invoice arrives at the office. Bookkeeper enters it blind.

The field culture, the QBO back-office, the 5–50 employee range, and the absence of specialized procurement software — all identical to electrical/plumbing. The only difference is material categories (plants, mulch, hardscape vs. wire, pipe, fixtures).

**Market size:**
- ~600,000 landscaping businesses in the US (NAICS 5617)
- ~5–50 employee segment: estimated 100,000–150,000 firms
- QBO penetration: consistent with broader SMB (~80%+)

**Product changes needed:** Minimal. Job codes map to landscaping projects identically to construction jobs. The SMS workflow needs no changes. The AI parser needs prompt adjustments for nursery/supply house invoices (fewer SKUs, different unit types).

**The risk:** Landscaping is more seasonal than construction. Winter churn in northern states could push monthly churn to 15%+ for 4-5 months. Pricing a "dormant season" pause option could mitigate this.

**Verdict: Expand here immediately.** This is not a separate market — it is the same market. Add "Landscaping" to the QBO App Store listing and the landing page copy. Zero product changes required.

---

### 4.2 Auto Repair (Multi-Location)

**Why it scores a perfect 5/5:**

A technician diagnoses a car and tells the service writer: "It needs a front strut assembly — part number 172698." Service writer calls NAPA or texts a local parts runner. Parts arrive at the shop with a packing slip. The wrong part arrives 30% of the time (wrong year/model). The returned part credit rarely makes it back to the invoice. The back-office at location #1 reconciles parts charges for location #2 with no visibility into what was actually received.

The financial leakage mechanism is the same as construction: paying for parts not received, missing credits for returns, and double-billing across locations.

**Market size:**
- ~280,000 auto repair and maintenance establishments in the US (NAICS 8111)
- Multi-location (2–5 shops) independent operators: estimated 25,000–40,000 owner-groups
- QBO penetration: high (60-70%+). Some use industry-specific software (Shop-Ware, Mitchell, ALLDATA) for work orders, but QBO handles AP/AR.

**Product changes needed:** Moderate. The "job code" equivalent is a repair order (RO) number, not a project. The AI parser needs to recognize auto parts invoices (NAPA, O'Reilly, Advance Auto, local distributors). The SMS workflow maps well: tech texts service writer → service writer texts parts order → Conduit captures it.

**The interesting angle:** Multi-location auto repair shops often have a "floating tech" or "parts runner" who physically drives parts between locations. This creates a packing slip/inventory mismatch problem that's even more acute than in construction (at least construction has one delivery point per job site).

**Competitive landscape:** Auto repair has specialized ERPs (Mitchell 1, Shop-Ware, ALLDATA), but these are work-order/labor management tools, not procurement platforms. No one owns the "parts purchasing reconciliation" problem for the 2–5 location independent operator. This is the same "Blue Ocean" that exists in construction.

**Verdict: High priority expansion, but Phase 2.** The market is real and the pain is real, but it requires prompt engineering work (auto parts invoice format is different from trade contractor invoices) and a different marketing channel (not construction influencers — need auto-specific communities like Motor Age, Independent Garage Owners forums).

---

### 4.3 Property Management (Residential, 5–50 Units Under Management)

**Why it scores 4.5/5:**

A maintenance technician gets a work order: "Unit 4B — toilet won't stop running." They drive to Home Depot, buy a flapper kit for $12.99, fix the toilet, and put the receipt in their pocket. Or pocket it. The property manager gets a Home Depot charge on the company card and has no idea which property it belongs to. Multiply this by 20 maintenance orders a week across 3 properties and the bookkeeper is drowning.

The packing slip scenario is weaker here (Home Depot gives a receipt, not a packing slip), but the "field purchase → lost paper → blind reconciliation" structure is identical.

**Market size:**
- ~280,000 property management firms in the US (NAICS 5312)
- Residential PM firms managing 5–50 units with maintenance staff: estimated 60,000–90,000
- QBO penetration: high (75%+). Property managers are heavy QBO users; some use Buildium, AppFolio for rent rolls but QBO for AP.

**Product changes needed:** Minor but meaningful. The "packing slip" equivalent is a receipt (often from a retail store, not a supplier). The AI parser needs to handle Home Depot, Lowe's, and Ace Hardware receipts differently than a trade distributor invoice. The SMS workflow is perfect: tech texts a photo of the receipt → Conduit parses it → creates a QBO expense tagged to the property. This is receipt capture, not PO matching — a simpler use case.

**The key difference:** Property managers don't create POs before sending a tech to Home Depot. So the "three-way match" collapses to a "two-way match" (receipt vs. invoice on the company card). This is actually simpler to build and simpler to sell: "Your tech buys stuff. Your bookkeeper has no idea what it was for. Text the receipt."

**Competitive landscape:** Buildium and AppFolio (the dominant property management platforms) have expense tracking features but only for professional property managers using their full suite. QuickBooks-native property managers with maintenance staff have no field expense capture tool designed for them.

**Verdict: Interesting adjacency, slightly different product.** The receipt-capture-to-QBO use case is a subset of the Conduit MVP. Could be marketed as "Conduit for Property Managers" with separate landing page. Watch Receipt AI — they are solving exactly this (SMS receipt capture to QBO) without the PO layer.

---

### 4.4 Restaurant Groups (2–5 Independent Locations)

**The user's intuition — is it right?**

Yes, structurally. But the restaurant vertical has significantly more competition.

A chef at Location #2 texts the owner: "We're out of 80/20 ground beef — can you call US Foods?" Owner calls. Delivery arrives. Chef signs the packing slip without checking weights. Invoice arrives at the main office. Owner pays it without comparing to the signed packing slip that's now under a cutting board at Location #2.

This is textbook three-way match failure. The "crumpled packing slip" problem in restaurant is the **signed delivery ticket** — a piece of paper that proves what actually arrived vs. what was ordered.

**Market size:**
- ~700,000 restaurant locations in the US
- Independent owner-operator groups running 2–5 locations: estimated 50,000–75,000 ownership groups
- QBO penetration: weaker than construction. Many restaurants use Toast (POS), and Toast integrates with QBO. Others use Restaurant365, MarketMan, or Xero. Less homogenous than construction.

**The competitive problem:**

This vertical is much more contested:
- **MarketMan** ($149–$400/mo): Restaurant-specific inventory and purchasing. 3-way match is a core feature.
- **BlueCart** ($0–paid): Ordering platform with supplier integration.
- **Restaurant365**: Full ERP (expensive but growing fast in 2–20 location groups).
- **Orderly** (now part of Restaurant365): Food cost management.
- **Choco**: Restaurant-to-supplier ordering via WhatsApp/app.

The restaurant space has had more VC attention specifically because food cost is typically 28–35% of revenue (vs. materials at 30–40% in construction) — the financial pain is similar in magnitude. But the investment means the SMB gap is narrower.

**The interesting angle the user might be thinking about:** The 2-location restaurant that has NOT yet adopted MarketMan or BlueCart because they seem like "overkill" for two restaurants. The owner is still texting suppliers from their personal phone and hoping the delivery matches the invoice. This person exists. But:
- They likely won't be found via QBO App Store (their QBO integration might be weaker)
- They'd need to be found via restaurant-specific communities (Facebook groups for independent restaurateurs, National Restaurant Association events)
- The product would need to know the difference between "80/20 ground beef @ $4.89/lb × 40 lbs" and "$42/bundle of Romex" — different invoice structures requiring different AI parsing

**Verdict: Valid pain, but wrong beachhead.** The restaurant market is structurally similar but competitively more mature and requires different distribution channels and different AI training. File this as "Phase 3 expansion after construction is proven." Don't dilute focus now.

---

## 5. The Surprising High-Potential Segment: Landscaping Is the Easy Win

The user mentioned restaurants specifically, possibly because the "field buys stuff" mental model is obvious there. But the truly overlooked adjacent market is **landscaping and exterior services** (tree service, irrigation, hardscape, outdoor lighting), because:

1. It is functionally identical to trade contracting in every way that matters for Conduit
2. The total addressable market is roughly equal in size (~100–150k firms in the 5–50 range)
3. QBO penetration is just as high
4. No specialized SaaS player has meaningfully penetrated this segment for procurement
5. The field culture is identical: outdoors, physical, text-heavy, paper-averse

**Combined TAM with landscaping added:**

| Vertical | 5–49 Employee Firms | QBO-enabled SAM |
|---|---|---|
| Trade contractors (NAICS 238, 5–49 emp) | ~110,000–160,000 (see [`tam-naics-recalculation.md`](tam-naics-recalculation.md)) | ~93,000–136,000 |
| Landscaping / tree service / irrigation (NAICS 5617) | ~100,000–150,000 (est.) | ~80,000–120,000 |
| **Combined** | **~210,000–310,000** | **~173,000–256,000** |

*Note: Earlier versions of this document used "~250,000 (adjusted)" for trade contractors. This has been corrected to the NAICS 238-specific range. The combined SAM range is wider due to the NAICS 238 uncertainty pending census validation.*

Adding landscaping expands the QBO-enabled SAM by ~47% with no product changes.

---

## 6. Expansion Roadmap

| Phase | Vertical | Rationale | Product delta |
|---|---|---|---|
| **Now** | Trade contractors + Landscaping | Same product, same QBO pipeline, same SMS flow | Zero — just add "landscaping" to marketing copy and App Store listing |
| **Phase 2 (Month 12–18)** | Auto repair (multi-location) | Same 3-way match pain, clear SMB gap, no dominant solution | Moderate: auto parts invoice parsing, repair order as job code |
| **Phase 2 (Month 12–18)** | Property management (maintenance) | Receipt-capture-to-QBO is a natural subset of the core product | Minor: retail receipt parsing (Home Depot format), property as cost center |
| **Phase 3 (Month 24+)** | Restaurant groups (2–5 locations) | Real pain but more competitive, needs separate distribution | Significant: food service invoice formats, different supplier ecosystem |
| **Not now** | Veterinary, Hotels, Events | Real pain but niche, regulated, or low TAM | Significant — don't dilute |

---

## 7. The Strategic Principle: "One More Foreman, Not One More Industry"

The best adjacent markets are ones where **the buyer persona doesn't change** — just the industry label.

A landscaping PM in the office calling a nursery supplier is functionally identical to a plumbing PM calling a plumbing supply house. The words in the text message are different. The invoice format is slightly different. The AI prompt needs tuning. But the human behavior, the QBO integration, the bookkeeper's frustration — all identical.

The further you move from "someone in the field texting a purchase request to an office that reconciles against QBO," the more the product has to change.

**Expansion priority order:** Stay in the "field-first, QBO-back-office, packing-slip-chaos" zone. The moment a vertical requires a fundamentally different accounting integration, a different buyer persona, or a regulated purchasing environment (pharmaceuticals, controlled substances), stop and evaluate whether it's worth a separate product effort.

---

## 8. Summary

| Vertical | Verdict | When |
|---|---|---|
| **Landscaping / tree service** | Expand immediately — same product | Now |
| **Auto repair (multi-location)** | Strong second market | Phase 2 |
| **Property management (maintenance)** | Viable, slightly simpler use case | Phase 2 |
| **Restaurant groups (2–5 locations)** | Real pain but more competitive | Phase 3 only |
| **All others** | Do not pursue yet | — |
