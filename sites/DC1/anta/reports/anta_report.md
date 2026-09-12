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
| 196 | 188 | 0 | 8 | 0 |

### 🔌 Summary Totals Device Under Test <a id="summary-totals-device-under-test"></a>

| Device | Total Tests | ✅&nbsp;Success | ⏭️&nbsp;Skipped | ❌&nbsp;Failure | ❗&nbsp;Error | Categories Skipped | Categories Failed |
| :- | :- | :- | :- | :- | :- | :- | :- |
| **DC1-BORDERLEAF1** | 26 | 25 | 0 | 1 | 0 | - | Logging |
| **DC1-BORDERLEAF2** | 26 | 25 | 0 | 1 | 0 | - | Logging |
| **DC1-LEAF1** | 26 | 25 | 0 | 1 | 0 | - | Logging |
| **DC1-LEAF2** | 26 | 25 | 0 | 1 | 0 | - | Logging |
| **DC1-LEAF3** | 26 | 25 | 0 | 1 | 0 | - | Logging |
| **DC1-LEAF4** | 26 | 25 | 0 | 1 | 0 | - | Logging |
| **DC1-SPINE1** | 20 | 19 | 0 | 1 | 0 | - | Logging |
| **DC1-SPINE2** | 20 | 19 | 0 | 1 | 0 | - | Logging |

### 🗂️ Summary Totals Per Category <a id="summary-totals-per-category"></a>

| Test Category | Total Tests | ✅&nbsp;Success | ⏭️&nbsp;Skipped | ❌&nbsp;Failure | ❗&nbsp;Error |
| :- | :- | :- | :- | :- | :- |
| **BGP** | 8 | 8 | 0 | 0 | 0 |
| **Configuration** | 16 | 16 | 0 | 0 | 0 |
| **Connectivity** | 16 | 16 | 0 | 0 | 0 |
| **Interfaces** | 52 | 52 | 0 | 0 | 0 |
| **Logging** | 8 | 0 | 0 | 8 | 0 |
| **MLAG** | 18 | 18 | 0 | 0 | 0 |
| **Routing** | 8 | 8 | 0 | 0 | 0 |
| **STP** | 8 | 8 | 0 | 0 | 0 |
| **System** | 56 | 56 | 0 | 0 | 0 |
| **VXLAN** | 6 | 6 | 0 | 0 | 0 |

## 🧪 Test Results <a id="test-results"></a>

