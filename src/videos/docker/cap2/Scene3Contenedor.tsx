import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { dockerTheme } from "../../../themes/docker";
import { GridBackground } from "../../../components/GridBackground";
import { TechIcon } from "../../../components/TechIcon";

export const Scene3Contenedor: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  const imgSpring = spring({ frame: frame - 20, fps });
  const arrowSpring = spring({ frame: frame - 40, fps });
  const c1 = spring({ frame: frame - 50, fps });
  const c2 = spring({ frame: frame - 65, fps });
  const c3 = spring({ frame: frame - 80, fps });

  return (
    <AbsoluteFill style={{ backgroundColor: dockerTheme.bg }}>
      <GridBackground color={dockerTheme.dockerBlue} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", padding: "80px 40px", boxSizing: "border-box", alignItems: "center", justifyContent: "center"
      }}>
        
        <div style={{ textAlign: "center", marginBottom: 50, opacity: entrance }}>
          <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 80, fontWeight: 900, color: dockerTheme.green, textShadow: dockerTheme.glowGreen, letterSpacing: "-2px" }}>
            EL CONTENEDOR
          </div>
        </div>

        {/* 1 Image -> 3 Containers Layout */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 30 }}>
          
          {/* Source Image */}
          <div style={{
            background: "rgba(10, 20, 40, 0.8)", border: `3px dashed ${dockerTheme.cyan}88`,
            borderRadius: 20, padding: "20px 40px", display: "flex", alignItems: "center", gap: 20,
            opacity: imgSpring, transform: `scale(${imgSpring})`
          }}>
            <TechIcon type="file" color={dockerTheme.cyan} size={50} />
            <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 28, fontWeight: 800, color: dockerTheme.cream }}>
              1 IMAGEN
            </div>
          </div>

          <div style={{ fontSize: 60, color: dockerTheme.green, textShadow: dockerTheme.glowGreen, opacity: arrowSpring, transform: `translateY(${Math.sin(frame / 6) * 5}px)` }}>
            ⬇
          </div>

          {/* 3 Running Containers */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20, width: "100%" }}>
            
            {[c1, c2, c3].map((s, i) => (
              <div key={i} style={{
                background: "rgba(0, 255, 65, 0.1)", border: `3px solid ${dockerTheme.green}`,
                borderRadius: 20, padding: "20px 30px", display: "flex", alignItems: "center", gap: 20,
                opacity: s, transform: `scale(${interpolate(s, [0, 1], [0.8, 1])}) translateX(${interpolate(s, [0, 1], [(i % 2 === 0 ? -30 : 30), 0])}px)`,
                boxShadow: s > 0.5 ? dockerTheme.glowGreen : "none"
              }}>
                <TechIcon type="cpu" color={dockerTheme.green} size={40} glow={true} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: dockerTheme.fontMono, fontSize: 24, fontWeight: 900, color: dockerTheme.green }}>
                    CONTENEDOR #{i + 1}
                  </div>
                  <div style={{ fontFamily: dockerTheme.fontSans, fontSize: 20, color: dockerTheme.cream, opacity: 0.8 }}>
                    🟢 Corriendo (Vivo)
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </AbsoluteFill>
    </AbsoluteFill>
  );
};
