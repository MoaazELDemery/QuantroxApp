import { PageLayout } from "../../../components/layout/PageLayout";

const COLORS = [
  { name: "Purple", hex: "#4a0082", bg: "bg-[#4a0082]" },
  { name: "Black", hex: "#000000", bg: "bg-black border border-white/20" },
  { name: "White", hex: "#FFFFFF", bg: "bg-white" },
  { name: "Muted", hex: "#a9a9a9", bg: "bg-[#a9a9a9]" },
];

const USAGE_RULES = [
  "Maintain clear space around the logo equal to the height of the 'Q' letterform.",
  "Do not alter logo colors, proportions, or add effects (shadows, gradients).",
  "Use the purple mark on dark backgrounds and the white mark on light backgrounds.",
  "Always pair the logo mark with the 'QuantorX' wordmark in official materials.",
];

export const BrandKit = (): JSX.Element => (
  <PageLayout>
    {/* HERO */}
    <section className="px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
        Brand Assets
      </p>
      <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6">
        Brand Kit
      </h1>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
        Official QuantorX brand assets, guidelines, and usage rules.
      </p>
    </section>

    <section className="px-6 py-12 max-w-4xl mx-auto flex flex-col gap-16">
      {/* LOGO */}
      <div>
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px] mb-6">
          Logo
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-[#ffffff0a] rounded-[20px] border border-white/10 p-10 flex flex-col items-center gap-4 hover:bg-[#ffffff12] transition-colors">
            <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#4a0082] text-5xl">QX</span>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm">
              Primary Mark — Purple
            </p>
          </div>
          <div className="flex-1 bg-[#4a0082] rounded-[20px] p-10 flex flex-col items-center gap-4">
            <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-5xl">QX</span>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-sm">
              Reverse Mark — White
            </p>
          </div>
        </div>
      </div>

      {/* COLORS */}
      <div>
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px] mb-6">
          Colors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {COLORS.map((color) => (
            <div
              key={color.name}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col items-center gap-3"
            >
              <div className={`w-14 h-14 rounded-lg ${color.bg}`} />
              <div className="text-center">
                <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm">
                  {color.name}
                </p>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-xs mt-1">
                  {color.hex}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TYPOGRAPHY */}
      <div>
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px] mb-6">
          Typography
        </h2>
        <div className="flex flex-col gap-4">
          <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors">
            <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl mb-2">
              Satoshi Bold — Headings
            </h4>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm">
              Weights: Bold, Medium
            </p>
          </div>
          <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors">
            <h4 className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-xl mb-2">
              Satoshi Regular — Body Text
            </h4>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm">
              Weights: Regular, Medium
            </p>
          </div>
        </div>
      </div>

      {/* USAGE GUIDELINES */}
      <div>
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px] mb-6">
          Usage Guidelines
        </h2>
        <ul className="flex flex-col gap-3">
          {USAGE_RULES.map((rule, i) => (
            <li
              key={i}
              className="flex gap-3 items-start [font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed"
            >
              <span className="text-[#9b5cf6] font-bold mt-0.5 shrink-0">{i + 1}.</span>
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] mb-4">
          Need Brand Assets?
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed mb-8">
          Contact us for high-resolution logos, brand guidelines PDF, and media kits.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Request Assets
        </a>
      </div>
    </section>
  </PageLayout>
);
