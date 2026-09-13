<section class="hero-panel">
  <p class="hero-eyebrow">Arista automated fabric</p>
  <h1>DC1 Network Documentation</h1>
  <p class="hero-lead">One source of truth for the fabric design, device configuration, operational validation, and EOS security posture.</p>

  <div class="metric-grid">
    <div class="metric-card"><strong>{{ DEVICE_COUNT }}</strong><span>Devices</span></div>
    <div class="metric-card"><strong>{{ TOTAL_TESTS }}</strong><span>ANTA tests</span></div>
    <div class="metric-card metric-success"><strong>{{ SUCCESSFUL_TESTS }}</strong><span>Passing</span></div>
    <div class="metric-card metric-failure"><strong>{{ FAILED_TESTS }}</strong><span>Failing</span></div>
  </div>
</section>

<div class="callout">
  <strong>Generated documentation</strong>
  <p>The design and device pages are rendered from Arista AVD output. Validation and security pages reflect the latest committed ANTA reports.</p>
</div>

## Explore the portal

<div class="quick-grid">
  <a class="quick-card" href="#fabric" data-doc-link="fabric">
    <span>Design</span>
    <strong>Fabric architecture</strong>
    <p>Topology, address allocation, routing, and VXLAN overlay details.</p>
  </a>
  <a class="quick-card" href="#device-dc1-spine1" data-doc-link="device-dc1-spine1">
    <span>Inventory</span>
    <strong>Device documentation</strong>
    <p>Rendered configuration details for spines, leaves, and border leaves.</p>
  </a>
  <a class="quick-card" href="#validation" data-doc-link="validation">
    <span>Assurance</span>
    <strong>Network validation</strong>
    <p>ANTA results organized by device, category, test, and outcome.</p>
  </a>
  <a class="quick-card" href="#security" data-doc-link="security">
    <span>Security</span>
    <strong>PSIRT assessment</strong>
    <p>Security advisories, affected devices, findings, and remediation.</p>
  </a>
</div>

## Site topology

DC1 is a redundant leaf-spine fabric with two spine switches, three MLAG leaf pairs, and four dual-attached hosts. Select the topology to open the scalable diagram.

<figure class="topology-figure">
  <a href="../assets/topology/L3LS_ACT_DigitalTwin_topology.svg">
    <img src="../assets/topology/L3LS_ACT_DigitalTwin_topology.svg" alt="DC1 leaf-spine topology showing two spines, six leaf switches, and four hosts">
  </a>
  <figcaption>DC1 L3LS digital twin — blue and violet links are fabric uplinks; magenta links are MLAG peers.</figcaption>
</figure>

<div class="button-row">
  <a class="doc-button doc-button-primary" href="../assets/topology/L3LS_ACT_DigitalTwin_topology.svg">Open SVG</a>
  <a class="doc-button" href="../assets/topology/L3LS_ACT_DigitalTwin_topology.png">Download PNG</a>
  <a class="doc-button" href="../assets/topology/L3LS_ACT_DigitalTwin_topo.yml">Download topology YAML</a>
</div>

## Reading generated reports

The validation portal preserves the Markdown produced by ANTA and AVD. Large result tables use the full available page width and wrap long device messages before falling back to horizontal scrolling.

<div class="button-row">
  <a class="doc-button doc-button-primary" href="#validation" data-doc-link="validation">Open validation report</a>
  <a class="doc-button" href="reports/anta_report.json">Download JSON</a>
  <a class="doc-button" href="reports/anta_report.csv">Download CSV</a>
</div>

| Result | Meaning | Recommended action |
| --- | --- | --- |
| Success | The tested state matches the expected state. | No action is required. |
| Failure | The device responded, but its state did not meet the assertion. | Review the test message and remediate the reported condition. |
| Error | The test could not complete successfully. | Confirm credentials, privileges, connectivity, and command support. |
| Skipped | The test was intentionally not executed. | Review the catalog inputs if the test should apply. |

<div class="callout callout-warning">
  <strong>Reports are point-in-time evidence</strong>
  <p>Always compare the report timestamp with the latest deployment or maintenance event before making an operational decision.</p>
</div>

## Example workflow

Use the generated documentation and validation results together during a change review:

```bash
# Generate AVD documentation, run ANTA, then publish the committed outputs.
git add sites/DC1/documentation sites/DC1/anta docs
git commit -m "Update DC1 documentation and validation"
git push origin main
```

The GitHub Pages workflow assembles this portal and deploys it without a frontend build dependency.
