import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { AGENTS_CAP1_SCENES } from "../../themes/agents";
import { Scene1Gancho } from "./cap1/Scene1Gancho";
import { Scene2Contraste } from "./cap1/Scene2Contraste";
import { Scene3Ejemplo } from "./cap1/Scene3Ejemplo";
import { Scene4CTA } from "./cap1/Scene4CTA";

const COMPONENTS = [
  Scene1Gancho,
  Scene2Contraste,
  Scene3Ejemplo,
  Scene4CTA,
];

export const AgentsCap1: React.FC = () => {
  return (
    <AbsoluteFill>
      {AGENTS_CAP1_SCENES.map((scene, i) => {
        const Comp = COMPONENTS[i];
        return (
          <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration}>
            <Comp />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
