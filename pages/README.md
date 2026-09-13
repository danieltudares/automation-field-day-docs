# DC1 documentation site

This folder contains the static GitHub Pages frontend. It uses HTML5, CSS, vanilla JavaScript, and client-side Markdown rendering; no Node.js build is required.

## Structure

```text
pages/
├── index.html                  # Application shell and accessible page layout
├── assets/
│   ├── css/styles.css          # Theme, responsive layout, tables, and code blocks
│   └── js/app.js               # Navigation, search, dark mode, ToC, and copy buttons
├── content/
│   ├── overview.md             # Portal landing page
│   └── guides/                 # Optional hand-written Markdown articles
├── scripts/build_site.py       # Assembles generated and hand-written content
└── README.md
```

The build script adds these generated sources automatically:

- `sites/DC1/documentation/` → AVD fabric and device pages
- `sites/DC1/anta/reports/` → ANTA validation report and downloads
- `sites/DC1/anta/psirt_report.md` → security advisory page
- `docs/L3LS_ACT_DigitalTwin_topology.*` → topology assets

## Add a documentation page

1. Create a Markdown file below `pages/content/guides/`, for example `pages/content/guides/change-process.md`.
2. Start the document with one level-one heading: `# Change process`.
3. Commit the file. The build script discovers it and adds it to the **Guides** navigation section.

Use fenced code blocks with a language identifier to enable syntax highlighting and the copy button:

````markdown
```yaml
fabric_name: DC1_FABRIC
```
````

Standard Markdown tables, block quotes, lists, links, and headings are styled automatically. For project callouts, use:

```html
<div class="callout callout-warning">
  <strong>Before continuing</strong>
  <p>Validate the latest ANTA report.</p>
</div>
```

## Preview locally

Assemble the same output used by GitHub Actions, then serve it over HTTP:

```bash
preview_dir="$(mktemp -d)"
python3 pages/scripts/build_site.py --output "$preview_dir"
python3 -m http.server 8000 --directory "$preview_dir"
```

Open `http://localhost:8000`. Markdown cannot be previewed reliably by opening `index.html` directly because browsers restrict `fetch()` for local files.
