import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { Bg } from "../shared/Bg";
import { GridBackground } from "../components/GridBackground";

export const RoadmapGancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring animations
  const textEntrance = spring({
    frame,
    fps,
    config: { damping: 11, stiffness: 80 },
  });

  const subtitleEntrance = spring({
    frame: frame - 30, // Starts at 1 second (30 frames)
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // Slow continuous zoom/drift (camera effect)
  const cameraScale = interpolate(frame, [0, 90], [1.02, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cameraTranslateY = interpolate(frame, [0, 90], [0, -15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      {/* Background with drift */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${cameraScale}) translateY(${cameraTranslateY}px)`,
        }}
      >
        <Bg accent={brand.orange} />
        <GridBackground color={brand.orange} />
      </div>

      {/* Glow effect that breathes */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${brand.orange}25 0%, transparent 70%)`,
          filter: "blur(40px)",
          opacity: 0.6 + Math.sin(frame / 10) * 0.15,
          pointerEvents: "none",
        }}
      />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 60px",
          zIndex: 10,
        }}
      >
        {/* Subtitle brand tag (appears after 1 sec) */}
        {frame >= 30 && (
          <div
            style={{
              fontFamily: brand.fontMono,
              fontSize: 34,
              fontWeight: 800,
              color: brand.orange,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 45,
              opacity: subtitleEntrance,
              transform: `scale(${subtitleEntrance})`,
              textShadow: brand.glowOrange,
            }}
          >
            [ ROADMAP 2026 ]
          </div>
        )}

        {/* Hook Card */}
        <div
          style={{
            background: "rgba(10, 14, 26, 0.75)",
            backdropFilter: "blur(20px)",
            border: `3px solid ${brand.orange}`,
            borderRadius: 36,
            padding: "60px 40px",
            width: "95%",
            textAlign: "center",
            opacity: textEntrance,
            transform: `scale(${textEntrance}) translateY(${interpolate(
              textEntrance,
              [0, 1],
              [50, 0]
            )}px)`,
            boxShadow: `0 20px 50px rgba(255, 122, 26, 0.15), ${brand.glowOrange}`,
          }}
        >
          <div
            style={{
              fontFamily: brand.fontSans,
              fontSize: 90,
              fontWeight: 900,
              color: brand.cream,
              lineHeight: 1.15,
              letterSpacing: "-2px",
            }}
          >
            Lo que <span style={{ color: brand.orange, textShadow: brand.glowOrange }}>estudiaría</span>
            <br />
            si empezara en
            <br />
            <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>IA HOY</span> 👇
          </div>
        </div>

        {/* Subtle breathing tip at the bottom */}
        <div
          style={{
            marginTop: 70,
            fontFamily: brand.fontMono,
            fontSize: 28,
            fontWeight: 600,
            color: brand.textDim,
            opacity: interpolate(frame, [15, 30], [0, 0.8], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `translateY(${Math.sin(frame / 8) * 6}px)`,
          }}
        >
          Guarda este video 💾
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
