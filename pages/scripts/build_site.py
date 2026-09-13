#!/usr/bin/env python3
"""Assemble the dependency-free DC1 documentation site for GitHub Pages."""

from __future__ import annotations

import argparse
import html
import json
import re
import shutil
from collections import Counter
from pathlib import Path
from typing import Any


REPOSITORY_URL = "https://github.com/danieltudares/automation-field-day-docs"
HEADING_PATTERN = re.compile(r"^#\s+(.+?)\s*$", re.MULTILINE)
HTML_PATTERN = re.compile(r"<[^>]+>")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", required=True, type=Path)
    return parser.parse_args()


def require(path: Path) -> Path:
    if not path.exists():
        raise FileNotFoundError(f"Required site input does not exist: {path}")
    return path


def copy_tree(source: Path, destination: Path) -> None:
    require(source)
    shutil.copytree(source, destination, dirs_exist_ok=True)


def title_from_markdown(path: Path) -> str:
    source = path.read_text(encoding="utf-8")
    match = HEADING_PATTERN.search(source)
    if not match:
        return path.stem.replace("_", " ").replace("-", " ").title()
    title = HTML_PATTERN.sub("", match.group(1))
    return html.unescape(title).strip().strip("#").strip()


def slug(value: str) -> str:
    normalized = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return normalized or "document"


def document_entry(
    document_id: str,
    title: str,
    path: Path,
    group: str,
    description: str,
) -> dict[str, str]:
    return {
        "id": document_id,
        "title": title,
        "path": path.as_posix(),
        "group": group,
        "description": description,
    }


def render_overview(overview: Path, metrics: dict[str, int]) -> None:
    content = overview.read_text(encoding="utf-8")
    replacements = {
        "{{ DEVICE_COUNT }}": metrics["devices"],
        "{{ TOTAL_TESTS }}": metrics["total"],
        "{{ SUCCESSFUL_TESTS }}": metrics["success"],
        "{{ FAILED_TESTS }}": metrics["failure"],
    }
    for placeholder, value in replacements.items():
        if placeholder not in content:
            raise ValueError(f"Missing overview placeholder: {placeholder}")
        content = content.replace(placeholder, str(value))
    overview.write_text(content, encoding="utf-8")


def read_metrics(report_path: Path) -> dict[str, int]:
    results = json.loads(require(report_path).read_text(encoding="utf-8"))
    if not isinstance(results, list):
        raise ValueError("ANTA JSON report must contain a list of test results")
    counts = Counter(str(item.get("result", "")).lower() for item in results)
    devices = {str(item["name"]) for item in results if item.get("name")}
    return {
        "devices": len(devices),
        "total": len(results),
        "success": counts["success"],
        "failure": counts["failure"],
        "error": counts["error"],
        "skipped": counts["skipped"],
    }


