import { AbsoluteFill, Sequence } from 'remotion';
import { CONCEPTS_CAP5_SCENES, conceptsTheme } from '../../themes/concepts';
import { Background } from '../../components/Background';
import { Watermark } from '../../shared/Watermark';

import { Scene1Gancho } from './cap5/Scene1Gancho';
import { Scene2QueEs } from './cap5/Scene2QueEs';
import { Scene3Error } from './cap5/Scene3Error';
import { Scene4Cierre } from './cap5/Scene4Cierre';

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
