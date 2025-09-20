import { Badge } from "../../../../components/ui/badge";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 px-4">
      {/* Use Case in Action Header */}
      <div className="flex items-center justify-center gap-4 mb-20 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
        <div className="w-[60px] h-[1.5px] rounded-[90px] bg-gradient-to-r from-white to-transparent opacity-60" />
        <h2 className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#e6e6e6] text-2xl tracking-[0] leading-normal whitespace-nowrap">
          Use Case in Action
        </h2>
        <div className="w-[60px] h-[1.5px] rounded-[90px] bg-gradient-to-l from-white to-transparent opacity-60" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1236px] mx-auto">
        {/* WHAT WE DO Badge */}
        <div className="mb-10 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2.5 pl-5 pr-9 py-2.5 rounded-[10px_0px_0px_10px] bg-gradient-to-r from-[rgba(31,30,62,0.08)] via-[rgba(31,30,62,1)] to-transparent border-0 text-lavender-blue font-desktop-bold-caption font-[number:var(--desktop-bold-caption-font-weight)] text-[length:var(--desktop-bold-caption-font-size)] tracking-[var(--desktop-bold-caption-letter-spacing)] leading-[var(--desktop-bold-caption-line-height)] [font-style:var(--desktop-bold-caption-font-style)]"
          >
            WHAT WE DO
          </Badge>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Heading */}
          <div className="opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
            <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl lg:text-5xl tracking-[0] leading-normal">
              From Factor Idea To Portfolio Rebalance.
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className="opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-xl lg:text-[28px] tracking-[0] leading-normal">
              A portfolio manager identifies a new value factor. Using the
              Quantorx research environment, they model and backtest the factor
              against 10 years of historical data. The results are positive.
              With one click, the strategy is integrated into their model
              portfolio, and the system generates the necessary orders to
              rebalance, all while running pre-trade compliance checks. The
              entire process takes hours, not weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
