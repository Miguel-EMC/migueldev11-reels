import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  const badgeEntrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 11 },
  });

  const cameraScale = interpolate(frame, [0, 180], [1.02, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      {/* Background with subtle zoom */}
      <div style={{ position: "absolute", inset: 0, transform: `scale(${cameraScale})` }}>
        <GridBackground color={brand.green} />
        <ParticleField />
      </div>

      {/* Glow effect */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          background: `radial-gradient(circle, ${brand.green}18 0%, transparent 70%)`,
          filter: "blur(30px)",
          opacity: 0.6 + Math.sin(frame / 10) * 0.1,
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
        }}
      >
        {/* Category Badge */}
        <div
          style={{
            fontFamily: brand.fontMono,
            fontSize: 32,
            fontWeight: 800,
            color: brand.green,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 40,
            opacity: badgeEntrance,
            transform: `scale(${badgeEntrance})`,
            textShadow: brand.glowGreen,
          }}
        >
          [ MODEL CONTEXT PROTOCOL ]
        </div>

        {/* Hook Card */}
        <div
          style={{
            background: "rgba(10, 14, 26, 0.75)",
            backdropFilter: "blur(20px)",
            border: `3px solid ${brand.green}`,
            borderRadius: 36,
            padding: "60px 45px",
            width: "95%",
            textAlign: "center",
            opacity: entrance,
            transform: `scale(${entrance}) translateY(${interpolate(
              entrance,
              [0, 1],
              [40, 0]
            )}px)`,
            boxShadow: `0 20px 50px rgba(0, 255, 65, 0.15), ${brand.glowGreen}`,
          }}
        >
          <div
            style={{
              fontFamily: brand.fontSans,
              fontSize: 84,
              fontWeight: 900,
              color: brand.cream,
              lineHeight: 1.15,
              letterSpacing: "-2px",
            }}
          >
            ¿Qué es MCP?
            <br />
            <span
              style={{
                fontSize: 66,
                color: brand.cyan,
                textShadow: brand.glowCyan,
                display: "inline-block",
                margin: "15px 0",
                fontWeight: 800,
              }}
            >
              Explicado en
            </span>
            <br />
            <span
              style={{
                fontSize: 120,
                color: brand.green,
                textShadow: brand.glowGreen,
                fontWeight: 900,
              }}
            >
              30 SEGUNDOS
            </span>{" "}
            ⚡
          </div>
        </div>

        <div
          style={{
            marginTop: 70,
            fontFamily: brand.fontMono,
            fontSize: 28,
            fontWeight: 600,
            color: brand.textDim,
            opacity: interpolate(frame, [25, 40], [0, 0.8], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `translateY(${Math.sin(frame / 8) * 6}px)`,
          }}
        >
          La revolución de la IA 🤖
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
