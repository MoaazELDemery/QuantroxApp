import { useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";
import { EditorialRows } from "../../components/page/primitives";

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
      <PageHero
        eyebrow="Learning & Research"
        title={<>Resources</>}
        lede="Whitepapers, guides, webinars, and downloads to accelerate your AI journey."
        video="/videos/hero-neural.mp4"
        plainTitle
      />

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
                    : "glass-panel glass-hover text-white/75"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* The library, as an index */}
          <div className="max-w-5xl">
            <EditorialRows
              rows={filtered.map((r) => ({ tag: r.type, title: r.title, body: r.description, href: "/contact" }))}
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
