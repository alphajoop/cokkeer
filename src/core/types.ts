export type Token = { type: string; content: string };
export type TokenPattern = { type: string; regex: RegExp };

/**
 * Supported programming languages
 * @example "js" | "javascript" | "ts" | "typescript" | "py" | "python"
 */
export type LanguageName =
  | "js"
  | "javascript"
  | "ts"
  | "typescript"
  | "py"
  | "python";

/**
 * Available theme names
 * @example "lightning-default" | "dracula" | "monokai"
 */
export type ThemeName = "lightning-default" | "dracula" | "monokai";

/**
 * Theme color configuration
 */
export type ThemeTokenKey =
  | "background"
  | "text"
  | "keyword"
  | "string"
  | "number"
  | "comment"
  | "literal"
  | "operator"
  | "identifier"
  | "punctuation"
  | "type";

export type Theme = Record<ThemeTokenKey, string> & {
  padding?: string;
  borderRadius?: string;
  fontFamily?: string;
};
