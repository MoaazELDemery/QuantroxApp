import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

export const SpatialComputeRevolution = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/insights" className="text-[#9b5cf6] text-sm [font-family:'Satoshi-Medium',Helvetica] hover:underline">
            ← Insights
          </Link>
          <span className="text-white/20">·</span>
          <span className="bg-[#4a0082]/30 border border-[#9b5cf6]/30 text-[#9b5cf6] text-xs px-3 py-1 rounded-full [font-family:'Satoshi-Medium',Helvetica]">
            Spatial Intelligence
          </span>
          <span className="text-white/75 text-xs [font-family:'Satoshi-Regular',Helvetica]">7 min read</span>
        </div>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl tracking-[-1.80px] leading-tight mb-6">
          The Spatial Compute Revolution:<br />Beyond Static Maps
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed">
          Traditional GIS tells you where things are. Spatial AI tells you what to do about it.
          The gap between those two capabilities is measured in billions of dollars of operational decisions.
        </p>
      </div>
    </section>

    <article className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">

        {/* Section 1 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            What Traditional GIS Actually Does
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            Geographic Information Systems have been enterprise infrastructure since the 1980s.
            They store, visualize, and query spatial data — where your assets are, what's inside a boundary,
            which points are within a radius. For decades, that was sufficient. A utilities company knew
            where its pipes were. A retailer knew which districts had stores. A logistics firm knew its depot locations.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            The limitation is that traditional GIS is descriptive, not prescriptive. It answers "where."
            It does not answer "what should happen next." That gap — between knowing the spatial state
            of your operations and knowing what decision to make — is where spatial AI operates.
          </p>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            Three Industries Where the Shift Matters Most
          </h2>

          <div className="flex flex-col gap-5">
            {[
              {
                industry: "Logistics & Last-Mile Delivery",
                problem: "Static route planning based on time-of-day estimates.",
                solution: "Real-time spatial AI combines live traffic, vehicle location, package priority, and customer time windows to re-route continuously. Decisions happen every few minutes, not once at dispatch.",
                impact: "15–20% reduction in delivery hours. Significant fuel cost reduction across large fleets.",
              },
              {
                industry: "Telecoms Network Coverage",
                problem: "Tower placement decisions based on population density maps and manual surveys.",
                solution: "Spatial ML models layer population movement data, building density, terrain interference, and competitor coverage gaps to predict demand and recommend tower locations with expected ROI per site.",
                impact: "Faster site selection, better predicted uptake, reduced build-then-regret cycles.",
              },
              {
                industry: "Retail & FMCG Site Selection",
                problem: "Site selection committees relying on foot traffic counts and gut feel.",
                solution: "Spatial models analyze mobility patterns, competitive density, income proxies from surrounding property data, and cannibalization risk from existing stores — before a single lease is signed.",
                impact: "Higher first-year revenue in new stores versus unmodeled site selection. Fewer underperforming openings.",
              },
            ].map((item) => (
              <div key={item.industry} className="bg-[#ffffff08] border border-white/10 rounded-[16px] p-6 flex flex-col gap-3">
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base">{item.industry}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-[#9b5cf6] [font-family:'Satoshi-Medium',Helvetica] uppercase tracking-widest mb-1">Before</p>
                    <p className="text-sm text-white/75 [font-family:'Satoshi-Regular',Helvetica] leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#00c9a7] [font-family:'Satoshi-Medium',Helvetica] uppercase tracking-widest mb-1">After Spatial AI</p>
                    <p className="text-sm text-white/75 [font-family:'Satoshi-Regular',Helvetica] leading-relaxed">{item.solution}</p>
                  </div>
                </div>
                <p className="text-xs text-white/50 [font-family:'Satoshi-Regular',Helvetica] border-t border-white/10 pt-3">{item.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            The Data Infrastructure Question
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            Spatial AI requires spatial data at scale — and that's where most organizations hit the first barrier.
            Point-in-time snapshots are not enough. The most useful spatial signals are continuous: vehicle tracks,
            mobility flows, satellite imagery updated daily, IoT sensor readings by the second.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            The practical architecture requires a spatial data pipeline: ingestion of streaming location events,
            geospatial indexing (H3, S2 or similar), enrichment with contextual layers (land use, census,
            point-of-interest density), and a feature store that makes those enriched features available to models
            at inference time. Without that infrastructure, you're building spatial AI on static snapshots —
            and you're back to traditional GIS.
          </p>
          <div className="bg-[#ffffff08] border-l-4 border-[#9b5cf6] rounded-r-[12px] p-5">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base leading-relaxed italic">
              "The model is only as useful as the freshness of the data it runs on.
              A routing model that sees traffic data from this morning is not the same as one that sees
              traffic from the last 15 minutes."
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            Spatial AI in MENA: The Specific Opportunity
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            MENA has a few spatial dynamics that make this category particularly relevant:
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Rapid urban expansion", body: "GCC cities are building new districts faster than traditional demographic data can track. Spatial AI using satellite imagery and mobility data captures growth in near-real-time." },
              { title: "Desert and mixed-terrain logistics", body: "Route optimization in environments without established road networks requires terrain-aware models, not simple graph routing." },
              { title: "Hajj and Ramadan demand patterns", body: "Hospitality, retail, and logistics operations face extreme seasonal demand concentration. Spatial models calibrated to these patterns outperform generic approaches significantly." },
              { title: "Smart city investment", body: "Government-driven smart city programs across UAE, KSA, and Qatar are generating spatial data infrastructure that private enterprises can build on — IoT networks, mobility APIs, urban digital twins." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-[#ffffff05] rounded-[12px] p-4">
                <span className="text-[#9b5cf6] font-bold flex-shrink-0 mt-0.5">→</span>
                <div>
                  <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm">{item.title}: </span>
                  <span className="[font-family:'Satoshi-Regular',Helvetica] text-white/75 text-sm leading-relaxed">{item.body}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row gap-4 items-start">
          <Link
            to="/solutions/axon-ai"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Explore Axon AI — Spatial Solutions
          </Link>
          <Link
            to="/insights"
            className="inline-flex items-center justify-center border border-white/30 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/5 transition-colors"
          >
            More Insights
          </Link>
        </div>

      </div>
    </article>
  </PageLayout>
);
