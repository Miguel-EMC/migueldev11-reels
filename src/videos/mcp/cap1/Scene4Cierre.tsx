import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { Cpu, Send } from "lucide-react";

export const Scene4Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isCtaPhase = frame < 110;
  const isEndCardPhase = frame >= 110;

  const ctaEntrance = spring({
    frame,
    fps,
    config: { damping: 11, stiffness: 80 },
  });

  const endCardEntrance = spring({
    frame: frame - 110,
    fps,
    config: { damping: 12, stiffness: 85 },
  });

  // Fade out CTA
  const ctaOpacity = interpolate(frame, [100, 110], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out end card at the end of the video for smooth loop
  const endCardOpacity = interpolate(frame, [155, 180], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Seamless loop camera drift reset
  const cameraScale = interpolate(
    frame,
    [0, 110, 155, 180],
    [1.09, 1.12, 1.05, 1.02],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${cameraScale})` }}>
        <GridBackground color={brand.green} />
        <ParticleField />
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 550,
          height: 550,
          background: `radial-gradient(circle, ${brand.green}18 0%, transparent 70%)`,
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
          <div
            style={{
              background: "rgba(10, 14, 26, 0.8)",
              backdropFilter: "blur(20px)",
              border: `3px solid ${brand.green}`,
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
              boxShadow: `0 20px 40px rgba(0, 255, 65, 0.15), ${brand.glowGreen}`,
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
              ¿Quieres crear tus propios agentes? 💾
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 15
              }}
            >
              Comenta "MCP" 👇 <Send size={45} color={brand.cyan} />
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
          <div
            style={{
              background: "rgba(10, 14, 26, 0.8)",
              backdropFilter: "blur(20px)",
              border: `3px solid ${brand.green}`,
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
              boxShadow: `0 25px 50px rgba(0, 255, 65, 0.2), ${brand.glowGreen}`,
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
              [ MODEL CONTEXT PROTOCOL ]
            </div>

            <div
              style={{
                fontFamily: brand.fontMono,
                fontSize: 76,
                fontWeight: 900,
                color: brand.green,
                textShadow: brand.glowGreen,
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
