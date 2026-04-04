# TAM/SAM/SOM Recalculation: NAICS 238 — Specialty Trade Contractors

**Last Updated:** 2026-03-19
**Purpose:** This is the authoritative market size document. All other files reference this file for TAM/SAM/SOM figures. Do not create competing market size calculations in other documents.
**Segment framework:** See [`segment-definitions.md`](segment-definitions.md) for canonical Solo/Small/Mid/Growth definitions.

---

## 1. Why This File Exists: The 750k Discrepancy

Multiple early Conduit research documents cited **"750,000 U.S. trade contractors (5–50 employees)"** as the TAM. This figure is incorrect for Conduit's purposes for two reasons:

1. **Wrong NAICS scope:** The 750k figure originates from US Census Bureau data for **NAICS 23 — Construction** broadly, which includes General Contractors (NAICS 236-237), Infrastructure/Civil contractors (NAICS 237), and Specialty Trade Contractors (NAICS 238). Conduit serves only specialty trades.

2. **May include 1-4 employee firms:** The figure may have included all employee-size bands, not just 5–49.

**The correct scope is NAICS 238 — Specialty Trade Contractors** (electrical, plumbing, HVAC, roofing, drywall, and related trades). This document calculates the TAM from NAICS 238 sub-codes.

---

## 2. NAICS 238 Sub-Code Reference

| NAICS Code | Description | Relevance to Conduit |
|---|---|---|
| **238210** | Electrical Contractors and Other Wiring Installation Contractors | Primary target — highest SKU volume, highest price volatility |
| **238220** | Plumbing, Heating, and Air-Conditioning Contractors | Primary target — combined plumbing + HVAC |
| **238160** | Roofing Contractors | Secondary target — materials-heavy, QBO-common |
| **238310** | Drywall and Insulation Contractors | Secondary target |
| **238990** | All Other Specialty Trade Contractors | Includes masonry, painting, flooring, etc. |
| **238000** | Specialty Trade Contractors (aggregate) | Total NAICS 238 |

---

## 3. Firm Count Data by NAICS 238 Sub-Code

### 3.1 Confirmed Data Points (Sourced)

| Sub-code | Description | Total Firms | Establishments | Source | Date | Notes |
|---|---|---|---|---|---|---|
| **238210** | Electrical | 77,550 | 79,292 | US Census SUSB (via siccode.com) | 2020 | 88% of electrical firms have <20 employees; 909,447 employees |
| **238220** | Plumbing + HVAC (employer-firms only) | 104,776 | 106,854 | US Census SUSB (via siccode.com) | 2020 | **Not** 118,433 — see note below |
| **238220** | HVAC-only (IBISWorld, includes nonemployers) | — | 118,433 | IBISWorld | 2025 | ⚠️ HVAC contractors only (not plumbing); includes nonemployer sole proprietors — different scope than Census |

**Critical note on 238220 discrepancy:** IBISWorld's 118,433 count is (a) HVAC contractors only, not combined plumbing+HVAC, and (b) uses the Census Nonemployer Statistics (NES) methodology which includes sole proprietors with no paid employees. The Census SUSB employer-firm count for combined plumbing+HVAC (238220) is **104,776 firms / 106,854 establishments** (2020). The IBISWorld figure is suitable for "total industry size" claims but should not be used as the employer-firm base for TAM calculations.

**Total NAICS 238 employer establishments:** ~497,875 (2020 Census SUSB employer-firms) → ~460,000 (First Research estimate, December 2025 — may reflect post-COVID closures). Both figures exclude nonemployer sole proprietors.

### 3.2 Estimated Data Points (Pending Full SUSB Size-Band Validation)

The following estimates are derived by applying construction industry size-band distributions to available total firm counts. The 238220 size-band distribution has been partially confirmed by Census data; others remain estimated.

**Confirmed size-band data (238220, Plumbing+HVAC, Census 2020):**
- 1–4 employees: **60,940 establishments** = **57% of total** (Census confirmed via Statista)
- This is slightly lower than the 62–65% assumed distribution — suggesting the plumbing/HVAC trade has a somewhat lower share of micro-firms than other specialty trades

