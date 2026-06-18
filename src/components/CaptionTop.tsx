import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
export const CaptionTop: React.FC<{text:string;delay?:number}> = ({text,delay=40}) => {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const p=spring({frame:frame-delay,fps,config:{damping:14,stiffness:100},durationInFrames:20});
  return <div style={{display:"flex",alignItems:"center",gap:10,opacity:interpolate(p,[0,0.5,1],[0,0,1]),transform:`translateY(${interpolate(p,[0,1],[20,0])}px)`}}>
    <span style={{fontSize:28,color:theme.accentSoft}}>✦</span>
    <span style={{fontFamily:theme.fontMono,fontSize:28,color:theme.accentSoft,textShadow:theme.glowSoft,letterSpacing:"0.5px"}}>{text}</span>
  </div>;
};
