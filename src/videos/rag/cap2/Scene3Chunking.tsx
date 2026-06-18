import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene3Chunking: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleEntrance = spring({ frame, fps, config: { damping: 12 } });
  
  // Splitting animation
  const splitProgress = spring({ frame: frame - 45, fps, config: { damping: 15, stiffness: 100 } });
  
  const chunks = [
    { id: 1, color: brand.orange },
    { id: 2, color: brand.cream },
    { id: 3, color: brand.orange },
    { id: 4, color: brand.cream },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Bg accent={brand.orange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 60,
      }}>
        {/* Title */}
        <div style={{
          opacity: titleEntrance,
          transform: `scale(${interpolate(titleEntrance, [0, 1], [0.8, 1])})`,
          textAlign: "center",
          marginBottom: 80,
        }}>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 120,
            fontWeight: 900,
            color: brand.orange,
            textShadow: brand.glowOrange,
            letterSpacing: "-2px",
          }}>
            CHUNKING
          </div>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 32,
            color: brand.cream,
            opacity: 0.7,
            marginTop: 10,
          }}>
            chunk = pedazo de texto
          </div>
        </div>

        {/* Chunks Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 30,
          width: 600,
        }}>
          {chunks.map((chunk, i) => {
            const chunkSpring = spring({ frame: frame - 60 - i * 5, fps });
            const translateY = interpolate(splitProgress, [0, 1], [0, 0]); // Not used directly but splitProgress triggers the look
            const spreadX = (i % 2 === 0 ? -1 : 1) * interpolate(splitProgress, [0, 1], [0, 20]);
            const spreadY = (i < 2 ? -1 : 1) * interpolate(splitProgress, [0, 1], [0, 20]);

            return (
              <div key={chunk.id} style={{
                height: 180,
                background: i % 2 === 0 ? `rgba(255, 122, 26, 0.15)` : `rgba(245, 245, 240, 0.05)`,
                border: `2px solid ${i % 2 === 0 ? brand.orange : brand.cream}33`,
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: chunkSpring,
                transform: `scale(${chunkSpring}) translate(${spreadX}px, ${spreadY}px)`,
                boxShadow: i % 2 === 0 ? `0 0 20px ${brand.orange}22` : "none",
              }}>
                <div style={{
                  fontFamily: brand.fontMono,
                  fontSize: 40,
                  fontWeight: 800,
                  color: i % 2 === 0 ? brand.orange : brand.cream,
                }}>
                  #{chunk.id}
                </div>
                <div style={{
                   width: "60%", height: 4, backgroundColor: `${i % 2 === 0 ? brand.orange : brand.cream}44`,
                   marginTop: 15, borderRadius: 2
                }} />
                <div style={{
                   width: "40%", height: 4, backgroundColor: `${i % 2 === 0 ? brand.orange : brand.cream}44`,
                   marginTop: 8, borderRadius: 2
                }} />
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
