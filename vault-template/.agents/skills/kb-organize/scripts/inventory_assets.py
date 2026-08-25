#!/usr/bin/env python3
"""Create a read-only inventory for the configured six asset libraries."""

from __future__ import annotations

import argparse
import hashlib
import json
from collections import defaultdict
from pathlib import Path


def library_paths(config: Path) -> dict[str, str]:
    values = {}
    in_libraries = False
    for raw in config.read_text(encoding="utf-8").splitlines():
        if raw.strip() == "libraries:":
            in_libraries = True
            continue
        if in_libraries and raw and not raw.startswith(" "):
            break
        if in_libraries and ":" in raw:
            key, value = raw.strip().split(":", 1)
            values[key.strip()] = value.strip().strip("'\"")
    return values


def digest(path: Path) -> str:
    sha = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            sha.update(chunk)
    return sha.hexdigest()


def has_source(path: Path) -> bool:
    if path.suffix.lower() not in {".md", ".txt"}:
        return True
    head = path.read_text(encoding="utf-8", errors="replace")[:4000].lower()
    return any(marker in head for marker in ("source:", "来源：", "来源:", "原始文件：", "原始文件:"))


def inventory(root: Path, large_bytes: int) -> dict:
    config = root / ".kb" / "config.yaml"
    if not config.is_file():
        raise ValueError(f"missing config: {config}")
    libraries = library_paths(config)
    if len(libraries) != 6:
        raise ValueError(f"expected 6 libraries, found {len(libraries)}")
    rows, hashes = [], defaultdict(list)
    missing_sources, large_files, missing_dirs = [], [], []
    totals = {}
    for key, relative in libraries.items():
        directory = (root / relative).resolve()
        if not directory.is_dir():
            missing_dirs.append(str(directory))
            totals[key] = 0
            continue
        count = 0
        for path in sorted(item for item in directory.rglob("*") if item.is_file() and not item.is_symlink()):
            count += 1
            stat = path.stat()
            sha = digest(path)
            hashes[sha].append(str(path))
            row = {"library": key, "path": str(path), "size": stat.st_size, "modified": int(stat.st_mtime), "sha256": sha}
            rows.append(row)
            if stat.st_size >= large_bytes:
                large_files.append(str(path))
            if not has_source(path):
                missing_sources.append(str(path))
        totals[key] = count
    duplicates = [paths for paths in hashes.values() if len(paths) > 1]
    return {
        "root": str(root),
        "libraries": totals,
        "files": rows,
        "duplicates": duplicates,
        "missing_source": missing_sources,
        "large_files": large_files,
        "missing_directories": missing_dirs,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--large-mb", type=int, default=10)
    args = parser.parse_args()
    try:
        result = inventory(args.root.expanduser().resolve(), args.large_mb * 1024 * 1024)
    except ValueError as error:
        parser.error(str(error))
    encoded = json.dumps(result, ensure_ascii=False, indent=2) + "\n"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(encoded, encoding="utf-8")
    print(encoded, end="")


if __name__ == "__main__":
    main()
