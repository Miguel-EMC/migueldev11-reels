import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap2/Scene1Gancho";
import { Scene2ProblemaCadena } from "./cap2/Scene2ProblemaCadena";
import { Scene3SolucionGrafo } from "./cap2/Scene3SolucionGrafo";
import { Scene4CTA } from "./cap2/Scene4CTA";

// 75 seconds total sequence @ 30fps = 2250 frames
export const AGENTS_CAP2_TOTAL_FRAMES = 2250;

const TIME_MAPPING = [
  { id: "gancho",   from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "cadena",   from: 240,  duration: 600 },  // 0:08 - 0:28 (20s)
  { id: "grafo",    from: 840,  duration: 660 },  // 0:28 - 0:50 (22s)
  { id: "cta",      from: 1500, duration: 750 },  // 0:50 - 1:15 (25s)
];

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2ProblemaCadena,
  Scene3SolucionGrafo,
  Scene4CTA,
];

export const AgentsCap2: React.FC = () => {
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
