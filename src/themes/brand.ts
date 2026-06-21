// migueldev11 brand constants — shared across all video series
export const brand = {
  bg:      "#0A0E1A",
  green:   "#00FF41",   // primary brand accent (Matrix/Neon Green)
  orange:  "#FF7A1A",   // secondary accent (Kinetic Orange)
  cream:   "#F5F5F0",   // body text
  cyan:    "#22D3EE",   // technical elements
  textDim: "#94A3B8",
  handle:  "@migueldev11",
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  glowGreen: "0 0 12px #00FF41, 0 0 30px #00FF4166",
  glowOrange: "0 0 12px #FF7A1A, 0 0 30px #FF7A1A66",
  glowCyan:   "0 0 10px #22D3EE, 0 0 24px #22D3EE55",
  
  // Kinetic audio sync beats (in frame indices at 30 fps)
  // 112.5 BPM corresponds to a beat exactly every 16 frames.
  // You can adjust this array manually to synchronize changes with your music track's actual transients.
  beats: Array.from({ length: 65 }, (_, i) => i * 16),
} as const;

