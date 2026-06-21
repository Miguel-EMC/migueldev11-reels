import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Gancho } from "./cap3/Scene1Gancho";
import { Scene2QueEsTool } from "./cap3/Scene2QueEsTool";
import { Scene3CasoReal } from "./cap3/Scene3CasoReal";
import { Scene4Cierre } from "./cap3/Scene4Cierre";

// 75 seconds total sequence @ 30fps = 2250 frames
export const AGENTS_CAP3_TOTAL_FRAMES = 2250;

const TIME_MAPPING = [
  { id: "gancho",   from: 0,    duration: 240 },  // 0:00 - 0:08 (8s)
  { id: "tools",    from: 240,  duration: 660 },  // 0:08 - 0:30 (22s)
  { id: "sql",      from: 900,  duration: 660 },  // 0:30 - 0:52 (22s)
  { id: "cierre",   from: 1560, duration: 690 },  // 0:52 - 1:15 (23s)
];

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2QueEsTool,
  Scene3CasoReal,
  Scene4Cierre,
];

export const AgentsCap3: React.FC = () => {
  return (
    <AbsoluteFill>
      {TIME_MAPPING.map((scene, i) => {
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