| Device | Categories | Test | Description | Result | Messages |
| :- | :- | :- | :- | :- | :- |
| DC1-BORDERLEAF1 | Logging | VerifyLoggingErrors | Verifies there are no syslog messages with a severity of ERRORS or higher. | ❌&nbsp;Failure | Device has reported syslog messages with a severity of ERRORS or higher:<br>Sep 12 13:09:52 DC1-BORDERLEAF1 ProcMgr: %PROCMGR-3-SHUTDOWNREQUESTED: ProcMgr shutdown requested via SIGQUIT or SIGTERM to worker (PID=1562) -- Master ProcMgr (PID=1562) exiting.<br> <br> |
| DC1-BORDERLEAF2 | Logging | VerifyLoggingErrors | Verifies there are no syslog messages with a severity of ERRORS or higher. | ❌&nbsp;Failure | Device has reported syslog messages with a severity of ERRORS or higher:<br>Sep 12 13:09:47 DC1-BORDERLEAF2 ProcMgr: %PROCMGR-3-SHUTDOWNREQUESTED: ProcMgr shutdown requested via SIGQUIT or SIGTERM to worker (PID=1562) -- Master ProcMgr (PID=1562) exiting.<br> Sep 12 13:09:47 DC1-BORDERLEAF2 StpTxRx: %FWK-3-SOCKET_CLOSE_REMOTE: Connection to Stp (pid:3771) at tbl://stpListen/+n closed by peer (EOF)<br> Sep 12 13:09:47 DC1-BORDERLEAF2 StpTxRx: %FWK-3-MOUNT_PEER_CLOSED: Peer closed socket connection. (tbl://stpListen/+n-in)(Stp (pid:3771))<br> <br> |
| DC1-LEAF1 | Logging | VerifyLoggingErrors | Verifies there are no syslog messages with a severity of ERRORS or higher. | ❌&nbsp;Failure | Device has reported syslog messages with a severity of ERRORS or higher:<br>Sep 12 13:09:56 DC1-LEAF1 ProcMgr: %PROCMGR-3-SHUTDOWNREQUESTED: ProcMgr shutdown requested via SIGQUIT or SIGTERM to worker (PID=1563) -- Master ProcMgr (PID=1563) exiting.<br> Sep 12 13:09:56 DC1-LEAF1 StpTxRx: %FWK-3-SOCKET_CLOSE_REMOTE: Connection to Stp (pid:3839) at tbl://stpListen/+n closed by peer (EOF)<br> Sep 12 13:09:56 DC1-LEAF1 StpTxRx: %FWK-3-MOUNT_PEER_CLOSED: Peer closed socket connection. (tbl://stpListen/+n-in)(Stp (pid:3839))<br> Sep 12 13:11:03 DC1-LEAF1 Bgp: %BGP-3-NOTIFICATION: sent to neighbor 10.255.0.2 (VRF default AS 65000) 6/7 (Cease/connection collision resolution) 0 bytes <br> <br> |
| DC1-LEAF2 | Logging | VerifyLoggingErrors | Verifies there are no syslog messages with a severity of ERRORS or higher. | ❌&nbsp;Failure | Device has reported syslog messages with a severity of ERRORS or higher:<br>Sep 12 13:10:02 DC1-LEAF2 ProcMgr: %PROCMGR-3-SHUTDOWNREQUESTED: ProcMgr shutdown requested via SIGQUIT or SIGTERM to worker (PID=1568) -- Master ProcMgr (PID=1568) exiting.<br> Sep 12 13:10:02 DC1-LEAF2 StpTxRx: %FWK-3-SOCKET_CLOSE_REMOTE: Connection to Stp (pid:3731) at tbl://stpListen/+n closed by peer (EOF)<br> Sep 12 13:10:02 DC1-LEAF2 StpTxRx: %FWK-3-MOUNT_PEER_CLOSED: Peer closed socket connection. (tbl://stpListen/+n-in)(Stp (pid:3731))<br> <br> |
| DC1-LEAF3 | Logging | VerifyLoggingErrors | Verifies there are no syslog messages with a severity of ERRORS or higher. | ❌&nbsp;Failure | Device has reported syslog messages with a severity of ERRORS or higher:<br>Sep 12 13:10:05 DC1-LEAF3 ProcMgr: %PROCMGR-3-SHUTDOWNREQUESTED: ProcMgr shutdown requested via SIGQUIT or SIGTERM to worker (PID=1566) -- Master ProcMgr (PID=1566) exiting.<br> Sep 12 13:10:05 DC1-LEAF3 StpTxRx: %FWK-3-SOCKET_CLOSE_REMOTE: Connection to Stp (pid:3854) at tbl://stpListen/+n closed by peer (EOF)<br> Sep 12 13:10:05 DC1-LEAF3 StpTxRx: %FWK-3-MOUNT_PEER_CLOSED: Peer closed socket connection. (tbl://stpListen/+n-in)(Stp (pid:3854))<br> <br> |
| DC1-LEAF4 | Logging | VerifyLoggingErrors | Verifies there are no syslog messages with a severity of ERRORS or higher. | ❌&nbsp;Failure | Device has reported syslog messages with a severity of ERRORS or higher:<br>Sep 12 13:09:55 DC1-LEAF4 ProcMgr: %PROCMGR-3-SHUTDOWNREQUESTED: ProcMgr shutdown requested via SIGQUIT or SIGTERM to worker (PID=1568) -- Master ProcMgr (PID=1568) exiting.<br> Sep 12 13:09:55 DC1-LEAF4 StpTxRx: %FWK-3-SOCKET_CLOSE_REMOTE: Connection to Stp (pid:3779) at tbl://stpListen/+n closed by peer (EOF)<br> Sep 12 13:09:55 DC1-LEAF4 StpTxRx: %FWK-3-MOUNT_PEER_CLOSED: Peer closed socket connection. (tbl://stpListen/+n-in)(Stp (pid:3779))<br> Sep 12 13:11:15 DC1-LEAF4 Bgp: %BGP-3-NOTIFICATION: sent to neighbor 10.255.255.20 (VRF default AS 65000) 6/5 (Cease/connection rejected) 0 bytes<br> Sep 12 13:11:17 DC1-LEAF4 Bgp: %BGP-3-NOTIFICATION: sent to neighbor 10.255.0.1 (VRF default AS 65000) 6/7 (Cease/connection collision resolution) 0 bytes <br> <br> |
| DC1-SPINE1 | Logging | VerifyLoggingErrors | Verifies there are no syslog messages with a severity of ERRORS or higher. | ❌&nbsp;Failure | Device has reported syslog messages with a severity of ERRORS or higher:<br>Sep 12 13:09:52 DC1-SPINE1 ProcMgr: %PROCMGR-3-SHUTDOWNREQUESTED: ProcMgr shutdown requested via SIGQUIT or SIGTERM to worker (PID=1568) -- Master ProcMgr (PID=1568) exiting.<br> Sep 12 13:09:52 DC1-SPINE1 Stp: %FWK-3-SOCKET_CLOSE_REMOTE: Connection to StpTxRx (pid:3649) at tbl://stpTxRxListen/+n closed by peer (EOF)<br> Sep 12 13:09:52 DC1-SPINE1 Stp: %FWK-3-MOUNT_PEER_CLOSED: Peer closed socket connection. (tbl://stpTxRxListen/+n-in)(StpTxRx (pid:3649))<br> Sep 12 13:11:15 DC1-SPINE1 Bgp: %BGP-3-NOTIFICATION: received from neighbor 10.255.255.21 (VRF default AS 65102) 6/5 (Cease/connection rejected) 0 bytes<br> Sep 12 13:11:17 DC1-SPINE1 Bgp: %BGP-3-NOTIFICATION: sent to neighbor 10.255.0.38 (VRF default AS 65102) 6/7 (Cease/connection collision resolution) 0 bytes <br> <br> |
| DC1-SPINE2 | Logging | VerifyLoggingErrors | Verifies there are no syslog messages with a severity of ERRORS or higher. | ❌&nbsp;Failure | Device has reported syslog messages with a severity of ERRORS or higher:<br>Sep 12 13:09:59 DC1-SPINE2 ProcMgr: %PROCMGR-3-SHUTDOWNREQUESTED: ProcMgr shutdown requested via SIGQUIT or SIGTERM to worker (PID=1569) -- Master ProcMgr (PID=1569) exiting.<br> Sep 12 13:11:03 DC1-SPINE2 Bgp: %BGP-3-NOTIFICATION: sent to neighbor 10.255.0.35 (VRF default AS 65101) 6/7 (Cease/connection collision resolution) 0 bytes <br> <br> |
| DC1-BORDERLEAF1 | BGP | VerifyBGPPeerSession | Verifies the session state of BGP peers. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Configuration | VerifyRunningConfigDiffs | Verifies there is no difference between the running-config and the startup-config. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Configuration | VerifyZeroTouch | Verifies ZeroTouch is disabled. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Connectivity | VerifyLLDPNeighbors | Verifies the connection status of the specified LLDP (Link Layer Discovery Protocol) neighbors. | ✅&nbsp;Success | - |
| DC1-BORDERLEAF1 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
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
| DC1-BORDERLEAF2 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
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
| DC1-LEAF1 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
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
| DC1-LEAF2 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
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
| DC1-LEAF3 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
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
| DC1-LEAF4 | Connectivity | VerifyReachability | Verifies point-to-point reachability between Ethernet interfaces. | ✅&nbsp;Success | - |
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
