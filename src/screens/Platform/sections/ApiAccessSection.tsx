const features = [
  {
    title: "The Research Environment",
    description:
      "A Python-native environment with curated, pre-cleaned data and an integrated backtesting engine. Test strategies against real market conditions, refine ideas with precision, and move seamlessly from research to deployment.",
    image: "/platformCube.png",
    imagePosition: "left",
  },
  {
    title: "The Execution Engine",
    description:
      "A low-latency execution system with a proprietary Smart Order Router and algorithmic trading suite. Built for speed and reliability, it minimizes slippage and delivers consistent best execution at scale.",
    image: "/platformCylinder.png",
    imagePosition: "right",
  },
];

export const ApiAccessSection = (): JSX.Element => {
  return (
    <section className="w-full py-[109px] px-[138px]">
      <div className="flex flex-col gap-[168px] max-w-[1236px] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center justify-between h-[400px] translate-y-[-1rem] animate-fade-in opacity-0 ${
              index === 0
                ? "[--animation-delay:200ms]"
                : "[--animation-delay:400ms]"
            }`}
          >
            {feature.imagePosition === "left" ? (
              <>
                <img
                  className="w-[400px] h-[400px]"
                  alt="Frame"
                  src={feature.image}
                />
                <div className="flex flex-col w-[768px] items-start gap-4">
                  <h2 className="flex items-center justify-center self-stretch [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] text-5xl tracking-[0] leading-[normal]">
                    {feature.title}
                  </h2>
                  <p className="items-center justify-center self-stretch [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-[28px] tracking-[0] leading-[normal] flex">
                    {feature.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col w-[768px] items-start gap-4">
                  <h2 className="flex items-center justify-center self-stretch [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] text-5xl tracking-[0] leading-[normal]">
                    {feature.title}
                  </h2>
                  <p className="items-center justify-center self-stretch [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-[28px] tracking-[0] leading-[normal] flex">
                    {feature.description}
                  </p>
                </div>
                <img
                  className="w-[400px] h-[400px]"
                  alt="Frame"
                  src={feature.image}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
