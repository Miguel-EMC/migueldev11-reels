import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap2/Scene1Gancho";
import { Scene2LaImagen } from "./cap2/Scene2LaImagen";
import { Scene3Contenedor } from "./cap2/Scene3Contenedor";
import { Scene4Cierre } from "./cap2/Scene4Cierre";
import { DOCKER_CAP2_SCENES } from "../../themes/docker";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2LaImagen,
  Scene3Contenedor,
  Scene4Cierre,
];

export const DockerCap2: React.FC = () => {
  return (
    <AbsoluteFill>
      {DOCKER_CAP2_SCENES.map((scene, i) => {
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
