import { PageLayout } from "../../../components/layout/PageLayout";
import { Link } from "react-router-dom";

export const Certifications = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Trust &amp; Compliance
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
          Certifications &amp; Recognition
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg max-w-2xl mx-auto">
          QuantorX meets the highest standards of security, privacy, and regulatory compliance — purpose-built for MENA's most regulated industries.
        </p>
      </div>
    </section>

    {/* International Standards */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            International Standards
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🔒",
              title: "SOC 2 Type II",
              body: "Independent verification of security, availability, processing integrity, confidentiality, and privacy controls.",
            },
            {
              icon: "🛡️",
              title: "ISO 27001",
              body: "Certified information security management system meeting international best practices.",
            },
            {
              icon: "📋",
              title: "ISO 27701",
              body: "Privacy information management extension — demonstrating GDPR and regional privacy compliance.",
            },
          ].map((cert) => (
            <div
              key={cert.title}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center hover:bg-[#ffffff12] transition-colors"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-xl mb-3">
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

    {/* MENA Regional Compliance */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            MENA Regional Compliance
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "UAE Personal Data Protection Law (PDPL)",
              body: "Full compliance with the UAE's Federal Decree-Law No. 45 of 2021. Data processing, storage, and transfer controls built into the platform architecture.",
            },
            {
              title: "KSA Personal Data Protection Law (PDPL)",
              body: "Compliant with Saudi Arabia's PDPL enacted September 2023. Data residency, consent management, and cross-border transfer controls.",
            },
            {
              title: "DIFC & ADGM Data Protection",
              body: "Compliance with DIFC Data Protection Law No. 5/2020 and ADGM Data Protection Regulations 2021 for financial free zone operations.",
            },
            {
              title: "Central Bank Regulations",
              body: "AI model governance aligned with UAE Central Bank, SAMA (Saudi Arabia), and QCB (Qatar) regulatory frameworks for AI in financial services.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors"
            >
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-xl mb-3">
                {item.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Recognition */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Industry Recognition
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "MENA AI Innovation Award",
              body: "Recognized for pioneering sovereign AI deployment across the GCC region.",
            },
            {
              title: "GITEX Technology Week",
              body: "Featured AI platform partner for enterprise transformation in the Middle East.",
            },
          ].map((award) => (
            <div
              key={award.title}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center hover:bg-[#ffffff12] transition-colors"
            >
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-xl mb-3">
                {award.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
                {award.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Engineer Credentials */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
            Team Credentials
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            200+ Professional Certifications
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["AWS", "Microsoft Azure", "Google Cloud", "NVIDIA"].map((vendor) => (
            <div
              key={vendor}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center hover:bg-[#ffffff12] transition-colors"
            >
              <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base">{vendor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
          Trust QuantorX with Your Enterprise AI
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
          Security, compliance, and transparency — built into every layer.
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
