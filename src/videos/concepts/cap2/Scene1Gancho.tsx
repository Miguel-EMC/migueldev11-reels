import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { conceptsTheme } from "../../../themes/concepts";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: conceptsTheme.bg }}>
      <GridBackground color={conceptsTheme.cyan} />
      <ParticleField />
      
      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        <div style={{
          fontFamily: conceptsTheme.fontMono, fontSize: 36, color: conceptsTheme.cyan,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 40, opacity: entrance
        }}>
          [ CONCEPTOS DE IA ]
        </div>

        <div style={{
          background: "rgba(34, 211, 238, 0.1)", backdropFilter: "blur(12px)",
          border: `4px solid ${conceptsTheme.cyan}`, borderRadius: 32, padding: "50px 40px",
          width: "95%", textAlign: "center", opacity: entrance,
          transform: `scale(${entrance})`, boxShadow: conceptsTheme.glowCyan
        }}>
          <div style={{
            fontFamily: conceptsTheme.fontSans, fontSize: 90, fontWeight: 900,
            color: conceptsTheme.cream, lineHeight: 1.1, letterSpacing: "-2px"
          }}>
            BUSCAR POR<br/>
            <span style={{ color: conceptsTheme.cyan, textShadow: conceptsTheme.glowCyan }}>SIGNIFICADO</span>
          </div>
        </div>

        <div style={{
          marginTop: 60, fontFamily: conceptsTheme.fontMono, fontSize: 32, fontWeight: 800,
          color: conceptsTheme.cream, background: "rgba(0,0,0,0.6)", padding: "15px 30px", borderRadius: 16,
          border: `2px solid ${conceptsTheme.pink}66`, textShadow: conceptsTheme.glowPink,
          opacity: entrance, transform: `translateY(${Math.sin(frame / 10) * 10}px)`
        }}>
          La diferencia clave.
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
