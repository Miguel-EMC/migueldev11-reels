import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../themes/brand";
import { KineticBackground } from "../components/KineticBackground";

export const KineticScene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance springs
  const entrance = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 85 },
  });

  // Beat sync: word "CAMBIÓ" punches on Beat 2 (frame 32)
  const punchBeat = 32;
  const hasPunched = frame >= punchBeat;
  
  // Spring punch animation starting at frame 32
  const punchSpring = spring({
    frame: frame - punchBeat,
    fps,
    config: { damping: 9, stiffness: 120 },
  });

  // Exit scale-through transition (frames 75-90)
  const exitProgress = interpolate(frame, [75, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const textScale = interpolate(exitProgress, [0, 1], [1, 2.2]);
  const textOpacity = interpolate(exitProgress, [0, 0.8], [1, 0]);
  const flashOpacity = Math.sin(exitProgress * Math.PI) * 0.75; // Orange transition flash

  // Beat-responsive breathing
  const lastBeatFrame = brand.beats.filter((b) => b <= frame).pop() || 0;
  const framesSinceBeat = frame - lastBeatFrame;
  const beatPulse = Math.max(0, 1 - framesSinceBeat / 10);
  const textBeatScale = 1 + beatPulse * 0.03;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Background with parallax zoom-in */}
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
        {/* Main Text block */}
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 95,
            fontWeight: 900,
            color: brand.cream,
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-3px",
            transform: `scale(${entrance})`,
          }}
        >
          Programar en 2026
          <br />
          {hasPunched ? (
            <div
              style={{
                fontFamily: brand.fontSans,
                fontSize: 125,
                fontWeight: 950,
                color: brand.orange,
                textShadow: brand.glowOrange,
                marginTop: 20,
                transform: `scale(${interpolate(punchSpring, [0, 1], [1.8, 1])})`,
                display: "inline-block",
              }}
            >
              CAMBIÓ.
            </div>
          ) : (
            <div style={{ height: 140 }} />
          )}
        </div>
      </AbsoluteFill>

      {/* Orange Glow Transition Flash overlay */}
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
