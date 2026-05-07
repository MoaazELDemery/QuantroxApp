import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

const features = [
  {
    title: "Strategic Territory Optimization",
    body: "Cortex connects live GIS data, demographics, and competitor overlays to answer: where should we expand, consolidate, or invest — ranked by expected ROI.",
  },
  {
    title: "Intelligent Field Operations",
    body: "Automated activity planning using territory constraints, travel time, and priority weighting. Cuts wasted hours and maximizes field coverage across your entire network.",
  },
  {
    title: "Geospatial Risk Intelligence",
    body: "Real-time identification of assets, branches, or customers inside high-risk zones — flood, credit stress, political, or competitive threat perimeters.",
  },
  {
    title: "Branch Network Planning",
    body: "Data-backed expansion roadmap: which cities to enter, which branches to consolidate, which zones are over- or under-served — with live GIS and competitor data.",
  },
  {
    title: "Urban & Infrastructure Forecasting",
    body: "Predict where cities will expand, where infrastructure stress points will emerge, and where demand will outpace capacity — before it happens.",
  },
  {
    title: "Spatial Analytics Layer",
    body: "Fuse satellite imagery, IoT telemetry, census data, and internal records into a unified spatial intelligence platform — processed inside your Cortex deployment.",
  },
];

const outcomes = [
  { val: "3×", label: "Faster strategic territory decisions" },
  { val: "100%", label: "Sovereign — no GIS data leaves your infrastructure" },
  { val: "Live", label: "Real-time geospatial risk monitoring" },
];

export const AxonAI = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#00c9a7] text-sm uppercase tracking-[0.15em] mb-4">
            Axon AI — Spatial Intelligence
          </p>
          <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
            The Geographic<br />Brain.
          </h1>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-6 max-w-xl">
            Turns maps and spatial data into governed strategic decisions. Branch planning, coverage
            optimisation, and field operations — powered by Cortex™.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-base mb-10 max-w-xl">
            Organizations treat maps as visuals — pins on a screen. Axon treats location as a core driver of
            revenue and risk. Without spatial intelligence, expansion is guesswork, routing is wasteful, and
            geographic risk is invisible.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center bg-[#00c9a7] rounded-[32px] px-8 py-3 text-black [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#00c9a7]/90 transition-colors"
            >
              Book an Axon Demo
            </Link>
            <Link
              to="/technology/ai-platform"
              className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors"
            >
              How Cortex Powers It →
            </Link>
          </div>
        </div>

        {/* Questions card */}
        <div className="bg-[#ffffff0a] rounded-[24px] border border-white/10 p-8">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#00c9a7] text-xs uppercase tracking-[0.15em] mb-3">
            Use Case — Branch Network Planning
          </p>
          <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl mb-6">
            Questions Axon AI Answers.
          </h3>
          <div className="flex flex-col gap-4">
            {[
              '"Which 3 cities should we expand into next quarter, ranked by expected ROI?"',
              '"Which branches are over-serving low-value zones and should be consolidated?"',
              '"What percentage of our SME clients are in flood or political risk zones?"',
              '"Where is our field coverage weakest relative to competitor presence?"',
            ].map((q) => (
              <div key={q} className="p-4 bg-[#9b5cf6]/5 rounded-xl border-l-[3px] border-[#00c9a7]">
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm">{q}</p>
              </div>
            ))}
          </div>
          <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/75 text-sm mt-5">
            Powered by GIS layers, population data, credit bureau overlays, and custom risk scoring — all
            processed inside your Cortex deployment.
          </p>
        </div>
      </div>
    </section>

    {/* Outcomes bar */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {outcomes.map((o) => (
          <div key={o.val} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center">
            <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl lg:text-5xl text-[#00c9a7] mb-3">{o.val}</div>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{o.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 6 Capabilities */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#00c9a7] text-sm uppercase tracking-[0.15em] mb-4">
            Core Capabilities
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
            Spatial Intelligence at Enterprise Scale.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-[20px] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00c9a7]/15 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#00c9a7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-3">{f.title}</h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonial */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-20 bg-[#ffffff04] border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-xl italic mb-6">
          "Axon AI gave us a ranked expansion roadmap backed by live GIS data and competitor overlays. We
          identified three high-ROI cities we had not considered — and avoided two we were already planning."
        </p>
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#00c9a7] text-sm uppercase tracking-[0.15em]">
          VP of Strategy — Retail Network, GCC
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Turn Your Maps Into Decisions.
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
          Deploy Axon AI inside your sovereign infrastructure — no spatial data leaves your walls.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center justify-center bg-[#00c9a7] rounded-[32px] px-8 py-3 text-black [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#00c9a7]/90 transition-colors"
        >
          Book an Axon Demo
        </Link>
      </div>
    </section>
  </PageLayout>
);
