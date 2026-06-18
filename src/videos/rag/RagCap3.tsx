import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { RAG_CAP3_SCENES } from "../../themes/rag";
import { Watermark }           from "../../shared/Watermark";
import { Scene1Gancho }        from "./cap3/Scene1Gancho";
import { Scene2ElProblema }    from "./cap3/Scene2ElProblema";
import { Scene3QueEs }         from "./cap3/Scene3QueEs";
import { Scene4LaIntuicion }   from "./cap3/Scene4LaIntuicion";
import { Scene5ParaQue }       from "./cap3/Scene5ParaQue";
import { Scene6Cliffhanger }   from "./cap3/Scene6Cliffhanger";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2ElProblema,
  Scene3QueEs,
  Scene4LaIntuicion,
  Scene5ParaQue,
  Scene6Cliffhanger,
] as const;

export const RagCap3: React.FC = () => (
  <AbsoluteFill>
    {/* Drop rag_cap3.mp3 in public/ before rendering */}
    <Audio src={staticFile("rag_cap3.mp3")} />
    {/* <Audio src={staticFile("musica.mp3")} volume={(f) => {
      if (f < 60)   return (f / 60) * 0.12;
      if (f > 2640) return ((2700 - f) / 60) * 0.12;
      return 0.12;
    }} /> */}

    {RAG_CAP3_SCENES.map((scene, i) => {
      const Comp = SCENE_COMPONENTS[i];
      return (
        <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration}>
          <Comp />
        </Sequence>
      );
    })}

    {/* Watermark outside Sequence — persists across all scenes */}
    <Watermark />
  </AbsoluteFill>
);
