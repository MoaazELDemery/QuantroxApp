import { PageLayout } from "../../../components/layout/PageLayout";
import { Link } from "react-router-dom";

export const LLMStudio = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          LLM Masonry™
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
          Forge Your Own Language Models — Sovereign GenAI Built for MENA Enterprises
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg max-w-2xl mx-auto mb-10">
          A no-code fine-tuning framework to create custom state-of-the-art SLMs and LLMs for enterprise MENA applications — with full Arabic language support.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Request Demo
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

    {/* Train SLM Foundation Models */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Foundation Models
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Train SLM Foundation Models
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Distributed Training on GPU Clusters",
              body: "Deepspeed-powered distributed training across multi-GPU environments for efficient model development.",
            },
            {
              title: "Cost-Effective SLMs",
              body: "SLMs are cheaper to train and operate than LLMs — fewer GPUs, faster throughput, lower latency.",
            },
            {
              title: "Highly Customizable",
              body: "SLMs are faster to fine-tune than LLMs, enabling rapid iteration for Arabic and domain-specific use cases.",
            },
            {
              title: "No-Code Fine-Tuning",
              body: "GUI-based framework — no coding required. Fine-tune state-of-the-art models with clicks, not scripts.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors"
            >
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-xl mb-3">
                {card.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fine-Tune SLMs */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            NLP Fine-Tuning
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Fine-Tune SLMs for NLP Use Cases
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "LLM Distillation",
              body: "Distill large LLMs into compact SLMs for mobile, offline, and edge applications.",
            },
            {
              title: "Instruction & Chat Fine-Tuning",
              body: "Custom GPTs for mobile apps and offline deployments — Arabic and English instruction-tuned.",
            },
            {
              title: "DPO/IPO/KTO Alignment",
              body: "Advanced optimization and alignment techniques for model behavior control.",
            },
            {
              title: "Lower TCO",
              body: "Fine-tuned SLMs can be more accurate than general-purpose LLMs for specific MENA use cases — at a fraction of the cost.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors"
            >
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-xl mb-3">
                {card.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why SLMs for MENA */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Why SLMs for MENA
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
            Purpose-Built for Your Industry and Language
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg max-w-2xl mx-auto">
            General-purpose LLMs were not built for Arabic, Islamic finance, or MENA regulatory frameworks. LLM Masonry™ lets you build models that are — sovereign, precise, and domain-aware from day one.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { val: "10X", label: "More cost-effective than pay-per-token models" },
            { val: "100%", label: "On-premise sovereign deployment" },
            { val: "Weeks", label: "From raw data to production model" },
          ].map((stat) => (
            <div key={stat.val} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center">
              <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-5xl text-[#9b5cf6] mb-3">
                {stat.val}
              </div>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
          Build Custom AI Models for MENA
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
          Get started with QuantorX LLM Masonry™ today.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Request Demo
        </Link>
      </div>
    </section>
  </PageLayout>
);
