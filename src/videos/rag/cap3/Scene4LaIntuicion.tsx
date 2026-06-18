import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene4LaIntuicion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const neighborhoods = [
    { 
      name: "Mascotas", 
      color: brand.green, 
      glow: brand.glowGreen,
      x: -200, y: -220, 
      words: ["Perro", "Gato", "Cachorro"],
    },
    { 
      name: "Finanzas", 
      color: brand.cyan, 
      glow: brand.glowCyan,
      x: 200, y: 240, 
      words: ["Factura", "Pago", "Precio"],
    }
  ];

  const cameraPanX = Math.sin(frame / 40) * 30;
  const cameraPanY = Math.cos(frame / 45) * 20;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <GridBackground color={brand.green} />
      <ParticleField />

      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 15%, ${brand.bg} 90%)`,
        pointerEvents: "none", zIndex: 2
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 50, zIndex: 10
      }}>
        
        {/* Massive dynamic header layout */}
        <div style={{
           position: "absolute", top: 150,
           textAlign: "center",
           opacity: spring({ frame, fps }),
           transform: `translateY(${interpolate(spring({ frame, fps }), [0, 1], [-40, 0])}px)`
        }}>
          <div style={{ 
            fontFamily: brand.fontSans, 
            fontSize: 90, 
            fontWeight: 900, 
            color: brand.cream,
            letterSpacing: "-3px",
            lineHeight: 1.1
          }}>
            MAPA DE <span style={{ color: brand.green, textShadow: brand.glowGreen }}>SIGNIFICADOS</span>
          </div>
        </div>

        {/* The Map Container with structural layout enhancement */}
        <div style={{ 
          position: "relative", width: "100%", height: 950,
          transform: `translate(${cameraPanX}px, ${cameraPanY}px) scale(1.05)`,
        }}>
          {neighborhoods.map((n, i) => {
            const nSpring = spring({ frame: frame - i * 25, fps });
            return (
              <div key={n.name} style={{
                position: "absolute",
                left: `calc(50% + ${n.x}px)`,
                top: `calc(50% + ${n.y}px)`,
                transform: `translate(-50%, -50%) scale(${interpolate(nSpring, [0, 1], [0.5, 1.15])})`,
                opacity: nSpring,
              }}>
                {/* Massive Neighborhood cosmic background boundary ring */}
                <div style={{
                  width: 450, height: 450,
                  border: `4px dashed ${n.color}88`,
                  borderRadius: "50%",
                  background: `${n.color}0D`,
                  position: "absolute",
                  left: "50%", top: "50%",
                  transform: "translate(-50%, -50%)",
                  boxShadow: `inset 0 0 60px ${n.color}1A, ${n.glow}22`,
                }} />

                {/* Substantial Floating Cyber-Badge for the Category */}
                <div style={{
                   position: "absolute", top: -250, left: "50%", transform: "translateX(-50%)",
                   fontFamily: brand.fontMono, fontSize: 36, fontWeight: 900, color: n.color,
                   textTransform: "uppercase", letterSpacing: "6px",
                   background: "rgba(10, 15, 30, 0.9)",
                   padding: "10px 35px",
                   borderRadius: 14,
                   border: `2px solid ${n.color}55`,
                   textShadow: n.glow,
                   whiteSpace: "nowrap"
                }}>
                  CLUSTER: {n.name}
                </div>

                {/* Nodes inside neighborhood with rich elements */}
                {n.words.map((word, j) => {
                   const angle = (j / n.words.length) * Math.PI * 2 + (frame * 0.005);
                   const radius = 130;
                   const wx = Math.cos(angle) * radius;
                   const wy = Math.sin(angle) * radius;

                   return (
                     <div key={word} style={{
                        position: "absolute",
                        left: `calc(50% + ${wx}px)`,
                        top: `calc(50% + ${wy}px)`,
                        transform: "translate(-50%, -50%)",
                        display: "flex", flexDirection: "column", alignItems: "center"
                     }}>
                        {/* Node sphere */}
                        <div style={{
                           width: 28, height: 28, 
                           backgroundColor: brand.bg,
                           border: `4px solid ${n.color}`,
                           borderRadius: "50%",
                           boxShadow: n.glow, 
                           marginBottom: 10,
                           display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                          <div style={{ width: 10, height: 10, backgroundColor: n.color, borderRadius: "50%" }} />
                        </div>
                        {/* Clear clean text item */}
                        <div style={{
                           fontFamily: brand.fontSans, 
                           fontSize: 32, 
                           fontWeight: 800, 
                           color: brand.cream,
                           textShadow: "0 4px 10px rgba(0,0,0,0.9)",
                           background: "rgba(7,11,22,0.6)",
                           padding: "2px 12px",
                           borderRadius: 8
                        }}>
                           {word}
                        </div>
                     </div>
                   );
                })}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
