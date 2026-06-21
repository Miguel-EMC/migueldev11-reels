import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { k8sTheme } from "../../../themes/kubernetes";
import { GridBackground } from "../../../components/GridBackground";
import { Waypoints, Box, ShieldCheck } from "lucide-react";

export const Scene4Service: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: k8sTheme.bg }}>
      <GridBackground color={k8sTheme.k8sBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: k8sTheme.fontSans, fontSize: 80, fontWeight: 900, color: k8sTheme.cream, letterSpacing: "-2px" }}>
            SERVICE
          </div>
        </div>

        <div style={{
          background: "rgba(10, 20, 40, 0.8)", backdropFilter: "blur(20px)",
          borderRadius: 40, padding: "60px", display: "flex", flexDirection: "column", alignItems: "center", gap: 50,
          opacity: entrance, width: '100%', border: `4px solid rgba(255,255,255,0.05)`,
          boxShadow: `0 40px 100px rgba(0,0,0,0.8)`
        }}>
          
          {/* Incoming Traffic Node (Service) */}
          <div style={{
            background: "rgba(50, 108, 229, 0.2)", border: `4px solid ${k8sTheme.k8sBlue}`,
            borderRadius: "50%", width: 160, height: 160, display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: k8sTheme.glowBlue, position: "relative"
          }}>
            <ShieldCheck size={80} color={k8sTheme.k8sBlue} />
            {/* Dynamic IP tag */}
            <div style={{
              position: "absolute", top: -25, background: k8sTheme.k8sBlue, padding: "5px 15px", borderRadius: 10,
              fontFamily: k8sTheme.fontMono, fontSize: 20, fontWeight: 900, color: k8sTheme.bg
            }}>
              IP ESTABLE
            </div>
          </div>

          <Waypoints size={80} color={k8sTheme.cyan} style={{ filter: k8sTheme.glowCyan, transform: `translateY(${Math.sin(frame / 10) * 10}px)` }} />

          {/* Load Balanced Pods */}
          <div style={{ display: 'flex', gap: 30, width: "100%", justifyContent: "center" }}>
            <Box size={70} color={k8sTheme.cyan} />
            <Box size={70} color={k8sTheme.cyan} />
            <Box size={70} color={k8sTheme.cyan} />
          </div>

        </div>

        <div style={{
          fontFamily: k8sTheme.fontSans, fontSize: 44, fontWeight: 700, color: k8sTheme.textDim,
          textAlign: "center", marginTop: 80, lineHeight: 1.3, opacity: entrance
        }}>
          La puerta de entrada <span style={{ color: k8sTheme.k8sBlue, fontWeight: 900, textShadow: k8sTheme.glowBlue }}>estable</span><br/>a tus Pods.
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
