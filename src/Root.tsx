import React from "react";
import { Composition } from "remotion";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadJetBrains } from "@remotion/google-fonts/JetBrainsMono";
import { Main, FRAMES_PER_TIP } from "./Main";
import { tips } from "./data/tips";
import { RagCap1 } from "./videos/rag/RagCap1";
import { RagCap2 } from "./videos/rag/RagCap2";
import { RagCap3 } from "./videos/rag/RagCap3";
import { RagYouTubeFull } from "./videos/rag/youtube/FullVideo";
import { AgentsCap1 } from "./videos/agents/AgentsCap1";
import { AgentsCap2, AGENTS_CAP2_TOTAL_FRAMES } from "./videos/agents/AgentsCap2";
import { AgentsCap3, AGENTS_CAP3_TOTAL_FRAMES } from "./videos/agents/AgentsCap3";
import { ClaudeCap1, CLAUDE_CAP1_TOTAL_FRAMES } from "./videos/claude/ClaudeCap1";
import { ClaudeCap2 } from "./videos/claude/ClaudeCap2";
import { ClaudeCap3 } from "./videos/claude/ClaudeCap3";
import { TerraformCap1 } from "./videos/terraform/TerraformCap1";
import { TerraformCap2 } from "./videos/terraform/TerraformCap2";
import { TF_CAP1_TOTAL_FRAMES, TF_CAP2_TOTAL_FRAMES } from "./themes/terraform";
import { DockerCap1 } from "./videos/docker/DockerCap1";
import { DockerCap2 } from "./videos/docker/DockerCap2";
import { DockerCap3 } from "./videos/docker/DockerCap3";
import { KubernetesCap1 } from "./videos/kubernetes/KubernetesCap1";
import { KubernetesCap2 } from "./videos/kubernetes/KubernetesCap2";
import { DOCKER_CAP1_TOTAL_FRAMES, DOCKER_CAP2_TOTAL_FRAMES, DOCKER_CAP3_TOTAL_FRAMES } from "./themes/docker";
import { K8S_CAP1_TOTAL_FRAMES, K8S_CAP2_TOTAL_FRAMES } from "./themes/kubernetes";
import { CLAUDE_CAP2_TOTAL_FRAMES, CLAUDE_CAP3_TOTAL_FRAMES } from "./themes/claude";
import { ConceptsCap1 } from "./videos/concepts/ConceptsCap1";
import { ConceptsCap2 } from "./videos/concepts/ConceptsCap2";
import { CONCEPTS_CAP1_TOTAL_FRAMES, CONCEPTS_CAP2_TOTAL_FRAMES } from "./themes/concepts";
import { RAG_TOTAL_FRAMES, RAG_CAP2_TOTAL_FRAMES, RAG_CAP3_TOTAL_FRAMES } from "./themes/rag";
import { AGENTS_CAP1_TOTAL_FRAMES } from "./themes/agents";
import { RoadmapIA } from "./videos/roadmap/RoadmapIA";
import { HotTakeIA } from "./videos/hottake/HotTakeIA";
import { ToolsIA } from "./videos/tools/ToolsIA";
import { VerdadDev2026 } from "./videos/kinetic/VerdadDev2026";
import { Carrusel } from "./videos/carousel/Carrusel";
import { CarruselLinux } from "./videos/carousel/CarruselLinux";
import { CarruselTerraform } from "./videos/carousel/CarruselTerraform";
import { CarruselLinuxVsWindows } from "./videos/carousel/CarruselLinuxVsWindows";
import { CarruselProyectosEntrevista } from "./videos/carousel/CarruselProyectosEntrevista";
import { CarruselJuniorSenior } from "./videos/carousel/CarruselJuniorSenior";
import { CarruselInglesDevs } from "./videos/carousel/CarruselInglesDevs";
import { CarruselRutaFastAPI } from "./videos/carousel/CarruselRutaFastAPI";
import { CarruselGitSalvavidas } from "./videos/carousel/CarruselGitSalvavidas";
import { CarruselMonolitoMicro } from "./videos/carousel/CarruselMonolitoMicro";
import { CarruselInspiracionDev } from "./videos/carousel/CarruselInspiracionDev";
import { CarruselDopaminaIA } from "./videos/carousel/CarruselDopaminaIA";
import { CarruselClaudeCode } from "./videos/carousel/CarruselClaudeCode";
import { MemeWindowsVsLinux } from "./videos/dev3d/MemeWindowsVsLinux";
import { HackerLinuxVideo } from "./videos/dev3d/HackerLinuxVideo";
import { ThreeDWorldVideo, THREED_WORLD_TOTAL_FRAMES } from "./videos/dev3d/ThreeDWorldVideo";
import { AnimeStyleVideo, ANIME_STYLE_TOTAL_FRAMES } from "./videos/dev3d/AnimeStyleVideo";
import { GitHacksReel, GIT_HACKS_TOTAL_FRAMES } from "./videos/viral/GitHacksReel";
import { IaTruthsReel, IA_TRUTHS_TOTAL_FRAMES } from "./videos/viral/IaTruthsReel";
import { AiToolsReel, AI_TOOLS_TOTAL_FRAMES } from "./videos/viral/AiToolsReel";
import { BurnoutDevReel, BURNOUT_DEV_TOTAL_FRAMES } from "./videos/viral/BurnoutDevReel";
import { NovelaFrutas, NOVELA_TOTAL_FRAMES } from "./videos/novela/NovelaFrutas";

loadInter();
loadJetBrains();

