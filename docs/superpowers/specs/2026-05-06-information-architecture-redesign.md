# QuantorX Website — Information Architecture Redesign
**Date:** 2026-05-06  
**Branch:** UI_Enhancements  
**Status:** Approved for Implementation

---

## 1. Global Contrast Policy

**Problem:** 285 instances of `text-[#a9a9a9]` across 42 files. Against `bg-black`, this is ~3.5:1 — fails WCAG AA for body text (requires 4.5:1). Additionally: `text-gray-400` in Header, `text-gray-500` in form selects.

**Policy (applies site-wide, no exceptions):**

| Role | Old class | New class | Contrast vs black |
|------|-----------|-----------|-------------------|
| Body / paragraph text | `text-[#a9a9a9]` | `text-white/75` | ~4.6:1 ✓ |
| Secondary / metadata | `text-[#a9a9a9]/80`, `text-[#a9a9a9]/60` | `text-white/65` | ~4.1:1 ✓ |
| Category eyebrows / labels | `text-[#9b5cf6]` | unchanged | ✓ |
| Form placeholder text | `text-gray-400`, `text-gray-500` | `text-white/50` | ~3.0:1 (placeholders allowed) |

**Implementation:** Global `replace_all` across all 42 affected files. Execute as a single pass.

---

## 2. Page Inventory — Keep / Consolidate / Delete / New

| Route | Verdict | Action |
|-------|---------|--------|
| `/` | KEEP | Surgical cleanup: remove BusinessReality + Testimonials sections |
| `/solutions` | REWRITE | New 2-category hub: AI Agents + Enterprise Solutions |
| `/solutions/nexus-ai` | KEEP | Update nav label, cleanup copy |
| `/solutions/axon-ai` | KEEP | Update nav label, cleanup copy |
| `/solutions/paygate` | KEEP | Currently redirects — build a real PayGate page |
| `/solutions/geek` | NEW | Wealth management / robo-advisory agent — scaffold from scratch |
| `/solutions/enterprise-solutions` | NEW | Aggregate: quantitative engines + trading platforms + consultancy |
| `/solutions/use-case` | DELETE | Redundant with case-studies; remove route + file |
| `/technology` | KEEP | Already tight — minor copy cleanup |
| `/technology/why-quantorx` | KEEP | High-value differentiation page |
| `/technology/ai-platform` | KEEP | Add Dashboard.png from deleted TestimonialsSection |
| `/technology/llm-studio` | KEEP | Add Dashboard.png visual here |
| `/technology/ai-cloud` | KEEP | Keep as-is |
| `/technology/certifications` | KEEP | Keep as-is |
| `/insights` | KEEP | Already rebuilt this session |
| `/insights/*` (4 articles) | KEEP | Already built this session |
| `/about` | KEEP | Minor cleanup |
| `/about/team` | CONSOLIDATE | Move 6 profiles into `/about` as a section; delete standalone page |
| `/about/careers` | KEEP | Essential for talent |
| `/about/press-media` | CONSOLIDATE | Reduce to 3 featured items in `/about`; delete standalone page |
| `/about/social-impact` | KEEP | Relevant brand differentiator for MENA |
| `/about/brand-kit` | KEEP | Partners/press need it |
| `/about/ai-for-mena` | KEEP | Regional positioning content |
| `/contact` | KEEP | Essential |
| `/demo` | CONSOLIDATE | Merge into `/contact` as second CTA variant, remove standalone |
| `/demo-center` | KEEP | Interactive product explorer |
| `/case-studies` | KEEP | Just rebuilt this session |
| `/resources` | KEEP | Content hub |
| `/wiki` | CONSOLIDATE | Move articles into `/university`; delete `/wiki` route |
| `/university` | KEEP | Absorb wiki content |
| `/partner-network` | KEEP | B2B channel page |
| `/events` | KEEP | MENA brand presence |
| `/security/bulletins` | KEEP | Trust signal for enterprise |
| `/legal` | KEEP | Required |
| `/docs` | KEEP (fix links) | All 9 sections link to `/demo` — temporary, acceptable |

