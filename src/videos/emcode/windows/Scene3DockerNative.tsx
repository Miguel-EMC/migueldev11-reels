import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";
import { DockerIcon } from "../../../components/flat/FlatIcons";

export const Scene3DockerNative: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const dockerCode = `docker-compose up -d --build
# [+] Building 1.2s (8/8) FINISHED
# ✔ Network app_default Created
# ✔ Container postgres  Started (0.3s)
# ✔ Container api       Started (0.4s)`;

  return (
    <EmcodeSceneWrapper categoryTag="NATIVE DOCKER" gridColor={brand.cyan}>
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
            fontSize: 74,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          Docker <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>vuela aquí ⚡</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Docker Hero Banner + Terminal */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20, transform: `scale(${entrance})`, opacity: entrance }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 24,
            background: "rgba(10, 20, 40, 0.85)",
            border: `2.5px solid ${brand.cyan}66`,
            borderRadius: 24,
            padding: "20px 28px",
            boxSizing: "border-box",
          }}
        >
          <DockerIcon size={72} />
          <div>
            <div style={{ fontFamily: brand.fontMono, fontSize: 16, fontWeight: 800, color: brand.cyan, letterSpacing: 2, textTransform: "uppercase" }}>
              NATIVE LINUX CGROUPS
            </div>
            <div style={{ fontFamily: brand.fontSans, fontSize: 30, fontWeight: 900, color: brand.cream }}>
              Direct Kernel Execution
            </div>
          </div>
        </div>

        <ZoomCodeBlock
          code={dockerCode}
          language="bash"
          filename="docker-compose.yml"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[1, 4, 5]}
          fontSize={24}
        />
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway Card */}
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
          Docker corre nativo, <span style={{ color: brand.cyan, fontWeight: 900 }}>sin comerse toda tu RAM</span> con máquinas virtuales.
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
