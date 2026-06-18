import React from "react";
import { AbsoluteFill } from "remotion";
import { brand } from "../themes/brand";

interface LayoutProps {
  children: React.ReactNode;
}

export const YouTubeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AbsoluteFill>
      {/* Main Video Content */}
      {children}

      {/* Premium Horizontal Brand Watermark */}
      <div style={{
        position: "absolute",
        bottom: 40,
        right: 50,
        fontFamily: brand.fontMono,
        fontSize: 28,
        fontWeight: 800,
        color: brand.green,
        opacity: 0.6,
        letterSpacing: 2,
        textShadow: brand.glowGreen,
        zIndex: 100
      }}>
        {brand.handle}
      </div>
    </AbsoluteFill>
  );
};
