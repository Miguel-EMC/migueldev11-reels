import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap1/Scene1Gancho";
import { Scene2QueEs } from "./cap1/Scene2QueEs";
import { Scene3PorQue } from "./cap1/Scene3PorQue";
import { Scene4Cierre } from "./cap1/Scene4Cierre";
import { CONCEPTS_CAP1_SCENES } from "../../themes/concepts";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2QueEs,
  Scene3PorQue,
  Scene4Cierre,
];

export const ConceptsCap1: React.FC = () => {
  return (
    <AbsoluteFill>
      {CONCEPTS_CAP1_SCENES.map((scene, i) => {
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
