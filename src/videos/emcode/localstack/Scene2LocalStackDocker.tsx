import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene2LocalStackDocker: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const billErrorCode = `# AWS Cost Explorer Alert:
ALERTA: Instancia RDS PostgreSQL & 4x EC2 (t3.xlarge)
ESTADO: Encendidas todo el fin de semana por olvido ⚠️
TOTAL COBRADO: $847.50 USD
CONSECUENCIA: Factura real debitada de tu cuenta`;

  return (
    <EmcodeSceneWrapper categoryTag="EL ERROR TÍPICO" gridColor={brand.red}>
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
          Servidores encendidos el <span style={{ color: brand.red, textShadow: brand.glowRed }}>Fin de Semana 💀</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: AWS Bill Alert */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        <ZoomCodeBlock
          code={billErrorCode}
          language="bash"
          filename="aws-billing-alert.log"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[2, 3]}
          fontSize={22}
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
          Dejar instancias EC2 o bases de datos RDS prendidas por olvido <span style={{ color: brand.red, fontWeight: 900 }}>sale muy caro.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
