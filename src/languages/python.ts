import type { TokenPattern } from "../core/tokenizer";

export const pythonPatterns: TokenPattern[] = [
  // Comments (# ...)
  { type: "comment", regex: /#.*/y },

  // Strings (single, double, triple)
  {
    type: "string",
    regex: /("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/y,
  },

  // numbers
  { type: "number", regex: /\b\d+(\.\d+)?\b/y },

  // keywords
  {
    type: "keyword",
    regex:
      /\b(import|from|class|def|return|if|elif|else|while|for|in|try|except|finally|with|as|pass|break|continue|lambda|global|nonlocal|assert|raise|yield|async|await)\b/y,
  },

  // booleans / None
  { type: "literal", regex: /\b(True|False|None)\b/y },

  // operators
  {
    type: "operator",
    regex: /==|!=|<=|>=|->|\+=|-=|\*=|\/=|%=|<|>|\+|-|\*|\/|=|and|or|not|in|is/y,
  },

  // punctuation
  {
    type: "punctuation",
    regex: /[()[\]{},.:;]/y,
  },

  // identifiers
  { type: "identifier", regex: /[A-Za-z_][A-Za-z0-9_]*/y },

  // whitespace
  { type: "whitespace", regex: /\s+/y },
];
