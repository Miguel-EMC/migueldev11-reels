import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { tfTheme } from "../../../themes/terraform";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { TerraformLogo } from "../../../components/TerraformLogo";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: tfTheme.bg }}>
      <GridBackground color={tfTheme.tfPurple} />
      <ParticleField />
      
      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60
      }}>
        
        <div style={{ marginBottom: 50, transform: `scale(${interpolate(entrance, [0, 1], [0.5, 1.4])})` }}>
          <TerraformLogo size={180} />
        </div>

        <div style={{
          background: "rgba(132, 79, 186, 0.1)", backdropFilter: "blur(12px)",
          border: `4px solid ${tfTheme.tfPurple}`, borderRadius: 32, padding: "50px 40px",
          width: "95%", textAlign: "center", opacity: entrance,
          transform: `scale(${entrance})`, boxShadow: tfTheme.glowPurple
        }}>
          <div style={{
            fontFamily: tfTheme.fontSans, fontSize: 80, fontWeight: 900,
            color: tfTheme.cream, lineHeight: 1.1, letterSpacing: "-2px"
          }}>
            DEJA DE HACER<br/>
            <span style={{ color: tfTheme.red, textShadow: tfTheme.glowRed }}>CLICK 🖱️❌</span>
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
