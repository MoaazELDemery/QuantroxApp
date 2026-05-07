import { PageLayout } from "../../components/layout/PageLayout";

const wikiArticles = [
  {
    title: "What is AutoML?",
    description:
      "Automated machine learning — let the platform find the best model, features, and hyperparameters for your data.",
  },
  {
    title: "What is RAG?",
    description:
      "Retrieval-Augmented Generation — combining LLM reasoning with your enterprise knowledge base for accurate, cited answers.",
  },
  {
    title: "Data Sovereignty",
    description:
      "The principle that data is subject to the laws and governance of the country where it is stored.",
  },
  {
    title: "LLM Fine-Tuning",
    description:
      "Adapting a pre-trained language model to your specific domain, vocabulary, and task requirements.",
  },
  {
    title: "MLOps",
    description:
      "Practices for deploying, monitoring, and maintaining ML models in production environments.",
  },
  {
    title: "Feature Store",
    description:
      "A centralized repository for storing, sharing, and serving ML features consistently across training and inference.",
  },
  {
    title: "AI Agents",
    description:
      "Autonomous AI systems that can perform multi-step tasks, make decisions, and interact with external tools.",
  },
  {
    title: "Guardrails",
    description:
      "Safety mechanisms that constrain AI model outputs to prevent harmful, biased, or off-topic responses.",
  },
  {
    title: "Model Risk Management",
    description:
      "Frameworks for validating, monitoring, and governing AI models in regulated industries.",
  },
];

export const Wiki = (): JSX.Element => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-20 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Knowledge Base
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl">
          QuantorX Wiki
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
          AI knowledge base — concepts, glossary, and best practices.
        </p>
      </section>

      {/* Wiki Articles */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wikiArticles.map((article) => (
            <a
              key={article.title}
              href="/contact"
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3 no-underline group"
            >
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg tracking-[-1.80px] group-hover:text-[#9b5cf6] transition-colors">
                {article.title}
              </h4>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};
