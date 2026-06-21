import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { dockerTheme } from "../../../themes/docker";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene3LaSolucion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const stage1 = spring({ frame: frame - 20, fps });
  const arrow = spring({ frame: frame - 50, fps });
  const stage2 = spring({ frame: frame - 70, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: dockerTheme.bg }}>
      <GridBackground color={dockerTheme.dockerBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "100px 40px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 50, opacity: entrance }}>
          <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 80, fontWeight: 900, color: dockerTheme.cyan, textShadow: dockerTheme.glowCyan, letterSpacing: "-2px" }}>
            MULTI-STAGE BUILD
          </div>
        </div>

        {/* Layout */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 30 }}>
          
          {/* Stage 1: Build (Heavy) */}
          <div style={{
            background: "rgba(30, 41, 59, 0.8)", border: `3px solid ${dockerTheme.textDim}88`,
            borderRadius: 24, padding: "25px", display: "flex", flexDirection: "column", alignItems: "center", gap: 15,
            opacity: stage1, transform: `scale(${stage1})`, width: "100%"
          }}>
            <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, fontWeight: 800, color: dockerTheme.textDim }}>
              ETAPA 1: BUILD (PESADA)
            </div>
            <div style={{ display: "flex", gap: 15 }}>
               <TechIcon type="cpu" color={dockerTheme.textDim} size={40} glow={false} />
               <TechIcon type="network" color={dockerTheme.textDim} size={40} glow={false} />
               <TechIcon type="search" color={dockerTheme.textDim} size={40} glow={false} />
               <TechIcon type="code" color={dockerTheme.green} size={40} glow={true} />
            </div>
          </div>

          {/* Copy Arrow */}
          <div style={{ 
            display: "flex", flexDirection: "column", alignItems: "center",
            opacity: arrow, transform: `translateY(${Math.sin(frame / 6) * 5}px)`
          }}>
            <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 20, color: dockerTheme.cyan, fontWeight: 800, background: "rgba(0,0,0,0.5)", padding: "5px 15px", borderRadius: 8 }}>
              COPY --from=builder
            </div>
            <div style={{ fontSize: 50, color: dockerTheme.cyan, textShadow: dockerTheme.glowCyan }}>
              ⬇
            </div>
          </div>

          {/* Stage 2: Final (Light) */}
          <div style={{
            background: "rgba(0, 255, 65, 0.1)", border: `4px solid ${dockerTheme.green}`,
            borderRadius: 24, padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            opacity: stage2, transform: `scale(${interpolate(stage2, [0, 1], [0.8, 1])})`,
            boxShadow: `0 20px 50px ${dockerTheme.green}33`, width: "100%"
          }}>
            <TechIcon type="code" color={dockerTheme.green} size={60} glow={true} />
            <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 32, fontWeight: 900, color: dockerTheme.green, textShadow: dockerTheme.glowGreen }}>
              IMAGEN FINAL
            </div>
            <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 28, color: dockerTheme.cream, opacity: 0.9 }}>
              Solo lo esencial. El resto se desecha.
            </div>
          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
