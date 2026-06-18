import React from "react";
import { theme } from "../theme";
export const KeyCap: React.FC<{label:string}> = ({label}) => (
  <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"8px 18px",background:theme.bgAlt,border:`1.5px solid ${theme.accent}`,borderRadius:10,boxShadow:theme.glowAccent,fontFamily:theme.fontMono,fontWeight:600,fontSize:30,color:theme.accent,textShadow:theme.glowText,whiteSpace:"nowrap",minWidth:60}}>{label}</div>
);
