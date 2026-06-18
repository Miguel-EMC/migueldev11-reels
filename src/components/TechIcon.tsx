import React from "react";
import { brand } from "../themes/brand";

interface TechIconProps {
  type: "database" | "cpu" | "code" | "search" | "network" | "file";
  size?: number;
  color?: string;
  glow?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({ 
  type, 
  size = 40, 
  color = brand.green,
  glow = true 
}) => {
  const filter = glow ? `drop-shadow(0 0 10px ${color})` : undefined;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ filter, transition: "all 0.3s ease" }}
    >
      {type === "database" && (
        <>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </>
      )}
      {type === "cpu" && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </>
      )}
      {type === "code" && (
        <>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="2" x2="10" y2="22" />
        </>
      )}
      {type === "search" && (
        <>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </>
      )}
      {type === "network" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="5" r="3" />
          <circle cx="12" cy="19" r="3" />
          <path d="M12 8v1M12 15v1" />
        </>
      )}
      {type === "file" && (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </>
      )}
    </svg>
  );
};
