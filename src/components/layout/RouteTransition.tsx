import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "../../lib/gsap";

/**
 * RouteTransition - a violet curtain sweeps across the viewport on every
 * route change, masking the content swap and scroll reset underneath.
 */
export const RouteTransition = (): JSX.Element => {
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const panel = panelRef.current!;
    gsap
      .timeline()
      .fromTo(
        panel,
        { yPercent: 100, display: "block" },
        { yPercent: 0, duration: 0.001 }, // appear instantly over the fresh page
      )
      .to(panel, { yPercent: -100, duration: 0.9, ease: "power4.inOut", delay: 0.08 })
      .set(panel, { display: "none" });
  }, [pathname]);

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[190] hidden pointer-events-none"
      aria-hidden="true"
      style={{ background: "linear-gradient(180deg, #10021f 0%, #2a0648 50%, #10021f 100%)" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/logo-svg-1.svg" alt="" className="w-20 h-20 opacity-40" />
      </div>
    </div>
  );
};