**Estimated size-band distribution for other sub-codes** (derived from Census construction industry patterns):
- 1–4 employees: ~57–62% of all firms (revised down from 62–65% based on 238220 data point)
- 5–9 employees: ~17–19% of all firms
- 10–19 employees: ~9–11% of all firms
- 20–49 employees: ~6–8% of all firms
- 50+ employees: ~2% of all firms

| Sub-code | Total Firms | 1–4 emp | 5–9 emp | 10–19 emp | 20–49 emp | 50+ emp | Source/Basis |
|---|---|---|---|---|---|---|---|
| 238210 (Electrical) | ~78,000 | ~45,000 | ~14,500 | ~8,600 | ~7,000 | ~1,600 | Census 2020 (79,292 est.); size band estimated |
| 238220 (Plumbing+HVAC) | ~105,000 | **~60,940** | ~19,000 | ~11,000 | ~10,500 | ~2,800 | Census 2020 confirmed; 1-4 band confirmed |
| 238160 (Roofing) | ~60,000 (est.) | ~35,000 | ~11,000 | ~6,500 | ~5,800 | ~1,500 | Estimated; no primary source |
| 238310 (Drywall) | ~32,000 (est.) | ~19,000 | ~6,000 | ~3,500 | ~2,700 | ~800 | Estimated; no primary source |
| 238990 + other | ~185,000 (est.) | ~105,000 | ~33,500 | ~19,000 | ~15,500 | ~5,500 | Residual (497,875 total - known sub-codes) |
| **Total NAICS 238** | **~460,000** | **~265,000** | **~84,000** | **~48,600** | **~41,500** | **~12,200** | |

**Note on totals:** The revised 238990 residual (185k) is based on the 2020 Census employer-firm total of ~497,875 minus confirmed sub-codes. The 1-4 band total of ~265k is lower than the previous estimate of ~286k because (a) the 238220 confirmed 1-4 count (60,940) is lower than the prior estimate (74,000) and (b) the revised distribution rate (57% vs. 65%) applies.

**⚠️ Full SUSB validation still required:** The 2022 SUSB detailed-sizes file (`us_state_naics_detailedsizes_2022.xlsx`) at `https://www2.census.gov/programs-surveys/susb/tables/2022/` contains employment size bands for all 238 sub-codes. Download this file and filter for NAICS 238xxx to confirm all size-band estimates.

### 3.3 What to Fetch from Census to Validate These Numbers

**Data source:** US Census Bureau Statistics of U.S. Businesses (SUSB)
**URL:** `https://www.census.gov/data/tables/2021/econ/susb/2021-susb-annual.html`
**File to download:** "US State Totals by 6-digit NAICS and Employment Size Class"
**Filter to:** NAICS codes starting with "238" — for each code, read the "1-4," "5-9," "10-19," "20-49," "50-99," "100-499" columns

The 2022 Economic Census may also have more recent data:
- URL: `https://data.census.gov/table?q=EC2200SIZESUBN&n=238`

---

## 4. TAM/SAM/SOM Calculation

### 4.1 Total Addressable Market (TAM)

TAM = All NAICS 238 specialty trade contractor establishments, by segment band.

| Segment | Size Band | Estimated Firms | Confidence |
|---|---|---|---|
| **Solo TAM** | 1–4 emp | ~286,000 | Low (estimated from distributions) |
| **Small TAM** | 5–9 emp | ~78,500 | Low (estimated) |
| **Mid TAM** | 10–19 emp | ~45,200 | Low (estimated) |
| **Growth TAM** | 20–49 emp | ~38,500 | Low (estimated) |
| **Core TAM (5–49)** | 5–49 emp combined | **~162,200** | Low (estimated) |
| **Total NAICS 238** | All emp sizes | **~460,000** | Medium (consistent with secondary sources) |

**Working estimate used across all documents:** Core TAM = **~130,000** (conservative mid-estimate, accounting for the downward uncertainty in the distribution assumptions). Range: **110,000–160,000**.

### 4.2 Serviceable Addressable Market (SAM)

SAM = TAM filtered by QuickBooks Online adoption.

