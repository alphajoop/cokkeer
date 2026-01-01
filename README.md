# Cokkeer

[![npm](https://img.shields.io/npm/v/cokkeer)](https://www.npmjs.com/package/cokkeer)
[![license](https://img.shields.io/npm/l/cokkeer)](https://github.com/alphajoop/cokkeer/blob/main/LICENSE)
[![build](https://github.com/alphajoop/cokkeer/actions/workflows/release.yml/badge.svg)](https://github.com/alphajoop/cokkeer/actions)

Ultra-fast, zero-dependency syntax highlighter optimized for **Bun** & **TypeScript**.

## ✨ Features

- ⚡ **Blazing fast** - Optimized tokenizer with minimal overhead
- 🏗 **Zero runtime dependencies** - No external packages required
- 🎨 **Built-in themes** - Lightning (light), Dracula (dark), Monokai
- 🛠 **TypeScript first** - Full type safety and autocomplete
- 📦 **Lightweight** - Small bundle size
- 🔌 **Easy integration** - Works with React, Vue, vanilla JS, and more
- 🎯 **SSR friendly** - No browser-specific APIs
- 🌐 **Multiple languages** - JavaScript, TypeScript, Python (more coming)

---

## 📦 Installation

### Using npm

```bash
npm install cokkeer
```

### Using Bun (recommended)

```bash
bun add cokkeer
```

### Using pnpm

```bash
pnpm add cokkeer
```

### Using yarn

```bash
yarn add cokkeer
```

---

## 🚀 Quick Start

### Basic Usage (Vanilla JavaScript)

```typescript
import { highlight } from "cokkeer";

const code = `function greet(name: string) {
  return \`Hello, \${name}!\`;
}`;

const html = highlight(code, "typescript", "dracula");
console.log(html);
```

### Browser Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Cokkeer Demo</title>
  </head>
  <body>
    <div id="code-container"></div>

    <script type="module">
      import { highlight } from "https://cdn.jsdelivr.net/npm/cokkeer/dist/index.js";

      const code = `const x = 42;
console.log(x);`;

      const html = highlight(code, "javascript", "monokai");
      document.getElementById("code-container").innerHTML = html;
    </script>
  </body>
</html>
```

---

## ⚛️ React Integration

### Basic React Component

```tsx
import { highlight, type LanguageName, type ThemeName } from "cokkeer";

interface CodeBlockProps {
  code: string;
  language?: LanguageName;
  theme?: ThemeName;
}

export function CodeBlock({
  code,
  language = "javascript",
  theme = "dracula",
}: CodeBlockProps) {
  return (
    <div
      className="ln-code"
      dangerouslySetInnerHTML={{
        __html: highlight(code, language, theme),
      }}
    />
  );
}
```

**Advantages of this approach:**

- ✅ Types imported directly from `cokkeer`
- ✅ Full autocompletion in your IDE
- ✅ TypeScript validation of languages and themes
- ✅ More maintainable code

### Usage in Your App

```tsx
import { CodeBlock } from "./components/CodeBlock";

function App() {
  const exampleCode = `const greeting = "Hello, Cokkeer!";
console.log(greeting);`;

  return (
    <div>
      <h1>My Code Example</h1>
      <CodeBlock code={exampleCode} language="javascript" theme="monokai" />
    </div>
  );
}
```

**Features:**

- ✅ Type-safe with `LanguageName` and `ThemeName`
- ✅ Copy button with visual feedback
- ✅ Optional filename display
- ✅ Customizable styling

### Usage with Multiple Code Blocks

```tsx
import { CodeBlock } from "./components/CodeBlock";

function Documentation() {
  return (
    <div>
      <h2>JavaScript Example</h2>
      <CodeBlock
        code={`const sum = (a, b) => a + b;
console.log(sum(5, 3));`}
        language="javascript"
        fileName="math.js"
      />

      <h2>TypeScript Example</h2>
      <CodeBlock
        code={`interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 30
};`}
        language="typescript"
        theme="dracula"
        fileName="types.ts"
      />

      <h2>Python Example</h2>
      <CodeBlock
        code={`def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`}
        language="python"
        theme="monokai"
        fileName="greet.py"
      />
    </div>
  );
}
```

### React with SSR (Next.js)

```tsx
// app/components/CodeBlock.tsx
"use client"; // Client component in Next.js 13+

import { highlight } from "cokkeer";

export function CodeBlock({
  code,
  language = "javascript",
  theme = "dracula",
}) {
  const html = highlight(code, language, theme);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
```

```tsx
// app/page.tsx
import { CodeBlock } from "./components/CodeBlock";

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Blog</h1>
      <CodeBlock
        code={`console.log("Hello from Next.js!");`}
        language="javascript"
      />
    </main>
  );
}
```

---

## 🎨 Themes

Cokkeer includes three built-in themes:

### Lightning Default (Light Theme)

```typescript
import { highlight } from "cokkeer";

const html = highlight(code, "javascript", "lightning-default");
```

### Dracula (Dark Theme)

```typescript
const html = highlight(code, "typescript", "dracula");
```

### Monokai (Classic Dark)

```typescript
const html = highlight(code, "python", "monokai");
```

### Theme Preview

| Theme               | Background | Use Case                               |
| ------------------- | ---------- | -------------------------------------- |
| `lightning-default` | Light      | Documentation, blogs, light mode sites |
| `dracula`           | Dark       | Dark mode apps, modern UIs             |
| `monokai`           | Dark       | Classic editor theme, developer tools  |

### Creating Custom Themes

You can create custom themes by defining a `Theme` object:

```typescript
import { type Theme } from "cokkeer";

const myCustomTheme: Theme = {
  background: "#1e1e1e",
  text: "#d4d4d4",
  keyword: "#569cd6", // Keywords (def, class, if, etc.)
  string: "#ce9178", // Strings
  number: "#b5cea8", // Numbers
  comment: "#6a9955", // Comments
  literal: "#d4d4d4", // Literals (true, false, null)
  operator: "#d4d4d4", // Operators (+, -, =, etc.)
  identifier: "#9cdcfe", // Identifiers (variable names)
  punctuation: "#d4d4d4", // Punctuation (; , . etc.)
  type: "#4ec9b0", // Types (string, number, boolean, etc.)
};
```

**Note:** Currently, custom themes need to be registered in the library. Full custom theme support is coming in a future release. For now, you can use CSS overrides:

```css
.ln-code {
  background: #1e1e1e !important;
  color: #d4d4d4 !important;
}

.token.keyword {
  color: #569cd6 !important;
}

.token.string {
  color: #ce9178 !important;
}

.token.number {
  color: #b5cea8 !important;
}

.token.comment {
  color: #6a9955 !important;
}

.token.identifier {
  color: #9cdcfe !important;
}

.token.type {
  color: #4ec9b0 !important;
}
```

---

## 🌍 Supported Languages

| Language       | Aliases            | Example                         |
| -------------- | ------------------ | ------------------------------- |
| **JavaScript** | `js`, `javascript` | `highlight(code, "js")`         |
| **TypeScript** | `ts`, `typescript` | `highlight(code, "typescript")` |
| **Python**     | `py`, `python`     | `highlight(code, "python")`     |

More languages coming soon! 🚀

---

## 📖 API Reference

### `highlight(code: string, language?: string, themeName?: string): string`

Highlights the given code string and returns HTML.

**Parameters:**

- `code` (string): The source code to highlight
- `language` (optional): Language identifier (default: `"js"`)
  - Options: `"js"`, `"javascript"`, `"ts"`, `"typescript"`, `"py"`, `"python"`
- `themeName` (optional): Theme name (default: system theme)
  - Options: `"lightning-default"`, `"dracula"`, `"monokai"`

**Returns:** HTML string with inline styles

**Example:**

```typescript
import { highlight } from "cokkeer";

const html = highlight(`const x = 42;`, "javascript", "monokai");
```

### `highlightBlock(element: Element, themeName?: string): void`

Highlights a DOM element containing code.

**Parameters:**

- `element` (Element): DOM element with code content
- `themeName` (optional): Theme name

**Example:**

```typescript
import { highlightBlock } from "cokkeer";

const codeElement = document.querySelector("#code-block");
highlightBlock(codeElement, "dracula");
```

### `getCurrentTheme(themeName?: string): Theme`

Gets the current theme object.

**Parameters:**

- `themeName` (optional): Theme name to retrieve

**Returns:** Theme object with color configuration

**Example:**

```typescript
import { getCurrentTheme } from "cokkeer";

const theme = getCurrentTheme("dracula");
console.log(theme.background); // "#282a36"
console.log(theme.keyword); // "#ff79c6"
```

---

## 🎯 TypeScript Support

Cokkeer is built with TypeScript and provides full type definitions out of the box.

### Import Types

```typescript
import {
  highlight,
  type LanguageName,
  type ThemeName,
  type Theme,
} from "cokkeer";

// Use types in your components
interface CodeBlockProps {
  code: string;
  language?: LanguageName; // Auto-completion: "js" | "javascript" | "ts" | ...
  theme?: ThemeName; // Auto-completion: "lightning-default" | "dracula" | "monokai"
}

function highlightCode(code: string, lang: LanguageName, themeName: ThemeName) {
  return highlight(code, lang, themeName);
}
```

### Available Types

```typescript
// Languages supported
type LanguageName = "js" | "javascript" | "ts" | "typescript" | "py" | "python";

// Available themes
type ThemeName = "lightning-default" | "dracula" | "monokai";

// Theme structure
interface Theme {
  background: string;
  text: string;
  keyword: string;
  string: string;
  number: string;
  comment: string;
  literal: string;
  operator: string;
  identifier: string;
  punctuation: string;
  type: string;
  padding?: string;
  borderRadius?: string;
  fontFamily?: string;
}

// Token types for internal use
type ThemeTokenKey =
  | "background"
  | "text"
  | "keyword"
  | "string"
  | "number"
  | "comment"
  | "literal"
  | "operator"
  | "identifier"
  | "punctuation"
  | "type";
```

### Type-Safe React Example

```tsx
import { highlight, type LanguageName, type ThemeName } from "cokkeer";
import { type FC } from "react";

interface Props {
  code: string;
  language?: LanguageName;
  theme?: ThemeName;
}

// Fully type-safe component
export const CodeBlock: FC<Props> = ({
  code,
  language = "javascript",
  theme = "dracula",
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: highlight(code, language, theme),
      }}
    />
  );
};
```

### Benefits of Type Safety

- ✅ **Autocomplete** - Your IDE suggests valid languages and themes
- ✅ **Type checking** - Catch errors before runtime
- ✅ **Better refactoring** - Rename and find usages with confidence
- ✅ **Self-documenting** - Types serve as inline documentation

---

## 🔧 Advanced Usage

### Custom Styling

The generated HTML includes inline styles, but you can override them with CSS:

```css
.ln-code {
  font-size: 16px !important;
  line-height: 1.6 !important;
  border: 1px solid #e5e7eb;
}

.token.keyword {
  font-weight: bold;
}

.token.string {
  font-style: italic;
}
```

### Integration with MDX

```mdx
import { CodeBlock } from "./components/CodeBlock";

# My Blog Post

Here's a code example:

<CodeBlock
  code={`function hello() {
  return "world";
}`}
  language="javascript"
  theme="dracula"
/>
```

### Markdown Code Block Processor

````typescript
import { highlight } from "cokkeer";

function processMarkdownCodeBlocks(markdown: string): string {
  return markdown.replace(/```(\w+)\n([\s\S]*?)```/g, (_, lang, code) =>
    highlight(code.trim(), lang, "dracula")
  );
}

const markdown = `
\`\`\`javascript
const x = 42;
\`\`\`
`;

const html = processMarkdownCodeBlocks(markdown);
````

---

## 🏗️ Performance

Cokkeer is designed for speed:

- ⚡ **Zero dependencies** - No external packages to slow you down
- 🚀 **Fast tokenization** - Efficient regex-based parser
- 📦 **Small bundle** - Minimal impact on your bundle size
- 💾 **Inline styles** - No CSS file to load separately

---

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) to get started.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/alphajoop/cokkeer.git
cd cokkeer

# Install dependencies
bun install

# Run tests
bun test

# Build
bun run build

# Run in development
bun run dev
```

### Adding a New Language

1. Create a file in `src/languages/` (e.g., `rust.ts`)
2. Define token patterns
3. Export from `src/index.ts`
4. Add tests in `tests/`

---

## 📝 License

MIT © [Alpha Diop](https://github.com/alphajoop)

---

## 🔗 Links

- [GitHub Repository](https://github.com/alphajoop/cokkeer)
- [NPM Package](https://www.npmjs.com/package/cokkeer)
- [Issue Tracker](https://github.com/alphajoop/cokkeer/issues)
- [Changelog](https://github.com/alphajoop/cokkeer/blob/main/CHANGELOG.md)

---

## ⭐ Show Your Support

If you find Cokkeer useful, please consider giving it a star on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/alphajoop/cokkeer?style=social)](https://github.com/alphajoop/cokkeer)
