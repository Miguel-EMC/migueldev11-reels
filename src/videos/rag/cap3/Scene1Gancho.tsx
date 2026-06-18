import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 10) * 0.15 + 0.85;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Bg accent={brand.green} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 60,
      }}>
        <div style={{
          opacity: entrance,
          transform: `scale(${interpolate(entrance, [0, 1], [0.8, 1])})`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 40,
            fontWeight: 400,
            color: brand.green,
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginBottom: 20,
            opacity: 0.8,
          }}>
            La clave es...
          </div>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 160,
            fontWeight: 900,
            color: brand.cream,
            lineHeight: 1,
            textShadow: [
              `0 0 ${20 * pulse}px ${brand.green}AA`,
              `0 0 ${50 * pulse}px ${brand.green}44`,
            ].join(", "),
            letterSpacing: "-4px",
          }}>
            EMBEDDINGS
          </div>
          <div style={{
             height: 6, width: interpolate(entrance, [0.5, 1], [0, 100]) + "%",
             backgroundColor: brand.green,
             marginTop: 30,
             boxShadow: brand.glowGreen,
             borderRadius: 3
          }} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
