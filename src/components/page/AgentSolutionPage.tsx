import { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../layout/PageLayout";
import { AgentIdentity } from "../../lib/agentIdentity";
import { gsap } from "../../lib/gsap";
import { useGsap } from "../scroll/useGsap";
import { introDone } from "../../lib/intro";
import {
  AuroraNumeral,
  GlassCard,
  PageCTA,
  PlateBand,
  QuoteBlock,
  SectionHeader,
  Stat,
  StatBand,
} from "./primitives";

interface Feature {
  title: string;
  body: string;
}

interface Cta {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

export interface ScaleStop {
  label: string;
  value: string;
  /** Position along the scale, 0 (top) - 100 (bottom). */
  pos: number;
}

/**
 * A measurement instrument overlaid on the agent's world (the oryzo
 * pattern): a calibrated vertical scale whose stops are the agent's real
 * outputs, plus a small scientific annotation with the model formula.
 */
export interface Instrument {
  title: string;
  stops: ScaleStop[];
  formulaTitle: string;
  formula: string;
  disclaimer: string;
}

interface AgentSolutionPageProps {
  identity: AgentIdentity;
  heroTitle: ReactNode;
  heroLede: ReactNode;
  /** Kept for API compatibility; the hero now uses the agent's world plate. */
  heroVideo?: string;
  ctas: Cta[];
  instrument: Instrument;
  outcomes: Stat[];
  featuresKicker: string;
  featuresTitle: ReactNode;
  features: Feature[];
  worldTitle: ReactNode;
  worldBody: string;
  /** Optional page-specific section rendered between the world plate and the quote. */
  extra?: ReactNode;
  quote: string;
  quoteAttribution: string;
  ctaTitle: ReactNode;
  ctaSub: string;
  ctaLabel: string;
}

/**
 * AgentHero - the agent's chapter opener, in the Home panels' language:
 * its generated world fills the frame behind the copy, the aurora-traced
 * numeral burns over it, and a compact HUD console floats right. Ignites
 * on load; pans and dims away with scroll (scrubbed, reversible).
 */
const AgentHero = ({
  id,
  title,
  lede,
  ctas,
  instrument,
}: {
  id: AgentIdentity;
  title: ReactNode;
  lede: ReactNode;
  ctas: Cta[];
  instrument: Instrument;
}): JSX.Element => {
  const scope = useGsap<HTMLElement>((ctx) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("[data-ah-plate], [data-ah-item], [data-ah-scale], [data-ah-tick], [data-ah-stop], [data-ah-formula]", { opacity: 1 });
      return;
    }
    let cancelled = false;

    // Ignition: the world fades up, copy rises, the console assembles
    introDone().then(() => {
      if (cancelled) return;
      ctx.add(() => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo("[data-ah-plate]", { opacity: 0, scale: 1.07 }, { opacity: 1, scale: 1, duration: 2.1, ease: "power2.out" }, 0)
          .fromTo("[data-ah-item]", { opacity: 0, y: 42 }, { opacity: 1, y: 0, duration: 1.05, stagger: 0.1 }, 0.3)
          .fromTo(
            "[data-ah-scale]",
            { scaleY: 0 },
            { scaleY: 1, duration: 1.4, ease: "power3.inOut", transformOrigin: "top center" },
            0.7,
          )
          .fromTo("[data-ah-tick]", { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: 0.015 }, 1.0)
          .fromTo("[data-ah-stop]", { opacity: 0, x: -18 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.16 }, 1.3)
          .fromTo("[data-ah-formula]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9 }, 1.7);
      });
    });

    // Scroll-out, scrubbed both directions: the world sinks, the copy lifts.
    // Explicit fromTo + immediateRender:false - a plain .to() snapshots its
    // start value on first render, which here happens mid-ignition (opacity
    // still 0), so scrolling back up would restore an invisible hero.
    gsap.fromTo(
      "[data-ah-plate]",
      { yPercent: 0, scale: 1, opacity: 1 },
      {
        yPercent: 10,
        scale: 1.05,
        opacity: 0.45,
        ease: "none",
        immediateRender: false,
        scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: 0.4 },
      },
    );
    gsap.fromTo(
      "[data-ah-copy]",
      { yPercent: 0, opacity: 1 },
      {
        yPercent: -10,
        opacity: 0.12,
        ease: "none",
        immediateRender: false,
        scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: 0.4 },
      },
    );

    return () => {
      cancelled = true;
    };
  });

  return (
    <section
      ref={scope}
      data-no-reveal
      className="relative overflow-hidden -mt-24 lg:-mt-32 pt-36 lg:pt-44 pb-16 lg:pb-24 min-h-[92vh] flex items-center"
    >
      {/* The agent's world - same plate as its Home panel, full-bleed */}
      <div data-ah-plate className="absolute inset-0 opacity-0 pointer-events-none" aria-hidden="true">
        <img src={id.plate} alt="" className="w-full h-full object-cover object-right opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060010] via-[#060010]/75 to-[#060010]/25" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#060010] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060010] to-transparent" />
        <div
          className="absolute right-[-10%] top-[10%] w-[55%] h-[80%] opacity-50"
          style={{ background: `radial-gradient(ellipse at center, ${id.accent}1f 0%, transparent 68%)`, filter: "blur(40px)" }}
        />
      </div>

      {/* Aurora-traced numeral over the world */}
      <AuroraNumeral
        index={id.index}
        accent={id.accent}
        accentSoft={id.accentSoft}
        className="hidden lg:block absolute right-[1%] top-[12%] w-[26rem] h-auto"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Copy column */}
        <div data-ah-copy className="lg:col-span-6">
          <p
            data-ah-item
            className="opacity-0 [font-family:'Satoshi-Medium',Helvetica] font-medium text-xs uppercase tracking-[0.28em] mb-6 flex items-center gap-3"
            style={{ color: id.accent, textShadow: `0 0 18px ${id.accent}59` }}
          >
            <span className="block h-px w-9" style={{ background: `linear-gradient(90deg, ${id.accent}, transparent)` }} />
            {id.label}
          </p>
          <h1
            data-ah-item
            className="opacity-0 [font-family:'Satoshi-Bold',Helvetica] font-bold text-gradient-silver text-4xl md:text-5xl lg:text-[4.4rem] tracking-[-0.03em] leading-[1.04] mb-7 pb-1"
          >
            {title}
          </h1>
          <div
            data-ah-item
            className="opacity-0 [font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-lg leading-relaxed max-w-xl"
          >
            {lede}
          </div>
          <div data-ah-item className="opacity-0 flex flex-wrap gap-4 mt-10">
            {ctas.map((cta) =>
              cta.variant === "outline" ? (
                <Link
                  key={cta.href + cta.label}
                  to={cta.href}
                  className="glass-panel glass-hover inline-flex items-center justify-center rounded-full px-8 py-3.5 [font-family:'Satoshi-Medium',Helvetica] text-white text-base"
                  style={{ "--glass-accent": id.accentRgb } as CSSProperties}
                >
                  {cta.label}
                </Link>
              ) : (
                <Link
                  key={cta.href + cta.label}
                  to={cta.href}
                  className="inline-flex items-center justify-center rounded-full px-9 py-3.5 [font-family:'Satoshi-Bold',Helvetica] font-bold text-base hover:-translate-y-px transition-all duration-300"
                  style={{
                    background: id.accent,
                    color: id.ink,
                    boxShadow: `0 12px 44px -12px ${id.accent}aa`,
                  }}
                >
                  {cta.label} →
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Measurement instrument - the agent's outputs as calibration
            stops on a vertical scale, printed directly on the world */}
        <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 xl:col-start-8 justify-end pr-2">
          <div className="flex items-stretch gap-6 h-[54vh] min-h-[380px]">
            {/* Stop labels, left of the bar */}
            <div className="relative w-64">
              <p className="absolute -top-12 right-0 [font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.3em] text-white/40 text-right whitespace-nowrap">
                {instrument.title}
              </p>
              {instrument.stops.map((stop) => (
                <div
                  key={stop.label}
                  data-ah-stop
                  className="opacity-0 absolute right-0 text-right -translate-y-1/2"
                  style={{ top: `${stop.pos}%` }}
                >
                  <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm uppercase tracking-[0.12em] leading-tight">
                    {stop.label}
                  </p>
                  <p className="[font-family:'Satoshi-Medium',Helvetica] text-xs tabular-nums mt-0.5" style={{ color: id.accentSoft }}>
                    {stop.value}
                  </p>
                </div>
              ))}
            </div>

            {/* The calibrated scale */}
            <div className="relative w-10">
              {/* Gradient bar */}
              <div
                data-ah-scale
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full"
                style={{
                  background: `linear-gradient(180deg, ${id.accentSoft} 0%, ${id.accent} 45%, ${id.accent}22 100%)`,
                  boxShadow: `0 0 18px ${id.accent}55`,
                }}
              />
              {/* Calibration ticks */}
              {Array.from({ length: 25 }, (_, i) => (
                <span
                  key={i}
                  data-ah-tick
                  className="opacity-0 absolute left-1/2 h-px bg-white/25"
                  style={{ top: `${(i / 24) * 100}%`, width: i % 4 === 0 ? "14px" : "8px" }}
                />
              ))}
              {/* Stop markers */}
              {instrument.stops.map((stop) => (
                <span
                  key={stop.label}
                  data-ah-stop
                  className="opacity-0 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2"
                  style={{
                    top: `${stop.pos}%`,
                    borderColor: id.accentSoft,
                    background: "#08020e",
                    boxShadow: `0 0 12px 2px ${id.accent}66`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scientific annotation - the model behind the scene */}
      <div
        data-ah-formula
        className="opacity-0 hidden lg:block absolute bottom-8 right-8 xl:right-16 text-right z-10"
        aria-hidden="true"
      >
        <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white/85 text-[11px] uppercase tracking-[0.18em]">
          {instrument.formulaTitle}
        </p>
        <p className="[font-family:'Satoshi-Regular',Helvetica] italic text-white/40 text-[10px] mt-0.5">
          {instrument.disclaimer}
        </p>
        <p className="[font-family:'Satoshi-Medium',Helvetica] text-base tabular-nums mt-2" style={{ color: `${id.accentSoft}dd` }}>
          {instrument.formula}
        </p>
      </div>
    </section>
  );
};

/**
 * AgentSolutionPage - the shared cinematic template for the four agent
 * pages. Each page supplies content + its identity (accent, plate); the
 * template renders the Home design language: the agent's world as the hero,
 * scroll-counted outcomes, indexed glass capabilities, the world plate band,
 * a printed quote, and the standardized closing gate.
 */
export const AgentSolutionPage = ({
  identity: id,
  heroTitle,
  heroLede,
  ctas,
  instrument,
  outcomes,
  featuresKicker,
  featuresTitle,
  features,
  worldTitle,
  worldBody,
  extra,
  quote,
  quoteAttribution,
  ctaTitle,
  ctaSub,
  ctaLabel,
}: AgentSolutionPageProps): JSX.Element => (
  <PageLayout>
    <AgentHero id={id} title={heroTitle} lede={heroLede} ctas={ctas} instrument={instrument} />

    {/* Outcomes - the numbers count with the scrollbar */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-20 pt-4">
      <div className="max-w-7xl mx-auto">
        <StatBand stats={outcomes} accent={id.accent} accentRgb={id.accentRgb} />
      </div>
    </section>

    {/* Capabilities */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker={featuresKicker} title={featuresTitle} accent={id.accent} className="mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <GlassCard
              key={f.title}
              title={f.title}
              body={f.body}
              index={`0${i + 1}`}
              accent={id.accent}
              accentRgb={id.accentRgb}
              order={i % 3}
            />
          ))}
        </div>
      </div>
    </section>

    {/* The agent's world - same generated plate as its Home panel */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto">
        <PlateBand image={id.plate} accent={id.accent}>
          <div className="max-w-xl">
            <p
              className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-xs uppercase tracking-[0.25em] mb-4"
              style={{ color: id.accent }}
            >
              {id.index} · Inside the platform
            </p>
            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.1] mb-5">
              {worldTitle}
            </h3>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/65 text-base lg:text-lg leading-relaxed">
              {worldBody}
            </p>
          </div>
        </PlateBand>
      </div>
    </section>

    {extra}

    {/* Proof */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-8">
      <QuoteBlock quote={quote} attribution={quoteAttribution} accent={id.accent} accentRgb={id.accentRgb} />
    </section>

    <PageCTA
      title={ctaTitle}
      sub={ctaSub}
      primary={{ label: ctaLabel, href: "/demo" }}
      secondary={{ label: "How Cortex powers it", href: "/technology/ai-platform" }}
      chips={["Air-gapped by design", "In-Kingdom residency", "Production in 90 days"]}
      accent={id.accent}
      accentRgb={id.accentRgb}
    />
  </PageLayout>
);
