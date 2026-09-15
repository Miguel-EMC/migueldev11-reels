import React from "react";
import { emcodeTheme } from "../../../themes/emcode";
import { EmcodeGlowText } from "../../carousel/EmcodeCarouselLayout";
import { FadeInLine } from "../CheckpointAnim";

// SLIDE 1 (0-4s) - Gancho
export const Slide1Hook: React.FC = () => {
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
      }}
    >
      <FadeInLine delay={0}>
        <h1
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 58,
            fontWeight: 900,
            color: emcodeTheme.cream,
            lineHeight: 1.25,
            letterSpacing: "-1.5px",
            margin: 0,
          }}
        >
          ¿Estás realmente
          <br />
          progresando en tu carrera?
        </h1>
      </FadeInLine>

      <FadeInLine delay={30} style={{ marginTop: 34 }}>
        <EmcodeGlowText fontSize={40} color={emcodeTheme.cyan} glowColor={emcodeTheme.cyan}>
          ...o solo ocupado?
        </EmcodeGlowText>
      </FadeInLine>
    </div>
  );
};
