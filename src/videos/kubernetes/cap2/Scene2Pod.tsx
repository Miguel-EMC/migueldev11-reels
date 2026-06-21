import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { k8sTheme } from "../../../themes/kubernetes";
import { GridBackground } from "../../../components/GridBackground";
import { Box } from "lucide-react";

export const Scene2Pod: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 8) * 0.1 + 1;
  
  return (
    <AbsoluteFill style={{ backgroundColor: k8sTheme.bg }}>
      <GridBackground color={k8sTheme.k8sBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        {/* Core Unit Visualization */}
        <div style={{
          background: `rgba(10, 20, 40, 0.9)`, backdropFilter: "blur(20px)",
          border: `4px solid ${k8sTheme.cyan}`, borderRadius: 40, padding: "80px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 30,
          opacity: entrance, transform: `scale(${interpolate(entrance, [0, 1], [0.5, 1])})`,
          boxShadow: `0 40px 100px rgba(0,0,0,0.8), ${k8sTheme.glowCyan}44`, position: "relative"
        }}>
          
          {/* Inner Running App Glow */}
          <div style={{
            position: "absolute", inset: 20, background: `radial-gradient(circle, ${k8sTheme.cyan}22, transparent)`,
            borderRadius: "50%", opacity: pulse
          }} />

          <Box size={140} color={k8sTheme.cyan} style={{ filter: k8sTheme.glowCyan, transform: `scale(${pulse})` }} />
          
          <div style={{ fontFamily: k8sTheme.fontSans, fontSize: 100, fontWeight: 900, color: k8sTheme.cream, textShadow: k8sTheme.glowCyan, letterSpacing: 4 }}>
            POD
          </div>
        </div>

        <div style={{
          fontFamily: k8sTheme.fontSans, fontSize: 44, fontWeight: 700, color: k8sTheme.textDim,
          textAlign: "center", marginTop: 80, lineHeight: 1.3, opacity: entrance
        }}>
          La unidad más pequeña.<br/>
          <span style={{ color: k8sTheme.cream, fontWeight: 800 }}>Tu app corriendo viva.</span>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
