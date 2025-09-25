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
        <section className="relative w-full min-h-[900px] flex flex-col items-center justify-center py-10 px-4 lg:py-20">
            {/* Central circular gradient background for desktop only */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-32 hidden lg:flex">
                <div 
                    className="w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full opacity-70"
                    style={{
                        background: 'radial-gradient(circle, #9810FF 0%, #23003E 40%, transparent 70%)'
                    }}
                />
            </div>

            {/* Header content */}
            <ScrollReveal delay={300}>
                <header className="relative z-10 flex flex-col items-center justify-center gap-4 mb-32 sm:mb-36 lg:mb-40 max-w-6xl text-center">
                    <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight lg:leading-normal">
                        One Platform.
                        <br />
                        the Entire Investment Lifecycle.
                    </h1>
                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-base sm:text-lg md:text-xl lg:text-[28px] tracking-[0] leading-relaxed lg:leading-normal max-w-4xl px-4">
                        Quantorx integrates every critical function into a single, high-performance environment. Move
                        seamlessly from hypothesis to execution on a platform engineered for precision and speed.
                    </p>
                </header>
            </ScrollReveal>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative z-10 w-full max-w-7xl mx-auto">
                <div className="relative flex items-center justify-center">
                    <ScrollReveal delay={600}>
                        <div className="relative flex items-center justify-center dashboard-container">
                            {/* Background circles */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[250px] h-[250px] bg-[#0000001a] rounded-full backdrop-blur-[10px] backdrop-brightness-[100%]" />
                            </div>
                            
                            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
                                <img
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] object-contain opacity-100"
                                    alt="Background ellipse 1"
                                    src="/ellipse-1.svg"
                                />
                                <img
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] object-contain opacity-100"
                                    alt="Background ellipse 2"
                                    src="/ellipse-2.svg"
                                />
                                <img
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] object-contain opacity-100"
                                    alt="Background ellipse 2"
                                    src="/ellipse-2.svg"
                                />
                                <img
                                    className="relative z-10 w-[420px] h-[420px] object-contain rounded-md -mt-16"
                                    alt="Dashboard preview"
                                    src="/Dashboard.png"
                                    loading="lazy"
                                />
                            </div>

                            {/* Desktop Features positioned absolutely */}
                            <div className="absolute top-[10%] left-[-270px] transform -translate-y-1/2">
                                <ScrollReveal delay={500}>
                                    <DesktopFeatureItem feature={features[0]} alignmentDirection="left" />
                                </ScrollReveal>
                            </div>
                            <div className="absolute top-[10%] right-[-270px] transform -translate-y-1/2">
                                <ScrollReveal delay={600}>
                                    <DesktopFeatureItem feature={features[1]} alignmentDirection="right" />
                                </ScrollReveal>
                            </div>
                            <div className="absolute bottom-[55%] left-[-340px] transform translate-y-1/2">
                                <ScrollReveal delay={700}>
                                    <DesktopFeatureItem feature={features[2]} alignmentDirection="left" />
                                </ScrollReveal>
                            </div>
                            <div className="absolute bottom-[55%] right-[-340px] transform translate-y-1/2">
                                <ScrollReveal delay={800}>
                                    <DesktopFeatureItem feature={features[3]} alignmentDirection="right" />
                                </ScrollReveal>
                            </div>
                            <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2">
                                <ScrollReveal delay={900}>
                                    <DesktopFeatureItem feature={features[4]} alignmentDirection="top" />
                                </ScrollReveal>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden relative z-10 w-full max-w-4xl mx-auto">
                {/* Dashboard with gradient background under image */}
                <ScrollReveal delay={600}>
                    <div className="relative flex items-center justify-center mb-24 sm:mb-28">
                        {/* Background circles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#0000001a] rounded-full backdrop-blur-[10px] backdrop-brightness-[100%]" />
                        </div>
                        {/* Radial gradient background for mobile */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                            <div 
                                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-70"
                                style={{
                                    background: 'radial-gradient(circle, #9810FF 0%, #23003E 40%, transparent 70%)'
                                }}
                            />
                        </div>
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center z-10">
                            <img
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] object-contain opacity-100"
                                alt="Background ellipse 1"
                                src="/ellipse-1.svg"
                            />
                            <img
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] object-contain opacity-100"
                                alt="Background ellipse 2"
                                src="/ellipse-2.svg"
                            />
                            <img
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] object-contain opacity-100"
                                alt="Background ellipse 2"
                                src="/ellipse-2.svg"
                            />
                            <img
                                className="relative z-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain rounded-md -mt-4 sm:-mt-6"
                                alt="Dashboard preview"
                                src="/Dashboard.png"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Mobile Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto mt-24 sm:mt-28">
                    {features.map((feature, index) => (
                        <ScrollReveal key={feature.id} delay={500 + (index * 100)}>
                            <MobileFeatureItem feature={feature} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Desktop Feature Item Component
const DesktopFeatureItem: React.FC<{
    feature: {
        id: string;
        title: string;
        iconSrc: string;
        description: string;
    };
    alignmentDirection: 'left' | 'right' | 'top';
}> = ({ feature, alignmentDirection }) => {
    return (
        <div className="flex items-center justify-center gap-4 group">
            {/* Left aligned card */}
            {alignmentDirection === 'left' && (
                <Card className="w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <div className="flex w-[44px] h-[44px] items-center justify-center bg-[#0000004c] rounded-full overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%]">
                    <img
                        src={feature.iconSrc}
                        alt={feature.title}
                        className="w-6 h-6 filter brightness-0 invert"
                    />
                </div>
            </div>

            {/* Right aligned card */}
            {alignmentDirection === 'right' && (
                <Card className="w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CardContent className="flex items-center justify-center gap-3 p-3">
                        <div className="flex-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-normal">
                            {feature.description}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Top aligned card */}
            {alignmentDirection === 'top' && (
                <Card className="absolute -top-28 left-1/2 transform -translate-x-1/2 w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

// Mobile Feature Item Component
const MobileFeatureItem: React.FC<{
    feature: {
        id: string;
        title: string;
        iconSrc: string;
        description: string;
    };
}> = ({ feature }) => {
    return (
        <Card className="bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] hover:bg-[#00000066] transition-colors duration-300">
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex w-[44px] h-[44px] items-center justify-center bg-[#0000004c] rounded-full overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%]">
                    <img
                        src={feature.iconSrc}
                        alt={feature.title}
                        className="w-6 h-6 filter brightness-0 invert"
                    />
                </div>
                <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-lg sm:text-xl tracking-[0] leading-normal">
                    {feature.title}
                </h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-sm sm:text-base tracking-[0] leading-relaxed">
                    {feature.description}
                </p>
            </CardContent>
        </Card>
    );
};