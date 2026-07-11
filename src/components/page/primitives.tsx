import { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../lib/gsap";
import { useGsap } from "../scroll/useGsap";

/**
 * Shared subpage primitives - the Home design language, packaged.
 *
 * Every reveal here is SCRUBBED to an entry band (never toggled): elements
 * assemble as they scroll in and disassemble the moment the visitor scrolls
 * up. Accent colors ride CSS custom props so any block can wear an agent's
 * identity.
 */

const VIOLET = "#9b5cf6";

const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Reveal - scrub-banded reveal wrapper for inner content ─────────────── */

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Shifts the entry band down slightly - use index*2 for grid cascades. */
  order?: number;
  y?: number;
  style?: CSSProperties;
}

export const Reveal = ({ children, className, order = 0, y = 36, style }: RevealProps): JSX.Element => {
  const ref = useGsap<HTMLDivElement>(() => {
    if (reduced()) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: `top ${Math.max(70, 97 - order * 2)}%`,
          end: `top ${Math.max(48, 70 - order * 2)}%`,
          scrub: 0.4,
        },
      },
    );
  });
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

/* ── SectionHeader - kicker + silver headline + optional lede ───────────── */

interface SectionHeaderProps {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  accent?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  kicker,
  title,
  lede,
  accent = VIOLET,
  align = "left",
  className = "",
}: SectionHeaderProps): JSX.Element => (
  <Reveal className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
    <p
      className={`[font-family:'Satoshi-Medium',Helvetica] font-medium text-xs uppercase tracking-[0.25em] mb-5 flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      }`}
      style={{ color: accent, textShadow: `0 0 18px ${accent}59` }}
    >
      {align === "left" && (
        <span className="block h-px w-8" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
      )}
      {kicker}
    </p>
    <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-gradient-silver text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.08] pb-1">
      {title}
    </h2>
    {lede && (
      <p
        className={`[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-lg leading-relaxed mt-5 max-w-2xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {lede}
      </p>
    )}
  </Reveal>
);

/* ── GlassCard - the standard content card, accent-aware ────────────────── */

interface GlassCardProps {
  title: string;
  body: ReactNode;
  icon?: ReactNode;
  /** Two-digit index rendered as a ghost numeral in the corner. */
  index?: string;
  accent?: string;
  accentRgb?: string;
  order?: number;
  className?: string;
}

export const GlassCard = ({
  title,
  body,
  icon,
  index,
  accent = VIOLET,
  accentRgb = "155, 92, 246",
  order = 0,
  className = "",
}: GlassCardProps): JSX.Element => (
  <Reveal order={order} className="h-full">
    <div
      className={`glass-panel glass-hover group relative overflow-hidden rounded-[22px] p-6 lg:p-7 h-full ${className}`}
      style={{ "--glass-accent": accentRgb } as CSSProperties}
    >
      {index && (
        <span
          className="pointer-events-none select-none absolute -right-1 -top-5 [font-family:'Satoshi-Black',Helvetica] font-black text-[5rem] leading-none opacity-80"
          style={{ WebkitTextStroke: `1px ${accent}38`, color: "transparent" }}
          aria-hidden="true"
        >
          {index}
        </span>
      )}
      {icon && (
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
          style={{ background: `${accent}1f`, color: accent }}
        >
          {icon}
        </div>
      )}
      <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-3">{title}</h3>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-sm leading-relaxed">
        {body}
      </p>
    </div>
  </Reveal>
);

/* ── StatBand - outcome numbers that count with the scrollbar ───────────── */

export interface Stat {
  val: string;
  label: string;
}

interface StatBandProps {
  stats: Stat[];
  accent?: string;
  accentRgb?: string;
  className?: string;
}

/** "40+" → counts 0→40 with scroll; non-numeric values reveal as-is. */
export const StatValue = ({ val, accent }: { val: string; accent: string }): JSX.Element => {
  const m = val.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useGsap<HTMLSpanElement>(() => {
    if (!m || reduced()) return;
    const target = parseFloat(m[2]);
    const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;
    const counter = { v: 0 };
    const num = ref.current?.querySelector<HTMLElement>("[data-stat-num]");
    gsap.to(counter, {
      v: target,
      ease: "power1.out",
      scrollTrigger: { trigger: ref.current, start: "top 95%", end: "top 55%", scrub: 0.4 },
      onUpdate: () => {
        if (num) num.textContent = counter.v.toFixed(decimals);
      },
    });
  });
  if (!m) return <span style={{ color: accent }}>{val}</span>;
  return (
    <span ref={ref} style={{ color: accent }}>
      {m[1]}
      <span data-stat-num>0</span>
      {m[3]}
    </span>
  );
};

const STAT_COLS: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export const StatBand = ({
  stats,
  accent = VIOLET,
  accentRgb = "155, 92, 246",
  className = "",
}: StatBandProps): JSX.Element => (
  <div className={`grid grid-cols-1 ${STAT_COLS[Math.min(stats.length, 4)]} gap-5 ${className}`}>
    {stats.map((s, i) => (
      <Reveal key={s.label} order={i * 2}>
        <div
          className="glass-panel glass-hover relative overflow-hidden rounded-[22px] p-7 text-center h-full"
          style={{ "--glass-accent": accentRgb } as CSSProperties}
        >
          <div
            className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 opacity-60"
            style={{ background: `radial-gradient(ellipse at 50% 100%, ${accent}26 0%, transparent 70%)`, filter: "blur(18px)" }}
            aria-hidden="true"
          />
          <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl lg:text-5xl tracking-[-0.03em] mb-3">
            <StatValue val={s.val} accent={accent} />
          </div>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-sm leading-relaxed">
            {s.label}
          </p>
        </div>
      </Reveal>
    ))}
  </div>
);

/* ── QuoteBlock - testimonial printed on glass ──────────────────────────── */

interface QuoteBlockProps {
  quote: string;
  attribution: string;
  accent?: string;
  accentRgb?: string;
}

export const QuoteBlock = ({
  quote,
  attribution,
  accent = VIOLET,
  accentRgb = "155, 92, 246",
}: QuoteBlockProps): JSX.Element => (
  <Reveal>
    <figure
      className="glass-panel relative overflow-hidden rounded-[28px] px-8 py-10 lg:px-14 lg:py-12 max-w-4xl mx-auto"
      style={{ "--glass-accent": accentRgb } as CSSProperties}
    >
      <span
        className="pointer-events-none select-none absolute -top-7 left-6 [font-family:'Satoshi-Black',Helvetica] font-black text-[9rem] leading-none"
        style={{ color: `${accent}1f` }}
        aria-hidden="true"
      >
        “
      </span>
      <blockquote className="relative [font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/80 text-xl lg:text-2xl">
        {quote}
      </blockquote>
      <figcaption
        className="relative mt-6 [font-family:'Satoshi-Medium',Helvetica] font-medium text-xs uppercase tracking-[0.22em]"
        style={{ color: accent }}
      >
        {attribution}
      </figcaption>
    </figure>
  </Reveal>
);

/* ── PlateBand - a generated world plate behind editorial copy ──────────── */

interface PlateBandProps {
  image: string;
  children: ReactNode;
  accent?: string;
  className?: string;
}

export const PlateBand = ({ image, children, accent = VIOLET, className = "" }: PlateBandProps): JSX.Element => (
  <Reveal>
    <div className={`relative overflow-hidden rounded-[28px] border border-white/10 ${className}`}>
      <img src={image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-right opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08020e] via-[#08020e]/75 to-[#08020e]/20" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
        aria-hidden="true"
      />
      <div className="relative px-8 py-12 lg:px-14 lg:py-16">{children}</div>
    </div>
  </Reveal>
);

/* ── ProductShot - a real product screenshot as an exhibit ───────────────
   laptop:  a MacBook-style shell around a desktop capture
   browser: hairline browser chrome around a landscape capture
   phone:   rounded device shell around a portrait capture
   plain:   the capture as-is (already carries its own device frame)
   card:    a small cropped UI fragment on a hairline card */

export interface ProductShotItem {
  src: string;
  caption?: string;
  variant?: "laptop" | "browser" | "phone" | "plain" | "card";
  alt?: string;
}

interface ProductShotProps extends ProductShotItem {
  accent?: string;
  className?: string;
}

export const ProductShot = ({
  src,
  caption,
  variant = "browser",
  accent = VIOLET,
  alt = "",
  className = "",
}: ProductShotProps): JSX.Element => (
  <Reveal className={className}>
    <figure className="relative">
      {/* Soft accent wash so the capture sits in the page's light */}
      <div
        className="absolute -inset-8 pointer-events-none opacity-70"
        style={{ background: `radial-gradient(60% 60% at 50% 42%, ${accent}12 0%, transparent 70%)`, filter: "blur(28px)" }}
        aria-hidden="true"
      />
      {variant === "laptop" && (
        <div className="relative">
          {/* Display: dark aluminium bezel around the panel */}
          <div className="relative mx-[7%] rounded-t-[14px] rounded-b-[4px] bg-[#101018] p-[1.4%] pb-[1.1%] border border-white/[0.14] border-b-0 shadow-[0_48px_140px_-48px_rgba(8,2,20,0.95)]">
            <div
              className="absolute inset-x-0 top-0 h-px rounded-t-[14px] z-10"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}59, transparent)` }}
              aria-hidden="true"
            />
            <img src={src} alt={alt} loading="lazy" className="w-full h-auto block rounded-[3px]" />
          </div>
          {/* Deck: the body seen edge-on, with the thumb notch */}
          <div className="relative h-[14px] rounded-b-[12px] bg-gradient-to-b from-[#2e2c38] via-[#1b1923] to-[#100e17] border border-white/[0.12] border-t-0 shadow-[0_24px_60px_-24px_rgba(8,2,20,0.9)]">
            <span className="absolute left-1/2 -translate-x-1/2 top-0 w-[12%] h-[5px] rounded-b-[6px] bg-[#0c0a12]" aria-hidden="true" />
          </div>
        </div>
      )}
      {variant === "browser" && (
        <div className="relative rounded-2xl border border-white/[0.12] overflow-hidden bg-[#0b0616] shadow-[0_48px_140px_-48px_rgba(8,2,20,0.95)]">
          <div
            className="absolute inset-x-0 top-0 h-px z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}59, transparent)` }}
            aria-hidden="true"
          />
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            ))}
            <span className="ml-3 h-4 w-44 rounded-full bg-white/[0.05]" />
          </div>
          <img src={src} alt={alt} loading="lazy" className="relative w-full h-auto block" />
        </div>
      )}
      {variant === "phone" && (
        <div className="relative rounded-[2.4rem] border border-white/[0.14] bg-[#0b0616] p-2 shadow-[0_48px_140px_-48px_rgba(8,2,20,0.95)]">
          <img src={src} alt={alt} loading="lazy" className="w-full h-auto block rounded-[1.9rem]" />
        </div>
      )}
      {variant === "plain" && <img src={src} alt={alt} loading="lazy" className="relative w-full h-auto block" />}
      {variant === "card" && (
        <div className="relative rounded-2xl border border-white/[0.12] overflow-hidden shadow-[0_32px_90px_-36px_rgba(8,2,20,0.9)]">
          <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
        </div>
      )}
      {caption && (
        <figcaption className="relative mt-5 flex items-center gap-3 [font-family:'Satoshi-Medium',Helvetica] font-medium text-[11px] uppercase tracking-[0.25em] text-white/45">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: accent, boxShadow: `0 0 10px 2px ${accent}66` }}
            aria-hidden="true"
          />
          {caption}
        </figcaption>
      )}
    </figure>
  </Reveal>
);

