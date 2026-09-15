import React from "react";
import { emcodeTheme } from "../../../themes/emcode";
import { EmcodeGlowText } from "../../carousel/EmcodeCarouselLayout";
import { FadeInLine, staggerDelay } from "../CheckpointAnim";
import { CheckpointRow } from "../CheckpointRow";

const AUDIENCES: Array<{ icon: string; text: string; accent: string }> = [
  { icon: "👨‍💻", text: "Desarrolladores que quieren saber si realmente crecen", accent: emcodeTheme.green },
  { icon: "👔", text: "Tech leaders que necesitan datos reales", accent: emcodeTheme.cyan },
  { icon: "🌐", text: "Comunidades que trackean talento", accent: emcodeTheme.orange },
];

// SLIDE 6 (20-24s) - Para Quién
export const Slide6WhoFor: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "40px 60px",
        gap: 26,
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
            Para quién es
          </EmcodeGlowText>
        </h1>
      </FadeInLine>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 10 }}>
        {AUDIENCES.map((item, i) => (
          <FadeInLine key={item.text} delay={staggerDelay(i + 1)}>
            <CheckpointRow icon={item.icon} accent={item.accent}>
              {item.text}
            </CheckpointRow>
          </FadeInLine>
        ))}
      </div>
    </div>
  );
};
