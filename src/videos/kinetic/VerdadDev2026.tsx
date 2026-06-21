import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { ReelLayout } from "../../layouts/ReelLayout";
import { KineticScene1 } from "../../scenes/KineticScene1";
import { KineticScene2 } from "../../scenes/KineticScene2";
import { KineticScene3 } from "../../scenes/KineticScene3";
import { KineticScene4 } from "../../scenes/KineticScene4";
import { KineticScene5 } from "../../scenes/KineticScene5";
import { KineticScene6 } from "../../scenes/KineticScene6";
import { KineticCierre } from "../../scenes/KineticCierre";

// Toggle these constants once you add your audio/SFX files to the public/ folder.
const HAS_MUSIC = false; // Set to true once "musica.mp3" is added to the public folder
const PLAY_SFX = false; // Toggle this to true once you place your SFX files in public/sfx/

export const VerdadDev2026: React.FC = () => {
  return (
    <ReelLayout>
      {/* Background music track (only plays if HAS_MUSIC is set to true) */}
      {HAS_MUSIC && (
        <Audio src={staticFile("musica.mp3")} volume={0.6} />
      )}

      {/* ========================================================================= */}
      {/* 🎬 SCENE SEQUENCES (960 frames total — 32s @ 30 fps)                       */}
      {/* ========================================================================= */}

      {/* 1. HOOK: Programar en 2026 CAMBIÓ. (0 to 90) */}
      <Sequence from={0} durationInFrames={90}>
        <KineticScene1 />
      </Sequence>

      {/* 2. La IA ya escribe el código. (90 to 210) */}
      <Sequence from={90} durationInFrames={120}>
        <KineticScene2 />
      </Sequence>

      {/* 3. Pero alguien tiene que... DISEÑARLO · DIRIGIRLO · DEPURARLO (210 to 360) */}
      <Sequence from={210} durationInFrames={150}>
        <KineticScene3 />
      </Sequence>

      {/* 4. El que solo copia y pega... queda atrás. (360 to 510) */}
      <Sequence from={360} durationInFrames={150}>
        <KineticScene4 />
      </Sequence>

      {/* 5. El que entiende SISTEMAS... RAG · Agentes · Arquitectura -> gana. (510 to 690) */}
      <Sequence from={510} durationInFrames={180}>
        <KineticScene5 />
      </Sequence>

      {/* 6. No compitas con la IA. -> Aprende a COMANDARLA. (690 to 840) */}
      <Sequence from={690} durationInFrames={150}>
        <KineticScene6 />
      </Sequence>

      {/* 7. CIERRE / END CARD: ¿De acuerdo? -> @migueldev11 + Sígueme (840 to 960) */}
      <Sequence from={840} durationInFrames={120}>
        <KineticCierre />
      </Sequence>

      {/* ========================================================================= */}
      {/* 🔊 SOUND DESIGN / SFX TIMING SYNCRONIZATION                                */}
      {/* ========================================================================= */}
      {PLAY_SFX && (
        <>
          {/* Whooshes on Transitions */}
          <Sequence from={75}><Audio src={staticFile("sfx/whoosh.mp3")} volume={0.8} /></Sequence>
          <Sequence from={195}><Audio src={staticFile("sfx/whoosh.mp3")} volume={0.8} /></Sequence>
          <Sequence from={345}><Audio src={staticFile("sfx/whoosh.mp3")} volume={0.8} /></Sequence>
          <Sequence from={495}><Audio src={staticFile("sfx/whoosh.mp3")} volume={0.8} /></Sequence>
          <Sequence from={675}><Audio src={staticFile("sfx/whoosh.mp3")} volume={0.8} /></Sequence>
          <Sequence from={825}><Audio src={staticFile("sfx/whoosh.mp3")} volume={0.8} /></Sequence>

          {/* Sub-bass Impacts on Word Punches */}
          <Sequence from={32}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={1.0} /></Sequence>
          <Sequence from={240}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={1.0} /></Sequence>
          <Sequence from={272}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={1.0} /></Sequence>
          <Sequence from={304}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={1.0} /></Sequence>
          <Sequence from={416}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={0.9} /></Sequence>
          <Sequence from={544}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={1.0} /></Sequence>
          <Sequence from={576}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={1.0} /></Sequence>
          <Sequence from={608}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={1.0} /></Sequence>
          <Sequence from={640}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={1.0} /></Sequence>
          <Sequence from={736}><Audio src={staticFile("sfx/bass_impact.mp3")} volume={1.0} /></Sequence>

          {/* Sutil UI Ticks on Text Entries */}
          <Sequence from={0}><Audio src={staticFile("sfx/tick.mp3")} volume={0.5} /></Sequence>
          <Sequence from={96}><Audio src={staticFile("sfx/tick.mp3")} volume={0.5} /></Sequence>
          <Sequence from={210}><Audio src={staticFile("sfx/tick.mp3")} volume={0.5} /></Sequence>
          <Sequence from={368}><Audio src={staticFile("sfx/tick.mp3")} volume={0.5} /></Sequence>
          <Sequence from={512}><Audio src={staticFile("sfx/tick.mp3")} volume={0.5} /></Sequence>
          <Sequence from={704}><Audio src={staticFile("sfx/tick.mp3")} volume={0.5} /></Sequence>
          <Sequence from={848}><Audio src={staticFile("sfx/tick.mp3")} volume={0.5} /></Sequence>
          <Sequence from={880}><Audio src={staticFile("sfx/tick.mp3")} volume={0.5} /></Sequence>
        </>
      )}
    </ReelLayout>
  );
};
