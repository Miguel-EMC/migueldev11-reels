// Scene 6 — CLIFFHANGER + CTA · frames 2040-2340 (300 local frames)
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ragTheme } from "../../../themes/rag";
import { Bg } from "../../../shared/Bg";

const ACCENT = ragTheme.cyan;

export const Scene6Cliffhanger: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const teaser  = spring({ frame,              fps, config: { damping: 14, stiffness: 80 }, durationInFrames: 22 });
  const cap2    = spring({ frame: frame - 55,  fps, config: { damping: 14, stiffness: 80 }, durationInFrames: 22 });
  const arrowOp = interpolate(frame, [140, 170], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ctaP    = spring({ frame: frame - 130, fps, config: { damping: 14, stiffness: 88 }, durationInFrames: 22 });

  const bounce    = Math.sin(frame / 9) * 9;
  const glowPulse = Math.sin(frame / 11) * 0.45 + 0.55;

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={ACCENT} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 26,
      }}>
        <div style={{
          fontFamily: ragTheme.fontSans, fontSize: 40, fontWeight: 500,
          color: ragTheme.textDim, textAlign: "center",
          opacity: interpolate(teaser, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(teaser, [0, 1], [18, 0])}px)`,
        }}>
          Hoy entendiste el{" "}
          <span style={{ color: ACCENT, fontWeight: 800, textShadow: `0 0 10px ${ACCENT}` }}>
            QUÉ
          </span>
        </div>

        <div style={{
          textAlign: "center",
          opacity: interpolate(cap2, [0, 1], [0, 1]),
          transform: `scale(${interpolate(cap2, [0, 1], [0.82, 1])})`,
        }}>
          <div style={{
            fontFamily: ragTheme.fontMono, fontSize: 90, fontWeight: 900,
            color: ACCENT, lineHeight: 1,
            textShadow: [
              `0 0 ${18 + glowPulse * 22}px ${ACCENT}`,
              `0 0 ${45 + glowPulse * 40}px ${ACCENT}77`,
              `0 0 ${90 + glowPulse * 60}px ${ACCENT}33`,
            ].join(", "),
          }}>
            Cap 2
          </div>
          <div style={{
            fontFamily: ragTheme.fontSans, fontSize: 46, fontWeight: 700,
            color: ragTheme.text, marginTop: 6,
          }}>
            el error{" "}
            <span style={{ color: ACCENT, textShadow: `0 0 12px ${ACCENT}` }}>#1</span>
          </div>
        </div>

        <div style={{ opacity: arrowOp, transform: `translateY(${bounce}px)` }}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
            style={{ filter: `drop-shadow(0 0 8px ${ACCENT})` }}>
            <path d="M28 10 L28 44 M16 32 L28 44 L40 32"
              stroke={ACCENT} strokeWidth="3.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div style={{
          fontFamily: ragTheme.fontSans, fontSize: 56, fontWeight: 900,
          color: ACCENT, letterSpacing: "6px", textTransform: "uppercase",
          textShadow: `0 0 16px ${ACCENT}, 0 0 40px ${ACCENT}88`,
          opacity: interpolate(ctaP, [0, 1], [0, 1]),
          transform: `scale(${interpolate(ctaP, [0, 1], [0.88, 1])})`,
        }}>
          SÍGUEME
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
