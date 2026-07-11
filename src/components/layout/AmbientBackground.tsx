/**
 * AmbientBackground - the global atmosphere of the site.
 *
 * Layers (back → front):
 *   1. Wireframe grid - subtle perspective grid lines (purple-tinted)
 *   2. Aurora orbs - multi-hue blurred glows (purple / magenta / violet / teal)
 *   3. Edge vignette - radial dim to push focus toward center
 *   4. Fractal noise - film grain for tactile depth
 *
 * Used in PageLayout (all sub-pages) and Home so the look is identical everywhere.
 * It uses `position: fixed` so the ambient stays put as the user scrolls - sections
 * sit on top with transparent or semi-transparent backgrounds.
 */
export const AmbientBackground = (): JSX.Element => (
  <>
    {/* Layer 1 - wireframe grid */}
    <div
      className="pointer-events-none fixed inset-0 z-0 wireframe-grid opacity-50"
      aria-hidden="true"
    />

    {/* Layer 2 - aurora orbs (dimmed for higher text contrast) */}
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top center - primary purple wash */}
      <div className="aurora-blob top-[-220px] left-1/2 -translate-x-1/2 w-[1300px] h-[640px] bg-[#4a0082]/35" />
      {/* Left mid - magenta accent (drifting) */}
      <div className="aurora-blob top-[28%] -left-48 w-[520px] h-[520px] bg-[#7c3aed]/22 animate-aurora-drift" />
      {/* Right mid - violet accent (drifting) */}
      <div className="aurora-blob top-[52%] -right-48 w-[480px] h-[480px] bg-[#a855f7]/18 animate-aurora-drift" style={{ animationDelay: "-10s" }} />
      {/* Lower-left teal depth */}
      <div className="aurora-blob top-[78%] left-[10%] w-[420px] h-[420px] bg-[#00c9a7]/8" />
      {/* Far-bottom magenta echo (drifting) */}
      <div className="aurora-blob top-[95%] right-[15%] w-[380px] h-[380px] bg-[#c026d3]/8 animate-aurora-drift" style={{ animationDelay: "-5s" }} />
    </div>

    {/* Layer 3 - edge vignette (deepened for darker overall feel) */}
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 30%, rgba(6,0,16,0.55) 80%, rgba(6,0,16,0.85) 100%)",
      }}
    />

    {/* Layer 4 - fractal noise grain */}
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay"
      aria-hidden="true"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  </>
);
