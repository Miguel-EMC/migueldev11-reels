import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.orange} />
      <ParticleField />
      
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 30%, ${agentsTheme.bg} 95%)`,
        pointerEvents: "none"
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Top Section Tracker Header */}
        <div style={{
          fontFamily: agentsTheme.fontMono, fontSize: 36, color: agentsTheme.orange,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 30, opacity: entrance
        }}>
          [ Arquitectura de IA ]
        </div>

        {/* Massive Text Impact Banner */}
        <div style={{
          background: "rgba(255, 122, 26, 0.1)", backdropFilter: "blur(12px)",
          border: `3px solid ${agentsTheme.orange}`, borderRadius: 24, padding: "45px 30px",
          width: "95%", textAlign: "center", opacity: entrance,
          transform: `scale(${interpolate(entrance, [0, 1], [0.8, 1])})`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.5), ${agentsTheme.glowOrange}33`
        }}>
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 90, fontWeight: 900,
            color: agentsTheme.cream, lineHeight: 1.1, letterSpacing: "-3px"
          }}>
            CADENA <span style={{ color: agentsTheme.orange, textShadow: agentsTheme.glowOrange }}>VS</span> GRAFO
          </div>
        </div>

        {/* Dynamic loading bars indicator row */}
        <div style={{ marginTop: 50, display: "flex", gap: 15, opacity: entrance }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              width: 18, height: 18, borderRadius: "50%", backgroundColor: agentsTheme.orange,
              boxShadow: agentsTheme.glowOrange,
              opacity: interpolate(Math.sin((frame - i * 8) / 8), [-1, 1], [0.3, 1])
            }} />
          ))}
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
