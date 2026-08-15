import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Scene1WindowsPain } from "./windows/Scene1WindowsPain";
import { Scene2WindowsStruggle } from "./windows/Scene2WindowsStruggle";
import { Scene3LinuxPeace } from "./windows/Scene3LinuxPeace";
import { Scene4DockerNative } from "./windows/Scene4DockerNative";
import { Scene4CommentsCTA } from "./windows/Scene4CommentsCTA";
import { VoiceCaptions, CaptionItem } from "../../components/viral/VoiceCaptions";
import { brand } from "../../themes/brand";

// Total Duration: 55 seconds @ 30 FPS = 1650 frames (Exact match with audio)
export const WHY_LEFT_WINDOWS_TOTAL_FRAMES = 1650;

const captions: CaptionItem[] = [
  { startFrame: 0, endFrame: 54, text: "¿Desarrollar en Windows? 💀", highlightWords: ["Windows", "Desarrollar"], accentColor: brand.red },
  { startFrame: 54, endFrame: 125, text: "Déjame decirte por qué cambiar a Linux...", highlightWords: ["Linux", "cambiar"], accentColor: brand.green },
  { startFrame: 125, endFrame: 230, text: "¡Fue la mejor decisión técnica de mi carrera! 🚀", highlightWords: ["mejor", "decisión", "técnica"], accentColor: brand.green },
  { startFrame: 237, endFrame: 350, text: "En Windows vivía peleando con Docker Desktop...", highlightWords: ["Windows", "Docker"], accentColor: brand.red },
  { startFrame: 350, endFrame: 440, text: "...comiéndose como 12 Gigas de RAM 🔴", highlightWords: ["12", "Gigas", "RAM"], accentColor: brand.red },
  { startFrame: 440, endFrame: 560, text: "Rutas con barras invertidas que rompían scripts de Node 💥", highlightWords: ["barras", "invertidas", "Node"], accentColor: brand.orange },
  { startFrame: 560, endFrame: 650, text: "...y un kernel que no se parece en nada...", highlightWords: ["kernel"], accentColor: brand.red },
  { startFrame: 650, endFrame: 780, text: "...a los servidores donde en realidad corre tu código en producción 🛑", highlightWords: ["servidores", "producción", "código"], accentColor: brand.red },
  { startFrame: 780, endFrame: 975, text: "Entonces comencé a usar Linux: Manjaro / Arch Linux 🐧", highlightWords: ["Manjaro", "Arch", "Linux"], accentColor: brand.green },
  { startFrame: 975, endFrame: 1130, text: "Docker corre nativo sin capas de virtualización pesadas ⚡", highlightWords: ["Docker", "nativo", "virtualización"], accentColor: brand.cyan },
  { startFrame: 1130, endFrame: 1290, text: "La terminal de Bash vuela...", highlightWords: ["Bash", "vuela"], accentColor: brand.cyan },
  { startFrame: 1290, endFrame: 1395, text: "...y todo se comporta idéntico a un cluster de AWS ☁️", highlightWords: ["cluster", "AWS", "idéntico"], accentColor: brand.orange },
  { startFrame: 1395, endFrame: 1510, text: "¿Y tú sigues en Windows o ya diste el salto a Linux? 🤔", highlightWords: ["Windows", "Linux", "salto"], accentColor: brand.green },
  { startFrame: 1510, endFrame: 1650, text: "¡Déjamelo en los comentarios y sígueme para más! 💬", highlightWords: ["comentarios", "sígueme"], accentColor: brand.green },
];

export const WhyLeftWindowsVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      {/* 1. Master Spoken Audio (Without clipping or shortening) */}
      <Audio src={staticFile("EmcodeWhyLeftWindows.mp3")} volume={1} />

      {/* 2. Visual Scenes Synchronized with Voice Timestamps */}
      <Sequence from={0} durationInFrames={230}>
        <Scene1WindowsPain />
      </Sequence>

      <Sequence from={230} durationInFrames={550}>
        <Scene2WindowsStruggle />
      </Sequence>

      <Sequence from={780} durationInFrames={210}>
        <Scene3LinuxPeace />
      </Sequence>

      <Sequence from={990} durationInFrames={405}>
        <Scene4DockerNative />
      </Sequence>

      <Sequence from={1395} durationInFrames={255}>
        <Scene4CommentsCTA />
      </Sequence>

      {/* 3. Floating Synchronized Kinetic Captions */}
      <VoiceCaptions captions={captions} />
    </AbsoluteFill>
  );
};
