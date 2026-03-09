
export const OriginSection = (): JSX.Element => {
    const originData = [
        {
            type: "origin",
            title: "FROM WALL STREET TO YOUR STREET.",
            content:
                "We started in high-stakes financial environments where accuracy, controls, and traceability are non-negotiable. When decisions move real money, “pretty demos” are not enough.\n\nWe realized that the rest of the world—banks, insurers, and operational networks—needed the same mindset: precision, repeatability, and governance. So we built QuantStation to package that capability into modular solutions: credit decisioning, wealth onboarding, treasury/FX risk workflows, and AI assistants for operations.",
            titlePosition: "left",
        },
    ];

    return (
        <section className="flex flex-col items-center gap-2.5 pt-12 pb-20 px-2 sm:px-4 w-full relative">
            <div className="flex flex-col items-start justify-center gap-28 relative w-full max-w-[1000px] mx-auto">
                {originData.map((item) => (
                    <div
                        key={item.type}
                        className="flex flex-col md:flex-row items-start gap-12 relative w-full md:w-[1000px] max-w-full"
                    >
                        <div className="flex w-full md:w-auto md:min-w-[120px] items-center gap-2 flex-shrink-0">
                            <div className="w-5 h-5 bg-[#8a2be2] rounded-[10px] flex-shrink-0" />
                            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] 
              text-base sm:text-xl md:text-[32px] leading-tight max-w-[300px]">
                                {item.title}
                            </h3>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff] 
              text-sm sm:text-lg md:text-[24px] leading-relaxed max-w-[780px] whitespace-pre-wrap">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
