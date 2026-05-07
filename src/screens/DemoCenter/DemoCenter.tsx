import { PageLayout } from "../../components/layout/PageLayout";

export const DemoCenter = (): JSX.Element => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-20 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Interactive Demos
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl">
          Demo Center
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
          Interactive product demonstrations — explore QuantorX AI capabilities hands-on.
        </p>
      </section>

      {/* Demo Cards */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "GenAI Chat",
              description:
                "Interact with QuantorX's bilingual AI assistant — ask questions in Arabic or English and see citation-backed RAG responses.",
            },
            {
              title: "Document AI",
              description:
                "Upload contracts, invoices, or regulatory documents and watch QuantorX extract structured data automatically.",
            },
            {
              title: "AutoML",
              description:
                "Build a machine learning model in minutes — upload a dataset and let QuantorX AutoML find the best model automatically.",
            },
            {
              title: "Fraud Detection",
              description:
                "See real-time transaction scoring in action — our fraud detection agents flag suspicious activity instantly.",
            },
            {
              title: "LLM Masonry™",
              description:
                "Fine-tune small language models on your own data — no code required. See the training and evaluation workflow.",
            },
            {
              title: "App Builder",
              description:
                "Build AI-powered web applications with drag-and-drop. See a complete app created in under 10 minutes.",
            },
          ].map((demo) => (
            <div
              key={demo.title}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-4"
            >
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl tracking-[-1.80px]">
                {demo.title}
              </h4>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed flex-1">
                {demo.description}
              </p>
              <a
                href="/demo"
                className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors w-fit text-sm"
              >
                Try Demo
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-7xl mx-auto bg-[#ffffff0a] rounded-[20px] border border-white/10 p-12 text-center">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] mb-4">
            Want a Personalized Demo?
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed mb-8">
            Our team will walk you through the platform with your specific use case.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Request Custom Demo
          </a>
        </div>
      </section>
    </PageLayout>
  );
};
