import { PageLayout } from "../../../components/layout/PageLayout";
import { PageCTA, SpecimenFrame } from "../../../components/page/primitives";
import { PageHero } from "../../../components/layout/PageHero";

const COLORS = [
  { name: "Purple", hex: "#4A0082", swatch: "#4a0082" },
  { name: "Accent", hex: "#9B5CF6", swatch: "#9b5cf6" },
  { name: "Black", hex: "#000000", swatch: "#000000" },
  { name: "White", hex: "#FFFFFF", swatch: "#ffffff" },
];

const USAGE_RULES = [
  "Maintain clear space around the logo equal to the height of the 'Q' letterform.",
  "Do not alter logo colors, proportions, or add effects (shadows, gradients).",
  "Use the purple mark on dark backgrounds and the white mark on light backgrounds.",
  "Always pair the logo mark with the 'QuantorX' wordmark in official materials.",
];

const SectionKicker = ({ children }: { children: string }): JSX.Element => (
  <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-8">
    {children}
  </p>
);

export const BrandKit = (): JSX.Element => (
  <PageLayout>
    {/* HERO */}
    <PageHero
      eyebrow="Brand Assets"
      title="Brand Kit"
      lede="Official QuantorX brand assets, guidelines, and usage rules."
      video="/videos/sovereign-ring.mp4"
      plainTitle
    />

    <section className="px-6 py-12 lg:py-16 max-w-5xl mx-auto flex flex-col gap-20 lg:gap-24">
      {/* LOGO - specimen exhibits */}
      <div>
        <SectionKicker>Exhibit 01 · The Mark</SectionKicker>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SpecimenFrame>
            <div className="flex flex-col items-center gap-6 py-14 px-8">
              <img src="/NewLogoWhite.png" alt="QuantorX mark - white" className="h-16 w-auto" />
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/40 text-[11px] uppercase tracking-[0.25em]">
                Primary Mark · Dark Surfaces
              </p>
            </div>
          </SpecimenFrame>
          <SpecimenFrame>
            <div className="flex flex-col items-center gap-6 py-14 px-8 bg-white rounded-[10px]">
              <img src="/NewLogoPurple.png" alt="QuantorX mark - purple" className="h-16 w-auto" />
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-black/45 text-[11px] uppercase tracking-[0.25em]">
                Reverse Mark · Light Surfaces
              </p>
            </div>
          </SpecimenFrame>
        </div>
      </div>

      {/* COLORS - swatch register */}
      <div>
        <SectionKicker>Exhibit 02 · The Palette</SectionKicker>
        <div className="border-t border-b border-white/15 divide-y divide-white/10 sm:divide-y-0 sm:grid sm:grid-cols-4 sm:divide-x sm:divide-white/10">
          {COLORS.map((color, i) => (
            <div key={color.name} className={`py-8 ${i > 0 ? "sm:pl-8" : ""} sm:pr-8`}>
              <div
                className="h-24 rounded-[10px] mb-5 border border-white/10"
                style={{ background: color.swatch }}
                aria-hidden="true"
              />
              <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[-0.01em]">
                {color.name}
              </p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/40 text-xs mt-1 tabular-nums uppercase">
                {color.hex}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TYPOGRAPHY - type specimens */}
      <div>
        <SectionKicker>Exhibit 03 · The Voice</SectionKicker>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          <div className="border-t border-white/15 pt-8">
            <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-7xl lg:text-8xl tracking-[-0.04em] leading-none mb-6">
              Aa
            </p>
            <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg tracking-[-0.01em]">
              Satoshi Bold
            </h4>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/45 text-sm mt-1">
              Headings · Weights: Bold, Medium
            </p>
          </div>
          <div className="border-t border-white/15 pt-8">
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-7xl lg:text-8xl tracking-[-0.04em] leading-none mb-6">
              Aa
            </p>
            <h4 className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-lg tracking-[-0.01em]">
              Satoshi Regular
            </h4>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/45 text-sm mt-1">
              Body text · Weights: Regular, Medium
            </p>
          </div>
        </div>
      </div>

      {/* USAGE GUIDELINES - the rulebook */}
      <div>
        <SectionKicker>Exhibit 04 · The Rules</SectionKicker>
        <div className="border-t border-white/10">
          {USAGE_RULES.map((rule, i) => (
            <div
              key={i}
              className="flex items-start gap-6 lg:gap-8 py-6 border-b border-white/10 transition-colors duration-300 hover:border-white/25"
            >
              <span
                className="[font-family:'Satoshi-Black',Helvetica] font-black text-2xl leading-none w-12 shrink-0 text-transparent"
                style={{ WebkitTextStroke: "1px rgba(155,92,246,0.4)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-base leading-relaxed">
                {rule}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <PageCTA
      title={<>Need Brand Assets?</>}
      sub={<>Contact us for high-resolution logos, brand guidelines PDF, and media kits.</>}
      primary={{ label: "Request Assets", href: "/contact" }}
    />
  </PageLayout>
);
