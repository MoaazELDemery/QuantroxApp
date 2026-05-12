import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────────
   QUANTORX — Launch Film Preview
   Five 40s variants. Plays in reviewer-recommended order: V3 → V5 → V2 → V1 → V4
   Each variant: same 6-block timeline, same locked Act 2/3/4, varies PEN + ACT 1 + CLOSE.
   Visual: glassmorphism shards + breathing aurora (no canvas 3D).
   ──────────────────────────────────────────────────────────────────────────── */

const DURATION = 40;
const LOGO = "/FullLogo_Transparent_NoBuffer.png";
const EASE = [0.16, 1, 0.3, 1] as const;
const FAMILY_BOLD = "'Satoshi-Bold','Helvetica Neue',Helvetica,sans-serif";
const FAMILY_MED = "'Satoshi-Medium','Helvetica Neue',Helvetica,sans-serif";
const FONT_BOLD = { fontFamily: FAMILY_BOLD, fontWeight: 700 } as const;
const FONT_MED = { fontFamily: FAMILY_MED, fontWeight: 500 } as const;

const logoStyle = (opacity = 1, height = 64): React.CSSProperties => ({
  filter: `brightness(0) invert(1) drop-shadow(0 0 24px rgba(167,139,250,${opacity * 0.7}))`,
  height,
  width: "auto",
  objectFit: "contain",
  userSelect: "none",
  pointerEvents: "none",
  display: "block",
});

/* ────────────────────────────────────────────────────────────────────────────
   THE FIVE SCRIPTS  (reviewer-tightened · launch order)
   ──────────────────────────────────────────────────────────────────────────── */
type Script = {
  number: number;
  code: string;       // V3, V5, V2, V1, V4
  title: string;
  register: string;
  pen: (string | { line: string; accent?: string })[];
  reveal: string;     // The category definition after "QUANTORX."
  close: string;
  closeAccent?: string; // Word to highlight in lavender
};

const SCRIPTS: Script[] = [
  // 1 — THE OMNI · category declaration, arrival film
  {
    number: 1, code: "S1", title: "THE OMNI", register: "Category declaration · Arrival film",
    pen: [
      "A bank. A ministry. An insurer.",
      "Each decides in days, not hours.",
      "None own the agents that decide.",
    ],
    reveal: "The permanent agentic workforce that regulated institutions build, own, and govern inside.",
    close: "THE OMNI-AGENTS COMPANY.",
    closeAccent: "OMNI-AGENTS",
  },
  // 2 — THE FLOW · machine revealed · Influx → Cognitive Mapping → Act as cinema
  {
    number: 2, code: "S2", title: "THE FLOW", register: "Architecture · Machine cinema",
    pen: [
      "Expertise locked inside individuals.",
      "Decisions locked inside silos.",
      "Data locked inside the firewall.",
    ],
    reveal: "One signal enters — and an entire institution learns to act.",
    close: "Observe. Decompose. Activate.",
    closeAccent: "Activate.",
  },
  // 3 — THE WORKFORCE · builder's promise · train on your experts
  {
    number: 3, code: "S3", title: "THE WORKFORCE", register: "Builder · Workforce creation",
    pen: [
      "22 years. Chief Compliance Officer.",
      "38 years. Chief Underwriter, Lloyd's.",
      "Encode their judgment. Build your workforce.",
    ],
    reveal: "We train your agentic workforce on the experts who built your institution.",
    close: "Your experts. Your workforce. Yours permanently.",
    closeAccent: "Yours permanently.",
  },
  // 4 — THE REFUSAL · five nots, then the verdict
  {
    number: 4, code: "S4", title: "THE REFUSAL", register: "Contrast · The refusal film",
    pen: [
      "Not a chatbot. Not a copilot.",
      "Not rented. Not cloud. Not borrowed.",
      "Not yours to configure. Yours to own.",
    ],
    reveal: "A sovereign agentic workforce that lives inside your institution — permanently.",
    close: "Not a Tool. An Omni-Agent.",
    closeAccent: "Omni-Agent.",
  },
  // 5 — THE KNOW-HOW · institutional memory · the line that sticks
  {
    number: 5, code: "S5", title: "THE KNOW-HOW", register: "Memory · The line that sticks",
    pen: [
      "Chief actuary retires.",
      "Policy architect leaves.",
      "Their judgment does not.",
    ],
    reveal: "Captures thirty years of institutional knowledge as a permanent agentic workforce.",
    close: "They retire. Their knowledge will not.",
    closeAccent: "will not",
  },
];

