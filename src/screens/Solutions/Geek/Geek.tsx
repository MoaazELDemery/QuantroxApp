import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

const capabilities = [
  {
    title: "Portfolio Optimization",
    description:
      "Multi-objective optimization across risk, return, liquidity, and ESG constraints — running inside your sovereign infrastructure.",
  },
  {
    title: "Risk Profiling",
    description:
      "Automated suitability assessment and risk tolerance mapping — compliant with CMA and SAMA standards, governed through Cortex.",
  },
  {
    title: "Shari'ah Compliance Engine",
    description:
      "Built-in screening against GCC Shari'ah boards, with full audit trails for every allocation decision and instrument selection.",
  },
  {
    title: "Market Signals",
    description:
      "Macro and sector signal integration — earnings, sentiment, credit spreads, and GCC-specific data feeds — processed through Cortex's Adaptive Inference Router.",
  },
  {
    title: "Automated Rebalancing",
    description:
      "Threshold-triggered rebalancing with drift tolerance controls and tax-aware execution — no manual spreadsheets, no tribal knowledge.",
  },
  {
    title: "Explainable Recommendations",
    description:
      "Every recommendation includes a plain-language rationale your relationship managers can explain to clients — and regulators can audit.",
  },
];

const deploymentModes = [
  {
    label: "Private Bank",
    title: "For Private Banks & Family Offices",
    points: [
      "Shari'ah-compliant portfolio construction at scale",
      "RM copilot with explainable recommendations",
      "Full CMA audit trail per client interaction",
    ],
  },
  {
    label: "Digital Bank",
    title: "For Digital Banks & Neo-Brokers",
    points: [
      "Robo-advisory onboarding in under 3 minutes",
      "Risk profiling + suitability assessment",
      "Fully automated rebalancing with governance logs",
    ],
  },
  {
    label: "Family Office",
    title: "For Multi-Family Offices",
    points: [
      "Multi-asset, multi-mandate portfolio oversight",
      "Cross-client risk aggregation and scenario analysis",
      "Bespoke reporting with Shari'ah certification hooks",
    ],
  },
];

export const Geek = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Geek™ — Wealth Management
          </p>
          <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
            The Wealth<br />Management Brain.
          </h1>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10 max-w-xl">
            AI-powered portfolio optimization, robo-advisory, and Shari'ah-compliant decisioning — built for GCC
            banks, wealth managers, and family offices. Governed by Cortex. Sovereign by design.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
            >
              Book a Geek™ Demo
            </Link>
            <Link
              to="/technology/ai-platform"
              className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors"
            >
              How Cortex Powers It →
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="flex items-center justify-center w-80 h-80 lg:w-96 lg:h-96"
            style={{ background: "radial-gradient(ellipse at center, rgba(74,0,130,0.2) 0%, transparent 70%)" }}
          >
            <img
              src="/RoboDashboard.png"
              alt="Geek Wealth Management Dashboard"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    {/* KPI Bar */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { val: "3×", label: "Faster portfolio construction" },
          { val: "100%", label: "Shari'ah audit trail on every decision" },
          { val: "60%", label: "Reduction in advisory cost" },
        ].map((kpi) => (
          <div key={kpi.val} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center">
            <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-5xl text-[#9b5cf6] mb-3">
              {kpi.val}
            </div>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
              {kpi.label}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Problem */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-20 bg-[#ffffff04] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            The Problem
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
            Advisory at Scale Is Broken.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg">
            Wealth advisory in the GCC relies on tribal knowledge, manual spreadsheets, and inconsistent
            relationship manager judgment. At scale, this means inconsistent advice, compliance risk, and a
            client experience that doesn't reflect the sophistication of your institution.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {[
            "Expensive senior advisors bottleneck the client experience",
            "No consistent Shari'ah screening across the portfolio",
            "Manual rebalancing is reactive, not proactive",
            "Audit trails are incomplete — a regulatory liability",
          ].map((pain) => (
            <div key={pain} className="flex gap-3 items-start">
              <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 6-Capability Grid */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Core Capabilities
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Six Systems. One Governed Brain.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="glass rounded-[20px] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#4a0082]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#9b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-3">{cap.title}</h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Deployment Modes */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-20 bg-[#ffffff04] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Deployment Modes
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Built for Your Institution.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deploymentModes.map((mode) => (
            <div key={mode.label} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6">
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em] mb-3">
                {mode.label}
              </p>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-4">{mode.title}</h3>
              <div className="flex flex-col gap-2">
                {mode.points.map((pt) => (
                  <div key={pt} className="flex gap-2 items-start">
                    <div className="mt-1 w-4 h-4 rounded-full bg-[#9b5cf6]/20 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#9b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/75 text-sm leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Govern Your Wealth Advisory.
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
          Deploy Geek™ inside your sovereign infrastructure — no data leaves your walls.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Book a Geek™ Demo
        </Link>
      </div>
    </section>
  </PageLayout>
);
