import { AbsoluteFill, Sequence } from 'remotion';
import { CONCEPTS_CAP4_SCENES, conceptsTheme } from '../../themes/concepts';
import { Background } from '../../components/Background';
import { Watermark } from '../../shared/Watermark';

import React from 'react';
const DummyScene: React.FC = () => <AbsoluteFill />;
const Scene1Gancho = DummyScene;
const Scene2Error = DummyScene;
const Scene3Evals = DummyScene;
const Scene4Cierre = DummyScene;

export const ConceptsCap4: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: conceptsTheme.bg }}>
      <Background color={conceptsTheme.pink} />

      <Sequence from={CONCEPTS_CAP4_SCENES[0].from} durationInFrames={CONCEPTS_CAP4_SCENES[0].duration}>
        <Scene1Gancho />
      </Sequence>

      <Sequence from={CONCEPTS_CAP4_SCENES[1].from} durationInFrames={CONCEPTS_CAP4_SCENES[1].duration}>
        <Scene2Error />
      </Sequence>

      <Sequence from={CONCEPTS_CAP4_SCENES[2].from} durationInFrames={CONCEPTS_CAP4_SCENES[2].duration}>
        <Scene3Evals />
      </Sequence>

      <Sequence from={CONCEPTS_CAP4_SCENES[3].from} durationInFrames={CONCEPTS_CAP4_SCENES[3].duration}>
        <Scene4Cierre />
      </Sequence>

      <Watermark />
    </AbsoluteFill>
  );
};
