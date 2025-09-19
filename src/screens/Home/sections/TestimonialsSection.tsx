import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { SearchIcon, CheckIcon, DatabaseIcon, BoxIcon, TrendingUpIcon } from "lucide-react";

export const TestimonialsSection = (): JSX.Element => {
    const features = [
        {
            id: "research",
            title: "Research",
            icon: SearchIcon,
            description: "A Python-native environment for advanced factor modeling and strategy development.",
            position: "top-[310px] left-[80px]",
            cardPosition: "left",
        },
        {
            id: "execution",
            title: "Execution",
            icon: CheckIcon,
            description: "A low-latency EMS with Smart Order Routing and customizable trading algorithms.",
            position: "top-[310px] right-[-20px]",
            cardPosition: "right",
        },
        {
            id: "data",
            title: "Data",
            icon: DatabaseIcon,
            description: "Unified access to curated, pre-cleaned market and alternative datasets.",
            position: "top-[591px] left-[15px]",
            cardPosition: "left",
        },
        {
            id: "backtest",
            title: "Backtest",
            icon: BoxIcon,
            description: "A low-latency EMS with Smart Order Routing and customizable trading algorithms.",
            position: "top-[591px] right-[-85px]",
            cardPosition: "right",
        },
        {
            id: "risk",
            title: "Risk Management",
            icon: TrendingUpIcon,
            description: "Real-time portfolio risk management with VaR, stress tests, and factor analysis.",
            position: "top-[115px] left-[550px]",
            cardPosition: "top",
        },
    ];
    return (
        <section className="relative w-full min-h-[1415px] flex flex-col items-center justify-center">
            {/* Background ellipse */}
            <div className="absolute top-[450px] left-1/2 transform -translate-x-1/2 w-[1200px] h-[1200px] flex items-center justify-center">
                <img
                    className="w-[1200px] h-[1200px] object-contain"
                    alt="Background ellipse"
                    src="https://c.animaapp.com/mfq1vaxrSS67Pt/img/ellipse-12.svg"
                />
            </div>
            {/* Header content */}
            <header className="relative z-10 flex flex-col w-full max-w-[1272px] items-center justify-center gap-4 mt-[97px] translate-y-[-1rem] animate-fade-in opacity-0">
                <h1 className="text-center [font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-5xl tracking-[0] leading-normal">
                    One Platform.
                    <br />
                    the Entire Investment Lifecycle.
                </h1>
                <p className="text-center [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-[28px] tracking-[0] leading-normal max-w-full">
                    Quantorx integrates every critical function into a single, high-performance environment. Move
                    seamlessly from hypothesis to execution on a platform engineered for precision and speed.
                </p>
            </header>
            {/* Central diagram and features */}
            <div className="relative w-full max-w-[1402px] h-[1101px] mt-[60px]">
                {/* Central circular diagram */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[200px] translate-y-[20px] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#0000001a] rounded-full backdrop-blur-[10px] backdrop-brightness-[100%]" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] flex items-center justify-center bg-[url(https://c.animaapp.com/mfq1vaxrSS67Pt/img/ellipse-1.svg)] bg-[100%_100%] bg-center bg-no-repeat">
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] flex items-center justify-center bg-[url(https://c.animaapp.com/mfq1vaxrSS67Pt/img/ellipse-2.svg)] bg-[100%_100%] bg-center bg-no-repeat"></div>
                        <img
                            className="w-[480px] h-[480px] object-contain rounded-md"
                            alt="Dashboard preview"
                            src="/Dashboard.png"
                            loading="lazy"
                        />
                    </div>
                </div>
                {/* Feature sections */}
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    const animationDelay = 400 + index * 100;
                    return (
                        <div
                            key={feature.id}
                            className={`flex w-[400px] h-[200px] items-center justify-center gap-4 absolute ${feature.position} translate-y-[-1rem] animate-fade-in opacity-0`}
                            style={{ "--animation-delay": `${animationDelay}ms` } as React.CSSProperties}
                        >
                            {feature.cardPosition === "left" && (
                                <Card className="w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <CardContent className="flex items-center justify-center gap-3 p-3">
                                        <div className="flex-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-normal">
                                            {feature.description}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            <div className="flex flex-col w-[100px] items-center gap-3">
                                <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[22px] text-center tracking-[0] leading-normal">
                                    {feature.title}
                                </h3>
                                <div className="flex w-11 h-11 items-center justify-center gap-2.5 px-[15px] py-1.5 bg-[#0000004c] rounded-[30px] overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%]">
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            {feature.cardPosition === "right" && (
                                <Card className="w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <CardContent className="flex items-center justify-center gap-3 p-3">
                                        <div className="flex-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-normal">
                                            {feature.description}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                            {feature.cardPosition === "top" && (
                                <Card className="absolute -top-[80px] left-1/2 transform -translate-x-1/2 bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <CardContent className="inline-flex items-center justify-center gap-3 p-3">
                                        <div className="w-[241px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-normal">
                                            {feature.description}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    );
                })}
            </div>
            {/* Dashboard mockup */}
        </section>
    );
};