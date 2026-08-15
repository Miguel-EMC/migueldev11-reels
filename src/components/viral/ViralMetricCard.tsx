import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { emcodeTheme } from "../../themes/emcode";

interface Props {
  tag: string;
  value: string;
  description: string;
  type?: "danger" | "success" | "neutral";
  startFrame?: number;
}

export const ViralMetricCard: React.FC<Props> = ({
  tag,
  value,
  description,
  type = "neutral",
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 12, mass: 0.45, stiffness: 180 },
  });

  const getColors = () => {
    switch (type) {
      case "danger":
        return {
          border: emcodeTheme.red,
          glow: emcodeTheme.glowRed,
          bg: "rgba(239, 68, 68, 0.12)",
          text: emcodeTheme.red,
          textGlow: emcodeTheme.glowRed,
        };
      case "success":
        return {
          border: emcodeTheme.green,
          glow: emcodeTheme.glowGreen,
          bg: "rgba(0, 255, 65, 0.12)",
          text: emcodeTheme.green,
          textGlow: emcodeTheme.glowGreen,
        };
      default:
        return {
          border: emcodeTheme.cyan,
          glow: emcodeTheme.glowCyan,
          bg: "rgba(34, 211, 238, 0.12)",
          text: emcodeTheme.cyan,
          textGlow: emcodeTheme.glowCyan,
        };
    }
  };

  const c = getColors();

  return (
    <div
      style={{
        background: c.bg,
        backdropFilter: "blur(14px)",
        border: `3px solid ${c.border}`,
        borderRadius: 24,
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        boxShadow: `0 15px 35px rgba(0,0,0,0.5), ${c.glow ? c.glow.replace("16px", "8px") : ""}`,
        opacity: entrance,
        transform: `scale(${Math.max(0, entrance)})`,
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div
        style={{
          fontFamily: emcodeTheme.fontMono,
          fontSize: 15,
          fontWeight: 900,
          color: c.text,
          textTransform: "uppercase",
          letterSpacing: 2,
          background: "rgba(0,0,0,0.4)",
          border: `1px solid ${c.border}66`,
          borderRadius: 8,
          padding: "4px 12px",
          width: "fit-content",
        }}
      >
        {tag}
      </div>

      <div
        style={{
          fontFamily: emcodeTheme.fontSans,
          fontSize: 34,
          fontWeight: 900,
          color: emcodeTheme.cream,
          lineHeight: 1.15,
          textShadow: c.textGlow,
        }}
      >
        {value}
      </div>

      <div
        style={{
          fontFamily: emcodeTheme.fontSans,
          fontSize: 18,
          fontWeight: 500,
          color: emcodeTheme.textDim,
          lineHeight: 1.3,
        }}
      >
        {description}
      </div>
    </div>
  );
};
