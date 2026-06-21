export const tfTheme = {
  bg: "#0A0E1A",
  tfPurple: "#844FBA", // Official Terraform Purple
  cyan: "#22D3EE",
  green: "#00FF41",
  red: "#EF4444",
  cream: "#F5F5F0",
  textDim: "#94A3B8",
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  glowPurple: "0 0 12px #844FBA, 0 0 30px #844FBA66",
  glowCyan: "0 0 12px #22D3EE, 0 0 30px #22D3EE66",
  glowGreen: "0 0 12px #00FF41, 0 0 30px #00FF4166",
  glowRed: "0 0 12px #EF4444, 0 0 30px #EF444466",
} as const;

// Cap 1: 75s = 2250 frames
export const TF_CAP1_TOTAL_FRAMES = 2250;
export const TF_CAP1_SCENES = [
  { id: "gancho",      from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "el-problema", from: 240,  duration: 660 },  // 0:08 - 0:30 (22s)
  { id: "la-solucion", from: 900,  duration: 720 },  // 0:30 - 0:54 (24s)
  { id: "cierre",      from: 1620, duration: 630 },  // 0:54 - 1:15 (21s)
] as const;

// Cap 2: 75s = 2250 frames
export const TF_CAP2_TOTAL_FRAMES = 2250;
export const TF_CAP2_SCENES = [
  { id: "gancho",     from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "que-es",     from: 240,  duration: 720 },  // 0:08 - 0:32 (24s)
  { id: "reglas",     from: 960,  duration: 660 },  // 0:32 - 0:54 (22s)
  { id: "cierre",     from: 1620, duration: 630 },  // 0:54 - 1:15 (21s)
] as const;
