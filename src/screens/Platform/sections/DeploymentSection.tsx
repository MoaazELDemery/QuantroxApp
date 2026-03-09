export const DeploymentSection = (): JSX.Element => {
    const deploymentModels = [
        {
            title: "Private Cloud",
            description: "Hosted on your AWS/Azure VPC."
        },
        {
            title: "On-Premise",
            description: "Running in your own data center."
        },
        {
            title: "Hybrid",
            description: "Sensitive data stays home; general reasoning runs on cloud."
        }
    ];

    return (
        <section className="w-full py-20 px-6 lg:px-[138px]">
            <div className="flex flex-col items-center gap-12 max-w-[1236px] mx-auto">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] 
          text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-normal uppercase">
                    DEPLOYMENT MODELS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {deploymentModels.map((model, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-4 p-4 border-[0.5px] border-white/5 rounded-xl bg-gradient-to-b from-white/5 to-transparent hover:border-white/10 transition-colors">
                            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl">
                                {model.title}
                            </h3>
                            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-lg">
                                {model.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
