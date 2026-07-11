import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AmbientBackground } from "./AmbientBackground";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { useGsap } from "../scroll/useGsap";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageLayout - shared shell for every subpage.
 *
 * Besides the ambient background and chrome, it installs a global
 * scroll-reveal: every <section> inside <main> lifts in as it enters the
 * viewport, so all 30+ subpages inherit the cinematic feel without
 * per-page animation code. Sections can opt out with data-no-reveal.
 */
export const PageLayout = ({ children, className = "" }: PageLayoutProps): JSX.Element => {
  const scope = useGsap<HTMLDivElement>(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = gsap.utils
      .toArray<HTMLElement>("main section")
      .filter((el) => !el.hasAttribute("data-no-reveal"));
    if (!sections.length) return;

    // Scrubbed to the scrollbar: content lifts in across an entry band and
    // sinks back the moment the visitor scrolls up - both directions, always
    // live, oryzo-style. IMPORTANT: animate each section's content container,
    // never the <section> itself - sections carry backgrounds (plates,
    // gradients, washes), and fading those makes the page background blink
    // in and out at the viewport edges.
    sections.forEach((sec) => {
      const targets = Array.from(sec.children).filter((el) => {
        if (el.hasAttribute("aria-hidden")) return false;
        // Absolutely-positioned children are backdrop layers (washes, glows,
        // plates) even when unmarked - never fade those with the content.
        if (/\babsolute\b/.test(el.getAttribute("class") ?? "")) return false;
        return true;
      });
      if (!targets.length) return;
      gsap.fromTo(
        targets,
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: { trigger: sec, start: "top 96%", end: "top 62%", scrub: 0.4 },
        },
      );
    });
    ScrollTrigger.refresh();
  });

  return (
    <div ref={scope} className={`bg-[#060010] w-full min-h-screen flex flex-col relative overflow-x-clip ${className}`}>
      <AmbientBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-24 lg:pt-32">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
