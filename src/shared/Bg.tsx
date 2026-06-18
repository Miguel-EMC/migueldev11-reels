import React from "react";
import { AbsoluteFill } from "remotion";

export const Bg: React.FC<{ accent: string }> = ({ accent }) => (
  <>
    <AbsoluteFill style={{ background: "#0A0E1A" }} />
    <AbsoluteFill style={{
      background: `radial-gradient(ellipse at 50% 35%, ${accent}22 0%, transparent 62%)`,
    }} />
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.055 }}
      viewBox="0 0 1080 1920"
    >
      <g stroke={accent} strokeWidth="1" fill="none">
        <path d="M0 380 H220 V280 H520" />
        <path d="M1080 720 H860 V920 H560" />
        <path d="M180 1920 V1680 H420 V1480 H620" />
        <path d="M920 0 V210 H700 V420" />
        <circle cx="220" cy="280" r="4" fill={accent} />
        <circle cx="860" cy="920" r="4" fill={accent} />
        <circle cx="420" cy="1480" r="4" fill={accent} />
        <circle cx="700" cy="420" r="4" fill={accent} />
      </g>
    </svg>
  </>
);
