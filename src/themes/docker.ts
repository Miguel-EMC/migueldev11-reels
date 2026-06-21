export const dockerTheme = {
  bg: "#0A0E1A",
  dockerBlue: "#0DB7ED", // Docker classic blue
  cyan: "#22D3EE",
  green: "#00FF41",
  red: "#EF4444",
  cream: "#F5F5F0",
  textDim: "#94A3B8",
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  glowBlue: "0 0 12px #0DB7ED, 0 0 30px #0DB7ED66",
  glowCyan: "0 0 12px #22D3EE, 0 0 30px #22D3EE66",
  glowRed: "0 0 12px #EF4444, 0 0 30px #EF444466",
  glowGreen: "0 0 12px #00FF41, 0 0 30px #00FF4166",
} as const;

// Cap 1: ~65-80s (We'll use 75s = 2250 frames)
export const DOCKER_CAP1_TOTAL_FRAMES = 2250;
export const DOCKER_CAP1_SCENES = [
  { id: "gancho",      from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "el-problema", from: 240,  duration: 660 },  // 0:08 - 0:30 (22s)
  { id: "la-solucion", from: 900,  duration: 660 },  // 0:30 - 0:52 (22s)
  { id: "cierre",      from: 1560, duration: 690 },  // 0:52 - 1:15 (23s)
] as const;

// Cap 2: ~60-75s (We'll use 65s = 1950 frames)
export const DOCKER_CAP2_TOTAL_FRAMES = 1950;
export const DOCKER_CAP2_SCENES = [
  { id: "gancho",     from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "la-imagen",  from: 240,  duration: 660 },  // 0:08 - 0:30 (22s)
  { id: "contenedor", from: 900,  duration: 600 },  // 0:30 - 0:50 (20s)
  { id: "cierre",     from: 1500, duration: 450 },  // 0:50 - 1:05 (15s)
] as const;

// Cap 3: ~65-80s (We'll use 75s = 2250 frames)
export const DOCKER_CAP3_TOTAL_FRAMES = 2250;
export const DOCKER_CAP3_SCENES = [
  { id: "gancho",      from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "por-que",     from: 240,  duration: 660 },  // 0:08 - 0:30 (22s)
  { id: "la-solucion", from: 900,  duration: 660 },  // 0:30 - 0:52 (22s)
  { id: "cierre",      from: 1560, duration: 690 },  // 0:52 - 1:15 (23s)
] as const;
