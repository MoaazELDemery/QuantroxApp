import { useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout";

type PartnerType = "si" | "tech" | "reseller" | "cloud";

const partnerTabs: { id: PartnerType; label: string }[] = [
  { id: "si", label: "System Integrators" },
  { id: "tech", label: "Technology Partners" },
  { id: "reseller", label: "Resellers & Distributors" },
  { id: "cloud", label: "Cloud Partners" },
];

const partnerContent: Record<PartnerType, { title: string; description: string; items: string[] }> = {
  si: {
    title: "System Integrators",
    description:
      "Deliver end-to-end AI transformation projects using QuantorX platform. Ideal for consulting firms, IT services companies, and advisory firms operating in MENA.",
    items: [
      "AI strategy consulting and implementation",
      "Custom model development and deployment",
      "Data engineering and MLOps integration",
      "Change management and AI adoption programs",
    ],
  },
  tech: {
    title: "Technology Partners",
    description:
      "Integrate QuantorX with complementary technology platforms — data warehouses, BI tools, CRM systems, and cloud infrastructure.",
    items: [
      "API and SDK integration support",
      "Joint solution architecture",
      "Interoperability certification",
      "Co-innovation labs",
    ],
  },
  reseller: {
    title: "Resellers & Distributors",
    description:
      "Resell QuantorX platform licenses and managed AI services. Ideal for value-added resellers and IT distributors across the GCC and broader MENA.",
    items: [
      "Volume licensing and pricing tiers",
      "Sales training and certification",
      "Marketing development funds (MDF)",
      "Dedicated partner account management",
    ],
  },
  cloud: {
    title: "Cloud Partners",
    description:
      "Deploy QuantorX on your cloud infrastructure — AWS, Azure, GCP, or sovereign regional clouds.",
    items: [
      "Marketplace listings",
      "Co-sell programs",
      "Joint reference architectures",
      "Cloud credits and migration support",
    ],
  },
};

const benefits = [
  {
    title: "Revenue Growth",
    description:
      "Expand your portfolio with AI services — increase deal sizes and recurring revenue through QuantorX licensing and deployment.",
  },
  {
    title: "Technical Enablement",
    description:
      "Access QuantorX Academy, certification programs, and dedicated partner engineering support.",
  },
  {
    title: "Joint Go-to-Market",
    description:
      "Co-marketed campaigns, event sponsorships, and joint case studies to accelerate pipeline.",
  },
  {
    title: "Deal Registration",
    description:
      "Protect your pipeline with deal registration and competitive pricing for qualified opportunities.",
  },
  {
    title: "Demo & POC Support",
    description:
      "Access QuantorX demo environments and proof-of-concept engineering assistance.",
  },
  {
    title: "MENA Market Access",
    description:
      "Leverage our regional presence, relationships, and compliance expertise across 12 MENA markets.",
  },
];

const partners = ["NVIDIA", "AWS", "Microsoft Azure", "Google Cloud", "Dell Technologies", "VMware", "Snowflake", "Databricks"];

const countries = ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Egypt", "Jordan", "Other"];

export const PartnerNetwork = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<PartnerType>("si");

  const content = partnerContent[activeTab];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-20 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Partners
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl">
          Partner Network
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
          Build, sell, and deliver sovereign AI solutions with QuantorX across the MENA region.
        </p>
      </section>

      {/* Why Partner */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px]">
            Why Partner With QuantorX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors"
              >
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg tracking-[-1.80px] mb-3">
                  {b.title}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20 bg-[#ffffff05]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 py-16">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px]">
            Partner Types
          </h2>
          {/* Tab bar */}
          <div className="flex flex-wrap gap-2">
            {partnerTabs.map((tab) => (
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
          {/* Tab content */}
          <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-8">
            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px] mb-4">
              {content.title}
            </h3>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 leading-relaxed mb-6">
              {content.description}
            </p>
            <ul className="flex flex-col gap-3">
              {content.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#9b5cf6] mt-1">&#x2713;</span>
                  <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] text-center">
            Our Partners
          </h2>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {partners.map((p) => (
              <div
                key={p}
                className="bg-[#ffffff0a] rounded-[20px] border border-white/10 px-8 py-4 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white/75 text-sm hover:bg-[#ffffff12] transition-colors"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Form */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24 bg-[#ffffff05]">
        <div className="max-w-2xl mx-auto flex flex-col gap-8 py-16">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px]">
            Become a Partner
          </h2>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm">
                  First name *
                </label>
                <input
                  type="text"
                  required
                  className="bg-[#ffffff0a] border border-white/10 rounded-[12px] px-4 py-3 text-white [font-family:'Satoshi-Regular',Helvetica] text-sm placeholder:text-white/75 focus:outline-none focus:border-[#4a0082]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm">
                  Last name *
                </label>
                <input
                  type="text"
                  required
                  className="bg-[#ffffff0a] border border-white/10 rounded-[12px] px-4 py-3 text-white [font-family:'Satoshi-Regular',Helvetica] text-sm placeholder:text-white/75 focus:outline-none focus:border-[#4a0082]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm">
                Business email *
              </label>
              <input
                type="email"
                required
                className="bg-[#ffffff0a] border border-white/10 rounded-[12px] px-4 py-3 text-white [font-family:'Satoshi-Regular',Helvetica] text-sm placeholder:text-white/75 focus:outline-none focus:border-[#4a0082]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm">
                Company *
              </label>
              <input
                type="text"
                required
                className="bg-[#ffffff0a] border border-white/10 rounded-[12px] px-4 py-3 text-white [font-family:'Satoshi-Regular',Helvetica] text-sm placeholder:text-white/75 focus:outline-none focus:border-[#4a0082]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm">
                Partner type *
              </label>
              <select
                required
                className="bg-[#ffffff0a] border border-white/10 rounded-[12px] px-4 py-3 text-white/75 [font-family:'Satoshi-Regular',Helvetica] text-sm focus:outline-none focus:border-[#4a0082]"
              >
                <option value="">Select…</option>
                <option>System Integrator</option>
                <option>Technology Partner</option>
                <option>Reseller / Distributor</option>
                <option>Cloud Partner</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm">
                Country *
              </label>
              <select
                required
                className="bg-[#ffffff0a] border border-white/10 rounded-[12px] px-4 py-3 text-white/75 [font-family:'Satoshi-Regular',Helvetica] text-sm focus:outline-none focus:border-[#4a0082]"
              >
                <option value="">Select…</option>
                {countries.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm">
                Tell us about your interest
              </label>
              <textarea
                rows={4}
                className="bg-[#ffffff0a] border border-white/10 rounded-[12px] px-4 py-3 text-white [font-family:'Satoshi-Regular',Helvetica] text-sm placeholder:text-white/75 focus:outline-none focus:border-[#4a0082] resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors w-fit"
            >
              Apply Now
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};
