
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
    <section className="flex flex-col items-start gap-2.5 pt-24 pb-40 px-4 md:px-[138px] w-full relative">
      <div className="flex flex-col items-start justify-center gap-40 relative w-full">
        {visionMissionData.map((item, index) => (
          <div
            key={item.type}
            className={`flex flex-col md:flex-row items-start gap-8 relative w-full translate-y-[-1rem] animate-fade-in opacity-0 ${index === 0 ? "[--animation-delay:200ms]" : "[--animation-delay:600ms]"}`}
          >
            {item.titlePosition === "left" ? (
              <>
                <div className="flex w-full md:w-[178px] items-center gap-2 relative">
                  <div className="relative w-5 h-5 bg-[#8a2be2] rounded-[10px]" />
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-[32px] md:text-[40px] text-center tracking-[0] leading-[normal]">
                    {item.title}
                  </div>
                </div>
                <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff] text-[24px] md:text-[32px] tracking-[0] leading-[normal]">
                  {item.content}
                </div>
              </>
            ) : (
              <>
                <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff] text-[24px] md:text-[32px] tracking-[0] leading-[normal] order-2 md:order-1">
                  {item.content}
                </div>
                <div className="flex w-full md:w-[178px] items-center justify-start md:justify-end gap-2 relative order-1 md:order-2">
                  <div className="relative w-5 h-5 bg-[#8a2be2] rounded-[10px]" />
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-[32px] md:text-[40px] text-center tracking-[0] leading-[normal]">
                    {item.title}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
