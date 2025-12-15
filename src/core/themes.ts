import { dracula } from "../themes/dracula";
import { monokai } from "../themes/monokai";
import type { Theme, ThemeName } from "./types";

export const themes: Record<ThemeName, Theme> = {
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
};

let _currentTheme: Theme = themes["lightning-default"];

export function setTheme(name: ThemeName): void {
  _currentTheme = themes[name];
}

export function getCurrentTheme(themeName?: ThemeName): Theme {
  return themeName ? themes[themeName] : _currentTheme;
}

