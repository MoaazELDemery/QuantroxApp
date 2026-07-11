import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";
import { EditorialRows } from "../../components/page/primitives";

const upcomingEvents = [
  {
    type: "CONFERENCE",
    title: "GITEX Global 2026",
    location: "Dubai World Trade Centre, UAE",
    date: "October 2026",
    description:
      "Meet us at the QuantorX booth - live platform demos and sovereign AI deep dives.",
  },
  {
    type: "SUMMIT",
    title: "Saudi AI Summit",
    location: "Riyadh, Saudi Arabia",
    date: "November 2026",
    description:
      "Keynote session: \"Sovereign AI for Vision 2030\" - by QuantorX CEO.",
  },
  {
    type: "WEBINAR",
    title: "Monthly AI Office Hours",
    location: "Virtual - Every 3rd Thursday",
    date: "",
    description:
      "Ask our engineers anything - live Q&A on CORTEX™, AutoML, and LLM Masonry™.",
  },
];

const pastEvents = [
  {
    title: "GITEX Global 2025",
    description: "Showcased GenAI agents for government sector.",
  },
  {
    title: "LEAP 2025 - Riyadh",
    description: "Panel: \"AI in Banking - MENA Perspectives\".",
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
      <PageHero
        eyebrow="Connect With Us"
        title={<>Events</>}
        lede="Meet QuantorX at conferences, webinars, and regional AI summits."
        video="/videos/solutions-city.mp4"
        plainTitle
      />

      {/* Upcoming events, as a programme */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div>
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
              The Programme
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl md:text-4xl lg:text-5xl leading-tight">
              Upcoming events.
            </h2>
          </div>
          <EditorialRows
            rows={upcomingEvents.map((event) => ({
              tag: event.type,
              title: event.title,
              body: event.description,
              value: event.date,
            }))}
          />
        </div>
      </section>

      {/* Past Events - the archive */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff04]">
        <div className="max-w-5xl mx-auto">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em] mb-10">
            The Archive
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {pastEvents.map((event, i) => (
              <div key={event.title} className="relative border-t border-white/15 pt-8">
                <span
                  className="pointer-events-none select-none absolute top-3 right-0 [font-family:'Satoshi-Black',Helvetica] font-black text-lg leading-none text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.28)" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg tracking-[-0.01em] mb-3 pr-10">
                  {event.title}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/55 text-sm leading-relaxed">
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
