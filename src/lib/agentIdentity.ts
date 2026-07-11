/**
 * The five agents' visual identities - single source of truth for subpages.
 * (Mirrors the accents used by the Home story cube and agent panels.)
 */
export interface AgentIdentity {
  key: string;
  index: string;
  label: string;
  accent: string;
  accentRgb: string;
  accentSoft: string;
  /** Text color that stays readable on an accent-filled surface. */
  ink: string;
  plate: string;
}

export const AGENT_IDENTITIES: Record<string, AgentIdentity> = {
  nodus: {
    key: "nodus",
    index: "01",
    label: "Nodus · The Digital Factory",
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    accentSoft: "#a5e3ff",
    ink: "#062331",
    plate: "/agents/bg-nodus.webp",
  },
  axon: {
    key: "axon",
    index: "02",
    label: "Axon · The Urban Intelligence Unit",
    accent: "#00c9a7",
    accentRgb: "0, 201, 167",
    accentSoft: "#8af2dd",
    ink: "#0b2420",
    plate: "/agents/bg-axon.webp",
  },
  nexus: {
    key: "nexus",
    index: "03",
    label: "Nexus · The Customer Success Squad",
    accent: "#9b5cf6",
    accentRgb: "155, 92, 246",
    accentSoft: "#c9adff",
    ink: "#ffffff",
    plate: "/agents/bg-nexus.webp",
  },
  paygate: {
    key: "paygate",
    index: "04",
    label: "PayGate · The Partner Enablement Hub",
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    accentSoft: "#ffd28a",
    ink: "#2a1703",
    plate: "/agents/bg-paygate.webp",
  },
  nextra: {
    key: "nextra",
    index: "05",
    label: "Nextra · The Strategy Advisory Office",
    accent: "#d946ef",
    accentRgb: "217, 70, 239",
    accentSoft: "#f2a9ff",
    ink: "#2b0a30",
    plate: "/agents/bg-geek.webp",
  },
};
