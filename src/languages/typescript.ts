import type { TokenPattern } from "../core/tokenizer";
import { javascriptPatterns } from "./javascript";

export const typescriptPatterns: TokenPattern[] = [
  // TS-specific
  {
    type: "keyword",
    regex: /\b(?:interface|type|enum|implements|readonly|public|private|protected|abstract)\b/gy,
  },
  {
    type: "type",
    regex: /\b(?:string|number|boolean|any|unknown|never|void)\b/gy,
  },
  // Spread JS patterns
  ...javascriptPatterns,
];
