import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { AwsLogo } from "../../../components/flat/FlatIcons";

export const Scene1HookServerless: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 6) * 0.05 + 1;

  return (
    <EmcodeSceneWrapper categoryTag="ARQUITECTURA SERVERLESS IA" gridColor={brand.cyan}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(34, 211, 238, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.cyan}`,
          borderRadius: 32,
          padding: "40px 30px",
          width: "100%",
          textAlign: "center",
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowCyan}`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 64,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          Agente de IA que escala a <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>Millones 🤖⚡</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: AWS Visual Centerpiece */}
      <div
        style={{
          width: "100%",
          background: "rgba(10, 20, 40, 0.85)",
          backdropFilter: "blur(16px)",
          border: `3px solid ${brand.cyan}`,
          borderRadius: 32,
          padding: "45px 35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 20,
          boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${brand.glowCyan}44`,
          transform: `scale(${pulse})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <AwsLogo size={100} />

        <div style={{ fontFamily: brand.fontMono, fontSize: 38, fontWeight: 900, color: brand.green, textShadow: brand.glowGreen }}>
          $0 USD en Servidores Inactivos 💸
        </div>

        <div style={{ fontFamily: brand.fontSans, fontSize: 24, fontWeight: 800, color: brand.cream }}>
          Paga únicamente por cada milisegundo de ejecución real
        </div>
      </div>

      {/* 3. BOTTOM ZONE: Takeaway */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.cyan}66`,
          borderRadius: 24,
          padding: "24px 35px",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ fontFamily: brand.fontSans, fontSize: 30, fontWeight: 800, color: brand.cream, lineHeight: 1.35 }}>
          La arquitectura serverless perfecta para <span style={{ color: brand.cyan, fontWeight: 900 }}>modelos de IA y LLMs.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
