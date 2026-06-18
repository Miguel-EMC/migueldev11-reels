import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { brand } from "../themes/brand";

export const GridBackground: React.FC<{ color?: string }> = ({ color = brand.green }) => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <div style={{
        position: "absolute",
        inset: -200,
        backgroundImage: `
          linear-gradient(to right, ${color}22 1px, transparent 1px),
          linear-gradient(to bottom, ${color}22 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        transform: `perspective(1000px) rotateX(60deg) translateY(${(frame * 2) % 80}px)`,
        maskImage: "linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)",
      }} />
    </AbsoluteFill>
  );
};
