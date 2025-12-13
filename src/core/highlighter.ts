import { javascriptPatterns } from "../languages/javascript";
import { pythonPatterns } from "../languages/python";
import { typescriptPatterns } from "../languages/typescript";
import { getCurrentTheme, type ThemeName } from "./themes";
import { tokenize } from "./tokenizer";
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

export function highlight(code: string, lang = "js", themeName?: ThemeName): string {
  const patterns = langMap[lang as keyof typeof langMap] || javascriptPatterns;
  const tokens = tokenize(code, patterns);
  const theme = getCurrentTheme(themeName);
  let html = "";

  for (const t of tokens) {
    const c = escapeHtml(t.content)
      .replace(/\n/g, "\n")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    if (t.type === "whitespace" || t.type === "text") {
      html += c;
    } else {
      html += `<span class="token ${t.type}" style="color:${
        theme[t.type] || theme.text
      }">${c}</span>`;
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
  const html = highlight(code, themeName);
  el.innerHTML = html;
}

export { getThemeCss };
