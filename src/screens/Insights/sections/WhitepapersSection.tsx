import { Reveal } from "../../../components/page/primitives";

const whitepapers = [
  {
    title: "Stochastic Processes in Quantitative Finance",
    description:
      "How low-latency order routing and market-impact modeling tighten slippage for institutional flow.",
  },
  {
    title: "Transaction Cost Analysis: A Practical Guide",
    description:
      "Measuring market impact, venue quality, and adverse selection in emerging markets.",
  },
  {
    title: "Backtesting Pitfalls & Live Decay",
    description:
      "From data leakage to regime shifts-guardrails for robust research.",
  },
];

export const WhitepapersSection = (): JSX.Element => (
  <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff04]">
    <div className="max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
          The Library
        </p>
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl md:text-4xl lg:text-5xl leading-tight">
          Whitepapers &amp; deep dives.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-10">
        {whitepapers.map((wp, i) => (
          <Reveal key={wp.title} order={i * 2}>
            <div className="relative border-t border-white/15 pt-8 h-full">
              <span
                className="pointer-events-none select-none absolute top-3 right-0 [font-family:'Satoshi-Black',Helvetica] font-black text-lg leading-none text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.28)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em] mb-4">
                Whitepaper
              </p>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-0.02em] text-white text-xl mb-3 pr-10">
                {wp.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/60 text-sm lg:text-base">
                {wp.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
