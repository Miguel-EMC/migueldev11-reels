import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { k8sTheme } from "../../../themes/kubernetes";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { KubernetesLogo } from "../../../components/KubernetesLogo";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: k8sTheme.bg }}>
      <GridBackground color={k8sTheme.k8sBlue} />
      <ParticleField />
      
      {/* High-end Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 20%, ${k8sTheme.bg} 95%)`,
        zIndex: 5
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60, zIndex: 10
      }}>
        
        {/* Giant Pulsing Logo */}
        <div style={{ 
          marginBottom: 60, 
          transform: `scale(${interpolate(entrance, [0, 1], [0.5, 1.4])}) rotate(${interpolate(frame, [0, 200], [0, 10])}deg)`,
          filter: `drop-shadow(0 0 50px ${k8sTheme.k8sBlue}66)`
        }}>
          <KubernetesLogo size={220} />
        </div>

        {/* Premium Glass Title Card */}
        <div style={{
          background: "rgba(10, 20, 40, 0.7)", 
          backdropFilter: "blur(20px)",
          border: `4px solid ${k8sTheme.k8sBlue}`, 
          borderRadius: 40, 
          padding: "60px 50px",
          width: "100%", 
          textAlign: "center", 
          opacity: entrance,
          transform: `scale(${entrance}) perspective(1000px) rotateX(${interpolate(entrance, [0, 1], [30, 0])}deg)`,
          boxShadow: `0 40px 100px rgba(0,0,0,0.8), ${k8sTheme.glowBlue}`
        }}>
          <div style={{
            fontFamily: k8sTheme.fontMono, fontSize: 32, color: k8sTheme.k8sBlue,
            letterSpacing: 10, textTransform: "uppercase", marginBottom: 20, fontWeight: 900
          }}>
            [ ORQUESTACIÓN ]
          </div>
          <div style={{
            fontFamily: k8sTheme.fontSans, fontSize: 110, fontWeight: 900,
            color: k8sTheme.cream, lineHeight: 0.9, letterSpacing: "-5px",
            textShadow: `0 0 40px ${k8sTheme.k8sBlue}88`
          }}>
            KUBERNETES
          </div>
        </div>

        {/* Dynamic Scan Line */}
        <div style={{
          position: "absolute",
          top: (frame * 15) % 1920,
          left: 0, width: "100%", height: 4,
          background: `linear-gradient(to right, transparent, ${k8sTheme.k8sBlue}, transparent)`,
          opacity: 0.3,
          boxShadow: k8sTheme.glowBlue
        }} />

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
