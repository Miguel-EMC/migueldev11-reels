import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { LiveArchitectureFlow, ViralNode, ViralEdge } from "../../../components/viral/LiveArchitectureFlow";
import { EmcodeLogo } from "../../../components/flat/EmcodeLogo";

const nodes: ViralNode[] = [
  { id: "tf", label: "Terraform IaC", sublabel: "Declarative Code", category: "infra", x: 180, y: 65, iconType: "terraform", statusText: "APPLIED", startDelay: 0 },
  { id: "lambda", label: "Lambda Agent", sublabel: "LangGraph Engine", category: "compute", x: 480, y: 65, iconType: "lambda", statusText: "RUNNING", startDelay: 6 },
  { id: "s3", label: "S3 Knowledge", sublabel: "Vectors & Docs", category: "storage", x: 780, y: 65, iconType: "s3", statusText: "SYNCED", startDelay: 12 },
];

const edges: ViralEdge[] = [
  { from: "tf", to: "lambda", d: "M 280 65 L 380 65", color: "#00FF41", flowSpeed: 20 },
  { from: "lambda", to: "s3", d: "M 580 65 L 680 65", color: "#22D3EE", flowSpeed: 20 },
];

export const Scene4SplitArchitecture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <EmcodeSceneWrapper categoryTag="ARQUITECTURA CLOUD" gridColor={brand.green}>
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
          Automatiza tu <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Backend 🚀</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Brand Card with Topology */}
      <div
        style={{
          width: "100%",
          background: "rgba(10, 20, 40, 0.85)",
          backdropFilter: "blur(16px)",
          border: `3px solid ${brand.green}`,
          borderRadius: 32,
          padding: "36px 28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${brand.glowGreen}44`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <EmcodeLogo size={80} showText={true} tagline="SOFTWARE ENGINEERING & CLOUD ARCHITECTURE" />

        <LiveArchitectureFlow
          title="Automated Infrastructure Topology"
          nodes={nodes}
          edges={edges}
          width={960}
          height={140}
        />
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
          🚀 SÍGUEME PARA MÁS ARQUITECTURA IAC 🚀
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
