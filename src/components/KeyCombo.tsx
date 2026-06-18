import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { KeyCap } from "./KeyCap";
export const KeyCombo: React.FC<{keys:string[];delay?:number}> = ({keys,delay=18}) => {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const p=spring({frame:frame-delay,fps,config:{damping:14,stiffness:100},durationInFrames:20});
  return <div style={{display:"flex",alignItems:"center",gap:12,transform:`translateY(${interpolate(p,[0,1],[30,0])}px)`,opacity:interpolate(p,[0,0.4,1],[0,0,1])}}>
    {keys.map((k,i)=><React.Fragment key={i}><KeyCap label={k}/>{i<keys.length-1&&<span style={{fontFamily:theme.fontMono,fontSize:28,color:theme.textMuted}}>+</span>}</React.Fragment>)}
  </div>;
};
