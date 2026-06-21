import { AbsoluteFill, Sequence } from 'remotion';
import { CONCEPTS_CAP3_SCENES, conceptsTheme } from '../../themes/concepts';
import { Background } from '../../components/Background';
import { Watermark } from '../../shared/Watermark';

import { Scene1Gancho } from './cap3/Scene1Gancho';
import { Scene2Diferencia } from './cap3/Scene2Diferencia';
import { Scene3Regla } from './cap3/Scene3Regla';
import { Scene4Cierre } from './cap3/Scene4Cierre';

export const ConceptsCap3: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: conceptsTheme.bg }}>
      <Background color={conceptsTheme.pink} />

      <Sequence from={CONCEPTS_CAP3_SCENES[0].from} durationInFrames={CONCEPTS_CAP3_SCENES[0].duration}>
        <Scene1Gancho />
      </Sequence>

      <Sequence from={CONCEPTS_CAP3_SCENES[1].from} durationInFrames={CONCEPTS_CAP3_SCENES[1].duration}>
        <Scene2Diferencia />
      </Sequence>

      <Sequence from={CONCEPTS_CAP3_SCENES[2].from} durationInFrames={CONCEPTS_CAP3_SCENES[2].duration}>
        <Scene3Regla />
      </Sequence>

      <Sequence from={CONCEPTS_CAP3_SCENES[3].from} durationInFrames={CONCEPTS_CAP3_SCENES[3].duration}>
        <Scene4Cierre />
      </Sequence>

      <Watermark />
    </AbsoluteFill>
  );
};
