import { PageLayout } from "../../../components/layout/PageLayout";
import { PageCTA, EditorialRows, SectionHeader, StatValue } from "../../../components/page/primitives";
import { PageHero } from "../../../components/layout/PageHero";

export const Certifications = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <PageHero
      eyebrow="Trust & Compliance"
      title={<>Certifications &amp; Recognition</>}
      lede="QuantorX meets the highest standards of security, privacy, and regulatory compliance - purpose-built for MENA's most regulated industries."
      video="/videos/tech-circuit.mp4"
    />

    {/* International Standards */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="International Standards"
          title={<>Audited. Certified.<br />Independently verified.</>}
          className="mb-10"
        />
        <EditorialRows
          rows={[
            {
              tag: "Security",
              title: "SOC 2 Type II",
              body: "Independent verification of security, availability, processing integrity, confidentiality, and privacy controls.",
              value: "Certified",
            },
            {
              tag: "ISMS",
              title: "ISO 27001",
              body: "Certified information security management system meeting international best practices.",
              value: "Certified",
            },
            {
              tag: "Privacy",
              title: "ISO 27701",
              body: "Privacy information management extension - demonstrating GDPR and regional privacy compliance.",
              value: "Certified",
            },
          ]}
        />
      </div>
    </section>

    {/* MENA Regional Compliance */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff04]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="Regional Register"
          title={<>Compliant where<br />you operate.</>}
          lede="Data residency, consent, and model governance mapped to every MENA regulator that matters."
          className="mb-10"
        />
        <EditorialRows
          startIndex={4}
          rows={[
            {
              tag: "UAE",
              title: "Personal Data Protection Law (PDPL)",
              body: "Full compliance with the UAE's Federal Decree-Law No. 45 of 2021. Data processing, storage, and transfer controls built into the platform architecture.",
            },
            {
              tag: "KSA",
              title: "Personal Data Protection Law (PDPL)",
              body: "Compliant with Saudi Arabia's PDPL enacted September 2023. Data residency, consent management, and cross-border transfer controls.",
            },
            {
              tag: "DIFC · ADGM",
              title: "Financial Free Zone Data Protection",
              body: "Compliance with DIFC Data Protection Law No. 5/2020 and ADGM Data Protection Regulations 2021 for financial free zone operations.",
            },
            {
              tag: "SAMA · CBUAE · QCB",
              title: "Central Bank Regulations",
              body: "AI model governance aligned with UAE Central Bank, SAMA (Saudi Arabia), and QCB (Qatar) regulatory frameworks for AI in financial services.",
            },
          ]}
        />
      </div>
    </section>

    {/* Industry Recognition */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="Recognition"
          title={<>Seen on the region's<br />biggest stages.</>}
          className="mb-10"
        />
        <EditorialRows
          startIndex={8}
          rows={[
            {
              tag: "Award",
              title: "MENA AI Innovation Award",
              body: "Recognized for pioneering sovereign AI deployment across the GCC region.",
            },
            {
              tag: "Partner",
              title: "GITEX Technology Week",
              body: "Featured AI platform partner for enterprise transformation in the Middle East.",
            },
          ]}
        />
      </div>
    </section>

    {/* Engineer Credentials - typographic vendor band */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff04]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-16 gap-y-10 items-end mb-14">
          <div>
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
              Team Credentials
            </p>
            <div className="[font-family:'Satoshi-Black',Helvetica] font-black text-white text-7xl lg:text-8xl tracking-[-0.04em] leading-none">
              <StatValue val="200+" accent="#ffffff" />
            </div>
          </div>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-base lg:text-lg leading-relaxed max-w-md lg:pb-2">
            Professional certifications held by QuantorX engineers across the platforms your
            infrastructure already runs on.
          </p>
        </div>
        <div className="border-t border-b border-white/15 divide-y divide-white/10 sm:divide-y-0 sm:grid sm:grid-cols-4 sm:divide-x sm:divide-white/10">
          {["AWS", "Microsoft Azure", "Google Cloud", "NVIDIA"].map((vendor, i) => (
            <div key={vendor} className={`py-8 ${i > 0 ? "sm:pl-8" : ""} sm:pr-8`}>
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em] mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white/85 text-lg tracking-[-0.01em]">
                {vendor}
              </p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-xs mt-1.5">
                Certified engineers
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <PageCTA
      title={<>Trust QuantorX with Your Enterprise AI</>}
      sub={<>Security, compliance, and transparency - built into every layer.</>}
      primary={{ label: "Request Demo", href: "/demo" }}
    />
  </PageLayout>
);
