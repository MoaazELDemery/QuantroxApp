import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

const steps = [
  {
    step: "01",
    title: "CR / ID Entry & Auto-Fetch",
    body: "Merchant enters their 10-digit Commercial Registration number. Cortex auto-fetches all business details from government registries (MCI/MHRSD) — zero manual entry, zero errors.",
  },
  {
    step: "02",
    title: "Identity Verification",
    body: "National ID verification via Absher/Nafath. Authorized signatory confirmation and KYC/AML compliance checks — fully integrated with Saudi government APIs.",
  },
  {
    step: "03",
    title: "Account Activation & Go Live",
    body: "Bank account linking, payment gateway configuration, and account activation — ready to accept payments in under 5 minutes.",
  },
];

const features = [
  {
    title: "Instant CR Verification",
    body: "Merchant enters their CR number. Cortex auto-fetches all business details from government registries — zero manual entry, zero errors, zero delay.",
    accent: "amber",
  },
  {
    title: "AI Conversational Agent (AR/EN)",
    body: "Built-in bilingual AI assistant answers merchant questions in real-time: compliance, fees, data privacy, and account setup — in both Arabic and English.",
    accent: "amber",
  },
  {
    title: "Full SAMA Compliance",
    body: "All data stored in-Kingdom. KYC/AML checks built-in. Verification flows fully aligned with Saudi regulatory requirements — every onboarding auditable through Cortex.",
    accent: "amber",
  },
  {
    title: "Absher/Nafath Integration",
    body: "Direct integration with Saudi national identity infrastructure for instant signatory verification — no manual document uploads, no back-and-forth.",
    accent: "amber",
  },
  {
    title: "Freelancer & SME Support",
    body: "Handles both registered businesses and individual freelancers (Musaned) — one platform, all merchant types, all fully compliant.",
    accent: "amber",
  },
  {
    title: "IBAN Verification & Bank Linking",
    body: "Real-time bank account verification and payment gateway configuration — merchant goes from CR number to payment-ready in a single flow.",
    accent: "amber",
  },
];

export const PayGate = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#f59e0b] text-sm uppercase tracking-[0.15em] mb-4">
            PayGate™ — Merchant Onboarding
          </p>
          <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
            CR Number to<br />Active Account.<br />Under 5 Minutes.
          </h1>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-6 max-w-xl">
            Traditional merchant onboarding takes days or weeks — manual data entry, paper forms,
            back-and-forth KYC verification, and compliance delays. PayGate™ eliminates all of it.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-base mb-10 max-w-xl">
            Fully compliant with SAMA and in-Kingdom data residency. Powered by Cortex™ — every step
            governed, every action auditable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#f59e0b] rounded-[32px] px-8 py-3 text-black [font-family:'Satoshi-Bold',Helvetica] font-bold hover:bg-[#f59e0b]/90 transition-colors"
            >
              See PayGate in Action
            </Link>
            <Link
              to="/technology/ai-platform"
              className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors"
            >
              How Cortex Powers It →
            </Link>
          </div>
        </div>

        {/* 3-step flow card */}
        <div className="bg-[#ffffff0a] rounded-[24px] border border-[#f59e0b]/20 p-8">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#f59e0b] text-xs uppercase tracking-[0.15em] mb-3">
            Onboarding Flow
          </p>
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl mb-8">
            Entry to payment-ready in 3 steps.
          </h3>
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="min-w-[40px] h-10 rounded-full bg-[#f59e0b] flex items-center justify-center shrink-0">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-xs">{s.step}</span>
                </div>
                <div>
                  <strong className="[font-family:'Satoshi-Bold',Helvetica] text-white text-base">{s.title}</strong>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm mt-1">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-white/10">
            <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/75 text-sm">
              Also supports: Freelancer onboarding · Absher/Nafath integration · IBAN verification
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Outcomes bar */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { val: "< 5min", label: "CR number to fully active account" },
          { val: "100%", label: "In-Kingdom data residency — SAMA compliant" },
          { val: "Zero", label: "Manual data entry — all auto-fetched from registries" },
        ].map((o) => (
          <div key={o.val} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center">
            <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl lg:text-5xl text-[#f59e0b] mb-3">{o.val}</div>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{o.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 6 Features */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#f59e0b] text-sm uppercase tracking-[0.15em] mb-4">
            Core Capabilities
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Every Step Automated. Every Step Governed.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass glass-amber rounded-[20px] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-3">{f.title}</h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Onboard Merchants in Minutes, Not Weeks.
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
          Deploy PayGate™ inside your sovereign infrastructure — fully SAMA compliant, zero cloud dependency.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-[#f59e0b] rounded-[32px] px-8 py-3 text-black [font-family:'Satoshi-Bold',Helvetica] font-bold hover:bg-[#f59e0b]/90 transition-colors"
        >
          See PayGate in Action
        </Link>
      </div>
    </section>
  </PageLayout>
);
