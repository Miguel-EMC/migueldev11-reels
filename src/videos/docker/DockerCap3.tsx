import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap3/Scene1Gancho";
import { Scene2PorQue } from "./cap3/Scene2PorQue";
import { Scene3LaSolucion } from "./cap3/Scene3LaSolucion";
import { Scene4Cierre } from "./cap3/Scene4Cierre";
import { DOCKER_CAP3_SCENES } from "../../themes/docker";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2PorQue,
  Scene3LaSolucion,
  Scene4Cierre,
];

export const DockerCap3: React.FC = () => {
  return (
    <AbsoluteFill>
      {DOCKER_CAP3_SCENES.map((scene, i) => {
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
