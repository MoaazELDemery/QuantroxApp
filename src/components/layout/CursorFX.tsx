import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

/**
 * CursorFX - custom cursor for fine-pointer devices.
 * A violet dot tracks the pointer tightly; a soft ring lerps behind it
 * and inflates over interactive elements. The native cursor is hidden
 * while active. No-ops entirely on touch devices.
 */
export const CursorFX = (): JSX.Element | null => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    document.documentElement.classList.add("cursor-fx");

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.38, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.38, ease: "power3.out" });

    let visible = false;
    const onMove = (e: MouseEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const INTERACTIVE = "a, button, [role='button'], input, textarea, select, [data-cursor]";

    // Magnetic elements: pull toward the cursor within range, spring back after
    const MAGNET_RANGE = 110;
    const onMagnetMove = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < MAGNET_RANGE + Math.max(r.width, r.height) / 2) {
          gsap.to(el, { x: dx * 0.22, y: dy * 0.22, duration: 0.4, ease: "power3.out", overwrite: "auto" });
        } else {
          gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.55)", overwrite: "auto" });
        }
      });
    };
    window.addEventListener("mousemove", onMagnetMove, { passive: true });
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(INTERACTIVE)) {
        gsap.to(ring, { scale: 1.9, opacity: 0.9, duration: 0.35, ease: "power3.out" });
        gsap.to(dot, { scale: 0.5, duration: 0.35, ease: "power3.out" });
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(INTERACTIVE)) {
        gsap.to(ring, { scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" });
        gsap.to(dot, { scale: 1, duration: 0.35, ease: "power3.out" });
      }
    };
    const onDown = () => gsap.to(ring, { scale: 0.8, duration: 0.2 });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.3 });
    const onLeave = () => {
      visible = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("cursor-fx");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onMagnetMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    // mix-blend-difference: the cursor self-inverts on light and dark canvases.
    // z must clear the film lightbox (z-300) - the native cursor is hidden globally.
    <div className="pointer-events-none fixed inset-0 z-[400] mix-blend-difference" aria-hidden="true">
      <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white" />
      <div ref={ringRef} className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/70" />
    </div>
  );
};
