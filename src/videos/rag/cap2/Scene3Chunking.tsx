// Scene 3 — LA SOLUCIÓN: CHUNKING · frames 720-1260 (540 local frames)
// "CHUNKING" + document splitting into numbered blocks
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

const CHUNKS = [
  { n: 1, delay: 140 },
  { n: 2, delay: 180 },
  { n: 3, delay: 220 },
  { n: 4, delay: 260 },
] as const;

const ChunkBlock: React.FC<{ n: number; color: string; opacity: number; offsetX: number }> = ({
  n, color, opacity, offsetX,
}) => (
  <div style={{
    width: 160, height: 100,
    background: `${color}12`,
    border: `2px solid ${color}55`,
    borderRadius: 12,
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
    gap: 8,
    opacity,
    transform: `translateX(${offsetX}px)`,
    boxShadow: `0 0 12px ${color}33`,
  }}>
    <div style={{
      fontFamily: brand.fontMono, fontSize: 32, fontWeight: 900,
      color, textShadow: `0 0 8px ${color}`,
    }}>
      {n}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "70%", opacity: 0.55 }}>
      <div style={{ height: 3, background: color, borderRadius: 2 }} />
      <div style={{ height: 3, background: color, borderRadius: 2, width: "80%" }} />
      <div style={{ height: 3, background: color, borderRadius: 2, width: "60%" }} />
    </div>
  </div>
);

export const Scene3Chunking: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const titleP = spring({ frame, fps, config: { damping: 10, stiffness: 110 }, durationInFrames: 22 });
  const glowPulse = Math.sin(frame / 11) * 0.3 + 0.7;

  // split flash at frame 120
  const splitFlash = interpolate(frame, [115, 125, 140], [0, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // original doc fades out as chunks appear
  const docOpacity = interpolate(frame, [100, 150], [1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const labelP = spring({ frame: frame - 300, fps, config: { damping: 14, stiffness: 100 }, durationInFrames: 20 });

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={brand.orange} />

      {/* split flash */}
      <AbsoluteFill style={{
        background: `${brand.orange}${Math.round(splitFlash * 0x28).toString(16).padStart(2,"0")}`,
        pointerEvents: "none",
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 36,
      }}>
        {/* "CHUNKING" */}
        <div style={{
          opacity: interpolate(titleP, [0, 1], [0, 1]),
          transform: `scale(${interpolate(titleP, [0, 1], [0.7, 1])})`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: brand.fontMono, fontSize: 118, fontWeight: 900,
            color: brand.orange, lineHeight: 1,
            textShadow: [
              `0 0 ${16 * glowPulse}px ${brand.orange}`,
              `0 0 ${40 * glowPulse}px ${brand.orange}88`,
            ].join(", "),
          }}>
            CHUNKING
          </div>
        </div>

        {/* Document → Chunks animation */}
        <div style={{ position: "relative", height: 130, width: 720, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Original doc (fades out) */}
          <div style={{
            position: "absolute",
            opacity: docOpacity,
            border: `2px dashed ${brand.cream}44`,
            borderRadius: 12,
            width: 160, height: 100,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: brand.fontSans, fontSize: 18, color: brand.cream, opacity: 0.5 }}>
              documento
            </span>
          </div>

          {/* Chunk blocks appear in a row */}
          <div style={{ display: "flex", gap: 14, opacity: interpolate(frame, [130, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
            {CHUNKS.map(({ n, delay }) => {
              const p = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 110 }, durationInFrames: 20 });
              const offsetX = interpolate(p, [0, 1], [(n - 2.5) * -30, 0]);
              return (
                <ChunkBlock
                  key={n}
                  n={n}
                  color={brand.orange}
                  opacity={interpolate(p, [0, 1], [0, 1])}
                  offsetX={offsetX}
                />
              );
            })}
          </div>
        </div>

        {/* "chunk = pedazo de texto" */}
        <div style={{
          background: `${brand.orange}10`,
          border: `1px solid ${brand.orange}44`,
          borderRadius: 12,
          padding: "14px 30px",
          opacity: interpolate(labelP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(labelP, [0, 1], [14, 0])}px)`,
        }}>
          <span style={{ fontFamily: brand.fontMono, fontSize: 32, color: brand.orange }}>chunk</span>
          <span style={{ fontFamily: brand.fontMono, fontSize: 32, color: brand.cream, opacity: 0.7 }}>
            {" "}={" "}pedazo de texto
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
