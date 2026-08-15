export const emcodeTheme = {
  brand: "EMCODE",
  handle: "@emcode",
  tagline: "Software Engineering & Cloud Architecture",
  bg: "#0A0E1A",
  green: "#00FF41", // Signature Matrix/Neon Green
  primary: "#00FF41",
  cyan: "#22D3EE",
  orange: "#FF7A1A",
  red: "#EF4444",
  cream: "#F5F5F0",
  textDim: "#94A3B8",
  borderDark: "#1E293B",
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  glowGreen: "0 0 16px #00FF41, 0 0 35px #00FF4166",
  glowCyan: "0 0 16px #22D3EE, 0 0 30px #22D3EE66",
  glowOrange: "0 0 16px #FF7A1A, 0 0 30px #FF7A1A66",
  glowRed: "0 0 16px #EF4444, 0 0 35px #EF444466",
} as const;

export type EmcodeTheme = typeof emcodeTheme;
