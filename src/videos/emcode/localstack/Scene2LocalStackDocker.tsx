import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";
import { LocalStackIcon, DockerIcon } from "../../../components/flat/FlatIcons";

export const Scene2LocalStackDocker: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const localstackCmd = `docker run -d -p 4566:4566 localstack/localstack
# Ready: S3, Lambda, SQS, DynamoDB, IAM
# Endpoint: http://localhost:4566
# Status: Running (0.8s)`;

  return (
    <EmcodeSceneWrapper categoryTag="LOCALSTACK & DOCKER" gridColor={brand.green}>
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
            fontSize: 70,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          Tu propio <span style={{ color: brand.green, textShadow: brand.glowGreen }}>AWS en local 💻</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Dual Tools + Big Terminal */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20, transform: `scale(${entrance})`, opacity: entrance }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ background: "rgba(10, 20, 40, 0.9)", border: `2.5px solid ${brand.green}`, borderRadius: 24, padding: "18px 20px", display: "flex", alignItems: "center", gap: 16 }}>
            <LocalStackIcon size={52} />
            <div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 24, fontWeight: 900, color: brand.cream }}>LocalStack</div>
              <div style={{ fontFamily: brand.fontMono, fontSize: 13, color: brand.green, fontWeight: 700 }}>AWS MOCK ENGINE</div>
            </div>
          </div>

          <div style={{ background: "rgba(10, 20, 40, 0.9)", border: `2.5px solid ${brand.cyan}`, borderRadius: 24, padding: "18px 20px", display: "flex", alignItems: "center", gap: 16 }}>
            <DockerIcon size={52} />
            <div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 24, fontWeight: 900, color: brand.cream }}>Docker</div>
              <div style={{ fontFamily: brand.fontMono, fontSize: 13, color: brand.cyan, fontWeight: 700 }}>PORT 4566</div>
            </div>
          </div>
        </div>

        <ZoomCodeBlock
          code={localstackCmd}
          language="bash"
          filename="start-localstack.sh"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[1, 2]}
          fontSize={22}
        />
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway */}
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
          Corre servicios de AWS completos directamente en tu máquina <span style={{ color: brand.green, fontWeight: 900 }}>sin pagar nada.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
