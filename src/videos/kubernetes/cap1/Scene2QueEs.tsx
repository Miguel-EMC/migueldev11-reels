import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { k8sTheme } from "../../../themes/kubernetes";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";
import { KubernetesLogo } from "../../../components/KubernetesLogo";
import { GitPullRequestDraft } from "lucide-react"; // Using a network-like icon

export const Scene2QueEs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // High-tech control room animations
  const directorSpring = spring({ frame: frame - 20, fps, config: { stiffness: 60 } });
  
  // 12 containers in a grid
  const containers = Array.from({ length: 12 });

  return (
    <AbsoluteFill style={{ backgroundColor: k8sTheme.bg }}>
      <GridBackground color={k8sTheme.k8sBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "80px 40px", boxSizing: "border-box", alignItems: "center"
      }}>
        
        {/* Cinematic Header */}
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: k8sTheme.fontMono, fontSize: 32, color: k8sTheme.k8sBlue, letterSpacing: 8, marginBottom: 10 }}>EL DIRECTOR</div>
          <div style={{ fontFamily: k8sTheme.fontSans, fontSize: 85, fontWeight: 900, color: k8sTheme.cream, letterSpacing: "-3px", lineHeight: 1 }}>
            CONTROL TOTAL
          </div>
        </div>

        {/* Master Control Node (K8s) */}
        <div style={{
          position: "relative", width: 250, height: 250,
          background: "rgba(10, 20, 40, 0.9)", backdropFilter: "blur(20px)",
          border: `4px solid ${k8sTheme.k8sBlue}`, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: directorSpring, transform: `scale(${directorSpring})`,
          boxShadow: `0 0 80px ${k8sTheme.k8sBlue}66`, zIndex: 20, marginBottom: 50
        }}>
          {/* Orbiting rings */}
          <div style={{
            position: "absolute", inset: -20, border: `2px dashed ${k8sTheme.cyan}`, borderRadius: "50%",
            transform: `rotate(${frame}deg)`, opacity: 0.5
          }} />
          <div style={{
            position: "absolute", inset: -40, border: `2px dashed ${k8sTheme.k8sBlue}`, borderRadius: "50%",
            transform: `rotate(-${frame * 0.5}deg)`, opacity: 0.3
          }} />
          
          <KubernetesLogo size={140} glow={true} />
        </div>

        {/* Network Connections */}
        <div style={{ opacity: directorSpring, transform: `translateY(${Math.sin(frame / 5) * 10}px)`, marginBottom: 40, zIndex: 10 }}>
           <GitPullRequestDraft size={80} color={k8sTheme.cyan} style={{ filter: k8sTheme.glowCyan }} />
        </div>

        {/* Container Cluster Grid in 3D Perspective */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, width: "100%",
          transform: "perspective(1000px) rotateX(25deg)", zIndex: 5
        }}>
          {containers.map((_, i) => {
            const containerSpring = spring({ frame: frame - 40 - i * 3, fps });
            // Simulate traffic spikes and node failures dynamically
            const isSpiking = (i === 1 || i === 5) && frame > 90;
            const isFailing = i === 10 && frame > 120 && (frame % 60 < 20);
            
            let borderColor: string = k8sTheme.k8sBlue;
            let glow: string = k8sTheme.glowBlue;
            if (isSpiking) { borderColor = k8sTheme.cyan; glow = k8sTheme.glowCyan; }
            if (isFailing) { borderColor = k8sTheme.red; glow = k8sTheme.glowRed; }

            return(
              <div key={i} style={{
                background: "rgba(5, 10, 20, 0.9)",
                border: `3px solid ${borderColor}`,
                borderRadius: 20, padding: "20px 0",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                opacity: containerSpring,
                transform: `scale(${containerSpring}) translateY(${isFailing ? 30 : 0}px)`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.8), ${glow}22`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <TechIcon type="cpu" size={40} color={borderColor} glow={true} />
                <div style={{ fontFamily: k8sTheme.fontMono, fontSize: 18, fontWeight: 900, color: borderColor }}>
                  N-{i+1}
                </div>
              </div>
            )
          })}
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
