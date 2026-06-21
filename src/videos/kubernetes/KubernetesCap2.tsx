import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap2/Scene1Gancho";
import { Scene2Pod } from "./cap2/Scene2Pod";
import { Scene3Deployment } from "./cap2/Scene3Deployment";
import { Scene4Service } from "./cap2/Scene4Service";
import { K8S_CAP2_SCENES } from "../../themes/kubernetes";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2Pod,
  Scene3Deployment,
  Scene4Service,
];

export const KubernetesCap2: React.FC = () => {
  return (
    <AbsoluteFill>
      {K8S_CAP2_SCENES.map((scene, i) => {
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
