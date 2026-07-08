import React from "react";
import { ViralReelTemplate, ViralStep } from "./ViralReelTemplate";
import { brand } from "../../themes/brand";

export const AI_TOOLS_TOTAL_FRAMES = 810; // Hook (120) + 3 Steps (3 * 180) + CTA (150)

const STEPS: ViralStep[] = [
  {
    tag: "desarrollo ágil",
    title: "Cursor & Claude Code",
    highlightWord: "AUTÓNOMO",
    desc: "Editores y terminales de IA que no solo sugieren autocompletados, sino que refactorizan y crean arquitecturas de software completas en segundos."
  },
  {
    tag: "generación web",
    title: "v0 por Vercel & Lovable",
    highlightWord: "FRONTEND",
    desc: "Describe tu aplicación en lenguaje natural y obtén interfaces interactivas y funcionales en React o Vue con estilos impecables en 10 segundos."
  },
  {
    tag: "análisis inteligente",
    title: "Google NotebookLM",
    highlightWord: "SÍNTESIS",
    desc: "Sube manuales, PDFs o repositorios completos. La IA creará resúmenes, responderá dudas del código y generará podcasts de audio analizando tus fuentes."
  }
];

export const AiToolsReel: React.FC = () => {
  return (
    <ViralReelTemplate
      hookTitle="3 herramientas de IA que parecen MAGIA en 2026"
      hookSubtitle="potencia tu flujo de trabajo al 300% con estas apps"
      accentColor={brand.cyan}
      glowColor={brand.glowCyan.split(",")[0]}
      steps={STEPS}
      ctaTitle="¿Cuál es tu herramienta favorita?"
      ctaText="Dime en comentarios qué otra herramienta de IA usas a diario que deberíamos incluir."
    />
  );
};
