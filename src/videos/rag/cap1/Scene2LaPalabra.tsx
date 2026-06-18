// Scene 2 — LA PALABRA · frames 210-600 (390 local frames)
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ragTheme } from "../../../themes/rag";
import { Bg } from "../../../shared/Bg";

const ACCENT = ragTheme.cyan;

const ROWS = [
  { letter: "R", rest: "etrieval",  delay: 0   },
  { letter: "A", rest: "ugmented",  delay: 55  },
  { letter: "G", rest: "eneration", delay: 110 },
] as const;

const BrainIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="130" height="130" viewBox="0 0 100 100" fill="none"
    style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path
      d="M50 18 C34 18 24 29 24 41 C18 43 13 49 13 57 C13 67 21 73 30 73 C30 81 38 87 47 86 L50 86 L53 86 C62 87 70 81 70 73 C79 73 87 67 87 57 C87 49 82 43 76 41 C76 29 66 18 50 18Z"
      stroke={color} strokeWidth="2.5" fill={`${color}15`}
    />
    <path d="M50 18 L50 86" stroke={color} strokeWidth="1.5" opacity="0.35" />
    <path d="M24 44 Q37 50 50 50 Q63 50 76 44" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <path d="M20 59 Q35 59 50 59 Q65 59 80 59" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <circle cx="37" cy="33" r="3.5" fill={color} opacity="0.7" />
    <circle cx="63" cy="33" r="3.5" fill={color} opacity="0.7" />
    <circle cx="28" cy="56" r="2.5" fill={color} opacity="0.6" />
    <circle cx="72" cy="56" r="2.5" fill={color} opacity="0.6" />
  </svg>
);

export const Scene2LaPalabra: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const brainP = spring({ frame: frame - 160, fps, config: { damping: 14, stiffness: 90 }, durationInFrames: 22 });

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={ACCENT} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: 10,
      }}>
        <div style={{
          opacity: interpolate(brainP, [0, 1], [0, 1]),
          transform: `scale(${interpolate(brainP, [0, 1], [0.5, 1])})`,
          marginBottom: 28,
        }}>
          <BrainIcon color={ACCENT} />
        </div>

        {ROWS.map(({ letter, rest, delay }) => {
          const p = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 110 }, durationInFrames: 20 });
          return (
            <div key={letter} style={{
              display: "flex", alignItems: "baseline", gap: 6,
              opacity: interpolate(p, [0, 1], [0, 1]),
              transform: `translateX(${interpolate(p, [0, 1], [-56, 0])}px)`,
            }}>
              <span style={{
                fontFamily: ragTheme.fontMono, fontSize: 106, fontWeight: 900,
                color: ACCENT, lineHeight: 1, width: 88, textAlign: "right",
                textShadow: `0 0 18px ${ACCENT}, 0 0 44px ${ACCENT}66`,
              }}>
                {letter}
              </span>
              <span style={{
                fontFamily: ragTheme.fontSans, fontSize: 52, fontWeight: 300,
                color: ragTheme.text, opacity: 0.82, lineHeight: 1,
              }}>
                {rest}
              </span>
            </div>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
