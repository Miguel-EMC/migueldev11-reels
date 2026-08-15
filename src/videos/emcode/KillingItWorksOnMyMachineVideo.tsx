import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1ToxicPhrase } from "./itworksonmymachine/Scene1ToxicPhrase";
import { Scene2DockerTerraformCure } from "./itworksonmymachine/Scene2DockerTerraformCure";
import { Scene3EcsTaskDefinition } from "./itworksonmymachine/Scene3EcsTaskDefinition";
import { Scene4GodLevelCTA } from "./itworksonmymachine/Scene4GodLevelCTA";

export const KILLING_IT_WORKS_TOTAL_FRAMES = 960; // ~32.0s (Very comfortable reading speed)

export const KillingItWorksOnMyMachineVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={210}>
        <Scene1ToxicPhrase />
      </Sequence>

      <Sequence from={210} durationInFrames={270}>
        <Scene2DockerTerraformCure />
      </Sequence>

      <Sequence from={480} durationInFrames={300}>
        <Scene3EcsTaskDefinition />
      </Sequence>

      <Sequence from={780} durationInFrames={180}>
        <Scene4GodLevelCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
