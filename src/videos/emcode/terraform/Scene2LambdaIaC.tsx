import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene2LambdaIaC: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const code = `resource "aws_lambda_function" "ai_agent" {
  function_name = "langgraph_agent"
  runtime       = "python3.10"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "main.lambda_handler"

  environment {
    variables = {
      S3_BUCKET = aws_s3_bucket.knowledge.id
      MODEL_ID  = "anthropic.claude-3-5-sonnet"
    }
  }
}`;

  return (
    <EmcodeSceneWrapper categoryTag="INFRAESTRUCTURA IAC" gridColor={brand.green}>
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
          Automatiza con <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Terraform 🚀</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Big Code Window */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        <ZoomCodeBlock
          code={code}
          language="hcl"
          filename="modules/agent/lambda.tf"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[1, 2, 4, 9, 10]}
          fontSize={22}
        />
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
          Defines tu Lambda, permisos IAM y variables inyectadas de <span style={{ color: brand.green, fontWeight: 900 }}>forma segura y declarativa.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
