import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { KineticBackground } from "../components/KineticBackground";

export const KineticCierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Timings (relative to 840 start)
  const baseEntranceFrame = 8; // frame 848 absolute (Beat 53)
  const brandEntranceFrame = 40; // frame 880 absolute (Beat 55)

  // Springs
  const baseEntrance = spring({ frame: frame - baseEntranceFrame, fps, config: { damping: 11, stiffness: 80 } });
  const brandEntrance = spring({ frame: frame - brandEntranceFrame, fps, config: { damping: 12, stiffness: 85 } });

  // Loop fade-out (relative frames 90-120)
  const loopProgress = interpolate(frame, [90, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const textOpacity = interpolate(loopProgress, [0, 0.8], [1, 0]);

  // Converging background zoom/translation reset towards the first frame (scale 1.02, translate 0)
  const cameraScale = interpolate(
    frame,
    [0, 90, 120],
    [1.15, 1.05, 1.02],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const cameraTranslateY = interpolate(
    frame,
    [0, 90, 120],
    [-30, -5, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Beat breathing
  const lastBeatFrame = brand.beats.filter((b) => b <= (frame + 840)).pop() || 840;
  const framesSinceBeat = (frame + 840) - lastBeatFrame;
  const beatPulse = Math.max(0, 1 - framesSinceBeat / 10);
  const textBeatScale = 1 + beatPulse * 0.03;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      {/* Background drift & reset */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${cameraScale}) translateY(${cameraTranslateY}px)`,
        }}
      >
        <KineticBackground accentColor={brand.orange} />
      </div>

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 60px",
          transform: `scale(${textBeatScale})`,
          opacity: textOpacity,
          zIndex: 10,
        }}
      >
        {/* Base question */}
        {frame >= baseEntranceFrame && frame < brandEntranceFrame && (
          <div
            style={{
              fontFamily: brand.fontSans,
              fontSize: 100,
              fontWeight: 950,
              color: brand.cream,
              textAlign: "center",
              transform: `scale(${baseEntrance})`,
              textShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            ¿De acuerdo? 👇
          </div>
        )}

        {/* Brand end card */}
        {frame >= brandEntranceFrame && (
          <div
            style={{
              background: "rgba(10, 14, 26, 0.8)",
              backdropFilter: "blur(20px)",
              border: `3px solid ${brand.orange}`,
              borderRadius: 36,
              padding: "70px 50px",
              width: "90%",
              textAlign: "center",
              opacity: brandEntrance,
              transform: `scale(${brandEntrance}) translateY(${interpolate(
                brandEntrance,
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
              [ KINETIC DEV ]
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
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
