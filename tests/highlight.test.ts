import { describe, expect, it } from "bun:test";
import { highlight } from "../src/core/highlighter";
import { getThemeCss } from "../src/core/utils";

// JS tests
describe("highlight() — JavaScript", () => {
  it("highlights simple JS code", () => {
    const code = `const x = 10; // test`;
    const html = highlight(code, "js", "lightning-default");

    // doit inclure des spans avec des classes token
    expect(html).toContain('<span class="token keyword"');
    expect(html).toContain('<span class="token identifier"');
    expect(html).toContain('<span class="token number"');
    expect(html).toContain('<pre class="ln-code"');
  });

  it("applies theme colors by default", () => {
    const html = highlight("let y = 5;", "js", "lightning-default");
    expect(html).toMatch(/style="color:#7c3aed/); // keyword color lightning-default
  });
});

// TS tests
describe("highlight() — TypeScript", () => {
  it("highlights TS code including types", () => {
    const code = `type Foo = string | number;`;
    const html = highlight(code, "ts", "lightning-default");

    expect(html).toContain('class="token keyword"');
    expect(html).toContain(">type<");

    expect(html).toContain('class="token identifier"');
    expect(html).toContain(">Foo<");

    expect(html).toContain('class="token type"');
    expect(html).toContain(">string<");
    expect(html).toContain(">number<");
  });
});

// Python tests
describe("highlight() — Python", () => {
  it("highlights simple Python code", () => {
    const code = `# comment\nx = 42`;
    const html = highlight(code, "py", "dracula");

    expect(html).toContain("# comment");
    expect(html).toContain('class="token identifier"');
    expect(html).toContain(">x<");

    expect(html).toContain('class="token operator"');
    expect(html).toContain(">=<");

    expect(html).toContain('class="token number"');
    expect(html).toContain(">42<");
  });

  it("applies the dracula theme", () => {
    const html = highlight("def test():\n  return 1", "py", "dracula");
    // dracula background en style pre
    expect(html).toMatch(/background:#[0-9a-f]+/);
  });
});

// CSS test for theme utilities
describe("getThemeCss()", () => {
  it("returns valid CSS string for theme", () => {
    const css = getThemeCss("lightning-default");
    expect(css).toContain(".ln-code");
    expect(css).toContain("background-color");
  });
});
