import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene5ParaQue: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const queryEntrance = spring({ frame: frame - 25, fps, config: { damping: 12 } });
  const searchProgress = spring({ frame: frame - 80, fps, config: { damping: 18 } });

  const chunks = [
    { id: "Doc #1", x: -160, y: -200, relevant: true, text: "Guía de Perros" },
    { id: "Doc #2", x: 180, y: -180, relevant: true, text: "Alimento Cachorros" },
    { id: "Doc #3", x: 320, y: 280, relevant: false, text: "Facturas Mayo" },
    { id: "Doc #4", x: -350, y: 160, relevant: false, text: "Impuestos PDF" },
    { id: "Doc #5", x: 40, y: 380, relevant: false, text: "Recibo Luz" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <GridBackground color={brand.green} />
      <ParticleField />

      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at center, transparent 20%, ${brand.bg} 95%)`,
        pointerEvents: "none", zIndex: 2
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 50, zIndex: 10
      }}>
        
        {/* Dynamic Premium Header */}
        <div style={{
           position: "absolute", top: 150,
           textAlign: "center",
           opacity: spring({ frame, fps }),
        }}>
          <div style={{ 
            fontFamily: brand.fontSans, 
            fontSize: 90, 
            fontWeight: 900, 
            color: brand.cream,
            letterSpacing: "-2px"
          }}>
            BUSCANDO POR <span style={{ color: brand.green, textShadow: brand.glowGreen }}>PROXIMIDAD</span>
          </div>
        </div>

        {/* Enhanced Map Space area */}
        <div style={{ position: "relative", width: "100%", height: 950, marginTop: 50 }}>
          
          {/* Central Massive User Query Node Card */}
          <div style={{
             position: "absolute", left: "50%", top: "50%",
             transform: `translate(-50%, -50%) scale(${interpolate(queryEntrance, [0, 1], [0.4, 1.25])})`,
             opacity: queryEntrance,
             zIndex: 50,
             display: "flex", flexDirection: "column", alignItems: "center"
          }}>
             <div style={{
                width: 70, height: 70, 
                backgroundColor: brand.bg, 
                borderRadius: "50%",
                border: `6px solid ${brand.cream}`,
                boxShadow: `0 0 40px rgba(255,255,255,0.6), ${brand.glowGreen}`,
                display: "flex", alignItems: "center", justifyContent: "center"
             }}>
               <div style={{ width: 25, height: 25, backgroundColor: brand.green, borderRadius: "50%", boxShadow: brand.glowGreen }} />
             </div>
             
             <div style={{
                fontFamily: brand.fontMono, 
                fontSize: 34, 
                fontWeight: 900, 
                color: brand.bg,
                marginTop: 25, 
                background: `linear-gradient(135deg, white, ${brand.cream})`, 
                padding: "12px 35px", 
                borderRadius: 16,
                boxShadow: `0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,255,0.3)`,
                letterSpacing: 2,
                whiteSpace: "nowrap"
             }}>
                🔍 TU PREGUNTA
             </div>
          </div>

          {/* Large Interactive Cyber Data Blocks */}
          {chunks.map((chunk, i) => {
             const chunkSpring = spring({ frame: frame - i * 6, fps });
             const isRelevant = chunk.relevant;
             
             // Animated dynamic laser line tracing opacity
             const lineOpacity = isRelevant ? searchProgress : interpolate(searchProgress, [0, 0.5], [0, 0.1]);
             const pulseScale = isRelevant && searchProgress > 0.6 ? 1 + Math.sin(frame / 6) * 0.08 : 1;

             return (
               <React.Fragment key={chunk.id}>
                 {/* Connection Laser Ray */}
                 <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 10 }}>
                    <line 
                      x1="50%" y1="50%"
                      x2={`calc(50% + ${chunk.x}px)`}
                      y2={`calc(50% + ${chunk.y}px)`}
                      stroke={isRelevant ? brand.green : brand.orange}
                      strokeWidth={isRelevant ? "6" : "2"}
                      strokeDasharray={isRelevant ? "12 8" : "6 6"}
                      opacity={lineOpacity * 0.7}
                      strokeDashoffset={frame * (isRelevant ? -3 : -1)}
                      style={{ filter: isRelevant ? `drop-shadow(0 0 10px ${brand.green})` : "none" }}
                    />
                 </svg>

                 {/* Premium Glassmorphic Node Block */}
                 <div style={{
                   position: "absolute",
                   left: `calc(50% + ${chunk.x}px)`,
                   top: `calc(50% + ${chunk.y}px)`,
                   transform: `translate(-50%, -50%) scale(${interpolate(chunkSpring, [0, 1], [0.3, 1.1]) * pulseScale})`,
                   opacity: chunkSpring,
                   zIndex: 20,
                 }}>
                   <div style={{
                     background: isRelevant && searchProgress > 0.5 ? "rgba(0, 255, 65, 0.12)" : "rgba(15, 23, 42, 0.8)",
                     backdropFilter: "blur(8px)",
                     border: `3px solid ${isRelevant && searchProgress > 0.5 ? brand.green : brand.cream + "22"}`,
                     borderRadius: 18,
                     padding: "15px 25px",
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                     boxShadow: isRelevant && searchProgress > 0.5 ? `0 15px 35px ${brand.green}33, ${brand.glowGreen}33` : `0 10px 20px rgba(0,0,0,0.5)`,
                     whiteSpace: "nowrap"
                   }}>
                     <div style={{
                       fontFamily: brand.fontMono,
                       fontSize: 26,
                       fontWeight: 900,
                       color: isRelevant && searchProgress > 0.5 ? brand.green : brand.textDim,
                       textShadow: isRelevant && searchProgress > 0.5 ? brand.glowGreen : "none",
                       marginBottom: 4
                     }}>
                       {chunk.id}
                     </div>
                     <div style={{
                       fontFamily: brand.fontSans,
                       fontSize: 28,
                       fontWeight: 700,
                       color: brand.cream,
                     }}>
                       {chunk.text}
                     </div>
                   </div>
                 </div>
               </React.Fragment>
             );
          })}
        </div>

        {/* Big Impact Callout Text */}
        <div style={{
           position: "absolute", bottom: "7%",
           fontFamily: brand.fontMono, fontSize: 40, fontWeight: 800, color: brand.green,
           opacity: searchProgress,
           textAlign: "center",
           textShadow: brand.glowGreen,
           lineHeight: 1.3,
           letterSpacing: 1
        }}>
           ¡ENCUENTRA LO RELEVANTE<br/>POR SIGNIFICADO!
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
