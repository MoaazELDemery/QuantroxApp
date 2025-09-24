import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const solutionsData = [
  {
    id: 1,
    label: "Solution 1:",
    title: "Developer-Centric API",
    description:
      "Full programmatic access to every component of the platform, from data feeds to the execution engine.",
    position: "justify-start",
  },
  {
    id: 2,
    label: "Solution 2:",
    title: "Custom Algorithm Deployment",
    description:
      "Secure environment to deploy and run proprietary trading algorithms with low latency.",
    position: "justify-end",
  },
  {
    id: 3,
    label: "Solution 3:",
    title: "Alpha Research Environment",
    description:
      "A secure sandbox for testing and validating highly complex, data-intensive investment strategies.",
    position: "justify-center",
  },
];

export const DataHubSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col py-12 md:py-16 lg:py-[100px] px-4 sm:px-6 md:px-8">
      <div className="flex justify-center items-center gap-3 sm:gap-[15px] px-[15px] py-0 rounded-[150px] overflow-hidden opacity-60 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="w-[40px] sm:w-[60px] h-[1.5px] rounded-[90px] bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

        <div className="flex items-center justify-center [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#e6e6e6] text-lg sm:text-xl md:text-[24.5px] tracking-[0] leading-[normal] whitespace-nowrap">
          The Quantorx Solution
        </div>

        <div className="w-[40px] sm:w-[60px] h-[1.5px] rounded-[90px] rotate-180 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
      </div>

      <div className="flex flex-col items-center gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-[67px] max-w-[1096px] mx-auto px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight md:leading-normal">
          The Quantorx Platform for Hedge Funds
        </h2>

        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-center tracking-[0] leading-relaxed md:leading-normal">
          A flexible, developer-first environment designed for speed, security, and alpha innovation.
        </p>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-[89px] max-w-[1400px] mx-auto w-full">
        {solutionsData.map((solution, index) => (
          <div
            key={solution.id}
            className={`flex w-full justify-center lg:${solution.position} translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              {
                "--animation-delay": `${400 + index * 200}ms`,
              } as React.CSSProperties
            }
          >
            <div className="w-full max-w-[570px] relative px-4 text-center lg:text-left">
              <div className="h-auto mb-3 [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#6e6179] text-sm sm:text-base tracking-[0] leading-[normal]">
                {solution.label}
              </div>

              <div className="mb-4 sm:mb-6 h-auto [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-xl sm:text-2xl md:text-3xl lg:text-[34px] tracking-[0] leading-tight">
                {solution.title}
              </div>

              <Card className="w-full max-w-[545px] mx-auto lg:mx-0 h-auto border-0 bg-transparent">
                <CardContent className="p-4 sm:p-6 lg:p-0 w-full h-full flex relative min-h-[140px] sm:min-h-[160px] lg:min-h-[152px] rounded-lg lg:rounded-none">
                  <div className="mt-2 sm:mt-4 lg:mt-7 w-full max-w-[489px] h-auto lg:ml-7 bg-gradient-to-r from-purple-900/10 to-indigo-900/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 lg:p-6 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-sm sm:text-base lg:text-lg xl:text-xl tracking-[0] leading-relaxed flex items-center">
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