/* ────────────────────────────────────────────────────────────────────────────
   ROOT
   ──────────────────────────────────────────────────────────────────────────── */
export const Promo = (): JSX.Element => {
  const [variantIdx, setVariantIdx] = useState(0);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const reqRef = useRef<number | undefined>(undefined);
  const startRef = useRef<number | undefined>(undefined);

  // Timeline tick
  useEffect(() => {
    if (!playing) { startRef.current = undefined; return; }
    const tick = (now: number) => {
      if (startRef.current === undefined) startRef.current = now - time * 1000;
      const t = (now - startRef.current) / 1000;
      if (t >= DURATION) {
        setTime(DURATION);
        if (autoAdvance && variantIdx < SCRIPTS.length - 1) {
          // Auto-advance to next variant after a brief beat
          setTimeout(() => {
            setVariantIdx(i => i + 1);
            setTime(0);
            startRef.current = undefined;
            setPlaying(true);
          }, 600);
          return;
        }
        setPlaying(false);
        return;
      }
      setTime(t);
      reqRef.current = requestAnimationFrame(tick);
    };
    reqRef.current = requestAnimationFrame(tick);
    return () => { if (reqRef.current) cancelAnimationFrame(reqRef.current); startRef.current = undefined; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, variantIdx, autoAdvance]);

  const goTo = (i: number) => {
    setVariantIdx(Math.max(0, Math.min(SCRIPTS.length - 1, i)));
    setTime(0);
    setPlaying(true);
    startRef.current = undefined;
  };
  const restart = () => { setTime(0); setPlaying(true); startRef.current = undefined; };
  const scrub = (v: number) => { setPlaying(false); setTime(Math.max(0, Math.min(DURATION, v))); startRef.current = undefined; };

  const script = SCRIPTS[variantIdx];

  return (
    <div className="fixed inset-0 bg-black flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[1280px] aspect-video overflow-hidden rounded-xl bg-[#060010] shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
          <BreathingBackdrop time={time} />
          <GlassShards time={time} />
          <CornerMark time={time} />
          <VariantBadge script={script} time={time} />
          <Stage script={script} time={time} />
        </div>
      </div>
      <Controls
        time={time}
        playing={playing}
        autoAdvance={autoAdvance}
        variantIdx={variantIdx}
        onPlayPause={() => setPlaying(p => !p)}
        onRestart={restart}
        onScrub={scrub}
        onPrev={() => goTo(variantIdx - 1)}
        onNext={() => goTo(variantIdx + 1)}
        onToggleAuto={() => setAutoAdvance(a => !a)}
        onJump={(i) => goTo(i)}
      />
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   BACKDROP — aurora + breathing hue-shift radial (no canvas 3D)
   ──────────────────────────────────────────────────────────────────────────── */
const intensityAt = (t: number) => {
  if (t < 2) return 0.1; if (t < 9) return 0.22; if (t < 17) return 0.58;
  if (t < 23) return 0.7; if (t < 32) return 0.85; if (t < 36) return 0.75; return 0.55;
};

const BreathingBackdrop = ({ time }: { time: number }) => {
  const i = intensityAt(time);
  return (
    <>
      {/* Subtle wireframe grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.22,
        backgroundImage:
          "linear-gradient(rgba(155,92,246,0.06) 1px,transparent 1px)," +
          "linear-gradient(90deg,rgba(155,92,246,0.06) 1px,transparent 1px)",
        backgroundSize: "72px 72px",
      }} />

      {/* Aurora orbs */}
      <motion.div className="absolute inset-0 pointer-events-none"
        animate={{ opacity: i }} transition={{ duration: 0.8, ease: EASE }}>
        <motion.div
          className="absolute"
          animate={{ x: [0,40,-30,0], y: [0,-30,40,0], scale: [1,1.1,0.95,1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: -240, left: "50%", transform: "translateX(-50%)", width: 1300, height: 640,
            background: "rgba(74,0,130,0.42)", borderRadius: "50%",
            filter: "blur(150px)", mixBlendMode: "screen" }}
        />
        <motion.div
          className="absolute"
          animate={{ x: [0,40,-30,0], y: [0,-30,40,0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "26%", left: -200, width: 520, height: 520,
            background: "rgba(124,58,237,0.28)", borderRadius: "50%",
            filter: "blur(130px)", mixBlendMode: "screen" }}
        />
        <motion.div
          className="absolute"
          animate={{ x: [0,-30,40,0], y: [0,40,-30,0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: -10 }}
          style={{ top: "54%", right: -200, width: 480, height: 480,
            background: "rgba(168,85,247,0.24)", borderRadius: "50%",
            filter: "blur(130px)", mixBlendMode: "screen" }}
        />
      </motion.div>

      {/* Breathing hue-shift radial — one slow color volume, contained */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 50% 45%, rgba(155,92,246,0.28) 0%, rgba(155,92,246,0) 55%)",
            "radial-gradient(circle at 50% 45%, rgba(217,70,239,0.22) 0%, rgba(217,70,239,0) 55%)",
            "radial-gradient(circle at 50% 45%, rgba(124,58,237,0.26) 0%, rgba(124,58,237,0) 55%)",
            "radial-gradient(circle at 50% 45%, rgba(155,92,246,0.28) 0%, rgba(155,92,246,0) 55%)",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ inset: 0, opacity: i * 1.1, mixBlendMode: "screen" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 100% 80% at 50% 50%,transparent 30%,rgba(6,0,16,0.55) 80%,rgba(6,0,16,0.95) 100%)",
      }} />

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{
        opacity: 0.035,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }} />
    </>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   GLASS SHARDS — 5 translucent rectangles drifting in parallax
   Glassmorphism, subtle. Replaces 3D scene.
   ──────────────────────────────────────────────────────────────────────────── */
const SHARDS = [
  { w: 320, h: 200, x: -160, y: -180, rot: -8,  dur: 22, delay: 0   },
  { w: 240, h: 380, x: 380,  y: 80,   rot: 12,  dur: 26, delay: -5  },
  { w: 420, h: 160, x: -340, y: 200,  rot: 6,   dur: 28, delay: -12 },
  { w: 200, h: 280, x: 220,  y: -160, rot: -14, dur: 24, delay: -8  },
  { w: 280, h: 180, x: -80,  y: 240,  rot: 4,   dur: 30, delay: -15 },
];

const GlassShards = ({ time }: { time: number }) => {
  // Shards dim during text-heavy beats (Act 1 reveal, Act 3 cards) to never compete with type
  const heatmap = time < 2 ? 0.6 : time < 9 ? 0.55 : time < 17 ? 0.3 : time < 23 ? 0.4 : time < 32 ? 0.22 : time < 36 ? 0.5 : 0.55;
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none flex items-center justify-center"
      animate={{ opacity: heatmap }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{ zIndex: 2 }}
    >
      {SHARDS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{ y: [s.y, s.y - 22, s.y + 14, s.y], x: [s.x, s.x + 10, s.x - 8, s.x], rotate: [s.rot, s.rot + 1.5, s.rot - 1, s.rot] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          style={{
            width: s.w,
            height: s.h,
            borderRadius: 18,
            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)",
            backdropFilter: "blur(16px) saturate(140%)",
            WebkitBackdropFilter: "blur(16px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 40px rgba(167,139,250,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        />
      ))}
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   CORNER LOGO
   ──────────────────────────────────────────────────────────────────────────── */
const CornerMark = ({ time }: { time: number }) => {
  const visible = time >= 1.4 && time < 35.5;
  return (
    <AnimatePresence>
      {visible && (
        <motion.div key="corner"
          initial={{ opacity: 0 }} animate={{ opacity: 0.45 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-5 right-6 pointer-events-none" style={{ zIndex: 25 }}>
          <img src={LOGO} alt="QuantorX" style={logoStyle(0.45, 26)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   VARIANT BADGE — small tag in upper-left showing current variant title
   Appears briefly at variant start.
   ──────────────────────────────────────────────────────────────────────────── */
const VariantBadge = ({ script, time }: { script: Script; time: number }) => {
  const show = time >= 0.4 && time < 6.5;
  return (
    <AnimatePresence>
      {show && (
        <motion.div key={script.code}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, ease: EASE }}
          className="absolute top-5 left-6 pointer-events-none flex items-center gap-3"
          style={{ zIndex: 25 }}
        >
          <div style={{
            ...FONT_MED, fontSize: 10, letterSpacing: "0.28em", color: "#c4b5fd",
            padding: "5px 10px", borderRadius: 999,
            background: "rgba(196,181,253,0.08)",
            border: "1px solid rgba(196,181,253,0.18)",
            backdropFilter: "blur(8px)",
          }}>
            {script.code} · {String(script.number).padStart(2, "0")} OF 05
          </div>
          <div style={{ ...FONT_MED, fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em" }}>
            {script.register.toUpperCase()}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   STAGE
   ──────────────────────────────────────────────────────────────────────────── */
const Stage = ({ script, time }: { script: Script; time: number }) => {
  let beat: JSX.Element | null = null;
  if (time < 2)       beat = <Anchor t={time} key={`${script.code}-anchor`} />;
  else if (time < 9)  beat = <Pen     t={time - 2}  pen={script.pen} key={`${script.code}-pen`} />;
  else if (time < 17) beat = <Act1    t={time - 9}  reveal={script.reveal} key={`${script.code}-act1`} />;
  else if (time < 23) beat = <Act2    t={time - 17} key={`${script.code}-act2`} />;
  else if (time < 32) beat = <Act3    t={time - 23} key={`${script.code}-act3`} />;
  else if (time < 36) beat = <Act4    t={time - 32} key={`${script.code}-act4`} />;
  else                beat = <Close   t={time - 36} close={script.close} accent={script.closeAccent} key={`${script.code}-close`} />;
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
      <AnimatePresence mode="wait">{beat}</AnimatePresence>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   ANCHOR (0:00–0:02)
   ──────────────────────────────────────────────────────────────────────────── */
const Anchor = ({ t }: { t: number }) => {
  const moving = t > 1.2;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
      animate={moving ? { opacity: 0, scale: 0.15, x: 490, y: 270 } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <img src={LOGO} alt="QuantorX" style={logoStyle(1, 78)} />
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   PEN (0:02–0:09) — 7s, three lines, ~2.3s each
   ──────────────────────────────────────────────────────────────────────────── */
const Pen = ({ t, pen }: { t: number; pen: string[] }) => {
  const PER = 2.3;
  const idx = Math.min(2, Math.floor(t / PER));
  const local = t - idx * PER;
  const slashing = local >= 1.4;
  const slashProgress = Math.max(0, Math.min(1, (local - 1.4) / 0.4));
  const text = pen[idx];
  const isLast = idx === 2;
  return (
    <motion.div className="relative flex items-center justify-center w-full"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div key={idx} className="relative max-w-[1100px] text-center"
        style={{ ...FONT_BOLD, fontSize: isLast ? 64 : 56, color: "#ffffff", letterSpacing: "-0.01em", lineHeight: 1.15 }}>
        <motion.span
          initial={{ y: 56, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: slashing ? 0.62 : 1, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ display: "inline-block" }}>
          {text}
        </motion.span>
        <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 h-[5px] origin-left rounded-full"
          style={{
            background: "linear-gradient(90deg,transparent 0%,#c4b5fd 28%,#a78bfa 72%,transparent 100%)",
            boxShadow: "0 0 20px rgba(196,181,253,0.7)",
            width: "100%", scaleX: slashProgress,
          }} />
      </div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   ACT 1 (0:09–0:17) — Reveal + category definition
   ──────────────────────────────────────────────────────────────────────────── */
const Act1 = ({ t, reveal }: { t: number; reveal: string }) => {
  const showLogo = t >= 0.4;
  const showLine = t >= 2.4;
  return (
    <motion.div className="relative flex flex-col items-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.4 } }}>
      <AnimatePresence>{showLogo && t < 2.5 && <Particles key="p" />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 1.32, filter: "blur(28px)" }}
        animate={showLogo ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0 }}
        transition={{ duration: 1.0, ease: EASE }}>
        <img src={LOGO} alt="QuantorX" style={logoStyle(1, 100)} />
      </motion.div>
      <motion.div className="mt-7 text-center max-w-[920px] px-8"
        initial={{ opacity: 0, y: 16 }}
        animate={showLine ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ ...FONT_MED, fontSize: 26, color: "rgba(255,255,255,0.9)", letterSpacing: "0.02em", lineHeight: 1.35 }}>
        {reveal}
      </motion.div>
    </motion.div>
  );
};

const Particles = () => (
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 30 }).map((_, i) => {
      const angle = (i / 30) * Math.PI * 2;
      return (
        <motion.div key={i} className="absolute top-1/2 left-1/2"
          initial={{ x: Math.cos(angle) * 360, y: Math.sin(angle) * 200, opacity: 0.9, scale: 1 }}
          animate={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
          transition={{ duration: 1.0, delay: 0.05 + (i % 6) * 0.04, ease: EASE }}
          style={{ width: 5, height: 5, borderRadius: "50%", background: "#c4b5fd",
            boxShadow: "0 0 10px rgba(196,181,253,0.9)" }} />
      );
    })}
  </div>
);

/* ────────────────────────────────────────────────────────────────────────────
   ACT 2 (0:17–0:23) — Q Cortex (locked) · Cognitive Flux Mapping™
   Observe → Decompose → Activate. Visual grammar across all 5 scripts.
   ──────────────────────────────────────────────────────────────────────────── */
const FLOW_PHASES = [
  { id: "observe",   label: "OBSERVE",   sub: "Systems, data flows, decisions — zero process docs." },
  { id: "decompose", label: "DECOMPOSE", sub: "Discrete tasks. Governance checkpoint at every node." },
  { id: "activate",  label: "ACTIVATE",  sub: "Trained. Deployed. Live on your infrastructure in weeks." },
] as const;

const Act2 = ({ t }: { t: number }) => {
  const showHeader = t >= 0.1;
  const activePhase = t < 1.2 ? -1 : t < 2.6 ? 0 : t < 4.0 ? 1 : 2;
  const showTag = t >= 4.8;
  return (
    <motion.div className="flex flex-col items-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.4 } }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={showHeader ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ ...FONT_MED, fontSize: 17, color: "rgba(255,255,255,0.5)", letterSpacing: "0.22em", marginBottom: 14 }}>
        CONNECTED BY ONE BRAIN.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 18 }} animate={showHeader ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        style={{
          ...FONT_BOLD, fontSize: 58,
          backgroundImage: "linear-gradient(120deg,#ffffff 0%,#e9d5ff 35%,#c4b5fd 60%,#a78bfa 100%)",
          backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: "0.22em", marginBottom: 10,
        }}>
        Q CORTEX<span style={{ fontSize: 18, verticalAlign: "super", marginLeft: 4 }}>™</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={showHeader ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
        style={{ ...FONT_MED, fontSize: 11, color: "rgba(196,181,253,0.6)", letterSpacing: "0.3em", marginBottom: 22 }}>
        COGNITIVE FLUX MAPPING<span style={{ fontSize: 8, verticalAlign: "super", marginLeft: 2 }}>™</span>
      </motion.div>

      {/* 3-phase flow glyph — Observe → Decompose → Activate */}
      <div className="flex items-stretch" style={{ width: 860 }}>
        {FLOW_PHASES.map((phase, i) => {
          const active = activePhase >= i;
          const isLast = i === FLOW_PHASES.length - 1;
          return (
            <Fragment key={phase.id}>
              <motion.div
                animate={active
                  ? { opacity: 1, scale: 1, boxShadow: "0 0 48px rgba(167,139,250,0.28), inset 0 0 28px rgba(155,92,246,0.1)" }
                  : { opacity: 0.14, scale: 0.96, boxShadow: "none" }}
                transition={{ duration: 0.55, ease: EASE }}
                className="flex flex-col items-center justify-center rounded-2xl px-5 py-4 flex-1"
                style={{
                  background: active
                    ? "linear-gradient(135deg,rgba(155,92,246,0.22),rgba(167,139,250,0.07))"
                    : "rgba(255,255,255,0.025)",
                  border: active ? "1px solid rgba(196,181,253,0.42)" : "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(14px)", minHeight: 96,
                }}>
                <div style={{
                  ...FONT_BOLD, fontSize: i === 1 ? 10 : 13, letterSpacing: "0.26em",
                  color: active ? "#e9d5ff" : "rgba(255,255,255,0.28)", textAlign: "center",
                }}>
                  {phase.label}
                </div>
                <motion.div
                  animate={{ opacity: active ? 1 : 0, y: active ? 0 : 5 }}
                  transition={{ duration: 0.4, delay: 0.25, ease: EASE }}
                  style={{
                    ...FONT_MED, fontSize: 10, letterSpacing: "0.1em",
                    color: "rgba(196,181,253,0.65)", textAlign: "center", marginTop: 7,
                  }}>
                  {phase.sub}
                </motion.div>
              </motion.div>
              {!isLast && (
                <motion.div
                  animate={{ opacity: activePhase > i ? 1 : 0.2, color: activePhase > i ? "#a78bfa" : "rgba(255,255,255,0.2)" }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center px-3 flex-shrink-0"
                  style={{ fontSize: 22 }}>
                  →
                </motion.div>
              )}
            </Fragment>
          );
        })}
      </div>

      {/* Tagline — LOCKED */}
      <motion.div className="mt-8 text-center"
        initial={{ opacity: 0, y: 14 }} animate={showTag ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{ ...FONT_BOLD, fontSize: 26, color: "rgba(255,255,255,0.92)", letterSpacing: "0.08em" }}>
        One Brain. <span style={{ color: "#c4b5fd" }}>Every Agent.</span> Zero Exposure.
      </motion.div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   ACT 3 (0:23–0:32) — Four Omni Agents (locked)
   ──────────────────────────────────────────────────────────────────────────── */
const AGENTS = [
  { name: "NEXUS",   domain: "BANKING · DECISIONS",  outcome: "Credit approved in 4 hours. Fraud escalated in seconds." },
  { name: "AXON",    domain: "GEOGRAPHIC · SPATIAL",  outcome: "Territory decisions 3× faster than any strategy team." },
  { name: "PAYGATE", domain: "ONBOARDING · PAYMENTS", outcome: "CR to active merchant in 5 minutes. SAMA-compliant." },
  { name: "GEEK",    domain: "WEALTH · ADVISORY",     outcome: "Shari'ah-native portfolio intelligence. Fully governed." },
];
const Act3 = ({ t }: { t: number }) => {
  // 0–1.0 intro line. 1.0–1.8 cards fly in. 1.8–8.0 sequential spotlight ~1.5s each. 8.0–9.0 unison.
  const showIntro = t < 1.5;
  const cardEntry = t >= 1.0;
  const sStart = 2.0;
  const sLen = 1.4;
  const sIdx = t < sStart ? -1 : t > sStart + sLen * 4 ? -1 : Math.floor((t - sStart) / sLen);
  const unison = t >= 8.0;
  return (
    <motion.div className="relative flex flex-col items-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.4 } }}>
      <AnimatePresence>
        {showIntro && (
          <motion.div key="intro"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="absolute -top-2"
            style={{ ...FONT_BOLD, fontSize: 30, color: "rgba(255,255,255,0.95)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
            Four Omni-Agents. <span style={{ color: "#c4b5fd" }}>One Q Cortex.</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-12" style={{ width: 920, height: 420 }}>
        {AGENTS.map((a, i) => {
          const active = sIdx === i || unison;
          const fromX = i % 2 === 0 ? -280 : 280;
          const fromY = i < 2 ? -180 : 180;
          return (
            <motion.div key={a.name}
              initial={{ x: fromX, y: fromY, opacity: 0, scale: 0.8 }}
              animate={cardEntry ? { x: 0, y: 0, opacity: 1, scale: 1 } : { x: fromX, y: fromY, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.65, delay: 0.05 + i * 0.08, ease: EASE }}
              className="relative rounded-2xl overflow-hidden flex flex-col justify-center px-7"
              style={{
                background: "linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))",
                backdropFilter: "blur(20px) saturate(140%)",
                WebkitBackdropFilter: "blur(20px) saturate(140%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
              <motion.div className="absolute inset-0 pointer-events-none rounded-2xl"
                animate={{ opacity: active ? 1 : 0,
                  background: active ? "linear-gradient(135deg,rgba(155,92,246,0.14),rgba(167,139,250,0.06))" : "transparent" }}
                style={{ boxShadow: active ? "inset 0 0 60px rgba(167,139,250,0.32),0 0 80px rgba(167,139,250,0.36)" : "none" }}
                transition={{ duration: 0.4, ease: EASE }} />
              <div style={{ ...FONT_BOLD, fontSize: 42, letterSpacing: "0.14em", color: active ? "#ffffff" : "#e9d5ff" }}>
                {a.name}
              </div>
              <div className="relative mt-1" style={{ ...FONT_MED, fontSize: 11, color: "rgba(196,181,253,0.85)", letterSpacing: "0.28em" }}>
                {a.domain}
              </div>
              <motion.div className="relative mt-3"
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
                transition={{ duration: 0.4, ease: EASE }}
                style={{ ...FONT_BOLD, fontSize: 15, color: "#c4b5fd", letterSpacing: "0.02em" }}>
                → {a.outcome}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   ACT 4 (0:32–0:36) — Flag plant (locked)
   ──────────────────────────────────────────────────────────────────────────── */
const ACT4_LINES = ["Inside your walls.", "Under your law.", "Built in MENA."];
const Act4 = ({ t }: { t: number }) => {
  const vis = Math.min(3, Math.floor(t / 0.55) + 1);
  const showMap = t >= 2.4;
  return (
    <motion.div className="flex flex-col items-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.4 } }}>
      <div className="flex flex-col items-center gap-3">
        {ACT4_LINES.map((line, i) => (
          <motion.div key={line}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={vis > i ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ ...FONT_BOLD, fontSize: 52, color: "#ffffff", letterSpacing: "-0.01em" }}>
            {line.includes("MENA") ? (<>Built in <span style={{ color: "#c4b5fd" }}>MENA.</span></>) : line}
          </motion.div>
        ))}
      </div>
      <motion.svg width="320" height="14" viewBox="0 0 320 14" className="mt-6" style={{ overflow: "visible" }}>
        <motion.path d="M 6 7 Q 80 0 160 7 Q 240 14 314 7" stroke="#a78bfa" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: showMap ? 1 : 0, opacity: showMap ? 0.9 : 0 }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{ filter: "drop-shadow(0 0 8px rgba(167,139,250,0.6))" }} />
      </motion.svg>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   CLOSE (0:36–0:40) — Brand stamp (variant-specific line)
   ──────────────────────────────────────────────────────────────────────────── */
const renderCloseLine = (close: string, accent?: string) => {
  if (!accent) return close;
  const idx = close.indexOf(accent);
  if (idx === -1) return close;
  return (
    <>
      {close.slice(0, idx)}
      <span style={{ color: "#c4b5fd" }}>{close.slice(idx, idx + accent.length)}</span>
      {close.slice(idx + accent.length)}
    </>
  );
};

const Close = ({ t, close, accent }: { t: number; close: string; accent?: string }) => {
  const showStamp = t >= 0.5;
  const showLockup = t >= 1.8;
  return (
    <motion.div className="flex flex-col items-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
        animate={showStamp ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{
          ...FONT_BOLD, fontSize: 76, letterSpacing: "0.02em", textAlign: "center", maxWidth: 1100,
          backgroundImage: "linear-gradient(120deg,#ffffff 0%,#e9d5ff 35%,#c4b5fd 60%,#a78bfa 100%)",
          backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
        {renderCloseLine(close, accent)}
      </motion.div>
      <motion.div className="mt-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 12 }} animate={showLockup ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.7, ease: EASE }}>
        <img src={LOGO} alt="QuantorX" style={logoStyle(1, 48)} />
        <div className="mt-3" style={{ ...FONT_MED, fontSize: 14, color: "rgba(255,255,255,0.55)", letterSpacing: "0.24em" }}>
          POWERED BY Q CORTEX<span style={{ fontSize: 9, verticalAlign: "super", marginLeft: 2 }}>™</span>
        </div>
        <motion.div className="mt-3"
          initial={{ scaleX: 0 }} animate={{ scaleX: showLockup ? 1 : 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          style={{ height: 1, width: 380,
            background: "linear-gradient(90deg,transparent 0%,#a78bfa 50%,transparent 100%)",
            transformOrigin: "center" }} />
      </motion.div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   CONTROLS — play / pause / restart / scrub / prev / next / auto-advance
   ──────────────────────────────────────────────────────────────────────────── */
const BEAT_MARKS = [
  { label: "Anchor", t: 0 }, { label: "Pen", t: 2 }, { label: "Act 1", t: 9 },
  { label: "Act 2", t: 17 }, { label: "Act 3", t: 23 }, { label: "Act 4", t: 32 }, { label: "Close", t: 36 },
];

const Controls = ({
  time, playing, autoAdvance, variantIdx,
  onPlayPause, onRestart, onScrub, onPrev, onNext, onToggleAuto, onJump,
}: {
  time: number; playing: boolean; autoAdvance: boolean; variantIdx: number;
  onPlayPause: () => void; onRestart: () => void; onScrub: (t: number) => void;
  onPrev: () => void; onNext: () => void; onToggleAuto: () => void;
  onJump?: (i: number) => void;
}) => {
  const script = SCRIPTS[variantIdx];
  return (
    <div className="bg-black/90 border-t border-white/10 px-6 py-4 flex flex-col gap-3">
      {/* Variant selector strip */}
      <div className="flex items-center gap-2">
        {SCRIPTS.map((s, i) => (
          <button key={s.code} onClick={() => i !== variantIdx && onJump && onJump(i)}
            className="px-3 py-1.5 rounded-md text-xs transition-colors"
            style={{
              ...FONT_MED, letterSpacing: "0.16em",
              background: i === variantIdx ? "rgba(196,181,253,0.18)" : "rgba(255,255,255,0.04)",
              color: i === variantIdx ? "#e9d5ff" : "rgba(255,255,255,0.5)",
              border: i === variantIdx ? "1px solid rgba(196,181,253,0.4)" : "1px solid rgba(255,255,255,0.08)",
            }}>
            {s.code} · {s.title}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <button onClick={onToggleAuto}
            className="px-3 py-1.5 rounded-md text-xs"
            style={{
              ...FONT_MED, letterSpacing: "0.14em",
              background: autoAdvance ? "rgba(196,181,253,0.18)" : "rgba(255,255,255,0.04)",
              color: autoAdvance ? "#e9d5ff" : "rgba(255,255,255,0.5)",
              border: autoAdvance ? "1px solid rgba(196,181,253,0.4)" : "1px solid rgba(255,255,255,0.08)",
            }}>
            {autoAdvance ? "AUTO ▶" : "AUTO ◯"}
          </button>
        </div>
      </div>

      {/* Transport */}
      <div className="flex items-center gap-3">
        <button onClick={onPrev} disabled={variantIdx === 0}
          className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white text-sm transition-colors"
          style={FONT_MED}>← Prev</button>
        <button onClick={onPlayPause}
          className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
          style={FONT_MED}>{playing ? "Pause" : time >= DURATION ? "Play" : "Resume"}</button>
        <button onClick={onRestart}
          className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
          style={FONT_MED}>Restart</button>
        <button onClick={onNext} disabled={variantIdx === SCRIPTS.length - 1}
          className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white text-sm transition-colors"
          style={FONT_MED}>Next →</button>
        <div className="ml-auto text-white/70 tabular-nums text-sm" style={FONT_MED}>
          {time.toFixed(1)}s / {DURATION}s
        </div>
      </div>

      {/* Scrub */}
      <div className="relative h-12">
        <input type="range" min={0} max={DURATION} step={0.05} value={time}
          onChange={e => onScrub(parseFloat(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer z-10" />
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full" style={{
            width: `${(time / DURATION) * 100}%`,
            background: "linear-gradient(90deg,#c4b5fd 0%,#a78bfa 50%,#d946ef 100%)",
          }} />
        </div>
        {BEAT_MARKS.map(m => (
          <div key={m.label}
            className="absolute top-0 bottom-0 flex flex-col items-center pointer-events-none"
            style={{ left: `${(m.t / DURATION) * 100}%`, transform: "translateX(-50%)" }}>
            <div className="w-px h-3 bg-white/30 mt-3" />
            <div className="mt-1 text-[10px] text-white/50" style={{ ...FONT_MED, letterSpacing: "0.1em" }}>{m.label}</div>
          </div>
        ))}
      </div>

      <div className="text-white/40 text-xs text-center" style={FONT_MED}>
        Now playing · <span style={{ color: "#c4b5fd" }}>{script.code} · {script.title}</span> · {script.register} · {variantIdx + 1} of {SCRIPTS.length} · auto-advance through reviewer-recommended order
      </div>
    </div>
  );
};

export default Promo;
