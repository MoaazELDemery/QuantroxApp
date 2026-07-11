import { gsap, SplitText } from "../../../lib/gsap";
import { useGsap } from "../../../components/scroll/useGsap";
import { storyState } from "../../../lib/storyState";

const MANIFESTO =
  "Generic AI answers questions. QuantorX agents execute workflows: software delivery, banking journeys, urban intelligence, merchant onboarding, money advisory. Governed, auditable, and sovereign inside your walls.";

/**
 * ManifestoSection - editorial statement that "reads itself" as you scroll:
 * every word starts faint and inks in, scrubbed to the scrollbar.
 */
export const ManifestoSection = (): JSX.Element => {
  const scope = useGsap<HTMLElement>((ctx) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled || reduced) return;
      ctx.add(() => {
        const split = new SplitText("[data-manifesto]", { type: "words" });
        gsap.fromTo(
          split.words,
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top 72%",
              end: "bottom 55%",
              scrub: 0.4,
            },
          },
        );
      });
    });

    if (!reduced) {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // The protagonist slides low-right, under the copy, while the manifesto reads.
        // start "top bottom" == scroll 0 exactly (the hero is one viewport tall), so
        // the scrub's progress-0 pose matches the hero rest pose - a clamped band
        // (e.g. "top 120%") would sit at progress ~0.2 on load and yank the cube to
        // catch up on the first scroll tick.
        // Explicit fromTo + immediateRender:false - chained storyState scrubs must not
        // snapshot stale start values at refresh time.
        gsap.timeline({
          scrollTrigger: { trigger: scope.current, start: "top bottom", end: "top 15%", scrub: 0.4 },
        }).fromTo(
          storyState,
          { x: 1.45, y: -0.55, scale: 1.12, camZ: 9.6 },
          { x: 2.6, y: -1.9, scale: 0.55, camZ: 9.15, ease: "none", immediateRender: false },
          0,
        );
      });
      mm.add("(max-width: 1023px)", () => {
        // Small screens: the cube bows out after the hero
        gsap.timeline({
          scrollTrigger: { trigger: scope.current, start: "top 95%", end: "top 55%", scrub: 0.4 },
        }).to(storyState, { visible: 0, ease: "none" }, 0);
      });

      gsap.from("[data-manifesto-strip] > div", {
        opacity: 0,
        y: 32,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-manifesto-strip]", start: "top 95%", end: "top 60%", scrub: 0.4 },
      });

      // The blueprint room draws itself in as the chapter opens
      gsap.fromTo(
        "[data-blueprint]",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: scope.current, start: "top 80%", end: "top 45%", scrub: 0.4 },
        },
      );
      gsap.fromTo(
        "[data-blueprint-cross] > span",
        { scaleX: 0, scaleY: 0 },
        {
          scaleX: 1,
          scaleY: 1,
          duration: 1.1,
          ease: "power3.inOut",
          stagger: 0.2,
          scrollTrigger: { trigger: scope.current, start: "top 60%", end: "top 25%", scrub: 0.4 },
        },
      );
    }

    return () => { cancelled = true; };
  });

  return (
    <section ref={scope} data-chapter="why" className="relative w-full bg-[#060010] py-28 lg:py-44 overflow-hidden">
      {/* Blueprint room - this chapter's world: drafting grid + plotted crosshair */}
      <div data-blueprint className="absolute inset-0 pointer-events-none opacity-0 hidden lg:block" aria-hidden="true">
        {/* Drafting grid, faded toward the copy so it never fights the words */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(155,92,246,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(155,92,246,0.055) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(ellipse 75% 85% at 72% 60%, black 30%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 85% at 72% 60%, black 30%, transparent 78%)",
          }}
        />
        {/* Plotted crosshair converging where the object travels to */}
        <div data-blueprint-cross className="absolute inset-0">
          <span
            className="absolute left-0 right-0 bottom-[13%] h-px block"
            style={{
              background: "repeating-linear-gradient(90deg, rgba(196,168,255,0.28) 0 7px, transparent 7px 14px)",
              transformOrigin: "left center",
            }}
          />
          <span
            className="absolute top-0 bottom-0 right-[24%] w-px block"
            style={{
              background: "repeating-linear-gradient(180deg, rgba(196,168,255,0.28) 0 7px, transparent 7px 14px)",
              transformOrigin: "center top",
            }}
          />
        </div>
        {/* Plot label at the crosshair intersection */}
        <div className="absolute right-[24%] bottom-[13%] translate-x-4 -translate-y-4 flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a8ff]/80" />
          <span className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.3em] text-[#c4a8ff]/60">
            QX·01 · In transit
          </span>
        </div>
      </div>

      {/* Faint backdrop numeral + reading light */}
      <span
        className="pointer-events-none select-none absolute -right-6 top-1/2 -translate-y-1/2 [font-family:'Satoshi-Black',Helvetica] font-black text-stroke-violet text-[24rem] leading-none opacity-40 hidden lg:block"
        aria-hidden="true"
      >
        01
      </span>
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] rounded-full opacity-60"
        style={{ background: "radial-gradient(ellipse at center, rgba(74,0,130,0.22) 0%, transparent 70%)", filter: "blur(40px)" }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-8">
          01 · Why We Exist
        </p>
        <p
          data-manifesto
          className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl/[1.4] sm:text-4xl/[1.4] lg:text-[3.4rem]/[1.4] tracking-[-0.02em]"
        >
          {MANIFESTO}
        </p>

        {/* Capabilities strip - quiet, dense, Reflect-style */}
        <div data-manifesto-strip className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-20 lg:mt-28">
          {[
            { t: "Generative + Predictive", d: "Two intelligence engines, one platform" },
            { t: "Air-Gapped by Design", d: "Zero egress, inside your walls" },
            { t: "Arabic-First Models", d: "Fine-tuned for MENA operations" },
            { t: "Agentic Workflows", d: "Decisions executed, not suggested" },
          ].map((c) => (
            <div key={c.t} className="border-t border-white/10 pt-5 hover:border-[#9b5cf6]/50 transition-colors duration-500">
              <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm mb-1.5">{c.t}</p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/45 text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