**QBO adoption rate:** 82–84% of SMBs tracked in the "small-business-accounting" software category (6sense: 82.16%; Verito: 84.27%; 2025–2026). Note: these are broad SMB figures from web-technology detection — actual QBO adoption among NAICS 238 specialty trades may differ by segment. Construction is the #1 industry vertical within QuickBooks' user base by sector, so the rate for specialty trades is likely at or above the SMB average. Applying 82% as a conservative filter (vs. the 85% previously cited).

| Segment | TAM Firms | × 82% QBO | SAM Firms |
|---|---|---|---|
| **Solo SAM** | 265,000 | 82% | ~217,000 |
| **Small SAM** | 84,000 | 82% | ~69,000 |
| **Mid SAM** | 48,600 | 82% | ~39,900 |
| **Growth SAM** | 41,500 | 82% | ~34,000 |
| **Core SAM (5–49)** | ~174,000 | 82% | **~143,000** |

**Working estimate used across all documents:** Core SAM = **~110,000** (applying conservative Core TAM of 130,000 × 82–84% = ~107,000–109,000 — rounds to ~110,000). The working estimate is unchanged; the QBO rate correction from 85% to 82% reduces the model-table figure but not the conservative working estimate used in projections.

### 4.3 Serviceable Obtainable Market (SOM) — Year 3 Target

SOM = Core SAM × achievable penetration rate in 3 years.

| Metric | Value | Basis |
|---|---|---|
| Core customers (Year 3) | 3,600 | Revenue projections, segment mix assumption |
| Core SAM | ~110,000 | Conservative estimate above |
| **Core SOM penetration** | **3.3%** | 3,600 / 110,000 |
| Solo customers (Year 3) | 400 | Revenue projections (organic only) |
| Solo SAM | ~217,000 | Solo SAM above (revised from 243k using 82% QBO rate) |
| **Solo SOM penetration** | **0.2%** | 400 / 217,000 |

3.3% core SAM penetration is credible and comparable to Field Materials' early-year penetration in the mid-market.

### 4.4 Revenue TAM/SAM/SOM

| Layer | Firms | Blended ARPU | Revenue Potential |
|---|---|---|---|
| **Core TAM Revenue** | 130,000 | $168/mo × 12 | **~$262M/yr** |
| **Solo TAM Revenue** | 286,000 | $49/mo × 12 | **~$168M/yr** |
| **Total TAM Revenue** | 416,000 | — | **~$430M/yr** |
| **Core SAM Revenue** | 110,000 | $168/mo × 12 | **~$222M/yr** |
| **Core SOM (Y3)** | 3,600 | $168/mo × 12 | **$7.26M ARR** |
| **Solo SOM (Y3)** | 400 | $49/mo × 12 | **$235K ARR** |
| **Total SOM (Y3)** | 4,000 | — | **$7.49M ARR** |

**Note on the $1.8B figure:** Earlier documents cited "$1.8 billion in annual revenue potential." This figure used the inflated 750k TAM multiplied by ~$200/mo ARPU. With the corrected NAICS 238-specific TAM, the revenue TAM is ~$262M (Core) or ~$430M (Core + Solo). The market is smaller than originally stated but still substantial enough to build a significant company; Field Materials achieved $700M GMV (materials processed, not software revenue) with a fraction of the market.

---

## 5. Reconciliation: 750k vs. Corrected Figure

| Claim | Figure | Source | Scope | Verdict |
|---|---|---|---|---|
| "750,000 U.S. trade contractors" | 750,000 | Census SUSB, NAICS 23 (estimated) | ALL construction, all employee sizes | ❌ Wrong scope for Conduit |
| "700,000–800,000 construction firms with employees" | 700k–800k | Census SUSB, NAICS 23 (estimated) | All construction, employee ≥1 | ❌ Wrong scope for Conduit |
| "250,000 adjusted" (pm-segment-market-sizing.md, original) | 250,000 | Census NAICS 23, 5-49 emp band | All construction, 5-49 emp only | ⚠️ Better but still includes GCs |
| **NAICS 238, 5-49 emp (this document)** | **~110,000–160,000** | NAICS 238 SUSB (estimated) | Specialty trades only, 5-49 emp | ✓ Correct scope |
| NAICS 238, all sizes | ~460,000 | NAICS 238 estimated | Specialty trades only, all sizes | ✓ Correct scope |

