import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { ReelLayout } from "../../layouts/ReelLayout";
import { RoadmapGancho } from "../../scenes/RoadmapGancho";
import { RoadmapSteps } from "../../scenes/RoadmapSteps";
import { RoadmapCierre } from "../../scenes/RoadmapCierre";

// Toggle these constants once you add your audio files to the public/ folder.
const HAS_VOICEOVER = false;
const HAS_MUSIC = false; // Set to true once "musica.mp3" is added to the public folder

export const RoadmapIA: React.FC = () => {
  return (
    <ReelLayout>
      {/* Voiceover track (only plays if HAS_VOICEOVER is set to true) */}
      {HAS_VOICEOVER && (
        <Audio src={staticFile("voz.mp3")} />
      )}

      {/* Background music track (only plays if HAS_MUSIC is set to true) */}
      {HAS_MUSIC && (
        <Audio 
          src={staticFile("musica.mp3")} 
          volume={HAS_VOICEOVER ? 0.1 : 0.5} 
        />
      )}

      {/* 1. GANCHO (frame 0 to 90 — ~3s) */}
      <Sequence from={0} durationInFrames={90}>
        <RoadmapGancho />
      </Sequence>

      {/* 2. PASOS EN ORDEN (frame 90 to 810 — ~24s) */}
      <Sequence from={90} durationInFrames={720}>
        <RoadmapSteps />
      </Sequence>

      {/* 3. CIERRE + CEBO (frame 810 to 1140 — ~11s) */}
      <Sequence from={810} durationInFrames={330}>
        <RoadmapCierre />
      </Sequence>
    </ReelLayout>
  );
};
