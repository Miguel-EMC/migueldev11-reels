export const theme = {
  bg: "#070D08", bgAlt: "#0D160D", bgPanel: "#0A1A0A", bgPanelBorder: "#1A3A1A",
  accent: "#7CFC88", accentSoft: "#B6FFC0", accentDim: "#3D7A45",
  text: "#E8F5EA", textMuted: "#7E8C7E",
  codeKeyword: "#7CFC88", codeString: "#B6FFC0", codeFunc: "#E8F5EA",
  codeNumber: "#5BE06A", codeComment: "#4A6A4A", codePunctuation: "#9ABCA0",
  glowAccent: "0 0 12px #7CFC88, 0 0 30px #7CFC8866",
  glowSoft: "0 0 8px #B6FFC044",
  glowText: "0 0 10px #7CFC88, 0 0 24px #7CFC8855",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
} as const;
export type Theme = typeof theme;