/* ── EditorialRows - the anti-card list: indexed rows on hairlines ───────
   oryzo never boxes list content; this renders items as full-width
   editorial rows - ghost index, title, body, optional value - separated by
   hairlines, each scrub-revealed. Pass `href` to make a row a link. */

export interface EditorialRow {
  title: string;
  body?: ReactNode;
  /** Small caps tag above the title (e.g. category). */
  tag?: string;
  /** Right-aligned value / meta (e.g. "+38% ROI", "12 articles"). */
  value?: string;
  href?: string;
}

interface EditorialRowsProps {
  rows: EditorialRow[];
  accent?: string;
  startIndex?: number;
  className?: string;
}

export const EditorialRows = ({
  rows,
  accent = VIOLET,
  startIndex = 1,
  className = "",
}: EditorialRowsProps): JSX.Element => (
  <div className={`border-t border-white/10 ${className}`}>
    {rows.map((row, i) => {
      const inner = (
        <>
          <span
            className="[font-family:'Satoshi-Black',Helvetica] font-black text-2xl lg:text-3xl leading-none w-14 shrink-0 transition-colors duration-300"
            style={{ WebkitTextStroke: `1px ${accent}66`, color: "transparent" }}
            aria-hidden="true"
          >
            {String(startIndex + i).padStart(2, "0")}
          </span>
          <div className="flex-1 min-w-0">
            {row.tag && (
              <p className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.25em] mb-1.5" style={{ color: accent }}>
                {row.tag}
              </p>
            )}
            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl lg:text-2xl tracking-[-0.01em] group-hover:translate-x-1.5 transition-transform duration-300">
              {row.title}
            </h3>
            {row.body && (
              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/55 text-sm lg:text-base leading-relaxed mt-2 max-w-2xl">
                {row.body}
              </p>
            )}
          </div>
          {row.value && (
            <span className="[font-family:'Satoshi-Medium',Helvetica] text-sm tabular-nums shrink-0 mt-1" style={{ color: `${accent}dd` }}>
              {row.value}
            </span>
          )}
          {row.href && (
            <span
              className="shrink-0 mt-1 [font-family:'Satoshi-Medium',Helvetica] text-lg transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:translate-x-1"
              style={{ color: accent }}
              aria-hidden="true"
            >
              →
            </span>
          )}
        </>
      );
      const rowClass =
        "group flex items-start gap-5 lg:gap-8 py-7 lg:py-8 border-b border-white/10 transition-colors duration-300 hover:border-white/25";
      return (
        <Reveal key={`${row.title}-${i}`} order={Math.min(i, 4)}>
          {row.href ? (
            <Link to={row.href} className={rowClass}>
              {inner}
            </Link>
          ) : (
            <div className={rowClass}>{inner}</div>
          )}
        </Reveal>
      );
    })}
  </div>
);

