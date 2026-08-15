import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene2ApiGatewayLambda: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const ec2WasteCode = `# ❌ Costo de Servidores Dedicados 24/7:
EC2 g5.2xlarge (NVIDIA A10G GPU):
- Costo Fijo: $1.212 / hora -> ~$880 USD / mes
- Tráfico Real: Solo 50 requests/día (98% tiempo inactivo)
- Dinero Quemado en Servidores Ociosos: ~$850 USD/mes 💸`;

  return (
    <EmcodeSceneWrapper categoryTag="EL PROBLEMA DEL COSTO" gridColor={brand.red}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(239, 68, 68, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.red}`,
          borderRadius: 32,
          padding: "36px 30px",
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
            fontSize: 64,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          Servidores 24/7 para <span style={{ color: brand.red, textShadow: brand.glowRed }}>Tráfico Esporádico 🛑</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Cost Waste Log */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        <ZoomCodeBlock
          code={ec2WasteCode}
          language="bash"
          filename="infra-cost-analysis.log"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[2, 3, 4]}
          fontSize={21}
        />
      </div>

      {/* 3. BOTTOM ZONE: Takeaway Card */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.red}66`,
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
          Pagar servidores dedicados encendidos sin uso <span style={{ color: brand.red, fontWeight: 900 }}>quema el presupuesto.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
