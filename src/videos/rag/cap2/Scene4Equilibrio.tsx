// Scene 4 — EL EQUILIBRIO · frames 1260-1740 (480 local frames)
// Three cards: "muy grande ❌", "punto medio ✅" (grows + glows), "muy chico ❌"
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

interface CardProps {
  label: string;
  icon: string;
  highlighted: boolean;
  lines: number;
  opacity: number;
  scale: number;
}

const Card: React.FC<CardProps> = ({ label, icon, highlighted, lines, opacity, scale }) => {
  const color = highlighted ? brand.orange : brand.cream;
  const lineHeights = Array.from({ length: lines }, (_, i) => 100 - (i * (50 / Math.max(lines - 1, 1))));

  return (
    <div style={{
      width: highlighted ? 210 : 170,
      background: highlighted ? `${brand.orange}18` : `${brand.cream}08`,
      border: `2px solid ${highlighted ? brand.orange : brand.cream}${highlighted ? "66" : "22"}`,
      borderRadius: 18,
      padding: "22px 18px",
      display: "flex", flexDirection: "column",
      alignItems: "center", gap: 14,
      opacity,
      transform: `scale(${scale})`,
      boxShadow: highlighted ? `0 0 24px ${brand.orange}44` : "none",
    }}>
      {/* Simulated chunk preview */}
      <div style={{ width: "80%", display: "flex", flexDirection: "column", gap: 5 }}>
        {lineHeights.map((w, i) => (
          <div key={i} style={{
            height: 5, borderRadius: 3,
            background: `${color}${highlighted ? "88" : "44"}`,
            width: `${w}%`,
          }} />
        ))}
      </div>

      <span style={{
        fontFamily: brand.fontSans, fontSize: highlighted ? 26 : 22, fontWeight: 700,
        color,
        textShadow: highlighted ? `0 0 10px ${brand.orange}` : "none",
        textAlign: "center",
      }}>
        {label}
      </span>

      <span style={{ fontSize: 36 }}>{icon}</span>
    </div>
  );
};

const CARDS = [
  { label: "muy grande", icon: "❌", highlighted: false, lines: 10, delay: 30  },
  { label: "punto medio", icon: "✅", highlighted: true,  lines: 5,  delay: 80  },
  { label: "muy chico",  icon: "❌", highlighted: false, lines: 2,  delay: 130 },
] as const;

export const Scene4Equilibrio: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOpacity = interpolate(
    frame, [0, 8, durationInFrames - 10, durationInFrames], [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const titleP = spring({ frame, fps, config: { damping: 14, stiffness: 90 }, durationInFrames: 22 });

  // mid card grows after initial entrance
  const midGrow = spring({ frame: frame - 200, fps, config: { damping: 12, stiffness: 80 }, durationInFrames: 25 });
  const midGlowPulse = Math.sin(frame / 10) * 0.3 + 0.7;

  return (
    <AbsoluteFill style={{ opacity: fadeOpacity }}>
      <Bg accent={brand.orange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 44,
      }}>
        <div style={{
          fontFamily: brand.fontSans, fontSize: 50, fontWeight: 800,
          color: brand.orange, textShadow: `0 0 12px ${brand.orange}`,
          textAlign: "center",
          opacity: interpolate(titleP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(titleP, [0, 1], [-16, 0])}px)`,
        }}>
          El tamaño importa
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {CARDS.map(({ label, icon, highlighted, lines, delay }, i) => {
            const p = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 100 }, durationInFrames: 22 });
            const baseScale = interpolate(p, [0, 1], [0.7, 1]);
            const extraScale = highlighted ? interpolate(midGrow, [0, 1], [1, 1.08]) : 1;
            const glowScale = highlighted ? 1 + Math.sin(frame / 10) * 0.02 * midGrow : 0;

            return (
              <div key={label} style={{
                filter: highlighted && midGrow > 0.5
                  ? `drop-shadow(0 0 ${12 * midGlowPulse * midGrow}px ${brand.orange})`
                  : "none",
              }}>
                <Card
                  label={label}
                  icon={icon}
                  highlighted={highlighted}
                  lines={lines}
                  opacity={interpolate(p, [0, 1], [0, 1])}
                  scale={baseScale * extraScale * (1 + glowScale)}
                />
              </div>
            );
          })}
        </div>

        {/* subtitle */}
        <div style={{
          fontFamily: brand.fontSans, fontSize: 30,
          color: brand.textDim, textAlign: "center",
          opacity: interpolate(
            spring({ frame: frame - 260, fps, config: { damping: 14, stiffness: 100 }, durationInFrames: 20 }),
            [0, 1], [0, 1],
          ),
        }}>
          el truco es el{" "}
          <span style={{ color: brand.orange, fontWeight: 700, textShadow: `0 0 8px ${brand.orange}` }}>
            punto medio
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