const totalFrames = tips.length * FRAMES_PER_TIP;

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="CarruselTerraform" component={CarruselTerraform} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselLinuxVsWindows" component={CarruselLinuxVsWindows} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselProyectosEntrevista" component={CarruselProyectosEntrevista} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselJuniorSenior" component={CarruselJuniorSenior} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselInglesDevs" component={CarruselInglesDevs} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselRutaFastAPI" component={CarruselRutaFastAPI} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselGitSalvavidas" component={CarruselGitSalvavidas} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselMonolitoMicro" component={CarruselMonolitoMicro} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselInspiracionDev" component={CarruselInspiracionDev} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselDopaminaIA" component={CarruselDopaminaIA} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselClaudeCode" component={CarruselClaudeCode} durationInFrames={8} fps={30} width={1080} height={1350} />
    <Composition id="CarruselLinux" component={CarruselLinux} durationInFrames={7} fps={30} width={1080} height={1350} />
    <Composition id="Carrusel" component={Carrusel} durationInFrames={7} fps={30} width={1080} height={1350} />
    <Composition id="VerdadDev2026" component={VerdadDev2026} durationInFrames={960} fps={30} width={1080} height={1920} />
    <Composition id="ToolsIA" component={ToolsIA} durationInFrames={1050} fps={30} width={1080} height={1920} />
    <Composition id="HotTakeIA" component={HotTakeIA} durationInFrames={840} fps={30} width={1080} height={1920} />
    <Composition id="RoadmapIA" component={RoadmapIA} durationInFrames={1140} fps={30} width={1080} height={1920} />
    <Composition id="TipsVSCode" component={Main} durationInFrames={totalFrames} fps={30} width={1080} height={1920} />
    <Composition id="RagCap1" component={RagCap1} durationInFrames={RAG_TOTAL_FRAMES}      fps={30} width={1080} height={1920} />
    <Composition id="RagCap2" component={RagCap2} durationInFrames={RAG_CAP2_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="RagCap3" component={RagCap3} durationInFrames={RAG_CAP3_TOTAL_FRAMES} fps={30} width={1080} height={1920} />

    {/* YouTube Horizontal Master Collection */}
    <Composition id="RagYouTubeFull" component={RagYouTubeFull} durationInFrames={1210} fps={30} width={1920} height={1080} />

    {/* AI Agents & LangGraph TikTok/Reels Collection */}
    <Composition id="AgentsCap1" component={AgentsCap1} durationInFrames={AGENTS_CAP1_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="AgentsCap2" component={AgentsCap2} durationInFrames={AGENTS_CAP2_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="AgentsCap3" component={AgentsCap3} durationInFrames={AGENTS_CAP3_TOTAL_FRAMES} fps={30} width={1080} height={1920} />

    {/* Claude Code Series Collection */}
    <Composition id="ClaudeCap1" component={ClaudeCap1} durationInFrames={CLAUDE_CAP1_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="ClaudeCap2" component={ClaudeCap2} durationInFrames={CLAUDE_CAP2_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="ClaudeCap3" component={ClaudeCap3} durationInFrames={CLAUDE_CAP3_TOTAL_FRAMES} fps={30} width={1080} height={1920} />

    {/* Docker Series Collection */}
    <Composition id="DockerCap1" component={DockerCap1} durationInFrames={DOCKER_CAP1_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="DockerCap2" component={DockerCap2} durationInFrames={DOCKER_CAP2_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="DockerCap3" component={DockerCap3} durationInFrames={DOCKER_CAP3_TOTAL_FRAMES} fps={30} width={1080} height={1920} />

    {/* Kubernetes Series Collection */}
    <Composition id="KubernetesCap1" component={KubernetesCap1} durationInFrames={K8S_CAP1_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="KubernetesCap2" component={KubernetesCap2} durationInFrames={K8S_CAP2_TOTAL_FRAMES} fps={30} width={1080} height={1920} />

    {/* Terraform Series Collection */}
    <Composition id="TerraformCap1" component={TerraformCap1} durationInFrames={TF_CAP1_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="TerraformCap2" component={TerraformCap2} durationInFrames={TF_CAP2_TOTAL_FRAMES} fps={30} width={1080} height={1920} />

    {/* AI Concepts (Independent) Series */}
    <Composition id="ConceptsCap1" component={ConceptsCap1} durationInFrames={CONCEPTS_CAP1_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="ConceptsCap2" component={ConceptsCap2} durationInFrames={CONCEPTS_CAP2_TOTAL_FRAMES} fps={30} width={1080} height={1920} />

    {/* Dev Video Reels (HTML/CSS animations) */}
    <Composition id="MemeWindowsVsLinux" component={MemeWindowsVsLinux} durationInFrames={450} fps={30} width={1080} height={1920} />
    <Composition id="HackerLinuxVideo" component={HackerLinuxVideo} durationInFrames={450} fps={30} width={1080} height={1920} />
    <Composition id="ThreeDWorldVideo" component={ThreeDWorldVideo} durationInFrames={THREED_WORLD_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="AnimeStyleVideo" component={AnimeStyleVideo} durationInFrames={ANIME_STYLE_TOTAL_FRAMES} fps={30} width={1080} height={1920} />

    {/* Viral TikTok Reels (Kinetic typography & Neon animations) */}
    <Composition id="GitHacksReel" component={GitHacksReel} durationInFrames={GIT_HACKS_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="IaTruthsReel" component={IaTruthsReel} durationInFrames={IA_TRUTHS_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="AiToolsReel" component={AiToolsReel} durationInFrames={AI_TOOLS_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="BurnoutDevReel" component={BurnoutDevReel} durationInFrames={BURNOUT_DEV_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
    <Composition id="NovelaFrutas" component={NovelaFrutas} durationInFrames={NOVELA_TOTAL_FRAMES} fps={30} width={1080} height={1920} />
  </>
);
