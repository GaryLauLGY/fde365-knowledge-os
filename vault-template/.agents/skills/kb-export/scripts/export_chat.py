#!/usr/bin/env python3
"""List local JSONL conversations and export readable user/assistant text."""

from __future__ import annotations

import argparse
import json
from datetime import datetime
from pathlib import Path


def text_from_content(content) -> str:
    if isinstance(content, str):
        return content.strip()
    if isinstance(content, list):
        values = []
        for item in content:
            if isinstance(item, str):
                values.append(item)
            elif isinstance(item, dict) and item.get("type") in {"text", "input_text", "output_text"}:
                values.append(str(item.get("text", "")))
        return "\n".join(value for value in values if value).strip()
    return ""


def extract(obj: dict) -> tuple[str, str, str] | None:
    timestamp = str(obj.get("timestamp") or obj.get("created_at") or "")
    message = obj.get("message") if isinstance(obj.get("message"), dict) else obj
    role = message.get("role") or obj.get("type")
    content = message.get("content")
    if obj.get("type") == "response_item" and isinstance(obj.get("payload"), dict):
        payload = obj["payload"]
        if payload.get("type") == "message" or "role" in payload:
            role = payload.get("role")
            content = payload.get("content")
    if role not in {"user", "assistant"}:
        return None
    value = text_from_content(content)
    return (role, value, timestamp) if value else None


def read_messages(path: Path) -> list[tuple[str, str, str]]:
    messages = []
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            continue
        if isinstance(obj, dict):
            item = extract(obj)
            if item:
                messages.append(item)
    return messages


def discover(root: Path) -> list[Path]:
    return sorted(root.rglob("*.jsonl"), key=lambda path: path.stat().st_mtime, reverse=True)


def summary(path: Path, root: Path) -> dict:
    messages = read_messages(path)
    first = messages[0][1].replace("\n", " ")[:100] if messages else ""
    return {
        "source": str(path),
        "relative": str(path.relative_to(root)),
        "modified": datetime.fromtimestamp(path.stat().st_mtime).isoformat(timespec="seconds"),
        "messages": len(messages),
        "first_message": first,
    }


def export(paths: list[Path], output: Path) -> None:
    sections = ["# 聊天导出", ""]
    total = 0
    for path in paths:
        messages = read_messages(path)
        total += len(messages)
        sections.extend([f"## {path.name}", "", f"来源：`{path}`", ""])
        for role, content, timestamp in messages:
            label = "用户" if role == "user" else "助手"
            suffix = f" · {timestamp}" if timestamp else ""
            sections.extend([f"### {label}{suffix}", "", content, ""])
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text("\n".join(sections).rstrip() + "\n", encoding="utf-8")
    print(json.dumps({"sources": len(paths), "messages": total, "output": str(output)}, ensure_ascii=False))


def main() -> None:
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="command", required=True)
    list_parser = sub.add_parser("list")
    list_parser.add_argument("--root", type=Path, required=True)
    export_parser = sub.add_parser("export")
    export_parser.add_argument("--root", type=Path, required=True)
    export_parser.add_argument("--source", action="append", type=Path)
    export_parser.add_argument("--recent", type=int)
    export_parser.add_argument("--all", action="store_true")
    export_parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    files = discover(args.root.expanduser().resolve())
    if args.command == "list":
        print(json.dumps([summary(path, args.root.resolve()) for path in files], ensure_ascii=False, indent=2))
        return
    if args.source:
        chosen = [path.expanduser().resolve() for path in args.source]
    elif args.recent:
        chosen = files[: args.recent]
    elif args.all:
        chosen = files
    else:
        parser.error("choose --source, --recent or --all")
    missing = [str(path) for path in chosen if not path.is_file()]
    if missing:
        parser.error("missing source: " + ", ".join(missing))
    export(chosen, args.output.resolve())


if __name__ == "__main__":
    main()
