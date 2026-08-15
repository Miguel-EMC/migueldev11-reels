import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene3MockBoto3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const boto3Code = `import boto3

# Conexión local a LocalStack sin credenciales reales
s3 = boto3.client(
    "s3",
    endpoint_url="http://localhost:4566",
    aws_access_key_id="test",
    aws_secret_access_key="test",
)

s3.create_bucket(Bucket="mi-bucket-local")
print("Bucket S3 creado localmente y gratis!")`;

  return (
    <EmcodeSceneWrapper categoryTag="100% OFFLINE" gridColor={brand.cyan}>
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
            fontSize: 70,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          Lambdas y S3 <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>gratis 🔥</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Big Python Code Window */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        <ZoomCodeBlock
          code={boto3Code}
          language="python"
          filename="app/test_s3_local.py"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[4, 5, 10]}
          fontSize={22}
        />
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.cyan}66`,
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
          Prueba tus Lambdas, SQS y S3 totalmente gratis, offline y <span style={{ color: brand.cyan, fontWeight: 900 }}>sin registrar tarjetas de crédito.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
