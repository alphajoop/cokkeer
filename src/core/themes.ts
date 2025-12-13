export type Theme = Record<string, string>;

import { dracula } from "../themes/dracula";
import { monokai } from "../themes/monokai";

export const themeNames = ["lightning-default", "dracula", "monokai"] as const;

export type ThemeName = (typeof themeNames)[number];

export const themes = {
  "lightning-default": {
    background: "#ffffff",
    text: "#0f172a",
    keyword: "#7c3aed",
    string: "#059669",
    number: "#b45309",
    comment: "#6b7280",
    literal: "#c026d3",
    operator: "#111827",
    identifier: "#0f172a",
    punctuation: "#111827",
    type: "#0ea5e9",
  },
  dracula,
  monokai,
} as const;

let _currentTheme: Theme = themes["lightning-default"];

export function setTheme(name: ThemeName): void {
  // name est typé ThemeName, donc themes[name] est sûr
  _currentTheme = themes[name];
}

export function getCurrentTheme(themeName?: ThemeName): Theme {
  if (themeName) return themes[themeName];
  return _currentTheme;
}
