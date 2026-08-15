import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1NoManual } from "./terraform/Scene1NoManual";
import { Scene2LambdaIaC } from "./terraform/Scene2LambdaIaC";
import { Scene3TerraformApply } from "./terraform/Scene3TerraformApply";
import { Scene4SplitArchitecture } from "./terraform/Scene4SplitArchitecture";

export const TERRAFORM_IAC_TOTAL_FRAMES = 960; // ~32.0s (Very comfortable reading speed)

export const TerraformIaCVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={210}>
        <Scene1NoManual />
      </Sequence>

      <Sequence from={210} durationInFrames={300}>
        <Scene2LambdaIaC />
      </Sequence>

      <Sequence from={510} durationInFrames={270}>
        <Scene3TerraformApply />
      </Sequence>

      <Sequence from={780} durationInFrames={180}>
        <Scene4SplitArchitecture />
      </Sequence>
    </AbsoluteFill>
  );
};
