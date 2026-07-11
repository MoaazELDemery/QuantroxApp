import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

/**
 * useGsap - scoped GSAP setup with automatic cleanup.
 *
 * Runs `setup` inside a gsap.context bound to the returned ref, so every
 * tween/ScrollTrigger created within is reverted on unmount (StrictMode-safe).
 * Selector strings inside `setup` resolve within the scoped element.
 *
 * `setup` may return a cleanup function - use it to cancel async work
 * (e.g. a document.fonts.ready callback that adds tweens via ctx.add()).
 */
export const useGsap = <T extends HTMLElement = HTMLDivElement>(
  setup: (ctx: gsap.Context) => void | (() => void),
) => {
  const scope = useRef<T>(null);

  useLayoutEffect(() => {
    let cleanup: void | (() => void);
    const ctx = gsap.context((self) => {
      cleanup = setup(self);
    }, scope);
    return () => {
      cleanup?.();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scope;
};
