import React from "react";
import { Composition } from "remotion";
import { Main, FRAMES_PER_TIP } from "./Main";
import { tips } from "./data/tips";
const totalFrames = tips.length * FRAMES_PER_TIP;
export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="TipsVSCode" component={Main} durationInFrames={totalFrames} fps={30} width={1080} height={1920} />
  </>
);
