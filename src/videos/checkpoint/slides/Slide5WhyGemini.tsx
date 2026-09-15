import React from "react";
import { emcodeTheme } from "../../../themes/emcode";
import { EmcodeGlowText } from "../../carousel/EmcodeCarouselLayout";
import { FadeInLine, staggerDelay } from "../CheckpointAnim";
import { CheckpointRow } from "../CheckpointRow";

const FEATURES = [
  "Entiende contexto real de tu experiencia",
  "Hace preguntas inteligentes, no robóticas",
  "Compara sesiones y detecta patrones",
  "Genera reports claros y accionables",
];

// SLIDE 5 (16-20s) - Por qué Gemini
export const Slide5WhyGemini: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "40px 60px",
        gap: 22,
      }}
    >
      <FadeInLine delay={staggerDelay(0)} style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 42,
            fontWeight: 900,
            margin: 0,
            lineHeight: 1.25,
            letterSpacing: "-1px",
          }}
        >
          <EmcodeGlowText fontSize={42} color={emcodeTheme.cream} glowColor={emcodeTheme.cyan}>
            Built with Google
            <br />
            Gemini API
          </EmcodeGlowText>
        </h1>
      </FadeInLine>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 10 }}>
        {FEATURES.map((text, i) => (
          <FadeInLine key={text} delay={staggerDelay(i + 1)}>
            <CheckpointRow icon="✅" accent={emcodeTheme.green}>
              {text}
            </CheckpointRow>
          </FadeInLine>
        ))}
      </div>
    </div>
  );
};
