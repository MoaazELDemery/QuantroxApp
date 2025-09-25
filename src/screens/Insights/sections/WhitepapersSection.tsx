import { DownloadIcon } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const whitepapers = [
  {
    title: "Stochastic Processes in Quantitative Finance",
    date: "May 10, 2025",
    description:
      "How low-latency order routing and market-impact modeling tighten slippage for institutional flow.",
  },
  {
    title: "Transaction Cost Analysis: A Practical Guide",
    date: "May 10, 2025",
    description:
      "Measuring market impact, venue quality, and adverse selection in emerging markets.",
  },
  {
    title: "Backtesting Pitfalls & Live Decay",
    date: "May 10, 2025",
    description:
      "From data leakage to regime shifts—guardrails for robust research.",
  },
];

export const WhitepapersSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-5xl mx-auto flex flex-col items-start gap-8">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal]">
            Whitepapers & Deep Dives
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
          {whitepapers.map((whitepaper, index) => (
            <Card
              key={index}
              className={`w-full min-w-[220px] max-w-[390px] mx-auto rounded-2xl border-[0.2px] border-[#6e6179]/30 bg-transparent translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${200 + index * 200}ms]`}
            >
              <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-between">
                <div className="flex flex-col gap-2.5">
                  <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-lg sm:text-xl md:text-2xl tracking-[0] leading-[normal]">
                    {whitepaper.title}
                  </h3>

                  <p className="text-xs sm:text-sm [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#a9a9a9] tracking-[0] leading-[normal]">
                    {whitepaper.date}
                  </p>

                  <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#a9a9a9] text-sm sm:text-base tracking-[0] leading-[normal]">
                    {whitepaper.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <Badge
                    variant="secondary"
                    className="bg-[#1f1f1f] text-[#ffffff] text-[12.5px] leading-[15px] px-2.5 py-[5px] rounded-[10px] [font-family:'Satoshi-Medium',Helvetica] font-medium"
                  >
                    PDF
                  </Badge>

                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-[#8a2be2] text-[18.4px] [font-family:'Satoshi-Medium',Helvetica] font-medium hover:text-[#8a2be2]/80 transition-colors"
                  >
                    <DownloadIcon className="w-[14.47px] h-[14.47px] mr-[7.89px]" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
