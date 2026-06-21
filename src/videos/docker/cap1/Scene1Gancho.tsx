import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { dockerTheme } from "../../../themes/docker";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { DockerLogo } from "../../../components/DockerLogo";

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
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        {/* Animated Docker Logo */}
        <div style={{ marginBottom: 40, transform: `scale(${interpolate(entrance, [0, 1], [0.5, 1.3])})` }}>
          <DockerLogo size={180} />
        </div>

        {/* Massive Text Impact Banner */}
        <div style={{
          background: "rgba(13, 183, 237, 0.1)", backdropFilter: "blur(12px)",
          border: `4px solid ${dockerTheme.dockerBlue}`, borderRadius: 32, padding: "40px",
          width: "95%", textAlign: "center", opacity: entrance,
          transform: `scale(${entrance})`, boxShadow: dockerTheme.glowBlue
        }}>
          <div style={{
            fontFamily: dockerTheme.fontSans, fontSize: 75, fontWeight: 900,
            color: dockerTheme.cream, lineHeight: 1.1, letterSpacing: "-3px"
          }}>
            "En mi máquina<br/>
            <span style={{ color: dockerTheme.red, textShadow: dockerTheme.glowRed }}>sí funciona" 💀</span>
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
