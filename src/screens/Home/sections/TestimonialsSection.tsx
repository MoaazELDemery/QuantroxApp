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
            // Positioning constraints relative to dashboard
            position: {
                top: "20%",
                left: "-280px",
                transform: "translateY(-50%)"
            }
        },
        {
            id: "execution",
            title: "Execution",
            iconSrc: "/vuesax-linear-check.svg",
            description: "A low-latency EMS with Smart Order Routing and customizable trading algorithms.",
            position: {
                top: "20%",
                right: "-280px",
                transform: "translateY(-50%)"
            }
        },
        {
            id: "data",
            title: "Data",
            iconSrc: "/vuesax-linear-data.svg",
            description: "Unified access to curated, pre-cleaned market and alternative datasets.",
            position: {
                bottom: "50%",
                left: "-320px",
                transform: "translateY(50%)"
            }
        },
        {
            id: "backtest",
            title: "Backtest",
            iconSrc: "/vuesax-linear-box.svg",
            description: "A low-latency EMS with Smart Order Routing and customizable trading algorithms.",
            position: {
                bottom: "50%",
                right: "-320px",
                transform: "translateY(50%)"
            }
        },
        {
            id: "risk",
            title: "Risk Management",
            iconSrc: "/vuesax-linear-chart-success.svg",
            description: "Real-time portfolio risk management with VaR, stress tests, and factor analysis.",
            position: {
                top: "-40px",
                left: "50%",
                transform: "translateX(-50%)"
            }
        },
    ];

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4">
            {/* Central circular gradient background - aligned with dashboard */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-64">
                <div 
                    className="w-[600px] h-[600px] md:w-[700px] md:h-[700px] lg:w-[600px] lg:h-[600px] rounded-full opacity-70"
                    style={{
                        background: 'radial-gradient(circle, #9810FF 0%, #23003E 40%, transparent 70%)'
                    }}
                />
            </div>

            {/* Header content */}
            <ScrollReveal delay={300}>
                <header className="relative z-10 flex flex-col items-center justify-center gap-4 mb-40 max-w-[1272px] text-center">
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
                {/* Central dashboard container with constrained feature positioning */}
                <div className="relative flex items-center justify-center">
                    
                    {/* Dashboard container - this is the reference point for all features */}
                    <ScrollReveal delay={600}>
                        <div className="relative flex items-center justify-center dashboard-container">
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

                            {/* Features positioned relative to dashboard */}
                            {features.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className="absolute"
                                    style={feature.position}
                                >
                                    <ScrollReveal delay={400 + (index * 100)}>
                                        <FeatureItem 
                                            feature={feature} 
                                            alignmentDirection={getAlignmentDirection(feature.id)}
                                        />
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

// Helper function to determine card alignment direction
const getAlignmentDirection = (featureId: string): 'left' | 'right' | 'top' | 'center' => {
    switch (featureId) {
        case 'research':
        case 'data':
            return 'left';
        case 'execution':
        case 'backtest':
            return 'right';
        case 'risk':
            return 'top';
        default:
            return 'center';
    }
};

// Feature item component
const FeatureItem: React.FC<{
    feature: {
        id: string;
        title: string;
        iconSrc: string;
        description: string;
    };
    alignmentDirection: 'left' | 'right' | 'top' | 'center';
}> = ({ feature, alignmentDirection }) => {

    return (
        <div className="flex items-center justify-center gap-4 group">
            {/* Left aligned card */}
            {alignmentDirection === 'left' && (
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
                <Card className="w-[200px] md:w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CardContent className="flex items-center justify-center gap-3 p-3">
                        <div className="flex-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-normal">
                            {feature.description}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Top aligned card */}
            {alignmentDirection === 'top' && (
                <Card className="absolute -top-24 md:-top-28 left-1/2 transform -translate-x-1/2 w-[200px] md:w-[265px] bg-[#0000004c] border-none backdrop-blur-[10px] backdrop-brightness-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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