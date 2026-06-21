import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap2/Scene1Gancho";
import { Scene2QueEs } from "./cap2/Scene2QueEs";
import { Scene3Reglas } from "./cap2/Scene3Reglas";
import { Scene4Cierre } from "./cap2/Scene4Cierre";
import { TF_CAP2_SCENES } from "../../themes/terraform";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2QueEs,
  Scene3Reglas,
  Scene4Cierre,
];

export const TerraformCap2: React.FC = () => {
  return (
    <AbsoluteFill>
      {TF_CAP2_SCENES.map((scene, i) => {
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
