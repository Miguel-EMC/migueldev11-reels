// Scene 5 — POR QUÉ IMPORTA · frames 1650-2040 (390 local frames)
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ragTheme } from "../../../themes/rag";
import { Bg } from "../../../shared/Bg";

const ACCENT = ragTheme.green;

const CheckIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
    style={{ filter: `drop-shadow(0 0 8px ${color})`, flexShrink: 0 }}>
    <circle cx="26" cy="26" r="24" stroke={color} strokeWidth="2.5" fill={`${color}15`} />
    <path d="M13 26 L21 34 L39 16" stroke={color} strokeWidth="3.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BADGES = [
  { text: "SIN reentrenar el modelo",  delay: 20  },
  { text: "SIN gastar una fortuna",    delay: 100 },
  { text: "Conectas tus datos → listo", delay: 185 },
] as const;

export const Scene5PorQueImporta: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const titleP = spring({ frame, fps, config: { damping: 14, stiffness: 88 }, durationInFrames: 22 });

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={ACCENT} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 30, paddingLeft: 56, paddingRight: 56,
      }}>
        <div style={{
          fontFamily: ragTheme.fontSans, fontSize: 50, fontWeight: 800,
          color: ACCENT, textShadow: `0 0 14px ${ACCENT}`,
          textAlign: "center",
          opacity: interpolate(titleP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(titleP, [0, 1], [-20, 0])}px)`,
        }}>
          ¿Por qué importa?
        </div>

        {BADGES.map(({ text, delay }) => {
          const p = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 105 }, durationInFrames: 22 });
          return (
            <div key={text} style={{
              display: "flex", alignItems: "center", gap: 22,
              background: `${ACCENT}0E`, border: `2px solid ${ACCENT}44`,
              borderRadius: 20, padding: "22px 34px",
              width: "100%", maxWidth: 880,
              opacity: interpolate(p, [0, 1], [0, 1]),
              transform: `translateX(${interpolate(p, [0, 1], [55, 0])}px)`,
            }}>
              <CheckIcon color={ACCENT} />
              <span style={{
                fontFamily: ragTheme.fontSans, fontSize: 36, fontWeight: 700,
                color: ragTheme.text,
              }}>
                {text}
              </span>
            </div>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
