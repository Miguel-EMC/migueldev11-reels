import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { CharacterFace } from "../../../components/CharacterFace";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const faceScale = spring({ frame: frame - 10, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.green} />
      <ParticleField />
      
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 30%, ${agentsTheme.bg} 95%)`,
        pointerEvents: "none"
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Animated Avatar */}
        <div style={{ marginBottom: 40, transform: `scale(${interpolate(faceScale, [0, 1], [0.5, 1.3])})`, opacity: faceScale }}>
          <CharacterFace type="agent" size={160} />
        </div>

        <div style={{
          fontFamily: agentsTheme.fontMono, fontSize: 36, color: agentsTheme.green,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 30, opacity: entrance, textShadow: agentsTheme.glowGreen
        }}>
          [ Inteligencia Activa ]
        </div>

        {/* Huge Sizing Impact Card */}
        <div style={{
          background: "rgba(0, 255, 65, 0.08)", backdropFilter: "blur(12px)",
          border: `3px solid ${agentsTheme.green}`, borderRadius: 24, padding: "45px 30px",
          width: "95%", textAlign: "center", opacity: entrance,
          transform: `scale(${interpolate(entrance, [0, 1], [0.8, 1])})`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.5), ${agentsTheme.glowGreen}33`
        }}>
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 95, fontWeight: 900,
            color: agentsTheme.cream, lineHeight: 1.1, letterSpacing: "-3px"
          }}>
            TOOLS <span style={{ color: agentsTheme.green, textShadow: agentsTheme.glowGreen }}>=</span> ACCIONES
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
