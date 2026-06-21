import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap1/Scene1Gancho";
import { Scene2QueEs } from "./cap1/Scene2QueEs";
import { Scene3NivelBase } from "./cap1/Scene3NivelBase";
import { Scene4Cliffhanger } from "./cap1/Scene4Cliffhanger";

// 65 seconds total sequence @ 30fps = 1950 frames
export const CLAUDE_CAP1_TOTAL_FRAMES = 1950;

const TIME_MAPPING = [
  { id: "gancho",    from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "que-es",    from: 240,  duration: 600 },  // 0:08 - 0:28 (20s)
  { id: "nivelbase", from: 840,  duration: 660 },  // 0:28 - 0:50 (22s)
  { id: "cta",       from: 1500, duration: 450 },  // 0:50 - 1:05 (15s)
];

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2QueEs,
  Scene3NivelBase,
  Scene4Cliffhanger,
];

export const ClaudeCap1: React.FC = () => {
  return (
    <AbsoluteFill>
      {TIME_MAPPING.map((scene, i) => {
        const Comp = SCENE_COMPONENTS[i];
        return (
          <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration}>
            <Comp />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
