import React from "react";
import { useCurrentFrame } from "remotion";
import { theme } from "../theme";
export const Cursor: React.FC = () => {
  const frame=useCurrentFrame();
  return <span style={{display:"inline-block",width:3,height:"1.1em",verticalAlign:"text-bottom",background:theme.accent,boxShadow:theme.glowAccent,opacity:(frame%36)<18?1:0,marginLeft:1}}/>;
};
