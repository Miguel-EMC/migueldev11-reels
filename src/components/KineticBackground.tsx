import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { brand } from "../themes/brand";

interface KineticBackgroundProps {
  accentColor?: string;
  beatSynced?: boolean;
}

const rand = (s: number) => {
  const x = Math.sin(s + 1) * 10000;
  return x - Math.floor(x);
};

export const KineticBackground: React.FC<KineticBackgroundProps> = ({
  accentColor = brand.orange,
  beatSynced = true,
}) => {
  const frame = useCurrentFrame();

  // Find the last beat to trigger flashes/accelerations
  const lastBeatFrame = brand.beats.filter((b) => b <= frame).pop() || 0;
  const framesSinceBeat = frame - lastBeatFrame;
  const beatPulse = beatSynced ? Math.max(0, 1 - framesSinceBeat / 8) : 0;

  // Grid infinite translateY translation
  // On a beat, the grid shifts slightly faster (gives an organic music bounce)
  const gridSpeed = 2.5;
  const gridBeatPush = beatPulse * 4;
  const gridTranslateY = (frame * gridSpeed + gridBeatPush) % 80;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg, overflow: "hidden" }}>
      {/* 3D Perspective Grid */}
      <div
        style={{
          position: "absolute",
          inset: -200,
          backgroundImage: `
            linear-gradient(to right, ${accentColor}18 1px, transparent 1px),
            linear-gradient(to bottom, ${accentColor}18 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `perspective(1000px) rotateX(70deg) translateY(${gridTranslateY}px)`,
          maskImage: "linear-gradient(to bottom, transparent 10%, black 50%, black 80%, transparent)",
          opacity: 0.7 + beatPulse * 0.3,
          transition: "opacity 0.1s ease-out",
        }}
      />

      {/* Dark Vignette Overlay for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle, transparent 35%, ${brand.bg}ee 95%)`,
          pointerEvents: "none",
        }}
      />

      {/* Subtle floating particle overlay */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        viewBox="0 0 1080 1920"
      >
        {Array.from({ length: 30 }, (_, i) => {
          const x = rand(i * 5) * 1080;
          const baseY = rand(i * 5 + 1) * 1920;
          // Particles speed up on the beat
          const speed = rand(i * 5 + 2) * 1.5 + 0.5;
          const particleBeatOffset = beatPulse * 5;
          const y = ((baseY - (frame * speed + particleBeatOffset)) % 1920 + 1920) % 1920;
          
          const radius = rand(i * 5 + 3) * 3 + 1;
          const opacity = (rand(i * 5 + 4) * 0.4 + 0.1) * (1 + beatPulse * 0.5);

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={radius}
              fill={i % 3 === 0 ? brand.cyan : brand.cream}
              opacity={opacity}
              style={{
                filter: i % 3 === 0 ? `drop-shadow(0 0 6px ${brand.cyan})` : "none",
              }}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
