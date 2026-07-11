import { Link } from "react-router-dom";
import { gsap } from "../../../lib/gsap";
import { useGsap } from "../../../components/scroll/useGsap";
import { storyState } from "../../../lib/storyState";

const PIN_LENGTH = "+=310%";

const proofPoints = [
  { label: "Air-gapped", sub: "Never cloud-dependent" },
  { label: "Auditable", sub: "Every action logged" },
  { label: "Sovereign", sub: "Your walls, your rules" },
];

/**
 * CortexSection - the dark engine room. The page's one full-bleed dark
 * chapter: the section pins while the live 3D cube fractures into four
 * quarters around a blazing core, and the copy lands in beats.
 */
export const CortexSection = (): JSX.Element => {
  const scope = useGsap<HTMLElement>(() => {
    const targets =
      "[data-cortex-eyebrow], [data-cortex-line], [data-cortex-para], [data-cortex-pill], [data-cortex-cta]";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targets, { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: scope.current,
        start: "top top",
        end: PIN_LENGTH,
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    // ── The protagonist arrives, sheds its satellites, and fractures ────
    const mmStory = gsap.matchMedia();
    mmStory.add("(min-width: 1024px)", () => {
      // Approach: one continuous move - the parked object grows and glides
      // over the arriving hull into its center-stage pose, shedding its
      // satellites on the way. The section root carries z-0 so the fixed
      // cube canvas stays above the hull the whole way (no hide/show).
      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: scope.current, start: "top bottom", end: "top top", scrub: 0.4 },
      })
        .fromTo(
          storyState,
          { x: 3.6, y: -1.75, scale: 0.5, satellites: 1, camZ: 9.6 },
          { visible: 1, x: 2.45, y: -0.1, scale: 1.05, satellites: 0, rot: 0, camZ: 9.0, immediateRender: false },
          0,
        )
        .to(storyState, { accentR: 0.608, accentG: 0.361, accentB: 0.965 }, 0);

      // Blast doors: the engine room reveals itself as the pin begins
      gsap.timeline({
        scrollTrigger: { trigger: scope.current, start: "top top", end: "+=55%", scrub: 0.45 },
      })
        .to("[data-cortex-seam]", { opacity: 1, duration: 0.22, ease: "none" }, 0)
        .to("[data-cortex-door-top]", { yPercent: -100, duration: 1, ease: "power2.inOut" }, 0.12)
        .to("[data-cortex-door-bottom]", { yPercent: 100, duration: 1, ease: "power2.inOut" }, 0.12)
        .to("[data-cortex-seam]", { opacity: 0, duration: 0.25, ease: "none" }, 0.55);

      // Inside the pin: the fracture, then the handoff dissolve
      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: scope.current, start: "top top", end: PIN_LENGTH, scrub: 0.4 },
      })
        .to(storyState, { split: 1, rot: 0.9, camZ: 8.5, x: 2.05, duration: 5.2 }, 0.6)
        .to({}, { duration: 1.6 }) // hold the fractured composition
        // The schematic readout formulates once the quarters settle…
        .fromTo("[data-cortex-annot]", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1.1 }, 5.2)
        .to("[data-cortex-annot]", { opacity: 0, duration: 1.0 }, 7.2)
        // The morph: quarters churn inward and re-form as the four-capsule
        // signature shape; the halo flash masks the crossfade
        .to(storyState, { capsule: 1, split: 0.3, rot: 1.7, duration: 2.4, ease: "power2.inOut" }, 7.5)
        .to({}, { duration: 1.5 }) // hold the mark
        .to(storyState, { visible: 0, camZ: 9.9, duration: 1.6 }, 11.4);
    });

    tl.fromTo("[data-cortex-eyebrow]", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6 }, 0.1);

    gsap.utils.toArray<HTMLElement>("[data-cortex-line]").forEach((line, i) => {
      tl.fromTo(
        line,
        { opacity: 0, y: 90 },
        { opacity: 1, y: 0, duration: 1 },
        0.7 + i * 1.2,
      );
    });

    tl.fromTo("[data-cortex-para]", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 4.6)
      .fromTo(
        "[data-cortex-pill]",
        { opacity: 0, y: 40, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.35 },
        5.6,
      )
      .fromTo("[data-cortex-cta]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 7)
      .to({}, { duration: 1 });
  });

  return (
    // z-0: pin this chapter into its own stacking context so the fixed cube
    // canvas (z-5) stays above the hull, doors and copy both before and
    // during the pin - the protagonist transforms across the boundary
    // instead of being swallowed and re-shown.
    <section ref={scope} data-chapter="cortex" className="relative z-0 w-full h-screen overflow-hidden bg-[#0B0313]">
      {/* Blast doors - the chapter gate. Closed as the wall arrives, they
          part vertically along a glowing seam once the room pins. */}
      <div className="absolute inset-0 z-30 pointer-events-none hidden lg:block" aria-hidden="true">
        <div data-cortex-door-top className="absolute inset-x-0 top-0 h-1/2 bg-[#08020e]">
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 [font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.4em] text-white/25">
            Cortex™ - Restricted
          </span>
          <span className="absolute bottom-0 inset-x-0 h-px bg-[#9b5cf6]/40" />
        </div>
        <div data-cortex-door-bottom className="absolute inset-x-0 bottom-0 h-1/2 bg-[#08020e]">
          <span className="absolute top-0 inset-x-0 h-px bg-[#9b5cf6]/40" />
        </div>
        <div
          data-cortex-seam
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] opacity-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(196,168,255,0.9) 50%, transparent 100%)",
            boxShadow: "0 0 24px 6px rgba(155,92,246,0.65), 0 0 80px 30px rgba(124,58,237,0.35)",
          }}
        />
      </div>

      <div className="glow-rule absolute top-0 inset-x-[14%] z-10" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[45%] starfield opacity-50 pointer-events-none" aria-hidden="true" />

      {/* Eclipse under-glow beneath the fracturing cube */}
      <div
        className="absolute right-[4%] bottom-[6%] w-[46%] max-w-[760px] aspect-[2.4/1] rounded-[50%] pointer-events-none animate-glow-breathe"
        style={{
          left: "auto",
          background: "radial-gradient(ellipse at 50% 80%, rgba(124,58,237,0.4) 0%, rgba(74,0,130,0.18) 45%, transparent 72%)",
          filter: "blur(34px)",
        }}
        aria-hidden="true"
      />

      {/* Engine-room light shafts falling behind the fracture */}
      <div
        className="absolute right-[18%] top-0 bottom-0 w-24 pointer-events-none opacity-60"
        style={{ background: "linear-gradient(180deg, rgba(124,58,237,0.14) 0%, rgba(124,58,237,0.03) 55%, transparent 100%)", filter: "blur(18px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-[38%] top-0 bottom-0 w-14 pointer-events-none opacity-50"
        style={{ background: "linear-gradient(180deg, rgba(217,70,239,0.1) 0%, rgba(217,70,239,0.02) 50%, transparent 100%)", filter: "blur(14px)" }}
        aria-hidden="true"
      />

      {/* Schematic readout - appears while the fracture holds */}
      <div
        data-cortex-annot
        className="hidden lg:flex items-center gap-3 absolute top-[7%] right-[7%] opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#c4a8ff]/80" />
        <span className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.3em] text-[#c4a8ff]/80">
          Cortex fracture - 4 agents · 1 core · 0 egress
        </span>
      </div>

      {/* Legibility wash over the left column */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0313] via-[#0B0313]/55 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex flex-col justify-center">
        <p data-cortex-eyebrow className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-6 opacity-0">
          Powered by Cortex™
        </p>

        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white tracking-[-0.03em] leading-[1.02] mb-8">
          <span data-cortex-line className="block text-4xl sm:text-6xl lg:text-7xl text-gradient-silver opacity-0 pb-0.5">One brain.</span>
          <span data-cortex-line className="block text-4xl sm:text-6xl lg:text-7xl text-[#a679ff] opacity-0 pb-0.5">Every agent.</span>
          <span data-cortex-line className="block text-4xl sm:text-6xl lg:text-7xl text-gradient-silver opacity-0 pb-0.5">Zero exposure.</span>
        </h2>

        <p data-cortex-para className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mb-8 opacity-0">
          CORTEX™ is the proprietary cognitive engine inside every agent we deploy. It does not phone home.
          It runs inside your walls - mapping, reasoning, and governing every decision at every node.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {proofPoints.map((pt) => (
            <div key={pt.label} data-cortex-pill className="rounded-xl px-5 py-3 opacity-0 bg-white/[0.05] border border-white/10 backdrop-blur-md hover:border-[#9b5cf6]/40 hover:bg-white/[0.08] hover:shadow-[0_0_28px_-8px_rgba(155,92,246,0.45)] transition-all duration-300">
              <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm">{pt.label}</p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/60 text-xs mt-0.5">{pt.sub}</p>
            </div>
          ))}
        </div>

        <div data-cortex-cta className="opacity-0">
          <Link
            to="/technology/ai-platform"
            className="inline-flex items-center justify-center border border-white/30 rounded-full px-7 py-2.5 text-white [font-family:'Satoshi-Medium',Helvetica] text-sm hover:bg-white/10 transition-colors"
          >
            Explore the CORTEX™ Platform →
          </Link>
        </div>
      </div>
    </section>
  );
};
