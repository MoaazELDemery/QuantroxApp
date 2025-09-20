import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const solutionsData = [
  {
    id: 1,
    label: "Solution 1:",
    title: "The Data Hub",
    description:
      "Access normalized, pre-cleaned market and alternative data via a single API, directly integrated into the research environment.",
    backgroundImage:
      "https://c.animaapp.com/mfrchrkc1zUqBK/img/frame-427321921-2.svg",
    position: "justify-start",
  },
  {
    id: 2,
    label: "Solution 2:",
    title: "The Backtesting Engine.",
    description:
      "Our engine accurately models transaction costs, slippage, and market impact, providing a true measure of a strategy's viability.",
    backgroundImage:
      "https://c.animaapp.com/mfrchrkc1zUqBK/img/frame-427321921.svg",
    position: "justify-end",
  },
  {
    id: 3,
    label: "Solution 3:",
    title: "The Risk Framework",
    description:
      "Analyze VaR, run stress tests, and monitor factor exposures across your entire portfolio from a single, unified dashboard.",
    backgroundImage:
      "https://c.animaapp.com/mfrchrkc1zUqBK/img/frame-427321921-1.svg",
    position: "justify-center",
  },
];

export const DataHubSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col py-[100px] px-4">
      <div className="flex justify-center items-center gap-[15px] px-[15px] py-0 rounded-[150px] overflow-hidden opacity-60 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="w-[60px] h-[1.5px] rounded-[90px] bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

        <div className="flex items-center justify-center [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#e6e6e6] text-[24.5px] tracking-[0] leading-[normal]">
          The Quantorx Solution
        </div>

        <div className="w-[60px] h-[1.5px] rounded-[90px] rotate-180 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
      </div>

      <div className="flex flex-col items-center gap-6 mt-[67px] max-w-[1096px] mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-5xl text-center tracking-[0] leading-[normal]">
          The Technology That Bridges The Gap
        </h2>

        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-[28px] text-center tracking-[0] leading-[normal]">
          A unified framework built to remove friction and restore focus on
          alpha.
        </p>
      </div>

      <div className="flex flex-col gap-5 mt-[89px] max-w-[1400px] mx-auto w-full">
        {solutionsData.map((solution, index) => (
          <div
            key={solution.id}
            className={`flex w-full ${solution.position} translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              {
                "--animation-delay": `${400 + index * 200}ms`,
              } as React.CSSProperties
            }
          >
            <div className="w-[570px] h-[261px] relative">
              <div className="h-[22px] flex items-center justify-center [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#6e6179] text-base tracking-[0] leading-[normal]">
                {solution.label}
              </div>

              <div className="mt-5 h-[46px] flex items-center justify-center [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-[34px] tracking-[0] leading-[normal]">
                {solution.title}
              </div>

              <Card className="mt-6 w-[545px] h-[152px] ml-[25px] border-0 bg-transparent">
                <CardContent
                  className="p-0 w-full h-full flex bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${solution.backgroundImage})`,
                  }}
                >
                  <div className="mt-7 w-[489px] h-24 ml-7 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-2xl tracking-[0] leading-[normal]">
                    {solution.description}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
