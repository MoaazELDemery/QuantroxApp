
export const ContactSection = (): JSX.Element => {
  const visionMissionData = [
    {
      type: "vision",
      title: "Vision",
      content:
        "To Be The Central Nervous System Of Quantitative Finance In Egypt And The Wider Mena Region, Empowering Sophisticated Institutions To Compete And Win Globally With Precision, Reliability, And Innovation.",
      titlePosition: "left",
    },
    {
      type: "mission",
      title: "Mission",
      content:
        "To Engineer And Deliver A Unified, Institutional‑grade Technology Platform For Research, Trading, And Risk Management, Equipping Our Clients With The Infrastructure To Generate Alpha, Manage Complexity.",
      titlePosition: "right",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-2.5 pt-12 pb-20 px-2 sm:px-4 w-full relative">
      <div className="flex flex-col items-start justify-center gap-20 relative w-full max-w-[1200px] mx-auto">
        {visionMissionData.map((item) => (
          <div
            key={item.type}
            className="flex flex-col md:flex-row items-start gap-6 relative w-full"
          >
            {item.titlePosition === "left" ? (
              <>
                <div className="flex w-full md:w-auto md:min-w-[120px] items-center gap-2 flex-shrink-0">
                  <div className="w-5 h-5 bg-[#8a2be2] rounded-[10px] flex-shrink-0" />
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-base sm:text-xl md:text-[32px] leading-tight whitespace-nowrap">
                    {item.title}
                  </h3>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff] text-sm sm:text-lg md:text-[24px] leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 min-w-0 order-2 md:order-1">
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff] text-sm sm:text-lg md:text-[24px] leading-relaxed">
                    {item.content}
                  </p>
                </div>
                <div className="flex w-full md:w-auto md:min-w-[120px] items-center justify-start md:justify-end gap-2 flex-shrink-0 order-1 md:order-2">
                  <div className="w-5 h-5 bg-[#8a2be2] rounded-[10px] flex-shrink-0" />
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-base sm:text-xl md:text-[32px] leading-tight whitespace-nowrap">
                    {item.title}
                  </h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
