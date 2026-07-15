import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap1/Scene1Gancho";
import { Scene2ElProblema } from "./cap1/Scene2ElProblema";
import { Scene3LaSolucion } from "./cap1/Scene3LaSolucion";
import { Scene4Cierre } from "./cap1/Scene4Cierre";
import { ReelLayout } from "../../layouts/ReelLayout";

export const MCP_TOTAL_FRAMES = 900;

export const McpVideo: React.FC = () => {
  return (
    <ReelLayout>
      {/* Scene 1: Gancho (6s) */}
      <Sequence from={0} durationInFrames={180}>
        <Scene1Gancho />
      </Sequence>

      {/* Scene 2: El Problema (8s) */}
      <Sequence from={180} durationInFrames={240}>
        <Scene2ElProblema />
      </Sequence>

      {/* Scene 3: La Solucion (10s) */}
      <Sequence from={420} durationInFrames={300}>
        <Scene3LaSolucion />
      </Sequence>

      {/* Scene 4: Cierre (6s) */}
      <Sequence from={720} durationInFrames={180}>
        <Scene4Cierre />
      </Sequence>
    </ReelLayout>
  );
};
