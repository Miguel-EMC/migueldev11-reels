import React from "react";
import { ViralReelTemplate, ViralStep } from "./ViralReelTemplate";
import { brand } from "../../themes/brand";

export const IA_TRUTHS_TOTAL_FRAMES = 810; // Hook (120) + 3 Steps (3 * 180) + CTA (150)

const STEPS: ViralStep[] = [
  {
    tag: "sintaxis vs diseño",
    title: "Cualquiera genera código, pocos diseñan",
    highlightWord: "SISTEMAS",
    desc: "Escribir código ya no es el cuello de botella. El verdadero programador Senior se enfoca en arquitectura, escalabilidad y seguridad."
  },
  {
    tag: "el bug invisible",
    title: "La IA es experta en mentir con",
    highlightWord: "SEGURIDAD",
    desc: "Si no entiendes las bases del código que la IA genera por ti, estás introduciendo vulnerabilidades invisibles en tu producción."
  },
  {
    tag: "orquestador vs copiador",
    title: "Aprende a dirigir, no a",
    highlightWord: "COPIAR",
    desc: "No compitas contra el código que genera la IA. Conviértete en el arquitecto que orquesta agentes de desarrollo."
  }
];

export const IaTruthsReel: React.FC = () => {
  return (
    <ViralReelTemplate
      hookTitle="La CRUDA verdad de programar con IA en 2026"
      hookSubtitle="lo que nadie te dice sobre el futuro del desarrollo"
      accentColor={brand.orange}
      glowColor={brand.glowOrange.split(",")[0]}
      steps={STEPS}
      ctaTitle="¿El programador junior está en extinción?"
      ctaText="Deja tu opinión en la caja de comentarios. ¿La IA te ayuda o te hace más dependiente?"
    />
  );
};
