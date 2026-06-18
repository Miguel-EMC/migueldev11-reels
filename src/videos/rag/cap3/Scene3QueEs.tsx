import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene3QueEs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // High energy animation
  const attractionStart = 45;
  const attraction = spring({ frame: frame - attractionStart, fps, config: { damping: 14, stiffness: 80 } });

  const points = [
    { id: "perro", label: "PERRO", x: -220, y: -250, targetX: -90, targetY: -50, color: brand.green, glow: brand.glowGreen },
    { id: "cachorro", label: "CACHORRO", x: 260, y: 180, targetX: 90, targetY: 50, color: brand.green, glow: brand.glowGreen },
    { id: "factura", label: "FACTURA", x: -320, y: 380, targetX: -340, targetY: 410, color: brand.orange, glow: brand.glowOrange },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <GridBackground color={brand.green} />
      <ParticleField />

      {/* Cyber gradient map background look */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 20%, ${brand.bg} 90%)`,
        pointerEvents: "none", zIndex: 2
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 50, zIndex: 10
      }}>
        
        {/* Premium floating title card */}
        <div style={{
          position: "absolute", top: 160,
          opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [-50, 0])}px)`,
          textAlign: "center",
          background: "rgba(10, 14, 26, 0.8)",
          backdropFilter: "blur(12px)",
          padding: "20px 50px",
          borderRadius: 24,
          border: `2px solid ${brand.green}44`,
          boxShadow: `0 20px 40px rgba(0,0,0,0.6), ${brand.glowGreen}22`
        }}>
          <div style={{ 
            fontFamily: brand.fontSans, 
            fontSize: 90, 
            fontWeight: 900, 
            color: brand.green,
            textShadow: brand.glowGreen,
            letterSpacing: "-2px"
          }}>
            VECINDAD SEMÁNTICA
          </div>
        </div>

        {/* Enormous Semantic Space Map view */}
        <div style={{ position: "relative", width: "100%", height: 900, marginTop: 100 }}>
          
          {/* Connection line between matching concepts with pulse aura */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 5 }}>
             <line 
               x1={`calc(50% + ${interpolate(attraction, [0, 1], [points[0].x, points[0].targetX])}px)`}
               y1={`calc(50% + ${interpolate(attraction, [0, 1], [points[0].y, points[0].targetY])}px)`}
               x2={`calc(50% + ${interpolate(attraction, [0, 1], [points[1].x, points[1].targetX])}px)`}
               y2={`calc(50% + ${interpolate(attraction, [0, 1], [points[1].y, points[1].targetY])}px)`}
               stroke={brand.green}
               strokeWidth="8"
               strokeDasharray="15 10"
               opacity={interpolate(attraction, [0, 1], [0.1, 0.95])}
               style={{ filter: `drop-shadow(0 0 12px ${brand.green})` }}
             />
          </svg>

          {points.map((p, i) => {
            const pEntrance = spring({ frame: frame - i * 12, fps });
            const curX = interpolate(attraction, [0, 1], [p.x, p.targetX]);
            const curY = interpolate(attraction, [0, 1], [p.y, p.targetY]);

            const isRelated = p.id !== "factura";

            return (
              <div key={p.id} style={{
                position: "absolute",
                left: `calc(50% + ${curX}px)`,
                top: `calc(50% + ${curY}px)`,
                opacity: pEntrance,
                transform: `scale(${interpolate(pEntrance, [0, 1], [0.4, 1.2])}) translate(-50%, -50%)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 20
              }}>
                
                {/* Node Ring & Core */}
                <div style={{
                  width: 50, height: 50,
                  backgroundColor: brand.bg,
                  border: `5px solid ${p.color}`,
                  borderRadius: "50%",
                  boxShadow: p.glow,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}>
                  <div style={{
                    width: 20, height: 20,
                    backgroundColor: p.color,
                    borderRadius: "50%",
                  }} />
                  
                  {/* Pulse visual effect for related nodes */}
                  {isRelated && (
                    <div style={{
                      position: "absolute", inset: -15,
                      border: `2px solid ${p.color}44`,
                      borderRadius: "50%",
                      transform: `scale(${1 + Math.sin(frame / 8) * 0.15})`,
                    }} />
                  )}
                </div>

                {/* Highly legible premium Label tag */}
                <div style={{
                  fontFamily: brand.fontMono,
                  fontSize: 38,
                  fontWeight: 900,
                  color: p.color === brand.green ? brand.cream : brand.orange,
                  background: "rgba(15, 23, 42, 0.9)",
                  padding: "12px 30px",
                  borderRadius: 16,
                  border: `2px solid ${p.color}66`,
                  boxShadow: `0 15px 30px rgba(0,0,0,0.5), ${p.glow}11`,
                  letterSpacing: 2
                }}>
                  {p.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Explanatory text */}
        <div style={{
          position: "absolute", bottom: "8%",
          fontFamily: brand.fontSans, fontSize: 36, fontWeight: 500,
          color: brand.textDim, textAlign: "center"
        }}>
          Conceptos similares acaban <span style={{ color: brand.green, fontWeight: 700 }}>MUY cerca</span>.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
