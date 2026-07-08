import React from "react";
import { ViralReelTemplate, ViralStep } from "./ViralReelTemplate";
import { brand } from "../../themes/brand";

export const GIT_HACKS_TOTAL_FRAMES = 810; // Hook (120) + 3 Steps (3 * 180) + CTA (150)

const STEPS: ViralStep[] = [
  {
    tag: "git stash",
    title: "Guarda cambios sin hacer",
    highlightWord: "COMMIT",
    desc: "Si necesitas cambiar de rama pero tienes archivos a medias, no hagas un commit sucio. Usa stash.",
    codeSnippet: {
      filename: "stash-workspace.sh",
      command: "git stash push -m 'mi-trabajo-temporal'"
    }
  },
  {
    tag: "git commit --amend",
    title: "Corrige el último commit",
    highlightWord: "AL INSTANTE",
    desc: "¿Te equivocaste en el mensaje del commit o te faltó añadir un archivo? Corrígelo sin crear otro commit extra.",
    codeSnippet: {
      filename: "fix-commit.sh",
      command: "git commit --amend --no-edit"
    }
  },
  {
    tag: "git reset --soft",
    title: "Deshaz tu commit manteniendo",
    highlightWord: "TUS CAMBIOS",
    desc: "Si hiciste commit en la rama equivocada, vuelve un paso atrás sin perder el código que escribiste.",
    codeSnippet: {
      filename: "undo-commit.sh",
      command: "git reset --soft HEAD~1"
    }
  }
];

export const GitHacksReel: React.FC = () => {
  return (
    <ViralReelTemplate
      hookTitle="3 HACKS de GIT que te salvarán el PUESTO"
      hookSubtitle="trucos rápidos que todo desarrollador Senior domina"
      accentColor={brand.green}
      glowColor={brand.glowGreen.split(",")[0]}
      steps={STEPS}
      ctaTitle="¿Ya conocías estos comandos?"
      ctaText="Dime cuál es tu hack favorito o qué comando te ha salvado de romper producción."
    />
  );
};
