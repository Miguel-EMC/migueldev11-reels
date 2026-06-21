import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { ReelLayout } from "../../layouts/ReelLayout";
import { ToolsGancho } from "../../scenes/ToolsGancho";
import { ToolsSteps } from "../../scenes/ToolsSteps";
import { ToolsCierre } from "../../scenes/ToolsCierre";

// Toggle these constants once you add your audio files to the public/ folder.
const HAS_VOICEOVER = false;
const HAS_MUSIC = false; // Set to true once "musica.mp3" is added to the public folder

export const ToolsIA: React.FC = () => {
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
        <ToolsGancho />
      </Sequence>

      {/* 2. PASOS EN ORDEN (frame 90 to 840 — ~25s) */}
      <Sequence from={90} durationInFrames={750}>
        <ToolsSteps />
      </Sequence>

      {/* 3. CIERRE + CEBO (frame 840 to 1050 — ~7s) */}
      <Sequence from={840} durationInFrames={210}>
        <ToolsCierre />
      </Sequence>
    </ReelLayout>
  );
};
