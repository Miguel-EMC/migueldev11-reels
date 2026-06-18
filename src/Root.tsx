import React from "react";
import { Composition } from "remotion";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadJetBrains } from "@remotion/google-fonts/JetBrainsMono";
import { Main, FRAMES_PER_TIP } from "./Main";
import { tips } from "./data/tips";
import { RagCap1 } from "./videos/rag/RagCap1";
import { RagCap2 } from "./videos/rag/RagCap2";
import { RagCap3 } from "./videos/rag/RagCap3";
import { RAG_TOTAL_FRAMES, RAG_CAP2_TOTAL_FRAMES, RAG_CAP3_TOTAL_FRAMES } from "./themes/rag";

loadInter();
loadJetBrains();

const totalFrames = tips.length * FRAMES_PER_TIP;

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="TipsVSCode" component={Main} durationInFrames={totalFrames} fps={30} width={1080} height={1920} />
    <Composition id="RagCap1" component={RagCap1} durationInFrames={RAG_TOTAL_FRAMES}      fps={30} width={1080} height={1920} />
    <Composition id="RagCap2" component={RagCap2} durationInFrames={RAG_CAP2_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="RagCap3" component={RagCap3} durationInFrames={RAG_CAP3_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
  </>
);
