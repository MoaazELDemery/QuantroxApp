import { Link } from "react-router-dom";

export const CortexSection = (): JSX.Element => (
  <section className="relative w-full bg-transparent py-16 lg:py-20 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#4a0082]/20 blur-[80px]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* Cylinder visual */}
        <div
          className="shrink-0 flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40"
          style={{ background: "radial-gradient(ellipse at center, rgba(74,0,130,0.35) 0%, transparent 70%)" }}
        >
          <img
            src="/platformCylinder.png"
            alt="Cortex Platform"
            className="w-28 h-28 lg:w-36 lg:h-36 object-contain"
          />
        </div>

        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3">
            Powered by Cortex™
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl lg:text-4xl tracking-[-1px] leading-tight mb-4">
            One Brain. Every Agent. Zero Exposure.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed max-w-2xl lg:max-w-none mb-6">
            CORTEX™ is the proprietary cognitive engine inside every agent we deploy. It does not phone home.
            It runs inside your walls — mapping, reasoning, and governing every decision at every node.
          </p>
          <Link
            to="/technology/ai-platform"
            className="inline-flex items-center justify-center border border-white/30 rounded-[32px] px-7 py-2.5 text-white [font-family:'Satoshi-Medium',Helvetica] text-sm hover:bg-white/10 transition-colors"
          >
            Explore the CORTEX™ Platform →
          </Link>
        </div>

        {/* 3 proof points */}
        <div className="shrink-0 grid grid-cols-3 lg:grid-cols-1 gap-3 w-full lg:w-52">
          {[
            { label: "Air-gapped", sub: "Never cloud-dependent" },
            { label: "Auditable", sub: "Every action logged" },
            { label: "Sovereign", sub: "Your walls, your rules" },
          ].map((pt) => (
            <div key={pt.label} className="glass rounded-xl px-4 py-3">
              <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm">{pt.label}</p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/70 text-xs mt-0.5">{pt.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);
