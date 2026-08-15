import React from "react";
import { Lottie, LottieAnimationData } from "@remotion/lottie";
import { interpolate, useCurrentFrame } from "remotion";

interface Props {
  animationData?: LottieAnimationData;
  size?: number;
  showText?: boolean;
  tagline?: string;
}

export const EmcodeLogo: React.FC<Props> = ({
  animationData,
  size = 64,
  showText = true,
  tagline = "SOFTWARE ENGINEERING",
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div className="flex items-center gap-5" style={{ opacity }}>
      {animationData ? (
        <div style={{ width: size, height: size }}>
          <Lottie animationData={animationData} loop={false} />
        </div>
      ) : (
        /* Flat Vector Signature Green Icon for EMCODE */
        <div
          className="flex items-center justify-center bg-[#0A1A0A] border-2 border-[#7CFC88] font-mono font-black text-[#7CFC88]"
          style={{ width: size, height: size, fontSize: size * 0.42 }}
        >
          {"<e/>"}
        </div>
      )}

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-sans font-black text-3xl tracking-wider text-[#E8F5EA] uppercase">
              EM<span className="text-[#7CFC88]">CODE</span>
            </span>
          </div>
          {tagline && (
            <span className="font-mono text-sm tracking-widest text-[#7E8C7E] uppercase font-bold">
              {tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
