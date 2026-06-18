import React from "react";
import { AbsoluteFill, Audio, interpolate, Sequence, Series, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../../../themes/brand";
import { RAG_SCENES, RAG_CAP2_SCENES, RAG_CAP3_SCENES } from "../../../themes/rag";
import { YouTubeLayout } from "../../../layouts/YouTubeLayout";
import { GridBackground } from "../../../components/GridBackground";
import { ParticleField } from "../../../components/ParticleField";
import { TechIcon } from "../../../components/TechIcon";
import { JsonStreamView } from "../../../components/JsonStreamView";

// Import all chapter scenes sequentially
import { Scene1Gancho as C1S1 } from "../cap1/Scene1Gancho";
import { Scene2LaPalabra as C1S2 } from "../cap1/Scene2LaPalabra";
import { Scene3LaIdea as C1S3 } from "../cap1/Scene3LaIdea";
import { Scene4LaAnalogia as C1S4 } from "../cap1/Scene4LaAnalogia";
import { Scene5PorQueImporta as C1S5 } from "../cap1/Scene5PorQueImporta";
import { Scene6Cliffhanger as C1S6 } from "../cap1/Scene6Cliffhanger";

import { Scene1Gancho as C2S1 } from "../cap2/Scene1Gancho";
import { Scene2ElProblema as C2S2 } from "../cap2/Scene2ElProblema";
import { Scene3Chunking as C2S3 } from "../cap2/Scene3Chunking";
import { Scene4Equilibrio as C2S4 } from "../cap2/Scene4Equilibrio";
import { Scene5DetallePro as C2S5 } from "../cap2/Scene5DetallePro";
import { Scene6EndCard as C2S6 } from "../cap2/Scene6EndCard";

import { Scene1Gancho as C3S1 } from "../cap3/Scene1Gancho";
import { Scene2ElProblema as C3S2 } from "../cap3/Scene2ElProblema";
import { Scene3QueEs as C3S3 } from "../cap3/Scene3QueEs";
import { Scene4LaIntuicion as C3S4 } from "../cap3/Scene4LaIntuicion";
import { Scene5ParaQue as C3S5 } from "../cap3/Scene5ParaQue";
import { Scene6Cliffhanger as C3S6 } from "../cap3/Scene6Cliffhanger";

import { ComprehensiveYouTubeIntro } from "./IntroImage";

const CAP1_COMPONENTS = [C1S1, C1S2, C1S3, C1S4, C1S5, C1S6];
const CAP2_COMPONENTS = [C2S1, C2S2, C2S3, C2S4, C2S5, C2S6];
const CAP3_COMPONENTS = [C3S1, C3S2, C3S3, C3S4, C3S5, C3S6];

// Companion Panel for Educational Context on the side
const CompanionDashboard: React.FC<{ chapter: number; title: string; subtitle: string; icon: "code" | "file" | "database" }> = ({
  chapter, title, subtitle, icon
}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 40, boxSizing: "border-box"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 20 }}>
        <TechIcon type={icon} size={50} />
        <div style={{ fontFamily: brand.fontMono, fontSize: 26, color: brand.green, letterSpacing: 4, textShadow: brand.glowGreen }}>
          MÓDULO 0{chapter} // SYSTEM_VIEW
        </div>
      </div>
      
      <h2 style={{ fontFamily: brand.fontSans, fontSize: 75, fontWeight: 900, color: brand.cream, margin: 0, lineHeight: 1.1, letterSpacing: "-2px" }}>
        {title}
      </h2>
      <p style={{ fontFamily: brand.fontSans, fontSize: 28, color: brand.textDim, lineHeight: 1.5, marginTop: 25 }}>
        {subtitle}
      </p>

      {/* Render matching interactive side elements based on chapter focus */}
      <div style={{ marginTop: 40 }}>
        {chapter === 1 && (
          <div style={{ display: "flex", gap: 30, background: "rgba(255,255,255,0.02)", padding: 25, borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
            <TechIcon type="network" size={40} />
            <div style={{ fontFamily: brand.fontMono, fontSize: 22, color: brand.cream }}>
              <span style={{ color: brand.green }}>Architecture:</span> Ingesta de contexto dinámico externa directo al prompt del modelo.
            </div>
          </div>
        )}
        {chapter === 2 && <JsonStreamView title="CHUNKING_STRATEGY.json" />}
        {chapter === 3 && <JsonStreamView title="VECTOR_EMBEDDING_SPACE.json" />}
      </div>
    </div>
  );
};

