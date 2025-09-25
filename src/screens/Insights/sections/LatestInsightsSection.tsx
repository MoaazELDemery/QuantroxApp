import { ArrowRightIcon, CalendarIcon, ClockIcon } from "lucide-react";

export const LatestInsightsSection = (): JSX.Element => {
   return (
    <section className="w-full flex justify-center py-12 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-[1175px] w-full">
        <div className="w-full max-w-[532px] h-[429px] rounded-[44px] bg-gradient-to-br from-[#311c43] to-[#782bc0] flex-shrink-0" />

        <div className="w-full max-w-[563px] flex flex-col items-center lg:items-start gap-[34px] text-center lg:text-left">
          <div className="flex flex-col w-full max-w-[491px] items-center lg:items-start gap-5">
            <div className="gap-2.5 px-4 py-1 rounded-2xl bg-gradient-to-b from-[#4a0082] to-[#4a008280] text-white text-base font-medium [font-family:'Satoshi-Medium',Helvetica] h-auto">
              Articles
            </div>

            <h2 className="text-[40px] font-bold text-white [font-family:'Satoshi-Bold',Helvetica] leading-normal">
              Advances in Execution Microstructure for EGX
            </h2>

            <div className="flex items-center gap-[26px]">
              <div className="flex items-center justify-center gap-2">
                <ClockIcon className="w-[22px] h-[22px] text-[#a9a9a9]" />
                <span className="text-base font-medium text-[#a9a9a9] [font-family:'Satoshi-Medium',Helvetica]">
                  12 min
                </span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <CalendarIcon className="w-[22px] h-[22px] text-[#a9a9a9]" />
                <span className="text-base font-medium text-[#a9a9a9] [font-family:'Satoshi-Medium',Helvetica]">
                  May 10, 2025
                </span>
              </div>
            </div>
          </div>

          <p className="text-2xl font-medium text-[#a9a9a9] [font-family:'Satoshi-Medium',Helvetica] leading-normal">
            How low-latency order routing and market-impact modeling tighten
            slippage for institutional flow.
          </p>

          <button
            className="flex items-center gap-3 p-0 h-auto text-2xl font-medium text-[#8a2be2] [font-family:'Satoshi-Medium',Helvetica] hover:bg-transparent"
          >
            Read articles
            <ArrowRightIcon className="w-[22px] h-[22px]" />
          </button>
        </div>
      </div>
    </section>
  );
};
