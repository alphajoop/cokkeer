import { describe, expect, it } from "bun:test";
import { tokenize } from "../src/core/tokenizer";
import { javascriptPatterns } from "../src/languages/javascript";
import { pythonPatterns } from "../src/languages/python";
import { typescriptPatterns } from "../src/languages/typescript";

describe("tokenize — JavaScript", () => {
  it("should tokenize keywords, identifiers, numbers & comments", () => {
    const code = `
      // hello
      const x = 5;
      let y = x + 10;
    `;
    const tokens = tokenize(code, javascriptPatterns);

    // we expect at least some types
    const types = tokens.map((t) => t.type);
    expect(types).toEqual(
      expect.arrayContaining([
        "comment",
        "keyword",
        "identifier",
        "number",
        "operator",
        "punctuation",
      ]),
    );

    // check specific token values
    expect(tokens.some((t) => t.content.trim() === "// hello")).toBe(true);
    expect(tokens.some((t) => t.content === "const")).toBe(true);
    expect(tokens.some((t) => t.content === "x")).toBe(true);
    expect(tokens.some((t) => t.content === "5")).toBe(true);
  });
});

describe("tokenize — TypeScript", () => {
  it("should include TypeScript specific tokens", () => {
    const code = `
      type MyType = string | number;
      interface Foo { bar: number }
    `;
    const tokens = tokenize(code, typescriptPatterns);

    expect(tokens.some((t) => t.content === "type")).toBe(true);
    expect(tokens.some((t) => t.content === "interface")).toBe(true);
    expect(tokens.some((t) => t.content === "string")).toBe(true);
  });
});

describe("tokenize — Python", () => {
  it("should tokenize Python keywords, numbers & strings", () => {
    const code = `
      # This is a comment
      def foo(x):
          return "hello" + x
    `;
    const tokens = tokenize(code, pythonPatterns);

    expect(tokens.some((t) => t.type === "comment")).toBe(true);
    expect(tokens.some((t) => t.content === "def")).toBe(true);
    expect(tokens.some((t) => t.content === `"hello"`)).toBe(true);
    expect(tokens.some((t) => t.content === "return")).toBe(true);
  });
});
