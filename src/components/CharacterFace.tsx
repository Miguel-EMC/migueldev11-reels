import React from "react";
import { brand } from "../themes/brand";

interface CharacterFaceProps {
  type: "agent" | "user";
  size?: number;
}

export const CharacterFace: React.FC<CharacterFaceProps> = ({ type, size = 120 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      style={{ filter: `drop-shadow(0 0 15px ${type === "agent" ? brand.green : brand.cyan}55)` }}
    >
      {/* Outer Glow Circle */}
      <circle cx="50" cy="50" r="46" stroke={type === "agent" ? brand.green : brand.cyan} strokeWidth="3" fill="rgba(10, 20, 40, 0.6)" />
      
      {type === "agent" ? (
        <>
          {/* AI Robot/Agent Face */}
          <rect x="25" y="30" width="50" height="40" rx="10" fill="rgba(0, 255, 65, 0.1)" stroke={brand.green} strokeWidth="3" />
          <rect x="35" y="45" width="10" height="10" rx="3" fill={brand.green} />
          <rect x="55" y="45" width="10" height="10" rx="3" fill={brand.green} />
          <path d="M40 60h20" stroke={brand.green} strokeWidth="3" strokeLinecap="round" />
          <path d="M50 15v15" stroke={brand.green} strokeWidth="3" />
          <circle cx="50" cy="15" r="4" fill={brand.green} />
        </>
      ) : (
        <>
          {/* User/Human Face Cyberpunk Avatar */}
          <circle cx="50" cy="45" r="18" stroke={brand.cyan} strokeWidth="3" fill="rgba(34, 211, 238, 0.1)" />
          <path d="M28 78c0-10 8-18 22-18s22 8 22 18" stroke={brand.cyan} strokeWidth="3" strokeLinecap="round" />
          {/* Cyberpunk Glasses/Visor */}
          <path d="M38 42h24v6H38z" fill={brand.cyan} opacity="0.8" />
        </>
      )}
    </svg>
  );
};
