import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene2ElProblema: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const transformStart = 60;
  const transformProgress = spring({ frame: frame - transformStart, fps, config: { damping: 15 } });

  // 12-dimensional high-tech look vector
  const vector = [0.12, -0.45, 0.89, 0.23, -0.67, 0.34, 0.11, -0.92, 0.56, -0.18, 0.74, -0.31];

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <GridBackground color={brand.green} />
      <ParticleField />

      {/* Cyberpunk Vignette/Glow overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 30%, ${brand.bg} 95%)`,
        pointerEvents: "none", zIndex: 5
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 50, zIndex: 10
      }}>
        
        {/* Massive word "PERRO" with glassmorphism container */}
        <div style={{
          position: "absolute",
          top: "22%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: interpolate(transformProgress, [0, 0.4], [1, 0.05]),
          transform: `scale(${interpolate(entrance, [0, 1], [0.5, 1.2])}) translateY(${interpolate(transformProgress, [0, 1], [0, -80])}px)`,
          transition: "all 0.3s ease",
        }}>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 32,
            color: brand.green,
            letterSpacing: 10,
            marginBottom: 10,
            textShadow: brand.glowGreen,
          }}>
            [ TEXT DATA ]
          </div>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 180,
            fontWeight: 900,
            color: brand.cream,
            lineHeight: 1,
            letterSpacing: "-6px",
            textShadow: `0 0 40px ${brand.green}55`,
          }}>
            PERRO
          </div>
        </div>

        {/* Huge Energy transformation symbol */}
        <div style={{
           fontSize: 140,
           opacity: interpolate(transformProgress, [0.1, 0.5], [0, 1]),
           transform: `scale(${interpolate(transformProgress, [0, 1], [0.3, 1.3])}) rotate(${interpolate(transformProgress, [0, 1], [-45, 0])}deg)`,
           color: brand.green,
           marginTop: -100,
           marginBottom: 80,
           filter: `drop-shadow(0 0 35px ${brand.green})`,
        }}>
          ⚡
        </div>

        {/* Giant high-tech Vector Grid display */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "100%",
          alignItems: "center",
          opacity: transformProgress,
          transform: `translateY(${interpolate(transformProgress, [0, 1], [150, 0])}px)`,
        }}>
          
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 36,
            fontWeight: 800,
            color: brand.green,
            textShadow: brand.glowGreen,
            letterSpacing: 4,
            marginBottom: 10,
            background: `${brand.green}15`,
            padding: "10px 30px",
            borderRadius: 30,
            border: `2px solid ${brand.green}44`
          }}>
            EMBEDDING VECTOR
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            width: 900,
            background: "rgba(10, 20, 40, 0.6)",
            backdropFilter: "blur(20px)",
            padding: 30,
            borderRadius: 24,
            border: `2px solid ${brand.green}33`,
            boxShadow: `0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px ${brand.green}11`,
          }}>
            {vector.map((val, i) => {
              const itemSpring = spring({ frame: frame - transformStart - 15 - i * 2, fps });
              return (
                <div key={i} style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
                  border: `2px solid ${brand.green}${val > 0 ? "77" : "22"}`,
                  borderRadius: 14,
                  padding: "25px 15px",
                  textAlign: "center",
                  opacity: itemSpring,
                  transform: `scale(${itemSpring})`,
                  boxShadow: val > 0 ? `0 0 15px ${brand.green}22` : "none",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  {/* Internal tech line indicator */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, width: "100%", height: 4,
                    backgroundColor: val > 0 ? brand.green : "transparent",
                    boxShadow: brand.glowGreen
                  }} />
                  <div style={{
                    fontFamily: brand.fontMono,
                    fontSize: 36,
                    fontWeight: 900,
                    color: val > 0 ? brand.green : brand.textDim,
                    textShadow: val > 0 ? brand.glowGreen : "none",
                  }}>
                    {val > 0 ? `+${val.toFixed(2)}` : val.toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          position: "absolute",
          bottom: "10%",
          fontFamily: brand.fontMono,
          fontSize: 36,
          fontWeight: 600,
          color: brand.cream,
          opacity: interpolate(transformProgress, [0.7, 1], [0, 0.8]),
          letterSpacing: 2
        }}>
           [ Traduciendo palabra a números ]
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
