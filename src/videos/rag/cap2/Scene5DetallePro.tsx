// Scene 5 — EL DETALLE PRO · frames 1740-2160 (420 local frames)
// Two chunks with orange overlap fringe + "basura entra → basura sale"
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene5DetallePro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const titleP   = spring({ frame,          fps, config: { damping: 14, stiffness: 90 }, durationInFrames: 22 });
  const chunk1P  = spring({ frame: frame - 20,  fps, config: { damping: 14, stiffness: 100 }, durationInFrames: 22 });
  const chunk2P  = spring({ frame: frame - 60,  fps, config: { damping: 14, stiffness: 100 }, durationInFrames: 22 });
  const overlapP = spring({ frame: frame - 110, fps, config: { damping: 14, stiffness: 100 }, durationInFrames: 20 });
  const basuraP  = spring({ frame: frame - 250, fps, config: { damping: 14, stiffness: 100 }, durationInFrames: 22 });

  const overlapGlow = Math.sin(frame / 10) * 0.3 + 0.7;

  const CHUNK_W = 260;
  const OVERLAP_W = 70;

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={brand.orange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 40,
      }}>
        <div style={{
          fontFamily: brand.fontSans, fontSize: 52, fontWeight: 800,
          color: brand.orange, textShadow: `0 0 12px ${brand.orange}`,
          textAlign: "center",
          opacity: interpolate(titleP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(titleP, [0, 1], [-16, 0])}px)`,
        }}>
          El detalle PRO
        </div>

        {/* Overlap diagram */}
        <div style={{ position: "relative", width: CHUNK_W * 2 - OVERLAP_W + 20, height: 140 }}>
          {/* Chunk A */}
          <div style={{
            position: "absolute", left: 0, top: 20,
            width: CHUNK_W, height: 100,
            background: `${brand.cream}10`,
            border: `2px solid ${brand.cream}33`,
            borderRadius: 14,
            display: "flex", flexDirection: "column",
            justifyContent: "center", gap: 7, padding: "0 18px",
            opacity: interpolate(chunk1P, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(chunk1P, [0, 1], [-30, 0])}px)`,
          }}>
            {[100, 80, 65, 50].map((w, i) => (
              <div key={i} style={{ height: 4, background: `${brand.cream}55`, borderRadius: 2, width: `${w}%` }} />
            ))}
            <div style={{ position: "absolute", top: -14, left: 12, fontFamily: brand.fontMono, fontSize: 18, color: brand.cream, opacity: 0.55 }}>
              chunk 1
            </div>
          </div>

          {/* Chunk B */}
          <div style={{
            position: "absolute", right: 0, top: 20,
            width: CHUNK_W, height: 100,
            background: `${brand.cream}10`,
            border: `2px solid ${brand.cream}33`,
            borderRadius: 14,
            display: "flex", flexDirection: "column",
            justifyContent: "center", gap: 7, padding: "0 18px",
            opacity: interpolate(chunk2P, [0, 1], [0, 1]),
            transform: `translateX(${interpolate(chunk2P, [0, 1], [30, 0])}px)`,
          }}>
            {[100, 85, 70, 55].map((w, i) => (
              <div key={i} style={{ height: 4, background: `${brand.cream}55`, borderRadius: 2, width: `${w}%` }} />
            ))}
            <div style={{ position: "absolute", top: -14, right: 12, fontFamily: brand.fontMono, fontSize: 18, color: brand.cream, opacity: 0.55 }}>
              chunk 2
            </div>
          </div>

          {/* Overlap zone (orange) */}
          <div style={{
            position: "absolute",
            left: CHUNK_W - OVERLAP_W,
            top: 20,
            width: OVERLAP_W,
            height: 100,
            background: `${brand.orange}28`,
            border: `2px solid ${brand.orange}`,
            borderRadius: 6,
            boxShadow: `0 0 ${16 * overlapGlow}px ${brand.orange}66`,
            opacity: interpolate(overlapP, [0, 1], [0, 1]),
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end",
            paddingBottom: 6,
          }}>
            <span style={{
              fontFamily: brand.fontMono, fontSize: 13,
              color: brand.orange, fontWeight: 700,
              textShadow: `0 0 6px ${brand.orange}`,
              writingMode: "vertical-rl" as const,
              transform: "rotate(180deg)",
              letterSpacing: "1px",
            }}>
              overlap
            </span>
          </div>

          {/* "overlap" label above */}
          <div style={{
            position: "absolute", top: -38, left: CHUNK_W - OVERLAP_W - 10, width: OVERLAP_W + 20,
            textAlign: "center",
            opacity: interpolate(overlapP, [0, 1], [0, 1]),
          }}>
            <span style={{
              fontFamily: brand.fontMono, fontSize: 22,
              color: brand.orange, textShadow: `0 0 8px ${brand.orange}`,
              fontWeight: 700,
            }}>
              overlap
            </span>
          </div>
        </div>

        {/* "basura entra → basura sale" */}
        <div style={{
          background: `${brand.orange}0C`,
          border: `1px solid ${brand.orange}33`,
          borderRadius: 14, padding: "16px 32px",
          opacity: interpolate(basuraP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(basuraP, [0, 1], [14, 0])}px)`,
        }}>
          <span style={{ fontFamily: brand.fontMono, fontSize: 30, color: brand.cream, opacity: 0.75 }}>
            basura entra
          </span>
          <span style={{ fontFamily: brand.fontMono, fontSize: 30, color: brand.orange, margin: "0 12px" }}>
            →
          </span>
          <span style={{ fontFamily: brand.fontMono, fontSize: 30, color: brand.cream, opacity: 0.75 }}>
            basura sale
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
