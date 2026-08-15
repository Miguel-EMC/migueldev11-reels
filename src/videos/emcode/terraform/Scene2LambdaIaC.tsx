import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene2LambdaIaC: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const manualFailCode = `# ❌ Consecuencias de ClickOps:
1. Historial de versiones: NINGUNO (¿Quién modificó el Security Group?)
2. Config Drift: Desincronización silenciosa entre Dev y Prod
3. Disaster Recovery: 6+ horas intentando recrear la VPC y RDS
4. Resultado: Pérdida millonaria durante el downtime en vivo`;

  return (
    <EmcodeSceneWrapper categoryTag="EL DOLOR DE CLICKOPS" gridColor={brand.red}>
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
          Cero Historial y <span style={{ color: brand.red, textShadow: brand.glowRed }}>Horas Perdidas ⏳</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Drift & Outage Log */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        <ZoomCodeBlock
          code={manualFailCode}
          language="bash"
          filename="outage-incident-report.log"
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
          Nadie sabe qué cambió y recrear un servidor caído <span style={{ color: brand.red, fontWeight: 900 }}>toma horas de estrés.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
