import { PageLayout } from "../../../components/layout/PageLayout";
import { PageCTA, EditorialRows } from "../../../components/page/primitives";
import { PageHero } from "../../../components/layout/PageHero";

const IMPACT_AREAS = [
  {
    title: "AI for Education",
    desc: "Partnering with universities across the GCC to provide AI curriculum, training datasets, and platform access for students and researchers.",
  },
  {
    title: "AI for Sustainability",
    desc: "Helping smart cities optimize energy consumption, water usage, and waste management using predictive analytics and IoT sensor data.",
  },
  {
    title: "AI for Healthcare Access",
    desc: "Deploying diagnostic AI tools in underserved communities to improve early detection and healthcare resource allocation.",
  },
  {
    title: "Arabic AI Research",
    desc: "Contributing to open-source Arabic NLP models and datasets - closing the Arabic language gap in global AI research.",
  },
  {
    title: "Women in AI MENA",
    desc: "Supporting programs that increase women's participation in AI and technology careers across the region.",
  },
  {
    title: "Digital Literacy",
    desc: "Community workshops and government partnerships to build AI literacy among citizens and small businesses.",
  },
];

export const SocialImpact = (): JSX.Element => (
  <PageLayout>
    {/* HERO */}
    <PageHero
      eyebrow="Giving Back"
      title="Social Impact"
      lede="Using AI to drive positive change across the MENA region."
      video="/videos/mena-horizon.mp4"
      plainTitle
    />

    {/* IMPACT GRID */}
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <EditorialRows className="max-w-5xl" rows={IMPACT_AREAS.map((area) => ({ title: area.title, body: area.description ?? area.desc }))} />
    </section>

        <PageCTA
      title={<>Get Involved</>}
      sub={<>Partner with us on AI social impact initiatives.</>}
      primary={{ label: "Contact Us", href: "/contact" }}
    />
  </PageLayout>
);
