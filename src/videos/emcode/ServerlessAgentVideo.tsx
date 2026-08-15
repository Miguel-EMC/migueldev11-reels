import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Scene1HookServerless } from "./serverless/Scene1HookServerless";
import { Scene2ApiGatewayLambda } from "./serverless/Scene2ApiGatewayLambda";
import { Scene3LambdaBedrock } from "./serverless/Scene3LambdaBedrock";
import { Scene4StepFunctionsCierre } from "./serverless/Scene4StepFunctionsCierre";
import { VoiceCaptions, CaptionItem } from "../../components/viral/VoiceCaptions";
import { brand } from "../../themes/brand";

// Total Duration: 51.539 seconds @ 30 FPS = 1547 frames (Exact match with audio)
export const SERVERLESS_AGENT_TOTAL_FRAMES = 1547;

const captions: CaptionItem[] = [
  { startFrame: 0, endFrame: 215, text: "Así construyo un Agente de IA que escala a miles de usuarios...", highlightWords: ["Agente", "IA", "escala"], accentColor: brand.cyan },
  { startFrame: 215, endFrame: 310, text: "...pagando $0 dólares en servidores inactivos 🤖⚡", highlightWords: ["$0", "servidores", "inactivos"], accentColor: brand.green },
  { startFrame: 310, endFrame: 550, text: "Mantener servidores dedicados 24/7 para modelos de IA...", highlightWords: ["servidores", "dedicados", "24/7"], accentColor: brand.red },
  { startFrame: 550, endFrame: 705, text: "...con tráfico esporádico quema el presupuesto de tu proyecto 💸", highlightWords: ["tráfico", "presupuesto", "quema"], accentColor: brand.orange },
  { startFrame: 705, endFrame: 890, text: "Conectamos API Gateway a AWS Lambda en Python 🐍", highlightWords: ["API", "Gateway", "Lambda", "Python"], accentColor: brand.cyan },
  { startFrame: 890, endFrame: 1040, text: "La Lambda orquesta el prompt con Bedrock o Claude...", highlightWords: ["prompt", "Bedrock", "Claude"], accentColor: brand.cyan },
  { startFrame: 1040, endFrame: 1185, text: "...y el estado se guarda en DynamoDB pagando por milisegundos ⚡", highlightWords: ["DynamoDB", "milisegundos"], accentColor: brand.green },
  { startFrame: 1185, endFrame: 1547, text: "Comenta AGENTE para recibir el diagrama y el código de Terraform 💬", highlightWords: ["AGENTE", "diagrama", "Terraform"], accentColor: brand.green },
];

export const ServerlessAgentVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      {/* 1. Master Spoken Audio (Without clipping or shortening) */}
      <Audio src={staticFile("EmcodeServerlessAgent.mp3")} volume={1} />

      {/* 2. Visual Scenes Synchronized with Voice Timestamps */}
      <Sequence from={0} durationInFrames={310}>
        <Scene1HookServerless />
      </Sequence>

      <Sequence from={310} durationInFrames={395}>
        <Scene2ApiGatewayLambda />
      </Sequence>

      <Sequence from={705} durationInFrames={480}>
        <Scene3LambdaBedrock />
      </Sequence>

      <Sequence from={1185} durationInFrames={362}>
        <Scene4StepFunctionsCierre />
      </Sequence>

      {/* 3. Floating Synchronized Kinetic Captions */}
      <VoiceCaptions captions={captions} />
    </AbsoluteFill>
  );
};
