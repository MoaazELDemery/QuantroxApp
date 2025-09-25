import { Card, CardContent } from "../../../../components/ui/card";

export const TechnologyOverviewSection = (): JSX.Element => {
  const challenges = [
    {
      title: "Challenge 1",
      description:
        "Data sourcing and cleaning consumes valuable research time.",
    },
    {
      title: "Challenge 2",
      description:
        "Unrealistic backtests lead to strategy decay in live markets",
    },
    {
      title: "Challenge 3",
      description:
        "Disconnected risk systems fail to capture portfolio-level exposures in real-time",
    },
  ];

  return (
    <section className="w-full py-[100px] flex flex-col items-center">
      <div className="flex justify-center items-center gap-[15px] px-[15px] py-0 rounded-[150px] overflow-hidden opacity-60 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="w-[60px] h-[1.5px] rounded-[90px] bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

        <div className="flex items-center justify-center [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#e6e6e6] text-[24.5px] tracking-[0] leading-[normal]">
          Your Challenges
        </div>

        <div className="w-[60px] h-[1.5px] rounded-[90px] rotate-180 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex w-full max-w-[1096px] flex-col items-center gap-6 mt-[67px]">
        <h2 className="flex items-center justify-center text-center [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-5xl tracking-[0] leading-[normal]">
          The Roadblocks Between Strategy And Execution
        </h2>

        <p className="flex items-center justify-center text-center [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-[28px] tracking-[0] leading-[normal]">
          Why traditional workflows erode alpha over time.
        </p>
      </div>

  <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] flex flex-col sm:flex-row w-full max-w-[1216px] items-center gap-8 mt-[138px] justify-center">
        {challenges.map((challenge, index) => (
          <Card
            key={`challenge-${index}`}
            className="flex flex-col w-96 items-center justify-center gap-4 px-0 py-8 bg-[#00000033] rounded-2xl overflow-hidden backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] border-0"
          >
            <CardContent className="flex flex-col w-[352px] items-center gap-4 p-0">
              <h3 className="flex items-center justify-center text-center [font-family:'Satoshi-Medium',Helvetica] font-medium text-whitewhite text-2xl tracking-[0] leading-9">
                {challenge.title}
              </h3>

              <p className="flex items-center justify-center text-center [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-base tracking-[0] leading-[normal]">
                {challenge.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
