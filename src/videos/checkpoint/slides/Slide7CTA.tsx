import React from "react";
import { emcodeTheme } from "../../../themes/emcode";
import { EmcodeGlowText } from "../../carousel/EmcodeCarouselLayout";
import { FadeInLine, staggerDelay } from "../CheckpointAnim";

// SLIDE 7 (24-28s) - CTA
export const Slide7CTA: React.FC = () => {
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
        gap: 26,
      }}
    >
      <FadeInLine delay={staggerDelay(0)}>
        <h1
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 72,
            fontWeight: 900,
            margin: 0,
            letterSpacing: "-1.5px",
          }}
        >
          <EmcodeGlowText fontSize={72} color={emcodeTheme.cyan} glowColor={emcodeTheme.cyan}>
            Checkpoint
          </EmcodeGlowText>
        </h1>
      </FadeInLine>

      <FadeInLine delay={staggerDelay(1)}>
        <p
          style={{
            fontFamily: emcodeTheme.fontMono,
            fontSize: 30,
            fontWeight: 700,
            color: emcodeTheme.cream,
            margin: 0,
            letterSpacing: 0.5,
          }}
        >
          Progress Tracking with Substance
        </p>
      </FadeInLine>

      <FadeInLine delay={staggerDelay(2)} style={{ marginTop: 24 }}>
        <div
          style={{
            border: `2px dashed ${emcodeTheme.cyan}`,
            borderRadius: 24,
            padding: "26px 30px",
            backgroundColor: "rgba(14, 24, 30, 0.85)",
            backdropFilter: "blur(12px)",
            boxShadow: `0 15px 35px rgba(34, 211, 238, 0.18)`,
          }}
        >
          <div
            style={{
              fontFamily: emcodeTheme.fontMono,
              fontSize: 24,
              fontWeight: 800,
              color: emcodeTheme.green,
              textShadow: emcodeTheme.glowGreen,
              marginBottom: 12,
            }}
          >
            Built by @migueldev11
          </div>
          <div
            style={{
              fontFamily: emcodeTheme.fontMono,
              fontSize: 22,
              fontWeight: 800,
              color: emcodeTheme.orange,
              letterSpacing: 1,
              marginBottom: 8,
            }}
          >
            #DevFestQuitoChallenge
          </div>
          <div
            style={{
              fontFamily: emcodeTheme.fontMono,
              fontSize: 20,
              fontWeight: 700,
              color: emcodeTheme.textDim,
            }}
          >
            @GDGQuito
          </div>
        </div>
      </FadeInLine>
    </div>
  );
};
