import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { KineticBackground } from "../components/KineticBackground";

export const KineticScene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Timings (relative to 510 start)
  const baseEntranceFrame = 2; // frame 512 absolute (Beat 32)
  const t1 = 34;  // frame 544 absolute (Beat 34) - RAG
  const t2 = 66;  // frame 576 absolute (Beat 36) - Agentes
  const t3 = 98;  // frame 608 absolute (Beat 38) - Arquitectura
  const tGana = 130; // frame 640 absolute (Beat 40) - gana.

  // Springs
  const baseEntrance = spring({ frame: frame - baseEntranceFrame, fps, config: { damping: 11, stiffness: 80 } });
  const kw1Entrance = spring({ frame: frame - t1, fps, config: { damping: 9, stiffness: 100 } });
  const kw2Entrance = spring({ frame: frame - t2, fps, config: { damping: 9, stiffness: 100 } });
  const kw3Entrance = spring({ frame: frame - t3, fps, config: { damping: 9, stiffness: 100 } });
  const ganaEntrance = spring({ frame: frame - tGana, fps, config: { damping: 8, stiffness: 120 } });

  // Exit scale-through transition (frames 165-180)
  const exitProgress = interpolate(frame, [165, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const textScale = interpolate(exitProgress, [0, 1], [1, 2.2]);
  const textOpacity = interpolate(exitProgress, [0, 0.8], [1, 0]);
  const flashOpacity = Math.sin(exitProgress * Math.PI) * 0.75;

  // Beat breathing
  const lastBeatFrame = brand.beats.filter((b) => b <= (frame + 510)).pop() || 510;
  const framesSinceBeat = (frame + 510) - lastBeatFrame;
  const beatPulse = Math.max(0, 1 - framesSinceBeat / 10);
  const textBeatScale = 1 + beatPulse * 0.03;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Background drift */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${1.0 + exitProgress * 0.15})`,
        }}
      >
        <KineticBackground accentColor={brand.cyan} />
      </div>

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 60px",
          transform: `scale(${textScale * textBeatScale})`,
          opacity: textOpacity,
          zIndex: 10,
        }}
      >
        {/* If 'gana' has entered, we shift elements slightly or scale them down to make room */}
        <div
          style={{
            transform: `translateY(${frame >= tGana ? -60 : 0}px)`,
            transition: "transform 0.3s ease-out",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Base Title */}
          {frame >= baseEntranceFrame && (
            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 66,
                fontWeight: 900,
                color: brand.cream,
                textAlign: "center",
                lineHeight: 1.2,
                letterSpacing: "-2px",
                transform: `scale(${baseEntrance})`,
                marginBottom: 35,
              }}
            >
              El que entiende
              <br />
              SISTEMAS…
            </div>
          )}

          {/* Horizontal/Vertical Row of Tech terms */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
              width: "100%",
              marginBottom: 40,
            }}
          >
            {/* RAG */}
            {frame >= t1 && (
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 44,
                  fontWeight: 900,
                  color: brand.cyan,
                  border: `2px solid ${brand.cyan}aa`,
                  borderRadius: 16,
                  padding: "10px 25px",
                  background: "rgba(34, 211, 238, 0.1)",
                  textShadow: brand.glowCyan,
                  boxShadow: brand.glowCyan,
                  transform: `scale(${kw1Entrance})`,
                }}
              >
                RAG
              </div>
            )}

            {/* Agentes */}
            {frame >= t2 && (
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 44,
                  fontWeight: 900,
                  color: brand.cyan,
                  border: `2px solid ${brand.cyan}aa`,
                  borderRadius: 16,
                  padding: "10px 25px",
                  background: "rgba(34, 211, 238, 0.1)",
                  textShadow: brand.glowCyan,
                  boxShadow: brand.glowCyan,
                  transform: `scale(${kw2Entrance})`,
                }}
              >
                Agentes
              </div>
            )}

            {/* Arquitectura */}
            {frame >= t3 && (
              <div
                style={{
                  fontFamily: brand.fontMono,
                  fontSize: 44,
                  fontWeight: 900,
                  color: brand.cyan,
                  border: `2px solid ${brand.cyan}aa`,
                  borderRadius: 16,
                  padding: "10px 25px",
                  background: "rgba(34, 211, 238, 0.1)",
                  textShadow: brand.glowCyan,
                  boxShadow: brand.glowCyan,
                  transform: `scale(${kw3Entrance})`,
                }}
              >
                Arquitectura
              </div>
            )}
          </div>
        </div>

        {/* GANA PUNCH */}
        {frame >= tGana && (
          <div
            style={{
              fontFamily: brand.fontSans,
              fontSize: 140,
              fontWeight: 950,
              color: brand.orange,
              textShadow: brand.glowOrange,
              textAlign: "center",
              transform: `scale(${interpolate(ganaEntrance, [0, 1], [2.0, 1])}) translateY(-20px)`,
              display: "inline-block",
            }}
          >
            gana.
          </div>
        )}
      </AbsoluteFill>

      {/* Orange Glow Transition Flash */}
      {exitProgress > 0 && (
        <AbsoluteFill
          style={{
            background: brand.orange,
            opacity: flashOpacity,
            pointerEvents: "none",
            zIndex: 100,
          }}
        />
      )}
    </AbsoluteFill>
  );
};
