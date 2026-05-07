import { Link } from "react-router-dom";

const deploymentModels = [
  {
    title: "Air-Gapped",
    subtitle: "Fully isolated infrastructure",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="8" rx="1" /><rect x="2" y="13" width="20" height="8" rx="1" />
        <path d="M6 7h.01M6 17h.01M2 2l20 20" />
      </svg>
    ),
  },
  {
    title: "On-Premise",
    subtitle: "Your own data center",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M9 21V12h6v9M9 7h2M13 7h2M9 10h2M13 10h2" />
      </svg>
    ),
  },
  {
    title: "Hybrid",
    subtitle: "Best of both worlds",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16l-4-4 4-4" /><path d="M17 8l4 4-4 4" /><path d="M3 12h18" />
      </svg>
    ),
  },
];

export const CTABannerSection = (): JSX.Element => (
  <>
    {/* Under the Hood */}
    <section className="w-full bg-transparent py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Under the Hood
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-1.5px] leading-tight mb-6">
              What Cortex Does When You&rsquo;re Not Looking.
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/85 text-lg leading-relaxed mb-8">
              Cortex continuously maps your operational complexity, trains agent capabilities against
              your data, monitors real-time telemetry, and routes every decision through governance
              &mdash; autonomously, inside your infrastructure.
            </p>
            <Link
              to="/technology"
              className="inline-flex items-center justify-center border border-white/30 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors"
            >
              See the Full Architecture &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {deploymentModels.map((m) => (
              <div
                key={m.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/8 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4a0082]/20 text-[#9b5cf6] flex items-center justify-center mb-3">
                  {m.icon}
                </div>
                <h5 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm mb-1">
                  {m.title}
                </h5>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/50 text-xs leading-relaxed">
                  {m.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="w-full bg-[#4a0082] py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-1.5px] leading-tight mb-4">
          One Conversation. One Prototype.<br className="hidden sm:block" /> Fully Sovereign.
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          See how Cortex maps your most complex workflow &mdash; inside your infrastructure, on your terms.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center justify-center bg-white text-[#4a0082] rounded-[32px] px-10 py-4 [font-family:'Satoshi-Bold',Helvetica] font-bold text-base hover:bg-white/90 transition-colors"
        >
          Book a Cortex Demo
        </Link>
      </div>
    </section>
  </>
);
