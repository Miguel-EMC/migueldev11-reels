import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { Bg } from "../../../shared/Bg";

export const Scene4Equilibrio: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 12 } });

  const cards = [
    { label: "muy grande", icon: "❌", color: brand.cream, highlight: false },
    { label: "punto medio", icon: "✅", color: brand.orange, highlight: true },
    { label: "muy chico", icon: "❌", color: brand.cream, highlight: false },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Bg accent={brand.orange} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 60, gap: 60,
      }}>
        <div style={{
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [-20, 0])}px)`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: brand.fontSans,
            fontSize: 80,
            fontWeight: 900,
            color: brand.cream,
            textShadow: `0 0 20px rgba(255,255,255,0.2)`,
          }}>
            BUSCA EL <span style={{ color: brand.orange }}>EQUILIBRIO</span>
          </div>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
          width: "100%",
          alignItems: "center",
        }}>
          {cards.map((card, i) => {
            const cardSpring = spring({ frame: frame - 40 - i * 15, fps, config: { damping: 14 } });
            const isHighlight = card.highlight;
            
            return (
              <div key={card.label} style={{
                width: 600,
                height: 140,
                background: isHighlight ? `${brand.orange}15` : `rgba(255,255,255,0.05)`,
                border: `2px solid ${isHighlight ? brand.orange : brand.cream + "33"}`,
                borderRadius: 24,
                display: "flex",
                alignItems: "center",
                padding: "0 40px",
                justifyContent: "space-between",
                opacity: cardSpring,
                transform: `scale(${cardSpring * (isHighlight ? 1.1 : 1)}) translateX(${interpolate(cardSpring, [0, 1], [100, 0])}px)`,
                boxShadow: isHighlight ? brand.glowOrange : "none",
                zIndex: isHighlight ? 10 : 1,
              }}>
                <div style={{
                  fontFamily: brand.fontSans,
                  fontSize: 48,
                  fontWeight: 800,
                  color: isHighlight ? brand.orange : brand.cream,
                  textTransform: "uppercase",
                }}>
                  {card.label}
                </div>
                <div style={{
                  fontSize: 60,
                }}>
                  {card.icon}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
