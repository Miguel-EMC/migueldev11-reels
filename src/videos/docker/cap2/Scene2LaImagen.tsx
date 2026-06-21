import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { dockerTheme } from "../../../themes/docker";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene2LaImagen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Icon dropping in
  const docDrop = spring({ frame: frame - 20, fps, config: { damping: 14 } });
  const instructions = spring({ frame: frame - 40, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: dockerTheme.bg }}>
      <GridBackground color={dockerTheme.dockerBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 50px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        {/* Massive Screen Title Header */}
        <div style={{ textAlign: "center", marginBottom: 60, opacity: entrance }}>
          <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 85, fontWeight: 900, color: dockerTheme.cyan, letterSpacing: "-2px" }}>
            LA IMAGEN
          </div>
        </div>

        {/* Blueprint Visual */}
        <div style={{
          background: "rgba(10, 20, 40, 0.8)", border: `4px dashed ${dockerTheme.cyan}88`,
          borderRadius: 24, padding: "50px", display: "flex", flexDirection: "column", alignItems: "center", gap: 30,
          opacity: docDrop, transform: `scale(${interpolate(docDrop, [0, 1], [0.8, 1])})`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px ${dockerTheme.cyan}22`,
          width: "100%"
        }}>
          <TechIcon type="file" size={100} color={dockerTheme.cyan} />
          
          <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 40, fontWeight: 900, color: dockerTheme.cream, letterSpacing: 2 }}>
            EL MOLDE / RECETA
          </div>
          
          {/* Static instructions (the blueprint) */}
          <div style={{ 
            fontFamily: dockerTheme.fontMono, fontSize: 32, color: dockerTheme.textDim, 
            textAlign: "center", lineHeight: 1.5, opacity: instructions 
          }}>
            <span style={{ color: dockerTheme.cyan }}>FROM</span> node:18<br/>
            <span style={{ color: dockerTheme.cyan }}>COPY</span> . .<br/>
            <span style={{ color: dockerTheme.cyan }}>RUN</span> npm install
          </div>
        </div>

        {/* Status Callout */}
        <div style={{
          background: "rgba(239, 68, 68, 0.15)", padding: "20px 40px", borderRadius: 20,
          border: `2px solid ${dockerTheme.red}`, marginTop: 60, opacity: instructions,
          boxShadow: dockerTheme.glowRed
        }}>
          <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 40, fontWeight: 800, color: dockerTheme.red, textAlign: "center" }}>
            NO ESTÁ CORRIENDO 🧊
          </div>
        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
