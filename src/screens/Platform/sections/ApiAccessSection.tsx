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
    // The horizontal padding is changed from px-[138px] to px-6 lg:px-[138px]
  <section className="w-full pt-0 pb-[60px] px-6 lg:px-[138px]">
      <div className="flex flex-col gap-[168px] max-w-[1236px] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[400px] translate-y-[-1rem] animate-fade-in opacity-0 ${index === 0
                ? "[--animation-delay:200ms]"
                : "[--animation-delay:400ms]"
              }`}
          >
            {feature.imagePosition === "left" ? (
              <>
                <img
                  className="w-full max-w-[400px] h-[220px] sm:h-[300px] lg:h-[400px] object-contain mb-6 lg:mb-0"
                  alt="Frame"
                  src={feature.image}
                />
                <div className="flex flex-col w-full max-w-[768px] items-center lg:items-start gap-4 text-center lg:text-left">
                  <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] w-full">
                    {feature.title}
                  </h2>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-base sm:text-lg md:text-xl lg:text-[28px] tracking-[0] leading-[normal] w-full">
                    {feature.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col w-full max-w-[768px] items-center lg:items-start gap-4 text-center lg:text-left">
                  <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] w-full">
                    {feature.title}
                  </h2>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-base sm:text-lg md:text-xl lg:text-[28px] tracking-[0] leading-[normal] w-full">
                    {feature.description}
                  </p>
                </div>
                <img
                  className="w-full max-w-[400px] h-[220px] sm:h-[300px] lg:h-[400px] object-contain mt-6 lg:mt-0"
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