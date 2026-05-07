import { PageLayout } from "../../components/layout/PageLayout";
import { Link } from "react-router-dom";

export const Technology = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          QuantorX Platform
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
          The Intelligence Framework<br />Behind Every Agent.
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg max-w-2xl mx-auto mb-10">
          Three purpose-built tools. One sovereign AI factory. From cognitive engine to fine-tuned models to managed infrastructure — everything runs inside your walls.
        </p>
        <Link
          to="/technology/ai-platform"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Explore CORTEX™ →
        </Link>
      </div>
    </section>

    {/* 3 Platform cards */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          to="/technology/ai-platform"
          className="group bg-[#ffffff0a] rounded-[24px] border border-white/10 p-8 hover:bg-[#ffffff12] hover:border-[#9b5cf6]/30 transition-all"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#4a0082]/30 border border-[#9b5cf6]/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[#9b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="5" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="19" r="2"/>
              <path d="M7 12h3M12 7v3M14 12h3M12 14v3"/>
            </svg>
          </div>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em] mb-3">
            The Agentic Brain
          </p>
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1px] mb-3 group-hover:text-[#9b5cf6] transition-colors">
            CORTEX™
          </h3>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
            The cognitive engine that maps your workflows, routes decisions, and governs every agent action — air-gapped, sovereign, and fully auditable.
          </p>
        </Link>

        <Link
          to="/technology/llm-studio"
          className="group bg-[#ffffff0a] rounded-[24px] border border-white/10 p-8 hover:bg-[#ffffff12] hover:border-[#9b5cf6]/30 transition-all"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#4a0082]/30 border border-[#9b5cf6]/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[#9b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em] mb-3">
            Model Factory
          </p>
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1px] mb-3 group-hover:text-[#9b5cf6] transition-colors">
            LLM Masonry™
          </h3>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
            No-code fine-tuning for enterprise-grade SLMs — Arabic-first, domain-specific, and deployed inside your sovereign infrastructure in weeks.
          </p>
        </Link>

        <Link
          to="/technology/ai-cloud"
          className="group bg-[#ffffff0a] rounded-[24px] border border-white/10 p-8 hover:bg-[#ffffff12] hover:border-[#9b5cf6]/30 transition-all"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#4a0082]/30 border border-[#9b5cf6]/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[#9b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
            </svg>
          </div>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em] mb-3">
            Managed Infrastructure
          </p>
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1px] mb-3 group-hover:text-[#9b5cf6] transition-colors">
            AI Cloud
          </h3>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
            MENA-region data centers with full sovereignty. Managed or hybrid — your infrastructure, your rules, SOC2 and ISO 27001 certified.
          </p>
        </Link>

      </div>
    </section>
  </PageLayout>
);