/* ── SpecimenFrame - oryzo's dashed exhibit frame around media ──────────── */

interface SpecimenFrameProps {
  children: ReactNode;
  accent?: string;
  className?: string;
}

export const SpecimenFrame = ({ children, accent = VIOLET, className = "" }: SpecimenFrameProps): JSX.Element => (
  <div className={`relative border border-dashed border-white/25 p-1.5 ${className}`}>
    <span
      className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full z-10"
      style={{ background: accent, boxShadow: `0 0 10px 2px ${accent}66` }}
      aria-hidden="true"
    />
    {children}
  </div>
);

/* ── AuroraNumeral - the Home panels' light-traced numeral, reusable ────── */

interface AuroraNumeralProps {
  index: string;
  accent: string;
  accentSoft: string;
  className?: string;
}

export const AuroraNumeral = ({ index, accent, accentSoft, className = "" }: AuroraNumeralProps): JSX.Element => (
  <svg
    viewBox="0 0 460 360"
    className={`pointer-events-none select-none [font-family:'Satoshi-Black',Helvetica] font-black ${className}`}
    aria-hidden="true"
  >
    <defs>
      <filter id={`qx-ah1-${index}`} x="-45%" y="-45%" width="190%" height="190%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="7" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="30" />
        <feGaussianBlur stdDeviation="11" />
      </filter>
      <filter id={`qx-ah2-${index}`} x="-40%" y="-40%" width="180%" height="180%">
        <feTurbulence type="fractalNoise" baseFrequency="0.016 0.026" numOctaves="2" seed="3" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="20" />
        <feGaussianBlur stdDeviation="7" />
      </filter>
      <filter id={`qx-ah3-${index}`} x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02 0.032" numOctaves="2" seed="11" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="14" />
        <feGaussianBlur stdDeviation="3.5" />
      </filter>
    </defs>
    <text x="230" y="196" textAnchor="middle" dominantBaseline="central" fontSize="330" fill="none" stroke={`${accent}42`} strokeWidth="2">
      {index}
    </text>
    {[
      { w: 11, o: 0.4, color: accent, cls: "qx-aurora-a", f: `qx-ah1-${index}` },
      { w: 8, o: 0.32, color: accentSoft, cls: "qx-aurora-b", f: `qx-ah2-${index}` },
      { w: 3.5, o: 0.5, color: accentSoft, cls: "qx-aurora-c", f: `qx-ah3-${index}` },
    ].map((layer) => (
      <text
        key={layer.f}
        x="230"
        y="196"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="330"
        fill="none"
        stroke={layer.color}
        strokeWidth={layer.w}
        strokeOpacity={layer.o}
        strokeLinecap="round"
        filter={`url(#${layer.f})`}
        className={layer.cls}
      >
        {index}
      </text>
    ))}
  </svg>
);

