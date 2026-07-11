import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { useGsap } from "../../../components/scroll/useGsap";

const phrases = [
  "Sovereign by Design",
  "Zero Data Egress",
  "Air-Gapped",
  "Governed",
  "SAMA Compliant",
  "In-Kingdom Residency",
];

const TickerGroup = (): JSX.Element => (
  <div className="flex items-center gap-12 shrink-0 pr-12">
    {phrases.map((p, i) => (
      <span key={p} className="flex items-center gap-12 whitespace-nowrap">
        <span
          className={`[font-family:'Satoshi-Black',Helvetica] font-black uppercase text-5xl lg:text-7xl tracking-[-0.01em] ${
            i % 2 === 0 ? "text-white/90" : "text-stroke"
          }`}
        >
          {p}
        </span>
        <span className="w-2 h-2 rounded-full bg-[#9b5cf6]/70 shrink-0" aria-hidden="true" />
      </span>
    ))}
  </div>
);

/**
 * TickerSection - oversized marquee dividing the page chapters. Drifts on
 * its own, accelerates with scroll and reverses when you scroll back up.
 */
export const TickerSection = (): JSX.Element => {
  const scope = useGsap<HTMLElement>(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const loop = gsap.to("[data-ticker-track]", {
      xPercent: -50,
      ease: "none",
      duration: 28,
      repeat: -1,
    });

    ScrollTrigger.create({
      trigger: scope.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const v = self.getVelocity() / 900;
        const speed = gsap.utils.clamp(-6, 6, v);
        const target = Math.abs(speed) < 0.6 ? 1 : speed;
        gsap.to(loop, { timeScale: target, duration: 0.5, ease: "power2.out", overwrite: true });
        // Physical lean into the scroll
        gsap.to("[data-ticker-track]", {
          skewX: gsap.utils.clamp(-7, 7, -v * 1.6),
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      },
      onScrubComplete: () => gsap.to("[data-ticker-track]", { skewX: 0, duration: 0.8, ease: "elastic.out(1,0.6)" }),
      onLeave: () => { gsap.to(loop, { timeScale: 1, duration: 1 }); gsap.to("[data-ticker-track]", { skewX: 0, duration: 0.8 }); },
      onLeaveBack: () => { gsap.to(loop, { timeScale: 1, duration: 1 }); gsap.to("[data-ticker-track]", { skewX: 0, duration: 0.8 }); },
    });
  });

  return (
    <section
      ref={scope}
      className="relative w-full overflow-hidden py-14 lg:py-20 border-y border-white/[0.06] bg-[#060010]"
      aria-hidden="true"
    >
      <div data-ticker-track className="flex w-max">
        <TickerGroup />
        <TickerGroup />
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#060010] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#060010] to-transparent" />
    </section>
  );
};
