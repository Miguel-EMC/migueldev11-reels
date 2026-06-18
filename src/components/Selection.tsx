import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
export const Selection: React.FC<{charWidth:number;delay?:number}> = ({charWidth,delay=30}) => {
  const frame=useCurrentFrame();
  const w=interpolate(Math.min(Math.max(0,frame-delay)/15,1),[0,1],[0,charWidth*15.6]);
  return <span style={{position:"absolute",top:2,left:0,height:"calc(100% - 4px)",width:w,background:`${theme.accent}33`,border:`1px solid ${theme.accent}66`,borderRadius:2,pointerEvents:"none",overflow:"hidden"}}/>;
};
