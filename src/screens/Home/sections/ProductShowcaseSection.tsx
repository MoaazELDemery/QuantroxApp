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
    // ----------------------------
    <section className="relative w-full bg-black h-[1400px]">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="w-[1512px] h-[3489px] object-cover opacity-30"
            alt="Ellipse background"
            src="/ellipse-5.svg"
          />
        </div>

        {/* This background will now fill the 1050px tall parent */}
        <div className="absolute inset-0 z-0 bg-[url(/fragmentBackground.png)] bg-cover bg-center" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40">
          <div className="flex items-center justify-between gap-32">
            <div className="flex flex-col w-full max-w-4xl gap-16">
              <div className="flex flex-col gap-4">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] text-5xl leading-normal">
                  The Fragmentation Barrier
                </h2>

                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-2xl leading-normal">
                  Legacy systems, siloed data, and disjointed workflows silently
                  tax performance - creating inefficiencies that compound over
                  time and erode competitiveness.
                </p>
              </div>

              <div className="flex items-start gap-8">
                {contentSections.map((section, index) => (
                  <div key={index} className="flex flex-col gap-3 flex-1">
                    <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#f0f0f0] text-2xl leading-normal">
                      {section.title}
                    </h3>

                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-[22px] leading-normal">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0">
              <img
                className="w-[400px] h-[400px]"
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