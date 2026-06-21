import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { dockerTheme } from "../../../themes/docker";
import { GridBackground } from "../../../components/GridBackground";
import { Laptop, Server, CheckCircle, XCircle } from "lucide-react";

export const Scene2ElProblema: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const pc1 = spring({ frame: frame - 20, fps });
  const pc2 = spring({ frame: frame - 40, fps });
  const pc3 = spring({ frame: frame - 60, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: dockerTheme.bg }}>
      <GridBackground color={dockerTheme.dockerBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 80, fontWeight: 900, color: dockerTheme.cream, letterSpacing: "-2px" }}>
            EL PROBLEMA
          </div>
        </div>

        {/* 3D-perspective computer grid */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 40, width: "100%",
          transform: `perspective(1000px) rotateX(20deg)`,
        }}>
          
          <div style={{
            background: "rgba(10, 20, 40, 0.8)", border: `3px solid ${dockerTheme.green}66`,
            borderRadius: 24, padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", gap: 15,
            opacity: pc1, transform: `scale(${interpolate(pc1, [0, 1], [0.8, 1])})`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${dockerTheme.glowGreen}11`
          }}>
            <Laptop size={60} color={dockerTheme.green} />
            <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, fontWeight: 900, color: dockerTheme.cream }}>TÚ COMPU</div>
            <CheckCircle size={50} color={dockerTheme.green} />
          </div>

          <div style={{
            background: "rgba(10, 20, 40, 0.8)", border: `3px solid ${dockerTheme.green}66`,
            borderRadius: 24, padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", gap: 15,
            opacity: pc2, transform: `scale(${interpolate(pc2, [0, 1], [0.8, 1])}) translateY(30px)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.5), ${dockerTheme.glowGreen}11`
          }}>
            <Laptop size={60} color={dockerTheme.green} />
            <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, fontWeight: 900, color: dockerTheme.cream }}>COMPAÑERO</div>
            <CheckCircle size={50} color={dockerTheme.green} />
          </div>

          <div style={{
            background: "rgba(239, 68, 68, 0.1)", border: `4px solid ${dockerTheme.red}`,
            borderRadius: 24, padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", gap: 15,
            opacity: pc3, transform: `scale(${interpolate(pc3, [0, 1], [0.8, 1.1])})`,
            boxShadow: `0 20px 50px rgba(0,0,0,0.5), ${dockerTheme.glowRed}33`,
          }}>
            <Server size={70} color={dockerTheme.red} />
            <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 32, fontWeight: 900, color: dockerTheme.red, textShadow: dockerTheme.glowRed }}>SERVIDOR</div>
            <XCircle size={70} color={dockerTheme.red} />
          </div>

        </div>

        <div style={{
          fontFamily: dockerTheme.fontSans, fontSize: 40, fontWeight: 700, color: dockerTheme.textDim,
          textAlign: "center", marginTop: 80, lineHeight: 1.3, opacity: pc3
        }}>
          Versiones, librerías y configs distintas.<br/>
          <span style={{ color: dockerTheme.red, fontWeight: 900, textShadow: dockerTheme.glowRed }}>UN CAOS.</span>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
