import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { k8sTheme } from "../../../themes/kubernetes";
import { GridBackground } from "../../../components/GridBackground";
import { Target, Zap } from "lucide-react"; // Better high-end icons

export const Scene3LaHonestidad: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const lineSpring = spring({ frame: frame - 20, fps });
  const nodeLeft = spring({ frame: frame - 40, fps });
  const nodeRight = spring({ frame: frame - 60, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: k8sTheme.bg }}>
      <GridBackground color={k8sTheme.k8sBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 40px", boxSizing: "border-box", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 80, opacity: entrance }}>
          <div style={{ fontFamily: k8sTheme.fontMono, fontSize: 32, color: k8sTheme.red, letterSpacing: 8, marginBottom: 10 }}>[ ALERTA ]</div>
          <div style={{ fontFamily: k8sTheme.fontSans, fontSize: 80, fontWeight: 900, color: k8sTheme.cream, letterSpacing: "-2px" }}>
            NO SIEMPRE LO NECESITAS
          </div>
        </div>

        {/* High-End Scale/Balance Visual */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", position: "relative" }}>
          
          {/* Left Node: Simple App */}
          <div style={{
            background: "rgba(10, 20, 40, 0.8)", backdropFilter: "blur(12px)", border: `3px solid ${k8sTheme.green}`,
            borderRadius: 32, padding: "50px 30px", width: "45%", display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            opacity: nodeLeft, transform: `scale(${nodeLeft})`, boxShadow: `0 30px 60px rgba(0,0,0,0.6), ${k8sTheme.glowGreen}22`, zIndex: 10
          }}>
            <Target size={80} color={k8sTheme.green} style={{ filter: k8sTheme.glowGreen }} />
            <div style={{ fontFamily: k8sTheme.fontMono, fontSize: 36, fontWeight: 900, color: k8sTheme.green, letterSpacing: 2 }}>APP SIMPLE</div>
            <div style={{ fontFamily: k8sTheme.fontSans, fontSize: 32, fontWeight: 700, color: k8sTheme.cream, textAlign: "center", lineHeight: 1.2 }}>
              Pocos usuarios.<br/><span style={{ color: k8sTheme.textDim }}>Empieza aquí.</span>
            </div>
          </div>

          {/* Center Connection / Scale Point */}
          <div style={{
            position: "absolute", left: "50%", transform: "translateX(-50%)", width: 6, height: "80%",
            background: `linear-gradient(to bottom, transparent, ${k8sTheme.textDim}44, transparent)`,
            opacity: lineSpring, zIndex: 1
          }} />

          {/* Right Node: Overkill K8s */}
          <div style={{
            background: "rgba(239, 68, 68, 0.1)", backdropFilter: "blur(12px)", border: `3px solid ${k8sTheme.red}`,
            borderRadius: 32, padding: "50px 30px", width: "45%", display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            opacity: nodeRight, transform: `scale(${nodeRight}) translateY(40px)`, boxShadow: `0 30px 60px rgba(0,0,0,0.6), ${k8sTheme.glowRed}33`, zIndex: 10
          }}>
            <Zap size={80} color={k8sTheme.red} style={{ filter: k8sTheme.glowRed }} />
            <div style={{ fontFamily: k8sTheme.fontMono, fontSize: 36, fontWeight: 900, color: k8sTheme.red, letterSpacing: 2 }}>OVERKILL</div>
            <div style={{ fontFamily: k8sTheme.fontSans, fontSize: 32, fontWeight: 700, color: k8sTheme.cream, textAlign: "center", lineHeight: 1.2 }}>
              Mucha complejidad.<br/><span style={{ color: k8sTheme.textDim }}>Solo si hay escala.</span>
            </div>
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
