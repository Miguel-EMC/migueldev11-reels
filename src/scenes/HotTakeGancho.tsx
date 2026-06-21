import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { Bg } from "../shared/Bg";
import { GridBackground } from "../components/GridBackground";

export const HotTakeGancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring animations
  const cardEntrance = spring({
    frame,
    fps,
    config: { damping: 11, stiffness: 85 },
  });

  const badgeEntrance = spring({
    frame: frame - 30, // Entrance at second 1 (30 frames)
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // Camera drift
  const cameraScale = interpolate(frame, [0, 90], [1.02, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cameraTranslateY = interpolate(frame, [0, 90], [0, -15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Vibrate / Shake effect for tension on the word "ESTO" (starts after frame 15)
  const shakeX = frame > 15 ? Math.sin(frame * 1.5) * 4 : 0;
  const shakeY = frame > 15 ? Math.cos(frame * 1.5) * 3 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      {/* Camera-drifted Background */}
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

      {/* Breathing Neon Radial Glow */}
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
          opacity: 0.6 + Math.sin(frame / 8) * 0.15,
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
              letterSpacing: 5,
              textTransform: "uppercase",
              marginBottom: 45,
              opacity: badgeEntrance,
              transform: `scale(${badgeEntrance})`,
              textShadow: brand.glowOrange,
            }}
          >
            [ HOT TAKE ]
          </div>
        )}

        {/* Main Hook Card */}
        <div
          style={{
            background: "rgba(10, 14, 26, 0.75)",
            backdropFilter: "blur(20px)",
            border: `3px solid ${brand.orange}`,
            borderRadius: 36,
            padding: "55px 40px",
            width: "95%",
            textAlign: "center",
            opacity: cardEntrance,
            transform: `scale(${cardEntrance}) translateY(${interpolate(
              cardEntrance,
              [0, 1],
              [40, 0]
            )}px)`,
            boxShadow: `0 20px 50px rgba(255, 122, 26, 0.15), ${brand.glowOrange}`,
          }}
        >
          <div
            style={{
              fontFamily: brand.fontSans,
              fontSize: 82,
              fontWeight: 900,
              color: brand.cream,
              lineHeight: 1.15,
              letterSpacing: "-2px",
            }}
          >
            La IA <span style={{ color: brand.cream, textShadow: "none" }}>NO</span> te va a quitar el
            <br />
            trabajo de dev...
            <br />
            <div style={{ marginTop: 20 }}>
              Pero{" "}
              <span
                style={{
                  display: "inline-block",
                  color: brand.orange,
                  textShadow: brand.glowOrange,
                  transform: `translate(${shakeX}px, ${shakeY}px)`,
                }}
              >
                ESTO
              </span>{" "}
              sí 👇
            </div>
          </div>
        </div>

        {/* Scroll Tip */}
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
          Debate abierto 💬
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
