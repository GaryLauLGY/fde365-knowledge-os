#!/usr/bin/env python3
"""Render a small Markdown subset as self-contained WeChat HTML."""

from __future__ import annotations

import argparse
import html
import json
import re
from pathlib import Path


HERE = Path(__file__).resolve().parent
THEMES = HERE.parent / "references" / "style-themes.json"
FONTS = {
    "sans": "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
    "serif": "Georgia,'Noto Serif SC',serif",
    "mono": "ui-monospace,SFMono-Regular,Menlo,monospace",
}
SPACING = {"compact": (1.6, "0.65em"), "normal": (1.75, "0.9em"), "loose": (1.95, "1.15em")}


def load_themes() -> dict[str, dict]:
    return {item["id"]: item for item in json.loads(THEMES.read_text(encoding="utf-8"))}


def inline(value: str) -> str:
    value = html.escape(value, quote=True)
    value = re.sub(r"!\[([^]]*)\]\(([^)]+)\)", r'<img alt="\1" src="\2" style="max-width:100%;height:auto;" />', value)
    value = re.sub(r"\[([^]]+)\]\(([^)]+)\)", r'<a href="\2" style="color:inherit;text-decoration:underline;">\1</a>', value)
    value = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", value)
    value = re.sub(r"`([^`]+)`", r"<code>\1</code>", value)
    return value


def render(markdown: str, theme: dict) -> str:
    tokens = theme["tokens"]
    line_height, gap = SPACING[tokens["spacing"]]
    font = FONTS[tokens["font"]]
    accent = {"line": "border-left:3px solid currentColor", "soft": "border:1px solid #d1d5db", "box": "border:1px solid currentColor", "block": "background:rgba(127,127,127,.10)"}[tokens["accent"]]
    parts: list[str] = []
    in_code = False
    code_lines: list[str] = []
    list_kind = None

    def close_list() -> None:
        nonlocal list_kind
        if list_kind:
            parts.append(f"</{list_kind}>")
            list_kind = None

    for raw in markdown.splitlines():
        line = raw.rstrip()
        if line.startswith("```"):
            close_list()
            if in_code:
                parts.append(f'<pre style="overflow:auto;padding:12px;{accent};"><code>{html.escape(chr(10).join(code_lines))}</code></pre>')
                code_lines = []
            in_code = not in_code
            continue
        if in_code:
            code_lines.append(line)
            continue
        if not line:
            close_list()
            continue
        heading = re.match(r"^(#{1,3})\s+(.+)$", line)
        if heading:
            close_list()
            level = len(heading.group(1))
            size = {1: "1.55em", 2: "1.3em", 3: "1.12em"}[level]
            parts.append(f'<h{level} style="font-size:{size};margin:{gap} 0 .45em;">{inline(heading.group(2))}</h{level}>')
            continue
        item = re.match(r"^\s*([-*]|\d+\.)\s+(.+)$", line)
        if item:
            kind = "ul" if item.group(1) in {"-", "*"} else "ol"
            if list_kind != kind:
                close_list()
                parts.append(f'<{kind} style="padding-left:1.4em;margin:{gap} 0;">')
                list_kind = kind
            parts.append(f"<li>{inline(item.group(2))}</li>")
            continue
        close_list()
        if line.startswith("> "):
            parts.append(f'<blockquote style="margin:{gap} 0;padding:.6em 1em;{accent};">{inline(line[2:])}</blockquote>')
        else:
            parts.append(f'<p style="margin:{gap} 0;">{inline(line)}</p>')
    close_list()
    if in_code:
        parts.append(f"<pre><code>{html.escape(chr(10).join(code_lines))}</code></pre>")
    body = "\n".join(parts)
    return (
        f'<section data-kb-theme="{theme["id"]}" style="box-sizing:border-box;max-width:100%;'
        f'padding:16px;color:{tokens["text_color"]};background:{tokens["background"]};'
        f'font-family:{font};font-size:16px;line-height:{line_height};word-break:break-word;">\n{body}\n</section>\n'
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--theme", default="clear")
    parser.add_argument("--list-themes", action="store_true")
    args = parser.parse_args()
    themes = load_themes()
    if args.list_themes:
        print(json.dumps([{"id": value["id"], "label": value["label"]} for value in themes.values()], ensure_ascii=False, indent=2))
        return
    if not args.input or not args.output:
        parser.error("--input and --output are required")
    if args.theme not in themes:
        parser.error(f"unknown theme: {args.theme}")
    result = render(args.input.read_text(encoding="utf-8"), themes[args.theme])
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(result, encoding="utf-8")
    print(json.dumps({"theme": args.theme, "output": str(args.output)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