/* ── PageCTA - the standardized closing gate for every subpage ──────────── */

interface PageCTAProps {
  title: ReactNode;
  sub?: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  chips?: string[];
  accent?: string;
  accentRgb?: string;
}

export const PageCTA = ({
  title,
  sub,
  primary,
  secondary,
  chips,
  accent = VIOLET,
  accentRgb = "155, 92, 246",
}: PageCTAProps): JSX.Element => (
  <section className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
    <div
      className="glass-panel relative max-w-5xl mx-auto rounded-[36px] overflow-hidden px-6 py-16 sm:px-12 lg:px-16 lg:py-20 text-center shadow-[0_0_80px_-24px_rgba(124,58,237,0.45)]"
      style={{ "--glass-accent": accentRgb } as CSSProperties}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(135deg, #190531 0%, #0c021d 60%, #12032a 100%)" }}
        aria-hidden="true"
      />
      {/* Beam falling from the top right, in the page's accent */}
      <div
        className="absolute -top-24 right-[-10%] w-[70%] h-[160%] pointer-events-none opacity-60"
        style={{
          background: `conic-gradient(from 200deg at 80% 0%, transparent 0deg, ${accent}30 10deg, transparent 26deg)`,
          filter: "blur(22px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 inset-x-[12%] h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}80, transparent)` }}
        aria-hidden="true"
      />
      {/* Schematic corner ticks */}
      <div className="hidden lg:block absolute inset-5 pointer-events-none" aria-hidden="true">
        {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((pos) => (
          <span key={pos} className={`absolute w-3.5 h-3.5 border-white/25 ${pos}`} />
        ))}
      </div>

      <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.08] mb-4">
        {title}
      </h2>
      {sub && (
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {sub}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to={primary.href}
          className="inline-flex items-center justify-center bg-white text-[#17091F] rounded-full px-9 py-3.5 [font-family:'Satoshi-Bold',Helvetica] font-bold text-base hover:bg-white/90 hover:-translate-y-px hover:shadow-[0_12px_40px_-10px_rgba(255,255,255,0.4)] transition-all duration-300"
        >
          {primary.label} →
        </Link>
        {secondary && (
          <Link
            to={secondary.href}
            className="glass-panel glass-hover inline-flex items-center justify-center rounded-full px-7 py-3.5 [font-family:'Satoshi-Medium',Helvetica] text-white text-base"
          >
            {secondary.label}
          </Link>
        )}
      </div>
      {chips && chips.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {chips.map((chip) => (
            <span
              key={chip}
              className="glass-panel rounded-full px-4 py-2 [font-family:'Satoshi-Medium',Helvetica] text-white/55 text-xs tracking-wide"
            >
              {chip}
            </span>
          ))}
        </div>
      )}
    </div>
  </section>
);
