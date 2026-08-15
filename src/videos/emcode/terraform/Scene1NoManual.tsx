import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";

export const Scene1NoManual: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 6) * 0.05 + 1;

  return (
    <EmcodeSceneWrapper categoryTag="ANTIPATRÓN CLOUD" gridColor={brand.red}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(239, 68, 68, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.red}`,
          borderRadius: 32,
          padding: "40px 30px",
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
            fontSize: 66,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          ¿Crear servidores <span style={{ color: brand.red, textShadow: brand.glowRed }}>con clics? 🛑</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Warning Callout */}
      <div
        style={{
          width: "100%",
          background: "rgba(239, 68, 68, 0.15)",
          backdropFilter: "blur(20px)",
          border: `3px solid ${brand.red}`,
          borderRadius: 32,
          padding: "50px 35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 20,
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowRed}33`,
          transform: `scale(${pulse})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontFamily: brand.fontMono, fontSize: 24, fontWeight: 900, color: brand.red, letterSpacing: 4 }}>
          [ CLICKOPS EN AWS CONSOLE ]
        </div>

        <div style={{ fontFamily: brand.fontSans, fontSize: 48, fontWeight: 900, color: brand.cream, lineHeight: 1.25 }}>
          "Estás jugando a la ruleta rusa en producción 🎲"
        </div>

        <div style={{ fontFamily: brand.fontMono, fontSize: 26, color: brand.orange, fontWeight: 800 }}>
          ⚠️ Sin historial, sin backups, sin control.
        </div>
      </div>

      {/* 3. BOTTOM ZONE: Takeaway */}
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
          Crear infraestructura a mano es la principal causa de <span style={{ color: brand.red, fontWeight: 900 }}>caídas graves en la nube.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
