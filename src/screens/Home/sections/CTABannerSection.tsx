import { useRef } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Building2, Waypoints } from "lucide-react";
import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { useGsap } from "../../../components/scroll/useGsap";
import { ScrubVideo } from "../../../components/scroll/ScrubVideo";

const deploymentModels = [
  { title: "Air-Gapped", subtitle: "Fully isolated infrastructure", Icon: ShieldCheck },
  { title: "On-Premise", subtitle: "Your own data center", Icon: Building2 },
  { title: "Hybrid", subtitle: "Best of both worlds", Icon: Waypoints },
];

export const CTABannerSection = (): JSX.Element => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const scope = useGsap<HTMLDivElement>(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("[data-hood-copy] > *, [data-hood-card], [data-cta-inner] > *", { opacity: 1 });
      return;
    }

    gsap.from("[data-hood-copy] > *", {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: { trigger: "[data-hood-copy]", start: "top 92%", end: "top 55%", scrub: 0.4 },
    });

    // Each bento cell rides its own scrubbed entry band - fully scroll-owned
    gsap.utils.toArray<HTMLElement>("[data-hood-card]").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 98%", end: "top 68%", scrub: 0.4 },
        },
      );
    });

    gsap.fromTo(
      "[data-cta-banner]",
      { y: 80, scale: 0.96 },
      {
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: { trigger: "[data-cta-banner]", start: "top 95%", end: "top 50%", scrub: 0.5 },
      },
    );

    gsap.fromTo(
      "[data-cta-cube] > video",
      { yPercent: 8, scale: 1.12 },
      {
        yPercent: -8,
        scale: 1.12,
        ease: "none",
        scrollTrigger: { trigger: "[data-cta-banner]", start: "top bottom", end: "bottom top", scrub: 0.7 },
      },
    );

    gsap.from("[data-cta-inner] > *", {
      opacity: 0,
      y: 36,
      duration: 1,
      stagger: 0.13,
      ease: "power2.out",
      scrollTrigger: { trigger: "[data-cta-banner]", start: "top 85%", end: "top 40%", scrub: 0.4 },
    });
  });

  return (
    <div ref={scope} className="bg-[#060010]">
      {/* Under the Hood - bento grid */}
      <section data-chapter="deploy" className="relative w-full py-24 lg:py-32">
        <div className="glow-rule absolute top-0 inset-x-[10%]" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div data-hood-copy className="max-w-3xl mb-14">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-5">
              05 · Under the Hood
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-gradient-silver text-4xl sm:text-5xl tracking-[-0.02em] leading-[1.08] mb-5 pb-1">
              What Cortex does when you're not looking.
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-lg leading-relaxed">
              Cortex continuously maps your operational complexity, trains agent capabilities against
              your data, monitors real-time telemetry, and routes every decision through governance:
              autonomously, inside your infrastructure.
            </p>
          </div>

          <div data-hood-cards className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 [grid-auto-rows:minmax(150px,auto)]">
            {/* Film cell - the vault */}
            <div
              data-hood-card
              className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden border border-white/10 group"
            >
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]"
                src="/videos/data-vault.mp4"
                poster="/videos/data-vault-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08040F]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-1">Cognitive Flux Mapping™</p>
                <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/60 text-sm">
                  Your operations, mapped into a living decision graph.
                </p>
              </div>
            </div>

            {/* Telemetry stat cell */}
            <div data-hood-card className="gradient-border col-span-2 lg:col-span-2 rounded-3xl p-6 flex flex-col justify-between">
              <p className="[font-family:'Satoshi-Medium',Helvetica] text-[#9b5cf6] text-[10px] uppercase tracking-[0.25em]">Realtime Telemetry</p>
              <div>
                <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl lg:text-5xl tracking-[-0.03em]">
                  24/7 <span className="text-[#a679ff] [text-shadow:0_0_30px_rgba(155,92,246,0.5)]">·</span> 0ms egress
                </p>
                <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/50 text-sm mt-2">
                  Every agent action monitored and logged - nothing ever leaves.
                </p>
              </div>
            </div>

            {/* Governance cell */}
            <div data-hood-card className="col-span-2 lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#9b5cf6]/35 transition-colors duration-300">
              <p className="[font-family:'Satoshi-Medium',Helvetica] text-[#9b5cf6] text-[10px] uppercase tracking-[0.25em]">Governance Routing</p>
              <div>
                <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-1.5">Policy-enforced decisions</p>
                <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/50 text-sm">
                  Auditable and defensible to regulators - no black boxes, no unilateral behaviour.
                </p>
              </div>
            </div>

            {/* Deployment model cells - editorial register (small caps label,
                ghost stroke numeral) with the icon printed as an oversized
                blueprint glyph bleeding off the corner, not a badge chip */}
            {deploymentModels.map((m, i) => (
              <div
                key={m.title}
                data-hood-card
                className="group/deploy relative col-span-1 lg:col-span-1 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 overflow-hidden flex flex-col justify-between hover:border-[#9b5cf6]/35 hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(124,58,237,0.4)] transition-all duration-300"
              >
                {/* Corner halo - breathing accent bloom under the glyph */}
                <span
                  className="pointer-events-none absolute -bottom-10 -right-8 w-36 h-36 rounded-full animate-glow-breathe"
                  style={{
                    background: "radial-gradient(circle at center, rgba(155,92,246,0.3) 0%, transparent 70%)",
                    filter: "blur(22px)",
                    animationDelay: `${i * 1.3}s`,
                  }}
                  aria-hidden="true"
                />
                {/* Blueprint glyph - thin-stroked, cropped by the card edge;
                    it drifts on a slow float while its neon halo breathes
                    (staggered per cell so the row never pulses in unison) */}
                <span
                  className="pointer-events-none absolute -bottom-6 -right-5 qx-glyph-drift"
                  style={{ animationDelay: `${i * 1.1}s` }}
                  aria-hidden="true"
                >
                  <m.Icon
                    className="w-28 h-28 text-[#9b5cf6] opacity-[0.16] group-hover/deploy:opacity-40 transition-opacity duration-500 qx-glyph-glow"
                    strokeWidth={0.8}
                    style={{ animationDelay: `${i * 0.9}s` }}
                  />
                </span>
                <div className="flex items-start justify-between">
                  <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-[10px] uppercase tracking-[0.25em]">
                    Deployment
                  </p>
                  <span
                    className="pointer-events-none select-none [font-family:'Satoshi-Black',Helvetica] font-black text-2xl leading-none text-transparent -mt-1"
                    style={{ WebkitTextStroke: "1px rgba(155,92,246,0.35)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative">
                  <h5 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base mb-1 tracking-[-0.01em]">{m.title}</h5>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/45 text-xs leading-relaxed">{m.subtitle}</p>
                </div>
              </div>
            ))}

            {/* Architecture link cell */}
            <div data-hood-card className="col-span-1 lg:col-span-1 rounded-3xl border border-dashed border-white/15 p-5 flex items-center justify-center hover:border-[#9b5cf6]/50 transition-colors duration-300">
              <Link
                to="/technology"
                className="[font-family:'Satoshi-Medium',Helvetica] text-white/70 text-sm text-center hover:text-white transition-colors"
              >
                See the full architecture →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA card - the final gate: obsidian glass, the brand film burning
          through the right half, and a schematic frame around the ask. */}
      <section className="w-full px-4 sm:px-8 lg:px-16 pb-24 lg:pb-32">
        <div
          ref={bannerRef}
          data-cta-banner
          className="glass-panel relative max-w-6xl mx-auto rounded-[40px] overflow-hidden py-20 lg:py-24 px-6 sm:px-12 lg:px-16 shadow-[0_0_90px_-20px_rgba(124,58,237,0.5),0_40px_120px_-40px_rgba(8,2,20,0.9)]"
        >
          {/* Deep gradient bed under the glass */}
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(120deg, #1c0736 0%, #0d0220 55%, #14042a 100%)" }}
            aria-hidden="true"
          />

          {/* The film: cube macro burning in the right half, masked into the
              dark - it holds frame 0 until the card is well inside the
              viewport, then its playhead rides the scroll and completes as
              the card becomes fully visible. No loop. */}
          <div data-cta-cube className="absolute inset-y-0 right-0 w-[62%] pointer-events-none" aria-hidden="true">
            <ScrubVideo
              src="/videos/cta-morph-scrub.mp4"
              triggerRef={bannerRef}
              start="top 75%"
              end="bottom 35%"
              scrub={0.5}
              className="w-full h-full object-cover opacity-70"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 45%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 45%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0220]/80 via-transparent to-[#0d0220]/40" />
          </div>

          {/* Aurora bloom + hairline frame */}
          <div
            className="absolute -top-40 -right-24 w-[560px] h-[560px] rounded-full opacity-40 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(217,70,239,0.3) 0%, transparent 70%)", filter: "blur(30px)" }}
            aria-hidden="true"
          />
          <div className="absolute top-0 inset-x-[8%] h-px bg-gradient-to-r from-transparent via-[#c4a8ff]/50 to-transparent" aria-hidden="true" />

          {/* Schematic corner ticks */}
          <div className="hidden lg:block absolute inset-6 pointer-events-none" aria-hidden="true">
            {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((pos) => (
              <span key={pos} className={`absolute w-4 h-4 border-white/25 ${pos}`} />
            ))}
          </div>

          <div data-cta-inner className="relative max-w-3xl text-left">
            <p className="inline-flex items-center gap-2.5 glass-panel rounded-full px-4 py-2 [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#e9d5ff] text-[11px] uppercase tracking-[0.25em] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a8ff] animate-pulse" />
              Start the Conversation
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] mb-5">
              One conversation. One prototype.
              <br />
              <span className="text-[#a679ff] [text-shadow:0_0_40px_rgba(155,92,246,0.45)]">Fully sovereign.</span>
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-lg mb-10 max-w-xl">
              See how Cortex maps your most complex workflow - inside your infrastructure, on your terms.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center bg-white text-[#17091F] rounded-full px-10 py-4 [font-family:'Satoshi-Bold',Helvetica] font-bold text-base hover:bg-white/90 hover:-translate-y-px hover:shadow-[0_12px_40px_-10px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                Book a Cortex Demo →
              </Link>
              <Link
                to="/technology/ai-platform"
                className="glass-panel glass-hover inline-flex items-center justify-center rounded-full px-8 py-4 [font-family:'Satoshi-Medium',Helvetica] text-white text-base"
              >
                Explore Cortex
              </Link>
            </div>
            {/* Deployment assurances, printed on glass */}
            <div className="flex flex-wrap items-center gap-3">
              {["Air-gapped by design", "In-Kingdom residency", "Production in 90 days"].map((chip) => (
                <span
                  key={chip}
                  className="glass-panel rounded-full px-4 py-2 [font-family:'Satoshi-Medium',Helvetica] text-white/60 text-xs tracking-wide"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
