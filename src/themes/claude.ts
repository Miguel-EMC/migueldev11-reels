export const claudeTheme = {
  bg: "#0A0E1A",
  claudeOrange: "#E16036", // Anthropic/Claude specific branding color accent
  green: "#00FF41",
  cyan: "#22D3EE",
  cream: "#F5F5F0",
  textDim: "#94A3B8",
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  glowOrange: "0 0 12px #E16036, 0 0 30px #E1603666",
  glowGreen: "0 0 12px #00FF41, 0 0 30px #00FF4166",
} as const;

// 65 seconds total sequence @ 30fps = 1950 frames
export const CLAUDE_CAP1_TOTAL_FRAMES = 1950;

export const CLAUDE_CAP1_SCENES = [
  { id: "gancho",    from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "que-es",    from: 240,  duration: 600 },  // 0:08 - 0:28 (20s)
  { id: "nivelbase", from: 840,  duration: 660 },  // 0:28 - 0:50 (22s)
  { id: "cta",       from: 1500, duration: 450 },  // 0:50 - 1:05 (15s)
] as const;

// 68 seconds total sequence @ 30fps = 2040 frames
export const CLAUDE_CAP2_TOTAL_FRAMES = 2040;

export const CLAUDE_CAP2_SCENES = [
  { id: "gancho",       from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "porque-pasa",  from: 240,  duration: 540 },  // 0:08 - 0:26 (18s)
  { id: "tres-trucos",  from: 780,  duration: 720 },  // 0:26 - 0:50 (24s)
  { id: "cierre",       from: 1500, duration: 540 },  // 0:50 - 1:08 (18s)
] as const;

// 68 seconds total sequence @ 30fps = 2040 frames
export const CLAUDE_CAP3_TOTAL_FRAMES = 2040;

export const CLAUDE_CAP3_SCENES = [
  { id: "gancho",     from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "mentalidad", from: 240,  duration: 660 },  // 0:08 - 0:30 (22s)
  { id: "confiar",    from: 900,  duration: 660 },  // 0:30 - 0:52 (22s)
  { id: "cierre",     from: 1560, duration: 480 },  // 0:52 - 1:08 (16s)
] as const;