// CHAPTER 1 MASTER COMPOSITION WRAPPER
const YouTubeChapter1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Audio src={staticFile("voz-cap1.mp3")} />
      <GridBackground color={brand.green} />
      <ParticleField />
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 50%, transparent 20%, ${brand.bg} 90%)`, zIndex: 2 }} />

      <div style={{ display: "flex", width: "100%", height: "100%", padding: "60px 80px", zIndex: 10, boxSizing: "border-box", alignItems: "center" }}>
        <CompanionDashboard 
          chapter={1} 
          title="La Idea Central de RAG" 
          subtitle="Cómo darle superpoderes de conocimiento y memoria externa a cualquier LLM en producción sin reentrenarlo." 
          icon="code" 
        />
        
        {/* Phone/Reel Central Frame Mockup Window Container */}
        <div style={{
          width: 530, height: 940, borderRadius: 32, border: `4px solid ${brand.green}55`, overflow: "hidden",
          position: "relative", boxShadow: `0 30px 60px rgba(0,0,0,0.8), ${brand.glowGreen}22`
        }}>
          {RAG_SCENES.map((scene, i) => {
            const Comp = CAP1_COMPONENTS[i];
            return (
              <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration}>
                <Comp />
              </Sequence>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// CHAPTER 2 MASTER COMPOSITION WRAPPER
const YouTubeChapter2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Audio src={staticFile("rag_cap2.mp3")} />
      <GridBackground color={brand.orange} />
      <ParticleField />
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 50%, transparent 20%, ${brand.bg} 90%)`, zIndex: 2 }} />

      <div style={{ display: "flex", width: "100%", height: "100%", padding: "60px 80px", zIndex: 10, boxSizing: "border-box", alignItems: "center" }}>
        <CompanionDashboard 
          chapter={2} 
          title="Estrategias de Chunking" 
          subtitle="Aprende a fragmentar la información de tus documentos masivos para empaquetar bloques con significado óptimo." 
          icon="file" 
        />
        
        <div style={{
          width: 530, height: 940, borderRadius: 32, border: `4px solid ${brand.orange}55`, overflow: "hidden",
          position: "relative", boxShadow: `0 30px 60px rgba(0,0,0,0.8), ${brand.glowOrange}22`
        }}>
          {RAG_CAP2_SCENES.map((scene, i) => {
            const Comp = CAP2_COMPONENTS[i];
            return (
              <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration}>
                <Comp />
              </Sequence>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// CHAPTER 3 MASTER COMPOSITION WRAPPER
const YouTubeChapter3: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: brand.bg }}>
      <Audio src={staticFile("voz-cap1.mp3")} /> {/* Replaced with cap3 source fallback or matching mp3 */}
      <GridBackground color={brand.green} />
      <ParticleField />
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 50%, transparent 20%, ${brand.bg} 90%)`, zIndex: 2 }} />

      <div style={{ display: "flex", width: "100%", height: "100%", padding: "60px 80px", zIndex: 10, boxSizing: "border-box", alignItems: "center" }}>
        <CompanionDashboard 
          chapter={3} 
          title="Vectores y Embeddings" 
          subtitle="Rediseño completo de búsquedas de proximidad geométrica en un mapa semántico multidimensional." 
          icon="database" 
        />
        
        <div style={{
          width: 530, height: 940, borderRadius: 32, border: `4px solid ${brand.green}55`, overflow: "hidden",
          position: "relative", boxShadow: `0 30px 60px rgba(0,0,0,0.8), ${brand.glowGreen}22`
        }}>
          {RAG_CAP3_SCENES.map((scene, i) => {
            const Comp = CAP3_COMPONENTS[i];
            return (
              <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration}>
                <Comp />
              </Sequence>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// GRAND UNIFIED YOUTUBE FULL COURSE MASTERTIMELINE COMPOSITION
export const RagYouTubeFull: React.FC = () => {
  return (
    <YouTubeLayout>
      <Series>
        {/* Part 1: Futuristic Tech Pipeline Cinematic Opening Intro: 310 frames */}
        <Series.Sequence durationInFrames={310}>
          <ComprehensiveYouTubeIntro />
        </Series.Sequence>
        
        {/* Part 2: Full Course Chapter 1 (Concept/Idea): 1975 frames */}
        <Series.Sequence durationInFrames={1975}>
          <YouTubeChapter1 />
        </Series.Sequence>

        {/* Part 3: Full Course Chapter 2 (Chunking Strategies): 2454 frames */}
        <Series.Sequence durationInFrames={2454}>
          <YouTubeChapter2 />
        </Series.Sequence>

        {/* Part 4: Full Course Chapter 3 (Embeddings Space): 2700 frames */}
        <Series.Sequence durationInFrames={2700}>
          <YouTubeChapter3 />
        </Series.Sequence>
      </Series>
    </YouTubeLayout>
  );
};
