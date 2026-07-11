import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../components/layout/Header";
import { gsap } from "../../../lib/gsap";
import { useGsap } from "../../../components/scroll/useGsap";
import { introDone } from "../../../lib/intro";
import { storyState } from "../../../lib/storyState";

/**
 * Hero - the ignition sequence.
 *
 * Choreography: badge and headline reveal → the horizon flare draws itself
 * in → the generated light-field plays ONCE (rays bloom up and hold on
 * their final lit frame - no loop) → the cube rises out of the light.
 * Scroll then owns the cube's rotation; the pointer tilts it.
 */
export const FeaturesSection = (): JSX.Element => {
  // Live operations clock (HQ time) - a small "the system is awake" detail
  const clockRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Riyadh",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => {
      if (clockRef.current) clockRef.current.textContent = `${fmt.format(new Date())} AST`;
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scope = useGsap<HTMLElement>((ctx) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let cleanupPointer: (() => void) | null = null;
    const lightfield = () => scope.current?.querySelector<HTMLVideoElement>("[data-hero-lightfield]");

    Promise.all([document.fonts.ready, introDone()]).then(() => {
      if (cancelled) return;
      if (reduced) {
        gsap.set(
          "[data-hero-badge], [data-hero-line], [data-hero-sub], [data-hero-cta], [data-hero-meta], [data-hero-stage], [data-hero-eclipse], [data-hero-annot], [data-hero-annot-line]",
          { opacity: 1, y: 0, x: 0, yPercent: 0, scaleX: 1 },
        );
        gsap.set(storyState, { visible: 1, x: 1.45, y: -0.55, scale: 1.12, camZ: 9.6 });
        // Skip the ignition: hold the fully-lit final frame
        const v = lightfield();
        if (v) {
          const seekEnd = () => { v.currentTime = Math.max(0, v.duration - 0.05); };
          if (v.readyState >= 1) seekEnd();
          else v.addEventListener("loadedmetadata", seekEnd, { once: true });
        }
        return;
      }
      ctx.add(() => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo("[data-hero-badge]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, 0.1)
          .fromTo("[data-hero-line]", { yPercent: 115 }, { yPercent: 0, duration: 1.2, stagger: 0.12 }, 0.25)
          .fromTo("[data-hero-sub]", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.9 }, 0.75)
          .fromTo("[data-hero-cta]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.9)
          // Rays bloom once and glide to a stop - the deceleration is baked
          // into the 60fps plate itself (its tail is time-stretched with an
          // ease-out), so playback stays at rate 1 and the hold is seamless.
          .add(() => { lightfield()?.play().catch(() => {}); }, 1.35)
          .fromTo("[data-hero-eclipse]", { opacity: 0 }, { opacity: 1, duration: 2.4, ease: "power2.out" }, 1.35)
          // The cube rises out of the light
          .fromTo(
            storyState,
            { visible: 0, x: 1.45, y: -2.4, scale: 0.95, camZ: 10.6 },
            { visible: 1, x: 1.45, y: -0.55, scale: 1.12, camZ: 9.6, duration: 1.9, ease: "power3.out" },
            1.6,
          )
          .fromTo("[data-hero-meta]", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.12 }, 2.4)
          // Schematic callouts formulate around the object
          .fromTo(
            "[data-hero-annot-line]",
            { scaleX: 0 },
            { scaleX: 1, duration: 0.7, ease: "power3.out", stagger: 0.18 },
            2.55,
          )
          .fromTo(
            "[data-hero-annot]",
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.15 },
            2.75,
          );
      });
    });

    if (!reduced) {
      // Pointer parallax: sky and light shift on different planes
      const px = gsap.quickTo("[data-hero-sky]", "x", { duration: 0.9, ease: "power3.out" });
      const py = gsap.quickTo("[data-hero-sky]", "y", { duration: 0.9, ease: "power3.out" });
      const ex = gsap.quickTo("[data-hero-eclipse]", "x", { duration: 1.2, ease: "power3.out" });
      const onPointer = (e: MouseEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        px(nx * -14);
        py(ny * -8);
        ex(nx * 18);
      };
      window.addEventListener("mousemove", onPointer, { passive: true });
      ctx.add(() => {}); // keep context alive for cleanup below
      cleanupPointer = () => window.removeEventListener("mousemove", onPointer);

      gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
          onUpdate: (self) => { storyState.spin = self.progress; },
        },
      })
        .to("[data-hero-copy]", { yPercent: -14, opacity: 0.1, ease: "none" }, 0)
        .to("[data-hero-eclipse]", { opacity: 0.35, ease: "none" }, 0.3)
        // The light field dims with the eclipse on scroll-out (it no longer
        // lives inside that container, so it needs its own scrubbed fade)
        .to("[data-hero-lightfield]", { opacity: 0.35, ease: "none" }, 0.3);
    }

    return () => {
      cancelled = true;
      cleanupPointer?.();
    };
  });

  return (
    <section ref={scope} data-chapter="intro" className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-[#08040F] flex flex-col">
      {/* Star specks - two depths, twinkling out of phase, pointer-parallax */}
      <div data-hero-sky className="absolute inset-[-2%]" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[55%] starfield animate-star-twinkle [--tw-star-base:0.7]" />
        <div className="absolute inset-x-0 top-[8%] h-[40%] starfield animate-star-twinkle-slow scale-x-[-1] [--tw-star-base:0.4]" />
      </div>

      <Header />

      {/* Split editorial: copy column left, the object staged right */}
      <div data-hero-copy className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-6 sm:px-10 lg:px-16 pt-24 lg:pt-10">
        {/* Soft atmosphere behind the copy */}
        <div
          className="absolute -z-10 left-[8%] top-[22%] w-[52%] max-w-[700px] h-[52%] rounded-[50%] pointer-events-none hidden lg:block"
          style={{
            background: "radial-gradient(ellipse at 40% 50%, rgba(124,58,237,0.13) 0%, rgba(124,58,237,0.05) 45%, transparent 72%)",
            filter: "blur(56px)",
          }}
          aria-hidden="true"
        />
        <p
          data-hero-badge
          className="inline-flex items-center gap-2.5 opacity-0 mb-7 [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#c4a8ff]/90 text-[11px] uppercase tracking-[0.3em]"
        >
          <span className="w-1 h-1 rounded-full bg-[#9b5cf6]" />
          Enterprise AI - Powered by Cortex™
        </p>

        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-0.03em] leading-[1.12] max-w-2xl">
          <span className="block overflow-hidden pt-[0.06em] pb-[0.22em] -mb-[0.16em] text-[2.6rem] sm:text-6xl lg:text-[4.9rem]">
            <span data-hero-line className="block text-gradient-silver">
              The Digital
            </span>
          </span>
          <span className="block overflow-hidden pt-[0.06em] pb-[0.22em] -mb-[0.16em] text-[2.6rem] sm:text-6xl lg:text-[4.9rem]">
            <span data-hero-line className="block text-gradient-silver">
              Workforce
            </span>
          </span>
          <span className="block overflow-hidden pt-[0.06em] pb-[0.22em] -mb-[0.16em] text-[2.6rem] sm:text-6xl lg:text-[4.9rem]">
            <span data-hero-line className="block text-gradient-silver">
              Company.
            </span>
          </span>
        </h1>

        <p
          data-hero-sub
          className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/50 text-base sm:text-lg max-w-[440px] leading-relaxed opacity-0 mt-6"
        >
          Multi-agent AI, air-gapped inside your walls.
          Own your data. Own your intelligence.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 mt-9">
          <Link
            to="/demo"
            data-hero-cta
            data-magnetic
            className="group opacity-0 inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#4a0082] border border-[#9b5cf6]/40 text-white [font-family:'Satoshi-Medium',Helvetica] font-medium text-sm hover:bg-[#56089b] hover:-translate-y-px transition-all duration-300 shadow-[0_0_24px_-6px_rgba(155,92,246,0.5)]"
          >
            Request Live Demo
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/technology"
            data-hero-cta
            className="opacity-0 [font-family:'Satoshi-Medium',Helvetica] font-medium text-sm text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/50 pb-0.5"
          >
            Explore the platform
          </Link>
        </div>
      </div>

      {/* The cube rising out of its light - staged right on desktop */}
      <div className="relative flex-1 min-h-[280px] lg:absolute lg:inset-0 lg:min-h-0 pointer-events-none" aria-hidden="true">
        {/* Generated light field - authored in its final composition: rays
            enter from beyond the top-right corner and reach toward the cube,
            bloom once, then decelerate to a baked-in standstill. Static and
            full-bleed: it lives outside the pointer-parallaxed eclipse layer
            so it never shifts with the cursor or reveals an edge. */}
        <video
          data-hero-lightfield
          className="absolute inset-0 w-full h-full object-cover object-right-top mix-blend-screen opacity-80"
          src="/videos/hero-lightfield.mp4"
          poster="/videos/hero-lightfield-poster.jpg"
          muted
          playsInline
          preload="auto"
        />
        <div data-hero-eclipse className="absolute inset-0 lg:left-[30%] opacity-0">
          {/* God-beam: a cone of light falling from the top right onto the cube */}
          <div
            className="absolute -top-[10%] right-[-8%] w-[120%] h-[135%]"
            style={{
              background:
                "conic-gradient(from 199deg at 80% 0%, transparent 0deg, rgba(226,206,255,0.32) 8deg, rgba(155,92,246,0.2) 17deg, rgba(74,0,130,0.09) 27deg, transparent 36deg)",
              filter: "blur(26px)",
            }}
          />
          {/* Hot source bloom at the beam's origin - breathing */}
          <div
            className="absolute top-[-16%] right-[2%] w-[48%] max-w-[660px] aspect-square rounded-full animate-glow-breathe"
            style={{
              background: "radial-gradient(circle at 62% 18%, rgba(240,228,255,0.78) 0%, rgba(155,92,246,0.32) 38%, transparent 68%)",
              filter: "blur(30px)",
            }}
          />
          {/* Soft pool where the light lands - keeps the cube grounded */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[6%] w-[64%] max-w-[900px] aspect-[2.6/1] rounded-[50%]"
            style={{
              background: "radial-gradient(ellipse at 50% 85%, rgba(124,58,237,0.34) 0%, rgba(124,58,237,0.14) 45%, transparent 72%)",
              filter: "blur(34px)",
            }}
          />
        </div>

        {/* Schematic callouts - the technical labels around the object */}
        <div className="absolute right-[2.5%] top-[31%] hidden lg:flex items-center gap-3 pointer-events-none z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a8ff]/80" />
          <span
            data-hero-annot-line
            className="block h-px w-14 bg-gradient-to-r from-[#c4a8ff]/60 to-white/15 opacity-90"
            style={{ transformOrigin: "left center" }}
          />
          <div data-hero-annot className="flex flex-col gap-1 opacity-0">
            <span className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.28em] text-white/60">
              QX·Core - Unit 01
            </span>
            <span className="[font-family:'Satoshi-Regular',Helvetica] text-[10px] uppercase tracking-[0.28em] text-white/30">
              Obsidian lattice · 2.1³
            </span>
            <span className="[font-family:'Satoshi-Regular',Helvetica] text-[10px] uppercase tracking-[0.28em] text-[#c4a8ff]/70">
              Status - Sovereign
            </span>
          </div>
        </div>
        <div className="absolute left-[37%] bottom-[15%] hidden lg:flex items-center gap-3 pointer-events-none z-10">
          <div data-hero-annot className="flex flex-col items-end gap-1 opacity-0">
            <span className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.28em] text-white/60">
              Agent orbit - 05 units
            </span>
            <span className="[font-family:'Satoshi-Regular',Helvetica] text-[10px] uppercase tracking-[0.28em] text-white/30">
              Sync 0.12 rad/s
            </span>
          </div>
          <span
            data-hero-annot-line
            className="block h-px w-14 bg-gradient-to-l from-[#c4a8ff]/60 to-white/15 opacity-90"
            style={{ transformOrigin: "right center" }}
          />
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a8ff]/80" />
        </div>

        {/* Fade into the next chapter */}
        <div className="absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-b from-transparent via-[#060010]/70 to-[#060010] pointer-events-none" />
      </div>

      {/* Bottom bar - one quiet line: locations · scroll ring · live clock */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-16 pb-7 flex items-end justify-between text-white/30">
        <span data-hero-meta className="hidden sm:block opacity-0 [font-family:'Satoshi-Regular',Helvetica] text-[10px] uppercase tracking-[0.25em]">
          Riyadh · Dubai · Tampa
        </span>

        <div data-hero-meta className="relative w-[74px] h-[74px] opacity-0 mx-auto sm:mx-0">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_14s_linear_infinite]" aria-hidden="true">
            <defs>
              <path id="ringPath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-white/45" style={{ fontSize: "9.5px", fontFamily: "'Satoshi-Medium', Helvetica", letterSpacing: "0.22em" }}>
              <textPath href="#ringPath">SCROLL TO EXPLORE • SOVEREIGN AI •</textPath>
            </text>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[#c4a8ff] text-base">↓</span>
        </div>

        <span
          data-hero-meta
          ref={clockRef}
          className="hidden sm:block opacity-0 [font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.25em] text-white/40 tabular-nums"
        />
      </div>
    </section>
  );
};
