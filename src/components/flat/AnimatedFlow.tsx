import React from "react";
import { evolvePath, getLength, getPointAtLength } from "@remotion/paths";
import { interpolate, useCurrentFrame } from "remotion";

interface Props {
  d: string;
  startFrame?: number;
  durationInFrames?: number;
  color?: string;
  strokeWidth?: number;
  showPacket?: boolean;
  packetColor?: string;
}

export const AnimatedFlow: React.FC<Props> = ({
  d,
  startFrame = 0,
  durationInFrames = 45,
  color = "#3B82F6",
  strokeWidth = 3,
  showPacket = true,
  packetColor = "#60A5FA",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame - startFrame,
    [0, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const { strokeDasharray, strokeDashoffset } = evolvePath(progress, d);
  const totalLength = getLength(d);
  const currentLength = totalLength * progress;
  const currentPoint = getPointAtLength(d, currentLength);

  return (
    <g>
      {/* Background Track Path */}
      <path
        d={d}
        fill="none"
        stroke="#1E293B"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Animated Evolving Flow Path */}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
      {/* Data Packet Pulse */}
      {showPacket && progress > 0 && progress < 1 && (
        <circle
          cx={currentPoint.x}
          cy={currentPoint.y}
          r={6}
          fill={packetColor}
        />
      )}
    </g>
  );
};
