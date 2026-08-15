import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { EmcodeLogo } from "../../../components/flat/EmcodeLogo";

export const Scene4SaveVideoCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isCtaPhase = frame >= 310;
  const currentFrame = isCtaPhase ? frame - 310 : frame;
  const entrance = spring({ frame: currentFrame, fps, config: { damping: 12 } });
  const pulse = Math.sin(frame / 6) * 0.05 + 1;

  const services = [
    { name: "S3 Buckets", icon: "🪣", desc: "Almacenamiento de archivos y assets" },
    { name: "AWS Lambda", icon: "λ", desc: "Funciones serverless Python / Node" },
    { name: "DynamoDB", icon: "⚡", desc: "Base de datos NoSQL ultra rápida" },
    { name: "SQS & SNS", icon: "📬", desc: "Colas de mensajería y eventos" },
  ];

  return (
    <EmcodeSceneWrapper categoryTag="PRACTICA SIN FACTURAS" gridColor={brand.green}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(0, 255, 65, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.green}`,
          borderRadius: 32,
          padding: "36px 30px",
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
            fontSize: 64,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          {!isCtaPhase ? (
            <>
              Servicios AWS <span style={{ color: brand.green, textShadow: brand.glowGreen }}>100% Gratis 🆓</span>
            </>
          ) : (
            <>
              Guarda y <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Practica Hoy 🚀</span>
            </>
          )}
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Services Grid or Brand Card */}
      {!isCtaPhase ? (
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, transform: `scale(${entrance})`, opacity: entrance }}>
          {services.map((s, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(10, 20, 40, 0.9)",
                border: `2px solid ${brand.green}66`,
                borderRadius: 20,
                padding: "20px 16px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 36 }}>{s.icon}</span>
              <span style={{ fontFamily: brand.fontSans, fontSize: 24, fontWeight: 900, color: brand.cream }}>{s.name}</span>
              <span style={{ fontFamily: brand.fontSans, fontSize: 16, color: brand.textDim }}>{s.desc}</span>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            background: "rgba(10, 20, 40, 0.9)",
            backdropFilter: "blur(16px)",
            border: `3px solid ${brand.green}`,
            borderRadius: 32,
            padding: "36px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            boxShadow: `0 20px 50px rgba(0,0,0,0.7), ${brand.glowGreen}44`,
            transform: `scale(${entrance})`,
            opacity: entrance,
            boxSizing: "border-box",
          }}
        >
          <EmcodeLogo size={80} showText={true} tagline="CLOUD ARCHITECTURE & LOCALSTACK" />
          <div style={{ fontFamily: brand.fontSans, fontSize: 24, fontWeight: 800, color: brand.cream, textAlign: "center" }}>
            Template de Docker Compose listo con AWS CLI
          </div>
        </div>
      )}

      {/* 3. BOTTOM ZONE: Large CTA Box */}
      <div
        style={{
          border: `3px dashed ${brand.green}`,
          borderRadius: 26,
          padding: "24px 35px",
          backgroundColor: "rgba(0, 255, 65, 0.1)",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${pulse})`,
        }}
      >
        <div style={{ fontFamily: brand.fontMono, fontSize: 30, fontWeight: 900, color: brand.green, textShadow: brand.glowGreen }}>
          💬 COMENTA "LOCALSTACK"
        </div>
        <div style={{ fontFamily: brand.fontSans, fontSize: 20, color: brand.cream, marginTop: 8, fontWeight: 700 }}>
          Y guarda este video para tu próxima práctica en la nube 🔖
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
