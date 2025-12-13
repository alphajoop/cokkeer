import { describe, expect, it } from "bun:test";
import { getCurrentTheme, setTheme, type ThemeName, themeNames, themes } from "../src/core/themes";

describe("themes module", () => {
  it("should have all defined theme names", () => {
    expect(themeNames).toEqual(expect.arrayContaining(["lightning-default", "dracula", "monokai"]));
  });

  it("themes object should contain correct keys", () => {
    for (const name of themeNames) {
      expect(themes[name as ThemeName]).toBeDefined();
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

  it("every theme has required color properties", () => {
    for (const name of themeNames) {
      const theme = themes[name as ThemeName];
      expect(theme.background).toBeDefined();
      expect(theme.text).toBeDefined();
      expect(theme.keyword).toBeDefined();
      expect(theme.string).toBeDefined();
      expect(theme.number).toBeDefined();
      expect(theme.comment).toBeDefined();
      expect(theme.operator).toBeDefined();
      expect(theme.identifier).toBeDefined();
      expect(theme.punctuation).toBeDefined();
    }
  });
});
