import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { KineticBackground } from "../components/KineticBackground";

export const KineticScene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring (starts on beat at frame 6, absolute 96)
  const entranceFrame = 6;
  const entrance = spring({
    frame: frame - entranceFrame,
    fps,
    config: { damping: 11, stiffness: 80 },
  });

  // Exit scale-through transition (frames 105-120)
  const exitProgress = interpolate(frame, [105, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const textScale = interpolate(exitProgress, [0, 1], [1, 2.2]);
  const textOpacity = interpolate(exitProgress, [0, 0.8], [1, 0]);
  const flashOpacity = Math.sin(exitProgress * Math.PI) * 0.75;

  // Beat breathing
  const lastBeatFrame = brand.beats.filter((b) => b <= (frame + 90)).pop() || 90;
  const framesSinceBeat = (frame + 90) - lastBeatFrame;
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
        {frame >= entranceFrame && (
          <div
            style={{
              fontFamily: brand.fontSans,
              fontSize: 100,
              fontWeight: 900,
              color: brand.cream,
              textAlign: "center",
              lineHeight: 1.2,
              letterSpacing: "-2px",
              transform: `scale(${entrance})`,
            }}
          >
            La IA ya
            <br />
            <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>
              escribe el código.
            </span>
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
