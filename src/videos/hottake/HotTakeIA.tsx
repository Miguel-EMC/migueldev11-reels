import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { ReelLayout } from "../../layouts/ReelLayout";
import { HotTakeGancho } from "../../scenes/HotTakeGancho";
import { HotTakeDesarrollo } from "../../scenes/HotTakeDesarrollo";
import { HotTakeCierre } from "../../scenes/HotTakeCierre";

// Toggle these constants once you add your audio files to the public/ folder.
const HAS_VOICEOVER = false;
const HAS_MUSIC = false; // Set to true once "musica.mp3" is added to the public folder

export const HotTakeIA: React.FC = () => {
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
        <HotTakeGancho />
      </Sequence>

      {/* 2. DESARROLLO (frame 90 to 510 — ~14s) */}
      <Sequence from={90} durationInFrames={420}>
        <HotTakeDesarrollo />
      </Sequence>

      {/* 3. CIERRE + CEBO (frame 510 to 840 — ~11s) */}
      <Sequence from={510} durationInFrames={330}>
        <HotTakeCierre />
      </Sequence>
    </ReelLayout>
  );
};
