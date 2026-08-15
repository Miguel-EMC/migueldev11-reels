import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1CreditCardFear } from "./localstack/Scene1CreditCardFear";
import { Scene2LocalStackDocker } from "./localstack/Scene2LocalStackDocker";
import { Scene3MockBoto3 } from "./localstack/Scene3MockBoto3";
import { Scene4SaveVideoCTA } from "./localstack/Scene4SaveVideoCTA";

export const TEST_AWS_NO_CARD_TOTAL_FRAMES = 960; // ~32.0s (Very comfortable reading speed)

export const TestAwsNoCreditCardVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={210}>
        <Scene1CreditCardFear />
      </Sequence>

      <Sequence from={210} durationInFrames={270}>
        <Scene2LocalStackDocker />
      </Sequence>

      <Sequence from={480} durationInFrames={300}>
        <Scene3MockBoto3 />
      </Sequence>

      <Sequence from={780} durationInFrames={180}>
        <Scene4SaveVideoCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
