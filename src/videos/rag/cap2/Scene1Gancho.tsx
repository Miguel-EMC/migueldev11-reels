import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const titleSpring = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const subSpring   = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 120 } });
  
  const pulse = Math.sin(frame / 10) * 0.2 + 0.8;

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity, backgroundColor: brand.bg }}>
      <Bg accent={brand.orange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 40, padding: "0 60px",
      }}>
        <div style={{
          textAlign: "center",
          opacity: titleSpring,
          transform: `scale(${interpolate(titleSpring, [0, 1], [0.8, 1])}) translateY(${interpolate(titleSpring, [0, 1], [40, 0])}px)`,
        }}>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 90,
            fontWeight: 900,
            color: brand.cream,
            lineHeight: 1,
            textShadow: `0 0 20px ${brand.orange}44`,
            letterSpacing: "-2px",
          }}>
            EL ERROR
          </div>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 160,
            fontWeight: 900,
            color: brand.orange,
            lineHeight: 0.85,
            textShadow: [
              `0 0 ${15 * pulse}px ${brand.orange}AA`,
              `0 0 ${40 * pulse}px ${brand.orange}55`,
            ].join(", "),
          }}>
            #1
          </div>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 60,
            fontWeight: 400,
            color: brand.cream,
            opacity: 0.8,
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginTop: 10,
          }}>
            con RAG
          </div>
        </div>

        <div style={{
          background: `rgba(255, 122, 26, 0.1)`,
          border: `2px solid ${brand.orange}66`,
          borderRadius: 20,
          padding: "20px 40px",
          opacity: subSpring,
          transform: `translateY(${interpolate(subSpring, [0, 1], [30, 0])}px)`,
          boxShadow: `0 0 30px ${brand.orange}33`,
        }}>
          <span style={{
            fontFamily: brand.fontSans,
            fontSize: 44,
            fontWeight: 700,
            color: brand.orange,
            textTransform: "uppercase",
            letterSpacing: "1px",
            textShadow: `0 0 10px ${brand.orange}66`,
          }}>
            darle el documento ENTERO
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
