import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { Bg } from "../shared/Bg";
import { GridBackground } from "../components/GridBackground";

export const ToolsCierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // TIMINGS (relative to this scene which lasts 210 frames)
  // 0 - 120: CTA (save & question bait)
  // 120 - 210: End Card ("@migueldev11 Sígueme")
  // 180 - 210: Fade out for loop connection
  
  const isCtaPhase = frame < 120;
  const isEndCardPhase = frame >= 120;

  // Spring entrances
  const ctaEntrance = spring({
    frame,
    fps,
    config: { damping: 11, stiffness: 80 },
  });

  const endCardEntrance = spring({
    frame: frame - 120,
    fps,
    config: { damping: 12, stiffness: 85 },
  });

  // CTA exit fade (frames 110-120)
  const ctaOpacity = interpolate(frame, [110, 120], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // End card loop fade-out (frames 180-210)
  const endCardOpacity = interpolate(frame, [180, 210], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Seamless loop camera drift reset (reaches scale 1.02 and translate 0 at frame 210)
  const cameraScale = interpolate(
    frame,
    [0, 120, 180, 210],
    [1.15, 1.18, 1.05, 1.02],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const cameraTranslateY = interpolate(
    frame,
    [0, 120, 180, 210],
    [-30, -38, -5, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      {/* Background drift */}
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
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          background: `radial-gradient(circle, ${brand.orange}20 0%, transparent 70%)`,
          filter: "blur(40px)",
          opacity: 0.7 + Math.sin(frame / 12) * 0.1,
          pointerEvents: "none",
        }}
      />

      {/* CTA PHASE */}
      {isCtaPhase && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            opacity: ctaOpacity,
            zIndex: 10,
          }}
        >
          {/* CTA Card */}
          <div
            style={{
              background: "rgba(10, 14, 26, 0.8)",
              backdropFilter: "blur(20px)",
              border: `3px solid ${brand.orange}`,
              borderRadius: 36,
              padding: "60px 40px",
              width: "95%",
              textAlign: "center",
              opacity: ctaEntrance,
              transform: `scale(${ctaEntrance}) translateY(${interpolate(
                ctaEntrance,
                [0, 1],
                [40, 0]
              )}px)`,
              boxShadow: `0 20px 40px rgba(255, 122, 26, 0.15), ${brand.glowOrange}`,
            }}
          >
            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 66,
                fontWeight: 900,
                color: brand.cream,
                lineHeight: 1.25,
                marginBottom: 35,
              }}
            >
              Guarda esto para después 💾
            </div>

            <div
              style={{
                width: "80%",
                height: 2,
                background: "rgba(255, 255, 255, 0.15)",
                margin: "0 auto 35px auto",
              }}
            />

            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 54,
                fontWeight: 800,
                color: brand.cyan,
                textShadow: brand.glowCyan,
                lineHeight: 1.2,
              }}
            >
              ¿Cuál ya usas? 👇
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* END CARD PHASE */}
      {isEndCardPhase && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            opacity: endCardOpacity,
            zIndex: 10,
          }}
        >
          {/* Brand Card */}
          <div
            style={{
              background: "rgba(10, 14, 26, 0.8)",
              backdropFilter: "blur(20px)",
              border: `3px solid ${brand.orange}`,
              borderRadius: 36,
              padding: "70px 50px",
              width: "90%",
              textAlign: "center",
              opacity: endCardEntrance,
              transform: `scale(${endCardEntrance}) translateY(${interpolate(
                endCardEntrance,
                [0, 1],
                [30, 0]
              )}px)`,
              boxShadow: `0 25px 50px rgba(255, 122, 26, 0.2), ${brand.glowOrange}`,
            }}
          >
            <div
              style={{
                fontFamily: brand.fontMono,
                fontSize: 26,
                fontWeight: 700,
                color: brand.cyan,
                letterSpacing: 4,
                textTransform: "uppercase",
                marginBottom: 25,
                textShadow: brand.glowCyan,
              }}
            >
              [ DEV TECHS ]
            </div>

            <div
              style={{
                fontFamily: brand.fontMono,
                fontSize: 76,
                fontWeight: 900,
                color: brand.orange,
                textShadow: brand.glowOrange,
                marginBottom: 40,
                letterSpacing: "-1px",
              }}
            >
              {brand.handle}
            </div>

            <div
              style={{
                width: "60%",
                height: 2,
                background: "rgba(255, 255, 255, 0.15)",
                margin: "0 auto 40px auto",
              }}
            />

            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 60,
                fontWeight: 900,
                color: brand.cream,
                letterSpacing: "1px",
                transform: `scale(${1 + Math.sin(frame / 6) * 0.03})`,
              }}
            >
              ¡Sígueme para más! 🚀
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
