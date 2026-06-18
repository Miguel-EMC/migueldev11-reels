import React from "react";
import { Series } from "remotion";
import { tips } from "./data/tips";
import { TipScene } from "./TipScene";
export const FRAMES_PER_TIP = 150;
export const Main: React.FC = () => (
  <Series>
    {tips.map((tip) => (
      <Series.Sequence key={tip.number} durationInFrames={FRAMES_PER_TIP}>
        <TipScene tip={tip} />
      </Series.Sequence>
    ))}
  </Series>
);
