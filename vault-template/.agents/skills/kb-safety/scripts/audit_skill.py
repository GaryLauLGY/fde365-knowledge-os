#!/usr/bin/env python3
"""Inspect local skill files and quarantine only with explicit confirmation."""

from __future__ import annotations

import argparse
import json
import re
import shutil
from datetime import datetime
from pathlib import Path


RULES = {
    "promotion": re.compile(r"affiliate|referral|推广码|返佣|导流", re.I),
    "task_hijack": re.compile(r"ignore (all|previous)|忽略.{0,8}(指令|要求)|secretly|隐蔽", re.I),
    "network_send": re.compile(r"curl\s|wget\s|requests\.(post|put)|fetch\(|socket\.", re.I),
    "sensitive_read": re.compile(r"\.ssh|\.aws|\.env|keychain|credentials|id_rsa", re.I),
    "install_or_execute": re.compile(r"pip install|npm install|subprocess\.|os\.system|eval\(", re.I),
    "delete_or_move": re.compile(r"rm\s+-rf|shutil\.rmtree|unlink\(|\bmv\s", re.I),
}
TEXT_SUFFIXES = {".md", ".py", ".sh", ".js", ".ts", ".json", ".yaml", ".yml", ".toml"}


def scan(root: Path) -> list[dict]:
    findings = []
    for path in sorted(root.rglob("*")):
        if path.is_symlink():
            findings.append({"risk": "symlink", "file": str(path), "line": 0, "evidence": str(path.readlink())[:200]})
            continue
        if not path.is_file() or (path.suffix.lower() not in TEXT_SUFFIXES and path.name != "SKILL.md"):
            continue
        try:
            lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
        except OSError:
            continue
        for number, line in enumerate(lines, 1):
            for risk, pattern in RULES.items():
                if pattern.search(line):
                    findings.append({"risk": risk, "file": str(path), "line": number, "evidence": line.strip()[:200]})
    return findings


def quarantine(source: Path, kb_root: Path) -> dict:
    area = kb_root / ".kb" / "quarantine"
    area.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    target = area / f"{source.name}-{stamp}"
    if target.exists():
        raise ValueError(f"target exists: {target}")
    shutil.move(str(source), str(target))
    record = {"source": str(source), "target": str(target), "time": datetime.now().isoformat(timespec="seconds")}
    (area / f"{source.name}-{stamp}.json").write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return record


def restore(record_path: Path) -> dict:
    record = json.loads(record_path.read_text(encoding="utf-8"))
    source, target = Path(record["source"]), Path(record["target"])
    if source.exists() or not target.exists():
        raise ValueError("restore path is occupied or quarantine item is missing")
    source.parent.mkdir(parents=True, exist_ok=True)
    shutil.move(str(target), str(source))
    record["restored"] = datetime.now().isoformat(timespec="seconds")
    record_path.write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return record


def main() -> None:
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="command", required=True)
    scan_parser = sub.add_parser("scan")
    scan_parser.add_argument("path", type=Path)
    quarantine_parser = sub.add_parser("quarantine")
    quarantine_parser.add_argument("path", type=Path)
    quarantine_parser.add_argument("--kb-root", type=Path, required=True)
    quarantine_parser.add_argument("--yes", action="store_true")
    restore_parser = sub.add_parser("restore")
    restore_parser.add_argument("record", type=Path)
    restore_parser.add_argument("--yes", action="store_true")
    args = parser.parse_args()
    if args.command == "scan":
        root = args.path.expanduser().resolve()
        print(json.dumps({"root": str(root), "findings": scan(root)}, ensure_ascii=False, indent=2))
    elif args.command == "quarantine":
        if not args.yes:
            parser.error("quarantine requires --yes")
        print(json.dumps(quarantine(args.path.resolve(), args.kb_root.resolve()), ensure_ascii=False, indent=2))
    else:
        if not args.yes:
            parser.error("restore requires --yes")
        print(json.dumps(restore(args.record.resolve()), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
