import { AgentSolutionPage } from "../../../components/page/AgentSolutionPage";
import { AGENT_IDENTITIES } from "../../../lib/agentIdentity";

const features = [
  {
    title: "Ask in Plain Language",
    body: "No query language, no schema knowledge. Users just ask - in English or Arabic - and Axon discovers the right tables, writes the SQL, runs it, and reads the result back.",
  },
  {
    title: "Grounded in Your Live Schema",
    body: "Before it answers, Axon inspects your live schema and grounds itself in what actually exists - your real tables, columns and values. It never invents a field you don't have.",
  },
  {
    title: "The Map Does the Talking",
    body: "Answers arrive as live map layers - choropleths, hotspots, isochrones - not a wall of text. Map-first, bilingual, and readable by anyone in the room.",
  },
  {
    title: "40+ Typed Spatial Tools",
    body: "Geocoding, buffers, nearest-neighbour, summarize-within, clustering, site suitability, urban growth, mobility, mining feasibility - one omni-agent workforce, every spatial job.",
  },
  {
    title: "Landscape-Agnostic",
    body: "Bring your own Postgres/PostGIS, object store, models and map layers. Axon adapts to the infrastructure you already run - cloud, on-prem, or inside your own perimeter.",
  },
  {
    title: "Built for Saudi Data Rules",
    body: "Aligned with the Saudi PDPL, SDAIA AI Ethics Principles and NCA cybersecurity controls - with in-Kingdom data residency and tenant-scoped, validated requests.",
  },
];

export const AxonAI = (): JSX.Element => (
  <AgentSolutionPage
    identity={AGENT_IDENTITIES.axon}
    heroTitle={<>The Urban<br />Intelligence Unit.</>}
    heroLede={
      <>
        From Maps to Masterplans - Axon turns plain-language questions into validated SQL, real
        spatial analysis, and live map layers, grounded in your actual data, with the map doing
        the talking.
        <span className="block mt-4 text-base">
          Conversational GIS for planners, operators and strategists: every number comes from a
          real query or a tested geometry - never from the model's imagination.
        </span>
      </>
    }
    heroVideo="/videos/solutions-city.mp4"
    ctas={[
      { label: "Book an Axon Demo", href: "/demo" },
      { label: "Meet the Workforce →", href: "/solutions", variant: "outline" },
    ]}
    instrument={{
      title: "Question → map - one turn",
      stops: [
        { label: "Schema inspected", value: "live tables · grounded", pos: 10 },
        { label: "SQL validated & run", value: "typed spatial tools", pos: 42 },
        { label: "Answer on the map", value: "layers · EN + AR", pos: 74 },
      ],
      formulaTitle: "Grounded Spatial Model (GSM)",
      formula: "map(q) = tools(sql(q | schema))",
      disclaimer: "A visualization, rendered from live layers",
    }}
    outcomes={[
      { val: "40+", label: "Typed spatial tools behind one omni-agent workforce" },
      { val: "2", label: "Languages - English and Arabic, map-first in both" },
      { val: "100%", label: "Answers grounded in your live schema - nothing invented" },
    ]}
    featuresKicker="Conversational GIS"
    featuresTitle="From maps to masterplans."
    features={features}
    worldTitle="The city, rendered as a decision surface."
    worldBody="Axon fuses your PostGIS layers, live datasets and spatial models into one conversational surface - where every district, corridor and site carries a number a planner can trace back to a real query."
    quote="Our planners stopped filing GIS requests and started asking questions. Axon answers on the map in seconds, in Arabic, from our own PostGIS - and every figure traces back to a query we can inspect."
    quoteAttribution="Director of Urban Planning - Development Authority, KSA"
    ctaTitle={<>Turn your maps into masterplans.</>}
    ctaSub="Deploy Axon on your own Postgres/PostGIS - in-Kingdom residency, tenant-scoped, PDPL-aligned."
    ctaLabel="Book an Axon Demo"
  />
);
