import { AbsoluteFill, Sequence } from 'remotion';
import { CONCEPTS_CAP4_SCENES, conceptsTheme } from '../../themes/concepts';
import { Background } from '../../components/Background';
import { Watermark } from '../../shared/Watermark';

import { Scene1Gancho } from './cap4/Scene1Gancho';
import { Scene2Error } from './cap4/Scene2Error';
import { Scene3Evals } from './cap4/Scene3Evals';
import { Scene4Cierre } from './cap4/Scene4Cierre';

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
