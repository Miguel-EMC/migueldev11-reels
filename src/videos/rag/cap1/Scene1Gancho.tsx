// Scene 1 — GANCHO · frames 0-210
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ragTheme } from "../../../themes/rag";
import { Bg } from "../../../shared/Bg";

const ACCENT = ragTheme.cyan;

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 70 }, durationInFrames: 30 });
  const fadeOpacity = interpolate(
    frame,
    [0, 8, durationInFrames - 10, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const pulse = Math.sin(frame / 14) * 0.4 + 0.6;

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={ACCENT} />

      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          opacity: interpolate(entrance, [0, 1], [0, 1]),
          transform: `scale(${interpolate(entrance, [0, 1], [0.55, 1])})`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: ragTheme.fontMono,
            fontSize: 260,
            fontWeight: 900,
            color: ACCENT,
            letterSpacing: "-6px",
            lineHeight: 1,
            textShadow: [
              `0 0 ${30 * pulse}px ${ACCENT}`,
              `0 0 ${70 * pulse}px ${ACCENT}99`,
              `0 0 ${140 * pulse}px ${ACCENT}44`,
            ].join(", "),
          }}>
            RAG
          </div>

          <div style={{
            fontFamily: ragTheme.fontSans,
            fontSize: 36,
            fontWeight: 300,
            color: ragTheme.textDim,
            letterSpacing: "10px",
            textTransform: "uppercase",
            marginTop: 20,
            opacity: interpolate(entrance, [0, 1], [0, 0.85]),
          }}>
            Retrieval · Augmented · Generation
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