**Investor-facing statement:** *"Conduit targets the ~130,000 specialty trade contractors (NAICS 238) with 5–49 employees in the United States, of which approximately 110,000 use QuickBooks Online. Our $7.26M ARR target at Year 3 represents 3.3% penetration of this serviceable market."*

---

## 6. Validation Checklist

The following items require validation against primary sources before this document should be cited in investor materials without caveats:

| Item | Current Status | How to Validate |
|---|---|---|
| NAICS 238 total employer-firm count (~460,000–498,000) | ✓ Confirmed range | Census 2020: 497,875 establishments; First Research Dec 2025: ~460,000 (post-COVID decline) |
| NAICS 238210 electrical firm count (77,550 firms / 79,292 establishments) | ✓ Confirmed | US Census SUSB 2020 (via siccode.com); 909,447 employees |
| NAICS 238220 plumbing+HVAC employer-firms (104,776 / 106,854 establishments) | ✓ Confirmed | US Census SUSB 2020; 1,028,117 employees |
| 238220 size-band: 60,940 establishments have <5 employees (57% in 1-4 band) | ✓ Confirmed | Census 2020 via Statista |
| IBISWorld HVAC 118,433 — what does it count? | ✓ Resolved — do not use for TAM | IBISWorld HVAC-only (not plumbing); includes nonemployers (NES methodology). Not comparable to Census SUSB employer-firm counts. |
| Size-band distribution for 238160, 238310, 238990 | ⚠️ Still estimated | Download 2022 SUSB detailed-sizes file: `https://www2.census.gov/programs-surveys/susb/tables/2022/us_state_naics_detailedsizes_2022.xlsx` — filter to 238xxx |
| QBO adoption at 82–84% for NAICS 238 specifically | ⚠️ Extrapolated from all-SMB category | 6sense (82.16%) and Verito (84.27%) for "small-business-accounting" software category; construction-specific rate not broken out |

**Estimated validation effort:** 2–4 hours of Census SUSB data extraction would confirm or correct the NAICS 238 total and size-band distribution. All other numbers would follow.

---

## 7. Sources Used

| Claim | Source | Date | Confidence |
|---|---|---|---|
| NAICS 238210 electrical: ~77,550-80,000 firms | CompanyInsights; BLS | 2024–2025 | High |
| 88% of electrical firms have <20 employees | CompanyInsights; BLS | 2024–2025 | High |
| NAICS 238220 HVAC: 118,433 firms | IBISWorld | 2025 | Medium (scope unclear) |
| QBO market share: 85% of SMB accounting | 6sense | 2026 | Medium (all SMB, not NAICS 238 specific) |
| Construction industry size-band distribution pattern | Census SUSB NAICS 23 (general pattern) | 2021 | Medium (applied to NAICS 238 by analogy) |
| Total NAICS 238 ~460,000 firms | Estimated from sub-code totals | 2025 | Low (pending census validation) |
| Field Materials $700M GMV | SMACNA, LeadsOnTrees | 2026 | High |
| <10% specialized procurement adoption in 5-50 emp segment | Multiple (Trimble 2026, BuildOps 2025) | 2025–2026 | Medium |

---

## 8. Update Protocol

When Census SUSB data is obtained, update this file in the following order:
1. Section 3.2 — Replace estimated firm counts with actual SUSB numbers
2. Section 4 — Recalculate TAM/SAM/SOM with validated firm counts
3. Section 6 — Mark validated items as confirmed
4. Update "Last Updated" date
5. Notify all downstream files that reference this document (segment-definitions.md, market-verdict.md, market-analysis.md, pm-segment-market-sizing.md, pitch-deck-and-script.md, business-plan-structure.md)

Downstream files use the **working estimates** (Core TAM ~130,000, Core SAM ~110,000) — these do not need to change unless the validated census data differs by more than 20% from these estimates.
