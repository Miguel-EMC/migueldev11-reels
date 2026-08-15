import React from "react";
import { emcodeTheme } from "../../themes/emcode";

interface Props {
  borderColor?: string;
  glowColor?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const EmcodeCard: React.FC<Props> = ({
  borderColor = emcodeTheme.green,
  glowColor = emcodeTheme.glowGreen,
  children,
  style,
  className = "",
}) => {
  return (
    <div
      className={className}
      style={{
        background: "rgba(10, 20, 40, 0.85)",
        backdropFilter: "blur(16px)",
        border: `3px solid ${borderColor}`,
        borderRadius: 28,
        padding: "36px 32px",
        width: "100%",
        boxSizing: "border-box",
        boxShadow: `0 20px 50px rgba(0,0,0,0.6), ${glowColor ? glowColor.replace("16px", "10px") : ""}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
