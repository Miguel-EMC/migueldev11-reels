export const conceptsTheme = {
  bg: "#0A0E1A",
  pink: "#EC4899", // Concepts primary color
  cyan: "#22D3EE",
  green: "#00FF41",
  orange: "#FF7A1A",
  yellow: "#EAB308",
  cream: "#F5F5F0",
  textDim: "#94A3B8",
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  glowPink: "0 0 12px #EC4899, 0 0 30px #EC489966",
  glowCyan: "0 0 12px #22D3EE, 0 0 30px #22D3EE66",
  glowGreen: "0 0 12px #00FF41, 0 0 30px #00FF4166",
  glowOrange: "0 0 12px #FF7A1A, 0 0 30px #FF7A1A66",
  glowYellow: "0 0 12px #EAB308, 0 0 30px #EAB30866",
} as const;

export const CONCEPTS_CAP1_TOTAL_FRAMES = 2250;
export const CONCEPTS_CAP1_SCENES = [
  { id: "gancho",      from: 0,    duration: 240 },
  { id: "que-es",      from: 240,  duration: 660 },
  { id: "por-que",     from: 900,  duration: 660 },
  { id: "cierre",      from: 1560, duration: 690 },
] as const;

export const CONCEPTS_CAP2_TOTAL_FRAMES = 2250;
export const CONCEPTS_CAP2_SCENES = [
  { id: "gancho",      from: 0,    duration: 240 },
  { id: "normal",      from: 240,  duration: 660 },
  { id: "vectorial",   from: 900,  duration: 660 },
  { id: "cierre",      from: 1560, duration: 690 },
] as const;

export const CONCEPTS_CAP3_TOTAL_FRAMES = 2550;
export const CONCEPTS_CAP3_SCENES = [
  { id: "gancho",      from: 0,    duration: 240 },
  { id: "diferencia",  from: 240,  duration: 720 },
  { id: "regla",       from: 960,  duration: 720 },
  { id: "cierre",      from: 1680, duration: 870 },
] as const;

export const CONCEPTS_CAP4_TOTAL_FRAMES = 2550;
export const CONCEPTS_CAP4_SCENES = [
  { id: "gancho",      from: 0,    duration: 240 },
  { id: "error",       from: 240,  duration: 720 },
  { id: "evals",       from: 960,  duration: 720 },
  { id: "cierre",      from: 1680, duration: 870 },
] as const;

export const CONCEPTS_CAP5_TOTAL_FRAMES = 2400;
export const CONCEPTS_CAP5_SCENES = [
  { id: "gancho",      from: 0,    duration: 240 },
  { id: "que-es",      from: 240,  duration: 660 },
  { id: "error",       from: 900,  duration: 720 },
  { id: "cierre",      from: 1620, duration: 780 },
] as const;
