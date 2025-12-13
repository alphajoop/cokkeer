export type Token = { type: string; content: string };
export type TokenPattern = { type: string; regex: RegExp };

export function tokenize(code: string, patterns: TokenPattern[]): Token[] {
  const tokens: Token[] = [];
  let pos = 0;

  while (pos < code.length) {
    let matched = false;

    for (const p of patterns) {
      p.regex.lastIndex = pos;
      const match = p.regex.exec(code);

      if (match && match.index === pos) {
        tokens.push({ type: p.type, content: match[0] });
        pos = p.regex.lastIndex;
        matched = true;
        break;
      }
    }

    if (!matched) pos++;
  }

  return tokens;
}
