import { PageLayout } from "../../components/layout/PageLayout";

const learningPaths = [
  {
    title: "AI Foundations",
    description:
      "Introduction to machine learning, data science, and AI concepts — designed for business professionals.",
    meta: "Beginner · 8 hours · Free",
  },
  {
    title: "AutoML Practitioner",
    description:
      "Master QuantorX AutoML — from data ingestion to model deployment, no coding required.",
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
      "Deep dive into Arabic language models — tokenization, embeddings, and fine-tuning for Gulf dialects.",
    meta: "Advanced · 20 hours · Free",
  },
  {
    title: "MLOps Engineer",
    description:
      "Production ML pipelines — CI/CD, model monitoring, feature stores, and infrastructure management.",
    meta: "Advanced · 30 hours · Free",
  },
  {
    title: "AI for Executives",
    description:
      "Strategic AI adoption guide for C-suite leaders — ROI frameworks, governance, and change management.",
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
      <section className="w-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-20 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          AI Training &amp; Certification
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl">
          QuantorX Academy
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
          Free and premium AI training courses, certifications, and learning paths for every skill level.
        </p>
      </section>

      {/* Learning Paths */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px]">
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div
                key={path.title}
                className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3"
              >
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg tracking-[-1.80px]">
                  {path.title}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed flex-1">
                  {path.description}
                </p>
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em]">
                  {path.meta}
                </p>
              </div>
            ))}
          </div>
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
                className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3 text-center items-center"
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

      {/* CTA Banner */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-7xl mx-auto bg-[#ffffff0a] rounded-[20px] border border-white/10 p-12 text-center">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] mb-4">
            Start Learning Today
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed mb-8">
            All foundational courses are free. No credit card required.
          </p>
          <a
            href="/demo"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </PageLayout>
  );
};
