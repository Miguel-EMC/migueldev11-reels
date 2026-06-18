export type TokenType = "keyword"|"string"|"func"|"number"|"comment"|"punctuation"|"plain";
export type Token = { text: string; type: TokenType };
export type CodeLine = { tokens: Token[]; highlight?: [number,number]; cursor?: number };
export type Tip = { number: number; title: string; keys?: string[]; filename: string; code: CodeLine[]; captionTop?: string; captionBottom?: string };

export const tips: Tip[] = [
  { number: 1, title: "Multicursor", filename: "config.ts", code: [
    { tokens: [{text:"const",type:"keyword"},{text:" host",type:"plain"},{text:" = ",type:"punctuation"},{text:'"localhost"',type:"string"},{text:";",type:"punctuation"}], cursor: 5 },
    { tokens: [{text:"const",type:"keyword"},{text:" port",type:"plain"},{text:" = ",type:"punctuation"},{text:"3000",type:"number"},{text:";",type:"punctuation"}], cursor: 5 },
    { tokens: [{text:"const",type:"keyword"},{text:" debug",type:"plain"},{text:" = ",type:"punctuation"},{text:"true",type:"keyword"},{text:";",type:"punctuation"}], cursor: 5 },
    { tokens: [{text:"const",type:"keyword"},{text:" timeout",type:"plain"},{text:" = ",type:"punctuation"},{text:"5000",type:"number"},{text:";",type:"punctuation"}], cursor: 5 },
  ], captionBottom: "edita varias líneas a la vez" },
  { number: 2, title: "Paleta de\ncomandos", keys: ["Ctrl","Shift","P"], filename: "terminal", code: [
    { tokens: [{text:">",type:"punctuation"},{text:" theme",type:"func"}] },
    { tokens: [{text:"Color Theme",type:"keyword"},{text:"         Preferences",type:"comment"}] },
    { tokens: [{text:"File Icon Theme",type:"func"},{text:"     Preferences",type:"comment"}] },
    { tokens: [{text:"Product Icon Theme",type:"func"},{text:"  Preferences",type:"comment"}] },
  ], captionBottom: "todo a un atajo" },
  { number: 3, title: "Renombrar\nsímbolo", keys: ["Ctrl","Shift","L"], filename: "auth.ts", code: [
    { tokens: [{text:"async function",type:"keyword"},{text:" load",type:"func"},{text:"(",type:"punctuation"},{text:"profile",type:"plain"},{text:": string) {",type:"punctuation"}], highlight: [15,19] },
    { tokens: [{text:"  const data",type:"plain"},{text:" = ",type:"punctuation"},{text:"await",type:"keyword"},{text:" load",type:"func"},{text:"(",type:"punctuation"},{text:"profile",type:"plain"},{text:");",type:"punctuation"}], highlight: [21,25] },
    { tokens: [{text:"  ",type:"plain"},{text:"return",type:"keyword"},{text:" load",type:"func"},{text:".cache[",type:"punctuation"},{text:"profile",type:"plain"},{text:"];",type:"punctuation"}], highlight: [9,13] },
    { tokens: [{text:"}",type:"punctuation"}] },
  ], captionTop: "4 cambios a la vez", captionBottom: "renombra variables en un solo toque" },
];
