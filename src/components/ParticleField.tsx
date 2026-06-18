import React from "react";
import { useCurrentFrame } from "remotion";
import { theme } from "../theme";
const rand = (s: number) => { const x = Math.sin(s+1)*10000; return x-Math.floor(x); };
export const ParticleField: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} viewBox="0 0 1080 1920">
      {Array.from({length:40},(_,i) => {
        const x=rand(i*3)*1080, baseY=rand(i*3+1)*1920;
        const y=((baseY-frame*(rand(i*3+2)*0.3+0.05))%1920+1920)%1920;
        return <circle key={i} cx={x} cy={y} r={rand(i*7)*2.5+0.5} fill={theme.accent} opacity={rand(i*11)*0.5+0.1} />;
      })}
    </svg>
  );
};
