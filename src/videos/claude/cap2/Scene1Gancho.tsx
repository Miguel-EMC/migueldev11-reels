import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { claudeTheme } from "../../../themes/claude";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: claudeTheme.bg }}>
      <GridBackground color={claudeTheme.claudeOrange} />
      <ParticleField />
      
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 30%, ${claudeTheme.bg} 95%)`,
        pointerEvents: "none"
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Top Section Tracker Header */}
        <div style={{
          fontFamily: claudeTheme.fontMono, fontSize: 36, color: claudeTheme.claudeOrange,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 40, opacity: entrance
        }}>
          [ El Error del 90% ]
        </div>

        {/* Massive Text Impact Banner */}
        <div style={{
          background: "rgba(225, 96, 54, 0.1)", backdropFilter: "blur(12px)",
          border: `4px solid ${claudeTheme.claudeOrange}`, borderRadius: 32, padding: "50px 40px",
          width: "95%", textAlign: "center", opacity: entrance,
          transform: `scale(${interpolate(entrance, [0, 1], [0.8, 1])})`,
          boxShadow: `0 30px 60px rgba(0,0,0,0.6), ${claudeTheme.glowOrange}33`
        }}>
          <div style={{
            fontFamily: claudeTheme.fontSans, fontSize: 100, fontWeight: 900,
            color: claudeTheme.cream, lineHeight: 1, letterSpacing: "-4px"
          }}>
            AHORRA<br/>
            <span style={{ color: claudeTheme.claudeOrange, textShadow: claudeTheme.glowOrange }}>TOKENS</span>
          </div>
        </div>

        {/* Floating Subtitle Visual */}
        <div style={{
          marginTop: 60, fontFamily: claudeTheme.fontMono, fontSize: 32, fontWeight: 800,
          color: claudeTheme.cream, background: "rgba(0,0,0,0.6)", padding: "15px 30px", borderRadius: 16,
          border: `2px solid #EF444466`, textShadow: "0 0 10px rgba(239,68,68,0.5)",
          opacity: entrance, transform: `translateY(${Math.sin(frame / 10) * 10}px)`
        }}>
          Estás gastando de más 💸
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
