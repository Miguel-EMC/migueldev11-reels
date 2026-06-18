// Persistent brand watermark — place outside <Sequence> so it survives all scenes
import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { brand } from "../themes/brand";

export const Watermark: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 22], [0, 0.85], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <div style={{
      position: "absolute",
      bottom: 44,
      right: 44,
      opacity,
      fontFamily: brand.fontMono,
      fontSize: 26,
      fontWeight: 600,
      color: brand.orange,
      letterSpacing: "0.5px",
      textShadow: `0 0 8px ${brand.orange}99`,
      pointerEvents: "none",
      zIndex: 200,
    }}>
      {brand.handle}
    </div>
  );
};
