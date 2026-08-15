import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { AwsLogo } from "../../../components/flat/FlatIcons";

export const Scene1HookServerless: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <EmcodeSceneWrapper categoryTag="SERVERLESS AI" gridColor={brand.orange}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(255, 122, 26, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.orange}`,
          borderRadius: 32,
          padding: "45px 30px",
          width: "100%",
          textAlign: "center",
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowOrange}`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 66,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          ¿Desplegar un agente de IA <span style={{ color: brand.orange, textShadow: brand.glowOrange }}>sin quebrar? 💸</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: AWS Visual Centerpiece (Takes 650px) */}
      <div
        style={{
          width: "100%",
          background: "rgba(10, 20, 40, 0.85)",
          backdropFilter: "blur(16px)",
          border: `3px solid ${brand.orange}`,
          borderRadius: 32,
          padding: "50px 35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${brand.glowOrange}44`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <AwsLogo size={140} />
        <div style={{ fontFamily: brand.fontMono, fontSize: 24, fontWeight: 900, color: brand.orange, letterSpacing: 3 }}>
          [ EVENT-DRIVEN PATTERN ]
        </div>
        <div style={{ fontFamily: brand.fontSans, fontSize: 44, fontWeight: 900, color: brand.cream, lineHeight: 1.25 }}>
          Pagas $0.00 en reposo. Solo pagas por cada ejecución.
        </div>
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.orange}66`,
          borderRadius: 24,
          padding: "26px 35px",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ fontFamily: brand.fontSans, fontSize: 34, fontWeight: 800, color: brand.cream, lineHeight: 1.35 }}>
          Dejar servidores 24/7 para un agente es un desperdicio. <span style={{ color: brand.orange, fontWeight: 900 }}>Usa Serverless.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
