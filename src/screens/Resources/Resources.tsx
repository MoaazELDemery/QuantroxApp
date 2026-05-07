import { useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout";

type ResourceTab = "all" | "whitepaper" | "webinar" | "guide";

interface Resource {
  type: string;
  typeKey: ResourceTab;
  title: string;
  description: string;
  cta: string;
}

const resources: Resource[] = [
  {
    type: "WHITEPAPER",
    typeKey: "whitepaper",
    title: "Sovereign AI: Why Data Residency Matters for MENA Enterprises",
    description:
      "A comprehensive guide to data sovereignty regulations across the GCC and practical strategies for compliance.",
    cta: "Download",
  },
  {
    type: "WEBINAR",
    typeKey: "webinar",
    title: "Building Arabic NLP Models with QuantorX LLM Masonry™",
    description:
      "60-minute hands-on session: fine-tune Arabic language models for your specific domain.",
    cta: "Watch",
  },
  {
    type: "GUIDE",
    typeKey: "guide",
    title: "GenAI for Banking: A MENA Implementation Playbook",
    description:
      "Step-by-step guide for deploying generative AI in regulated banking environments.",
    cta: "Download",
  },
  {
    type: "WHITEPAPER",
    typeKey: "whitepaper",
    title: "Responsible AI Governance Framework for the Middle East",
    description:
      "Best practices for AI ethics, bias mitigation, and regulatory compliance in MENA.",
    cta: "Download",
  },
  {
    type: "WEBINAR",
    typeKey: "webinar",
    title: "AutoML for Insurance: Fraud Detection in 30 Minutes",
    description:
      "Live demo: build a fraud detection model without writing code.",
    cta: "Watch",
  },
  {
    type: "GUIDE",
    typeKey: "guide",
    title: "Document AI for Government: Arabic Document Processing",
    description:
      "How to automate Arabic document extraction, classification, and summarization.",
    cta: "Download",
  },
];

const tabs: { id: ResourceTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "whitepaper", label: "Whitepapers" },
  { id: "webinar", label: "Webinars" },
  { id: "guide", label: "Guides" },
];

export const Resources = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<ResourceTab>("all");

  const filtered =
    activeTab === "all"
      ? resources
      : resources.filter((r) => r.typeKey === activeTab);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-20 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Learning &amp; Research
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl">
          Resources
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
          Whitepapers, guides, webinars, and downloads to accelerate your AI journey.
        </p>
      </section>

      {/* Tabs + Cards */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Tabs */}
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

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <div
                key={i}
                className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3"
              >
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em]">
                  {r.type}
                </p>
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[-1.80px] leading-snug flex-1">
                  {r.title}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                  {r.description}
                </p>
                <a
                  href="/contact"
                  className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm hover:text-white transition-colors"
                >
                  {r.cta} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
