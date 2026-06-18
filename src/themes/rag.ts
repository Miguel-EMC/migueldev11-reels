export const ragTheme = {
  bg: "#0A0E1A",
  cyan:    "#22D3EE",
  green:   "#34D399",
  violet:  "#A78BFA",
  text:    "#F1F5F9",
  textDim: "#94A3B8",
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  glowCyan:   "0 0 12px #22D3EE, 0 0 30px #22D3EE66",
  glowGreen:  "0 0 12px #34D399, 0 0 30px #34D39966",
  glowViolet: "0 0 12px #A78BFA, 0 0 30px #A78BFA66",
} as const;

export const RAG_TOTAL_FRAMES = 1975; // 65.85 s @ 30 fps — matched to rag_cap01.mp3

export const RAG_SCENES = [
  { id: "gancho",      from: 0,    duration: 177 },
  { id: "la-palabra",  from: 177,  duration: 329 },
  { id: "la-idea",     from: 506,  duration: 456 },
  { id: "la-analogia", from: 962,  duration: 430 },
  { id: "por-que",     from: 1392, duration: 329 },
  { id: "cliffhanger", from: 1721, duration: 254 },
] as const;
