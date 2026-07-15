import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";

export const Scene1Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textEntrance = spring({
    frame,
    fps,
    config: { damping: 11, stiffness: 80 },
  });

  const badgeEntrance = spring({
    frame: frame - 25,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  const cameraScale = interpolate(frame, [0, 90], [1.02, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${cameraScale})` }}>
        <GridBackground color={brand.orange} />
        <ParticleField />
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          background: `radial-gradient(circle, ${brand.orange}22 0%, transparent 70%)`,
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
        {/* Badge */}
        <div
          style={{
            fontFamily: brand.fontMono,
            fontSize: 34,
            fontWeight: 800,
            color: brand.orange,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 45,
            opacity: badgeEntrance,
            transform: `scale(${badgeEntrance})`,
            textShadow: brand.glowOrange,
          }}
        >
          [ VS CODE HACKS ]
        </div>

        {/* Hook Card */}
        <div
          style={{
            background: "rgba(10, 14, 26, 0.75)",
            backdropFilter: "blur(20px)",
            border: `3px solid ${brand.orange}`,
            borderRadius: 36,
            padding: "60px 45px",
            width: "95%",
            textAlign: "center",
            opacity: textEntrance,
            transform: `scale(${textEntrance}) translateY(${interpolate(
              textEntrance,
              [0, 1],
              [40, 0]
            )}px)`,
            boxShadow: `0 20px 50px rgba(255, 122, 26, 0.15), ${brand.glowOrange}`,
          }}
        >
          <div
            style={{
              fontFamily: brand.fontSans,
              fontSize: 80,
              fontWeight: 900,
              color: brand.cream,
              lineHeight: 1.15,
              letterSpacing: "-2px",
            }}
          >
            5 Extensiones
            <br />
            de VS Code que
            <br />
            <span
              style={{
                fontSize: 96,
                color: brand.orange,
                textShadow: brand.glowOrange,
                display: "inline-block",
                margin: "15px 0",
              }}
            >
              DEBES
            </span>{" "}
            instalar 🚀
          </div>
        </div>

        {/* Action Tip */}
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
