import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";
import { EditorialRows } from "../../components/page/primitives";

const docSections = [
  {
    title: "CORTEX™",
    description: "Setup, configuration, RAG pipelines, agents, and API reference.",
  },
  {
    title: "AutoML",
    description: "Data ingestion, experiment management, model deployment, and scoring.",
  },
  {
    title: "LLM Masonry™",
    description: "Model fine-tuning, dataset preparation, training, and export.",
  },
  {
    title: "Document AI",
    description: "OCR, extraction, classification, and Arabic document processing.",
  },
  {
    title: "App Builder",
    description: "Low-code AI app development, widgets, and deployment.",
  },
  {
    title: "MLOps & Feature Store",
    description: "Pipeline orchestration, model monitoring, feature engineering.",
  },
  {
    title: "REST API Reference",
    description:
      "Complete API documentation with code examples in Python, cURL, and JavaScript.",
  },
  {
    title: "Python Client",
    description: "Python SDK documentation, installation, and usage guides.",
  },
  {
    title: "Release Notes",
    description: "Latest updates, new features, and version history.",
  },
];

export const Docs = (): JSX.Element => {
  return (
    <PageLayout>
      {/* Hero */}
      <PageHero
        eyebrow="Developer Resources"
        title={<>Documentation</>}
        lede="Technical guides, API references, and platform documentation."
        video="/videos/tech-circuit.mp4"
        plainTitle
      />

      {/* The manual, as chapters */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-5xl mx-auto">
          <EditorialRows
            rows={docSections.map((doc) => ({ title: doc.title, body: doc.description, href: "/demo" }))}
          />
        </div>
      </section>
    </PageLayout>
  );
};
