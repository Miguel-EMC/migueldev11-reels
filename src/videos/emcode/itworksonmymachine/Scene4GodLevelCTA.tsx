import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { EmcodeLogo } from "../../../components/flat/EmcodeLogo";
import { CheckmarkIcon } from "../../../components/flat/FlatIcons";

export const Scene4GodLevelCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <EmcodeSceneWrapper categoryTag="ARQUITECTURA DE ÉLITE" gridColor={brand.green}>
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
            fontSize: 70,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          Lleva tus proyectos a <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Nivel Dios 🚀</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Brand Card with Checkmark */}
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
          gap: 28,
          boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${brand.glowGreen}44`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <CheckmarkIcon size={72} />
          <EmcodeLogo size={80} showText={true} tagline="ENTERPRISE CODE & CLOUD ARCHITECTURE" />
        </div>

        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {["Docker", "Terraform", "AWS ECS", "Zero Lag"].map((tech, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(0, 255, 65, 0.1)",
                border: `2px solid ${brand.green}66`,
                borderRadius: 16,
                padding: "16px 8px",
                textAlign: "center",
                fontFamily: brand.fontMono,
                fontSize: 18,
                fontWeight: 900,
                color: brand.green,
                textShadow: brand.glowGreen,
              }}
            >
              ✓ {tech}
            </div>
          ))}
        </div>
      </div>

      {/* 3. BOTTOM ZONE: CTA Box */}
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
          🚀 SÍGUEME PARA MÁS DEVOPS 🚀
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
