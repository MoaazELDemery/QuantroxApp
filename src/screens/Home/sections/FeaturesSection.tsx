import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "../../../components/layout/Header";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[760px] lg:h-[880px] overflow-hidden bg-transparent horizon-glow">
      {/* Layer 0 — solid black base for max logo contrast */}
      <div className="absolute inset-0 bg-black" aria-hidden="true" />

      {/* Layer 1 — animated GIF backdrop, dimmer for logo legibility */}
      <div
        className="absolute inset-0 bg-[url(/illusionGIF.gif)] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
        aria-hidden="true"
      />

      {/* Layer 2 — dot grid overlay for tactile depth */}
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />

      {/* Layer 3 — radial vignette darkening edges, lighter center for logo */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 35%, transparent 0%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 4 — multi-orb aurora */}
      <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] rounded-full bg-[#4a0082]/35 blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] -left-40 w-[460px] h-[460px] rounded-full bg-[#7c3aed]/22 blur-[120px] pointer-events-none animate-aurora-drift" />
      <div className="absolute top-[18%] -right-32 w-[440px] h-[440px] rounded-full bg-[#a855f7]/22 blur-[120px] pointer-events-none animate-aurora-drift" style={{ animationDelay: "-9s" }} />
      <div className="absolute top-[60%] left-[20%] w-[380px] h-[380px] rounded-full bg-[#00c9a7]/10 blur-[110px] pointer-events-none" />

      {/* Layer 5 — bottom fade to page bg */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-[#060010]/70 to-[#060010] pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative h-full z-10">
        <Header />

        <img
          className="absolute w-[260px] h-[280px] top-[110px] left-1/2 transform -translate-x-1/2
                     md:w-[360px] md:h-[380px] md:top-[125px]
                     lg:w-[480px] lg:h-[500px] lg:top-[160px]
                     drop-shadow-[0_0_60px_rgba(155,92,246,0.4)]"
          alt="QuantorX"
          src="/logo-svg-1.svg"
          style={{ filter: "brightness(1.15) drop-shadow(0 0 40px rgba(155,92,246,0.5))" }}
        />

        <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center gap-4 px-4
                        md:top-[220px] md:gap-5
                        lg:top-[270px] lg:gap-8 lg:px-0">
          <div className="flex flex-col items-center gap-5 text-center text-spotlight">
            {/* Pill eyebrow with pulse dot */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9b5cf6] animate-pulse-glow" />
              <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#c4a8ff] text-xs uppercase tracking-[0.2em] leading-normal">
                Enterprise Generative AI
              </span>
            </div>

            <h1 className="text-gradient-aurora [font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl
            md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-[-1.80px] leading-[1.05]
            drop-shadow-[0_8px_40px_rgba(155,92,246,0.45)]
            translate-y-[-1rem] animate-fade-in opacity-0 lg:py-1 [--animation-delay:200ms]">
              The Digital Workforce Company
            </h1>

            <p className="w-[98vw] max-w-[98vw] [font-family:'Satoshi-Medium',Helvetica]
                          font-medium text-white/90 text-base text-center tracking-[0] leading-relaxed
                          [text-shadow:0_2px_20px_rgba(0,0,0,0.7)]
                          sm:text-lg
                          md:text-xl md:max-w-[720px] md:leading-normal
                          lg:text-[24px] lg:max-w-[860px]">
              Powered by Cortex™ — the MENA region's first multi-agent AI platform converging generative and
              predictive intelligence with airgapped, on-premise deployment. Own your data. Own your intelligence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link to="/demo">
              <Button className="group relative w-[220px] h-auto justify-center py-3.5 bg-[#4a0082] rounded-[32px]
                                 hover:bg-[#5d0aa3] transition-all duration-300
                                 shadow-[0_8px_32px_-4px_rgba(155,92,246,0.5)]
                                 hover:shadow-[0_12px_40px_-4px_rgba(155,92,246,0.7)]
                                 md:w-[240px] md:py-4 lg:w-[260px]">
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-base
                                 text-white tracking-[0] leading-6 lg:text-lg">
                  Request Live Demo
                </span>
              </Button>
            </Link>
            <Link to="/technology">
              <Button variant="outline" className="w-[220px] h-auto justify-center py-3.5 bg-white/5
                border border-white/20 rounded-[32px] backdrop-blur-md
                hover:bg-white/10 hover:border-white/40 transition-all duration-300
                md:w-[240px] md:py-4 lg:w-[260px]">
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-base
                                 text-white tracking-[0] leading-6 lg:text-lg">
                  Learn More
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
