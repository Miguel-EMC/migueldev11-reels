import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";

export const Scene3TerraformApply: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  // Relaxed, slow-paced step reveals across 270 frames (~9.0s)
  const step1 = frame >= 20;
  const step2 = frame >= 75;
  const step3 = frame >= 135;
  const step4 = frame >= 195;

  return (
    <EmcodeSceneWrapper categoryTag="PRODUCCIÓN TOTAL" gridColor={brand.green}>
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
            fontSize: 66,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          terraform apply = <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Producción</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Big Terminal Window */}
      <div
        style={{
          width: "100%",
          background: "#080C14",
          border: `3px solid ${brand.green}66`,
          borderRadius: 28,
          padding: "36px 32px",
          fontFamily: brand.fontMono,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12 }}>
          <span style={{ color: brand.textDim, fontSize: 18 }}>bash — dev terminal</span>
          <span style={{ color: brand.green, fontSize: 16, fontWeight: 900 }}>● LIVE APPLY</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28, fontWeight: 900, color: brand.cream }}>
          <span style={{ color: brand.green }}>$</span>
          <span>terraform apply -auto-approve</span>
        </div>

        {step1 && (
          <div style={{ color: brand.textDim, fontSize: 18, display: "flex", flexDirection: "column", gap: 6, textAlign: "left", paddingLeft: 12, borderLeft: `3px solid ${brand.green}44` }}>
            <span>aws_iam_role.lambda_exec: Creating...</span>
            <span>aws_s3_bucket.knowledge: Creating...</span>
            <span>aws_lambda_function.ai_agent: Creating...</span>
          </div>
        )}

        {step2 && (
          <div style={{ color: brand.cream, fontSize: 18, textAlign: "left", paddingLeft: 12, borderLeft: `3px solid ${brand.green}` }}>
            <span>aws_iam_role.lambda_exec: Creation complete (1s)</span>
          </div>
        )}

        {step3 && (
          <div style={{ color: brand.cream, fontSize: 18, textAlign: "left", paddingLeft: 12, borderLeft: `3px solid ${brand.green}` }}>
            <span>aws_lambda_function.ai_agent: Creation complete (3s)</span>
          </div>
        )}

        {step4 && (
          <div style={{ marginTop: 8, padding: "16px 20px", background: "rgba(0, 255, 65, 0.15)", border: `2px solid ${brand.green}`, borderRadius: 16, textAlign: "left" }}>
            <span style={{ fontFamily: brand.fontSans, fontSize: 24, fontWeight: 900, color: brand.green }}>
              Apply Complete! 🚀 Resources: 3 added, 0 destroyed.
            </span>
          </div>
        )}
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
          En segundos tienes un entorno idéntico en <span style={{ color: brand.green, fontWeight: 900 }}>desarrollo y producción.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
