import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene5DetallePro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const overlapSpring = spring({ frame: frame - 60, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Bg accent={brand.orange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 60,
      }}>
        <div style={{
          opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [-20, 0])}px)`,
          textAlign: "center",
          marginBottom: 100,
        }}>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 40,
            color: brand.orange,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}>
            EL DETALLE PRO
          </div>
        </div>

        {/* Overlap Visualization */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: -20, // Negative gap to show overlap
          alignItems: "center",
          position: "relative",
          width: 500,
        }}>
          {/* Chunk 1 */}
          <div style={{
            width: "100%", height: 180,
            background: `rgba(245, 245, 240, 0.05)`,
            border: `2px solid ${brand.cream}33`,
            borderRadius: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: entrance,
            zIndex: 1,
          }}>
            <div style={{ width: "80%", height: 80, display: "flex", flexDirection: "column", gap: 10 }}>
               <div style={{ height: 6, backgroundColor: brand.cream + "22", width: "100%", borderRadius: 3 }} />
               <div style={{ height: 6, backgroundColor: brand.cream + "22", width: "90%", borderRadius: 3 }} />
               <div style={{ height: 6, backgroundColor: brand.cream + "22", width: "100%", borderRadius: 3 }} />
            </div>
          </div>

          {/* Overlap Highlight */}
          <div style={{
            position: "absolute",
            top: 140, // Middle zone
            width: "105%",
            height: 80,
            background: `${brand.orange}33`,
            border: `3px solid ${brand.orange}`,
            borderRadius: 12,
            zIndex: 10,
            opacity: overlapSpring,
            transform: `scaleX(${overlapSpring})`,
            boxShadow: brand.glowOrange,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
             <div style={{
               fontFamily: brand.fontMono,
               fontSize: 32,
               fontWeight: 800,
               color: brand.orange,
               textShadow: `0 0 10px ${brand.orange}`,
             }}>
               OVERLAP
             </div>
          </div>

          {/* Chunk 2 */}
          <div style={{
            width: "100%", height: 180,
            background: `rgba(245, 245, 240, 0.05)`,
            border: `2px solid ${brand.cream}33`,
            borderRadius: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: entrance,
            marginTop: -20,
            zIndex: 1,
          }}>
             <div style={{ width: "80%", height: 80, display: "flex", flexDirection: "column", gap: 10 }}>
               <div style={{ height: 6, backgroundColor: brand.cream + "22", width: "100%", borderRadius: 3 }} />
               <div style={{ height: 6, backgroundColor: brand.cream + "22", width: "100%", borderRadius: 3 }} />
               <div style={{ height: 6, backgroundColor: brand.cream + "22", width: "70%", borderRadius: 3 }} />
            </div>
          </div>
        </div>

        {/* Garbage in, Garbage out */}
        <div style={{
          marginTop: 120,
          opacity: spring({ frame: frame - 120, fps }),
          fontFamily: brand.fontMono,
          fontSize: 36,
          color: brand.cream,
          background: "rgba(0,0,0,0.3)",
          padding: "15px 30px",
          borderRadius: 12,
          border: `1px dashed ${brand.cream}44`,
        }}>
          basura entra <span style={{ color: brand.orange }}>→</span> basura sale
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
