import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Scene1NoManual } from "./terraform/Scene1NoManual";
import { Scene2LambdaIaC } from "./terraform/Scene2LambdaIaC";
import { Scene3TerraformApply } from "./terraform/Scene3TerraformApply";
import { Scene4SplitArchitecture } from "./terraform/Scene4SplitArchitecture";
import { VoiceCaptions, CaptionItem } from "../../components/viral/VoiceCaptions";
import { brand } from "../../themes/brand";

// Total Duration: 52.649 seconds @ 30 FPS = 1580 frames (Exact match with audio)
export const TERRAFORM_IAC_TOTAL_FRAMES = 1580;

const captions: CaptionItem[] = [
  { startFrame: 0, endFrame: 230, text: "Si sigues creando tus bases de datos y servidores haciendo clic en la consola...", highlightWords: ["bases", "servidores", "clic", "consola"], accentColor: brand.red },
  { startFrame: 230, endFrame: 390, text: "...por ejemplo de AWS, ¡estás jugando a la ruleta rusa en producción! 🛑", highlightWords: ["AWS", "ruleta", "rusa", "producción"], accentColor: brand.red },
  { startFrame: 390, endFrame: 580, text: "Configurar infraestructura a mano no tiene historial de versiones...", highlightWords: ["infraestructura", "mano", "historial"], accentColor: brand.orange },
  { startFrame: 580, endFrame: 765, text: "...nadie sabe quién cambió qué, y tardarás horas en volver a levantarlo ⏳", highlightWords: ["horas", "cambió", "levantarlo"], accentColor: brand.red },
  { startFrame: 765, endFrame: 1020, text: "Con Terraform e Infraestructura como Código, describes todo en archivos `.tf` 📝", highlightWords: ["Terraform", "Infraestructura", "Código"], accentColor: brand.cyan },
  { startFrame: 1020, endFrame: 1290, text: "Ejecutas `terraform apply` y levantas tu arquitectura automatizada en segundos ⚡", highlightWords: ["apply", "arquitectura", "automatizada", "segundos"], accentColor: brand.green },
  { startFrame: 1290, endFrame: 1440, text: "¿En tu empresa usan Infraestructura como Código o siguen haciendo clics? 🤔", highlightWords: ["empresa", "clics", "Código"], accentColor: brand.green },
  { startFrame: 1440, endFrame: 1580, text: "Cuéntamelo abajo en los comentarios y sígueme para dominar DevOps 💬", highlightWords: ["comentarios", "sígueme", "DevOps"], accentColor: brand.green },
];

export const TerraformIaCVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      {/* 1. Master Spoken Audio (Without clipping or shortening) */}
      <Audio src={staticFile("EmcodeTerraformIaC.mp3")} volume={1} />

      {/* 2. Visual Scenes Synchronized with Voice Timestamps */}
      <Sequence from={0} durationInFrames={390}>
        <Scene1NoManual />
      </Sequence>

      <Sequence from={390} durationInFrames={375}>
        <Scene2LambdaIaC />
      </Sequence>

      <Sequence from={765} durationInFrames={525}>
        <Scene3TerraformApply />
      </Sequence>

      <Sequence from={1290} durationInFrames={290}>
        <Scene4SplitArchitecture />
      </Sequence>

      {/* 3. Floating Synchronized Kinetic Captions */}
      <VoiceCaptions captions={captions} />
    </AbsoluteFill>
  );
};
