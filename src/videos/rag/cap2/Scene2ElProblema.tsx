import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene2ElProblema: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Document interaction animation
  // It comes down, hits the box, bounces back up, hits again.
  const docTranslateY = interpolate(
    frame, 
    [0, 45, 65, 85, 105, 125, 150], 
    [-600, -100, -180, -100, -150, -100, -120], 
    { extrapolateRight: "clamp" }
  );

  // Box impact shake
  const boxShake = interpolate(
    frame, 
    [45, 50, 55, 60, 85, 90, 95, 100, 125, 130, 135, 140], 
    [0, 15, -15, 0, 0, 10, -10, 0, 0, 8, -8, 0]
  );

  const boxScale = interpolate(
    frame,
    [45, 50, 60, 85, 90, 100, 125, 130, 140],
    [1, 1.05, 1, 1, 1.03, 1, 1, 1.02, 1]
  );

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Bg accent={brand.orange} />
      
      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 60,
      }}>
        {/* Label entrance */}
        <div style={{
          position: "absolute", top: 250,
          opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [-30, 0])}px)`,
          textAlign: "center",
          zIndex: 20,
        }}>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 44,
            fontWeight: 600,
            color: brand.orange,
            textTransform: "uppercase",
            letterSpacing: "6px",
            textShadow: `0 0 15px ${brand.orange}88`,
          }}>
            Límite de contexto
          </div>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 130,
            fontWeight: 900,
            color: brand.cream,
            lineHeight: 1,
            marginTop: 15,
            textShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}>
            300 PÁGINAS
          </div>
        </div>

        {/* LARGE LLM Box */}
        <div style={{
          width: 500, height: 350,
          border: `8px solid ${brand.orange}`,
          background: "rgba(255, 122, 26, 0.05)",
          borderRadius: 40,
          position: "relative",
          marginTop: 350,
          transform: `translateX(${boxShake}px) scale(${boxScale})`,
          boxShadow: [
            `0 0 60px ${brand.orange}33`,
            `inset 0 0 40px ${brand.orange}22`,
          ].join(", "),
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 10,
        }}>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 60, 
            fontWeight: 800,
            color: brand.orange, 
            textShadow: brand.glowOrange,
            opacity: 0.9,
          }}>
            LLM
          </div>
          
          {/* Inner scan line effect */}
          <div style={{
            position: "absolute",
            width: "90%",
            height: 4,
            background: brand.orange,
            top: interpolate(frame % 60, [0, 60], [20, 330]),
            opacity: 0.3,
            boxShadow: `0 0 10px ${brand.orange}`,
          }} />
        </div>

        {/* The Giant Document - Larger and more detailed */}
        <div style={{
          width: 380, height: 550,
          backgroundColor: brand.cream,
          borderRadius: 15,
          position: "absolute",
          top: "50%",
          transform: `translateY(${docTranslateY}px) rotate(${-2}deg)`,
          zIndex: 5,
          boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          display: "flex", flexDirection: "column", padding: 40, gap: 15,
          overflow: "hidden",
        }}>
          {/* Document header */}
          <div style={{ height: 30, width: "40%", backgroundColor: "#ccc", borderRadius: 4, marginBottom: 20 }} />
          
          {/* Text lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} style={{ 
              height: 10, 
              width: i % 4 === 0 ? "75%" : "100%", 
              backgroundColor: "#eee", 
              borderRadius: 5 
            }} />
          ))}
          
          {/* Page badge */}
          <div style={{
            position: "absolute", bottom: 30, right: 30,
            fontFamily: brand.fontMono, color: "#999", fontSize: 20,
          }}>
            PDF
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
