import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { EmcodeSceneWrapper } from "../../../components/viral/EmcodeSceneWrapper";
import { LiveArchitectureFlow, ViralNode, ViralEdge } from "../../../components/viral/LiveArchitectureFlow";
import { ZoomCodeBlock } from "../../../components/viral/ZoomCodeBlock";

const nodes: ViralNode[] = [
  { id: "lambda", label: "AWS Lambda", sublabel: "LangGraph State", category: "compute", x: 180, y: 65, iconType: "lambda", statusText: "CALLING", startDelay: 0 },
  { id: "bedrock", label: "Amazon Bedrock", sublabel: "Claude 3.5 Sonnet", category: "ai", x: 480, y: 65, iconType: "bedrock", statusText: "INFERENCE", startDelay: 8 },
  { id: "qdrant", label: "Vector DB", sublabel: "Qdrant Vector DB", category: "database", x: 780, y: 65, iconType: "custom", statusText: "CONTEXT", startDelay: 16 },
];

const edges: ViralEdge[] = [
  { from: "lambda", to: "bedrock", d: "M 280 65 L 380 65", color: "#00FF41", flowSpeed: 18 },
  { from: "bedrock", to: "qdrant", d: "M 580 65 L 680 65", color: "#22D3EE", flowSpeed: 18 },
];

const bedrockCode = `from langchain_aws import ChatBedrockConverse

# Conexión nativa a Amazon Bedrock sin servidores fijos
llm = ChatBedrockConverse(
    model="anthropic.claude-3-5-sonnet-20240620-v1:0",
    region_name="us-east-1",
    temperature=0.2,
)

response = llm.invoke("Genera el plan de arquitectura")`;

export const Scene3LambdaBedrock: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 12 } });

  return (
    <EmcodeSceneWrapper categoryTag="INFERENCIA SERVERLESS" gridColor={brand.cyan}>
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
            fontSize: 66,
            fontWeight: 950,
            color: brand.cream,
            lineHeight: 1.15,
            letterSpacing: "-2px",
          }}
        >
          Modelos en <span style={{ color: brand.cyan, textShadow: brand.glowCyan }}>Amazon Bedrock</span>
        </div>
      </div>

      {/* 2. MIDDLE ZONE: Live Topology Flow + Code Block */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20, transform: `scale(${entrance})`, opacity: entrance }}>
        <LiveArchitectureFlow
          title="Context Retrieval & Inference Flow"
          nodes={nodes}
          edges={edges}
          width={960}
          height={140}
        />

        <ZoomCodeBlock
          code={bedrockCode}
          language="python"
          filename="services/bedrock_agent.py"
          startFrame={0}
          typingSpeed={999}
          highlightLines={[4, 5, 6, 10]}
          fontSize={20}
        />
      </div>

      {/* 3. BOTTOM ZONE: Large Takeaway */}
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
          Invocas Claude 3.5 Sonnet por tokens, recuperando contexto de la base vectorial <span style={{ color: brand.cyan, fontWeight: 900 }}>sin pagar por GPUs ociosas.</span>
        </div>
      </div>
    </EmcodeSceneWrapper>
  );
};
