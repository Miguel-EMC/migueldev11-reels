import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { WindowsIcon, LinuxIcon } from "../../../components/flat/FlatIcons";

export const Scene1WindowsPain: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <EmcodeSceneWrapper categoryTag="DEV ENVIRONMENT" gridColor={brand.red}>
      {/* 1. TOP ZONE: Massive Impact Title Banner */}
      <div
        style={{
          background: "rgba(239, 68, 68, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.red}`,
          borderRadius: 32,
          padding: "45px 35px",
          width: "100%",
          textAlign: "center",
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowRed}`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 74,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.12,
            letterSpacing: "-2px",
          }}
        >
          ¿Desarrollar en<br />
          <span style={{ color: brand.red, textShadow: brand.glowRed }}>Windows? 💀</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Giant Dual 3D Comparison Cards (Takes 650px of space) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          width: "100%",
          transform: `perspective(1000px) rotateX(15deg) scale(${interpolate(entrance, [0, 1], [0.85, 1])})`,
          opacity: entrance,
        }}
      >
        {/* Windows Card */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.9)",
            border: `3px solid ${brand.red}`,
            borderRadius: 32,
            padding: "45px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 20,
            boxShadow: `0 20px 50px rgba(0,0,0,0.6), ${brand.glowRed}33`,
          }}
        >
          <WindowsIcon size={96} />
          <div style={{ fontFamily: brand.fontSans, fontSize: 32, fontWeight: 900, color: brand.cream }}>
            Windows
          </div>
          <div style={{ fontFamily: brand.fontMono, fontSize: 56, fontWeight: 900, color: brand.red, textShadow: brand.glowRed }}>
            99%...
          </div>
          <span style={{ fontFamily: brand.fontSans, fontSize: 22, color: brand.textDim, fontWeight: 600 }}>
            Reinicios forzados en medio del deploy ⏳
          </span>
        </div>

        {/* Manjaro Card */}
        <div
          style={{
            background: "rgba(10, 20, 40, 0.9)",
            border: `3px solid ${brand.green}`,
            borderRadius: 32,
            padding: "45px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 20,
            boxShadow: `0 20px 50px rgba(0,0,0,0.6), ${brand.glowGreen}44`,
          }}
        >
          <LinuxIcon size={96} />
          <div style={{ fontFamily: brand.fontSans, fontSize: 32, fontWeight: 900, color: brand.cream }}>
            Manjaro
          </div>
          <div style={{ fontFamily: brand.fontMono, fontSize: 56, fontWeight: 900, color: brand.green, textShadow: brand.glowGreen }}>
            0.8s ⚡
          </div>
          <span style={{ fontFamily: brand.fontSans, fontSize: 22, color: brand.green, fontWeight: 600 }}>
            Control total y compilación nativa 🔥
          </span>
        </div>
      </div>

      {/* 3. BOTTOM ZONE: Large Punchy Takeaway */}
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          border: `2px solid ${brand.red}66`,
          borderRadius: 24,
          padding: "24px 35px",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ fontFamily: brand.fontSans, fontSize: 34, fontWeight: 800, color: brand.cream, lineHeight: 1.3 }}>
          Media hora perdida justo cuando tienes que hacer un <span style={{ color: brand.red, fontWeight: 900 }}>deploy urgente.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
