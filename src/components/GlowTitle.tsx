import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
export const GlowTitle: React.FC<{title:string;delay?:number}> = ({title,delay=8}) => {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const p=spring({frame:frame-delay,fps,config:{damping:14,stiffness:100},durationInFrames:28});
  return <div style={{transform:`translateY(${interpolate(p,[0,1],[40,0])}px)`,opacity:interpolate(p,[0,0.4,1],[0,0,1])}}>
    {title.split("\n").map((line,i)=><div key={i} style={{fontFamily:theme.fontMono,fontWeight:700,fontSize:72,lineHeight:1.1,color:theme.accent,textShadow:theme.glowText,letterSpacing:"-1px",whiteSpace:"nowrap"}}>{line}</div>)}
  </div>;
};
