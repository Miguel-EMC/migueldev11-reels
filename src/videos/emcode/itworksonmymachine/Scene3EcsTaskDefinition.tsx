import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";
import { DockerIcon, TerraformIcon } from "../../../components/flat/FlatIcons";

export const Scene3EcsTaskDefinition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isTerraformPhase = frame >= 180;
  const currentFrame = isTerraformPhase ? frame - 180 : frame;
  const entrance = spring({ frame: currentFrame, fps, config: { damping: 12 } });

  const dockerImmutableCode = `# Dockerfile Inmutable Multistage:
FROM node:20-alpine AS builder
WORKDIR /app && COPY . .
RUN npm ci --production && npm run build

FROM node:20-alpine AS runner
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]`;

  const terraformEcsCode = `# Terraform ECS Task Definition:
resource "aws_ecs_task_definition" "api" {
  family                   = "emcode-api"
  requires_compatibilities = ["FARGATE"]
  container_definitions = jsonencode([{
    name  = "api-service"
    image = "123456.dkr.ecr.us-east-1.amazonaws.com/api:v1.0"
  }])
}`;

  return (
    <EmcodeSceneWrapper categoryTag="LA SOLUCIÓN PROFESIONAL" gridColor={brand.green}>
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
          {!isTerraformPhase ? (
            <>
              Contenedores <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>Inmutables 🐳</span>
            </>
          ) : (
            <>
              Infraestructura con <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Terraform ⚡</span>
            </>
          )}
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Dual Tools + Code */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16, transform: `scale(${entrance})`, opacity: entrance }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(10, 20, 40, 0.9)",
            border: `2.5px solid ${!isTerraformPhase ? brand.cyan : brand.green}88`,
            borderRadius: 24,
            padding: "16px 24px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {!isTerraformPhase ? <DockerIcon size={64} /> : <TerraformIcon size={64} />}
            <div>
              <div style={{ fontFamily: brand.fontMono, fontSize: 14, fontWeight: 800, color: !isTerraformPhase ? brand.cyan : brand.green, letterSpacing: 2 }}>
                {!isTerraformPhase ? "ZERO DRIFT ENVIRONMENT" : "AUTOMATED CLOUD DEPLOY"}
              </div>
              <div style={{ fontFamily: brand.fontSans, fontSize: 26, fontWeight: 900, color: brand.cream }}>
                {!isTerraformPhase ? "Docker Immutable Image" : "AWS ECS & Kubernetes"}
              </div>
            </div>
          </div>
        </div>

        <ZoomCodeBlock
          code={!isTerraformPhase ? dockerImmutableCode : terraformEcsCode}
          language={!isTerraformPhase ? "dockerfile" : "hcl"}
          filename={!isTerraformPhase ? "Dockerfile" : "main.tf"}
          startFrame={0}
          typingSpeed={999}
          highlightLines={!isTerraformPhase ? [2, 5] : [2, 6]}
          fontSize={21}
        />
      </div>

      {/* 3. BOTTOM ZONE: Takeaway Card */}
      <div
        style={{
          background: "rgba(10, 20, 40, 0.8)",
          border: `2px solid ${brand.green}66`,
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
          Si corre en el contenedor, <span style={{ color: brand.green, fontWeight: 900 }}>corre idéntico en la nube.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
