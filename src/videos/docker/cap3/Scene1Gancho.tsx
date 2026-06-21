import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { dockerTheme } from "../../../themes/docker";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: dockerTheme.bg }}>
      <GridBackground color={dockerTheme.dockerBlue} />
      <ParticleField />
      
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 30%, ${dockerTheme.bg} 95%)`,
        pointerEvents: "none"
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        <div style={{
          fontFamily: dockerTheme.fontMono, fontSize: 36, color: dockerTheme.dockerBlue,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 40, opacity: entrance
        }}>
          [ Multi-stage Build ]
        </div>

        {/* Huge Sizing Impact Card */}
        <div style={{
          background: "rgba(13, 183, 237, 0.1)", backdropFilter: "blur(12px)",
          border: `4px solid ${dockerTheme.dockerBlue}`, borderRadius: 32, padding: "50px 40px",
          width: "95%", textAlign: "center", opacity: entrance,
          transform: `scale(${interpolate(entrance, [0, 1], [0.8, 1])})`,
          boxShadow: `0 30px 60px rgba(0,0,0,0.6), ${dockerTheme.glowBlue}33`
        }}>
          <div style={{
            fontFamily: dockerTheme.fontSans, fontSize: 100, fontWeight: 900,
            color: dockerTheme.red, textShadow: dockerTheme.glowRed, lineHeight: 1.1, letterSpacing: "-3px"
          }}>
            1 GB <span style={{ color: dockerTheme.cream, textShadow: "none" }}>→</span> <span style={{ color: dockerTheme.green, textShadow: dockerTheme.glowGreen }}>100 MB</span>
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
