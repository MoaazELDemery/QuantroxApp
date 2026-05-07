import { Link } from "react-router-dom";
import { Card, CardContent } from "../../../components/ui/card";

const agents = [
  {
    icon: "/vuesax-linear-wallet-money.svg",
    label: "Nexus AI — Banking",
    title: "THE BANK'S DIGITAL BRAIN",
    description:
      "Orchestrates end-to-end banking decisions — credit approvals, KYC, offer structuring, and transaction execution — governed, auditable, and compliant by design.",
    href: "/solutions/nexus-ai",
    alt: "Nexus AI",
  },
  {
    icon: "/vuesax-linear-trade.svg",
    label: "Axon AI — Spatial",
    title: "THE GEOGRAPHIC BRAIN",
    description:
      "Turns maps and spatial data into governed strategic decisions. Branch planning, coverage optimisation, and field operations — powered by Cortex.",
    href: "/solutions/axon-ai",
    alt: "Axon AI",
  },
  {
    icon: "/vuesax-linear-kyber-network--knc-.svg",
    label: "PayGate™ — Onboarding",
    title: "AI-POWERED MERCHANT ONBOARDING",
    description:
      "From CR number to active account in under 5 minutes. Fully compliant with SAMA and in-Kingdom data residency — all orchestrated by Cortex.",
    href: "/solutions/paygate",
    alt: "PayGate",
  },
  {
    icon: "/vuesax-linear-chart-success.svg",
    label: "Geek™ — Wealth Management",
    title: "THE WEALTH MANAGEMENT BRAIN",
    description:
      "AI-powered portfolio optimization, robo-advisory, and Shari'ah-compliant decisioning — built for GCC banks, wealth managers, and family offices.",
    href: "/solutions/geek",
    alt: "Geek AI",
  },
];

export const ProductDetailsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-transparent min-h-[400px] md:min-h-[500px] lg:min-h-[600px] py-10 md:py-20">
      <div
        className="absolute inset-0 bg-center min-w-full min-h-full"
        style={{
          backgroundImage: "url(/engineeredFragOverlayBG.png)",
          backgroundAttachment: "scroll",
          backgroundSize: "100% 80%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 flex flex-col gap-16 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em]">
              QuantorX AI Agents — Powered by Cortex™
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white
            text-4xl md:text-5xl text-center tracking-[-1.80px] leading-tight">
              Four Agents. Every Decision Governed.
            </h2>
            <p className="max-w-3xl [font-family:'Satoshi-Regular',Helvetica] font-normal
            text-white/85 text-xl md:text-2xl text-center leading-normal">
              Each agent is a specialised cognitive layer — trained, evaluated, and deployed through
              Cortex. They do not just answer questions. They execute workflows.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-start gap-8">
            {agents.map((agent, index) => (
              <Link
                key={index}
                to={agent.href}
                className="block group opacity-0 animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card
                  className="w-80 md:w-96 glass rounded-2xl overflow-hidden border-0"
                >
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                    <div className="flex flex-col w-full max-w-[352px] items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#4a0082]/20">
                        <img className="w-6 h-6" alt={agent.alt} src={agent.icon} />
                      </div>
                      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em] text-center">
                        {agent.label}
                      </p>
                      <h3 className="w-full [font-family:'Satoshi-Bold',Helvetica]
                      font-bold text-white text-xl text-center tracking-[-0.5px] leading-tight">
                        {agent.title}
                      </h3>
                      <p className="w-full [font-family:'Satoshi-Regular',Helvetica]
                      font-normal text-white/85 text-sm md:text-base text-center leading-relaxed">
                        {agent.description}
                      </p>
                    </div>
                    <span className="text-[#9b5cf6] text-sm [font-family:'Satoshi-Medium',Helvetica] font-medium group-hover:underline">
                      Explore →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
