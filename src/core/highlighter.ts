import { javascriptPatterns } from "../languages/javascript";
import { pythonPatterns } from "../languages/python";
import { typescriptPatterns } from "../languages/typescript";
import { getCurrentTheme } from "./themes";
import { tokenize } from "./tokenizer";
import type { LanguageName, ThemeName, ThemeTokenKey } from "./types";
import { getThemeCss } from "./utils";

const langMap = {
  js: javascriptPatterns,
  javascript: javascriptPatterns,
  ts: typescriptPatterns,
  typescript: typescriptPatterns,
  py: pythonPatterns,
  python: pythonPatterns,
};

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function highlight(
  code: string,
  lang: LanguageName = "js",
  themeName?: ThemeName
): string {
  const patterns = langMap[lang];
  const tokens = tokenize(code, patterns);
  const theme = getCurrentTheme(themeName);

  let html = "";

  for (const t of tokens) {
    const c = escapeHtml(t.content).replace(/\n/g, "\n");

    if (t.type === "whitespace" || t.type === "text") {
      html += c;
    } else {
      const color = theme[t.type as ThemeTokenKey] ?? theme.text;

      html += `<span class="token ${t.type}" style="color:${color}">${c}</span>`;
    }
  }

  return `
<pre class="ln-code" style="background:${theme.background};color:${theme.text}">
<code>${html}</code>
</pre>
`;
}

export function highlightBlock(el: Element, themeName?: ThemeName) {
  const code = el.textContent || "";
  const html = highlight(code, "js", themeName);
  el.innerHTML = html;
}

export { getThemeCss };
