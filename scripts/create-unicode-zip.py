#!/usr/bin/env python3
import pathlib
import sys
import zipfile

if len(sys.argv) != 4:
    raise SystemExit("usage: create-unicode-zip.py <cwd> <output.zip> <entry>")

cwd = pathlib.Path(sys.argv[1]).resolve()
output = pathlib.Path(sys.argv[2]).resolve()
entry = pathlib.Path(sys.argv[3])
root = cwd / entry

with zipfile.ZipFile(output, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    for path in sorted(root.rglob("*"), key=lambda item: item.as_posix()):
        relative = path.relative_to(cwd).as_posix()
        if path.is_dir():
            info = zipfile.ZipInfo(relative + "/")
            info.external_attr = 0o40755 << 16
            info.flag_bits |= 0x800
            archive.writestr(info, b"")
        else:
            info = zipfile.ZipInfo.from_file(path, relative)
            info.flag_bits |= 0x800
            info.compress_type = zipfile.ZIP_DEFLATED
            with path.open("rb") as source, archive.open(info, "w") as destination:
                while chunk := source.read(1024 * 1024):
                    destination.write(chunk)
