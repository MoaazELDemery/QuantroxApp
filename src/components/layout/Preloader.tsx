import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { introAlreadyShown, markIntroShown } from "../../lib/intro";

/**
 * Preloader - the opening brand moment, shown once per session.
 * Logo blooms, a counter runs 000→100 with a hairline progress bar,
 * then the curtain lifts to reveal the page (which starts its own
 * entrance timeline at that exact moment via introDone()).
 */
export const Preloader = (): JSX.Element | null => {
  const [done, setDone] = useState(introAlreadyShown);
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (done) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      markIntroShown();
      setDone(true);
      return;
    }

    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const num = scope.current!.querySelector("[data-pre-num]")!;

      gsap
        .timeline({ onComplete: () => setDone(true) })
        .fromTo(
          "[data-pre-logo]",
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
          0,
        )
        .fromTo("[data-pre-meta]", { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3)
        .to(
          counter,
          {
            v: 100,
            duration: 1.6,
            ease: "power2.inOut",
            onUpdate: () => {
              num.textContent = String(Math.round(counter.v)).padStart(3, "0");
            },
          },
          0.15,
        )
        .fromTo("[data-pre-bar]", { scaleX: 0 }, { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0.15)
        .to("[data-pre-logo], [data-pre-meta]", { opacity: 0, y: -28, duration: 0.45, ease: "power2.in" }, "+=0.2")
        .add(() => markIntroShown()) // release page entrances as the curtain starts lifting
        .to(scope.current, { yPercent: -100, duration: 0.85, ease: "power4.inOut" });
    }, scope);

    return () => ctx.revert();
  }, [done]);

  if (done) return null;

  return (
    <div ref={scope} className="fixed inset-0 z-[200] bg-[#02000a] flex flex-col items-center justify-center">
      <img
        data-pre-logo
        src="/logo-svg-1.svg"
        alt=""
        className="w-36 h-36 lg:w-44 lg:h-44 opacity-0"
        style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 40px rgba(155,92,246,0.6))" }}
        aria-hidden="true"
      />

      <div data-pre-meta className="absolute bottom-10 inset-x-0 px-8 lg:px-16 opacity-0">
        <div className="flex items-end justify-between mb-4">
          <span className="[font-family:'Satoshi-Medium',Helvetica] text-white/40 text-[10px] uppercase tracking-[0.3em]">
            QuantorX · The Digital Workforce Company
          </span>
          <span
            data-pre-num
            className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl lg:text-4xl tracking-[-0.02em] tabular-nums"
          >
            000
          </span>
        </div>
        <div className="h-px w-full bg-white/10 overflow-hidden">
          <div data-pre-bar className="h-full w-full bg-gradient-to-r from-[#4a0082] via-[#9b5cf6] to-[#d946ef] origin-left scale-x-0" />
        </div>
      </div>
    </div>
  );
};
