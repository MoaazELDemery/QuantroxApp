import { PageLayout } from "../../components/layout/PageLayout";
import { EditorialRows, PageCTA } from "../../components/page/primitives";
import { PageHero } from "../../components/layout/PageHero";

export const DemoCenter = (): JSX.Element => {
  return (
    <PageLayout>
      {/* Hero */}
      <PageHero
        eyebrow="Interactive Demos"
        title={<>Demo Center</>}
        lede="Interactive product demonstrations - explore QuantorX AI capabilities hands-on."
        video="/videos/cortex-core.mp4"
        plainTitle
      />

      {/* The demo reel, as an index */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-5xl mx-auto">
          <EditorialRows
            rows={[
            {
              title: "GenAI Chat",
              description:
                "Interact with QuantorX's bilingual AI assistant - ask questions in Arabic or English and see citation-backed RAG responses.",
            },
            {
              title: "Document AI",
              description:
                "Upload contracts, invoices, or regulatory documents and watch QuantorX extract structured data automatically.",
            },
            {
              title: "AutoML",
              description:
                "Build a machine learning model in minutes - upload a dataset and let QuantorX AutoML find the best model automatically.",
            },
            {
              title: "Fraud Detection",
              description:
                "See real-time transaction scoring in action - our fraud detection agents flag suspicious activity instantly.",
            },
            {
              title: "LLM Masonry™",
              description:
                "Fine-tune small language models on your own data - no code required. See the training and evaluation workflow.",
            },
            {
              title: "App Builder",
              description:
                "Build AI-powered web applications with drag-and-drop. See a complete app created in under 10 minutes.",
            },
          ].map((demo) => ({ title: demo.title, body: demo.description, href: "/demo" }))}
          />
        </div>
      </section>

          <PageCTA
      title={<>Want a Personalized Demo?</>}
      sub={<>Our team will walk you through the platform with your specific use case.</>}
      primary={{ label: "Request Custom Demo", href: "/contact" }}
    />
    </PageLayout>
  );
};
