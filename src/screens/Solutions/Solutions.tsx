import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout";

const agents = [
  {
    icon: "/vuesax-linear-wallet-money.svg",
    label: "Nexus AI — Banking",
    title: "The Bank's Digital Brain",
    description:
      "Orchestrates end-to-end banking decisions — credit approvals, KYC, offer structuring, and transaction execution — governed, auditable, and compliant by design.",
    href: "/solutions/nexus-ai",
    color: "purple" as const,
  },
  {
    icon: "/vuesax-linear-trade.svg",
    label: "Axon AI — Spatial",
    title: "The Geographic Brain",
    description:
      "Turns maps and spatial data into governed strategic decisions. Branch planning, coverage optimisation, and field operations — powered by Cortex.",
    href: "/solutions/axon-ai",
    color: "teal" as const,
  },
  {
    icon: "/vuesax-linear-kyber-network--knc-.svg",
    label: "PayGate™ — Onboarding",
    title: "AI-Powered Merchant Onboarding",
    description:
      "From CR number to active account in under 5 minutes. Fully compliant with SAMA and in-Kingdom data residency — all orchestrated by Cortex.",
    href: "/solutions/paygate",
    color: "amber" as const,
  },
  {
    icon: "/vuesax-linear-chart-success.svg",
    label: "Geek™ — Wealth Management",
    title: "The Wealth Management Brain",
    description:
      "AI-powered portfolio optimization, robo-advisory, and Shari'ah-compliant decisioning — built for GCC banks, wealth managers, and family offices.",
    href: "/solutions/geek",
    color: "purple" as const,
  },
];

export const Solutions = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"banking" | "spatial" | "treasury">("banking");

  return (
    <PageLayout>
      {/* Hero */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Agents Powered by Cortex™
          </p>
          <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-4xl md:text-5xl lg:text-6xl text-gradient-aurora mb-6">
            Four Agents.<br className="hidden md:block" /> One Sovereign Platform.
          </h1>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10 max-w-3xl mx-auto">
            Every agent runs on QuantorX Cortex™ — air-gapped, governed, and mapped to your exact operational
            workflows through Cognitive Flux Mapping™. Sovereign by default. Auditable by design.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
            >
              Book a Cortex Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* 4-Agent Grid */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent) => {
            const accentColor = agent.color === "amber" ? "#f59e0b" : agent.color === "teal" ? "#00c9a7" : "#9b5cf6";
            const bgAccent =
              agent.color === "amber" ? "bg-[#f59e0b]/10 border-[#f59e0b]/20"
              : agent.color === "teal" ? "bg-[#00c9a7]/15 border-[#00c9a7]/25"
              : "bg-[#4a0082]/30 border-[#9b5cf6]/25";
            const textAccent =
              agent.color === "amber" ? "text-[#f59e0b]"
              : agent.color === "teal" ? "text-[#00c9a7]"
              : "text-[#9b5cf6]";
            const glassClass =
              agent.color === "amber" ? "glass glass-amber"
              : agent.color === "teal" ? "glass glass-teal"
              : "glass";
            return (
              <Link
                key={agent.href}
                to={agent.href}
                className={`group ${glassClass} rounded-[24px] p-8 flex flex-col gap-4`}
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${bgAccent}`}>
                  <img className="w-6 h-6" src={agent.icon} alt={agent.label} />
                </div>
                <div>
                  <p className={`[font-family:'Satoshi-Medium',Helvetica] font-medium text-xs uppercase tracking-[0.15em] mb-2 ${textAccent}`}>
                    {agent.label}
                  </p>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-0.5px] mb-3 group-hover:opacity-90 transition-opacity">
                    {agent.title}
                  </h3>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                    {agent.description}
                  </p>
                </div>
                <span className={`text-sm [font-family:'Satoshi-Medium',Helvetica] font-medium group-hover:underline mt-auto`} style={{ color: accentColor }}>
                  Explore →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Enterprise Solutions callout */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/solutions/enterprise-solutions"
            className="group glass flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-[24px] p-8"
          >
            <div>
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em] mb-2">
                Enterprise Solutions
              </p>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-0.5px] mb-2">
                Quantitative Engines & System Integration
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed max-w-2xl">
                Trading infrastructure, capital markets analytics, and full-stack system integration — for firms that need custom quantitative decision engines, not off-the-shelf software.
              </p>
            </div>
            <span className="text-[#9b5cf6] text-sm [font-family:'Satoshi-Medium',Helvetica] font-medium whitespace-nowrap group-hover:underline shrink-0">
              Explore →
            </span>
          </Link>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Client Outcomes
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-3xl md:text-4xl lg:text-5xl text-white">
              Delivering Measurable Impact.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {(["banking", "spatial", "treasury"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm [font-family:'Satoshi-Medium',Helvetica] transition-all border ${
                  activeTab === tab
                    ? "bg-[#4a0082] border-[#4a0082] text-white"
                    : "border-white/10 bg-white/4 text-white/75 hover:text-white hover:border-white/25"
                }`}
              >
                {tab === "banking" ? "Banking" : tab === "spatial" ? "Spatial" : "Treasury"}
              </button>
            ))}
          </div>

          <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-8 md:p-12 max-w-3xl mx-auto text-center">
            {activeTab === "banking" && (
              <div>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg md:text-xl italic mb-6">
                  "Nexus reduced our SME credit decisioning cycle from 5 days to under 4 hours. The compliance team
                  can now hand regulators a complete audit trail for every decision — without lifting a finger."
                </p>
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em]">
                  Head of Commercial Banking — Regional Bank, KSA
                </p>
              </div>
            )}
            {activeTab === "spatial" && (
              <div>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg md:text-xl italic mb-6">
                  "Axon AI gave us a ranked expansion roadmap backed by live GIS data and competitor overlays. We
                  identified three high-ROI cities we had not considered — and avoided two we were already planning."
                </p>
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em]">
                  VP of Strategy — Retail Network, GCC
                </p>
              </div>
            )}
            {activeTab === "treasury" && (
              <div>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg md:text-xl italic mb-6">
                  "The FX hedging engine replaced three weeks of manual spreadsheet work per quarter. Decisions are
                  now explainable, repeatable, and fully aligned with our policy framework."
                </p>
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em]">
                  Group Treasurer — Financial Institution, MENA
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            The Right Agent for Your Industry.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
            One conversation. One prototype. Fully sovereign.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Book a Cortex Demo
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};
