export const k8sTheme = {
  bg: "#0A0E1A",
  k8sBlue: "#326CE5", // Kubernetes official blue
  cyan: "#22D3EE",
  green: "#00FF41",
  red: "#EF4444",
  cream: "#F5F5F0",
  textDim: "#94A3B8",
  fontSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  glowBlue: "0 0 12px #326CE5, 0 0 30px #326CE566",
  glowCyan: "0 0 12px #22D3EE, 0 0 30px #22D3EE66",
  glowRed: "0 0 12px #EF4444, 0 0 30px #EF444466",
  glowGreen: "0 0 12px #00FF41, 0 0 30px #00FF4166",
} as const;

// Cap 1: ~70-85s (We'll use 75s = 2250 frames)
export const K8S_CAP1_TOTAL_FRAMES = 2250;
export const K8S_CAP1_SCENES = [
  { id: "gancho",      from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "que-es",      from: 240,  duration: 660 },  // 0:08 - 0:30 (22s)
  { id: "honestidad",  from: 900,  duration: 660 },  // 0:30 - 0:52 (22s)
  { id: "cierre",      from: 1560, duration: 690 },  // 0:52 - 1:08 (16s)
] as const;

// Cap 2: ~60-75s (We'll use 65s = 1950 frames)
export const K8S_CAP2_TOTAL_FRAMES = 1950;
export const K8S_CAP2_SCENES = [
  { id: "gancho",     from: 0,    duration: 240 },     // 0:00 - 0:08 (8s)
  { id: "pod",        from: 240,  duration: 540 },     // 0:08 - 0:26 (18s)
  { id: "deployment", from: 780,  duration: 540 },     // 0:26 - 0:44 (18s)
  { id: "service",    from: 1320, duration: 630 },     // 0:44 - 1:05 (21s)
] as const;
