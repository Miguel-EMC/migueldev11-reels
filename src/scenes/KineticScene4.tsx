import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { KineticBackground } from "../components/KineticBackground";

export const KineticScene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Timing constants (relative to this scene's start at 360)
  const baseEntranceFrame = 8; // frame 368 absolute (Beat 23)
  const punchEntranceFrame = 56; // frame 416 absolute (Beat 26)

  // Base text entrance
  const baseEntrance = spring({
    frame: frame - baseEntranceFrame,
    fps,
    config: { damping: 11, stiffness: 80 },
  });

  // Punch text entrance
  const punchEntrance = spring({
    frame: frame - punchEntranceFrame,
    fps,
    config: { damping: 13, stiffness: 70 },
  });

  // Slow sinking effect for "queda atrás." (starts after it enters at frame 56)
  const sinkY = interpolate(frame, [punchEntranceFrame, 150], [0, 70], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Exit scale-through transition (frames 135-150)
  const exitProgress = interpolate(frame, [135, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const textScale = interpolate(exitProgress, [0, 1], [1, 2.2]);
  const textOpacity = interpolate(exitProgress, [0, 0.8], [1, 0]);
  const flashOpacity = Math.sin(exitProgress * Math.PI) * 0.75;

  // Beat breathing
  const lastBeatFrame = brand.beats.filter((b) => b <= (frame + 360)).pop() || 360;
  const framesSinceBeat = (frame + 360) - lastBeatFrame;
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
        {frame >= baseEntranceFrame && (
          <div
            style={{
              fontFamily: brand.fontSans,
              fontSize: 88,
              fontWeight: 900,
              color: brand.cream,
              textAlign: "center",
              lineHeight: 1.2,
              letterSpacing: "-2px",
              transform: `scale(${baseEntrance})`,
              marginBottom: 40,
            }}
          >
            El que solo
            <br />
            copia y pega…
          </div>
        )}

        {/* Punchline text */}
        {frame >= punchEntranceFrame && (
          <div
            style={{
              fontFamily: brand.fontSans,
              fontSize: 100,
              fontWeight: 950,
              color: brand.textDim,
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              opacity: punchEntrance * 0.7,
              transform: `scale(${punchEntrance}) translateY(${sinkY}px)`,
            }}
          >
            queda atrás.
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
