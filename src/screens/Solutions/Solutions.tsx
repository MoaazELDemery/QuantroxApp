import { useState } from "react";
import { PageCTA, Reveal } from "../../components/page/primitives";
import { AGENT_IDENTITIES } from "../../lib/agentIdentity";
import { Link } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";

const agents = [
  {
    id: AGENT_IDENTITIES.nodus,
    title: "The Digital Factory",
    description:
      "From Demand to Delivery - an AI workforce that covers the software delivery lifecycle end to end, inside your JIRA, GitHub and GitLab. Goal in, tested deliverable out - in hours, not weeks.",
    href: "/solutions/nodus",
  },
  {
    id: AGENT_IDENTITIES.axon,
    title: "The Urban Intelligence Unit",
    description:
      "From Maps to Masterplans - plain-language questions become validated SQL, real spatial analysis and live map layers, grounded in your actual data. Conversational GIS, in English and Arabic.",
    href: "/solutions/axon-ai",
  },
  {
    id: AGENT_IDENTITIES.nexus,
    title: "The Customer Success Squad",
    description:
      "From VOC to Action - a customer's own words, by voice or text, in Arabic or English, become completed banking: transfers, cards, bills and proactive guidance, with a human confirmation on every action.",
    href: "/solutions/nexus-ai",
  },
  {
    id: AGENT_IDENTITIES.paygate,
    title: "The Partner Enablement Hub",
    description:
      "From 1st Contact to 1st Transaction - a Saudi merchant goes from CR number to live payments in minutes, built around Wathiq, Yakeen, Nafath, SPL and Tahakouk, with human oversight throughout.",
    href: "/solutions/paygate",
  },
  {
    id: AGENT_IDENTITIES.nextra,
    title: "The Strategy Advisory Office",
    description:
      "From Data to Decisions - a household's finances covered end to end: lending, saving, investing, and insurance & protection. Proactive, personal, Sharia-aware by default.",
    href: "/solutions/nextra",
  },
];

export const Solutions = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"banking" | "spatial" | "brokerage">("banking");

  return (
    <PageLayout>
      <PageHero
        eyebrow="The Digital Workforce"
        title={<>Five Squads.<br className="hidden md:block" /> One Digital Workforce.</>}
        lede={
          <>
            Five purpose-built agentic squads on one cognitive platform - omni-agent workforces that
            plan, act and explain themselves, with human approval on every sensitive action. Sovereign
            by default. Auditable by design.
          </>
        }
        video="/videos/solutions-city.mp4"
        ctas={[
          { label: "Book a Demo", href: "/demo" },
          { label: "Talk to an Expert", href: "/contact", variant: "outline" },
        ]}
      />

      {/* 5-Squad Grid - each card opens into its agent's world */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent, i) => (
            <Reveal key={agent.href} order={i % 2} className={`h-full ${i === agents.length - 1 ? "md:col-span-2" : ""}`}>
              <Link
                to={agent.href}
                className="group glass-panel glass-hover relative flex flex-col gap-4 rounded-[26px] p-8 overflow-hidden h-full"
                style={{ "--glass-accent": agent.id.accentRgb } as React.CSSProperties}
              >
                {/* The agent's world, breathing behind the copy */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                  <img
                    src={agent.id.plate}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover object-right opacity-25 transition-opacity duration-700 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#08020e]/95 via-[#08020e]/70 to-[#08020e]/30" />
                </div>
                <span
                  className="pointer-events-none select-none absolute right-3 top-1 [font-family:'Satoshi-Black',Helvetica] font-black text-[5.5rem] leading-none"
                  style={{ WebkitTextStroke: `1px ${agent.id.accent}40`, color: "transparent" }}
                  aria-hidden="true"
                >
                  {agent.id.index}
                </span>
                <div className="relative">
                  <p
                    className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-xs uppercase tracking-[0.2em] mb-3 flex items-center gap-2.5"
                    style={{ color: agent.id.accent, textShadow: `0 0 16px ${agent.id.accent}55` }}
                  >
                    <span className="block h-px w-7" style={{ background: `linear-gradient(90deg, ${agent.id.accent}, transparent)` }} />
                    {agent.id.label}
                  </p>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-0.5px] mb-3">
                    {agent.title}
                  </h3>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/65 text-sm leading-relaxed max-w-md">
                    {agent.description}
                  </p>
                </div>
                <span
                  className="relative text-sm [font-family:'Satoshi-Medium',Helvetica] font-medium mt-auto transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: agent.id.accent }}
                >
                  Explore →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Enterprise Solutions callout */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/solutions/bookworm"
            className="group glass-panel glass-hover flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-[24px] p-8"
          >
            <div>
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em] mb-2">
                Enterprise Solutions
              </p>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-0.5px] mb-2">
                BookWorm · The Enterprise Brokerage Platform
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed max-w-2xl">
                Six integrated systems that run an entire securities brokerage - trading, settlement, compliance, custody, research and wealth - on one governed platform. Every number provable.
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
            {(["banking", "spatial", "brokerage"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm [font-family:'Satoshi-Medium',Helvetica] transition-all border ${
                  activeTab === tab
                    ? "bg-[#4a0082] border-[#4a0082] text-white"
                    : "border-white/10 bg-white/4 text-white/75 hover:text-white hover:border-white/25"
                }`}
              >
                {tab === "banking" ? "Banking" : tab === "spatial" ? "Spatial" : "Brokerage"}
              </button>
            ))}
          </div>

          <div className="glass-panel glass-hover rounded-[20px] p-8 md:p-12 max-w-3xl mx-auto text-center">
            {activeTab === "banking" && (
              <div>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg md:text-xl italic mb-6">
                  "Our customers stopped navigating the app and started talking to it. Transfers that took five
                  screens now take one sentence and one confirmation - in Arabic - and containment went up in the
                  first month of the pilot."
                </p>
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em]">
                  Head of Digital Banking - Retail Bank, KSA
                </p>
              </div>
            )}
            {activeTab === "spatial" && (
              <div>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg md:text-xl italic mb-6">
                  "Our planners stopped filing GIS requests and started asking questions. Axon answers on the map in
                  seconds, in Arabic, from our own PostGIS - and every figure traces back to a query we can inspect."
                </p>
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em]">
                  Director of Urban Planning - Development Authority, KSA
                </p>
              </div>
            )}
            {activeTab === "brokerage" && (
              <div>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg md:text-xl italic mb-6">
                  "BookWorm replaced our terminal-era back office with six systems that share one ledger. Reconciliation
                  stopped being a weekend in Excel - and our capital returns now print live from the ledger."
                </p>
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em]">
                  Chief Operating Officer - Securities Brokerage, Egypt
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

          <PageCTA
      title={<>The Right Squad for Your Operation.</>}
      sub={<>One conversation. One prototype. Fully sovereign.</>}
      primary={{ label: "Book a Demo", href: "/demo" }}
    />
    </PageLayout>
  );
};
