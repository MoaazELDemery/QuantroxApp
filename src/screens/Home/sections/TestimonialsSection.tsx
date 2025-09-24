import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { ScrollReveal } from "../../../components/ui/scroll-reveal";

export const TestimonialsSection = (): JSX.Element => {
    const features = [
        {
            id: "research",
            title: "Research",
            iconSrc: "/vuesax-linear-search-normal.svg",
            description: "A Python-native environment for advanced factor modeling and strategy development.",
        },
        {
            id: "execution",
            title: "Execution",
            iconSrc: "/vuesax-linear-check.svg",
            description: "A low-latency EMS with Smart Order Routing and customizable trading algorithms.",
        },
        {
            id: "data",
            title: "Data",
            iconSrc: "/vuesax-linear-data.svg",
            description: "Unified access to curated, pre-cleaned market and alternative datasets.",
        },
        {
            id: "backtest",
            title: "Backtest",
            iconSrc: "/vuesax-linear-box.svg",
            description: "A low-latency EMS with Smart Order Routing and customizable trading algorithms.",
        },
        {
            id: "risk",
            title: "Risk Management",
            iconSrc: "/vuesax-linear-chart-success.svg",
            description: "Real-time portfolio risk management with VaR, stress tests, and factor analysis.",
        },
    ];

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4">
            {/* Central circular gradient background - aligned with dashboard */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-16">
                <div 
                    className="w-[600px] h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full opacity-70"
                    style={{
                        background: 'radial-gradient(circle, #9810FF 0%, #23003E 40%, transparent 70%)'
                    }}
                />
            </div>

            {/* Header content */}
            <ScrollReveal delay={300}>
                <header className="relative z-10 flex flex-col items-center justify-center gap-4 mb-8 max-w-[1272px] text-center">
                    <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-5xl tracking-tight leading-tight">
                        One Platform.
                        <br />
                        the Entire Investment Lifecycle.
                    </h1>
                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-gray-300 text-xl leading-relaxed max-w-4xl">
                        Quantorx integrates every critical function into a single, high-performance environment. Move
                        seamlessly from hypothesis to execution on a platform engineered for precision and speed.
                    </p>
                </header>
            </ScrollReveal>

            {/* Main content container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto mt-24">
                {/* Central dashboard with features arranged around it */}
                <div className="relative flex items-center justify-center h-[600px]">
                    
                    {/* Top feature - Risk Management */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                        <ScrollReveal delay={400}>
                            <FeatureItem feature={features[4]} position="top" />
                        </ScrollReveal>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-between px-32">
                        {/* Left features */}
                        <div className="flex flex-col space-y-32">
                            <ScrollReveal delay={400}>
                                <FeatureItem feature={features[0]} position="left" />
                            </ScrollReveal>
                            <ScrollReveal delay={400}>
                                <FeatureItem feature={features[2]} position="left" />
                            </ScrollReveal>
                        </div>

                        {/* Right features */}
                        <div className="flex flex-col space-y-32">
                            <ScrollReveal delay={400}>
                                <FeatureItem feature={features[1]} position="right" />
                            </ScrollReveal>
                            <ScrollReveal delay={400}>
                                <FeatureItem feature={features[3]} position="right" />
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Central dashboard */}
                    <ScrollReveal delay={600}>
                        <div className="relative flex items-center justify-center">
                            {/* Background circles */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[250px] h-[250px] bg-[#0000001a] rounded-full backdrop-blur-[10px] backdrop-brightness-[100%]" />
                            </div>
                            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
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
                                    className="relative z-10 w-[420px] h-[420px] object-contain rounded-md"
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
        iconSrc: string;
        description: string;
    };
    position: 'left' | 'right' | 'top';
}> = ({ feature, position }) => {

    return (
        <div className="flex items-center justify-center gap-4 group relative">
            {/* Left positioned card */}
            {position === 'left' && (
                <Card className="absolute right-full mr-4 w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CardContent className="flex items-center justify-center gap-3 p-3">
                        <div className="flex-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-normal">
                            {feature.description}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Feature icon and title */}
            <div className="flex flex-col items-center gap-3 min-w-[100px]">
                <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[22px] text-center tracking-[0] leading-normal">
                    {feature.title}
                </h3>
                {/* Icon frame explicitly 44x44 (padding removed so total size matches spec) */}
                <div className="flex w-[44px] h-[44px] items-center justify-center bg-[#0000004c] rounded-full overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%]">
                    <img
                        src={feature.iconSrc}
                        alt={feature.title}
                        className="w-6 h-6 filter brightness-0 invert"
                    />
                </div>
            </div>

            {/* Right positioned card */}
            {position === 'right' && (
                <Card className="absolute left-full ml-4 w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CardContent className="flex items-center justify-center gap-3 p-3">
                        <div className="flex-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-normal">
                            {feature.description}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Top positioned card */}
            {position === 'top' && (
                <Card className="absolute bottom-full mb-4 w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CardContent className="flex items-center justify-center gap-3 p-3">
                        <div className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-normal text-center">
                            {feature.description}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};