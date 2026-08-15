import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene1NoManual: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const terraformSnippet = `# Terraform AWS Provider Definition
terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}`;

  return (
    <EmcodeSceneWrapper categoryTag="CLOUD & IAC" gridColor={brand.red}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(239, 68, 68, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.red}`,
          borderRadius: 32,
          padding: "45px 30px",
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
            fontSize: 70,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          No crees tu infraestructura <span style={{ color: brand.red, textShadow: brand.glowRed }}>a mano ❌</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Big Code Window */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        <ZoomCodeBlock
          code={terraformSnippet}
          language="hcl"
          filename="infra/versions.tf"
          startFrame={0}
          typingSpeed={3}
          highlightLines={[3, 5]}
          fontSize={24}
        />
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.red}66`,
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
          Crear Lambdas desde la consola de AWS es un <span style={{ color: brand.red, fontWeight: 900 }}>error crítico de novato.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