def build_site(output: Path) -> None:
    pages_root = Path(__file__).resolve().parents[1]
    repository_root = pages_root.parent
    output = output.resolve()

    if output in {repository_root.resolve(), pages_root.resolve()}:
        raise ValueError("Refusing to build over a source directory")
    if output.exists() and any(output.iterdir()):
        raise ValueError(f"Output directory must be empty: {output}")

    output.mkdir(parents=True, exist_ok=True)
    shutil.copy2(require(pages_root / "index.html"), output / "index.html")
    shutil.copy2(pages_root / "index.html", output / "404.html")
    copy_tree(pages_root / "assets", output / "assets")
    copy_tree(pages_root / "content", output / "content")
    (output / ".nojekyll").touch()

    avd_source = repository_root / "sites/DC1/documentation"
    report_source = repository_root / "sites/DC1/anta/reports"
    security_source = repository_root / "sites/DC1/anta/psirt_report.md"
    topology_source = repository_root / "docs"

    copy_tree(avd_source, output / "content/avd")
    copy_tree(report_source, output / "content/reports")
    shutil.copy2(require(security_source), output / "content/reports/psirt_report.md")

    topology_output = output / "assets/topology"
    topology_output.mkdir(parents=True, exist_ok=True)
    for filename in (
        "L3LS_ACT_DigitalTwin_topology.svg",
        "L3LS_ACT_DigitalTwin_topology.png",
        "L3LS_ACT_DigitalTwin_topo.yml",
    ):
        shutil.copy2(require(topology_source / filename), topology_output / filename)

    metrics = read_metrics(report_source / "anta_report.json")
    render_overview(output / "content/overview.md", metrics)

    documents: list[dict[str, str]] = [
        document_entry(
            "overview",
            "Overview",
            Path("content/overview.md"),
            "Get started",
            "Portal overview, topology, and report guidance.",
        )
    ]

    fabric_ids: list[str] = []
    fabric_files = sorted((output / "content/avd/fabric").glob("*.md"))
    for position, path in enumerate(fabric_files):
        document_id = "fabric" if position == 0 else f"fabric-{slug(path.stem)}"
        fabric_ids.append(document_id)
        documents.append(
            document_entry(
                document_id,
                title_from_markdown(path),
                path.relative_to(output),
                "Fabric",
                "AVD-generated fabric design and topology documentation.",
            )
        )

    device_groups: dict[str, list[str]] = {
        "Spines": [],
        "Leaves": [],
        "Border leaves": [],
    }
    for path in sorted((output / "content/avd/devices").glob("*.md")):
        title = title_from_markdown(path)
        document_id = f"device-{slug(path.stem)}"
        upper_name = path.stem.upper()
        subgroup = (
            "Border leaves"
            if "BORDERLEAF" in upper_name
            else "Spines"
            if "SPINE" in upper_name
            else "Leaves"
        )
        device_groups[subgroup].append(document_id)
        documents.append(
            document_entry(
                document_id,
                title,
                path.relative_to(output),
                f"Devices · {subgroup}",
                "AVD-generated device configuration and operational details.",
            )
        )

    custom_ids: list[str] = []
    for path in sorted((output / "content").glob("guides/**/*.md")):
        document_id = f"guide-{slug(path.relative_to(output / 'content').with_suffix('').as_posix())}"
        custom_ids.append(document_id)
        documents.append(
            document_entry(
                document_id,
                title_from_markdown(path),
                path.relative_to(output),
                "Guides",
                "Project-maintained documentation guide.",
            )
        )

    validation_path = output / "content/reports/anta_report.md"
    security_path = output / "content/reports/psirt_report.md"
    documents.extend(
        [
            document_entry(
                "validation",
                "Network validation",
                validation_path.relative_to(output),
                "Assurance",
                "ANTA network validation results by device, category, and test.",
            ),
            document_entry(
                "security",
                "Security advisories",
                security_path.relative_to(output),
                "Assurance",
                "PSIRT advisory assessment, findings, and remediation guidance.",
            ),
        ]
    )

    navigation: list[dict[str, Any]] = [
        {"label": "Get started", "items": ["overview"]},
        {"label": "Fabric", "items": fabric_ids},
        {
            "label": "Devices",
            "children": [
                {"label": label, "items": document_ids}
                for label, document_ids in device_groups.items()
                if document_ids
            ],
        },
    ]
    if custom_ids:
        navigation.append({"label": "Guides", "items": custom_ids})
    navigation.append({"label": "Assurance", "items": ["validation", "security"]})

    site_data = {
        "project": "DC1 Network Portal",
        "repository_url": REPOSITORY_URL,
        "metrics": metrics,
        "documents": documents,
        "navigation": navigation,
    }
    data_directory = output / "assets/data"
    data_directory.mkdir(parents=True, exist_ok=True)
    (data_directory / "site.json").write_text(
        json.dumps(site_data, indent=2) + "\n",
        encoding="utf-8",
    )

    print(f"Built {len(documents)} documentation pages in {output}")


def main() -> None:
    args = parse_args()
    build_site(args.output)


if __name__ == "__main__":
    main()
