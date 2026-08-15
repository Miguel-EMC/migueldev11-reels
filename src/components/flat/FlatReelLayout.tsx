import React from "react";
import { AbsoluteFill } from "remotion";
import { EmcodeLogo } from "./EmcodeLogo";

interface Props {
  category: string;
  topic: string;
  badgeText?: string;
  children: React.ReactNode;
}

export const FlatReelLayout: React.FC<Props> = ({
  category,
  topic,
  badgeText = "ENTERPRISE",
  children,
}) => {
  return (
    <AbsoluteFill className="bg-[#070D08] text-[#E8F5EA] flex flex-col justify-between overflow-hidden font-sans select-none">
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between px-[60px] py-8 bg-[#0A1A0A] border-b-2 border-[#1A3A1A] z-10">
        <EmcodeLogo size={60} showText={true} />
        <div className="flex items-center gap-4">
          <span className="font-mono text-xl px-4 py-2 bg-[#0D160D] text-[#E8F5EA] border border-[#1A3A1A] uppercase font-semibold">
            {category}
          </span>
          <span className="font-mono text-xl px-4 py-2 bg-[#0E240E] text-[#7CFC88] border border-[#2D5A2D] uppercase font-black">
            {badgeText}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-[60px] py-10 w-full z-10">
        {children}
      </div>

      {/* Corporate Bottom Footer */}
      <div className="w-full flex items-center justify-between px-[60px] py-8 bg-[#0A1A0A] border-t-2 border-[#1A3A1A] z-10">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-none bg-[#7CFC88]" />
          <span className="font-mono text-2xl text-[#E8F5EA] font-bold tracking-wide">emcode.dev</span>
        </div>
        <span className="font-mono text-2xl text-[#7CFC88] font-black tracking-widest uppercase">
          @emcode
        </span>
      </div>
    </AbsoluteFill>
  );
};
