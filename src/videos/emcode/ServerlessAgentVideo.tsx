import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1HookServerless } from "./serverless/Scene1HookServerless";
import { Scene2ApiGatewayLambda } from "./serverless/Scene2ApiGatewayLambda";
import { Scene3LambdaBedrock } from "./serverless/Scene3LambdaBedrock";
import { Scene4StepFunctionsCierre } from "./serverless/Scene4StepFunctionsCierre";

export const SERVERLESS_AGENT_TOTAL_FRAMES = 950; // ~31.6s (Very comfortable reading speed)

export const ServerlessAgentVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={210}>
        <Scene1HookServerless />
      </Sequence>

      <Sequence from={210} durationInFrames={280}>
        <Scene2ApiGatewayLambda />
      </Sequence>

      <Sequence from={490} durationInFrames={280}>
        <Scene3LambdaBedrock />
      </Sequence>

      <Sequence from={770} durationInFrames={180}>
        <Scene4StepFunctionsCierre />
      </Sequence>
    </AbsoluteFill>
  );
};
