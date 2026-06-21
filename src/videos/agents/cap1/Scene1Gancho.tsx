import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 10) * 0.1 + 0.9;

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.purple} />
      <ParticleField />
      
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 30%, ${agentsTheme.bg} 95%)`,
        pointerEvents: "none"
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Subtitle intro */}
        <div style={{
          fontFamily: agentsTheme.fontMono, fontSize: 36, color: agentsTheme.purple,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 30, opacity: entrance
        }}>
          [ El Chatbot Murió ]
        </div>

        {/* Giant Main Caption impact banner */}
        <div style={{
          background: "rgba(167, 139, 250, 0.1)", backdropFilter: "blur(12px)",
          border: `3px solid ${agentsTheme.purple}`, borderRadius: 24, padding: "40px 30px",
          width: "90%", textAlign: "center", opacity: entrance,
          transform: `scale(${interpolate(entrance, [0, 1], [0.8, 1])})`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.5), ${agentsTheme.glowPurple}33`
        }}>
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 100, fontWeight: 900,
            color: agentsTheme.cream, lineHeight: 1.1, letterSpacing: "-3px"
          }}>
            AGENTE <span style={{ color: agentsTheme.purple, textShadow: agentsTheme.glowPurple }}>≠</span> CHATBOT
          </div>
        </div>

        {/* Dynamic flashing indicator bar */}
        <div style={{
          marginTop: 50, display: "flex", gap: 15, opacity: entrance
        }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              width: 16, height: 16, borderRadius: "50%", backgroundColor: agentsTheme.purple,
              boxShadow: agentsTheme.glowPurple,
              opacity: interpolate(Math.sin((frame - i * 8) / 8), [-1, 1], [0.3, 1])
            }} />
          ))}
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
