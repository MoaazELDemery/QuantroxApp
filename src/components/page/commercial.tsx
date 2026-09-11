import { CSSProperties, ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { AgentIdentity } from "../../lib/agentIdentity";
import { Reveal, SectionHeader } from "./primitives";

/**
 * Shared commercial sections for agent pages - the value simulator and the
 * pricing tiers. Each agent supplies its identity, copy, slider set and
 * compute function; the sections render them in the Home design language.
 */

export const money = (n: number): string => `$${Math.round(n).toLocaleString("en-US")}`;

export const PlaceholderNote = ({ children, className = "" }: { children: string; className?: string }): JSX.Element => (
  <Reveal className={className}>
    <p
      className="inline-block border border-dashed rounded-lg px-4 py-2.5 [font-family:'Satoshi-Medium',Helvetica] text-xs tracking-wide"
      style={{ borderColor: "#f59e0b66", color: "#f5b04b" }}
    >
      {children}
    </p>
  </Reveal>
);

export const GroupLabel = ({ children }: { children: string }): JSX.Element => (
  <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[11px] uppercase tracking-[0.28em] text-white/40 mb-2">
    {children}
  </p>
);

/* ── Value simulator ────────────────────────────────────────────────────── */

export interface SimSlider {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  note?: string;
}

export interface SimLedgerLine {
  label: string;
  amount: number;
}

export interface SimComputation {
  pay: SimLedgerLine[];
  returns: SimLedgerLine[];
  /** Line under the annual figure, e.g. "1,344 specialist hours back every month". */
  annualNote: string;
}

export interface ValueSimulatorProps {
  identity: AgentIdentity;
  kicker?: string;
  title: ReactNode;
  lede: string;
  placeholderNote: string;
  volumeSliders: SimSlider[];
  economicsSliders: SimSlider[];
  defaults: Record<string, number>;
  compute: (v: Record<string, number>) => SimComputation;
  ratesNote: ReactNode;
  footnote: string;
  cta: { label: string; href: string };
}

export const SliderRow = ({
  agentKey,
  accent,
  slider,
  value,
  onChange,
}: {
  agentKey: string;
  accent: string;
  slider: SimSlider;
  value: number;
  onChange: (v: number) => void;
}): JSX.Element => (
  <div className="py-5 border-t border-white/10 first:border-t-0">
    <div className="flex items-baseline justify-between gap-4 mb-3">
      <label
        htmlFor={`${agentKey}-sim-${slider.key}`}
        className="[font-family:'Satoshi-Regular',Helvetica] text-white/75 text-sm leading-snug"
      >
        {slider.label}
      </label>
      <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tabular-nums shrink-0">
        {slider.format(value)}
      </span>
    </div>
    <input
      id={`${agentKey}-sim-${slider.key}`}
      type="range"
      min={slider.min}
      max={slider.max}
      step={slider.step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="qx-range"
      style={{ "--qx-range-accent": accent } as CSSProperties}
      aria-label={slider.label}
    />
    {slider.note && (
      <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-xs mt-2">{slider.note}</p>
    )}
  </div>
);

const LedgerRow = ({
  label,
  value,
  accent,
  strong,
}: {
  label: string;
  value: string;
  accent: string;
  strong?: boolean;
}): JSX.Element => (
  <div className="flex items-baseline justify-between gap-4 py-3 border-t border-white/10 first:border-t-0">
    <span className={`[font-family:'Satoshi-Regular',Helvetica] text-sm ${strong ? "text-white" : "text-white/65"}`}>
      {label}
    </span>
    <span
      className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-sm tabular-nums"
      style={{ color: strong ? accent : "rgba(255,255,255,0.9)" }}
    >
      {value}
    </span>
  </div>
);

/**
 * SimResultsPanel - the live cost/value ledger: net value, what you pay,
 * what it returns, cost-vs-value bars, the annual figure and the CTA.
 * Totals, ratio and annual are derived from the line amounts.
 */
export const SimResultsPanel = ({
  identity: id,
  pay,
  returns,
  annualNote,
  cta,
}: {
  identity: AgentIdentity;
  pay: SimLedgerLine[];
  returns: SimLedgerLine[];
  annualNote: string;
  cta: { label: string; href: string };
}): JSX.Element => {
  const totalCost = pay.reduce((sum, line) => sum + line.amount, 0);
  const totalValue = returns.reduce((sum, line) => sum + line.amount, 0);
  const net = totalValue - totalCost;
  const ratio = totalCost > 0 ? totalValue / totalCost : 0;
  const barMax = Math.max(totalCost, totalValue, 1);
  const annual = net * 12;

  return (
    <div className="glass-panel rounded-[22px] overflow-hidden" style={{ "--glass-accent": id.accentRgb } as CSSProperties}>
      <div className="relative p-6 lg:p-8 border-b border-white/10 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-12 h-28 opacity-60"
          style={{ background: `radial-gradient(ellipse at 50% 100%, ${id.accent}26 0%, transparent 70%)`, filter: "blur(18px)" }}
          aria-hidden="true"
        />
        <GroupLabel>Net value per month</GroupLabel>
        <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl lg:text-5xl tracking-[-0.03em] tabular-nums">
          {money(net)}
        </p>
        <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/55 text-sm mt-2">
          ${ratio.toFixed(1)} returned for every $1 spent
        </p>
      </div>

      <div className="p-6 lg:p-8 border-b border-white/10">
        <GroupLabel>What you pay</GroupLabel>
        {pay.map((line) => (
          <LedgerRow key={line.label} label={line.label} value={money(line.amount)} accent={id.accent} />
        ))}
        <LedgerRow label="Total monthly cost" value={money(totalCost)} accent={id.accent} strong />
      </div>

      <div className="p-6 lg:p-8 border-b border-white/10">
        <GroupLabel>What it returns</GroupLabel>
        {returns.map((line) => (
          <LedgerRow key={line.label} label={line.label} value={money(line.amount)} accent={id.accent} />
        ))}
        <LedgerRow label="Total monthly value" value={money(totalValue)} accent={id.accent} strong />
      </div>

      {/* Cost vs value bars */}
      <div className="p-6 lg:p-8 border-b border-white/10 space-y-4">
        {[
          { label: "Cost", amount: totalCost, color: "rgba(255,255,255,0.25)", glow: false },
          { label: "Value returned", amount: totalValue, color: id.accent, glow: true },
        ].map((bar) => (
          <div key={bar.label}>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="[font-family:'Satoshi-Medium',Helvetica] text-white/55 text-xs uppercase tracking-[0.18em]">
                {bar.label}
              </span>
              <span className="[font-family:'Satoshi-Medium',Helvetica] text-white/70 text-xs tabular-nums">
                {money(bar.amount)}
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.max(2, (bar.amount / barMax) * 100)}%`,
                  background: bar.color,
                  boxShadow: bar.glow ? `0 0 12px ${id.accent}66` : undefined,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 lg:p-8">
        <p
          className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-3xl tracking-[-0.02em] tabular-nums"
          style={{ color: id.accent, textShadow: `0 0 24px ${id.accent}59` }}
        >
          {annual >= 1000000 ? `$${(annual / 1000000).toFixed(2)}M a year` : `${money(annual)} a year`}
        </p>
        <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/55 text-sm leading-relaxed mt-2">
          {annualNote}
        </p>
        <Link
          to={cta.href}
          className="mt-7 w-full inline-flex items-center justify-center rounded-full px-8 py-3.5 [font-family:'Satoshi-Bold',Helvetica] font-bold text-base hover:-translate-y-px transition-all duration-300"
          style={{ background: id.accent, color: id.ink, boxShadow: `0 12px 44px -12px ${id.accent}aa` }}
        >
          {cta.label} →
        </Link>
      </div>
    </div>
  );
};

export const ValueSimulatorSection = ({
  identity: id,
  kicker = "Value Simulator",
  title,
  lede,
  placeholderNote,
  volumeSliders,
  economicsSliders,
  defaults,
  compute,
  ratesNote,
  footnote,
  cta,
}: ValueSimulatorProps): JSX.Element => {
  const [values, setValues] = useState(defaults);
  const setValue = (key: string) => (v: number) => setValues((prev) => ({ ...prev, [key]: v }));

  const { pay, returns, annualNote } = compute(values);

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker={kicker} title={title} lede={lede} accent={id.accent} className="mb-8" />
        <PlaceholderNote className="mb-10">{placeholderNote}</PlaceholderNote>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {/* Inputs */}
          <Reveal>
            <div className="glass-panel rounded-[22px] p-6 lg:p-8" style={{ "--glass-accent": id.accentRgb } as CSSProperties}>
              <GroupLabel>Your volume</GroupLabel>
              {volumeSliders.map((s) => (
                <SliderRow key={s.key} agentKey={id.key} accent={id.accent} slider={s} value={values[s.key]} onChange={setValue(s.key)} />
              ))}
              <div className="mt-6">
                <GroupLabel>Your economics</GroupLabel>
              </div>
              {economicsSliders.map((s) => (
                <SliderRow key={s.key} agentKey={id.key} accent={id.accent} slider={s} value={values[s.key]} onChange={setValue(s.key)} />
              ))}
              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-xs leading-relaxed mt-6 pt-5 border-t border-white/10">
                {ratesNote}
              </p>
            </div>
          </Reveal>

          {/* Results ledger */}
          <Reveal order={2}>
            <SimResultsPanel identity={id} pay={pay} returns={returns} annualNote={annualNote} cta={cta} />
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-sm leading-relaxed max-w-xl">
            {footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ── Pricing tiers ──────────────────────────────────────────────────────── */

export interface PricingTier {
  name: string;
  badge?: string;
  blurb: string;
  price: string;
  priceMeta?: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

export interface PricingSectionProps {
  identity: AgentIdentity;
  kicker?: string;
  title: ReactNode;
  lede: string;
  placeholderNote: string;
  /** Optional content rendered between the note and the tier cards. */
  explainer?: ReactNode;
  tiers: PricingTier[];
}

export const PricingSection = ({
  identity: id,
  kicker = "Pricing",
  title,
  lede,
  placeholderNote,
  explainer,
  tiers,
}: PricingSectionProps): JSX.Element => (
  <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
    <div className="max-w-7xl mx-auto">
      <SectionHeader kicker={kicker} title={title} lede={lede} accent={id.accent} className="mb-8" />
      <PlaceholderNote className="mb-10">{placeholderNote}</PlaceholderNote>

      {explainer}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {tiers.map((tier, i) => (
          <Reveal key={tier.name} order={i * 2} className="h-full">
            <div
              className="glass-panel glass-hover relative flex flex-col h-full rounded-[22px] p-6 lg:p-7 overflow-hidden"
              style={{
                "--glass-accent": id.accentRgb,
                ...(tier.featured
                  ? {
                      borderColor: `${id.accent}80`,
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 48px -14px ${id.accent}40`,
                    }
                  : {}),
              } as CSSProperties}
            >
              {tier.featured && (
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${id.accent}, transparent)` }}
                  aria-hidden="true"
                />
              )}
              <div className="flex items-center gap-3 mb-3">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl">{tier.name}</h3>
                {tier.badge && (
                  <span
                    className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.2em] rounded-full px-3 py-1"
                    style={{ background: `${id.accent}26`, color: id.accentSoft }}
                  >
                    {tier.badge}
                  </span>
                )}
              </div>
              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/60 text-sm leading-relaxed mb-6">
                {tier.blurb}
              </p>
              <p className="mb-6 pb-6 border-b border-white/10">
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl tracking-[-0.02em] tabular-nums">
                  {tier.price}
                </span>
                {tier.priceMeta && (
                  <span className="[font-family:'Satoshi-Regular',Helvetica] text-white/45 text-sm ml-2">
                    {tier.priceMeta}
                  </span>
                )}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: id.accent, boxShadow: `0 0 8px 1px ${id.accent}66` }}
                      aria-hidden="true"
                    />
                    <span className="[font-family:'Satoshi-Regular',Helvetica] text-white/70 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                {tier.featured ? (
                  <Link
                    to={tier.cta.href}
                    className="w-full inline-flex items-center justify-center rounded-full px-7 py-3.5 [font-family:'Satoshi-Bold',Helvetica] font-bold text-base hover:-translate-y-px transition-all duration-300"
                    style={{ background: id.accent, color: id.ink, boxShadow: `0 12px 44px -12px ${id.accent}aa` }}
                  >
                    {tier.cta.label} →
                  </Link>
                ) : (
                  <Link
                    to={tier.cta.href}
                    className="glass-panel glass-hover w-full inline-flex items-center justify-center rounded-full px-7 py-3.5 [font-family:'Satoshi-Medium',Helvetica] text-white text-base"
                    style={{ "--glass-accent": id.accentRgb } as CSSProperties}
                  >
                    {tier.cta.label}
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
