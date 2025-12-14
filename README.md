# Cokkeer

[![npm](https://img.shields.io/npm/v/cokkeer)](https://www.npmjs.com/package/cokkeer)
[![license](https://img.shields.io/npm/l/cokkeer)](https://github.com/alphajoop/cokkeer/blob/main/LICENSE)
[![build](https://github.com/alphajoop/cokkeer/actions/workflows/release.yml/badge.svg)](https://github.com/alphajoop/cokkeer/actions)

Ultra-fast, zero-dependency syntax highlighter optimized for **Bun** & **TypeScript**.

## Features

- ⚡ Blazing fast highlighting
- 🏗 Zero runtime dependencies
- 🎨 Customizable themes
- 🛠 TypeScript support
- 🔌 Easy to integrate

## Installation

### Using npm

```bash
npm install cokkeer
```

### Using Bun (recommended)

```bash
bun add cokkeer
```

## Quick Start

### Basic Usage

```typescript
import { highlight } from "cokkeer";

const code = `function greet(name: string) {
  return \`Hello, \${name}!\`;
}`;

const html = highlight(code, "typescript");
console.log(html);
```

### Highlighting Code Blocks

```typescript
import { highlightBlock } from "cokkeer";

// Highlight a single element
const element = document.querySelector("#code-block");
highlightBlock(element, "dracula");
```

## Supported Languages

| Language   | Aliases            |
| ---------- | ------------------ |
| JavaScript | `js`, `javascript` |
| TypeScript | `ts`, `typescript` |
| Python     | `py`, `python`     |

## API Reference

### [highlight(code: string, language?: string, themeName?: string): string](cci:1://file:///c:/Users/alpha/workflow/lightning-syntax/src/core/highlighter.ts:20:0-46:1)

Highlights the given code string.

**Parameters:**

- `code`: The source code to highlight
- `language`: Language of the code (default: `"js"`)
- `themeName`: Optional theme name (default: system theme)

**Returns:** HTML string with syntax highlighting

### [highlightBlock(element: Element, themeName?: string): void](cci:1://file:///c:/Users/alpha/workflow/lightning-syntax/src/core/highlighter.ts:48:0-52:1)

Highlights a DOM element containing code.

**Parameters:**

- `element`: DOM element containing the code
- `themeName`: Optional theme name (default: system theme)

### `getThemeCss(themeName?: string): string`

Gets the CSS for a specific theme.

**Parameters:**

- `themeName`: Name of the theme

**Returns:** CSS string for the theme

## Theming

Cokkeer comes with built-in themes and supports custom theming. Available themes:

- `lightning-default` (default light theme)
- `dracula` (default dark theme)
- `monokai`

### Using a Theme

```typescript
// Apply theme when highlighting
const html = highlight(code, "javascript", "monokai");

// Or get theme CSS
import { getThemeCss } from "cokkeer";
const css = getThemeCss("monokai");
```

### Custom Themes

Create a custom theme by extending the `Theme` type:

```typescript
import type { Theme } from "cokkeer";

const myTheme: Theme = {
  background: "#ffffff",
  text: "#333333",
  string: "#0366d6",
  number: "#005cc5",
  keyword: "#d73a49",
  // ... other token colors
};
```

## Performance

Cokkeer is optimized for performance:

- Zero dependencies
- Efficient tokenization
- Minimal memory footprint
- Fast rendering

## Contributing

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) to get started.

## License

MIT © [Alpha Diop](https://github.com/alphajoop)
