---
title: "Static Routing vs OSPF vs EIGRP – What’s the Difference?"
date: "2025-01-15"
description: "Understand differences between Static Routes, OSPF, and EIGRP: administrative distance, how they work, pros/cons, and when to use."
tags: [Routing, CCNA, Static Routing, OSPF, EIGRP]
---

📝 Static Routing vs OSPF vs EIGRP – What’s the Difference?

🔹 Introduction

Routing is the core of networking. You need to understand Static Routing, and how dynamic routing protocols like OSPF and EIGRP differ. The focus here is on the fundamentals: administrative distance, how each works, and when to use them.

🔹 Administrative Distance (AD)

Administrative Distance shows how trustworthy a route is. The lower the number, the more preferred the route.

- Static Route: 1  
- EIGRP (internal): 90  
- OSPF: 110  
- RIP: 120  
- Unknown Route: 255 (unreachable)

🔹 Static Routing

**Definition:**  
Manual routing where the administrator defines the next-hop or exit interface.

**Config Syntax:**

```
ip route <destination-network> <mask> <next-hop | exit-interface>
```

**Pros:**

- ✅ Simple, secure, predictable
- ✅ Best for stub networks and default routes

**Cons:**

- ❌ Doesn’t scale well
- ❌ Must be updated manually

**Use Case:**

Default Route (gateway of last resort):

```
ip route 0.0.0.0 0.0.0.0 <next-hop>
```

🔹 OSPF (Open Shortest Path First)

Type: Link-State Protocol (AD = 110).  
Algorithm: Uses LSA (Link State Advertisements) and the Dijkstra SPF algorithm to build the shortest path tree.

**Key Points:**

- OSPF is an open standard, supported by all vendors.  
- Works in areas; most commonly configured as area 0 (backbone).  
- Shares LSAs to build a complete view of the network.

**Basic Config:**

```
router ospf 1
 network <ip> <wildcard-mask> area 0
```

🔹 EIGRP (Enhanced Interior Gateway Routing Protocol)

Type: Hybrid Protocol (mix of Distance Vector & Link-State concepts).  
AD: 90 (internal routes).  
Algorithm: Uses the DUAL algorithm for fast convergence.

**Key Points:**

- Originally Cisco Proprietary (later published as RFC, but mainly used on Cisco).  
- Very fast convergence.  
- Easier to configure than OSPF.  
- Not as common in multi-vendor networks.

🔹 Comparison Table

| Feature | Static Route | OSPF | EIGRP |
| --- | --- | --- | --- |
| Administrative Distance | 1 | 110 | 90 (internal) |
| Type | Manual | Link-State (SPF, LSAs) | Hybrid (DUAL Algorithm) |
| Best For | Small / Stub nets | Medium/Large, scalable | Cisco-only, fast convergence |
| Scalability | Poor | Excellent | Good (Cisco only) |

🔹 Conclusion

**Static Routes:** Best for simplicity, stub networks, and default routes.  
**OSPF:** Link-State protocol using LSAs and SPF, scalable and vendor-neutral.  
**EIGRP:** Cisco-proprietary hybrid protocol, fast convergence, AD = 90.

✨ Learning Outcome:

You now know the main differences:

- The Administrative Distances  
- How Static Routes are configured and used  
- OSPF’s use of LSAs & SPF  
- EIGRP’s fundamentals (Hybrid, DUAL, Cisco-only)