**Net change:** -5 routes (use-case, team standalone, press-media standalone, demo standalone, wiki) +2 new routes (geek, enterprise-solutions)

---

## 3. New Navigation Tree

### Header Dropdowns (post-restructure)

**Solutions**
```
├── Enterprise AI Agents
│   ├── Nexus AI — Banking & Financial Intelligence  → /solutions/nexus-ai
│   ├── Axon AI — Spatial & GIS Intelligence        → /solutions/axon-ai  
│   ├── PayGate™ — Merchant Onboarding              → /solutions/paygate
│   └── Geek™ — Wealth Management Agent             → /solutions/geek
└── Enterprise Solutions
    ├── Quantitative Engines & Trading               → /solutions/enterprise-solutions#quant
    ├── System Integration & Consultancy             → /solutions/enterprise-solutions#integration
    └── Case Studies                                 → /case-studies
```

**Platform (renamed from Technology)**
```
├── Cortex™ AI Platform                             → /technology
├── Why QuantorX                                    → /technology/why-quantorx
├── AI Platform                                     → /technology/ai-platform
├── LLM Studio                                      → /technology/llm-studio
├── AI Cloud                                        → /technology/ai-cloud
└── Certifications                                  → /technology/certifications
```

**Insights** (flat, no dropdown)  
**About**
```
├── Company                                         → /about
├── Careers                                         → /about/careers
├── Social Impact                                   → /about/social-impact
├── AI for MENA                                     → /about/ai-for-mena
├── Partner Network                                 → /partner-network
└── Brand Kit                                       → /about/brand-kit
```

### Footer Columns (post-restructure)

| Agents | Platform | Company | Resources |
|--------|----------|---------|-----------|
| Nexus AI | Cortex™ Overview | About | Insights |
| Axon AI | AI Platform | Careers | Case Studies |
| PayGate™ | LLM Studio | Social Impact | University |
| Geek™ | AI Cloud | AI for MENA | Events |
| Enterprise Solutions | Certifications | Partner Network | Security |
| | Why QuantorX | Legal | |

---

## 4. Home Page Surgical Cleanup

**Current sections (from `Home.tsx` import order):**
1. HeroSection ✓ KEEP
2. LogoStripSection ✓ KEEP  
3. ProductShowcaseSection ✓ KEEP (shows 3 agents — update to 4 after Geek added)
4. CortexSection ✓ KEEP but SIMPLIFY — remove verbose copy, keep cube animation
5. FeaturesSection — EVALUATE: may be redundant with CortexSection
6. ProductDetailsSection — EVALUATE: may duplicate Solutions hub
7. MetricsSection ✓ KEEP — numbers provide social proof
8. TestimonialsSection ✗ DELETE — "Built for Business Reality" is poor copy; Dashboard.png rescued to LLMStudio
9. BusinessRealitySection ✗ DELETE — re-export alias of TestimonialsSection
10. CTABannerSection ✓ KEEP

**Target: 7 sections max on homepage** (currently 10)

---

## 5. Cortex / Platform Consolidation

**Decision:** Keep the CortexSection on the homepage — it establishes the platform brand. The 3D cube animation stays there. Move the bulk of detailed architecture content to `/technology`.

**CortexSection on Home (simplified):**
- Keep: tagline "One Brain. Every Agent. Zero Exposure."
- Keep: 3D cube (`platformCube.png` with `animate-float` + `animate-slow-rotate-y`)
- Keep: 3 core pillars (Cognitive Flux Mapping, Adaptive Inference, Deterministic Governance)
- Remove: all verbose paragraph text — replace with 1-line descriptions
- Add: CTA → `/technology`

**Technology hub page:** Already has full Cortex architecture. No changes needed there.

---

## 6. Sections to Delete

