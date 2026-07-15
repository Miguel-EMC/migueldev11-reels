import { AbsoluteFill, Sequence } from 'remotion';
import { CONCEPTS_CAP3_SCENES, conceptsTheme } from '../../themes/concepts';
import { Background } from '../../components/Background';
import { Watermark } from '../../shared/Watermark';

import { Scene1Gancho } from './cap3/Scene1Gancho';
const Scene2Diferencia = Scene1Gancho;
const Scene3Regla = Scene1Gancho;
const Scene4Cierre = Scene1Gancho;

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
