import { dracula } from "../themes/dracula";
import { lightningDefault } from "../themes/lightning-default";
import { monokai } from "../themes/monokai";
import type { Theme, ThemeColors, ThemeName } from "./types";

/**
 * Common layout properties for all themes
 */
const commonThemeLayout: Pick<Theme, "fontFamily" | "padding" | "borderRadius"> = {
  fontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace",
  padding: "1rem",
  borderRadius: "8px",
};

/**
 * Merge theme colors with common layout properties
 */
function createTheme(colors: ThemeColors): Theme {
  return {
    ...colors,
    ...commonThemeLayout,
  };
}

/**
 * All available themes with common layout applied
 */
export const themes: Record<ThemeName, Theme> = {
  "lightning-default": createTheme(lightningDefault),
  dracula: createTheme(dracula),
  monokai: createTheme(monokai),
};

let _currentTheme: Theme = themes["lightning-default"];

export function setTheme(name: ThemeName): void {
  _currentTheme = themes[name];
}

export function getCurrentTheme(themeName?: ThemeName): Theme {
  return themeName ? themes[themeName] : _currentTheme;
}
