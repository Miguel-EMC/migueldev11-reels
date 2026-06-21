import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { tfTheme } from "../../../themes/terraform";
import { GridBackground } from "../../../components/GridBackground";
import { FileJson } from "lucide-react";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 8) * 0.1 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: tfTheme.bg }}>
      <GridBackground color={tfTheme.tfPurple} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        <div style={{
          fontFamily: tfTheme.fontMono, fontSize: 36, color: tfTheme.tfPurple,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 40, opacity: entrance
        }}>
          [ Terraform Core ]
        </div>

        {/* The State File Hologram */}
        <div style={{
          background: "rgba(132, 79, 186, 0.1)", backdropFilter: "blur(20px)",
          border: `4px solid ${tfTheme.tfPurple}`, borderRadius: "50%", padding: "50px",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: entrance, transform: `scale(${entrance * pulse})`,
          boxShadow: `0 0 80px ${tfTheme.tfPurple}44`, marginBottom: 50
        }}>
          <FileJson size={120} color={tfTheme.cream} style={{ filter: tfTheme.glowPurple }} />
        </div>

        {/* Screen Title */}
        <div style={{
          fontFamily: tfTheme.fontSans, fontSize: 110, fontWeight: 900,
          color: tfTheme.cream, lineHeight: 1.1, letterSpacing: "-4px",
          textAlign: "center", opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`
        }}>
          EL <span style={{ color: tfTheme.tfPurple, textShadow: tfTheme.glowPurple }}>STATE</span>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
