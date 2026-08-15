import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { brand } from "../../themes/brand";

interface Props {
  categoryTag?: string;
  accentColor?: string;
  glowColor?: string;
  children: React.ReactNode;
}

export const EmcodeReelContainer: React.FC<Props> = ({
  categoryTag = "EMCODE ARCHITECTURE",
  accentColor = brand.green,
  glowColor = brand.glowGreen,
  children,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#04060b", overflow: "hidden", fontFamily: brand.fontSans }}>
      {/* 1. Cyber Grid & Radial Glowing Spheres */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          width: 800,
          height: 800,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${accentColor}14 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "40%",
          width: 600,
          height: 600,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${brand.cyan}10 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Perspective Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: -200,
          backgroundImage: `
            linear-gradient(to right, ${accentColor}18 1px, transparent 1px),
            linear-gradient(to bottom, ${accentColor}18 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `perspective(1000px) rotateX(65deg) translateY(${(frame * 2.5) % 80}px)`,
          maskImage: "linear-gradient(to bottom, transparent 10%, black 50%, black 85%, transparent)",
          opacity: 0.85,
        }}
      />

      {/* Top Clean Brand Watermark (migueldev11 signature, NO timeline) */}
      <div
        style={{
          position: "absolute",
          top: 85,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          fontFamily: brand.fontMono,
          fontSize: 26,
          fontWeight: 900,
          color: accentColor,
          letterSpacing: 6,
          textTransform: "uppercase",
          textShadow: `0 0 14px ${accentColor}88`,
          zIndex: 200,
        }}
      >
        [ {categoryTag} ]
      </div>

      {/* Center Screen Content (Fills the screen) */}
      <AbsoluteFill
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 50px",
          boxSizing: "border-box",
        }}
      >
        {children}
      </AbsoluteFill>

      {/* Bottom Clean Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: 75,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          fontFamily: brand.fontMono,
          fontSize: 26,
          fontWeight: 900,
          color: brand.cream,
          opacity: 0.9,
          zIndex: 200,
        }}
      >
        <span style={{ color: accentColor, textShadow: `0 0 12px ${accentColor}` }}>@emcode</span>
      </div>
    </AbsoluteFill>
  );
};
