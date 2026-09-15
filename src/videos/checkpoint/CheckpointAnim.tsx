import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const SLIDE_DURATION = 120; // 4s @ 30fps
const SLIDE_FADE = 15; // 0.5s fade in/out per slide

// -------------------------------------------------------------------------
// Wraps one slide's content and fades it in/out at the start/end of its
// own Sequence, so consecutive slides cross-fade through the dark background.
// -------------------------------------------------------------------------
export const SlideTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, SLIDE_FADE, SLIDE_DURATION - SLIDE_FADE, SLIDE_DURATION],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

// -------------------------------------------------------------------------
// Staggered line/element reveal: fade-in 0.5s (15f), starting `delay` frames
// (in 0.2s / 6f increments) after the slide begins.
// -------------------------------------------------------------------------
export const LINE_FADE = 15; // 0.5s
export const LINE_STAGGER = 6; // 0.2s

export const staggerDelay = (index: number, base = 0) => base + index * LINE_STAGGER;

export const FadeInLine: React.FC<{
  delay: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ delay, children, style }) => {
  const frame = useCurrentFrame();
  const local = frame - delay;
  const opacity = interpolate(local, [0, LINE_FADE], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(local, [0, LINE_FADE], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity, transform: `translateY(${translateY}px)`, ...style }}>
      {children}
    </div>
  );
};
