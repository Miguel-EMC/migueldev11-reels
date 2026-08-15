import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";
import { LinuxIcon } from "../../../components/flat/FlatIcons";

export const Scene3LinuxPeace: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const linuxCode = `sudo pacman -Syu neovim docker tmux zsh
# [Manjaro / Arch Linux Kernel 6.8]
# :: Sincronizando repositorios de paquetes...
# :: Instalación y compilación nativa completada en 2.4s ⚡
# :: 0 reinicios obligatorios. 100% Estabilidad.`;

  return (
    <EmcodeSceneWrapper categoryTag="MANJARO & ARCH LINUX" gridColor={brand.green}>
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
            fontSize: 70,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          El salto a <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Manjaro / Arch 🐧</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Linux Distro Hero + Terminal */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 18, transform: `scale(${entrance})`, opacity: entrance }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 22,
            background: "rgba(10, 20, 40, 0.9)",
            border: `2.5px solid ${brand.green}88`,
            borderRadius: 24,
            padding: "18px 24px",
            boxSizing: "border-box",
          }}
        >
          <LinuxIcon size={72} />
          <div>
            <div style={{ fontFamily: brand.fontMono, fontSize: 16, fontWeight: 800, color: brand.green, letterSpacing: 2, textTransform: "uppercase" }}>
              DISTRO DEV PRIMARIA
            </div>
            <div style={{ fontFamily: brand.fontSans, fontSize: 30, fontWeight: 900, color: brand.cream }}>
              Manjaro / Arch Linux
            </div>
          </div>
        </div>

        <ZoomCodeBlock
          code={linuxCode}
          language="bash"
          filename="manjaro-zsh-terminal"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[1, 4]}
          fontSize={23}
        />
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway Card */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.green}66`,
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
          Gestión de paquetes limpia, ligereza extrema y <span style={{ color: brand.green, fontWeight: 900 }}>control absoluto.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
