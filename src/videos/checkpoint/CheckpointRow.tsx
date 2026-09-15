import React from "react";
import { emcodeTheme } from "../../themes/emcode";

interface CheckpointRowProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  accent?: string;
}

// Reusable glass row used for bullet / step / feature lists across slides.
export const CheckpointRow: React.FC<CheckpointRowProps> = ({
  icon,
  children,
  accent = emcodeTheme.cyan,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "18px 26px",
        borderRadius: 20,
        backgroundColor: "rgba(20, 24, 30, 0.7)",
        border: `1.5px solid ${accent}44`,
        boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
      }}
    >
      <div
        style={{
          fontSize: 32,
          lineHeight: 1,
          flexShrink: 0,
          width: 44,
          textAlign: "center",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: emcodeTheme.fontMono,
          fontSize: 26,
          fontWeight: 700,
          color: emcodeTheme.cream,
          lineHeight: 1.35,
        }}
      >
        {children}
      </div>
    </div>
  );
};
