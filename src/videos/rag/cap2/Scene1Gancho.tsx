// Scene 1 — GANCHO · frames 0-240
// "EL ERROR #1 con RAG" + "darle el documento ENTERO"
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

  const titleP = spring({ frame, fps, config: { damping: 10, stiffness: 120 }, durationInFrames: 22 });
  const subP   = spring({ frame: frame - 30, fps, config: { damping: 14, stiffness: 90 }, durationInFrames: 20 });

  const glowPulse = Math.sin(frame / 12) * 0.35 + 0.65;

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={brand.orange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 28, paddingLeft: 60, paddingRight: 60,
      }}>
        {/* "EL ERROR #1" — impact entrance */}
        <div style={{
          textAlign: "center",
          opacity: interpolate(titleP, [0, 1], [0, 1]),
          transform: `scale(${interpolate(titleP, [0, 1], [0.65, 1])})`,
        }}>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 100,
            fontWeight: 900,
            color: brand.cream,
            lineHeight: 1,
            textShadow: `0 0 ${24 * glowPulse}px ${brand.orange}88`,
            letterSpacing: "-2px",
          }}>
            EL ERROR
          </div>
          <div style={{
            fontFamily: brand.fontMono,
            fontSize: 140,
            fontWeight: 900,
            color: brand.orange,
            lineHeight: 0.9,
            textShadow: [
              `0 0 ${20 * glowPulse}px ${brand.orange}`,
              `0 0 ${50 * glowPulse}px ${brand.orange}88`,
              `0 0 ${100 * glowPulse}px ${brand.orange}33`,
            ].join(", "),
          }}>
            #1
          </div>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 52,
            fontWeight: 300,
            color: brand.cream,
            opacity: 0.7,
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginTop: 8,
          }}>
            con RAG
          </div>
        </div>

        {/* "darle el documento ENTERO" */}
        <div style={{
          background: `${brand.orange}15`,
          border: `2px solid ${brand.orange}55`,
          borderRadius: 16,
          padding: "18px 36px",
          opacity: interpolate(subP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(subP, [0, 1], [20, 0])}px)`,
        }}>
          <span style={{
            fontFamily: brand.fontSans,
            fontSize: 40,
            fontWeight: 700,
            color: brand.orange,
            textShadow: `0 0 10px ${brand.orange}99`,
          }}>
            darle el documento ENTERO
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
