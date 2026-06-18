import React from "react";
import { AbsoluteFill } from "remotion";
import { Watermark } from "../shared/Watermark";

interface LayoutProps {
  children: React.ReactNode;
}

export const ReelLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AbsoluteFill>
      {/* Main Video Content */}
      {children}
      
      {/* Vertical Safe Area Guides overlay (only visible in development if desired, or pure watermark) */}
      <Watermark />
    </AbsoluteFill>
  );
};
