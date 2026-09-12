#!/usr/bin/env python3
"""Render ANTA summary metrics into the portal homepage template."""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--report", required=True, type=Path)
    parser.add_argument("--homepage", required=True, type=Path)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    results = json.loads(args.report.read_text(encoding="utf-8"))
    if not isinstance(results, list):
        raise ValueError("ANTA report must contain a JSON list")

    result_counts = Counter(str(item.get("result", "")).lower() for item in results)
    devices = {str(item["name"]) for item in results if item.get("name")}
    replacements = {
        "{{ DEVICE_COUNT }}": len(devices),
        "{{ TOTAL_TESTS }}": len(results),
        "{{ SUCCESSFUL_TESTS }}": result_counts["success"],
        "{{ FAILED_TESTS }}": result_counts["failure"],
    }

    homepage = args.homepage.read_text(encoding="utf-8")
    for placeholder, value in replacements.items():
        if placeholder not in homepage:
            raise ValueError(f"Missing homepage placeholder: {placeholder}")
        homepage = homepage.replace(placeholder, str(value))

    args.homepage.write_text(homepage, encoding="utf-8")


if __name__ == "__main__":
    main()
