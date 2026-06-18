import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
export const CaptionBottom: React.FC<{text:string;delay?:number}> = ({text,delay=50}) => {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const p=spring({frame:frame-delay,fps,config:{damping:14,stiffness:100},durationInFrames:20});
  return <div style={{background:`${theme.accent}15`,border:`1px solid ${theme.accent}44`,borderRadius:14,padding:"14px 28px",opacity:interpolate(p,[0,0.5,1],[0,0,1]),transform:`translateY(${interpolate(p,[0,1],[20,0])}px)`}}>
    <span style={{fontFamily:theme.fontMono,fontSize:30,color:theme.text,letterSpacing:"0.3px"}}>{text}</span>
  </div>;
};
