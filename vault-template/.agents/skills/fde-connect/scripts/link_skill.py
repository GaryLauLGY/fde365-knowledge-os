#!/usr/bin/env python3
"""Connect project-owned skills to supported local Agent directories."""

from __future__ import annotations

import argparse
import json
import shutil
from pathlib import Path


AGENT_DIRS = {"claude": ".claude/skills", "codex": ".codex/skills", "agents": ".agents/skills", "grok": ".grok/skills"}
MARKER = "FDE-SKILLS-GROK-BRIDGE"


def sources(path: Path) -> list[Path]:
    path = path.expanduser().resolve()
    if (path / "SKILL.md").is_file():
        return [path]
    found = sorted(item for item in path.iterdir() if item.is_dir() and (item / "SKILL.md").is_file()) if path.is_dir() else []
    if not found:
        raise ValueError(f"no skill found: {path}")
    return found


def destination(base: Path, agent: str, source: Path) -> Path:
    return base / AGENT_DIRS[agent] / source.name


def owned_wrapper(path: Path) -> bool:
    file = path / "SKILL.md"
    return file.is_file() and MARKER in file.read_text(encoding="utf-8", errors="ignore")


def link_one(source: Path, target: Path, agent: str) -> str:
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.exists() or target.is_symlink():
        if target.is_symlink() and target.resolve() == source:
            return "already-linked"
        if agent == "grok" and target.is_dir() and owned_wrapper(target):
            shutil.rmtree(target)
        else:
            return "blocked-existing-target"
    if agent == "grok":
        target.mkdir()
        (target / "SKILL.md").write_text(
            f"---\nname: {source.name}\ndescription: Project skill bridge for Grok.\n---\n\n# {source.name}\n\n<!-- {MARKER} -->\n\nRead and follow `{source / 'SKILL.md'}`.\n",
            encoding="utf-8",
        )
    else:
        target.symlink_to(source, target_is_directory=True)
    return "linked"


def unlink_one(target: Path) -> str:
    if target.is_symlink():
        target.unlink()
        return "unlinked"
    if target.is_dir() and owned_wrapper(target):
        shutil.rmtree(target)
        return "unlinked"
    return "not-owned-or-missing"


def status(source: Path, target: Path, agent: str) -> str:
    if target.is_symlink():
        return "linked" if target.resolve() == source else "linked-elsewhere"
    if agent == "grok" and target.is_dir() and owned_wrapper(target):
        return "linked"
    return "blocked-existing-target" if target.exists() else "missing"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=["link", "unlink", "status"])
    parser.add_argument("--source", type=Path, required=True)
    parser.add_argument("--agent", action="append", choices=sorted(AGENT_DIRS))
    parser.add_argument("--base", type=Path, default=Path.home())
    args = parser.parse_args()
    agents = args.agent or list(AGENT_DIRS)
    rows = []
    try:
        skill_sources = sources(args.source)
    except ValueError as error:
        parser.error(str(error))
    for source in skill_sources:
        for agent in agents:
            target = destination(args.base.resolve(), agent, source)
            if args.command == "link":
                result = link_one(source, target, agent)
            elif args.command == "unlink":
                result = unlink_one(target)
            else:
                result = status(source, target, agent)
            rows.append({"skill": source.name, "agent": agent, "target": str(target), "result": result})
    print(json.dumps(rows, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
