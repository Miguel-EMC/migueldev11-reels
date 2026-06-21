import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap2/Scene1Gancho";
import { Scene2Normal } from "./cap2/Scene2Normal";
import { Scene3Vectorial } from "./cap2/Scene3Vectorial";
import { Scene4Cierre } from "./cap2/Scene4Cierre";
import { CONCEPTS_CAP2_SCENES } from "../../themes/concepts";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2Normal,
  Scene3Vectorial,
  Scene4Cierre,
];

export const ConceptsCap2: React.FC = () => {
  return (
    <AbsoluteFill>
      {CONCEPTS_CAP2_SCENES.map((scene, i) => {
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
