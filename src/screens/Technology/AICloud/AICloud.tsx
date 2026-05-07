import { PageLayout } from "../../../components/layout/PageLayout";
import { Link } from "react-router-dom";

export const AICloud = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          AI Cloud
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
          QuantorX AI Cloud
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg max-w-2xl mx-auto mb-10">
          Accelerate and scale AI results with trust and confidence. Deploy in MENA-region data centers with full data sovereignty.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Request Live Demo
        </Link>
      </div>
    </section>

    {/* Step 1: Cloud Choice */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Step 1: Our Cloud or Yours?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-8 text-center hover:bg-[#ffffff12] transition-colors">
            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-2xl mb-2">
              Managed Cloud
            </h3>
            <p className="italic text-white/75 text-sm mb-4">(QuantorX Hosted)</p>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 mb-6">
              Get all the value of QuantorX AI Cloud without the day-to-day operations. MENA-region data centers with full data residency compliance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-8 text-center hover:bg-[#ffffff12] transition-colors">
            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-2xl mb-2">
              Hybrid Cloud
            </h3>
            <p className="italic text-white/75 text-sm mb-4">(Self Hosted)</p>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 mb-6">
              End-to-end AI platform hosted in your private cloud or on-premise. Full control over infrastructure, data, and compliance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* What Makes It Great */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            What Makes QuantorX AI Cloud Great?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Best-in-Class AI",
              body: "Powered by award-winning AutoML and no-code deep learning engines — fine-tuned for MENA industries.",
            },
            {
              title: "Freedom & Flexibility",
              body: "One platform across clouds, on-premise environments, and data sources. Your infrastructure, your rules.",
            },
            {
              title: "AI App Store",
              body: "The first dedicated AI App Store for MENA enterprises — unleash AI across your organization.",
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

    {/* AI Tools for Every Role */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Make with QuantorX
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            AI Tools for Every Role
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AutoML",
              body: "Automated machine learning with feature engineering, model development, and explainability — democratizing AI for MENA data teams.",
            },
            {
              title: "Document AI",
              body: "Extract data from Arabic and English documents with intelligent OCR, NLP, and deep learning pipelines.",
            },
            {
              title: "Feature Store",
              body: "Centralized feature management for consistent, reusable ML features across your organization.",
            },
            {
              title: "App Builder",
              body: "Low-code AI application framework — build and deploy data science apps with Python.",
            },
            {
              title: "MLOps",
              body: "Model operations: deploy, monitor, manage, and govern ML models in production.",
            },
            {
              title: "More Coming Soon",
              body: "Deep learning, time series, and more — expanding the QuantorX Make ecosystem.",
              dashed: true,
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`bg-[#ffffff0a] rounded-[20px] border p-6 hover:bg-[#ffffff12] transition-colors ${
                card.dashed ? "border-dashed border-white/20 text-center" : "border-white/10"
              }`}
            >
              <h3 className={`[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-xl mb-3 ${card.dashed ? "text-white/75" : "text-[#9b5cf6]"}`}>
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

    {/* Compliance */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Compliance
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Enterprise Security. Regional Compliance.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "SOC 2 Type II", body: "Independent audit and verification." },
            { title: "ISO 27001", body: "Information security management." },
            { title: "MENA Data Residency", body: "UAE PDPL, KSA PDPL compliant." },
          ].map((cert) => (
            <div
              key={cert.title}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center hover:bg-[#ffffff12] transition-colors"
            >
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl mb-2">
                {cert.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
                {cert.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            What Our Clients Are Saying
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              quote: "The automation of our data science processes reduced time by 60%. We can focus on delivering value instead of building infrastructure.",
              author: "Head of AI",
              company: "MENA Financial Services",
            },
            {
              quote: "QuantorX's platform handles our compliance requirements natively — no workarounds needed for regional regulations.",
              author: "CTO",
              company: "GCC Government Entity",
            },
            {
              quote: "The AI Cloud gave us enterprise-grade ML capabilities without the overhead of managing Kubernetes clusters.",
              author: "VP Engineering",
              company: "MENA Telecom",
            },
          ].map((t) => (
            <div
              key={t.author}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors"
            >
              <blockquote className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/85 text-sm mb-4 italic">
                "{t.quote}"
              </blockquote>
              <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm">{t.author}</p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-xs">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
          Best-in-Class AI Cloud for MENA
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
          Accelerate your AI journey with sovereign, compliant infrastructure.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Start Free Trial
        </Link>
      </div>
    </section>
  </PageLayout>
);
