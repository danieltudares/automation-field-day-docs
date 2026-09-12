# DC1_FABRIC

## Table of Contents

- [Fabric Switches and Management IP](#fabric-switches-and-management-ip)
  - [Fabric Switches with inband Management IP](#fabric-switches-with-inband-management-ip)
- [Fabric Topology](#fabric-topology)
- [Fabric IP Allocation](#fabric-ip-allocation)
  - [Fabric Point-To-Point Links](#fabric-point-to-point-links)
  - [Point-To-Point Links Node Allocation](#point-to-point-links-node-allocation)
  - [Loopback Interfaces (BGP EVPN Peering)](#loopback-interfaces-bgp-evpn-peering)
  - [Loopback0 Interfaces Node Allocation](#loopback0-interfaces-node-allocation)
  - [VTEP Loopback VXLAN Tunnel Source Interfaces (VTEPs Only)](#vtep-loopback-vxlan-tunnel-source-interfaces-vteps-only)
  - [VTEP Loopback Node allocation](#vtep-loopback-node-allocation)

## Fabric Switches and Management IP

| POD | Type | Node | Management IP | Platform | Provisioned in CloudVision | Serial Number |
| --- | ---- | ---- | ------------- | -------- | -------------------------- | ------------- |
| DC1_FABRIC | l3leaf | DC1-BORDERLEAF1 | 192.168.0.105/24 | 7050SX3 | Provisioned | - |
| DC1_FABRIC | l3leaf | DC1-BORDERLEAF2 | 192.168.0.106/24 | 7050SX3 | Provisioned | - |
| DC1_FABRIC | l3leaf | DC1-LEAF1 | 192.168.0.101/24 | 7050SX3 | Provisioned | - |
| DC1_FABRIC | l3leaf | DC1-LEAF2 | 192.168.0.102/24 | 7050SX3 | Provisioned | - |
| DC1_FABRIC | l3leaf | DC1-LEAF3 | 192.168.0.103/24 | 7050SX3 | Provisioned | - |
| DC1_FABRIC | l3leaf | DC1-LEAF4 | 192.168.0.104/24 | 7050SX3 | Provisioned | - |
| DC1_FABRIC | spine | DC1-SPINE1 | 192.168.0.11/24 | 7280CR3A | Provisioned | - |
| DC1_FABRIC | spine | DC1-SPINE2 | 192.168.0.12/24 | 7280CR3A | Provisioned | - |

> Provision status is based on Ansible inventory declaration and do not represent real status from CloudVision.

### Fabric Switches with inband Management IP

| POD | Type | Node | Management IP | Inband Interface |
| --- | ---- | ---- | ------------- | ---------------- |

## Fabric Topology

| Type | Node | Node Interface | Peer Type | Peer Node | Peer Interface |
| ---- | ---- | -------------- | --------- | --------- | -------------- |
| l3leaf | DC1-BORDERLEAF1 | Ethernet1 | spine | DC1-SPINE1 | Ethernet5 |
| l3leaf | DC1-BORDERLEAF1 | Ethernet2 | spine | DC1-SPINE2 | Ethernet5 |
| l3leaf | DC1-BORDERLEAF1 | Ethernet3 | mlag_peer | DC1-BORDERLEAF2 | Ethernet3 |
| l3leaf | DC1-BORDERLEAF1 | Ethernet4 | mlag_peer | DC1-BORDERLEAF2 | Ethernet4 |
| l3leaf | DC1-BORDERLEAF2 | Ethernet1 | spine | DC1-SPINE1 | Ethernet6 |
| l3leaf | DC1-BORDERLEAF2 | Ethernet2 | spine | DC1-SPINE2 | Ethernet6 |
| l3leaf | DC1-LEAF1 | Ethernet1 | spine | DC1-SPINE1 | Ethernet1 |
| l3leaf | DC1-LEAF1 | Ethernet2 | spine | DC1-SPINE2 | Ethernet1 |
| l3leaf | DC1-LEAF1 | Ethernet3 | mlag_peer | DC1-LEAF2 | Ethernet3 |
| l3leaf | DC1-LEAF1 | Ethernet4 | mlag_peer | DC1-LEAF2 | Ethernet4 |
| l3leaf | DC1-LEAF2 | Ethernet1 | spine | DC1-SPINE1 | Ethernet2 |
| l3leaf | DC1-LEAF2 | Ethernet2 | spine | DC1-SPINE2 | Ethernet2 |
| l3leaf | DC1-LEAF3 | Ethernet1 | spine | DC1-SPINE1 | Ethernet3 |
| l3leaf | DC1-LEAF3 | Ethernet2 | spine | DC1-SPINE2 | Ethernet3 |
| l3leaf | DC1-LEAF3 | Ethernet3 | mlag_peer | DC1-LEAF4 | Ethernet3 |
| l3leaf | DC1-LEAF3 | Ethernet4 | mlag_peer | DC1-LEAF4 | Ethernet4 |
| l3leaf | DC1-LEAF4 | Ethernet1 | spine | DC1-SPINE1 | Ethernet4 |
| l3leaf | DC1-LEAF4 | Ethernet2 | spine | DC1-SPINE2 | Ethernet4 |

## Fabric IP Allocation

### Fabric Point-To-Point Links

| Uplink IPv4 Pool | Available Addresses | Assigned addresses | Assigned Address % |
| ---------------- | ------------------- | ------------------ | ------------------ |
| 10.255.255.0/24 | 256 | 24 | 9.38 % |

### Point-To-Point Links Node Allocation

| Node | Node Interface | Node IP Address | Peer Node | Peer Interface | Peer IP Address |
| ---- | -------------- | --------------- | --------- | -------------- | --------------- |
| DC1-BORDERLEAF1 | Ethernet1 | 10.255.255.1/31 | DC1-SPINE1 | Ethernet5 | 10.255.255.0/31 |
| DC1-BORDERLEAF1 | Ethernet2 | 10.255.255.3/31 | DC1-SPINE2 | Ethernet5 | 10.255.255.2/31 |
| DC1-BORDERLEAF2 | Ethernet1 | 10.255.255.5/31 | DC1-SPINE1 | Ethernet6 | 10.255.255.4/31 |
| DC1-BORDERLEAF2 | Ethernet2 | 10.255.255.7/31 | DC1-SPINE2 | Ethernet6 | 10.255.255.6/31 |
| DC1-LEAF1 | Ethernet1 | 10.255.255.9/31 | DC1-SPINE1 | Ethernet1 | 10.255.255.8/31 |
| DC1-LEAF1 | Ethernet2 | 10.255.255.11/31 | DC1-SPINE2 | Ethernet1 | 10.255.255.10/31 |
| DC1-LEAF2 | Ethernet1 | 10.255.255.13/31 | DC1-SPINE1 | Ethernet2 | 10.255.255.12/31 |
| DC1-LEAF2 | Ethernet2 | 10.255.255.15/31 | DC1-SPINE2 | Ethernet2 | 10.255.255.14/31 |
| DC1-LEAF3 | Ethernet1 | 10.255.255.17/31 | DC1-SPINE1 | Ethernet3 | 10.255.255.16/31 |
| DC1-LEAF3 | Ethernet2 | 10.255.255.19/31 | DC1-SPINE2 | Ethernet3 | 10.255.255.18/31 |
| DC1-LEAF4 | Ethernet1 | 10.255.255.21/31 | DC1-SPINE1 | Ethernet4 | 10.255.255.20/31 |
| DC1-LEAF4 | Ethernet2 | 10.255.255.23/31 | DC1-SPINE2 | Ethernet4 | 10.255.255.22/31 |

### Loopback Interfaces (BGP EVPN Peering)

| Loopback Pool | Available Addresses | Assigned addresses | Assigned Address % |
| ------------- | ------------------- | ------------------ | ------------------ |
| 10.255.0.0/27 | 32 | 2 | 6.25 % |
| 10.255.0.32/27 | 32 | 6 | 18.75 % |

### Loopback0 Interfaces Node Allocation

| POD | Node | Loopback0 |
| --- | ---- | --------- |
| DC1_FABRIC | DC1-BORDERLEAF1 | 10.255.0.33/32 |
| DC1_FABRIC | DC1-BORDERLEAF2 | 10.255.0.34/32 |
| DC1_FABRIC | DC1-LEAF1 | 10.255.0.35/32 |
| DC1_FABRIC | DC1-LEAF2 | 10.255.0.36/32 |
| DC1_FABRIC | DC1-LEAF3 | 10.255.0.37/32 |
| DC1_FABRIC | DC1-LEAF4 | 10.255.0.38/32 |
| DC1_FABRIC | DC1-SPINE1 | 10.255.0.1/32 |
| DC1_FABRIC | DC1-SPINE2 | 10.255.0.2/32 |

### VTEP Loopback VXLAN Tunnel Source Interfaces (VTEPs Only)

| VTEP Loopback Pool | Available Addresses | Assigned addresses | Assigned Address % |
| ------------------ | ------------------- | ------------------ | ------------------ |
| 10.255.1.0/27 | 32 | 6 | 18.75 % |

### VTEP Loopback Node allocation

| POD | Node | Loopback1 |
| --- | ---- | --------- |
| DC1_FABRIC | DC1-BORDERLEAF1 | 10.255.1.1/32 |
| DC1_FABRIC | DC1-BORDERLEAF2 | 10.255.1.1/32 |
| DC1_FABRIC | DC1-LEAF1 | 10.255.1.3/32 |
| DC1_FABRIC | DC1-LEAF2 | 10.255.1.3/32 |
| DC1_FABRIC | DC1-LEAF3 | 10.255.1.5/32 |
| DC1_FABRIC | DC1-LEAF4 | 10.255.1.5/32 |
