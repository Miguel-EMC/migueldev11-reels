import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap1/Scene1Gancho";
import { Scene2ElProblema } from "./cap1/Scene2ElProblema";
import { Scene3LaSolucion } from "./cap1/Scene3LaSolucion";
import { Scene4Cliffhanger } from "./cap1/Scene4Cliffhanger";
import { DOCKER_CAP1_SCENES } from "../../themes/docker";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2ElProblema,
  Scene3LaSolucion,
  Scene4Cliffhanger,
];

export const DockerCap1: React.FC = () => {
  return (
    <AbsoluteFill>
      {DOCKER_CAP1_SCENES.map((scene, i) => {
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
