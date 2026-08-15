import React from "react";
import { brand } from "../../themes/brand";

interface Props {
  borderColor?: string;
  glowColor?: string;
  entrance?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const EmcodeGlassCard: React.FC<Props> = ({
  borderColor = brand.green,
  glowColor = brand.glowGreen,
  entrance = 1,
  children,
  style,
}) => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgba(10, 14, 26, 0.78)",
        backdropFilter: "blur(20px)",
        border: `2.5px solid ${borderColor}`,
        borderRadius: 36,
        padding: "45px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transform: `scale(${entrance})`,
        boxShadow: `0 20px 60px rgba(0, 0, 0, 0.6), ${glowColor ? glowColor.split(",")[0] + "44" : ""}`,
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
