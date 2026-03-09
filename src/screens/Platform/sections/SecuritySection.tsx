export const SecuritySection = (): JSX.Element => {
    const securityFeatures = [
        {
            title: "Sovereign deployment options",
            description: "Keep control of your data and decisioning."
        },
        {
            title: "Role-based controls",
            description: "People see and do only what their role allows."
        },
        {
            title: "Auditability",
            description: "Decisions can be reviewed, explained, and governed."
        }
    ];

    return (
        <section className="w-full py-20 px-6 lg:px-[138px]">
            <div className="flex flex-col items-center gap-12 max-w-[1236px] mx-auto">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] 
          text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-normal uppercase">
                    ENGINEERED FOR BANKING SECURITY.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {securityFeatures.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-4 p-4 border-[0.5px] border-white/5 rounded-xl bg-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
                            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl">
                                {feature.title}
                            </h3>
                            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
