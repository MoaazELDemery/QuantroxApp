import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { SearchIcon, CheckIcon, DatabaseIcon, BoxIcon, TrendingUpIcon } from "lucide-react";
import { ScrollReveal } from "../../../components/ui/scroll-reveal";

export const TestimonialsSection = (): JSX.Element => {
    const features = [
        {
            id: "research",
            title: "Research",
            icon: SearchIcon,
            description: "A Python-native environment for advanced factor modeling and strategy development.",
        },
        {
            id: "execution",
            title: "Execution",
            icon: CheckIcon,
            description: "A low-latency EMS with Smart Order Routing and customizable trading algorithms.",
        },
        {
            id: "data",
            title: "Data",
            icon: DatabaseIcon,
            description: "Unified access to curated, pre-cleaned market and alternative datasets.",
        },
        {
            id: "backtest",
            title: "Backtest",
            icon: BoxIcon,
            description: "A low-latency EMS with Smart Order Routing and customizable trading algorithms.",
        },
        {
            id: "risk",
            title: "Risk Management",
            icon: TrendingUpIcon,
            description: "Real-time portfolio risk management with VaR, stress tests, and factor analysis.",
        },
    ];

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4">
                        {/* Background ellipse */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-20">
                <img
                    className="w-[1200px] h-[1200px] object-contain opacity-50"
                    alt="Background overlay"
                    src="/homeOverlaybg.png"
                />
            </div>

            {/* Header content */}
            <ScrollReveal>
                <header className="relative z-10 flex flex-col items-center justify-center gap-4 mb-16 max-w-[1272px] text-center">
                    <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-normal">
                        One Platform.
                        <br />
                        the Entire Investment Lifecycle.
                    </h1>
                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-lg md:text-xl lg:text-[28px] tracking-[0] leading-normal max-w-4xl">
                        Quantorx integrates every critical function into a single, high-performance environment. Move
                        seamlessly from hypothesis to execution on a platform engineered for precision and speed.
                    </p>
                </header>
            </ScrollReveal>

            {/* Main content container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {/* Central dashboard with features arranged around it */}
                <div className="relative flex items-center justify-center">
                    
                    {/* Top feature - Risk Management - moved lower */}
                    <div className="absolute top-8 md:top-12 left-1/2 transform -translate-x-1/2">
                        <ScrollReveal>
                            <FeatureItem feature={features[4]} position="top" />
                        </ScrollReveal>
                    </div>

                    {/* Left features - moved more to the left */}
                    <div className="absolute -left-16 md:-left-32 lg:-left-48 top-1/2 transform -translate-y-1/2 space-y-8 md:space-y-16">
                        <ScrollReveal>
                            <FeatureItem feature={features[0]} position="left" />
                        </ScrollReveal>
                        <ScrollReveal>
                            <FeatureItem feature={features[2]} position="left" />
                        </ScrollReveal>
                    </div>

                    {/* Right features - moved more to the right */}
                    <div className="absolute -right-16 md:-right-32 lg:-right-48 top-1/2 transform -translate-y-1/2 space-y-8 md:space-y-16">
                        <ScrollReveal>
                            <FeatureItem feature={features[1]} position="right" />
                        </ScrollReveal>
                        <ScrollReveal>
                            <FeatureItem feature={features[3]} position="right" />
                        </ScrollReveal>
                    </div>

                    {/* Central dashboard */}
                    <ScrollReveal>
                        <div className="relative flex items-center justify-center">
                            {/* Background circles */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-[#0000001a] rounded-full backdrop-blur-[10px] backdrop-brightness-[100%]" />
                            </div>
                            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
                                <img
                                    className="absolute inset-0 w-full h-full object-contain opacity-70"
                                    alt="Background ellipse 1"
                                    src="/ellipse-1.svg"
                                />
                                <img
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] object-contain opacity-70"
                                    alt="Background ellipse 2"
                                    src="/ellipse-2.svg"
                                />
                                <img
                                    className="relative z-10 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] object-contain rounded-md"
                                    alt="Dashboard preview"
                                    src="/Dashboard.png"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

// Feature item component
const FeatureItem: React.FC<{
    feature: {
        id: string;
        title: string;
        icon: React.ComponentType<{ className?: string }>;
        description: string;
    };
    position: 'left' | 'right' | 'top';
}> = ({ feature, position }) => {
    const IconComponent = feature.icon;

    return (
        <div className="flex items-center justify-center gap-4 group">
            {/* Left positioned card */}
            {position === 'left' && (
                <Card className="w-[200px] md:w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CardContent className="flex items-center justify-center gap-3 p-3">
                        <div className="flex-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-normal">
                            {feature.description}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Feature icon and title */}
            <div className="flex flex-col items-center gap-3 min-w-[100px]">
                <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-lg md:text-[22px] text-center tracking-[0] leading-normal">
                    {feature.title}
                </h3>
                <div className="flex w-11 h-11 items-center justify-center gap-2.5 px-[15px] py-1.5 bg-[#0000004c] rounded-[30px] overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%]">
                    <IconComponent className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Right positioned card */}
            {position === 'right' && (
                <Card className="w-[200px] md:w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CardContent className="flex items-center justify-center gap-3 p-3">
                        <div className="flex-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-normal">
                            {feature.description}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Top positioned card */}
            {position === 'top' && (
                <Card className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 w-[200px] md:w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CardContent className="flex items-center justify-center gap-3 p-3">
                        <div className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-normal text-center">
                            {feature.description}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};