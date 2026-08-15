import React from "react";
import { AbsoluteFill } from "remotion";
import { brand } from "../../themes/brand";
import { GridBackground } from "../GridBackground";
import { ParticleField } from "../ParticleField";

interface Props {
  categoryTag?: string;
  gridColor?: string;
  children: React.ReactNode;
}

export const EmcodeSceneWrapper: React.FC<Props> = ({
  categoryTag = "EMCODE ARCHITECTURE",
  gridColor = brand.green,
  children,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden", fontFamily: brand.fontSans }}>
      {/* 1. 3D Perspective Grid Background & Particles */}
      <GridBackground color={gridColor} />
      <ParticleField />

      {/* 2. Deep Radial Dark Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, transparent 30%, ${brand.bg}f5 95%)`,
          pointerEvents: "none",
        }}
      />

      {/* 3. Full Height 1080x1920 Content Fill */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 50px 80px 50px",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        {/* Top Category Watermark */}
        <div
          style={{
            fontFamily: brand.fontMono,
            fontSize: 26,
            fontWeight: 900,
            color: gridColor,
            letterSpacing: 6,
            textTransform: "uppercase",
            textShadow: `0 0 14px ${gridColor}88`,
          }}
        >
          [ {categoryTag} ]
        </div>

        {/* Full-Height Vertical Space Filler (Children span from top to bottom) */}
        <div
          style={{
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "30px 0",
          }}
        >
          {children}
        </div>

        {/* Bottom Handle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            fontFamily: brand.fontMono,
            fontSize: 30,
            fontWeight: 900,
            color: brand.green,
            textShadow: brand.glowGreen,
          }}
        >
          @emcode
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
