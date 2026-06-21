import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap2/Scene1Gancho";
import { Scene2PorQuePasa } from "./cap2/Scene2PorQuePasa";
import { Scene3TresTrucos } from "./cap2/Scene3TresTrucos";
import { Scene4Cierre } from "./cap2/Scene4Cierre";
import { CLAUDE_CAP2_SCENES } from "../../themes/claude";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2PorQuePasa,
  Scene3TresTrucos,
  Scene4Cierre,
];

export const ClaudeCap2: React.FC = () => {
  return (
    <AbsoluteFill>
      {CLAUDE_CAP2_SCENES.map((scene, i) => {
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
