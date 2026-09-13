# 📊 ANTA Report <a id="anta-report"></a>

**Table of Contents:**

- [ANTA Report](#anta-report)
  - [Test Results Summary](#test-results-summary)
    - [Summary Totals](#summary-totals)
    - [Summary Totals Device Under Test](#summary-totals-device-under-test)
    - [Summary Totals Per Category](#summary-totals-per-category)
  - [Test Results](#test-results)

## 📉 Test Results Summary <a id="test-results-summary"></a>

### 🔢 Summary Totals <a id="summary-totals"></a>

| Total Tests | ✅&nbsp;Success | ⏭️&nbsp;Skipped | ❌&nbsp;Failure | ❗&nbsp;Error |
| :- | :- | :- | :- | :- |
| 208 | 208 | 0 | 0 | 0 |

### 🔌 Summary Totals Device Under Test <a id="summary-totals-device-under-test"></a>

| Device | Total Tests | ✅&nbsp;Success | ⏭️&nbsp;Skipped | ❌&nbsp;Failure | ❗&nbsp;Error | Categories Skipped | Categories Failed |
| :- | :- | :- | :- | :- | :- | :- | :- |
| **DC1-BORDERLEAF1** | 28 | 28 | 0 | 0 | 0 | - | - |
| **DC1-BORDERLEAF2** | 28 | 28 | 0 | 0 | 0 | - | - |
| **DC1-LEAF1** | 28 | 28 | 0 | 0 | 0 | - | - |
| **DC1-LEAF2** | 28 | 28 | 0 | 0 | 0 | - | - |
| **DC1-LEAF3** | 28 | 28 | 0 | 0 | 0 | - | - |
| **DC1-LEAF4** | 28 | 28 | 0 | 0 | 0 | - | - |
| **DC1-SPINE1** | 20 | 20 | 0 | 0 | 0 | - | - |
| **DC1-SPINE2** | 20 | 20 | 0 | 0 | 0 | - | - |

### 🗂️ Summary Totals Per Category <a id="summary-totals-per-category"></a>

| Test Category | Total Tests | ✅&nbsp;Success | ⏭️&nbsp;Skipped | ❌&nbsp;Failure | ❗&nbsp;Error |
| :- | :- | :- | :- | :- | :- |
| **BGP** | 8 | 8 | 0 | 0 | 0 |
| **Configuration** | 16 | 16 | 0 | 0 | 0 |
| **Connectivity** | 30 | 30 | 0 | 0 | 0 |
| **Interfaces** | 52 | 52 | 0 | 0 | 0 |
| **MLAG** | 18 | 18 | 0 | 0 | 0 |
| **Routing** | 14 | 14 | 0 | 0 | 0 |
| **STP** | 8 | 8 | 0 | 0 | 0 |
| **System** | 56 | 56 | 0 | 0 | 0 |
| **VXLAN** | 6 | 6 | 0 | 0 | 0 |

## 🧪 Test Results <a id="test-results"></a>

| Device | Categories | Test | Description | Result | Messages |
| :- | :- | :- | :- | :- | :- |
| DC1-BORDERLEAF1 | BGP | VerifyBGPPeerSession | Verifies the session state of BGP peers. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Configuration | VerifyRunningConfigDiffs | Verifies there is no difference between the running-config and the startup-config. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Configuration | VerifyZeroTouch | Verifies ZeroTouch is disabled. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Connectivity | VerifyLLDPNeighbors | Verifies the connection status of the specified LLDP (Link Layer Discovery Protocol) neighbors. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Connectivity | VerifyReachability | Verifies VTEP fabric-wide underlay reachability. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Connectivity | VerifyReachability | Verifies reachability to BGP neighbors. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Interfaces | VerifyIllegalLACP | Verifies there are no illegal LACP packets in port channels. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Interfaces | VerifyInterfaceDiscards | Verifies that the interfaces packet discard counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Interfaces | VerifyInterfaceErrDisabled | Verifies there are no interfaces in the errdisabled state. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Interfaces | VerifyInterfaceErrors | Verifies that the interfaces error counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Interfaces | VerifyInterfaceUtilization | Verifies that the utilization of interfaces is below a certain threshold. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Interfaces | VerifyInterfacesStatus | Verifies the operational states of specified interfaces to ensure they match expected configurations. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Interfaces | VerifyPortChannels | Verifies there are no inactive ports in port channels. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | MLAG | VerifyMlagConfigSanity | Verifies there are no MLAG config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | MLAG | VerifyMlagInterfaces | Verifies there are no inactive or active-partial MLAG ports. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | MLAG | VerifyMlagStatus | Verifies the health status of the MLAG configuration. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Routing | VerifyIPv4RoutePresencePerVRF | Verifies that the provided IPv4 prefixes are present in the routing table. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Routing | VerifyRoutingProtocolModel | Verifies the configured routing protocol model. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | STP | VerifySTPCounters | Verifies there is no errors in STP BPDU packets. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | System | VerifyAgentLogs | Verifies there are no agent crash reports. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | System | VerifyCoredump | Verifies there are no core dump files. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | System | VerifyFileSystemUtilization | Verifies that no partition is utilizing more than 75% of its disk space. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | System | VerifyMaintenance | Verifies that the device is not currently under or entering maintenance. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | System | VerifyMemoryUtilization | Verifies whether the memory utilization is below 75%. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | System | VerifyNTP | Verifies if NTP is synchronised. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | System | VerifyReloadCause | Verifies the last reload cause of the device. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | VXLAN | VerifyVxlanConfigSanity | Verifies there are no VXLAN config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | BGP | VerifyBGPPeerSession | Verifies the session state of BGP peers. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Configuration | VerifyRunningConfigDiffs | Verifies there is no difference between the running-config and the startup-config. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Configuration | VerifyZeroTouch | Verifies ZeroTouch is disabled. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Connectivity | VerifyLLDPNeighbors | Verifies the connection status of the specified LLDP (Link Layer Discovery Protocol) neighbors. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Connectivity | VerifyReachability | Verifies VTEP fabric-wide underlay reachability. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Connectivity | VerifyReachability | Verifies reachability to BGP neighbors. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Interfaces | VerifyIllegalLACP | Verifies there are no illegal LACP packets in port channels. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Interfaces | VerifyInterfaceDiscards | Verifies that the interfaces packet discard counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Interfaces | VerifyInterfaceErrDisabled | Verifies there are no interfaces in the errdisabled state. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Interfaces | VerifyInterfaceErrors | Verifies that the interfaces error counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Interfaces | VerifyInterfaceUtilization | Verifies that the utilization of interfaces is below a certain threshold. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Interfaces | VerifyInterfacesStatus | Verifies the operational states of specified interfaces to ensure they match expected configurations. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Interfaces | VerifyPortChannels | Verifies there are no inactive ports in port channels. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | MLAG | VerifyMlagConfigSanity | Verifies there are no MLAG config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | MLAG | VerifyMlagInterfaces | Verifies there are no inactive or active-partial MLAG ports. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | MLAG | VerifyMlagStatus | Verifies the health status of the MLAG configuration. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Routing | VerifyIPv4RoutePresencePerVRF | Verifies that the provided IPv4 prefixes are present in the routing table. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | Routing | VerifyRoutingProtocolModel | Verifies the configured routing protocol model. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | STP | VerifySTPCounters | Verifies there is no errors in STP BPDU packets. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | System | VerifyAgentLogs | Verifies there are no agent crash reports. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | System | VerifyCoredump | Verifies there are no core dump files. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | System | VerifyFileSystemUtilization | Verifies that no partition is utilizing more than 75% of its disk space. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | System | VerifyMaintenance | Verifies that the device is not currently under or entering maintenance. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | System | VerifyMemoryUtilization | Verifies whether the memory utilization is below 75%. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | System | VerifyNTP | Verifies if NTP is synchronised. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | System | VerifyReloadCause | Verifies the last reload cause of the device. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF2 | VXLAN | VerifyVxlanConfigSanity | Verifies there are no VXLAN config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-LEAF1 | BGP | VerifyBGPPeerSession | Verifies the session state of BGP peers. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Configuration | VerifyRunningConfigDiffs | Verifies there is no difference between the running-config and the startup-config. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Configuration | VerifyZeroTouch | Verifies ZeroTouch is disabled. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Connectivity | VerifyLLDPNeighbors | Verifies the connection status of the specified LLDP (Link Layer Discovery Protocol) neighbors. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Connectivity | VerifyReachability | Verifies VTEP fabric-wide underlay reachability. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Connectivity | VerifyReachability | Verifies reachability to BGP neighbors. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Interfaces | VerifyIllegalLACP | Verifies there are no illegal LACP packets in port channels. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Interfaces | VerifyInterfaceDiscards | Verifies that the interfaces packet discard counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Interfaces | VerifyInterfaceErrDisabled | Verifies there are no interfaces in the errdisabled state. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Interfaces | VerifyInterfaceErrors | Verifies that the interfaces error counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Interfaces | VerifyInterfaceUtilization | Verifies that the utilization of interfaces is below a certain threshold. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Interfaces | VerifyInterfacesStatus | Verifies the operational states of specified interfaces to ensure they match expected configurations. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Interfaces | VerifyPortChannels | Verifies there are no inactive ports in port channels. | ✅&nbsp;Success | - |
| DC1-LEAF1 | MLAG | VerifyMlagConfigSanity | Verifies there are no MLAG config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-LEAF1 | MLAG | VerifyMlagInterfaces | Verifies there are no inactive or active-partial MLAG ports. | ✅&nbsp;Success | - |
| DC1-LEAF1 | MLAG | VerifyMlagStatus | Verifies the health status of the MLAG configuration. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Routing | VerifyIPv4RoutePresencePerVRF | Verifies that the provided IPv4 prefixes are present in the routing table. | ✅&nbsp;Success | - |
| DC1-LEAF1 | Routing | VerifyRoutingProtocolModel | Verifies the configured routing protocol model. | ✅&nbsp;Success | - |
| DC1-LEAF1 | STP | VerifySTPCounters | Verifies there is no errors in STP BPDU packets. | ✅&nbsp;Success | - |
| DC1-LEAF1 | System | VerifyAgentLogs | Verifies there are no agent crash reports. | ✅&nbsp;Success | - |
| DC1-LEAF1 | System | VerifyCoredump | Verifies there are no core dump files. | ✅&nbsp;Success | - |
| DC1-LEAF1 | System | VerifyFileSystemUtilization | Verifies that no partition is utilizing more than 75% of its disk space. | ✅&nbsp;Success | - |
| DC1-LEAF1 | System | VerifyMaintenance | Verifies that the device is not currently under or entering maintenance. | ✅&nbsp;Success | - |
| DC1-LEAF1 | System | VerifyMemoryUtilization | Verifies whether the memory utilization is below 75%. | ✅&nbsp;Success | - |
| DC1-LEAF1 | System | VerifyNTP | Verifies if NTP is synchronised. | ✅&nbsp;Success | - |
| DC1-LEAF1 | System | VerifyReloadCause | Verifies the last reload cause of the device. | ✅&nbsp;Success | - |
| DC1-LEAF1 | VXLAN | VerifyVxlanConfigSanity | Verifies there are no VXLAN config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-LEAF2 | BGP | VerifyBGPPeerSession | Verifies the session state of BGP peers. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Configuration | VerifyRunningConfigDiffs | Verifies there is no difference between the running-config and the startup-config. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Configuration | VerifyZeroTouch | Verifies ZeroTouch is disabled. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Connectivity | VerifyLLDPNeighbors | Verifies the connection status of the specified LLDP (Link Layer Discovery Protocol) neighbors. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Connectivity | VerifyReachability | Verifies VTEP fabric-wide underlay reachability. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Connectivity | VerifyReachability | Verifies reachability to BGP neighbors. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Interfaces | VerifyIllegalLACP | Verifies there are no illegal LACP packets in port channels. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Interfaces | VerifyInterfaceDiscards | Verifies that the interfaces packet discard counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Interfaces | VerifyInterfaceErrDisabled | Verifies there are no interfaces in the errdisabled state. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Interfaces | VerifyInterfaceErrors | Verifies that the interfaces error counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Interfaces | VerifyInterfaceUtilization | Verifies that the utilization of interfaces is below a certain threshold. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Interfaces | VerifyInterfacesStatus | Verifies the operational states of specified interfaces to ensure they match expected configurations. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Interfaces | VerifyPortChannels | Verifies there are no inactive ports in port channels. | ✅&nbsp;Success | - |
| DC1-LEAF2 | MLAG | VerifyMlagConfigSanity | Verifies there are no MLAG config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-LEAF2 | MLAG | VerifyMlagInterfaces | Verifies there are no inactive or active-partial MLAG ports. | ✅&nbsp;Success | - |
| DC1-LEAF2 | MLAG | VerifyMlagStatus | Verifies the health status of the MLAG configuration. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Routing | VerifyIPv4RoutePresencePerVRF | Verifies that the provided IPv4 prefixes are present in the routing table. | ✅&nbsp;Success | - |
| DC1-LEAF2 | Routing | VerifyRoutingProtocolModel | Verifies the configured routing protocol model. | ✅&nbsp;Success | - |
| DC1-LEAF2 | STP | VerifySTPCounters | Verifies there is no errors in STP BPDU packets. | ✅&nbsp;Success | - |
| DC1-LEAF2 | System | VerifyAgentLogs | Verifies there are no agent crash reports. | ✅&nbsp;Success | - |
| DC1-LEAF2 | System | VerifyCoredump | Verifies there are no core dump files. | ✅&nbsp;Success | - |
| DC1-LEAF2 | System | VerifyFileSystemUtilization | Verifies that no partition is utilizing more than 75% of its disk space. | ✅&nbsp;Success | - |
| DC1-LEAF2 | System | VerifyMaintenance | Verifies that the device is not currently under or entering maintenance. | ✅&nbsp;Success | - |
| DC1-LEAF2 | System | VerifyMemoryUtilization | Verifies whether the memory utilization is below 75%. | ✅&nbsp;Success | - |
| DC1-LEAF2 | System | VerifyNTP | Verifies if NTP is synchronised. | ✅&nbsp;Success | - |
| DC1-LEAF2 | System | VerifyReloadCause | Verifies the last reload cause of the device. | ✅&nbsp;Success | - |
| DC1-LEAF2 | VXLAN | VerifyVxlanConfigSanity | Verifies there are no VXLAN config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-LEAF3 | BGP | VerifyBGPPeerSession | Verifies the session state of BGP peers. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Configuration | VerifyRunningConfigDiffs | Verifies there is no difference between the running-config and the startup-config. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Configuration | VerifyZeroTouch | Verifies ZeroTouch is disabled. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Connectivity | VerifyLLDPNeighbors | Verifies the connection status of the specified LLDP (Link Layer Discovery Protocol) neighbors. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Connectivity | VerifyReachability | Verifies VTEP fabric-wide underlay reachability. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Connectivity | VerifyReachability | Verifies reachability to BGP neighbors. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Interfaces | VerifyIllegalLACP | Verifies there are no illegal LACP packets in port channels. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Interfaces | VerifyInterfaceDiscards | Verifies that the interfaces packet discard counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Interfaces | VerifyInterfaceErrDisabled | Verifies there are no interfaces in the errdisabled state. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Interfaces | VerifyInterfaceErrors | Verifies that the interfaces error counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Interfaces | VerifyInterfaceUtilization | Verifies that the utilization of interfaces is below a certain threshold. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Interfaces | VerifyInterfacesStatus | Verifies the operational states of specified interfaces to ensure they match expected configurations. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Interfaces | VerifyPortChannels | Verifies there are no inactive ports in port channels. | ✅&nbsp;Success | - |
| DC1-LEAF3 | MLAG | VerifyMlagConfigSanity | Verifies there are no MLAG config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-LEAF3 | MLAG | VerifyMlagInterfaces | Verifies there are no inactive or active-partial MLAG ports. | ✅&nbsp;Success | - |
| DC1-LEAF3 | MLAG | VerifyMlagStatus | Verifies the health status of the MLAG configuration. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Routing | VerifyIPv4RoutePresencePerVRF | Verifies that the provided IPv4 prefixes are present in the routing table. | ✅&nbsp;Success | - |
| DC1-LEAF3 | Routing | VerifyRoutingProtocolModel | Verifies the configured routing protocol model. | ✅&nbsp;Success | - |
| DC1-LEAF3 | STP | VerifySTPCounters | Verifies there is no errors in STP BPDU packets. | ✅&nbsp;Success | - |
| DC1-LEAF3 | System | VerifyAgentLogs | Verifies there are no agent crash reports. | ✅&nbsp;Success | - |
| DC1-LEAF3 | System | VerifyCoredump | Verifies there are no core dump files. | ✅&nbsp;Success | - |
| DC1-LEAF3 | System | VerifyFileSystemUtilization | Verifies that no partition is utilizing more than 75% of its disk space. | ✅&nbsp;Success | - |
| DC1-LEAF3 | System | VerifyMaintenance | Verifies that the device is not currently under or entering maintenance. | ✅&nbsp;Success | - |
| DC1-LEAF3 | System | VerifyMemoryUtilization | Verifies whether the memory utilization is below 75%. | ✅&nbsp;Success | - |
| DC1-LEAF3 | System | VerifyNTP | Verifies if NTP is synchronised. | ✅&nbsp;Success | - |
| DC1-LEAF3 | System | VerifyReloadCause | Verifies the last reload cause of the device. | ✅&nbsp;Success | - |
| DC1-LEAF3 | VXLAN | VerifyVxlanConfigSanity | Verifies there are no VXLAN config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-LEAF4 | BGP | VerifyBGPPeerSession | Verifies the session state of BGP peers. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Configuration | VerifyRunningConfigDiffs | Verifies there is no difference between the running-config and the startup-config. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Configuration | VerifyZeroTouch | Verifies ZeroTouch is disabled. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Connectivity | VerifyLLDPNeighbors | Verifies the connection status of the specified LLDP (Link Layer Discovery Protocol) neighbors. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Connectivity | VerifyReachability | Verifies VTEP fabric-wide underlay reachability. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Connectivity | VerifyReachability | Verifies reachability to BGP neighbors. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Interfaces | VerifyIllegalLACP | Verifies there are no illegal LACP packets in port channels. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Interfaces | VerifyInterfaceDiscards | Verifies that the interfaces packet discard counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Interfaces | VerifyInterfaceErrDisabled | Verifies there are no interfaces in the errdisabled state. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Interfaces | VerifyInterfaceErrors | Verifies that the interfaces error counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Interfaces | VerifyInterfaceUtilization | Verifies that the utilization of interfaces is below a certain threshold. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Interfaces | VerifyInterfacesStatus | Verifies the operational states of specified interfaces to ensure they match expected configurations. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Interfaces | VerifyPortChannels | Verifies there are no inactive ports in port channels. | ✅&nbsp;Success | - |
| DC1-LEAF4 | MLAG | VerifyMlagConfigSanity | Verifies there are no MLAG config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-LEAF4 | MLAG | VerifyMlagInterfaces | Verifies there are no inactive or active-partial MLAG ports. | ✅&nbsp;Success | - |
| DC1-LEAF4 | MLAG | VerifyMlagStatus | Verifies the health status of the MLAG configuration. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Routing | VerifyIPv4RoutePresencePerVRF | Verifies that the provided IPv4 prefixes are present in the routing table. | ✅&nbsp;Success | - |
| DC1-LEAF4 | Routing | VerifyRoutingProtocolModel | Verifies the configured routing protocol model. | ✅&nbsp;Success | - |
| DC1-LEAF4 | STP | VerifySTPCounters | Verifies there is no errors in STP BPDU packets. | ✅&nbsp;Success | - |
| DC1-LEAF4 | System | VerifyAgentLogs | Verifies there are no agent crash reports. | ✅&nbsp;Success | - |
| DC1-LEAF4 | System | VerifyCoredump | Verifies there are no core dump files. | ✅&nbsp;Success | - |
| DC1-LEAF4 | System | VerifyFileSystemUtilization | Verifies that no partition is utilizing more than 75% of its disk space. | ✅&nbsp;Success | - |
| DC1-LEAF4 | System | VerifyMaintenance | Verifies that the device is not currently under or entering maintenance. | ✅&nbsp;Success | - |
| DC1-LEAF4 | System | VerifyMemoryUtilization | Verifies whether the memory utilization is below 75%. | ✅&nbsp;Success | - |
| DC1-LEAF4 | System | VerifyNTP | Verifies if NTP is synchronised. | ✅&nbsp;Success | - |
| DC1-LEAF4 | System | VerifyReloadCause | Verifies the last reload cause of the device. | ✅&nbsp;Success | - |
| DC1-LEAF4 | VXLAN | VerifyVxlanConfigSanity | Verifies there are no VXLAN config-sanity inconsistencies. | ✅&nbsp;Success | - |
| DC1-SPINE1 | BGP | VerifyBGPPeerSession | Verifies the session state of BGP peers. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Configuration | VerifyRunningConfigDiffs | Verifies there is no difference between the running-config and the startup-config. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Configuration | VerifyZeroTouch | Verifies ZeroTouch is disabled. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Connectivity | VerifyLLDPNeighbors | Verifies the connection status of the specified LLDP (Link Layer Discovery Protocol) neighbors. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Connectivity | VerifyReachability | Verifies reachability to BGP neighbors. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Interfaces | VerifyInterfaceDiscards | Verifies that the interfaces packet discard counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Interfaces | VerifyInterfaceErrDisabled | Verifies there are no interfaces in the errdisabled state. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Interfaces | VerifyInterfaceErrors | Verifies that the interfaces error counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Interfaces | VerifyInterfaceUtilization | Verifies that the utilization of interfaces is below a certain threshold. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Interfaces | VerifyInterfacesStatus | Verifies the operational states of specified interfaces to ensure they match expected configurations. | ✅&nbsp;Success | - |
| DC1-SPINE1 | Routing | VerifyRoutingProtocolModel | Verifies the configured routing protocol model. | ✅&nbsp;Success | - |
| DC1-SPINE1 | STP | VerifySTPCounters | Verifies there is no errors in STP BPDU packets. | ✅&nbsp;Success | - |
| DC1-SPINE1 | System | VerifyAgentLogs | Verifies there are no agent crash reports. | ✅&nbsp;Success | - |
| DC1-SPINE1 | System | VerifyCoredump | Verifies there are no core dump files. | ✅&nbsp;Success | - |
| DC1-SPINE1 | System | VerifyFileSystemUtilization | Verifies that no partition is utilizing more than 75% of its disk space. | ✅&nbsp;Success | - |
| DC1-SPINE1 | System | VerifyMaintenance | Verifies that the device is not currently under or entering maintenance. | ✅&nbsp;Success | - |
| DC1-SPINE1 | System | VerifyMemoryUtilization | Verifies whether the memory utilization is below 75%. | ✅&nbsp;Success | - |
| DC1-SPINE1 | System | VerifyNTP | Verifies if NTP is synchronised. | ✅&nbsp;Success | - |
| DC1-SPINE1 | System | VerifyReloadCause | Verifies the last reload cause of the device. | ✅&nbsp;Success | - |
| DC1-SPINE2 | BGP | VerifyBGPPeerSession | Verifies the session state of BGP peers. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Configuration | VerifyRunningConfigDiffs | Verifies there is no difference between the running-config and the startup-config. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Configuration | VerifyZeroTouch | Verifies ZeroTouch is disabled. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Connectivity | VerifyLLDPNeighbors | Verifies the connection status of the specified LLDP (Link Layer Discovery Protocol) neighbors. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Connectivity | VerifyReachability | Verifies reachability to BGP neighbors. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Interfaces | VerifyInterfaceDiscards | Verifies that the interfaces packet discard counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Interfaces | VerifyInterfaceErrDisabled | Verifies there are no interfaces in the errdisabled state. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Interfaces | VerifyInterfaceErrors | Verifies that the interfaces error counters are equal to zero. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Interfaces | VerifyInterfaceUtilization | Verifies that the utilization of interfaces is below a certain threshold. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Interfaces | VerifyInterfacesStatus | Verifies the operational states of specified interfaces to ensure they match expected configurations. | ✅&nbsp;Success | - |
| DC1-SPINE2 | Routing | VerifyRoutingProtocolModel | Verifies the configured routing protocol model. | ✅&nbsp;Success | - |
| DC1-SPINE2 | STP | VerifySTPCounters | Verifies there is no errors in STP BPDU packets. | ✅&nbsp;Success | - |
| DC1-SPINE2 | System | VerifyAgentLogs | Verifies there are no agent crash reports. | ✅&nbsp;Success | - |
| DC1-SPINE2 | System | VerifyCoredump | Verifies there are no core dump files. | ✅&nbsp;Success | - |
| DC1-SPINE2 | System | VerifyFileSystemUtilization | Verifies that no partition is utilizing more than 75% of its disk space. | ✅&nbsp;Success | - |
| DC1-SPINE2 | System | VerifyMaintenance | Verifies that the device is not currently under or entering maintenance. | ✅&nbsp;Success | - |
| DC1-SPINE2 | System | VerifyMemoryUtilization | Verifies whether the memory utilization is below 75%. | ✅&nbsp;Success | - |
| DC1-SPINE2 | System | VerifyNTP | Verifies if NTP is synchronised. | ✅&nbsp;Success | - |
| DC1-SPINE2 | System | VerifyReloadCause | Verifies the last reload cause of the device. | ✅&nbsp;Success | - |
