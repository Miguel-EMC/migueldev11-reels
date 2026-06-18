// Scene 4 — LA ANALOGÍA · frames 1140-1650 (510 local frames)
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ragTheme } from "../../../themes/rag";
import { Bg } from "../../../shared/Bg";

const ACCENT = ragTheme.violet;

const FilingCabinet: React.FC<{ color: string; open: number }> = ({ color, open }) => {
  const drawerY = open * 28;
  return (
    <svg width="150" height="190" viewBox="0 0 150 190" fill="none"
      style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
      <rect x="10" y="30" width="130" height="150" rx="7" stroke={color} strokeWidth="2.5" fill={`${color}0E`} />
      <g transform={`translate(0 ${-drawerY})`}>
        <rect x="14" y="34" width="122" height="55" rx="5" stroke={color} strokeWidth="2" fill={`${color}18`} />
        <rect x="52" y="58" width="46" height="9" rx="4.5" stroke={color} strokeWidth="2" fill="none" />
        {open > 0.2 && (
          <>
            <rect x="28" y="20" width="28" height="36" rx="3" stroke={color} strokeWidth="1.5"
              fill={`${color}20`} opacity={Math.min(open * 1.5, 1)} />
            <rect x="62" y="16" width="28" height="40" rx="3" stroke={color} strokeWidth="1.5"
              fill={`${color}28`} opacity={Math.min(open * 1.5, 1)} />
            <rect x="96" y="22" width="24" height="34" rx="3" stroke={color} strokeWidth="1.5"
              fill={`${color}18`} opacity={Math.min(open * 1.2, 0.8)} />
          </>
        )}
      </g>
      <rect x="14" y="100" width="122" height="55" rx="5" stroke={color} strokeWidth="2" fill={`${color}10`} />
      <rect x="52" y="124" width="46" height="9" rx="4.5" stroke={color} strokeWidth="2" fill="none" />
      <rect x="22" y="180" width="22" height="10" rx="3" fill={color} opacity="0.45" />
      <rect x="106" y="180" width="22" height="10" rx="3" fill={color} opacity="0.45" />
    </svg>
  );
};

const BrainIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="130" height="130" viewBox="0 0 100 100" fill="none"
    style={{ filter: `drop-shadow(0 0 14px ${color})` }}>
    <path
      d="M50 18 C34 18 24 29 24 41 C18 43 13 49 13 57 C13 67 21 73 30 73 C30 81 38 87 47 86 L50 86 L53 86 C62 87 70 81 70 73 C79 73 87 67 87 57 C87 49 82 43 76 41 C76 29 66 18 50 18Z"
      stroke={color} strokeWidth="2.5" fill={`${color}15`}
    />
    <path d="M50 18 L50 86" stroke={color} strokeWidth="1.5" opacity="0.35" />
    <path d="M24 44 Q37 50 50 50 Q63 50 76 44" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <path d="M20 59 Q35 59 50 59 Q65 59 80 59" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <circle cx="37" cy="33" r="3.5" fill={color} opacity="0.7" />
    <circle cx="63" cy="33" r="3.5" fill={color} opacity="0.7" />
  </svg>
);

export const Scene4LaAnalogia: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const cabinetP      = spring({ frame,          fps, config: { damping: 14, stiffness: 80 }, durationInFrames: 25 });
  const openAmount    = interpolate(frame, [60, 180], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const brainP        = spring({ frame: frame - 130, fps, config: { damping: 14, stiffness: 80 }, durationInFrames: 25 });
  const linesOpacity  = interpolate(frame, [200, 280], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const taglineOpacity = interpolate(frame, [290, 360], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={ACCENT} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          fontFamily: ragTheme.fontSans, fontSize: 44, fontWeight: 700,
          color: ACCENT, textShadow: `0 0 12px ${ACCENT}`,
          marginBottom: 52, textAlign: "center",
        }}>
          Como un experto con su archivador
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
          <div style={{
            opacity: interpolate(cabinetP, [0, 1], [0, 1]),
            transform: `scale(${interpolate(cabinetP, [0, 1], [0.7, 1])})`,
          }}>
            <FilingCabinet color={ACCENT} open={openAmount} />
          </div>

          <svg width="100" height="60" viewBox="0 0 100 60" fill="none"
            style={{ opacity: linesOpacity, flexShrink: 0 }}>
            <path d="M0 10 Q50 10 100 30" stroke={ACCENT} strokeWidth="1.8"
              strokeDasharray="6 4" opacity="0.75" />
            <path d="M0 30 L100 30" stroke={ACCENT} strokeWidth="2.5" />
            <path d="M0 50 Q50 50 100 30" stroke={ACCENT} strokeWidth="1.8"
              strokeDasharray="6 4" opacity="0.75" />
            <path d="M92 24 L100 30 L92 36" stroke={ACCENT} strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div style={{
            opacity: interpolate(brainP, [0, 1], [0, 1]),
            transform: `scale(${interpolate(brainP, [0, 1], [0.7, 1])})`,
          }}>
            <BrainIcon color={ACCENT} />
          </div>
        </div>

        <div style={{
          marginTop: 44, fontFamily: ragTheme.fontSans, fontSize: 33,
          color: ragTheme.textDim, textAlign: "center",
          opacity: taglineOpacity,
        }}>
          No improvisa.{" "}
          <span style={{ color: ACCENT, fontWeight: 700, textShadow: `0 0 8px ${ACCENT}` }}>
            Lee los datos reales.
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
