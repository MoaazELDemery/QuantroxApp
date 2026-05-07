import { PageLayout } from "../../../components/layout/PageLayout";

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
    <section className="px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
        Leadership
      </p>
      <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6">
        Our Team
      </h1>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
        Meet the leadership driving sovereign AI innovation across the MENA region.
      </p>
    </section>

    {/* TEAM GRID */}
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.initials + member.title}
            className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col items-center text-center gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-[#4a0082] flex items-center justify-center text-white [font-family:'Satoshi-Bold',Helvetica] font-bold text-xl">
              {member.initials}
            </div>
            <div>
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-1">
                {member.title}
              </h4>
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm mb-3">
                {member.role}
              </p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA BANNER */}
    <section className="px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] mb-4">
          Join Our Team
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed mb-8">
          We're hiring across engineering, sales, and operations in the MENA region.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          View Open Positions
        </a>
      </div>
    </section>
  </PageLayout>
);
