import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene2LinuxPeace: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const linuxCode = `sudo pacman -Syu docker docker-compose
# Resolviendo dependencias nativas del kernel
# Actualización en caliente completada en 5s.
# Status: 0 reinicios pendientes.`;

  return (
    <EmcodeSceneWrapper categoryTag="MANJARO LINUX" gridColor={brand.green}>
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
            fontSize: 74,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          La paz de <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Linux 🐧</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Big Terminal Window */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        <ZoomCodeBlock
          code={linuxCode}
          language="bash"
          filename="manjaro-terminal"
          startFrame={0}
          typingSpeed={4}
          highlightLines={[1, 3]}
          fontSize={26}
        />
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway Card */}
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
          Gestión de paquetes limpia, control total de tu máquina y <span style={{ color: brand.green, fontWeight: 900 }}>cero reinicios sorpresa.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
