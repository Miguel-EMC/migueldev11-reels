import React from "react";
import { AbsoluteFill } from "remotion";

export const Bg: React.FC<{ accent: string }> = ({ accent }) => (
  <>
    <AbsoluteFill style={{ background: "#0A0E1A" }} />
    <AbsoluteFill style={{
      background: `radial-gradient(circle at 50% 40%, ${accent}15 0%, transparent 70%)`,
    }} />
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}
      viewBox="0 0 1080 1920"
    >
      <g stroke={accent} strokeWidth="2" fill="none" strokeDasharray="4 8">
        <path d="M0 400 H250 V300 H550" />
        <path d="M1080 800 H800 V1000 H500" />
        <path d="M200 1920 V1600 H500 V1400 H700" />
        <path d="M900 0 V300 H600 V500" />
        
        {/* Decorative dots */}
        <circle cx="250" cy="300" r="6" fill={accent} />
        <circle cx="800" cy="1000" r="6" fill={accent} />
        <circle cx="500" cy="1600" r="6" fill={accent} />
        <circle cx="600" cy="300" r="6" fill={accent} />
        
        {/* Additional tech lines */}
        <path d="M0 1200 L150 1350 H400" strokeOpacity="0.5" />
        <path d="M1080 400 L930 250 H700" strokeOpacity="0.5" />
      </g>
    </svg>
  </>
);
