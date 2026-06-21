export const agentsTheme = {
  bg: "#0A0E1A",
  green: "#00FF41",
  orange: "#FF7A1A",
  purple: "#A78BFA",
  cyan: "#22D3EE",
  cream: "#F5F5F0",
  textDim: "#94A3B8",
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  glowGreen: "0 0 12px #00FF41, 0 0 30px #00FF4166",
  glowOrange: "0 0 12px #FF7A1A, 0 0 30px #FF7A1A66",
  glowPurple: "0 0 12px #A78BFA, 0 0 30px #A78BFA66",
} as const;

// 75 seconds @ 30 fps = 2250 frames total
export const AGENTS_CAP1_TOTAL_FRAMES = 2250;

export const AGENTS_CAP1_SCENES = [
  { id: "gancho",    from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "contraste", from: 240,  duration: 600 },  // 0:08 - 0:28 (20s)
  { id: "ejemplo",   from: 840,  duration: 660 },  // 0:28 - 0:50 (22s)
  { id: "cta",       from: 1500, duration: 750 },  // 0:50 - 1:15 (25s)
] as const;
