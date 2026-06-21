import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { Bg } from "../shared/Bg";
import { GridBackground } from "../components/GridBackground";

export const HotTakeDesarrollo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // STAGE 1: Dev + IA (frames 0 to 120)
  const s1Entrance = spring({ frame, fps, config: { damping: 12, stiffness: 80 } });
  const s1Opacity = interpolate(frame, [110, 120], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // STAGE 2: Construir (frames 120 to 240)
  const s2Frame = frame - 120;
  const s2Entrance = spring({ frame: s2Frame, fps, config: { damping: 12, stiffness: 80 } });
  const s2Opacity = interpolate(s2Frame, [0, 10, 110, 120], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // STAGE 3: Keywords reveal (frames 240 to 360)
  const s3Frame = frame - 240;
  const s3Opacity = interpolate(s3Frame, [110, 120], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const kw1Entrance = spring({ frame: s3Frame, fps, config: { damping: 10, stiffness: 95 } });
  const kw2Entrance = spring({ frame: s3Frame - 35, fps, config: { damping: 10, stiffness: 95 } });
  const kw3Entrance = spring({ frame: s3Frame - 70, fps, config: { damping: 10, stiffness: 95 } });

  // STAGE 4: Conclusión (frames 360 to 420)
  const s4Frame = frame - 360;
  const s4Entrance = spring({ frame: s4Frame, fps, config: { damping: 11, stiffness: 85 } });
  const s4Opacity = interpolate(s4Frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
  });

  // Camera drift
  const cameraScale = interpolate(frame, [0, 420], [1.08, 1.18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cameraTranslateY = interpolate(frame, [0, 420], [-15, -35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
        {/* STAGE 1: Reemplazo */}
        {frame < 120 && (
          <div
            style={{
              background: "rgba(10, 14, 26, 0.75)",
              backdropFilter: "blur(20px)",
              border: `3px solid ${brand.orange}`,
              borderRadius: 36,
              padding: "60px 40px",
              width: "95%",
              textAlign: "center",
              opacity: s1Entrance * s1Opacity,
              transform: `scale(${s1Entrance}) translateY(${interpolate(
                s1Entrance,
                [0, 1],
                [30, 0]
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
              }}
            >
              El dev que{" "}
              <span style={{ color: brand.orange, textShadow: brand.glowOrange }}>
                USA IA
              </span>
              <br />
              va a reemplazar
              <br />
              al que no la usa.
            </div>
          </div>
        )}

        {/* STAGE 2: Construir */}
        {frame >= 120 && frame < 240 && (
          <div
            style={{
              background: "rgba(10, 14, 26, 0.75)",
              backdropFilter: "blur(20px)",
              border: `3px solid ${brand.cyan}`,
              borderRadius: 36,
              padding: "60px 40px",
              width: "95%",
              textAlign: "center",
              opacity: s2Entrance * s2Opacity,
              transform: `scale(${s2Entrance}) translateY(${interpolate(
                s2Entrance,
                [0, 1],
                [30, 0]
              )}px)`,
              boxShadow: `0 20px 40px rgba(34, 211, 238, 0.15), ${brand.glowCyan}`,
            }}
          >
            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 64,
                fontWeight: 900,
                color: brand.cream,
                lineHeight: 1.25,
              }}
            >
              No es saber programar.
              <br />
              Es saber
              <br />
              <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>
                CONSTRUIR con IA.
              </span>
            </div>
          </div>
        )}

        {/* STAGE 3: Keywords Reveal */}
        {frame >= 240 && frame < 360 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "95%",
              opacity: s3Opacity,
            }}
          >
            {/* Title for sequence */}
            <div
              style={{
                fontFamily: brand.fontMono,
                fontSize: 32,
                fontWeight: 800,
                color: brand.cream,
                letterSpacing: 2,
                marginBottom: 50,
                textTransform: "uppercase",
              }}
            >
              Domina estas 3 áreas 👇
            </div>

            {/* Keyword 1: RAG */}
            {s3Frame >= 0 && (
              <div
                style={{
                  background: "rgba(255, 122, 26, 0.12)",
                  border: `3px solid ${brand.orange}`,
                  borderRadius: 24,
                  padding: "25px 0",
                  width: "100%",
                  textAlign: "center",
                  marginBottom: 30,
                  opacity: kw1Entrance,
                  transform: `scale(${kw1Entrance})`,
                  boxShadow: brand.glowOrange,
                }}
              >
                <div
                  style={{
                    fontFamily: brand.fontSans,
                    fontSize: 68,
                    fontWeight: 900,
                    color: brand.cream,
                    letterSpacing: "4px",
                  }}
                >
                  RAG 📂
                </div>
              </div>
            )}

            {/* Keyword 2: Agentes */}
            {s3Frame >= 35 && (
              <div
                style={{
                  background: "rgba(34, 211, 238, 0.12)",
                  border: `3px solid ${brand.cyan}`,
                  borderRadius: 24,
                  padding: "25px 0",
                  width: "100%",
                  textAlign: "center",
                  marginBottom: 30,
                  opacity: kw2Entrance,
                  transform: `scale(${kw2Entrance})`,
                  boxShadow: brand.glowCyan,
                }}
              >
                <div
                  style={{
                    fontFamily: brand.fontSans,
                    fontSize: 68,
                    fontWeight: 900,
                    color: brand.cream,
                    letterSpacing: "2px",
                  }}
                >
                  AGENTES 🤖
                </div>
              </div>
            )}

            {/* Keyword 3: Evals */}
            {s3Frame >= 70 && (
              <div
                style={{
                  background: "rgba(255, 122, 26, 0.12)",
                  border: `3px solid ${brand.orange}`,
                  borderRadius: 24,
                  padding: "25px 0",
                  width: "100%",
                  textAlign: "center",
                  opacity: kw3Entrance,
                  transform: `scale(${kw3Entrance})`,
                  boxShadow: brand.glowOrange,
                }}
              >
                <div
                  style={{
                    fontFamily: brand.fontSans,
                    fontSize: 68,
                    fontWeight: 900,
                    color: brand.cream,
                    letterSpacing: "4px",
                  }}
                >
                  EVALS 📊
                </div>
              </div>
            )}
          </div>
        )}

        {/* STAGE 4: Conclusión */}
        {frame >= 360 && (
          <div
            style={{
              background: "rgba(10, 14, 26, 0.75)",
              backdropFilter: "blur(20px)",
              border: `3px solid ${brand.orange}`,
              borderRadius: 36,
              padding: "60px 40px",
              width: "95%",
              textAlign: "center",
              opacity: s4Entrance * s4Opacity,
              transform: `scale(${s4Entrance}) translateY(${interpolate(
                s4Entrance,
                [0, 1],
                [30, 0]
              )}px)`,
              boxShadow: `0 20px 40px rgba(255, 122, 26, 0.15), ${brand.glowOrange}`,
            }}
          >
            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 62,
                fontWeight: 900,
                color: brand.cream,
                lineHeight: 1.3,
              }}
            >
              Eso es lo que
              <br />
              <span style={{ color: brand.orange, textShadow: brand.glowOrange }}>
                casi nadie
              </span>
              <br />
              está aprendiendo todavía.
            </div>
          </div>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
