import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { RAG_SCENES } from "../../themes/rag";
import { Scene1Gancho }        from "./cap1/Scene1Gancho";
import { Scene2LaPalabra }     from "./cap1/Scene2LaPalabra";
import { Scene3LaIdea }        from "./cap1/Scene3LaIdea";
import { Scene4LaAnalogia }    from "./cap1/Scene4LaAnalogia";
import { Scene5PorQueImporta } from "./cap1/Scene5PorQueImporta";
import { Scene6Cliffhanger }   from "./cap1/Scene6Cliffhanger";

const SCENE_COMPONENTS = [
  Scene1Gancho,
  Scene2LaPalabra,
  Scene3LaIdea,
  Scene4LaAnalogia,
  Scene5PorQueImporta,
  Scene6Cliffhanger,
] as const;

export const RagCap1: React.FC = () => (
  <AbsoluteFill>
    {/* Drop voz-cap1.mp3 and musica.mp3 in public/ before rendering */}
    <Audio src={staticFile("voz-cap1.mp3")} />
    {/* <Audio src={staticFile("musica.mp3")} volume={(f) => {
      if (f < 30)   return (f / 30) * 0.12;
      if (f > 1945) return ((1975 - f) / 30) * 0.12;
      return 0.12;
    }} /> */}

    {RAG_SCENES.map((scene, i) => {
      const Comp = SCENE_COMPONENTS[i];
      return (
        <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration}>
          <Comp />
        </Sequence>
      );
    })}
  </AbsoluteFill>
);
