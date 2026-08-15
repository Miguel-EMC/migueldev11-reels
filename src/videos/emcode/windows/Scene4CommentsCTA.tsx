import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { EmcodeLogo } from "../../../components/flat/EmcodeLogo";

export const Scene4CommentsCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <EmcodeSceneWrapper categoryTag="DEBATE DEV" gridColor={brand.green}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(0, 255, 65, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.green}`,
          borderRadius: 32,
          padding: "40px 30px",
          width: "100%",
          textAlign: "center",
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowGreen}`,
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
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          ¿Y tú qué <span style={{ color: brand.green, textShadow: brand.glowGreen }}>usas? 🤔</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Brand Card with Voting Grid */}
      <div
        style={{
          width: "100%",
          background: "rgba(10, 20, 40, 0.85)",
          backdropFilter: "blur(16px)",
          border: `3px solid ${brand.green}`,
          borderRadius: 32,
          padding: "44px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
          boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${brand.glowGreen}44`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <EmcodeLogo size={88} showText={true} tagline="SOFTWARE ENGINEERING & CLOUD ARCHITECTURE" />

        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              border: `2px solid ${brand.red}66`,
              borderRadius: 20,
              padding: "24px 16px",
              textAlign: "center",
              fontFamily: brand.fontMono,
              fontSize: 26,
              fontWeight: 900,
              color: brand.red,
              textShadow: brand.glowRed,
            }}
          >
            [1] Windows / WSL
          </div>
          <div
            style={{
              background: "rgba(0, 255, 65, 0.1)",
              border: `2px solid ${brand.green}66`,
              borderRadius: 20,
              padding: "24px 16px",
              textAlign: "center",
              fontFamily: brand.fontMono,
              fontSize: 26,
              fontWeight: 900,
              color: brand.green,
              textShadow: brand.glowGreen,
            }}
          >
            [2] Linux Nativo
          </div>
        </div>
      </div>

      {/* 3. BOTTOM ZONE: Large CTA Box */}
      <div
        style={{
          border: `3px dashed ${brand.green}`,
          borderRadius: 26,
          padding: "26px 35px",
          backgroundColor: "rgba(0, 255, 65, 0.08)",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ fontFamily: brand.fontMono, fontSize: 32, fontWeight: 900, color: brand.green, textShadow: brand.glowGreen }}>
          👇 ¡TE LEO EN LOS COMENTARIOS! 💬
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
