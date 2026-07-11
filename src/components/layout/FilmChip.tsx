import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { getLenis } from "../scroll/SmoothScroll";

/**
 * FilmChip - oryzo's floating hero film card as a UX pattern: a persistent
 * glass chip that opens the brand film in a lightbox without leaving the
 * scroll journey. Hides near the footer; ESC / backdrop click closes.
 */
export const FilmChip = (): JSX.Element => {
  const chip = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = chip.current;
    if (!el) return;
    // Visible only between the hero (whose corner meta owns that spot) and
    // the footer approach.
    const fade = gsap.quickTo(el, "opacity", { duration: 0.5, ease: "power2.out" });
    let shown = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const visible = y > 620 && y < max - window.innerHeight * 1.4;
      if (visible !== shown) {
        shown = visible;
        fade(visible ? 1 : 0);
        el.style.pointerEvents = visible ? "auto" : "none";
      }
    };
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    if (!open) return;
    getLenis()?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      getLenis()?.start();
    };
  }, [open]);

  return (
    <>
      <button
        ref={chip}
        type="button"
        onClick={() => setOpen(true)}
        data-magnetic
        className="glass-panel glass-hover fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-3 rounded-2xl p-2 pr-5 opacity-0 translate-y-3 cursor-pointer"
        aria-label="Watch the QuantorX film"
      >
        <span className="relative block w-16 h-10 rounded-xl overflow-hidden">
          <img src="/videos/quantorx-ignition-poster.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <span className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="w-5 h-5 rounded-full bg-white/90 flex items-center justify-center text-[#17091F] text-[8px] pl-0.5">▶</span>
          </span>
        </span>
        <span className="flex flex-col items-start gap-0.5">
          <span className="[font-family:'Satoshi-Medium',Helvetica] text-white text-xs">Watch the film</span>
          <span className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-[10px] uppercase tracking-[0.2em]">
            QuantorX · Ignition
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-label="QuantorX film"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-6 right-8 text-white/60 hover:text-white text-sm [font-family:'Satoshi-Medium',Helvetica] uppercase tracking-[0.25em] cursor-pointer"
          >
            Close ✕
          </button>
          <video
            src="/videos/quantorx-ignition.mp4"
            poster="/videos/quantorx-ignition-poster.jpg"
            autoPlay
            playsInline
            controls
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl rounded-2xl border border-white/10 shadow-[0_40px_120px_-20px_rgba(124,58,237,0.35)]"
          />
        </div>
      )}
    </>
  );
};
