import { PageLayout } from "../../../components/layout/PageLayout";
import { PageCTA, EditorialRows } from "../../../components/page/primitives";
import { PageHero } from "../../../components/layout/PageHero";
import { Link } from "react-router-dom";

export const AICloud = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <PageHero
      eyebrow="AI Cloud"
      title={<>QuantorX AI Cloud</>}
      lede="Accelerate and scale AI results with trust and confidence. Deploy in MENA-region data centers with full data sovereignty."
      video="/videos/data-vault.mp4"
      ctas={[{ label: "Request Live Demo", href: "/demo" }]}
    />

    {/* Step 1: Cloud Choice - split ledger */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
            Deployment
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Our cloud, or yours.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-white/15">
          {[
            {
              index: "01",
              title: "Managed Cloud",
              lead: "QuantorX hosted",
              body: "All the value of QuantorX AI Cloud without the day-to-day operations. MENA-region data centers with full data residency compliance.",
            },
            {
              index: "02",
              title: "Hybrid Cloud",
              lead: "Self hosted",
              body: "End-to-end AI platform hosted in your private cloud or on-premise. Full control over infrastructure, data, and compliance.",
            },
          ].map((opt, i) => (
            <div
              key={opt.title}
              className={`relative pt-10 pb-12 pr-8 ${i === 0 ? "sm:border-r sm:border-white/10" : "sm:pl-12"}`}
            >
              <span
                className="pointer-events-none select-none absolute top-8 right-6 [font-family:'Satoshi-Black',Helvetica] font-black text-6xl leading-none text-transparent"
                style={{ WebkitTextStroke: "1px rgba(155,92,246,0.22)" }}
                aria-hidden="true"
              >
                {opt.index}
              </span>
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
                {opt.lead}
              </p>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-0.02em] text-white text-2xl lg:text-3xl mb-4">
                {opt.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/65 max-w-md mb-7">
                {opt.body}
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white/85 text-sm hover:text-white transition-colors"
              >
                Learn more
                <span className="text-[#9b5cf6] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What Makes It Great - hairline columns */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff04]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
            Why It Wins
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            What makes it great.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-10">
          {[
            {
              title: "Best-in-Class AI",
              body: "Powered by award-winning AutoML and no-code deep learning engines - fine-tuned for MENA industries.",
            },
            {
              title: "Freedom & Flexibility",
              body: "One platform across clouds, on-premise environments, and data sources. Your infrastructure, your rules.",
            },
            {
              title: "AI App Store",
              body: "The first dedicated AI App Store for MENA enterprises - unleash AI across your organization.",
            },
          ].map((card, i) => (
            <div key={card.title} className="relative border-t border-white/15 pt-8">
              <span
                className="pointer-events-none select-none absolute top-3 right-0 [font-family:'Satoshi-Black',Helvetica] font-black text-lg leading-none text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.28)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-0.02em] text-white text-xl mb-3">
                {card.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/65">
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
        <div className="max-w-5xl mx-auto">
          <EditorialRows
            rows={[
              { title: "AutoML", body: "Automated machine learning with feature engineering, model development, and explainability - democratizing AI for MENA data teams." },
              { title: "Document AI", body: "Extract data from Arabic and English documents with intelligent OCR, NLP, and deep learning pipelines." },
              { title: "Feature Store", body: "Centralized feature management for consistent, reusable ML features across your organization." },
              { title: "App Builder", body: "Low-code AI application framework - build and deploy data science apps with Python." },
              { title: "MLOps", body: "Model operations: deploy, monitor, manage, and govern ML models in production." },
            ]}
          />
          <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-sm mt-8 flex items-center gap-2.5">
            <span className="w-1 h-1 rounded-full bg-[#9b5cf6]" aria-hidden="true" />
            More coming soon - deep learning, time series, and more, expanding the QuantorX Make ecosystem.
          </p>
        </div>
      </div>
    </section>

    {/* Compliance - certification register band */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
            Compliance
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Enterprise security.<br />Regional compliance.
          </h2>
        </div>
        <div className="border-t border-b border-white/15 divide-y divide-white/10 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-white/10">
          {[
            { title: "SOC 2 Type II", body: "Independent audit and verification.", ref: "CERT / 01" },
            { title: "ISO 27001", body: "Information security management.", ref: "CERT / 02" },
            { title: "MENA Data Residency", body: "UAE PDPL, KSA PDPL compliant.", ref: "CERT / 03" },
          ].map((cert, i) => (
            <div key={cert.title} className={`py-9 ${i > 0 ? "sm:pl-10" : ""} sm:pr-10`}>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9b5cf6] shadow-[0_0_8px_rgba(155,92,246,0.8)]" aria-hidden="true" />
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em]">
                  {cert.ref}
                </span>
              </div>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl tracking-[-0.02em] mb-2">
                {cert.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/60 text-sm">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-10">
          {[
            {
              quote: "The automation of our data science processes reduced time by 60%. We can focus on delivering value instead of building infrastructure.",
              author: "Head of AI",
              company: "MENA Financial Services",
            },
            {
              quote: "QuantorX's platform handles our compliance requirements natively - no workarounds needed for regional regulations.",
              author: "CTO",
              company: "GCC Government Entity",
            },
            {
              quote: "The AI Cloud gave us enterprise-grade ML capabilities without the overhead of managing Kubernetes clusters.",
              author: "VP Engineering",
              company: "MENA Telecom",
            },
          ].map((t) => (
            <figure key={t.author} className="relative border-t border-white/15 pt-8">
              <span
                className="pointer-events-none select-none absolute -top-1 left-0 [font-family:'Satoshi-Black',Helvetica] font-black text-6xl leading-none text-[#9b5cf6]/25"
                aria-hidden="true"
              >
                “
              </span>
              <blockquote className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-base pl-10">
                {t.quote}
              </blockquote>
              <figcaption className="pl-10 mt-5">
                <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm">{t.author}</p>
                <p className="[font-family:'Satoshi-Medium',Helvetica] text-[#9b5cf6] text-xs uppercase tracking-[0.15em] mt-0.5">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

        <PageCTA
      title={<>Best-in-Class AI Cloud for MENA</>}
      sub={<>Accelerate your AI journey with sovereign, compliant infrastructure.</>}
      primary={{ label: "Start Free Trial", href: "/demo" }}
    />
  </PageLayout>
);
