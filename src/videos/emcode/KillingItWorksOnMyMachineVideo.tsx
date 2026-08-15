import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Scene1ToxicPhrase } from "./itworksonmymachine/Scene1ToxicPhrase";
import { Scene2DockerTerraformCure } from "./itworksonmymachine/Scene2DockerTerraformCure";
import { Scene3EcsTaskDefinition } from "./itworksonmymachine/Scene3EcsTaskDefinition";
import { Scene4GodLevelCTA } from "./itworksonmymachine/Scene4GodLevelCTA";
import { VoiceCaptions, CaptionItem } from "../../components/viral/VoiceCaptions";
import { brand } from "../../themes/brand";

// Total Duration: 50.515 seconds @ 30 FPS = 1516 frames (Exact match with audio)
export const KILLING_IT_WORKS_TOTAL_FRAMES = 1516;

const captions: CaptionItem[] = [
  { startFrame: 0, endFrame: 135, text: "¿En tu máquina sí funciona pero en producción se cae? 🤡", highlightWords: ["funciona", "producción", "cae"], accentColor: brand.red },
  { startFrame: 135, endFrame: 240, text: "Esa frase ya no es una excusa en 2026 🛑", highlightWords: ["excusa", "2026"], accentColor: brand.orange },
  { startFrame: 240, endFrame: 405, text: "El clásico error es tener dependencias no documentadas...", highlightWords: ["dependencias", "error"], accentColor: brand.red },
  { startFrame: 405, endFrame: 540, text: "...versiones distintas de Node o Python...", highlightWords: ["Node", "Python", "versiones"], accentColor: brand.orange },
  { startFrame: 540, endFrame: 705, text: "...y variables de entorno quemadas que rompen el deploy 💥", highlightWords: ["variables", "entorno", "deploy"], accentColor: brand.red },
  { startFrame: 705, endFrame: 870, text: "La solución: empaquetar tu servicio en un contenedor Docker inmutable 🐳", highlightWords: ["Docker", "contenedor", "inmutable"], accentColor: brand.cyan },
  { startFrame: 870, endFrame: 1015, text: "...y desplegar la definición de tareas con Terraform directo a la nube ⚡", highlightWords: ["Terraform", "nube", "tareas"], accentColor: brand.green },
  { startFrame: 1015, endFrame: 1115, text: "Si corre en el contenedor, corre idéntico en AWS ☁️", highlightWords: ["contenedor", "AWS", "idéntico"], accentColor: brand.green },
  { startFrame: 1115, endFrame: 1230, text: "Mata esa frase para siempre 🚀", highlightWords: ["Mata", "siempre"], accentColor: brand.green },
  { startFrame: 1230, endFrame: 1516, text: "Comenta DEPLOY para pasarte la plantilla de Docker y Terraform 💬", highlightWords: ["DEPLOY", "Docker", "Terraform"], accentColor: brand.green },
];

export const KillingItWorksOnMyMachineVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      {/* 1. Master Spoken Audio (Without clipping or shortening) */}
      <Audio src={staticFile("EmcodeKillingItWorks.mp3")} volume={1} />

      {/* 2. Visual Scenes Synchronized with Voice Timestamps */}
      <Sequence from={0} durationInFrames={240}>
        <Scene1ToxicPhrase />
      </Sequence>

      <Sequence from={240} durationInFrames={465}>
        <Scene2DockerTerraformCure />
      </Sequence>

      <Sequence from={705} durationInFrames={410}>
        <Scene3EcsTaskDefinition />
      </Sequence>

      <Sequence from={1115} durationInFrames={401}>
        <Scene4GodLevelCTA />
      </Sequence>

      {/* 3. Floating Synchronized Kinetic Captions */}
      <VoiceCaptions captions={captions} />
    </AbsoluteFill>
  );
};
