import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";
import { EditorialRows } from "../../components/page/primitives";

const wikiArticles = [
  {
    title: "What is AutoML?",
    description:
      "Automated machine learning - let the platform find the best model, features, and hyperparameters for your data.",
  },
  {
    title: "What is RAG?",
    description:
      "Retrieval-Augmented Generation - combining LLM reasoning with your enterprise knowledge base for accurate, cited answers.",
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
      <PageHero
        eyebrow="Knowledge Base"
        title={<>QuantorX Wiki</>}
        lede="AI knowledge base - concepts, glossary, and best practices."
        video="/videos/tech-circuit.mp4"
        plainTitle
      />

      {/* The knowledge base, as an index */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-5xl mx-auto">
          <EditorialRows
            rows={wikiArticles.map((a) => ({ title: a.title, body: a.description, href: "/contact" }))}
          />
        </div>
      </section>
    </PageLayout>
  );
};
