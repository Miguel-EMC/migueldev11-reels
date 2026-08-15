import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { emcodeTheme } from "../../themes/emcode";
import { GridBackground } from "../GridBackground";
import { ParticleField } from "../ParticleField";

interface Props {
  topicBadge?: string;
  gridColor?: string;
  children: React.ReactNode;
  showHandle?: boolean;
}

export const EmcodeSceneLayout: React.FC<Props> = ({
  gridColor = emcodeTheme.green,
  children,
  showHandle = true,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Top sleek story progress bar
  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: emcodeTheme.bg, overflow: "hidden" }}>
      {/* 1. 3D Moving Perspective Grid Floor */}
      <GridBackground color={gridColor} />
      <ParticleField />

      {/* 2. Radial Dark Vignette for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, transparent 35%, ${emcodeTheme.bg}ee 95%)`,
          pointerEvents: "none",
        }}
      />

      {/* 3. Sleek Top Story Progress Bar (No bulky header) */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 6, backgroundColor: "rgba(0,0,0,0.5)", zIndex: 100 }}>
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: emcodeTheme.green,
            boxShadow: emcodeTheme.glowGreen,
          }}
        />
      </div>

      {/* 4. Full Canvas Clean Container (Zero header clutter, pure cinematic focus) */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 50px 60px 50px",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        {/* Center Main Content Area: Perfectly balanced across the vertical screen */}
        <div style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {children}
        </div>

        {/* 5. Minimalist Bottom Watermark */}
        {showHandle && (
          <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: emcodeTheme.green, boxShadow: emcodeTheme.glowGreen }} />
              <span style={{ fontFamily: emcodeTheme.fontMono, fontSize: 18, color: emcodeTheme.textDim, fontWeight: 700 }}>
                EMCODE
              </span>
            </div>
            <span style={{
              fontFamily: emcodeTheme.fontMono,
              fontSize: 24,
              fontWeight: 900,
              color: emcodeTheme.green,
              textShadow: emcodeTheme.glowGreen,
              letterSpacing: 1,
            }}>
              @emcode
            </span>
          </div>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
