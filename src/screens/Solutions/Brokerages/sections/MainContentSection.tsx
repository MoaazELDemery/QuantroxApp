export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      {/* Use Case in Action Header */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 lg:mb-20 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
        <div className="w-[30px] sm:w-[40px] md:w-[60px] h-[1px] sm:h-[1.5px] rounded-[90px] bg-gradient-to-r from-white to-transparent opacity-60" />
        <h2 className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#e6e6e6] text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-normal text-center">
          Use Case in Action
        </h2>
        <div className="w-[30px] sm:w-[40px] md:w-[60px] h-[1px] sm:h-[1.5px] rounded-[90px] bg-gradient-to-l from-white to-transparent opacity-60" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1236px] mx-auto">
        {/* WHAT WE DO Badge */}
        <div className="mb-6 sm:mb-8 md:mb-10 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms] text-center lg:text-left">
          <div 
            className="inline-flex items-center gap-2 sm:gap-2.5 pl-4 sm:pl-5 pr-8 sm:pr-9 py-2 sm:py-2.5 rounded-[10px_0px_0px_10px] border-0"
            style={{
              background: `linear-gradient(90deg, #1F1E3E 8%, #100F15 100%)`,
            }}
          >
            <span className="text-white text-sm sm:text-base font-bold tracking-wider">
              WHAT WE DO
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Heading */}
          <div className="opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms] mb-8 lg:mb-0">
            <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight text-center lg:text-left">
              Delivering Best Execution at Scale.
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className="opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] tracking-[0] leading-relaxed text-center lg:text-left">
              A brokerage integrates Quantorx’s Smart Order Router. 
              When a client submits a large order, 
              the SOR intelligently routes portions of the trade across multiple venues to minimize market impact. 
              The system then generates a TCA report automatically, 
              allowing the brokerage to demonstrate execution quality with full transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
