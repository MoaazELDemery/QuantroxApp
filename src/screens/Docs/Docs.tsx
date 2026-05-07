import { PageLayout } from "../../components/layout/PageLayout";

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
      <section className="w-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-20 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Developer Resources
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl">
          Documentation
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
          Technical guides, API references, and platform documentation.
        </p>
      </section>

      {/* Doc Cards */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docSections.map((doc) => (
            <a
              key={doc.title}
              href="/demo"
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3 no-underline group"
            >
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg tracking-[-1.80px] group-hover:text-[#9b5cf6] transition-colors">
                {doc.title}
              </h4>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                {doc.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};
