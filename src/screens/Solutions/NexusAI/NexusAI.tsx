import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

const features = [
  {
    title: "Intelligent Workflow Orchestration",
    body: "Nexus orchestrates end-to-end decision workflows: intake → risk assessment → offer structuring → execution. Every step governed, every outcome auditable across every branch.",
  },
  {
    title: "Risk-Aware Decisioning",
    body: "Automated credit scoring, exception workflows, and policy-aligned approvals — with explainable reasoning your compliance team can hand directly to regulators.",
  },
  {
    title: "Real-Time Transaction Execution",
    body: "Nexus does not just recommend — it orchestrates transactions across systems, moving decisions from insight into action through Cortex's Action Bus.",
  },
  {
    title: "KYC & Onboarding Automation",
    body: "Automated identity verification, sanctions screening, and document processing — cutting onboarding from days to minutes while remaining fully SAMA and CBUAE compliant.",
  },
  {
    title: "Offer Structuring Engine",
    body: "Policy-aligned product bundle recommendations with what-if levers for relationship managers — structured by Cortex, governed by your credit policy.",
  },
  {
    title: "Compliance by Design",
    body: "Every agent action is logged, timestamped, and attached to a full decision audit trail. Zero manual compliance work. Zero black boxes.",
  },
];

const outcomes = [
  { val: "< 4hrs", label: "SME credit decisioning — down from 5 days" },
  { val: "100%", label: "Auditable decision trail for every action" },
  { val: "60%", label: "Reduction in manual compliance touchpoints" },
];

export const NexusAI = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Nexus AI — Banking
          </p>
          <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
            The Bank's<br />Digital Brain.
          </h1>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-6 max-w-xl">
            Orchestrates end-to-end banking decisions — credit approvals, KYC, offer structuring,
            and transaction execution — governed, auditable, and compliant by design. Powered by Cortex™.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-base mb-10 max-w-xl">
            Nexus does not add a chat interface on top of your bank. It adds decision infrastructure — turning
            conversations and data into governed business actions across your entire operation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
            >
              Book a Nexus Demo
            </Link>
            <Link
              to="/technology/ai-platform"
              className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors"
            >
              How Cortex Powers It →
            </Link>
          </div>
        </div>

        {/* Workflow preview card */}
        <div className="bg-[#ffffff0a] rounded-[24px] border border-white/10 p-8">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em] mb-2">
            Live Workflow — SME Credit Decisioning
          </p>
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl mb-8">
            One flow. Zero governance gaps.
          </h3>
          <div className="flex flex-col gap-6">
            {[
              { step: "01", label: "Intake & KYC", desc: "Capture client data and run automated identity verification — no manual re-entry, no delays." },
              { step: "02", label: "Risk Assessment", desc: "Explainable credit score with policy flags and risk tier classification — handed to regulators as-is." },
              { step: "03", label: "Offer Structuring", desc: "Policy-aligned bundle recommendation with what-if levers for the relationship manager." },
              { step: "04", label: "Execution & Audit", desc: "Cortex executes the transaction and logs a complete audit trail — automatically." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#4a0082] flex items-center justify-center shrink-0">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xs">{s.step}</span>
                </div>
                <div>
                  <strong className="[font-family:'Satoshi-Bold',Helvetica] text-white text-base">{s.label}</strong>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Outcomes bar */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {outcomes.map((o) => (
          <div key={o.val} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center">
            <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl lg:text-5xl text-[#9b5cf6] mb-3">{o.val}</div>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{o.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 6 Capabilities */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Core Capabilities
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Decision Infrastructure for the Modern Bank.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-[20px] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#4a0082]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#9b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="5" cy="12" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="19" cy="12" r="2" /><circle cx="12" cy="19" r="2" />
                  <path d="M7 12h3M12 7v3M14 12h3M12 14v3" />
                </svg>
              </div>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-3">{f.title}</h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonial */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-20 bg-[#ffffff04] border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-xl italic mb-6">
          "Nexus reduced our SME credit decisioning cycle from 5 days to under 4 hours. The compliance team
          can now hand regulators a complete audit trail for every decision — without lifting a finger."
        </p>
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em]">
          Head of Commercial Banking — Regional Bank, KSA
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Give Your Bank a Digital Brain.
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
          Deploy Nexus AI inside your sovereign infrastructure — no data leaves your walls.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Book a Nexus Demo
        </Link>
      </div>
    </section>
  </PageLayout>
);
