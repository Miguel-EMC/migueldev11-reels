import React from "react";
import { theme } from "../theme";
import { ParticleField } from "./ParticleField";

interface BackgroundProps {
  color?: string;
}

export const Background: React.FC<BackgroundProps> = ({ color }) => {
  const accent = color || theme.accent;
  return (
    <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 50% 30%, ${theme.bgAlt} 0%, ${theme.bg} 70%)`, overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"15%", left:"50%", transform:"translateX(-50%)", width:900, height:600, borderRadius:"50%", background:`radial-gradient(ellipse, ${accent}0A 0%, transparent 70%)`, pointerEvents:"none" }} />
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.04 }} viewBox="0 0 1080 1920">
        <g stroke={accent} strokeWidth="1" fill="none">
          <path d="M0 480 H300 V320 H600" /><path d="M1080 800 H780 V960 H480 V1120 H180" />
          <path d="M0 1200 H240 V1080 H480 V960" /><path d="M600 0 V240 H840 V480" />
          <path d="M840 1920 V1680 H600 V1440 H360 V1200" />
          <circle cx="300" cy="320" r="6" fill={accent} /><circle cx="600" cy="320" r="4" fill={accent} />
          <circle cx="780" cy="960" r="6" fill={accent} /><circle cx="480" cy="960" r="4" fill={accent} />
          <circle cx="840" cy="480" r="5" fill={accent} />
        </g>
      </svg>
      <ParticleField />
    </div>
  );
};
