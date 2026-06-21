import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap3/Scene1Gancho";
import { Scene2Mentalidad } from "./cap3/Scene2Mentalidad";
import { Scene3CuandoConfiar } from "./cap3/Scene3CuandoConfiar";
import { Scene4Cierre } from "./cap3/Scene4Cierre";
import { CLAUDE_CAP3_SCENES } from "../../themes/claude";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2Mentalidad,
  Scene3CuandoConfiar,
  Scene4Cierre,
];

export const ClaudeCap3: React.FC = () => {
  return (
    <AbsoluteFill>
      {CLAUDE_CAP3_SCENES.map((scene, i) => {
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
