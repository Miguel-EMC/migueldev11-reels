import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap1/Scene1Gancho";
import { Scene2Steps } from "./cap1/Scene2Steps";
import { Scene3Cierre } from "./cap1/Scene3Cierre";
import { ReelLayout } from "../../layouts/ReelLayout";

export const EXTENSIONS_TOTAL_FRAMES = 1050;

export const ExtensionsVideo: React.FC = () => {
  return (
    <ReelLayout>
      {/* Scene 1: Gancho (3s) */}
      <Sequence from={0} durationInFrames={90}>
        <Scene1Gancho />
      </Sequence>

      {/* Scene 2: Steps (25s) */}
      <Sequence from={90} durationInFrames={750}>
        <Scene2Steps />
      </Sequence>

      {/* Scene 3: Cierre (7s) */}
      <Sequence from={840} durationInFrames={210}>
        <Scene3Cierre />
      </Sequence>
    </ReelLayout>
  );
};
