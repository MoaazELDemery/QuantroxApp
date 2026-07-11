import { Link } from "react-router-dom";
import { PlateBand, Reveal } from "../../../components/page/primitives";

export const LatestInsightsSection = (): JSX.Element => (
  <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-12 lg:py-16">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <PlateBand image="/worlds/constellation.webp">
          <div className="max-w-xl">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-5">
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em]">
                Featured · AI Architecture
              </p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-xs">
                8 min read
              </p>
            </div>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl lg:text-5xl tracking-[-0.02em] leading-[1.08] mb-5">
              The End of "Chat"
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/65 text-base lg:text-lg leading-relaxed mb-8">
              Why chat-only tools fail in regulated operations, and what real workflow automation
              looks like in banking and enterprise teams.
            </p>
            <Link
              to="/insights/the-end-of-chat"
              className="group inline-flex items-center gap-2 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white/90 text-sm hover:text-white transition-colors"
            >
              Read the article
              <span className="text-[#9b5cf6] transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </PlateBand>
      </Reveal>
    </div>
  </section>
);
