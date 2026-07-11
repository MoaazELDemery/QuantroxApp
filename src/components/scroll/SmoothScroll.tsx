import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";
import { gsap, ScrollTrigger } from "../../lib/gsap";

let lenisInstance: Lenis | null = null;

/** Access the live Lenis instance (null when reduced-motion or before mount). */
export const getLenis = (): Lenis | null => lenisInstance;

/**
 * SmoothScroll - site-wide Lenis smooth scrolling wired into GSAP ScrollTrigger.
 *
 * - Lenis drives the scroll position; ScrollTrigger listens to it so every
 *   scrubbed/pinned animation stays frame-synced with the smoothing.
 * - Touch devices keep native momentum scrolling (Lenis default).
 * - Respects prefers-reduced-motion: no smoothing, animations still functional.
 * - Resets scroll to top on route change (replaces window.scrollTo so the
 *   smoothing engine doesn't fight the jump).
 */
export const SmoothScroll = ({ children }: { children: ReactNode }): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.11,
      wheelMultiplier: 1,
      anchors: true,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  useEffect(() => {
    lenisInstance?.scrollTo(0, { immediate: true, force: true });
    // New page, new layout - recalculate all trigger positions.
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  return <>{children}</>;
};
