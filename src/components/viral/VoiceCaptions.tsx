import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../themes/brand";

export interface CaptionItem {
  startFrame: number;
  endFrame: number;
  text: string;
  highlightWords?: string[];
  accentColor?: string;
}

interface Props {
  captions: CaptionItem[];
}

export const VoiceCaptions: React.FC<Props> = ({ captions }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find active caption
  const activeCaption = captions.find(
    (c) => frame >= c.startFrame && frame < c.endFrame
  );

  if (!activeCaption) return null;

  const localFrame = frame - activeCaption.startFrame;
  const anim = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 220, mass: 0.5 },
  });

  const accent = activeCaption.accentColor || brand.green;
  const words = activeCaption.text.split(" ");

  return (
    <div
      style={{
        position: "absolute",
        bottom: 120,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 40px",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          background: "rgba(10, 14, 26, 0.88)",
          backdropFilter: "blur(18px)",
          border: `2.5px solid ${accent}`,
          borderRadius: 24,
          padding: "16px 28px",
          maxWidth: 980,
          textAlign: "center",
          boxShadow: `0 12px 35px rgba(0,0,0,0.8), 0 0 20px ${accent}44`,
          transform: `scale(${interpolate(anim, [0, 1], [0.92, 1])}) translateY(${interpolate(anim, [0, 1], [15, 0])}px)`,
          opacity: interpolate(anim, [0, 1], [0, 1]),
        }}
      >
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 32,
            fontWeight: 900,
            lineHeight: 1.3,
            color: brand.cream,
            letterSpacing: "-0.5px",
          }}
        >
          {words.map((word, i) => {
            const cleanWord = word.replace(/[¿?¡!.,:;💀🚀🔴💥🛑🐧⚡☁️🤔💬"']/g, "").toLowerCase();
            const isHighlight =
              activeCaption.highlightWords &&
              activeCaption.highlightWords.some((hw) =>
                cleanWord.includes(hw.toLowerCase())
              );

            return (
              <span
                key={i}
                style={{
                  color: isHighlight ? accent : brand.cream,
                  textShadow: isHighlight ? `0 0 16px ${accent}` : "none",
                  fontWeight: isHighlight ? 950 : 850,
                  marginRight: 6,
                  display: "inline-block",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
