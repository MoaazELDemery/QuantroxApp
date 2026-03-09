export const ProductShowcaseSection = (): JSX.Element => {
  const contentSections = [
    {
      title: "The Execution Gap",
      description:
        "QuantStation closes the gap between analysis and execution with guided workflows.",
    },
    {
      title: "Repeatable Outcomes",
      description:
        "Transparent scoring and optimization tools so decisions are easy to roll out across teams.",
    },
  ];

  return (
    <section className="relative w-full bg-black min-h-[1000px] h-[calc(100vh+200px)] max-h-[850px] 
    overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">

        <div className="absolute inset-0 z-0 flex items-start justify-center w-full">
          <img
            src="/GradientPackRingFull.png"
            alt="Gradient Ring"
            className="object-contain"
            style={{
              animation: "spin 10s linear infinite reverse",
              width: 'min(600vw, 7000px)',
              minWidth: '4000px',
              maxWidth: '7000px',
              height: 'auto',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-32">
            <div className="flex flex-col w-full max-w-4xl gap-8 lg:gap-16">
              <div className="flex flex-col gap-4 text-center lg:text-left">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] 
                text-3xl sm:text-4xl md:text-5xl leading-tight uppercase">
                  AI THAT SOUNDS SMART IS NOT A BUSINESS SOLUTION.
                </h2>

                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] 
                text-lg sm:text-xl md:text-2xl leading-normal">
                  Most “AI” stops at chat. But banking leaders need outcomes: faster
                  approvals, smarter offers, lower risk, and consistent customer
                  experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 
              text-center sm:text-left">
                {contentSections.map((section, index) => (
                  <div key={index} className="flex flex-col gap-3 flex-1">
                    <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#f0f0f0] 
                    text-xl sm:text-2xl leading-normal">
                      {section.title}
                    </h3>

                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] 
                    text-base sm:text-[22px] leading-normal">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 mt-8 lg:mt-0">
              <img
                className="w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] mx-auto lg:mx-0"
                alt="Frame graphic"
                src="/frame-427321926.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};