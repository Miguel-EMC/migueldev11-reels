import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { EmcodeLogo } from "../../../components/flat/EmcodeLogo";

export const Scene4CommentsCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 6) * 0.05 + 1;

  return (
    <EmcodeSceneWrapper categoryTag="DEBATE & COMUNIDAD" gridColor={brand.green}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(0, 255, 65, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.green}`,
          borderRadius: 32,
          padding: "36px 30px",
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
            fontSize: 70,
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
          background: "rgba(10, 20, 40, 0.9)",
          backdropFilter: "blur(16px)",
          border: `3px solid ${brand.green}`,
          borderRadius: 32,
          padding: "40px 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
          boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${brand.glowGreen}44`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <EmcodeLogo size={84} showText={true} tagline="DEVOPS & CLOUD ARCHITECTURE" />

        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <div
            style={{
              background: "rgba(239, 68, 68, 0.12)",
              border: `2px solid ${brand.red}88`,
              borderRadius: 20,
              padding: "22px 14px",
              textAlign: "center",
              fontFamily: brand.fontMono,
              fontSize: 24,
              fontWeight: 900,
              color: brand.red,
              textShadow: brand.glowRed,
            }}
          >
            [1] Windows / WSL
          </div>
          <div
            style={{
              background: "rgba(0, 255, 65, 0.12)",
              border: `2px solid ${brand.green}88`,
              borderRadius: 20,
              padding: "22px 14px",
              textAlign: "center",
              fontFamily: brand.fontMono,
              fontSize: 24,
              fontWeight: 900,
              color: brand.green,
              textShadow: brand.glowGreen,
              transform: `scale(${pulse})`,
            }}
          >
            [2] Linux Nativo 🔥
          </div>
        </div>
      </div>

      {/* 3. BOTTOM ZONE: Large CTA Box */}
      <div
        style={{
          border: `3px dashed ${brand.green}`,
          borderRadius: 26,
          padding: "24px 35px",
          backgroundColor: "rgba(0, 255, 65, 0.1)",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ fontFamily: brand.fontMono, fontSize: 30, fontWeight: 900, color: brand.green, textShadow: brand.glowGreen }}>
          👇 ¡DÉJAMELO EN LOS COMENTARIOS! 💬
        </div>
        <div style={{ fontFamily: brand.fontSans, fontSize: 20, color: brand.cream, marginTop: 8, fontWeight: 700 }}>
          Y sígueme para más contenido de arquitectura y Linux
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
