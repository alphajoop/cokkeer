import { describe, expect, it } from "bun:test";
import { getCurrentTheme, setTheme, themes } from "../src/core/themes";
import type { ThemeName, ThemeTokenKey } from "../src/core/types";

describe("themes module", () => {
  it("should have all defined theme names", () => {
    expect(Object.keys(themes) as ThemeName[]).toEqual(
      expect.arrayContaining(["lightning-default", "dracula", "monokai"])
    );
  });

  it("themes object should contain all theme keys", () => {
    for (const name of Object.keys(themes) as ThemeName[]) {
      const theme = themes[name as ThemeName];
      expect(theme).toBeDefined();
    }
  });

  it("default getCurrentTheme returns lightning-default", () => {
    const theme = getCurrentTheme();
    expect(theme).toEqual(themes["lightning-default"]);
  });

  it("setTheme should change the current theme", () => {
    setTheme("dracula");
    expect(getCurrentTheme()).toEqual(themes.dracula);

    setTheme("monokai");
    expect(getCurrentTheme()).toEqual(themes.monokai);

    setTheme("lightning-default");
    expect(getCurrentTheme()).toEqual(themes["lightning-default"]);
  });

  it("every theme has all required color properties", () => {
    const requiredKeys: ThemeTokenKey[] = [
      "background",
      "text",
      "keyword",
      "string",
      "number",
      "comment",
      "literal",
      "operator",
      "identifier",
      "punctuation",
      "type",
    ];

    for (const name of Object.keys(themes) as ThemeName[]) {
      const theme = themes[name as ThemeName];

      for (const key of requiredKeys) {
        expect(theme[key]).toBeDefined();
        expect(typeof theme[key]).toBe("string");
      }
    }
  });
});
