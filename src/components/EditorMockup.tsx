import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import type { CodeLine } from "../data/tips";
import { CodeLineView } from "./CodeLineView";
interface Props { filename:string; code:CodeLine[]; delay?:number }
const DOTS=["#FF5F57","#FFBD2E","#28CA41"];
export const EditorMockup: React.FC<Props> = ({filename,code,delay=18}) => {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const p=spring({frame:frame-delay,fps,config:{damping:16,stiffness:90},durationInFrames:30});
  return <div style={{width:"100%",background:theme.bgPanel,borderRadius:20,border:`1.5px solid ${theme.bgPanelBorder}`,boxShadow:`0 0 40px ${theme.accent}22,0 8px 40px rgba(0,0,0,.5)`,overflow:"hidden",transform:`translateY(${interpolate(p,[0,1],[60,0])}px)`,opacity:interpolate(p,[0,0.3,1],[0,0,1])}}>
    <div style={{display:"flex",alignItems:"center",gap:8,padding:"14px 20px",background:"#081008",borderBottom:`1px solid ${theme.bgPanelBorder}`}}>
      {DOTS.map((c,i)=><div key={i} style={{width:14,height:14,borderRadius:"50%",background:c}}/>)}
      <div style={{marginLeft:16,fontFamily:theme.fontMono,fontSize:22,color:theme.textMuted,background:theme.bgAlt,padding:"4px 16px",borderRadius:8,border:`1px solid ${theme.bgPanelBorder}`}}>{filename}</div>
    </div>
    <div style={{padding:"20px 24px",display:"flex",flexDirection:"column",gap:6}}>
      {code.map((line,i)=><CodeLineView key={i} line={line} lineNumber={i+1} revealDelay={delay+10+i*6}/>)}
    </div>
  </div>;
};
