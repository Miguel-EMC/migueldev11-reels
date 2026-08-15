import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { EmcodeLogo } from "../../../components/flat/EmcodeLogo";

export const Scene4StepFunctionsCierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 6) * 0.05 + 1;

  return (
    <EmcodeSceneWrapper categoryTag="ARQUITECTURA LISTA" gridColor={brand.green}>
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
            fontSize: 66,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          Diagrama y Código <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Listo 🤖📦</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Brand Card with Architecture Summary */}
      <div
        style={{
          width: "100%",
          background: "rgba(10, 20, 40, 0.9)",
          backdropFilter: "blur(16px)",
          border: `3px solid ${brand.green}`,
          borderRadius: 32,
          padding: "36px 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${brand.glowGreen}44`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <EmcodeLogo size={80} showText={true} tagline="SERVERLESS AI ARCHITECTURE & TERRAFORM" />

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(34, 211, 238, 0.08)", padding: "12px 18px", borderRadius: 16, border: `1.5px solid ${brand.cyan}44` }}>
            <span style={{ fontSize: 22 }}>⚡</span>
            <span style={{ fontFamily: brand.fontSans, fontSize: 20, color: brand.cream, fontWeight: 700 }}>
              AWS Lambda + Amazon Bedrock (Claude 3.5)
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(0, 255, 65, 0.08)", padding: "12px 18px", borderRadius: 16, border: `1.5px solid ${brand.green}44` }}>
            <span style={{ fontSize: 22 }}>📦</span>
            <span style={{ fontFamily: brand.fontSans, fontSize: 20, color: brand.cream, fontWeight: 700 }}>
              Terraform IaC Module Completo y Replicable
            </span>
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
          transform: `scale(${pulse})`,
        }}
      >
        <div style={{ fontFamily: brand.fontMono, fontSize: 32, fontWeight: 900, color: brand.green, textShadow: brand.glowGreen }}>
          💬 COMENTA "AGENTE"
        </div>
        <div style={{ fontFamily: brand.fontSans, fontSize: 20, color: brand.cream, marginTop: 8, fontWeight: 700 }}>
          Y te envío el diagrama de arquitectura y el código de Terraform
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
