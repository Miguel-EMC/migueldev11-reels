import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { emcodeTheme } from "../../themes/emcode";

interface Props {
  badgeText?: string;
  badgeType?: "warning" | "success" | "tech";
  titleWords: { text: string; highlight?: boolean; highlightColor?: string }[];
  subtitle?: string;
  startFrame?: number;
}

export const KineticHook: React.FC<Props> = ({
  badgeText,
  badgeType = "tech",
  titleWords,
  subtitle,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 12, mass: 0.45, stiffness: 180 },
  });

  const getBorderAndGlow = () => {
    switch (badgeType) {
      case "warning":
        return { border: emcodeTheme.red, glow: emcodeTheme.glowRed, bg: "rgba(239, 68, 68, 0.12)", textGlow: emcodeTheme.glowRed, color: emcodeTheme.red };
      case "success":
        return { border: emcodeTheme.green, glow: emcodeTheme.glowGreen, bg: "rgba(0, 255, 65, 0.12)", textGlow: emcodeTheme.glowGreen, color: emcodeTheme.green };
      default:
        return { border: emcodeTheme.cyan, glow: emcodeTheme.glowCyan, bg: "rgba(34, 211, 238, 0.12)", textGlow: emcodeTheme.glowCyan, color: emcodeTheme.cyan };
    }
  };

  const themeStyle = getBorderAndGlow();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 16,
        opacity: entrance,
        transform: `scale(${entrance})`,
        marginBottom: 10,
      }}
    >
      {/* 1. Clean Subtle Category Tag (migueldev11 style: [ TOPIC ]) */}
      {badgeText && (
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 22,
            fontWeight: 800,
            color: themeStyle.color,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          [ {badgeText.replace(/[\[\]]/g, "")} ]
        </div>
      )}

      {/* 2. Massive Impact Banner Card */}
      <div
        style={{
          background: themeStyle.bg,
          backdropFilter: "blur(14px)",
          border: `4px solid ${themeStyle.border}`,
          borderRadius: 32,
          padding: "36px 28px",
          width: "100%",
          boxSizing: "border-box",
          boxShadow: `0 20px 50px rgba(0,0,0,0.6), ${themeStyle.glow}`,
        }}
      >
        <div
          style={{
            fontFamily: emcodeTheme.fontSans,
            fontSize: 72,
            fontWeight: 900,
            color: emcodeTheme.cream,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            textTransform: "uppercase",
          }}
        >
          {titleWords.map((word, idx) => (
            <span
              key={idx}
              style={{
                color: word.highlight ? themeStyle.color : emcodeTheme.cream,
                textShadow: word.highlight ? themeStyle.textGlow : "none",
                display: "inline-block",
                margin: "0 6px",
              }}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Subtitle */}
      {subtitle && (
        <div
          style={{
            fontFamily: emcodeTheme.fontSans,
            fontSize: 30,
            fontWeight: 600,
            color: emcodeTheme.textDim,
            lineHeight: 1.3,
            maxWidth: "92%",
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};
