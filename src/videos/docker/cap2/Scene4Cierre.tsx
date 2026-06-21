import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { dockerTheme } from "../../../themes/docker";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene4Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const subEntrance = spring({ frame: frame - 40, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 15) * 0.08 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: dockerTheme.bg }}>
      <GridBackground color={dockerTheme.dockerBlue} />
      <ParticleField />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        <div style={{
          textAlign: "center", marginBottom: 70, opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`
        }}>
          <div style={{
            fontFamily: dockerTheme.fontSans, fontSize: 50, fontWeight: 900, color: dockerTheme.cream, lineHeight: 1.2
          }}>
            Molde <span style={{ color: dockerTheme.cyan }}>→</span> <span style={{ color: dockerTheme.green, textShadow: dockerTheme.glowGreen }}>Lo que corre.</span>
          </div>
        </div>

        {/* Coming Next Teaser Badge */}
        <div style={{
          background: "rgba(13, 183, 237, 0.1)", backdropFilter: "blur(12px)",
          border: `3px solid ${dockerTheme.dockerBlue}`, borderRadius: 24, padding: "30px 40px",
          textAlign: "center", marginBottom: 90, opacity: subEntrance,
          transform: `scale(${subEntrance})`, boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${dockerTheme.glowBlue}22`
        }}>
          <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 28, color: dockerTheme.dockerBlue, letterSpacing: 4, marginBottom: 8, fontWeight: 900 }}>
            CAPÍTULO 3
          </div>
          <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 60, fontWeight: 900, color: dockerTheme.cream, letterSpacing: "-2px" }}>
            Imágenes Ligeras
          </div>
        </div>

        {/* Handle */}
        <div style={{
          opacity: subEntrance,
          transform: `scale(${subEntrance * pulse})`,
          textAlign: "center"
        }}>
          <div style={{
            fontFamily: dockerTheme.fontMono, fontSize: 80, fontWeight: 900,
            color: dockerTheme.dockerBlue, textShadow: dockerTheme.glowBlue
          }}>
            @migueldev11
          </div>
          <div style={{
            fontFamily: dockerTheme.fontSans, fontSize: 34, fontWeight: 400,
            color: dockerTheme.cream, opacity: 0.7, marginTop: 10, letterSpacing: 8, textTransform: "uppercase"
          }}>
            Sígueme
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
