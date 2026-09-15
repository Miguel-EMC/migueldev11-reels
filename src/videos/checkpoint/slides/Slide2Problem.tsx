import React from "react";
import { emcodeTheme } from "../../../themes/emcode";
import { EmcodeGlowText } from "../../carousel/EmcodeCarouselLayout";
import { FadeInLine, staggerDelay } from "../CheckpointAnim";

// SLIDE 2 (4-8s) - Problema
export const Slide2Problem: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 70px",
        textAlign: "center",
        gap: 30,
      }}
    >
      <FadeInLine delay={staggerDelay(0)}>
        <p
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 32,
            fontWeight: 600,
            color: emcodeTheme.textDim,
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          Revisas tu CV cada 6 meses
          <br />y piensas...
        </p>
      </FadeInLine>

      <FadeInLine delay={staggerDelay(1)}>
        <EmcodeGlowText fontSize={52} color={emcodeTheme.red} glowColor={emcodeTheme.red}>
          ¿Qué hice realmente?
        </EmcodeGlowText>
      </FadeInLine>

      <FadeInLine delay={staggerDelay(2)}>
        <p
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 28,
            fontWeight: 700,
            color: emcodeTheme.cream,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Sin datos. Sin comparación.
          <br />
          Sin saber si avanzaste.
        </p>
      </FadeInLine>
    </div>
  );
};
