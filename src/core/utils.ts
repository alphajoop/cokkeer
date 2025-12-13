import { getCurrentTheme, setTheme, type ThemeName } from "./themes";

export function getThemeCss(themeName: ThemeName = "lightning-default"): string {
  if (themeName) {
    setTheme(themeName);
  }
  const theme = getCurrentTheme();
  return `
    .ln-code {
      background-color: ${theme.background};
      color: ${theme.text};
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
    }
    .token.keyword { color: ${theme.keyword}; }
    .token.string { color: ${theme.string}; }
    .token.number { color: ${theme.number}; }
    .token.comment { color: ${theme.comment}; }
    .token.literal { color: ${theme.literal}; }
    .token.operator { color: ${theme.operator}; }
    .token.identifier { color: ${theme.identifier}; }
    .token.punctuation { color: ${theme.punctuation}; }
  `;
}
