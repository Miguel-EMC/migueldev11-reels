import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Scene1CreditCardFear } from "./localstack/Scene1CreditCardFear";
import { Scene2LocalStackDocker } from "./localstack/Scene2LocalStackDocker";
import { Scene3MockBoto3 } from "./localstack/Scene3MockBoto3";
import { Scene4SaveVideoCTA } from "./localstack/Scene4SaveVideoCTA";
import { VoiceCaptions, CaptionItem } from "../../components/viral/VoiceCaptions";
import { brand } from "../../themes/brand";

// Total Duration: 53.758 seconds @ 30 FPS = 1613 frames (Exact match with audio)
export const TEST_AWS_NO_CARD_TOTAL_FRAMES = 1613;

const captions: CaptionItem[] = [
  { startFrame: 0, endFrame: 60, text: "¿Quieres aprender Cloud y AWS? ☁️", highlightWords: ["Cloud", "AWS"], accentColor: brand.cyan },
  { startFrame: 60, endFrame: 250, text: "...pero tienes miedo a una factura de $1,000 USD a tu tarjeta 💳🔥", highlightWords: ["miedo", "factura", "tarjeta"], accentColor: brand.red },
  { startFrame: 250, endFrame: 440, text: "A todos nos ha pasado dejar una base de datos o EC2 encendida...", highlightWords: ["EC2", "base", "datos"], accentColor: brand.red },
  { startFrame: 440, endFrame: 600, text: "...durante el fin de semana por accidente y pagar las consecuencias 💸", highlightWords: ["accidente", "consecuencias", "pagar"], accentColor: brand.orange },
  { startFrame: 600, endFrame: 800, text: "Por eso hoy te traigo una herramienta brutal: ¡LocalStack! ⚡", highlightWords: ["LocalStack", "herramienta"], accentColor: brand.cyan },
  { startFrame: 800, endFrame: 1025, text: "Un emulador completo de AWS que corre dentro de un contenedor Docker 🐳", highlightWords: ["emulador", "AWS", "Docker"], accentColor: brand.cyan },
  { startFrame: 1025, endFrame: 1335, text: "Crea buckets S3, Lambdas, DynamoDB y colas SQS 100% gratis y offline 🚀", highlightWords: ["S3", "Lambdas", "DynamoDB", "gratis"], accentColor: brand.green },
  { startFrame: 1335, endFrame: 1470, text: "Guarda este reel para tu próxima práctica en la nube 🔖", highlightWords: ["Guarda", "práctica"], accentColor: brand.green },
  { startFrame: 1470, endFrame: 1613, text: "Comenta LOCALSTACK para enviarte el docker-compose de configuración 💬", highlightWords: ["LOCALSTACK", "docker-compose"], accentColor: brand.green },
];

export const TestAwsNoCreditCardVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      {/* 1. Master Spoken Audio (Without clipping or shortening) */}
      <Audio src={staticFile("EmcodeTestAwsNoCard.mp3")} volume={1} />

      {/* 2. Visual Scenes Synchronized with Voice Timestamps */}
      <Sequence from={0} durationInFrames={250}>
        <Scene1CreditCardFear />
      </Sequence>

      <Sequence from={250} durationInFrames={350}>
        <Scene2LocalStackDocker />
      </Sequence>

      <Sequence from={600} durationInFrames={425}>
        <Scene3MockBoto3 />
      </Sequence>

      <Sequence from={1025} durationInFrames={588}>
        <Scene4SaveVideoCTA />
      </Sequence>

      {/* 3. Floating Synchronized Kinetic Captions */}
      <VoiceCaptions captions={captions} />
    </AbsoluteFill>
  );
};
