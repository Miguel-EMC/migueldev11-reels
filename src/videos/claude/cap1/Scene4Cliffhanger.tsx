import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { claudeTheme } from "../../../themes/claude";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene4Cliffhanger: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const subEntrance = spring({ frame: frame - 40, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 15) * 0.08 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: claudeTheme.bg }}>
      <GridBackground color={claudeTheme.claudeOrange} />
      <ParticleField />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Cliffhanger Text */}
        <div style={{
          textAlign: "center", marginBottom: 70, opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`
        }}>
          <div style={{
            fontFamily: claudeTheme.fontSans, fontSize: 55, fontWeight: 900, color: claudeTheme.cream, lineHeight: 1.2
          }}>
            Pero no gastes<br/>
            <span style={{ color: "#EF4444", textShadow: "0 0 20px rgba(239,68,68,0.5)" }}>Dinero de más.</span>
          </div>
        </div>

        {/* Coming Next Teaser Badge */}
        <div style={{
          background: "rgba(225, 96, 54, 0.1)", backdropFilter: "blur(12px)",
          border: `3px solid ${claudeTheme.claudeOrange}`, borderRadius: 24, padding: "30px 40px",
          textAlign: "center", marginBottom: 90, opacity: subEntrance,
          transform: `scale(${subEntrance})`, boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${claudeTheme.glowOrange}22`
        }}>
          <div style={{ fontFamily: claudeTheme.fontMono, fontSize: 28, color: claudeTheme.claudeOrange, letterSpacing: 4, marginBottom: 8, fontWeight: 900 }}>
            CAPÍTULO 2
          </div>
          <div style={{ fontFamily: claudeTheme.fontSans, fontSize: 60, fontWeight: 900, color: claudeTheme.cream, letterSpacing: "-2px" }}>
            Ahorra Tokens
          </div>
        </div>

        {/* Handle */}
        <div style={{
          opacity: subEntrance,
          transform: `scale(${subEntrance * pulse})`,
          textAlign: "center"
        }}>
          <div style={{
            fontFamily: claudeTheme.fontMono, fontSize: 80, fontWeight: 900,
            color: claudeTheme.claudeOrange, textShadow: claudeTheme.glowOrange
          }}>
            @migueldev11
          </div>
          <div style={{
            fontFamily: claudeTheme.fontSans, fontSize: 34, fontWeight: 400,
            color: claudeTheme.cream, opacity: 0.7, marginTop: 10, letterSpacing: 8, textTransform: "uppercase"
          }}>
            Sígueme
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
