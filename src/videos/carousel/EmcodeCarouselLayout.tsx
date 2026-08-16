import React from "react";
import { AbsoluteFill } from "remotion";
import { emcodeTheme } from "../../themes/emcode";

// -------------------------------------------------------------------------
// GLOW TEXT HELPER
// -------------------------------------------------------------------------
interface GlowTextProps {
  color?: string;
  glowColor?: string;
  fontSize: number;
  fontWeight?: number | string;
  fontFamily?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const EmcodeGlowText: React.FC<GlowTextProps> = ({
  color = emcodeTheme.cream,
  glowColor = emcodeTheme.green,
  fontSize,
  fontWeight = 900,
  fontFamily = emcodeTheme.fontMono,
  style,
  children,
}) => {
  return (
    <span
      style={{
        fontFamily,
        fontSize,
        fontWeight,
        color,
        textShadow: `0 0 15px ${glowColor}, 0 0 35px ${glowColor}66`,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

// -------------------------------------------------------------------------
// MASTER CYBERPUNK BACKGROUND
// -------------------------------------------------------------------------
interface BackgroundProps {
  accentColor?: string;
  glowPosition?: "top" | "center" | "bottom";
}

export const EmcodeCarouselBackground: React.FC<BackgroundProps> = ({
  accentColor = emcodeTheme.green,
  glowPosition = "center",
}) => {
  const glowTop = glowPosition === "top" ? "20%" : glowPosition === "bottom" ? "80%" : "50%";

  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* Circuit lines / Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, ${accentColor}0f 1px, transparent 1px),
            linear-gradient(to bottom, ${accentColor}0f 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.7,
        }}
      />

      {/* 3D Perspective Grid at bottom */}
      <div
        style={{
          position: "absolute",
          inset: -150,
          backgroundImage: `
            linear-gradient(to right, ${accentColor}18 1px, transparent 1px),
            linear-gradient(to bottom, ${accentColor}18 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: "perspective(1000px) rotateX(72deg)",
          transformOrigin: "center bottom",
          maskImage: "linear-gradient(to bottom, transparent 35%, black 75%, black 100%)",
          opacity: 0.85,
        }}
      />

      {/* Radial Neon Glow */}
      <div
        style={{
          position: "absolute",
          top: glowTop,
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: `radial-gradient(circle, ${accentColor}22 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Dark Vignette Frame */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle, transparent 45%, #060A12f0 95%)`,
          pointerEvents: "none",
        }}
      />

      {/* Cyber Corner Marks */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        {/* Top-Left */}
        <path d="M 40 80 L 40 40 L 80 40" stroke={accentColor} strokeWidth="3" fill="none" opacity="0.6" />
        {/* Top-Right */}
        <path d="M 1000 40 L 1040 40 L 1040 80" stroke={accentColor} strokeWidth="3" fill="none" opacity="0.6" />
        {/* Bottom-Left */}
        <path d="M 40 1270 L 40 1310 L 80 1310" stroke={accentColor} strokeWidth="3" fill="none" opacity="0.6" />
        {/* Bottom-Right */}
        <path d="M 1000 1310 L 1040 1310 L 1040 1270" stroke={accentColor} strokeWidth="3" fill="none" opacity="0.6" />
      </svg>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------------------
// MASTER WRAPPER (Header + Footer with @emcode)
// -------------------------------------------------------------------------
interface WrapperProps {
  currentSlide: number;
  totalSlides: number;
  accentColor?: string;
  children: React.ReactNode;
}

export const EmcodeCarouselFrame: React.FC<WrapperProps> = ({
  currentSlide,
  totalSlides,
  accentColor = emcodeTheme.green,
  children,
}) => {
  return (
    <AbsoluteFill style={{ position: "relative" }}>
      {/* TOP HEADER: @emcode BRAND */}
      <div
        style={{
          position: "absolute",
          top: 50,
          left: 60,
          right: 60,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 50,
          paddingBottom: 20,
          borderBottom: `1px solid rgba(255, 255, 255, 0.08)`,
        }}
      >
        {/* Brand Logo & Name */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              backgroundColor: "#0A1A0A",
              border: `2px solid ${emcodeTheme.green}`,
              boxShadow: emcodeTheme.glowGreen,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: emcodeTheme.fontMono,
              fontSize: 20,
              fontWeight: 900,
              color: emcodeTheme.green,
            }}
          >
            {"<e/>"}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: emcodeTheme.fontMono,
                fontSize: 24,
                fontWeight: 900,
                color: emcodeTheme.cream,
                letterSpacing: 2,
              }}
            >
              EM<span style={{ color: emcodeTheme.green }}>CODE</span>
            </span>
            <span
              style={{
                fontFamily: emcodeTheme.fontMono,
                fontSize: 12,
                fontWeight: 700,
                color: emcodeTheme.textDim,
                letterSpacing: 2,
              }}
            >
              CLOUD & AI ARCHITECTURE
            </span>
          </div>
        </div>

        {/* Top Right Tag */}
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 16,
            fontWeight: 800,
            color: accentColor,
            border: `1px solid ${accentColor}44`,
            padding: "6px 16px",
            borderRadius: 20,
            backgroundColor: `${accentColor}10`,
          }}
        >
          2026 EDITION
        </div>
      </div>

      {/* MAIN SLIDE CONTENT */}
      <AbsoluteFill style={{ paddingTop: 120, paddingBottom: 110 }}>
        {children}
      </AbsoluteFill>

      {/* BOTTOM FOOTER: @emcode Handle + Page Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 45,
          left: 60,
          right: 60,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 50,
          paddingTop: 18,
          borderTop: `1px solid rgba(255, 255, 255, 0.08)`,
        }}
      >
        {/* Handle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: emcodeTheme.fontMono,
            fontSize: 26,
            fontWeight: 900,
            color: emcodeTheme.green,
            textShadow: emcodeTheme.glowGreen,
            letterSpacing: 1.5,
          }}
        >
          <span>@emcode</span>
        </div>

        {/* Page Counter Pill */}
        <div
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 22,
            fontWeight: 800,
            color: emcodeTheme.cyan,
            backgroundColor: "rgba(34, 211, 238, 0.12)",
            border: `1px solid ${emcodeTheme.cyan}55`,
            padding: "6px 18px",
            borderRadius: 20,
            textShadow: emcodeTheme.glowCyan,
          }}
        >
          {String(currentSlide).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </div>
      </div>
    </AbsoluteFill>
  );
};
