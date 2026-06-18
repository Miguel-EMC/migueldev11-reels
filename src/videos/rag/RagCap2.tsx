import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { RAG_CAP2_SCENES } from "../../themes/rag";
import { Watermark }           from "../../shared/Watermark";
import { Scene1Gancho }        from "./cap2/Scene1Gancho";
import { Scene2ElProblema }    from "./cap2/Scene2ElProblema";
import { Scene3Chunking }      from "./cap2/Scene3Chunking";
import { Scene4Equilibrio }    from "./cap2/Scene4Equilibrio";
import { Scene5DetallePro }    from "./cap2/Scene5DetallePro";
import { Scene6EndCard }       from "./cap2/Scene6EndCard";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2ElProblema,
  Scene3Chunking,
  Scene4Equilibrio,
  Scene5DetallePro,
  Scene6EndCard,
] as const;

export const RagCap2: React.FC = () => (
  <AbsoluteFill>
    {/* Drop rag_cap2.mp3 and musica.mp3 in public/ before rendering */}
    <Audio src={staticFile("rag_cap2.mp3")} />
    <Audio src={staticFile("musica.mp3")} volume={(f) => {
      if (f < 60)   return (f / 60) * 0.12;
      if (f > 2394) return ((2454 - f) / 60) * 0.12;
      return 0.12;
    }} />

    {RAG_CAP2_SCENES.map((scene, i) => {
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
