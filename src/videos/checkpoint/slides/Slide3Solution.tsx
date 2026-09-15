import React from "react";
import { emcodeTheme } from "../../../themes/emcode";
import { EmcodeGlowText } from "../../carousel/EmcodeCarouselLayout";
import { FadeInLine, staggerDelay } from "../CheckpointAnim";
import { CheckpointRow } from "../CheckpointRow";

const ITEMS = [
  "Responde preguntas concretas (no opiniones)",
  "Compara contra tu reporte anterior",
  "Te muestra exactamente dónde estás",
];

// SLIDE 3 (8-12s) - Solución
export const Slide3Solution: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "40px 60px",
        gap: 24,
      }}
    >
      <FadeInLine delay={staggerDelay(0)} style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 64,
            fontWeight: 900,
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
          <EmcodeGlowText fontSize={64} color={emcodeTheme.cyan} glowColor={emcodeTheme.cyan}>
            Checkpoint
          </EmcodeGlowText>
        </h1>
      </FadeInLine>

      <FadeInLine delay={staggerDelay(1)} style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 26,
            fontWeight: 600,
            color: emcodeTheme.cream,
            lineHeight: 1.4,
            margin: "0 0 8px 0",
          }}
        >
          Un agente de IA que evalúa tu
          <br />
          progreso profesional real
        </p>
      </FadeInLine>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 10 }}>
        {ITEMS.map((text, i) => (
          <FadeInLine key={text} delay={staggerDelay(i + 2)}>
            <CheckpointRow icon="✓" accent={emcodeTheme.green}>
              {text}
            </CheckpointRow>
          </FadeInLine>
        ))}
      </div>
    </div>
  );
};
