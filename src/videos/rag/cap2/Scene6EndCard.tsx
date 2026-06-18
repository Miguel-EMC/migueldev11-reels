// Scene 6 — CTA + END CARD · frames 2160-2550 (390 local frames)
// "Cap 3 → Embeddings" + big @migueldev11 + SÍGUEME
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene6EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const teaserP  = spring({ frame,             fps, config: { damping: 14, stiffness: 80 }, durationInFrames: 22 });
  const cap3P    = spring({ frame: frame - 50,  fps, config: { damping: 14, stiffness: 80 }, durationInFrames: 22 });
  const arrowOp  = interpolate(frame, [120, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const handleP  = spring({ frame: frame - 160, fps, config: { damping: 12, stiffness: 75 }, durationInFrames: 26 });
  const ctaP     = spring({ frame: frame - 230, fps, config: { damping: 14, stiffness: 90 }, durationInFrames: 22 });

  const bounce    = Math.sin(frame / 9) * 8;
  const glowPulse = Math.sin(frame / 11) * 0.4 + 0.6;

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={brand.orange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 24,
      }}>
        {/* "Ya tienes el texto en pedazos" teaser */}
        <div style={{
          fontFamily: brand.fontSans, fontSize: 36, fontWeight: 400,
          color: brand.textDim, textAlign: "center", maxWidth: 780,
          opacity: interpolate(teaserP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(teaserP, [0, 1], [16, 0])}px)`,
        }}>
          La máquina todavía no entiende qué significan…
        </div>

        {/* "Cap 3 → Embeddings" */}
        <div style={{
          textAlign: "center",
          opacity: interpolate(cap3P, [0, 1], [0, 1]),
          transform: `scale(${interpolate(cap3P, [0, 1], [0.82, 1])})`,
        }}>
          <div style={{
            fontFamily: brand.fontMono, fontSize: 82, fontWeight: 900,
            color: brand.orange, lineHeight: 1,
            textShadow: [
              `0 0 ${18 + glowPulse * 20}px ${brand.orange}`,
              `0 0 ${44 + glowPulse * 36}px ${brand.orange}77`,
              `0 0 ${88 + glowPulse * 55}px ${brand.orange}33`,
            ].join(", "),
          }}>
            Cap 3
          </div>
          <div style={{
            fontFamily: brand.fontSans, fontSize: 42, fontWeight: 700,
            color: brand.cream, marginTop: 4,
          }}>
            →{" "}
            <span style={{ color: brand.orange, textShadow: `0 0 10px ${brand.orange}` }}>
              Embeddings
            </span>
          </div>
        </div>

        {/* Bouncing down arrow */}
        <div style={{ opacity: arrowOp, transform: `translateY(${bounce}px)` }}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
            style={{ filter: `drop-shadow(0 0 8px ${brand.orange})` }}>
            <path d="M26 10 L26 40 M14 30 L26 40 L38 30"
              stroke={brand.orange} strokeWidth="3.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Divider */}
        <div style={{
          width: 200, height: 2, borderRadius: 1,
          background: `linear-gradient(90deg, transparent, ${brand.orange}, transparent)`,
          opacity: interpolate(handleP, [0, 1], [0, 0.6]),
        }} />

        {/* @migueldev11 — big */}
        <div style={{
          opacity: interpolate(handleP, [0, 1], [0, 1]),
          transform: `scale(${interpolate(handleP, [0, 1], [0.85, 1])})`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: brand.fontMono, fontSize: 66, fontWeight: 900,
            color: brand.orange,
            textShadow: `0 0 ${16 * glowPulse}px ${brand.orange}, 0 0 ${40 * glowPulse}px ${brand.orange}88`,
            letterSpacing: "-1px",
          }}>
            {brand.handle}
          </div>
        </div>

        {/* SÍGUEME */}
        <div style={{
          fontFamily: brand.fontSans, fontSize: 50, fontWeight: 900,
          color: brand.cream, letterSpacing: "6px", textTransform: "uppercase",
          textShadow: `0 0 10px ${brand.cream}44`,
          opacity: interpolate(ctaP, [0, 1], [0, 1]),
          transform: `scale(${interpolate(ctaP, [0, 1], [0.9, 1])})`,
        }}>
          SÍGUEME
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
