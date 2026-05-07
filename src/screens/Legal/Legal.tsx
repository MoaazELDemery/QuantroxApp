import { useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout";

type LegalTab = "tos" | "privacy" | "data";

const tabs: { id: LegalTab; label: string }[] = [
  { id: "tos", label: "Terms of Service" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "data", label: "Data Governance" },
];

export const Legal = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<LegalTab>("tos");

  return (
    <PageLayout>
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-20 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Policies &amp; Governance
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl">
          Legal
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
          Terms of service, privacy policy, and data governance.
        </p>
      </section>

      {/* Tabs + Content */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {/* Tab bar */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-[32px] text-sm [font-family:'Satoshi-Medium',Helvetica] transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#4a0082] text-white"
                    : "bg-[#ffffff0a] text-white/75 border border-white/10 hover:bg-[#ffffff12]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Terms of Service */}
          {activeTab === "tos" && (
            <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-8 flex flex-col gap-6">
              <div>
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
                  Terms of Service
                </h2>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm mt-1">
                  Last updated: January 2026
                </p>
              </div>
              {[
                {
                  heading: "1. Acceptance of Terms",
                  body: "By accessing or using QuantorX services, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.",
                },
                {
                  heading: "2. Services",
                  body: 'QuantorX provides enterprise AI platform services including but not limited to: AI model training, deployment, monitoring, and management. Services are provided "as-is" with commercially reasonable uptime commitments as defined in your service agreement.',
                },
                {
                  heading: "3. Data Ownership",
                  body: "You retain all rights to your data. QuantorX does not claim ownership of customer data processed through our platform. Data remains sovereign to the jurisdiction specified in your service agreement.",
                },
                {
                  heading: "4. Intellectual Property",
                  body: "Models trained on your data using QuantorX tools are your intellectual property. QuantorX platform components, algorithms, and pre-trained models remain QuantorX intellectual property.",
                },
                {
                  heading: "5. Limitation of Liability",
                  body: "QuantorX liability is limited to the fees paid under the applicable service agreement in the twelve months prior to the claim.",
                },
                {
                  heading: "6. Governing Law",
                  body: "These terms are governed by the laws of the Dubai International Financial Centre (DIFC), unless otherwise specified in your service agreement.",
                },
              ].map((section) => (
                <div key={section.heading} className="flex flex-col gap-2">
                  <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[-1.80px]">
                    {section.heading}
                  </h4>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Privacy Policy */}
          {activeTab === "privacy" && (
            <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-8 flex flex-col gap-6">
              <div>
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
                  Privacy Policy
                </h2>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm mt-1">
                  Last updated: January 2026
                </p>
              </div>
              {[
                {
                  heading: "1. Information We Collect",
                  body: "We collect information you provide directly (name, email, company) and usage data (page views, feature usage). We do not collect or process your AI training data for any purpose other than providing the service.",
                },
                {
                  heading: "2. How We Use Information",
                  body: "To provide and improve our services, communicate with you, and comply with legal obligations. We do not sell personal information to third parties.",
                },
                {
                  heading: "3. Data Residency",
                  body: "Your data is stored in the region specified in your service agreement. We maintain data centers and cloud infrastructure in the UAE, Saudi Arabia, and other MENA jurisdictions.",
                },
                {
                  heading: "4. Compliance",
                  body: "QuantorX complies with UAE Federal Decree-Law No. 45/2021 (PDPL), KSA Personal Data Protection Law, DIFC Data Protection Law, and ADGM Data Protection Regulations.",
                },
                {
                  heading: "5. Your Rights",
                  body: "You have the right to access, rectify, delete, and port your personal data. Contact privacy@quantorx.ai to exercise these rights.",
                },
              ].map((section) => (
                <div key={section.heading} className="flex flex-col gap-2">
                  <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[-1.80px]">
                    {section.heading}
                  </h4>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Data Governance */}
          {activeTab === "data" && (
            <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-8 flex flex-col gap-6">
              <div>
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
                  Data Governance
                </h2>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm mt-1">
                  Last updated: January 2026
                </p>
              </div>
              {[
                {
                  heading: "1. Data Sovereignty",
                  body: "QuantorX is committed to data sovereignty. All customer data remains within the contractually specified jurisdiction. Cross-border data transfers are only permitted with explicit customer consent and appropriate safeguards.",
                },
                {
                  heading: "2. Security Certifications",
                  body: "QuantorX maintains SOC2 Type II, ISO 27001:2022, and ISO 27701 certifications. Security audits are conducted annually by independent third parties.",
                },
                {
                  heading: "3. Model Governance",
                  body: "All AI models deployed through QuantorX include explainability reports, bias assessments, and performance monitoring dashboards. Model decisions in regulated industries are logged and auditable.",
                },
                {
                  heading: "4. Incident Response",
                  body: "QuantorX maintains a 24/7 security operations center. Data breach notifications are issued within 72 hours as required by applicable regulations.",
                },
              ].map((section) => (
                <div key={section.heading} className="flex flex-col gap-2">
                  <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[-1.80px]">
                    {section.heading}
                  </h4>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};
