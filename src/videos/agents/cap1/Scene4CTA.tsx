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
      <GridBackground color={agentsTheme.purple} />
      <ParticleField />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Conceptual summary statement label header text box */}
        <div style={{
          textAlign: "center", marginBottom: 80, opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`
        }}>
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 50, fontWeight: 400, color: agentsTheme.cream, opacity: 0.8
          }}>
            De hablar <span style={{ color: agentsTheme.purple, fontWeight: 900, textShadow: agentsTheme.glowPurple }}>→</span> a trabajar.
          </div>
        </div>

        {/* Coming Up Next Topic Teaser Card */}
        <div style={{
          background: "rgba(10, 15, 30, 0.7)", backdropFilter: "blur(12px)",
          border: `2px solid ${agentsTheme.orange}66`, borderRadius: 24, padding: "30px 40px",
          textAlign: "center", marginBottom: 100, opacity: subEntrance,
          transform: `scale(${subEntrance})`
        }}>
          <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 24, color: agentsTheme.orange, letterSpacing: 4, marginBottom: 8 }}>
            PRÓXIMO VIDEO
          </div>
          <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 55, fontWeight: 900, color: agentsTheme.cream, letterSpacing: "-1px" }}>
            🕸️ LangGraph Core
          </div>
        </div>

        {/* Brand Core Identity CTA handle tag badge */}
        <div style={{
          opacity: subEntrance,
          transform: `scale(${subEntrance * pulse})`,
          textAlign: "center"
        }}>
          <div style={{
            fontFamily: agentsTheme.fontMono, fontSize: 80, fontWeight: 900,
            color: agentsTheme.purple, textShadow: agentsTheme.glowPurple
          }}>
            @migueldev11
          </div>
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 36, fontWeight: 400,
            color: agentsTheme.cream, opacity: 0.7, marginTop: 10, letterSpacing: 8, textTransform: "uppercase"
          }}>
            Sígueme
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
