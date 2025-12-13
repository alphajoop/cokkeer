import type { TokenPattern } from "../core/tokenizer";

export const javascriptPatterns: TokenPattern[] = [
  { type: "comment", regex: /\/\*[\s\S]*?\*\/|\/\/.*/y },
  {
    type: "string",
    regex: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/y,
  },
  { type: "number", regex: /\b\d+(?:\.\d+)?\b/gy },
  {
    type: "keyword",
    regex:
      /\b(?:const|let|var|if|else|return|class|import|export|new|function|while|for|switch|case|break)\b/gy,
  },
  { type: "literal", regex: /\b(?:true|false|null|undefined)\b/gy },
  {
    type: "operator",
    regex: /===|!==|==|!=|=>|<=|>=|\+\+|--|\+|-|\*|\/|%|=|<|>|\?|:|&&|\|\|/gy,
  },
  {
    type: "punctuation",
    regex: /[{}[\](),.;]/gy,
  },
  { type: "identifier", regex: /[A-Za-z_$][A-Za-z0-9_$]*/gy },
  { type: "whitespace", regex: /\s+/gy },
];
