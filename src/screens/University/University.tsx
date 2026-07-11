import { PageLayout } from "../../components/layout/PageLayout";
import { PageCTA, EditorialRows } from "../../components/page/primitives";
import { PageHero } from "../../components/layout/PageHero";

const learningPaths = [
  {
    title: "AI Foundations",
    description:
      "Introduction to machine learning, data science, and AI concepts - designed for business professionals.",
    meta: "Beginner · 8 hours · Free",
  },
  {
    title: "AutoML Practitioner",
    description:
      "Master QuantorX AutoML - from data ingestion to model deployment, no coding required.",
    meta: "Intermediate · 16 hours · Free",
  },
  {
    title: "GenAI Developer",
    description:
      "Build RAG pipelines, fine-tune LLMs, and create AI agents using QuantorX CORTEX™.",
    meta: "Advanced · 24 hours · Free",
  },
  {
    title: "Arabic NLP Specialist",
    description:
      "Deep dive into Arabic language models - tokenization, embeddings, and fine-tuning for Gulf dialects.",
    meta: "Advanced · 20 hours · Free",
  },
  {
    title: "MLOps Engineer",
    description:
      "Production ML pipelines - CI/CD, model monitoring, feature stores, and infrastructure management.",
    meta: "Advanced · 30 hours · Free",
  },
  {
    title: "AI for Executives",
    description:
      "Strategic AI adoption guide for C-suite leaders - ROI frameworks, governance, and change management.",
    meta: "Executive · 6 hours · Free",
  },
];

const certifications = [
  {
    title: "QuantorX Certified AI Practitioner",
    description: "Validates core AutoML and CORTEX™ proficiency.",
  },
  {
    title: "QuantorX Certified GenAI Developer",
    description: "Validates RAG, LLM fine-tuning, and agent development skills.",
  },
  {
    title: "QuantorX Certified MLOps Engineer",
    description: "Validates production ML pipeline and infrastructure expertise.",
  },
];

export const University = (): JSX.Element => {
  return (
    <PageLayout>
      {/* Hero */}
      <PageHero
        eyebrow="AI Training & Certification"
        title={<>QuantorX Academy</>}
        lede="Free and premium AI training courses, certifications, and learning paths for every skill level."
        video="/videos/hero-neural.mp4"
        plainTitle
      />

      {/* Learning paths, as a curriculum index */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px]">
            Learning Paths
          </h2>
          <EditorialRows
            rows={learningPaths.map((path) => ({ title: path.title, body: path.description, value: path.meta }))}
          />
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20 bg-[#ffffff05]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 py-16">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px]">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass-panel glass-hover rounded-[20px] p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3 text-center items-center"
              >
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[-1.80px]">
                  {cert.title}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

          <PageCTA
      title={<>Start Learning Today</>}
      sub={<>All foundational courses are free. No credit card required.</>}
      primary={{ label: "Get Started", href: "/demo" }}
    />
    </PageLayout>
  );
};
