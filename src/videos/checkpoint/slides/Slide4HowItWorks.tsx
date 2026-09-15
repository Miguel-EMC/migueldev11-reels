import React from "react";
import { emcodeTheme } from "../../../themes/emcode";
import { EmcodeGlowText } from "../../carousel/EmcodeCarouselLayout";
import { FadeInLine, staggerDelay } from "../CheckpointAnim";
import { CheckpointRow } from "../CheckpointRow";

const STEPS: Array<{ icon: string; text: string }> = [
  { icon: "1️⃣", text: "Inicia tu sesión" },
  { icon: "2️⃣", text: "Gemini API hace preguntas concretas" },
  { icon: "3️⃣", text: "Compara contra tu reporte anterior" },
  { icon: "4️⃣", text: "Obtienes tu snapshot real" },
];

// SLIDE 4 (12-16s) - Cómo Funciona
export const Slide4HowItWorks: React.FC = () => {
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
            fontSize: 52,
            fontWeight: 900,
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
          <EmcodeGlowText fontSize={52} color={emcodeTheme.cream} glowColor={emcodeTheme.cyan}>
            Cómo funciona
          </EmcodeGlowText>
        </h1>
      </FadeInLine>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 6 }}>
        {STEPS.map((step, i) => (
          <FadeInLine key={step.text} delay={staggerDelay(i + 1)}>
            <CheckpointRow icon={step.icon} accent={emcodeTheme.cyan}>
              {step.text}
            </CheckpointRow>
          </FadeInLine>
        ))}
      </div>

      <FadeInLine delay={staggerDelay(STEPS.length + 1)} style={{ textAlign: "center", marginTop: 18 }}>
        <span
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 28,
            fontWeight: 900,
            color: emcodeTheme.orange,
            textShadow: emcodeTheme.glowOrange,
            letterSpacing: 1,
          }}
        >
          No BS. Just facts.
        </span>
      </FadeInLine>
    </div>
  );
};
