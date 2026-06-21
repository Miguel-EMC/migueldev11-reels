import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { k8sTheme } from "../../../themes/kubernetes";
import { GridBackground } from "../../../components/GridBackground";
import { Box, Layers, Network } from "lucide-react"; // Pro lucide icons

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: k8sTheme.bg }}>
      <GridBackground color={k8sTheme.k8sBlue} />
      
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 30%, ${k8sTheme.bg} 95%)`,
        zIndex: 5
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60, zIndex: 10
      }}>
        
        <div style={{ display: "flex", gap: 30, marginBottom: 50, opacity: entrance }}>
           <Box size={70} color={k8sTheme.cyan} style={{ filter: k8sTheme.glowCyan }} />
           <Layers size={70} color={k8sTheme.k8sBlue} style={{ filter: k8sTheme.glowBlue }} />
           <Network size={70} color={k8sTheme.green} style={{ filter: k8sTheme.glowGreen }} />
        </div>

        <div style={{
          background: "rgba(50, 108, 229, 0.1)", backdropFilter: "blur(20px)",
          border: `4px solid ${k8sTheme.k8sBlue}`, borderRadius: 40, padding: "60px 40px",
          width: "100%", textAlign: "center", opacity: entrance,
          transform: `scale(${entrance}) perspective(1000px) rotateX(${interpolate(entrance, [0, 1], [20, 0])}deg)`,
          boxShadow: `0 40px 80px rgba(0,0,0,0.6), ${k8sTheme.glowBlue}`
        }}>
          <div style={{
            fontFamily: k8sTheme.fontSans, fontSize: 85, fontWeight: 900,
            color: k8sTheme.cream, lineHeight: 1.1, letterSpacing: "-3px"
          }}>
            Pod · Deployment<br/>
            <span style={{ color: k8sTheme.k8sBlue, textShadow: k8sTheme.glowBlue }}>& Service</span>
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
