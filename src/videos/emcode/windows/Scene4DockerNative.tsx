import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";
import { DockerIcon, AwsLogo } from "../../../components/flat/FlatIcons";

export const Scene4DockerNative: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Internal phases:
  // Phase 1 (0-200 frames): Docker Nativo sin capas pesadas + Bash vuela
  // Phase 2 (200-405 frames): Paridad 100% Local = AWS Cluster
  const isParityPhase = frame >= 200;
  const currentFrame = isParityPhase ? frame - 200 : frame;
  const entrance = spring({ frame: currentFrame, fps, config: { damping: 12 } });

  const dockerNativeCode = `docker run -d --name api-service -p 8080:8080 emcode/api:v1
# ✔ Utilizando cgroups nativos del kernel Linux
# ✔ Consumo de RAM: 320 MB (vs 12 GB en Windows)
# ✔ Tiempo de arranque: 0.28 segundos ⚡
# ✔ Status: Running sin máquinas virtuales intermedias`;

  const awsParityCode = `# Local vs AWS ECS / EKS Cluster:
LOCAL: Docker Engine (Linux x86_64) -> 100% Match
CLOUD: AWS Fargate / ECS Cluster    -> 100% Match
RESULTADO: Cero sorpresas en producción 🎯`;

  return (
    <EmcodeSceneWrapper categoryTag="DOCKER NATIVO & AWS" gridColor={brand.cyan}>
      {/* 1. TOP ZONE: Massive Title Banner */}
      <div
        style={{
          background: "rgba(34, 211, 238, 0.12)",
          backdropFilter: "blur(14px)",
          border: `4px solid ${brand.cyan}`,
          borderRadius: 32,
          padding: "36px 30px",
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
            fontSize: 66,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          {!isParityPhase ? (
            <>
              Docker corre <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>Nativo ⚡</span>
            </>
          ) : (
            <>
              Paridad Total con <span style={{ color: brand.orange, textShadow: brand.glowOrange }}>AWS Cloud ☁️</span>
            </>
          )}
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Responsive Cards */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16, transform: `scale(${entrance})`, opacity: entrance }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(10, 20, 40, 0.9)",
            border: `2.5px solid ${isParityPhase ? brand.orange : brand.cyan}88`,
            borderRadius: 24,
            padding: "16px 24px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {!isParityPhase ? <DockerIcon size={64} /> : <AwsLogo size={64} />}
            <div>
              <div style={{ fontFamily: brand.fontMono, fontSize: 14, fontWeight: 800, color: isParityPhase ? brand.orange : brand.cyan, letterSpacing: 2 }}>
                {!isParityPhase ? "ZERO VIRTUALIZATION OVERHEAD" : "DEV = STAGING = PRODUCTION"}
              </div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 26, fontWeight: 900, color: brand.cream }}>
                {!isParityPhase ? "Bash Terminal & Kernel cgroups" : "AWS ECS / EKS Cluster"}
              </div>
            </div>
          </div>
        </div>

        <ZoomCodeBlock
          code={!isParityPhase ? dockerNativeCode : awsParityCode}
          language="bash"
          filename={!isParityPhase ? "docker-execution.sh" : "aws-parity-check.log"}
          startFrame={0}
          typingSpeed={999}
          highlightLines={!isParityPhase ? [1, 3] : [2, 3, 4]}
          fontSize={22}
        />
      </div>

      {/* 3. BOTTOM ZONE: Takeaway Card */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.cyan}66`,
          borderRadius: 24,
          padding: "22px 35px",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
          transform: `scale(${entrance})`,
          opacity: entrance,
        }}
      >
        <div style={{ fontFamily: brand.fontSans, fontSize: 30, fontWeight: 800, color: brand.cream, lineHeight: 1.35 }}>
          {!isParityPhase ? (
            <>
              La terminal vuela y Docker <span style={{ color: brand.cyan, fontWeight: 900 }}>no devora tu RAM.</span>
            </>
          ) : (
            <>
              Lo que pruebas en local se comporta <span style={{ color: brand.orange, fontWeight: 900 }}>exactamente igual en la nube.</span>
            </>
          )}
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
