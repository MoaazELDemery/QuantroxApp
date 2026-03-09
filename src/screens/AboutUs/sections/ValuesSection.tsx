
export const ValuesSection = (): JSX.Element => {
    const valuesData = [
        {
            title: "1. Run Toward Complexity",
            content:
                "If it's easy, don't call us. We want the problems others failed to solve.",
        },
        {
            title: "2. No Black Boxes",
            content:
                "If we can't explain why a decision was recommended, we don't ship it.",
        },
        {
            title: "3. Sovereignty First",
            content:
                "Your data is your most valuable asset. We protect it like a state secret.",
        },
    ];

    return (
        <section className="flex flex-col items-center gap-2.5 pt-12 pb-20 px-2 sm:px-4 w-full relative">
            <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[1000px] mx-auto mb-10">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-2xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-[normal]">
                    Our Values
                </h2>
            </div>

            <div className="flex flex-col items-start justify-center gap-28 relative w-full max-w-[1000px] mx-auto">
                {valuesData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-start gap-12 relative w-full md:w-[1000px] max-w-full"
                    >
                        <div className="flex w-full md:w-auto md:min-w-[120px] items-center gap-2 flex-shrink-0">
                            <div className="w-5 h-5 bg-[#8a2be2] rounded-[10px] flex-shrink-0" />
                            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] 
                  text-base sm:text-xl md:text-[32px] leading-tight whitespace-nowrap">
                                {item.title}
                            </h3>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff] 
                  text-sm sm:text-lg md:text-[24px] leading-relaxed max-w-[780px]">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
