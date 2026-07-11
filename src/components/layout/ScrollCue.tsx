import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

/**
 * ScrollCue - oryzo's persistent "scroll to continue" indicator. Long pinned
 * chapters can read as "stuck"; this cue keeps the journey moving. Fades out
 * near the top (the hero has its own ring) and before the footer.
 */
export const ScrollCue = (): JSX.Element => {
  const cue = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cue.current;
    if (!el) return;
    const fade = gsap.quickTo(el, "opacity", { duration: 0.5, ease: "power2.out" });
    let shown = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const visible = y > 620 && y < max - window.innerHeight * 1.6;
      if (visible !== shown) {
        shown = visible;
        fade(visible ? 1 : 0);
      }
    };
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <div
      ref={cue}
      className="glass-panel fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-5 opacity-0 pointer-events-none"
      aria-hidden="true"
    >
      <span className="w-7 h-7 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center">
        <span className="text-[#c4a8ff] text-xs animate-bounce">↓</span>
      </span>
      <span className="[font-family:'Satoshi-Medium',Helvetica] text-[9px] uppercase tracking-[0.3em] text-white/45">
        Scroll to continue
      </span>
    </div>
  );
};
