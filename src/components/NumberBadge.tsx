import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
export const NumberBadge: React.FC<{number:number;delay?:number}> = ({number,delay=0}) => {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const p=spring({frame:frame-delay,fps,config:{damping:12,stiffness:120,mass:0.8},durationInFrames:25});
  return <div style={{width:100,height:100,borderRadius:"50%",background:`radial-gradient(circle at 35% 35%,${theme.accentSoft},${theme.accent} 60%,${theme.accentDim})`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:theme.glowAccent,transform:`scale(${interpolate(p,[0,1],[0.3,1])})`,opacity:interpolate(p,[0,0.3,1],[0,0,1]),flexShrink:0}}>
    <span style={{fontFamily:theme.fontMono,fontWeight:700,fontSize:48,color:theme.bg,lineHeight:1}}>{number}</span>
  </div>;
};
