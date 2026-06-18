import React from "react";
import { AbsoluteFill } from "remotion";
import type { Tip } from "./data/tips";
import { Background } from "./components/Background";
import { NumberBadge } from "./components/NumberBadge";
import { GlowTitle } from "./components/GlowTitle";
import { KeyCombo } from "./components/KeyCombo";
import { EditorMockup } from "./components/EditorMockup";
import { CaptionTop } from "./components/CaptionTop";
import { CaptionBottom } from "./components/CaptionBottom";
import { theme } from "./theme";
interface Props { tip: Tip; }
export const TipScene: React.FC<Props> = ({ tip }) => (
  <AbsoluteFill style={{ background: theme.bg, fontFamily: theme.fontMono }}>
    <Background />
    <AbsoluteFill>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "80px 60px", gap: 32, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 28 }}>
          <NumberBadge number={tip.number} delay={0} />
          <GlowTitle title={tip.title} delay={8} />
        </div>
        {tip.keys && <KeyCombo keys={tip.keys} delay={18} />}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <EditorMockup filename={tip.filename} code={tip.code} delay={22} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
            {tip.captionTop && <CaptionTop text={tip.captionTop} delay={45} />}
            {tip.captionBottom && <CaptionBottom text={tip.captionBottom} delay={52} />}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span style={{ fontFamily: theme.fontMono, fontSize: 24, color: theme.accentDim, letterSpacing: "2px", textTransform: "uppercase" }}>@migueldev11</span>
        </div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);
