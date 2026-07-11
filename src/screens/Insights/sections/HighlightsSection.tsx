import { useState } from "react";
import { EditorialRows } from "../../../components/page/primitives";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "ai-architecture", label: "AI Architecture" },
  { id: "credit-risk", label: "Credit & Risk" },
  { id: "spatial", label: "Spatial" },
  { id: "deployment", label: "Deployment" },
];

const contentCards = [
  {
    id: 1,
    category: "AI Architecture",
    categoryId: "ai-architecture",
    title: "The End of 'Chat'",
    description: "Why chat-only tools fail in regulated operations, and what real workflow automation looks like in banking and enterprise teams.",
    href: "/insights/the-end-of-chat",
    readTime: "8 min",
  },
  {
    id: 2,
    category: "Spatial",
    categoryId: "spatial",
    title: "The Spatial Compute Revolution",
    description: "Moving beyond static maps: how spatial intelligence supports logistics planning, network optimization, and risk visibility.",
    href: "/insights/spatial-compute-revolution",
    readTime: "7 min",
  },
  {
    id: 3,
    category: "Credit & Risk",
    categoryId: "credit-risk",
    title: "Alternative Credit Scoring",
    description: "How banks can extend credit to thin-file SMEs using explainable signals and policy-driven decisioning.",
    href: "/insights/alternative-credit-scoring",
    readTime: "7 min",
  },
  {
    id: 4,
    category: "Deployment",
    categoryId: "deployment",
    title: "Validating in Synthetic Reality",
    description: "How to safely prove decision workflows before production data and regulations slow you down.",
    href: "/insights/validating-synthetic-reality",
    readTime: "6 min",
  },
];

export const HighlightsSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCards = activeFilter === "all"
    ? contentCards
    : contentCards.filter((card) => card.categoryId === activeFilter);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-x-12 gap-y-6 mb-12">
          <div>
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
              The Index
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl md:text-4xl lg:text-5xl leading-tight">
              Latest from QuantorX
            </h2>
          </div>
          <nav className="flex flex-wrap items-baseline gap-x-7 gap-y-3">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`relative pb-1.5 [font-family:'Satoshi-Medium',Helvetica] font-medium text-sm uppercase tracking-[0.12em] transition-colors ${
                  activeFilter === option.id ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {option.label}
                <span
                  className={`absolute left-0 bottom-0 h-px bg-[#9b5cf6] transition-all duration-300 ${
                    activeFilter === option.id ? "w-full shadow-[0_0_8px_rgba(155,92,246,0.8)]" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </nav>
        </header>

        <EditorialRows
          key={activeFilter}
          rows={filteredCards.map((card) => ({
            tag: card.category,
            title: card.title,
            body: card.description,
            value: `${card.readTime} read`,
            href: card.href,
          }))}
        />
      </div>
    </section>
  );
};
