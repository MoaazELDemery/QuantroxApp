import { useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";

type LegalTab = "tos" | "privacy" | "data";

const tabs: { id: LegalTab; label: string }[] = [
  { id: "tos", label: "Terms of Service" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "data", label: "Data Governance" },
];

interface LegalSection {
  heading: string;
  body: string;
}

const DOCUMENTS: Record<LegalTab, { title: string; updated: string; sections: LegalSection[] }> = {
  tos: {
    title: "Terms of Service",
    updated: "January 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using QuantorX services, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.",
      },
      {
        heading: "Services",
        body: 'QuantorX provides enterprise AI platform services including but not limited to: AI model training, deployment, monitoring, and management. Services are provided "as-is" with commercially reasonable uptime commitments as defined in your service agreement.',
      },
      {
        heading: "Data Ownership",
        body: "You retain all rights to your data. QuantorX does not claim ownership of customer data processed through our platform. Data remains sovereign to the jurisdiction specified in your service agreement.",
      },
      {
        heading: "Intellectual Property",
        body: "Models trained on your data using QuantorX tools are your intellectual property. QuantorX platform components, algorithms, and pre-trained models remain QuantorX intellectual property.",
      },
      {
        heading: "Limitation of Liability",
        body: "QuantorX liability is limited to the fees paid under the applicable service agreement in the twelve months prior to the claim.",
      },
      {
        heading: "Governing Law",
        body: "These terms are governed by the laws of the Dubai International Financial Centre (DIFC), unless otherwise specified in your service agreement.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "January 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly (name, email, company) and usage data (page views, feature usage). We do not collect or process your AI training data for any purpose other than providing the service.",
      },
      {
        heading: "How We Use Information",
        body: "To provide and improve our services, communicate with you, and comply with legal obligations. We do not sell personal information to third parties.",
      },
      {
        heading: "Data Residency",
        body: "Your data is stored in the region specified in your service agreement. We maintain data centers and cloud infrastructure in the UAE, Saudi Arabia, and other MENA jurisdictions.",
      },
      {
        heading: "Compliance",
        body: "QuantorX complies with UAE Federal Decree-Law No. 45/2021 (PDPL), KSA Personal Data Protection Law, DIFC Data Protection Law, and ADGM Data Protection Regulations.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, rectify, delete, and port your personal data. Contact privacy@quantorx.ai to exercise these rights.",
      },
    ],
  },
  data: {
    title: "Data Governance",
    updated: "January 2026",
    sections: [
      {
        heading: "Data Sovereignty",
        body: "QuantorX is committed to data sovereignty. All customer data remains within the contractually specified jurisdiction. Cross-border data transfers are only permitted with explicit customer consent and appropriate safeguards.",
      },
      {
        heading: "Security Certifications",
        body: "QuantorX maintains SOC2 Type II, ISO 27001:2022, and ISO 27701 certifications. Security audits are conducted annually by independent third parties.",
      },
      {
        heading: "Model Governance",
        body: "All AI models deployed through QuantorX include explainability reports, bias assessments, and performance monitoring dashboards. Model decisions in regulated industries are logged and auditable.",
      },
      {
        heading: "Incident Response",
        body: "QuantorX maintains a 24/7 security operations center. Data breach notifications are issued within 72 hours as required by applicable regulations.",
      },
    ],
  },
};

export const Legal = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<LegalTab>("tos");
  const doc = DOCUMENTS[activeTab];

  return (
    <PageLayout>
      {/* Hero */}
      <PageHero
        eyebrow="Policies & Governance"
        title={<>Legal</>}
        lede="Terms of service, privacy policy, and data governance."
        video="/videos/data-vault.mp4"
        plainTitle
      />

      {/* Tabs + Document */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Tab bar - editorial index */}
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 border-b border-white/10 pb-5 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-sm uppercase tracking-[0.12em] transition-colors ${
                  activeTab === tab.id ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {tab.label}
                <span
                  className={`absolute left-0 -bottom-[21px] h-px bg-[#9b5cf6] transition-all duration-300 ${
                    activeTab === tab.id ? "w-full shadow-[0_0_8px_rgba(155,92,246,0.8)]" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          {/* Document */}
          <div key={activeTab}>
            <div className="mb-10">
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl md:text-4xl leading-tight">
                {doc.title}
              </h2>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/40 text-xs uppercase tracking-[0.2em] mt-3">
                Last updated · {doc.updated}
              </p>
            </div>

            <div className="border-t border-white/10">
              {doc.sections.map((section, i) => (
                <div
                  key={section.heading}
                  className="flex flex-col sm:flex-row items-start gap-3 sm:gap-8 py-8 border-b border-white/10 transition-colors duration-300 hover:border-white/25"
                >
                  <span
                    className="[font-family:'Satoshi-Black',Helvetica] font-black text-2xl leading-none w-12 shrink-0 text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(155,92,246,0.4)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg tracking-[-0.01em] mb-2.5">
                      {section.heading}
                    </h4>
                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-sm lg:text-base leading-relaxed max-w-2xl">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
