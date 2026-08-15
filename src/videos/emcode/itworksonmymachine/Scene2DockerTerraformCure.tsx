import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { DockerIcon, TerraformIcon } from "../../../components/flat/FlatIcons";

export const Scene2DockerTerraformCure: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <EmcodeSceneWrapper categoryTag="LA SOLUCIÓN" gridColor={brand.green}>
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
          La cura: <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>Docker</span> + <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Terraform</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Dual Giant Tool Cards (Takes 650px) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          width: "100%",
          transform: `perspective(1000px) rotateX(12deg) scale(${entrance})`,
          opacity: entrance,
        }}
      >
        {/* Docker Card */}
        <div
          style={{
            background: "rgba(10, 20, 40, 0.9)",
            border: `3px solid ${brand.cyan}`,
            borderRadius: 32,
            padding: "45px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 18,
            boxShadow: `0 20px 50px rgba(0,0,0,0.6), ${brand.glowCyan}33`,
          }}
        >
          <DockerIcon size={96} />
          <div style={{ fontFamily: brand.fontSans, fontSize: 32, fontWeight: 900, color: brand.cream }}>
            Docker
          </div>
          <span style={{ fontFamily: brand.fontMono, fontSize: 16, color: brand.cyan, fontWeight: 800, textTransform: "uppercase", background: "rgba(34,211,238,0.1)", padding: "6px 14px", borderRadius: 8 }}>
            EMPAQUETA CÓDIGO
          </span>
          <span style={{ fontFamily: brand.fontSans, fontSize: 20, color: brand.textDim, fontWeight: 600 }}>
            Mismas dependencias en cualquier máquina.
          </span>
        </div>

        {/* Terraform Card */}
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
            gap: 18,
            boxShadow: `0 20px 50px rgba(0,0,0,0.6), ${brand.glowGreen}44`,
          }}
        >
          <TerraformIcon size={96} />
          <div style={{ fontFamily: brand.fontSans, fontSize: 32, fontWeight: 900, color: brand.cream }}>
            Terraform
          </div>
          <span style={{ fontFamily: brand.fontMono, fontSize: 16, color: brand.green, fontWeight: 800, textTransform: "uppercase", background: "rgba(0,255,65,0.1)", padding: "6px 14px", borderRadius: 8 }}>
            CLONA LA NUBE
          </span>
          <span style={{ fontFamily: brand.fontSans, fontSize: 20, color: brand.textDim, fontWeight: 600 }}>
            Dev y Prod idénticos en AWS.
          </span>
        </div>
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.green}66`,
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
          Si tu código falla en producción, <span style={{ color: brand.green, fontWeight: 900 }}>tu arquitectura está mal.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
