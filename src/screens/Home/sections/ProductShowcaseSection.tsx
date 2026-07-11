import { gsap } from "../../../lib/gsap";
import { useGsap } from "../../../components/scroll/useGsap";
import { ScrubVideo } from "../../../components/scroll/ScrubVideo";

const PIN_LENGTH = "+=240%";

const contentSections = [
  {
    title: "Zero Data Egress",
    description:
      "Your data never leaves your infrastructure. Every model, every agent, every decision - air-gapped inside your walls.",
  },
  {
    title: "Governed by Design",
    description:
      "Every agent action is policy-enforced, auditable, and defensible to regulators. No black boxes. No unilateral behaviour.",
  },
];

/**
 * ProductShowcaseSection - pinned video takeover. The 4K macro film of the
 * platform cube opens from a framed card to full-bleed while its playhead
 * scrubs with scroll, and the foundation manifesto lands on top.
 */
export const ProductShowcaseSection = (): JSX.Element => {
  const scope = useGsap<HTMLElement>(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("[data-takeover-frame]", { clipPath: "inset(0% 0% 0% 0% round 0px)" });
      gsap.set("[data-takeover-line], [data-takeover-sub], [data-takeover-card], [data-takeover-annot]", { opacity: 1 });
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

    tl.fromTo(
      "[data-takeover-frame]",
      { clipPath: "inset(32% 38% 32% 38% round 28px)" },
      { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 3, ease: "power2.inOut" },
      0,
    )
      .fromTo("[data-takeover-zoom]", { scale: 0.8 }, { scale: 1, duration: 3, ease: "power2.inOut" }, 0)
      .to("[data-takeover-hint]", { opacity: 0, duration: 0.6 }, 0.4)
      .fromTo("[data-takeover-annot]", { opacity: 0 }, { opacity: 1, duration: 0.8 }, 2.9)
      .fromTo("[data-takeover-line]", { yPercent: 115 }, { yPercent: 0, duration: 1.2, stagger: 0.5 }, 2.4)
      .fromTo("[data-takeover-heading]", { yPercent: 6 }, { yPercent: -6, duration: 4.4, ease: "none" }, 2.4)
      .fromTo("[data-takeover-sub]", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, 4.2)
      .fromTo(
        "[data-takeover-card]",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.35 },
        5,
      )
      .to({}, { duration: 1 });
  });

  return (
    <section ref={scope} data-chapter="foundation" className="relative w-full h-screen overflow-hidden bg-[#02000a]">
      {/* 4K macro film - clip opens from card to full-bleed, playhead scrubbed */}
      <div data-takeover-frame className="absolute inset-0" style={{ clipPath: "inset(32% 38% 32% 38% round 28px)" }}>
        <div data-takeover-zoom className="absolute inset-0">
          <ScrubVideo
            src="/videos/cube-macro-4k.mp4"
            poster="/videos/cube-macro-4k-poster.jpg"
            triggerRef={scope}
            start="top top"
            end={PIN_LENGTH}
            scrub={0.5}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#02000a]/85 via-transparent to-[#02000a]/60" aria-hidden="true" />
        {/* Cinema vignette + grain */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 120% 90% at 50% 50%, transparent 55%, rgba(2,0,10,0.55) 100%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        {/* Film slate - revealed as the frame opens */}
        <div
          data-takeover-annot
          className="hidden lg:flex items-center gap-3 absolute top-8 left-10 opacity-0"
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a8ff]/80 animate-pulse" />
          <span className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.3em] text-white/60">
            QX Macro - 4K film · playhead scrubbed
          </span>
        </div>
      </div>

      {/* Pre-takeover hint label */}
      <div data-takeover-hint className="absolute inset-x-0 top-[16%] text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em]">
          04 · The Foundation
        </p>
      </div>

      {/* Manifesto headline over the takeover */}
      <div data-takeover-heading className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white uppercase tracking-[-0.02em] leading-[1.02] drop-shadow-[0_8px_40px_rgba(0,0,0,0.8)]">
          <span className="block overflow-hidden pt-[0.06em] pb-[0.22em] -mb-[0.16em] text-4xl sm:text-5xl lg:text-7xl">
            <span data-takeover-line className="block">
              Sovereign AI is not a feature.
            </span>
          </span>
          <span className="block overflow-hidden pt-[0.06em] pb-[0.22em] -mb-[0.16em] text-4xl sm:text-5xl lg:text-7xl">
            <span data-takeover-line className="block text-gradient-brand">
              It is the foundation.
            </span>
          </span>
        </h2>

        <p
          data-takeover-sub
          className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/80 text-base sm:text-lg lg:text-2xl max-w-3xl leading-normal mt-8 opacity-0"
        >
          Generic AI platforms route your data through shared infrastructure. QuantorX Cortex™
          runs entirely inside your walls - air-gapped, governed, and sovereign by design.
        </p>
      </div>

      {/* Governance value cards - final beat */}
      <div className="absolute inset-x-0 bottom-8 lg:bottom-14 z-10 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4 lg:gap-6">
          {contentSections.map((section) => (
            <div
              key={section.title}
              data-takeover-card
              className="relative rounded-2xl p-5 lg:p-7 text-left opacity-0 bg-white/[0.06] border border-white/10 backdrop-blur-xl overflow-hidden hover:border-[#9b5cf6]/35 transition-colors duration-300"
            >
              <span className="absolute top-0 left-0 h-px w-2/3 bg-gradient-to-r from-[#9b5cf6]/70 to-transparent" aria-hidden="true" />
              <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-lg lg:text-2xl leading-normal mb-2">
                {section.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm lg:text-base leading-normal">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
