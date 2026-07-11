import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { gsap } from "../../lib/gsap";
import { useGsap } from "../scroll/useGsap";
import { introDone } from "../../lib/intro";

export interface PageHeroCta {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface PageHeroProps {
  eyebrow: string;
  /** ReactNode so callers can keep <br/> breaks or gradient spans. */
  title: ReactNode;
  lede?: ReactNode;
  /** Path under /videos - poster defaults to `${video minus .mp4}-poster.jpg`. */
  video?: string;
  ctas?: PageHeroCta[];
  align?: "center" | "split";
  /** Right column content for the split variant. */
  visual?: ReactNode;
  /** Breadcrumb / meta row rendered above the eyebrow (article pages). */
  meta?: ReactNode;
  /** Extra content below the CTAs (e.g. a newsletter form). */
  children?: ReactNode;
  /** Skip the aurora gradient on the title. */
  plainTitle?: boolean;
}

/**
 * PageHero - shared cinematic hero for every subpage.
 *
 * A generated brand film plays full-bleed behind the copy (reaching up
 * behind the transparent fixed header), the copy stack rises in on load,
 * and the film scales away as the visitor scrolls past. Marked
 * data-no-reveal so PageLayout's global section reveal skips it.
 */
export const PageHero = ({
  eyebrow,
  title,
  lede,
  video,
  ctas,
  align = "center",
  visual,
  meta,
  children,
  plainTitle = false,
}: PageHeroProps): JSX.Element => {
  const scope = useGsap<HTMLElement>((ctx) => {
    // The video and visual are optional - only tween what this page renders,
    // or GSAP logs "target not found" on every page missing one of them.
    const hasVideo = !!scope.current?.querySelector("[data-ph-video]");
    const hasVisual = !!scope.current?.querySelector("[data-ph-visual]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(["[data-ph-item]", hasVisual && "[data-ph-visual]"].filter(Boolean).join(", "), { opacity: 1 });
      return;
    }
    let cancelled = false;

    // Hold the entrance until the preloader curtain lifts (no-op afterwards)
    introDone().then(() => {
      if (cancelled) return;
      ctx.add(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        if (hasVideo) {
          tl.fromTo("[data-ph-video]", { scale: 1.12, opacity: 0 }, { scale: 1, opacity: 0.45, duration: 2.2, ease: "power2.out" }, 0);
        }
        tl.fromTo("[data-ph-item]", { opacity: 0, y: 44 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.11 }, 0.25);
        if (hasVisual) {
          tl.fromTo("[data-ph-visual]", { opacity: 0, y: 60, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 1.3 }, 0.6);
        }
      });
    });

    if (hasVideo) {
      gsap.to("[data-ph-video]", {
        scale: 1.15,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: 0.5 },
      });
    }

    return () => { cancelled = true; };
  });

  const isSplit = align === "split" && visual;
  const poster = video ? video.replace(/\.mp4$/, "-poster.jpg") : undefined;

  return (
    <section
      ref={scope}
      data-no-reveal
      className="relative overflow-hidden -mt-24 lg:-mt-32 pt-32 lg:pt-44 pb-16 lg:pb-24"
    >
      {video && (
        <>
          <video
            data-ph-video
            className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-screen"
            src={video}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 85% 70% at 50% 30%, transparent 0%, rgba(6,0,16,0.55) 65%, rgba(6,0,16,0.95) 100%)" }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#060010] pointer-events-none" aria-hidden="true" />
        </>
      )}

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 ${
          isSplit ? "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" : "flex flex-col items-center text-center"
        }`}
      >
        <div className={isSplit ? "" : "flex flex-col items-center max-w-4xl"}>
          {meta && (
            <div data-ph-item className="opacity-0 mb-6 w-full">
              {meta}
            </div>
          )}

          <p data-ph-item className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-5 opacity-0">
            {eyebrow}
          </p>

          <h1
            data-ph-item
            className={`[font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl md:text-5xl lg:text-[4.25rem] tracking-[-0.03em] leading-[1.06] mb-6 pb-1 opacity-0 ${
              plainTitle ? "text-white" : "text-gradient-silver"
            }`}
          >
            {title}
          </h1>

          {lede && (
            <p
              data-ph-item
              className={`[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg lg:text-xl leading-relaxed opacity-0 ${
                isSplit ? "max-w-xl" : "max-w-2xl"
              }`}
            >
              {lede}
            </p>
          )}

          {ctas && ctas.length > 0 && (
            <div data-ph-item className={`flex flex-col sm:flex-row gap-4 mt-9 opacity-0 ${isSplit ? "" : "justify-center"}`}>
              {ctas.map((cta) => (
                <Link key={cta.href + cta.label} to={cta.href}>
                  <Button
                    variant={cta.variant === "outline" ? "outline" : "default"}
                    className="px-8 py-3.5 h-auto"
                  >
                    <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-base tracking-[0]">
                      {cta.label}
                    </span>
                  </Button>
                </Link>
              ))}
            </div>
          )}

          {children && (
            <div data-ph-item className="opacity-0 mt-9 w-full">
              {children}
            </div>
          )}
        </div>

        {isSplit && (
          <div data-ph-visual className="opacity-0">
            {visual}
          </div>
        )}
      </div>
    </section>
  );
};
