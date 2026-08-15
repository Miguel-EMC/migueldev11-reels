import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { CreditCardCutIcon } from "../../../components/flat/FlatIcons";

export const Scene1CreditCardFear: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 6) * 0.05 + 1;

  return (
    <EmcodeSceneWrapper categoryTag="CLOUD SIN FACTURAS" gridColor={brand.orange}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(255, 122, 26, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.orange}`,
          borderRadius: 32,
          padding: "40px 30px",
          width: "100%",
          textAlign: "center",
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowOrange}`,
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
          ¿Aprender AWS sin <span style={{ color: brand.orange, textShadow: brand.glowOrange }}>Tarjeta? 💳🔥</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Credit Card Visual */}
      <div
        style={{
          width: "100%",
          background: "rgba(255, 122, 26, 0.12)",
          backdropFilter: "blur(20px)",
          border: `3px solid ${brand.orange}`,
          borderRadius: 32,
          padding: "45px 35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 20,
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowOrange}33`,
          transform: `scale(${pulse})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <CreditCardCutIcon size={120} />

        <div style={{ fontFamily: brand.fontMono, fontSize: 32, fontWeight: 900, color: brand.red, textShadow: brand.glowRed }}>
          FACTURA: $1,000 USD 😱
        </div>

        <div style={{ fontFamily: brand.fontSans, fontSize: 26, fontWeight: 800, color: brand.cream }}>
          ¿Miedo a cargos sorpresa en tu tarjeta?
        </div>
      </div>

      {/* 3. BOTTOM ZONE: Takeaway */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.orange}66`,
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
          Aprende Cloud computing <span style={{ color: brand.orange, fontWeight: 900 }}>sin pagar un solo centavo.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
