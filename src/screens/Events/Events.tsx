import { PageLayout } from "../../components/layout/PageLayout";

const upcomingEvents = [
  {
    type: "CONFERENCE",
    title: "GITEX Global 2026",
    location: "Dubai World Trade Centre, UAE",
    date: "October 2026",
    description:
      "Meet us at the QuantorX booth — live platform demos and sovereign AI deep dives.",
  },
  {
    type: "SUMMIT",
    title: "Saudi AI Summit",
    location: "Riyadh, Saudi Arabia",
    date: "November 2026",
    description:
      "Keynote session: \"Sovereign AI for Vision 2030\" — by QuantorX CEO.",
  },
  {
    type: "WEBINAR",
    title: "Monthly AI Office Hours",
    location: "Virtual — Every 3rd Thursday",
    date: "",
    description:
      "Ask our engineers anything — live Q&A on CORTEX™, AutoML, and LLM Masonry™.",
  },
];

const pastEvents = [
  {
    title: "GITEX Global 2025",
    description: "Showcased GenAI agents for government sector.",
  },
  {
    title: "LEAP 2025 — Riyadh",
    description: "Panel: \"AI in Banking — MENA Perspectives\".",
  },
  {
    title: "Cairo ICT 2024",
    description: "Launched Arabic NLP partnership with Egyptian universities.",
  },
];

export const Events = (): JSX.Element => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-20 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Connect With Us
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl">
          Events
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
          Meet QuantorX at conferences, webinars, and regional AI summits.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px]">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3"
              >
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em]">
                  {event.type}
                </p>
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg tracking-[-1.80px]">
                  {event.title}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                  {event.location}
                </p>
                {event.date && (
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                    {event.date}
                  </p>
                )}
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed flex-1">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24 bg-[#ffffff05]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 py-16">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px]">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3"
              >
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[-1.80px]">
                  {event.title}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
