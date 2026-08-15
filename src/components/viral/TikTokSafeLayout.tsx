import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface Props {
  category: string;
  topic?: string;
  children: React.ReactNode;
  showVisualizer?: boolean;
}

export const TikTokSafeLayout: React.FC<Props> = ({
  category,
  topic,
  children,
  showVisualizer = true,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Top Neon Video Progress Bar (boosts completion rate on TikTok/Reels)
  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="bg-[#050805] text-[#E8F5EA] flex flex-col justify-between overflow-hidden font-sans select-none">
      {/* 1. Top Story Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#0A1A0A] z-50">
        <div
          className="h-full bg-[#7CFC88] shadow-[0_0_12px_#7CFC88]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 2. Unified Clean Header - Perfectly spaced in TikTok Safe Zone */}
      <div className="w-full flex items-center justify-between px-10 pt-20 pb-6 border-b border-[#1A3A1A] z-40 bg-[#050805]/95">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 bg-[#0A1A0A] border-2 border-[#7CFC88] flex items-center justify-center font-mono font-black text-[#7CFC88] text-xl">
            {"<e/>"}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-sans font-black text-2xl tracking-wider text-white uppercase">
              EM<span className="text-[#7CFC88]">CODE</span>
            </span>
          </div>
        </div>

        {/* Clean Category Pill */}
        <span className="font-mono text-sm px-4 py-1.5 bg-[#0E240E] text-[#7CFC88] border border-[#2D5A2D] uppercase font-black tracking-wider">
          {category}
        </span>
      </div>

      {/* 3. Central SAFE ZONE with generous margins (No overlapping!) */}
      <div className="flex-1 flex flex-col justify-center px-10 py-6 w-full z-20 overflow-hidden">
        {children}
      </div>

      {/* 4. Bottom Footer Bar with Audio Waveform */}
      <div className="w-full flex items-center justify-between px-10 pb-20 pt-4 border-t border-[#1A3A1A] z-30 bg-[#050805]/95">
        {showVisualizer && (
          <div className="flex items-end gap-1.5 h-7">
            {Array.from({ length: 16 }).map((_, i) => {
              const barHeight = 6 + Math.sin((frame * 0.25) + i * 0.7) * 14 + Math.cos((frame * 0.15) + i) * 5;
              return (
                <div
                  key={i}
                  className="w-1.5 bg-[#7CFC88] rounded-none opacity-80"
                  style={{ height: `${Math.max(4, barHeight)}px` }}
                />
              );
            })}
          </div>
        )}

        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#7CFC88] animate-pulse" />
          <span className="font-mono text-xl text-[#7CFC88] font-black tracking-widest uppercase">
            @emcode
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
