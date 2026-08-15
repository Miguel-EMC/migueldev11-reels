import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

export const Scene3EcsTaskDefinition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  const ecsCode = `resource "aws_ecs_task_definition" "api" {
  family                   = "production-backend"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "1024"
  memory                   = "2048"

  container_definitions = file("task.json")
}`;

  return (
    <EmcodeSceneWrapper categoryTag="AWS ECS & FARGATE" gridColor={brand.green}>
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
            fontSize: 66,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          Entornos idénticos = <span style={{ color: brand.green, textShadow: brand.glowGreen }}>Cero estrés</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Big Code Window */}
      <div style={{ width: "100%", transform: `scale(${entrance})`, opacity: entrance }}>
        <ZoomCodeBlock
          code={ecsCode}
          language="hcl"
          filename="infra/ecs_task.tf"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[1, 3, 7]}
          fontSize={25}
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
          Encapsulas tu backend en Docker y con Terraform clonas tu infraestructura para que <span style={{ color: brand.green, fontWeight: 900 }}>Dev y Prod sean clones exactos.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
