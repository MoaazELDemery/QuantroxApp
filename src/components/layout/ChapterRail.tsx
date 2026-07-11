import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { getLenis } from "../scroll/SmoothScroll";
import { introDone } from "../../lib/intro";

const CHAPTERS = [
  { key: "intro", label: "Intro" },
  { key: "why", label: "Why we exist" },
  { key: "agents", label: "Agents" },
  { key: "cortex", label: "Cortex" },
  { key: "proof", label: "Proof" },
  { key: "foundation", label: "Foundation" },
  { key: "deploy", label: "Deploy" },
];

/**
 * ChapterRail - oryzo-style scrollspy: a fixed rail of chapter dots that
 * tracks which story chapter currently occupies the viewport middle and
 * jumps there on click. Orientation for a very long scroll journey.
 */
export const ChapterRail = (): JSX.Element => {
  const rail = useRef<HTMLElement>(null);
  const items = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const el = rail.current;
    if (!el) return;

    introDone().then(() => {
      gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.4 });
    });

    let current = "";
    const update = () => {
      const mid = window.innerHeight * 0.5;
      let active = current;
      for (const c of CHAPTERS) {
        const section = document.querySelector<HTMLElement>(`[data-chapter="${c.key}"]`);
        if (!section) continue;
        const r = section.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) {
          active = c.key;
          break;
        }
      }
      if (active !== current) {
        current = active;
        for (const c of CHAPTERS) {
          const btn = items.current[c.key];
          if (!btn) continue;
          const on = c.key === current;
          btn.dataset.active = on ? "true" : "false";
        }
      }
    };
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  const jump = (key: string) => {
    const section = document.querySelector<HTMLElement>(`[data-chapter="${key}"]`);
    if (!section) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(section, { duration: 1.7 });
    else section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={rail}
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1 opacity-0 -translate-x-2"
      aria-label="Chapters"
    >
      {CHAPTERS.map((c) => (
        <button
          key={c.key}
          ref={(node) => { items.current[c.key] = node; }}
          type="button"
          onClick={() => jump(c.key)}
          data-active="false"
          className="group flex items-center gap-3 py-1.5 cursor-pointer"
          aria-label={c.label}
        >
          <span
            className="w-1.5 h-1.5 rounded-full transition-all duration-500 bg-white/40 group-hover:bg-white/70 group-data-[active=true]:bg-[#9b5cf6] group-data-[active=true]:scale-150 group-data-[active=true]:shadow-[0_0_10px_2px_rgba(155,92,246,0.55)]"
          />
          <span
            className="[font-family:'Satoshi-Medium',Helvetica] text-[9px] uppercase tracking-[0.3em] transition-all duration-500 text-transparent group-hover:text-white/50 group-data-[active=true]:text-white/75"
          >
            {c.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