| File | Action |
|------|--------|
| `src/screens/Home/sections/TestimonialsSection.tsx` | Delete — after moving `/Dashboard.png` reference to LLMStudio |
| `src/screens/Home/sections/BusinessRealitySection.tsx` | Delete — re-export alias |
| `src/screens/Home/sections/index.ts` | Remove TestimonialsSection + BusinessRealitySection exports |
| `src/screens/Home/Home.tsx` | Remove TestimonialsSection + BusinessRealitySection from render |
| `src/screens/Solutions/UseCase/` (directory) | Delete — remove route from index.tsx |
| `/demo` route (Demo.tsx) | Consolidate into `/contact` — Demo page becomes redirect to `/contact?intent=demo` |

---

## 7. New Pages to Build

### 7a. `/solutions/geek` — Geek™ Wealth Management Agent
**Positioning:** AI-powered wealth management and robo-advisory agent for banks, wealth managers, and family offices in the GCC.

**Sections:**
1. Hero — "Geek™: The Wealth Management Brain" — positioning + CTA
2. Problem — wealth advisory is expensive, inconsistent, unavailable at scale
3. What Geek Does — Portfolio construction, robo-advisory, risk profiling, Shari'ah screening
4. Key Capabilities (card grid): Portfolio Optimization, Client Risk Profiling, Shari'ah Compliance Engine, Market Signals Integration, Rebalancing Automation, Explainable Recommendations
5. Deployment modes (Private Bank / Digital Bank / Family Office)
6. Metrics bar (3 KPIs)
7. CTA

### 7b. `/solutions/enterprise-solutions` — Enterprise Solutions Hub
**Positioning:** The software and quantitative engineering arm — system integration, trading platforms, custom analytics.

**Sections:**
1. Hero — "The Quantitative Engine Room"
2. Quantitative Engines — mathematical models, pricing engines, factor models (pulled from existing EnterpriseAI content)
3. Trading & Capital Markets Platforms — algo trading, FX exposure, treasury
4. System Integration & Consultancy — connectors (Temenos, SAP, Salesforce), API-first design, implementation consulting
5. CTA

---

## 8. Dashboard Image Migration

**Source:** `/Dashboard.png` used in `TestimonialsSection.tsx` (line 85, 148), rendered at 420×420px.

**Destination:** `LLMStudio.tsx` — add as a visual in the "Fine-Tuned Models in Action" or equivalent section.

**Step order:**
1. Open `LLMStudio.tsx`, identify a section to add the image
2. Add `<img src="/Dashboard.png" ... />` with appropriate styling
3. Delete `TestimonialsSection.tsx` and `BusinessRealitySection.tsx`
4. Update `index.ts` and `Home.tsx`

---

## 9. Implementation Sequence

Execute in this order to avoid broken builds at any step:

1. **Global contrast pass** — `replace_all` `text-[#a9a9a9]` → `text-white/75` across all 42 files
2. **Dashboard.png migration** — add to LLMStudio, then delete Testimonials + BusinessReality
3. **Home cleanup** — update `Home.tsx` sections list, simplify CortexSection copy
4. **Solutions restructure** — rewrite `Solutions.tsx` hub, update Header + Footer nav
5. **Build Geek agent page** — `/solutions/geek`
6. **Build Enterprise Solutions page** — `/solutions/enterprise-solutions`
7. **PayGate page** — real page instead of redirect
8. **Route cleanup** — delete use-case, update redirects for merged pages
9. **About cleanup** — merge Team + PressMedia back into About page
10. **Visual pass** — Playwright screenshots of all key routes to verify contrast + layout

---

## 10. Design Standards

- **No endless scroll:** Max 6–7 sections per page. If content doesn't fit, move to sub-pages or tabs.
- **Smart art over paragraphs:** Replace text blocks with comparison tables, card grids, step flows, metric bars.
- **Dynamic elements:** At least one animated/gradient visual per page (cube, glow orbs, animated bars).
- **Section depth:** Each section must pass the "so what?" test — if removing it doesn't hurt, remove it.
- **Purple accent `#9b5cf6`:** All eyebrows, category labels, CTA arrows — never body text.
- **White hierarchy:** Headings `text-white`, body `text-white/75`, secondary `text-white/65`.
