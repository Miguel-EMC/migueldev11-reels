import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { LiveArchitectureFlow, ViralNode, ViralEdge } from "../../../components/viral/LiveArchitectureFlow";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

const nodes: ViralNode[] = [
  { id: "apigw", label: "API Gateway", sublabel: "HTTP POST /v1/chat", category: "api", x: 240, y: 65, iconType: "apigw", statusText: "ACTIVE", startDelay: 0 },
  { id: "lambda", label: "AWS Lambda", sublabel: "LangGraph State", category: "compute", x: 720, y: 65, iconType: "lambda", statusText: "TRIGGERED", startDelay: 10 },
];

const edges: ViralEdge[] = [
  { from: "apigw", to: "lambda", d: "M 360 65 L 600 65", color: "#00FF41", flowSpeed: 18 },
];

const pythonCode = `import json
from src.agent import build_langgraph_agent

agent = build_langgraph_agent()

def lambda_handler(event, context):
    body = json.loads(event.get("body", "{}"))
    response = agent.invoke({"messages": [("user", body["prompt"])]})
    return {"statusCode": 200, "body": json.dumps({"output": response["content"]})}`;

export const Scene2ApiGatewayLambda: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <EmcodeSceneWrapper categoryTag="INGESTION STREAM" gridColor={brand.green}>
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
          API Gateway ➔ <span style={{ color: brand.green, textShadow: brand.glowGreen }}>AWS Lambda</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Live Topology Flow + Code Block */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20, transform: `scale(${entrance})`, opacity: entrance }}>
        <LiveArchitectureFlow
          title="Event-Driven Ingestion Stream"
          nodes={nodes}
          edges={edges}
          width={960}
          height={140}
        />

        <ZoomCodeBlock
          code={pythonCode}
          language="python"
          filename="lambda_handler.py"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[7, 8]}
          fontSize={20}
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
          Ejecutamos la lógica de LangGraph solo cuando hay una petición. <span style={{ color: brand.green, fontWeight: 900 }}>Cero costo en reposo.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
