import React from "react";
import { ViralReelTemplate, ViralStep } from "./ViralReelTemplate";
import { brand } from "../../themes/brand";

export const BURNOUT_DEV_TOTAL_FRAMES = 810; // Hook (120) + 3 Steps (3 * 180) + CTA (150)

const STEPS: ViralStep[] = [
  {
    tag: "gestión del tiempo",
    title: "La regla de foco 90 - 20",
    highlightWord: "PROCESA",
    desc: "Programa enfocado durante 90 minutos y descansa 20. Durante el descanso, aléjate de las pantallas. Tu cerebro necesita procesar el código sin estímulos."
  },
  {
    tag: "comunicación asertiva",
    title: "Aprende a decir NO por defecto",
    highlightWord: "VALORA",
    desc: "No aceptes tareas adicionales sin renegociar plazos anteriores. Priorizar tu paz mental te hace un profesional más consistente a largo plazo."
  },
  {
    tag: "desconexión real",
    title: "Apaga Slack y Teams en tu móvil",
    highlightWord: "DESCONECTA",
    desc: "Los bugs de producción en horario no laboral no son tu emergencia personal. Un desarrollador cansado comete el doble de errores."
  }
];

export const BurnoutDevReel: React.FC = () => {
  return (
    <ViralReelTemplate
      hookTitle="La regla de oro para no QUEMARTE como programador"
      hookSubtitle="consejos vitales de salud mental para desarrolladores"
      accentColor={brand.orange}
      glowColor={brand.glowOrange.split(",")[0]}
      steps={STEPS}
      ctaTitle="¿Has sufrido de burnout en tu carrera?"
      ctaText="Comenta abajo tu experiencia o qué hábito te salvó de colapsar en tu trabajo anterior."
    />
  );
};
