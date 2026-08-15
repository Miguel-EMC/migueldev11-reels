import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";

export const Scene1ToxicPhrase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });
  const shake = frame > 40 && frame < 80 ? Math.sin(frame * 0.8) * 6 : 0;

  return (
    <EmcodeSceneWrapper categoryTag="CULTURA DEVOPS" gridColor={brand.red}>
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
          transform: `scale(${entrance}) translateX(${shake}px)`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: brand.fontSans,
            fontSize: 68,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          ¿En tu máquina <span style={{ color: brand.green, textShadow: brand.glowGreen }}>sí funciona</span> pero en producción <span style={{ color: brand.red, textShadow: brand.glowRed }}>se cae? 🤡</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Giant Warning Callout */}
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
          gap: 24,
          boxShadow: `0 20px 60px rgba(0,0,0,0.7), ${brand.glowRed}33`,
          transform: `scale(${entrance})`,
          opacity: entrance,
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontFamily: brand.fontMono, fontSize: 26, fontWeight: 900, color: brand.red, letterSpacing: 4 }}>
          [ ANTI-PATRÓN N° 1 ]
        </div>

        <div style={{ fontFamily: brand.fontSans, fontSize: 52, fontWeight: 900, color: brand.cream, lineHeight: 1.25 }}>
          "En mi máquina sí funciona..."
        </div>

        <div style={{ fontFamily: brand.fontMono, fontSize: 30, color: brand.orange, fontWeight: 800 }}>
          🛑 ¡Esa frase ya no es una excusa!
        </div>
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway */}
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
        <div style={{ fontFamily: brand.fontSans, fontSize: 32, fontWeight: 800, color: brand.cream, lineHeight: 1.35 }}>
          Descubre los <span style={{ color: brand.red, fontWeight: 900 }}>3 errores silenciosos</span> que rompen tus despliegues.
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
