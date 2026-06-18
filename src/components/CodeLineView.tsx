import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import type { CodeLine } from "../data/tips";
import { SyntaxToken } from "./SyntaxToken";
import { Cursor } from "./Cursor";
import { Selection } from "./Selection";
interface Props { line: CodeLine; lineNumber: number; revealDelay?: number }
export const CodeLineView: React.FC<Props> = ({line,lineNumber,revealDelay=0}) => {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const p=spring({frame:frame-revealDelay,fps,config:{damping:18,stiffness:120},durationInFrames:18});
  const hLen=line.highlight?line.highlight[1]-line.highlight[0]:0;
  return <div style={{display:"flex",alignItems:"center",gap:16,opacity:interpolate(p,[0,0.5,1],[0,0,1]),transform:`translateX(${interpolate(p,[0,1],[-20,0])}px)`,minHeight:34}}>
    <span style={{fontFamily:theme.fontMono,fontSize:22,color:theme.textMuted,minWidth:28,textAlign:"right",flexShrink:0}}>{lineNumber}</span>
    <div style={{position:"relative",display:"flex",alignItems:"center"}}>
      {line.highlight&&<Selection charWidth={hLen} delay={revealDelay+12}/>}
      <span style={{fontFamily:theme.fontMono,fontSize:26,lineHeight:1.3}}>
        {line.tokens.map((t,i)=><SyntaxToken key={i} text={t.text} type={t.type}/>)}
        {line.cursor!==undefined&&<Cursor/>}
      </span>
    </div>
  </div>;
};
