import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { agentsTheme } from "../../../themes/agents";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene4Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const subEntrance = spring({ frame: frame - 40, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 15) * 0.08 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: agentsTheme.bg }}>
      <GridBackground color={agentsTheme.green} />
      <ParticleField />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Caption transformation text */}
        <div style={{
          textAlign: "center", marginBottom: 70, opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`
        }}>
          <div style={{
            fontFamily: agentsTheme.fontSans, fontSize: 55, fontWeight: 900, color: agentsTheme.cream, lineHeight: 1.2
          }}>
            IA <span style={{ color: agentsTheme.green, textShadow: agentsTheme.glowGreen }}>Trabajando</span><br/>
            con tus datos reales.
          </div>
        </div>

        {/* Text-to-SQL Badge / Build in Public */}
        <div style={{
          background: "rgba(0, 255, 65, 0.1)", backdropFilter: "blur(12px)",
          border: `3px solid ${agentsTheme.green}`, borderRadius: 24, padding: "30px 40px",
          textAlign: "center", marginBottom: 90, opacity: subEntrance,
          transform: `scale(${subEntrance})`, boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${agentsTheme.glowGreen}22`
        }}>
          <div style={{ fontFamily: agentsTheme.fontMono, fontSize: 28, color: agentsTheme.green, letterSpacing: 4, marginBottom: 8, fontWeight: 900 }}>
            BUILD IN PUBLIC
          </div>
          <div style={{ fontFamily: agentsTheme.fontSans, fontSize: 65, fontWeight: 900, color: agentsTheme.cream, letterSpacing: "-2px" }}>
            TEXT-TO-SQL
          </div>
        </div>

        {/* Handle */}
        <div style={{
          opacity: subEntrance,
          transform: `scale(${subEntrance * pulse})`,
          textAlign: "center"
        }}>
          <div style={{
            fontFamily: agentsTheme.fontMono, fontSize: 80, fontWeight: 900,
            color: agentsTheme.green, textShadow: agentsTheme.glowGreen
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
