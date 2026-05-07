import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

const quantEngines = [
  {
    title: "Algorithmic Trading Infrastructure",
    description:
      "Low-latency execution frameworks, backtesting pipelines, and live order management — built for GCC equity, FX, and fixed income markets.",
  },
  {
    title: "Risk & Scenario Engines",
    description:
      "Monte Carlo simulation, VaR, and stress-testing frameworks for portfolio risk, credit risk, and market risk — explainable and regulatorily sound.",
  },
  {
    title: "Quantitative Research Platform",
    description:
      "Factor model development, alpha research pipelines, and signal testing infrastructure — sovereign, version-controlled, and reproducible.",
  },
  {
    title: "Derivatives Pricing & Structuring",
    description:
      "Custom pricing models for Islamic instruments, structured products, and OTC derivatives — tailored to GCC regulatory requirements.",
  },
];

const integrationServices = [
  {
    title: "Core Banking Integration",
    description:
      "API and middleware layers connecting Cortex-powered agents to CBS, CRM, and payments infrastructure — with zero disruption to existing operations.",
  },
  {
    title: "Data Architecture & Pipelines",
    description:
      "End-to-end data engineering: ingestion, transformation, governance, and warehousing — designed for MENA regulatory and data residency standards.",
  },
  {
    title: "Legacy System Modernisation",
    description:
      "Phased migration strategies and strangler-fig patterns to extract value from legacy systems while deploying sovereign AI on top.",
  },
  {
    title: "Enterprise AI Governance",
    description:
      "Model risk management frameworks, explainability layers, and compliance toolkits — so every AI decision is auditable and defensible.",
  },
];

export const EnterpriseSolutions = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Enterprise Solutions
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
          The Quantitative<br />Engine Room.
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10 max-w-3xl mx-auto">
          For firms that need more than an agent — custom quantitative decision engines, trading infrastructure,
          and deep system integration built to sovereign standards.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Discuss Your Project
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

    {/* Quantitative Engines */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Quantitative Engines
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
            Trading Infrastructure & Quantitative Engines.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg max-w-2xl mx-auto">
            Bespoke quant systems for institutions that operate at the intersection of finance and technology — built
            sovereign, deployed on-premise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {quantEngines.map((eng) => (
            <div
              key={eng.title}
              className="glass rounded-[20px] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#4a0082]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#9b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-3">{eng.title}</h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{eng.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* System Integration */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff04] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            System Integration & Consultancy
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
            Connect Everything. Govern All of It.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg max-w-2xl mx-auto">
            QuantorX takes full ownership from architecture to production — integrating AI into your existing
            infrastructure without disruption.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {integrationServices.map((svc) => (
            <div
              key={svc.title}
              className="glass rounded-[20px] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#4a0082]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#9b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-3">{svc.title}</h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why QuantorX for custom work */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        {[
          { val: "End-to-End", label: "We own the entire delivery — from problem definition to production" },
          { val: "Sovereign", label: "All systems deployed inside your infrastructure, never cloud-dependent" },
          { val: "No Fluff", label: "No cookie-cutter solutions — every engagement is purpose-built" },
        ].map((item) => (
          <div key={item.val} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center">
            <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-3xl text-[#9b5cf6] mb-3">{item.val}</div>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{item.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Have a Problem That Doesn't Fit a Box?
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
          We design, build, and execute end-to-end — taking full ownership from problem definition to production.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Discuss Custom Engineering
        </Link>
      </div>
    </section>
  </PageLayout>
);
