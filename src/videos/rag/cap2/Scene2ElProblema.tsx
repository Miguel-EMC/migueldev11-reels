// Scene 2 — EL PROBLEMA · frames 240-720 (480 local frames)
// Big doc tries to fit into small context window box → bounces
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

// Big document SVG
const BigDoc: React.FC<{ color: string; squish: number }> = ({ color, squish }) => (
  <svg width={120} height={160 - squish * 40} viewBox="0 0 120 160" fill="none"
    style={{ filter: `drop-shadow(0 0 8px ${color}88)`, transition: "height 0s" }}>
    <rect x="6" y="4" width="108" height="152" rx="6" stroke={color} strokeWidth="2.5" fill={`${color}12`} />
    <path d="M84 4 L84 24 L108 24 L84 4Z" stroke={color} strokeWidth="2" fill={`${color}22`} />
    <line x1="20" y1="44" x2="100" y2="44" stroke={color} strokeWidth="2" opacity="0.6" />
    <line x1="20" y1="58" x2="100" y2="58" stroke={color} strokeWidth="2" opacity="0.6" />
    <line x1="20" y1="72" x2="100" y2="72" stroke={color} strokeWidth="2" opacity="0.5" />
    <line x1="20" y1="86" x2="100" y2="86" stroke={color} strokeWidth="2" opacity="0.5" />
    <line x1="20" y1="100" x2="100" y2="100" stroke={color} strokeWidth="2" opacity="0.4" />
    <line x1="20" y1="114" x2="80"  y2="114" stroke={color} strokeWidth="2" opacity="0.3" />
    <line x1="20" y1="128" x2="90"  y2="128" stroke={color} strokeWidth="2" opacity="0.3" />
  </svg>
);

// Context window — small box
const ContextBox: React.FC<{ color: string }> = ({ color }) => (
  <div style={{
    width: 90, height: 70,
    border: `3px solid ${color}`,
    borderRadius: 10,
    background: `${color}10`,
    boxShadow: `0 0 14px ${color}66, inset 0 0 20px ${color}08`,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexDirection: "column", gap: 4,
  }}>
    <span style={{ fontFamily: brand.fontMono, fontSize: 13, color, opacity: 0.9 }}>límite</span>
    <span style={{ fontFamily: brand.fontMono, fontSize: 11, color, opacity: 0.65 }}>contexto</span>
  </div>
);

export const Scene2ElProblema: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const titleP = spring({ frame, fps, config: { damping: 14, stiffness: 90 }, durationInFrames: 22 });

  // Document bouncing: enters from top, hits the box, bounces
  const docPhase = interpolate(frame, [30, 130, 160, 200, 220, 260, 270, 310], [0, 1, 0.85, 1, 0.9, 1, 0.95, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const docY = interpolate(docPhase, [0, 1], [-300, 0]);

  // squish on impact
  const squish = interpolate(frame, [128, 140, 155], [0, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // badge appears after bounce
  const badgeP = spring({ frame: frame - 220, fps, config: { damping: 14, stiffness: 100 }, durationInFrames: 20 });
  const labelP  = spring({ frame: frame - 260, fps, config: { damping: 14, stiffness: 100 }, durationInFrames: 20 });

  const hitFlash = interpolate(frame, [128, 138, 150], [0, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={brand.orange} />

      {/* hit flash overlay */}
      <AbsoluteFill style={{ background: `${brand.orange}${Math.round(hitFlash * 0x22).toString(16).padStart(2,"0")}`, pointerEvents: "none" }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 32,
      }}>
        <div style={{
          fontFamily: brand.fontSans, fontSize: 50, fontWeight: 800,
          color: brand.orange, textShadow: `0 0 12px ${brand.orange}`,
          opacity: interpolate(titleP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(titleP, [0, 1], [-16, 0])}px)`,
          textAlign: "center",
        }}>
          El problema del contexto
        </div>

        {/* Animation area */}
        <div style={{ position: "relative", width: 280, height: 320, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          {/* Document flying down */}
          <div style={{
            position: "absolute",
            top: docY,
            left: "50%",
            transform: `translateX(-50%) scaleY(${1 - squish * 0.18})`,
          }}>
            <BigDoc color={brand.cream} squish={squish} />
          </div>

          {/* Context window box at bottom */}
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)" }}>
            <ContextBox color={brand.orange} />
          </div>
        </div>

        {/* "300 páginas" badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          opacity: interpolate(badgeP, [0, 1], [0, 1]),
          transform: `scale(${interpolate(badgeP, [0, 1], [0.8, 1])})`,
        }}>
          <div style={{
            background: `${brand.orange}18`, border: `2px solid ${brand.orange}55`,
            borderRadius: 14, padding: "14px 28px",
          }}>
            <span style={{ fontFamily: brand.fontMono, fontSize: 48, fontWeight: 900, color: brand.orange }}>
              300
            </span>
            <span style={{ fontFamily: brand.fontSans, fontSize: 28, color: brand.cream, opacity: 0.8, marginLeft: 8 }}>
              páginas
            </span>
          </div>
          <span style={{ fontFamily: brand.fontMono, fontSize: 48, color: brand.orange }}>≠</span>
          <div style={{
            background: `${brand.orange}10`, border: `2px solid ${brand.orange}33`,
            borderRadius: 14, padding: "14px 22px",
          }}>
            <span style={{ fontFamily: brand.fontMono, fontSize: 30, color: brand.cream, opacity: 0.6 }}>
              cabe
            </span>
          </div>
        </div>

        {/* "límite de contexto" label */}
        <div style={{
          fontFamily: brand.fontMono, fontSize: 28,
          color: brand.textDim,
          opacity: interpolate(labelP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(labelP, [0, 1], [12, 0])}px)`,
        }}>
          límite de{" "}
          <span style={{ color: brand.orange, textShadow: `0 0 8px ${brand.orange}` }}>contexto</span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
