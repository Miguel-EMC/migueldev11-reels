import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { KineticBackground } from "../components/KineticBackground";

export const KineticScene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Base text entrance
  const baseEntrance = spring({
    frame,
    fps,
    config: { damping: 11, stiffness: 80 },
  });

  // Timings for keywords (relative to this scene's start at 210)
  const t1 = 30; // frame 240 absolute (Beat 15)
  const t2 = 62; // frame 272 absolute (Beat 17)
  const t3 = 94; // frame 304 absolute (Beat 19)

  const kw1Entrance = spring({ frame: frame - t1, fps, config: { damping: 8, stiffness: 110 } });
  const kw2Entrance = spring({ frame: frame - t2, fps, config: { damping: 8, stiffness: 110 } });
  const kw3Entrance = spring({ frame: frame - t3, fps, config: { damping: 8, stiffness: 110 } });

  // Exit scale-through transition (frames 135-150)
  const exitProgress = interpolate(frame, [135, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const textScale = interpolate(exitProgress, [0, 1], [1, 2.2]);
  const textOpacity = interpolate(exitProgress, [0, 0.8], [1, 0]);
  const flashOpacity = Math.sin(exitProgress * Math.PI) * 0.75;

  // Beat breathing
  const lastBeatFrame = brand.beats.filter((b) => b <= (frame + 210)).pop() || 210;
  const framesSinceBeat = (frame + 210) - lastBeatFrame;
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
        <KineticBackground accentColor={brand.orange} />
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
        {/* Base text */}
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 66,
            fontWeight: 800,
            color: brand.cream,
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "-2px",
            transform: `scale(${baseEntrance})`,
            marginBottom: 40,
          }}
        >
          Pero alguien tiene que…
        </div>

        {/* Stacked Keywords */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Keyword 1 */}
          {frame >= t1 && (
            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 88,
                fontWeight: 950,
                color: brand.orange,
                textShadow: brand.glowOrange,
                margin: "10px 0",
                transform: `scale(${kw1Entrance})`,
                letterSpacing: "-1px",
              }}
            >
              DISEÑARLO
            </div>
          )}

          {/* Keyword 2 */}
          {frame >= t2 && (
            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 88,
                fontWeight: 950,
                color: brand.orange,
                textShadow: brand.glowOrange,
                margin: "10px 0",
                transform: `scale(${kw2Entrance})`,
                letterSpacing: "-1px",
              }}
            >
              DIRIGIRLO
            </div>
          )}

          {/* Keyword 3 */}
          {frame >= t3 && (
            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 88,
                fontWeight: 950,
                color: brand.orange,
                textShadow: brand.glowOrange,
                margin: "10px 0",
                transform: `scale(${kw3Entrance})`,
                letterSpacing: "-1px",
              }}
            >
              DEPURARLO
            </div>
          )}
        </div>
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
