import React from "react";
import { theme } from "../theme";
import type { TokenType } from "../data/tips";
const C: Record<TokenType,string> = {keyword:theme.codeKeyword,string:theme.codeString,func:theme.codeFunc,number:theme.codeNumber,comment:theme.codeComment,punctuation:theme.codePunctuation,plain:theme.text};
export const SyntaxToken: React.FC<{text:string;type:TokenType}> = ({text,type}) => <span style={{color:C[type],fontFamily:theme.fontMono}}>{text}</span>;
