import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <section className="flex flex-col w-full items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="flex flex-col items-start gap-10 w-full max-w-7xl mx-auto">

        <header className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-[-1.80px] leading-tight">
            Latest from QuantorX
          </h2>
          <nav className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-[#1f1f1f] rounded-2xl flex-wrap">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-3 py-1.5 rounded-xl text-sm [font-family:'Satoshi-Medium',Helvetica] transition-colors ${
                  activeFilter === option.id
                    ? "bg-[#4a0082] text-white"
                    : "text-white/75 hover:text-white hover:bg-white/5"
                }`}
              >
                {option.label}
              </button>
            ))}
          </nav>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {filteredCards.map((card) => {
            // Per-category visual identity
            const themes: Record<string, { gradient: string; accent: string; pattern: string }> = {
              "ai-architecture": {
                gradient: "linear-gradient(135deg, #4a0082 0%, #1a0a2e 70%)",
                accent: "#9b5cf6",
                pattern: "radial-gradient(circle at 30% 30%, rgba(155,92,246,0.5), transparent 55%), radial-gradient(circle at 75% 70%, rgba(168,85,247,0.3), transparent 55%)",
              },
              "spatial": {
                gradient: "linear-gradient(135deg, #064e3b 0%, #042f2e 70%)",
                accent: "#00c9a7",
                pattern: "radial-gradient(circle at 70% 30%, rgba(0,201,167,0.45), transparent 55%), radial-gradient(circle at 25% 75%, rgba(45,212,191,0.25), transparent 55%)",
              },
              "credit-risk": {
                gradient: "linear-gradient(135deg, #4c1d95 0%, #1e1b4b 70%)",
                accent: "#c084fc",
                pattern: "radial-gradient(circle at 50% 30%, rgba(192,132,252,0.4), transparent 55%), radial-gradient(circle at 80% 80%, rgba(217,70,239,0.25), transparent 55%)",
              },
              "deployment": {
                gradient: "linear-gradient(135deg, #92400e 0%, #451a03 70%)",
                accent: "#f59e0b",
                pattern: "radial-gradient(circle at 25% 25%, rgba(245,158,11,0.4), transparent 55%), radial-gradient(circle at 70% 70%, rgba(251,191,36,0.25), transparent 55%)",
              },
            };
            const theme = themes[card.categoryId] ?? themes["ai-architecture"];

            return (
              <Link
                key={card.id}
                to={card.href}
                className="group flex flex-col glass rounded-[20px] overflow-hidden"
              >
                {/* Branded thumbnail with category gradient + watermark */}
                <div
                  className="h-36 relative overflow-hidden"
                  style={{ background: theme.gradient }}
                >
                  {/* Decorative blur pattern */}
                  <div className="absolute inset-0" style={{ background: theme.pattern, filter: "blur(2px)" }} />
                  {/* Wireframe grid overlay */}
                  <div className="absolute inset-0 wireframe-grid opacity-30" />
                  {/* QuantorX wordmark watermark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="[font-family:'Satoshi-Black',Helvetica] font-black text-2xl tracking-[0.3em] uppercase opacity-30 group-hover:opacity-50 transition-opacity"
                      style={{ color: theme.accent }}
                    >
                      QuantorX
                    </span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3">
                    <span
                      className="bg-black/60 backdrop-blur-sm text-xs px-2.5 py-1 rounded-lg [font-family:'Satoshi-Medium',Helvetica] border"
                      style={{ color: theme.accent, borderColor: `${theme.accent}40` }}
                    >
                      {card.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg leading-snug transition-colors" style={{ color: undefined }}>
                    {card.title}
                  </h3>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-white/50 [font-family:'Satoshi-Regular',Helvetica]">{card.readTime} read</span>
                    <span
                      className="text-sm [font-family:'Satoshi-Medium',Helvetica] group-hover:translate-x-1 transition-transform inline-block"
                      style={{ color: theme.accent }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
