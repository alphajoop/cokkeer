export type Token = { type: string; content: string };
export type TokenPattern = { type: string; regex: RegExp };

/**
 * Supported programming languages
 * @example "js" | "javascript" | "ts" | "typescript" | "py" | "python"
 */
export type LanguageName = "js" | "javascript" | "ts" | "typescript" | "py" | "python";

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

/**
 * Theme colors only (without layout properties)
 */
export type ThemeColors = Record<ThemeTokenKey, string>;

/**
 * Complete theme with colors and optional layout properties
 */
export type Theme = ThemeColors & {
  padding?: string;
  borderRadius?: string;
  fontFamily?: string;
};
