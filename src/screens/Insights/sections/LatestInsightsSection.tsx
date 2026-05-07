import { Link } from "react-router-dom";

export const LatestInsightsSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-16 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-[1175px] w-full">

        {/* Visual */}
        <div className="w-full max-w-[532px] h-[360px] rounded-[32px] bg-gradient-to-br from-[#311c43] to-[#782bc0] flex-shrink-0 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_30%,rgba(155,92,246,0.4),transparent_60%)]" />
          <div className="relative text-center p-8">
            <p className="[font-family:'Satoshi-Medium',Helvetica] text-white/50 text-xs uppercase tracking-widest mb-3">Featured Article</p>
            <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl leading-tight">
              The End<br />of "Chat"
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="w-full max-w-[563px] flex flex-col items-start gap-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#4a0082]/30 border border-[#9b5cf6]/30 text-[#9b5cf6] text-xs px-3 py-1 rounded-full [font-family:'Satoshi-Medium',Helvetica]">
              AI Architecture
            </span>
            <span className="text-white/75 text-xs [font-family:'Satoshi-Regular',Helvetica]">8 min read</span>
          </div>

          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl leading-tight tracking-[-1.80px]">
            The End of "Chat"
          </h2>

          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/75 text-xl leading-relaxed">
            Why chat-only tools fail in regulated operations, and what real workflow automation looks like
            in banking and enterprise teams.
          </p>

          <Link
            to="/insights/the-end-of-chat"
            className="inline-flex items-center gap-2 text-[#9b5cf6] [font-family:'Satoshi-Medium',Helvetica] font-medium text-base hover:gap-3 transition-all"
          >
            Read article <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
