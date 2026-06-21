import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene4CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const subEntrance = spring({ frame: frame - 40, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 15) * 0.08 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.orange} />
      <ParticleField />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Script specific impact statement */}
        <div style={{
          textAlign: "center", marginBottom: 70, opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`
        }}>
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 52, fontWeight: 900, color: agentsTheme.cream, lineHeight: 1.2
          }}>
            Estado + Ciclos =<br/>
            <span style={{ color: agentsTheme.orange, textShadow: agentsTheme.glowOrange }}>Agente de Verdad.</span>
          </div>
        </div>

        {/* Dynamic call to action YouTube master link redirection box */}
        <div style={{
          background: "rgba(10, 15, 30, 0.8)", backdropFilter: "blur(12px)",
          border: `3px solid ${agentsTheme.orange}`, borderRadius: 24, padding: "30px 40px",
          textAlign: "center", marginBottom: 90, opacity: subEntrance,
          transform: `scale(${subEntrance})`, boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${agentsTheme.glowOrange}22`
        }}>
          <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 24, color: agentsTheme.orange, letterSpacing: 4, marginBottom: 8, fontWeight: 800 }}>
            CURSO COMPLETO EN
          </div>
          <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 62, fontWeight: 900, color: agentsTheme.cream, letterSpacing: "-2px" }}>
            🟥 MI YOUTUBE
          </div>
        </div>

        {/* Brand signature handle badge tag */}
        <div style={{
          opacity: subEntrance,
          transform: `scale(${subEntrance * pulse})`,
          textAlign: "center"
        }}>
          <div style={{
            fontFamily: agentsTheme.fontMono, fontSize: 80, fontWeight: 900,
            color: agentsTheme.orange, textShadow: agentsTheme.glowOrange
          }}>
            @migueldev11
          </div>
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 34, fontWeight: 400,
            color: agentsTheme.cream, opacity: 0.7, marginTop: 10, letterSpacing: 8, textTransform: "uppercase"
          }}>
            Sígueme
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
