import { PageLayout } from "../../../components/layout/PageLayout";
import { PageCTA, EditorialRows } from "../../../components/page/primitives";
import { PageHero } from "../../../components/layout/PageHero";

const TEAM_MEMBERS = [
  {
    initials: "CEO",
    title: "Chief Executive Officer",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years in AI and enterprise technology across the Gulf region.",
  },
  {
    initials: "CTO",
    title: "Chief Technology Officer",
    role: "CTO",
    bio: "ML engineering leader with deep expertise in NLP, Arabic language models, and MLOps.",
  },
  {
    initials: "COO",
    title: "Chief Operating Officer",
    role: "COO",
    bio: "Operations expert scaling AI delivery across 12 MENA markets.",
  },
  {
    initials: "VP",
    title: "VP of Engineering",
    role: "Engineering Lead",
    bio: "Leads a 50+ person engineering team across Dubai, Cairo, and Amman.",
  },
  {
    initials: "CMO",
    title: "Chief Marketing Officer",
    role: "CMO",
    bio: "Driving QuantorX's brand and market presence across MENA enterprises.",
  },
  {
    initials: "CISO",
    title: "CISO",
    role: "Security & Compliance Lead",
    bio: "Oversees SOC2, ISO 27001, and regional data protection compliance.",
  },
];

export const Team = (): JSX.Element => (
  <PageLayout>
    {/* HERO */}
    <PageHero
      eyebrow="Leadership"
      title="Our Team"
      lede="Meet the leadership driving sovereign AI innovation across the MENA region."
      video="/videos/hero-neural.mp4"
      plainTitle
    />

    {/* TEAM - a roster, printed */}
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <EditorialRows
        rows={TEAM_MEMBERS.map((member) => ({
          tag: member.role,
          title: member.title,
          body: member.bio,
        }))}
      />
    </section>

        <PageCTA
      title={<>Join Our Team</>}
      sub={<>We're hiring across engineering, sales, and operations in the MENA region.</>}
      primary={{ label: "View Open Positions", href: "/contact" }}
    />
  </PageLayout>
);
