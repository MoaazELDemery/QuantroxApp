export const ProductShowcaseSection = (): JSX.Element => {
  const contentSections = [
    {
      title: "Where Alpha Slips Away",
      description:
        "The gap between strategy and execution is where alpha disappears.",
    },
    {
      title: "The Need for a Unified Core",
      description:
        "Winning in modern markets requires a single, unified technological foundation.",
    },
  ];

  return (
    <section className="relative w-full bg-black min-h-[1000px] h-[calc(100vh+200px)] max-h-[1400px] overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        {/* Removed ellipse-5.svg background image */}

        {/* Fixed background implementation */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/fragementOverlayBG.png')`,
            backgroundAttachment: "scroll",
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            transform: "scale(1)"
          }}
        />

        {/* Alternative: If the file doesn't exist, use a gradient fallback */}
        {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20" /> */}

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-32">
            <div className="flex flex-col w-full max-w-4xl gap-8 lg:gap-16">
              <div className="flex flex-col gap-4 text-center lg:text-left">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] text-3xl sm:text-4xl md:text-5xl leading-normal">
                  The Fragmentation Barrier
                </h2>

                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-lg sm:text-xl md:text-2xl leading-normal">
                  Legacy systems, siloed data, and disjointed workflows silently
                  tax performance - creating inefficiencies that compound over
                  time and erode competitiveness.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
                {contentSections.map((section, index) => (
                  <div key={index} className="flex flex-col gap-3 flex-1">
                    <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#f0f0f0] text-xl sm:text-2xl leading-normal">
                      {section.title}
                    </h3>

                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-base sm:text-[22px] leading-normal">
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