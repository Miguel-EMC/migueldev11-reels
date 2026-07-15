import { AbsoluteFill, Sequence } from 'remotion';
import { CONCEPTS_CAP5_SCENES, conceptsTheme } from '../../themes/concepts';
import { Background } from '../../components/Background';
import { Watermark } from '../../shared/Watermark';

import React from 'react';
const DummyScene: React.FC = () => <AbsoluteFill />;
const Scene1Gancho = DummyScene;
const Scene2QueEs = DummyScene;
const Scene3Error = DummyScene;
const Scene4Cierre = DummyScene;

export const ConceptsCap5: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: conceptsTheme.bg }}>
      <Background color={conceptsTheme.pink} />

      <Sequence from={CONCEPTS_CAP5_SCENES[0].from} durationInFrames={CONCEPTS_CAP5_SCENES[0].duration}>
        <Scene1Gancho />
      </Sequence>

      <Sequence from={CONCEPTS_CAP5_SCENES[1].from} durationInFrames={CONCEPTS_CAP5_SCENES[1].duration}>
        <Scene2QueEs />
      </Sequence>

      <Sequence from={CONCEPTS_CAP5_SCENES[2].from} durationInFrames={CONCEPTS_CAP5_SCENES[2].duration}>
        <Scene3Error />
      </Sequence>

      <Sequence from={CONCEPTS_CAP5_SCENES[3].from} durationInFrames={CONCEPTS_CAP5_SCENES[3].duration}>
        <Scene4Cierre />
      </Sequence>

      <Watermark />
    </AbsoluteFill>
  );
};
