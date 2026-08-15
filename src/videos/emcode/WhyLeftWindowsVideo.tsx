import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1WindowsPain } from "./windows/Scene1WindowsPain";
import { Scene2LinuxPeace } from "./windows/Scene2LinuxPeace";
import { Scene3DockerNative } from "./windows/Scene3DockerNative";
import { Scene4CommentsCTA } from "./windows/Scene4CommentsCTA";

export const WHY_LEFT_WINDOWS_TOTAL_FRAMES = 930; // ~31.0s (Very comfortable reading speed)

export const WhyLeftWindowsVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={210}>
        <Scene1WindowsPain />
      </Sequence>

      <Sequence from={210} durationInFrames={270}>
        <Scene2LinuxPeace />
      </Sequence>

      <Sequence from={480} durationInFrames={270}>
        <Scene3DockerNative />
      </Sequence>

      <Sequence from={750} durationInFrames={180}>
        <Scene4CommentsCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
