# QuantorX Website Enhancement — Design Spec
**Date:** 2026-05-06  
**Branch:** UI_Enhancements  
**Deploy target:** React app at `src/` → production hosting  
**Approved by:** Karim (user, verbal approval in session)

---

## Decisions locked in

| Decision | Choice |
|----------|--------|
| Primary brand naming | Option C: "QuantorX AI Super Agent™, powered by Cortex™" |
| "Technology" nav rename | Option A: "Platform" |
| Homepage section order | Option A: Agents before Cortex (products first) |
| Implementation strategy | Approach B: 4 parallel independent tracks |

---

## Track 1 — Navigation + Routing (`Header.tsx`, `index.tsx`)

### Header.tsx changes
- Nav label "Technology" → "Platform" (display text only, routes unchanged)
- `getActiveIndex()`: `pathname.startsWith("/technology")` stays, label only changes
- Platform dropdown restructured:
  - Why QuantorX ✓
  - AI Platform ✓
  - LLM Studio ✓
  - AI Cloud ✓
  - Certifications → **removed from Platform dropdown**
- About dropdown gains:
  - "Trust & Compliance" → `/technology/certifications`

### index.tsx changes
- Remove duplicate redirect lines for `/solutions/nexus-ai` and `/solutions/axon-ai` (currently appear twice)
- Remove unused `AboutUs` import if confirmed dead

---

## Track 2 — Homepage Reorder + Cortex Animation (`Home.tsx`, `CortexSection.tsx`, `tailwind.css`)

### Home.tsx new section order
1. FeaturesSection
2. LogoStripSection
3. **ProductDetailsSection** ← moved up from position 4
4. **CortexSection** ← moved down from position 3
5. TestimonialsSection (now named BusinessRealitySection after Track 4)
6. MetricsSection
7. ProductShowcaseSection
8. CTABannerSection

### CortexSection.tsx — 3D animated cube
- Add `platformCube.png` as centered visual above the 3-card grid
- CSS keyframe `float`: `translateY(0px) → translateY(-24px) → translateY(0px)`, 6s ease-in-out infinite
- CSS keyframe `slowRotateY`: perspective rotation, 20s linear infinite
- Purple radial glow behind cube: `radial-gradient(ellipse, rgba(74,0,130,0.4), transparent)`
- No new npm dependencies — pure CSS

### MetricsSection — count-up animation
- Use `useInView` from `react-intersection-observer` (already installed)
- Numbers animate 0 → final value over 2s on scroll entry
- Trigger once per page load

### ProductDetailsSection — card stagger entrance
- Cards use `slideInUp` keyframe with delays: 0ms, 150ms, 300ms
- Driven by CSS `animation-delay` on nth-child

### tailwind.css additions
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-24px); }
}
@keyframes slowRotateY {
  0% { transform: perspective(800px) rotateY(0deg); }
  100% { transform: perspective(800px) rotateY(360deg); }
}
@keyframes slideInUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## Track 3 — Messaging Cleanup (cross-page)

### FeaturesSection.tsx
- Hero H1 stays: "QuantorX AI Super Agent™ for Sovereign MENA"
- Subtitle updated to introduce Cortex™: "Powered by Cortex™ — the MENA region's first multi-agent platform with airgapped, on-premise deployment. Own your data. Own your intelligence."

### CortexSection.tsx
- Eyebrow: "The Engine" → "Powered by Cortex™"
- CTA link text: "Explore the Technology →" → "Explore the Platform →"
- `href="/technology"` path unchanged

### Solutions.tsx hero
- Current: "Autonomous Agents for Enterprise Complexity."
- New: "Three Agents. One Sovereign Platform. Every Decision Governed."

### ProductDetailsSection.tsx
- Eyebrow: "Agents Powered by Cortex" → "QuantorX AI Agents — Powered by Cortex™"

### Header.tsx dropdown descriptions (Platform section)
- "Why QuantorX" description: "Cognitive Flux Mapping™" → "How we clone enterprise expertise"
- "AI Platform" description: "Agentic AI for enterprise" → "The Cortex™ agentic engine"

### Cross-page sweep
- Every display-text reference to "Technology" section → "Platform"
- Internal `href="/technology"` paths: leave unchanged (routes still work)
- Ensure consistent product names: Nexus AI, Axon AI, PayGate™ (never "Enterprise AI" or "Enterprise Software" as product names)

---

## Track 4 — Code Quality + Dead Code

### File renames
- `src/screens/Solutions/EnterpriseAI/` folder → `NexusAI/`
- `src/screens/Solutions/EnterpriseSoftware/` folder → `AxonAI/`
- `src/screens/Home/sections/TestimonialsSection.tsx` → `BusinessRealitySection.tsx`
- Update all imports in `index.tsx` and `Home.tsx` accordingly

### Dead code removal
- `src/screens/AboutUs/` — verify not imported/routed, then delete
- Duplicate redirect routes in `index.tsx` (lines ~121-122) — remove duplicates

### Routing cleanup in index.tsx
- Keep legacy redirects: `/platform/*` → `/technology/*`, `/company/*` → `/about/*`
- Remove: duplicate `/solutions/nexus-ai` and `/solutions/axon-ai` redirect entries that conflict with actual routes

---

## Out of scope (not in this sprint)
- Asset optimization (GIF → WebM conversion) — separate performance sprint
- True 3D with Three.js / react-three-fiber — requires sourcing .glb assets
- New page content (Docs, Wiki article bodies)
- Lottie animation integration

---

## Definition of done
- [ ] "Technology" label gone from all user-facing nav text
- [ ] Agents section visible above the fold on mid-size screens (above Cortex)
- [ ] platformCube.png floating + rotating in CortexSection
- [ ] Metrics numbers count up on scroll
- [ ] "QuantorX AI Super Agent™, powered by Cortex™" relationship clear in hero
- [ ] No duplicate redirects in index.tsx
- [ ] File names match route names (NexusAI, AxonAI, BusinessRealitySection)
- [ ] Site builds with no TypeScript errors
