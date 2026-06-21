import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap1/Scene1Gancho";
import { Scene2QueEs } from "./cap1/Scene2QueEs";
import { Scene3LaHonestidad } from "./cap1/Scene3LaHonestidad";
import { Scene4Cierre } from "./cap1/Scene4Cierre";
import { K8S_CAP1_SCENES } from "../../themes/kubernetes";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2QueEs,
  Scene3LaHonestidad,
  Scene4Cierre,
];

export const KubernetesCap1: React.FC = () => {
  return (
    <AbsoluteFill>
      {K8S_CAP1_SCENES.map((scene, i) => {
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
