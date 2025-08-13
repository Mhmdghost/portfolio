<script>
    import { getOwnerConfig, getProjectsConfig } from '$lib/config.js';
    import { fade, fly, scale } from 'svelte/transition';
    import { page } from '$app/stores';
    
    const ownerConfig = getOwnerConfig();
    const projects = getProjectsConfig();
    
    // Get the slug from the URL - fix the slug issue
    $: slug = $page.params.slug || 'svi-lab';
    
    // Find the project based on the slug
    $: project = projects.find(p => p.link === `/projects/${slug}`) || {
        name: "SVI-LAB",
        description: "SVI Lab demonstrating Inter-VLAN routing on a Layer 3 switch using Switch Virtual Interfaces in Cisco Packet Tracer.",
        category: "Networking",
        icon: "🔌",
        highlights: [
            "Multiple VLANs with different subnet masks (/25, /26, /27)",
            "SVI gateway configuration for each VLAN",
            "Layer 3 routing enablement and verification",
            "Cross-VLAN communication testing with ping",
            "ARP resolution and network troubleshooting"
        ],
        technologies: ["Cisco Packet Tracer", "SVI", "Inter-VLAN Routing", "Layer 3 Switch", "VLAN Configuration", "Network Troubleshooting"],
        link: "/projects/svi-lab"
    };
</script>

<svelte:head>
    <title>{project.name} | {ownerConfig.name} - {ownerConfig.profession}</title>
    <meta
        name="description"
        content={project.description}
    />
</svelte:head>

<div class="min-h-screen bg-slate-900">
    <section class="py-16 px-4 max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16" in:fade={{duration:600}}>
            <div class="flex items-center justify-center mb-6" in:fly={{y:40,duration:600}}>
                <span class="text-6xl mr-4">{project.icon}</span>
                <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight">
                    {project.name}
                </h1>
            </div>
            <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed" in:fade={{duration:800,delay:200}}>
                {project.description}
            </p>
        </div>

        <!-- Project Overview -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600}}>
            <h2 class="text-3xl font-bold mb-6 text-white">🧰 Project Overview</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-semibold mb-4 text-white">Key Highlights</h3>
                    <ul class="text-slate-300 space-y-3">
                        {#each project.highlights as highlight}
                            <li class="flex items-center">
                                <span class="text-green-400 mr-3">•</span>
                                {highlight}
                            </li>
                        {/each}
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4 text-white">Category</h3>
                    <div class="text-slate-300">
                        <span class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
                            {project.category}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Overview Detailed -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:200}}>
            <h2 class="text-3xl font-bold mb-6 text-white">📋 Project Overview</h2>
            <p class="text-slate-300 text-lg leading-relaxed mb-6">
                This project is a hands-on Cisco Packet Tracer lab designed to demonstrate Inter-VLAN routing using Switch Virtual Interfaces (SVIs) on a Layer 3 switch. The configuration covers the entire process from enabling Layer 3 routing to verifying communication between VLANs.
            </p>
        </div>

        <!-- Key Features -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:400}}>
            <h2 class="text-3xl font-bold mb-6 text-white">✨ Key Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <h3 class="text-xl font-semibold text-white mb-4">Network Segmentation</h3>
                    <ul class="text-slate-300 space-y-2 text-sm">
                        <li>• Creation of multiple VLANs for network segmentation</li>
                        <li>• Assigning IP addresses to SVIs for Layer 3 communication</li>
                        <li>• Enabling IP routing on the switch</li>
                    </ul>
                </div>
                <div class="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <h3 class="text-xl font-semibold text-white mb-4">Verification & Testing</h3>
                    <ul class="text-slate-300 space-y-2 text-sm">
                        <li>• Verifying connectivity between VLANs using ping</li>
                        <li>• Checking the routing table with show ip route</li>
                        <li>• Testing end-to-end communication</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Technologies Used -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:600}}>
            <h2 class="text-3xl font-bold mb-6 text-white">🛠️ Technologies Used</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600 text-center">
                    <h3 class="font-semibold text-white mb-2">Cisco Packet Tracer</h3>
                    <p class="text-sm text-slate-300">Network simulation</p>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600 text-center">
                    <h3 class="font-semibold text-white mb-2">VLAN</h3>
                    <p class="text-sm text-slate-300">Virtual Local Area Network</p>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600 text-center">
                    <h3 class="font-semibold text-white mb-2">SVI</h3>
                    <p class="text-sm text-slate-300">Switch Virtual Interface</p>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600 text-center">
                    <h3 class="font-semibold text-white mb-2">Layer 3 Switching</h3>
                    <p class="text-sm text-slate-300">Advanced switching</p>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600 text-center">
                    <h3 class="font-semibold text-white mb-2">IP Routing</h3>
                    <p class="text-sm text-slate-300">Network routing</p>
                </div>
            </div>
        </div>

        <!-- Configuration Steps -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:800}}>
            <h2 class="text-3xl font-bold mb-6 text-white">⚙️ Configuration Steps</h2>
            <div class="space-y-6">
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <h3 class="text-lg font-semibold text-white mb-3">1. Enter Privileged EXEC Mode</h3>
                    <div class="bg-slate-800 rounded p-3 font-mono text-sm text-green-400">
                        <div>enable</div>
                    </div>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <h3 class="text-lg font-semibold text-white mb-3">2. Enter Global Configuration Mode</h3>
                    <div class="bg-slate-800 rounded p-3 font-mono text-sm text-green-400">
                        <div>config terminal</div>
                    </div>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <h3 class="text-lg font-semibold text-white mb-3">3. Create VLANs and Assign Ports</h3>
                    <div class="bg-slate-800 rounded p-3 font-mono text-sm text-green-400">
                        <div>vlan 10</div>
                        <div>vlan 20</div>
                        <div>vlan 30</div>
                    </div>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <h3 class="text-lg font-semibold text-white mb-3">4. Configure SVIs</h3>
                    <div class="bg-slate-800 rounded p-3 font-mono text-sm text-green-400">
                        <div>interface vlan 10</div>
                        <div>ip address 192.168.10.1 255.255.255.128</div>
                        <div>no shutdown</div>
                        <div>exit</div>
                        <div>interface vlan 20</div>
                        <div>ip address 192.168.20.1 255.255.255.192</div>
                        <div>no shutdown</div>
                    </div>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <h3 class="text-lg font-semibold text-white mb-3">5. Enable IP Routing</h3>
                    <div class="bg-slate-800 rounded p-3 font-mono text-sm text-green-400">
                        <div>ip routing</div>
                    </div>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <h3 class="text-lg font-semibold text-white mb-3">6. Save Configuration</h3>
                    <div class="bg-slate-800 rounded p-3 font-mono text-sm text-green-400">
                        <div>do write</div>
                    </div>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <h3 class="text-lg font-semibold text-white mb-3">7. Verify IP Interfaces</h3>
                    <div class="bg-slate-800 rounded p-3 font-mono text-sm text-green-400">
                        <div>show ip interface brief</div>
                    </div>
                </div>
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <h3 class="text-lg font-semibold text-white mb-3">8. Test Connectivity</h3>
                    <div class="bg-slate-800 rounded p-3 font-mono text-sm text-green-400">
                        <div>ping 192.168.20.10</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Learning Outcome -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:1000}}>
            <h2 class="text-3xl font-bold mb-6 text-white">🎯 Learning Outcome</h2>
            <div class="bg-slate-700 rounded-lg p-6 border border-slate-600">
                <p class="text-slate-300 text-lg leading-relaxed">
                    By completing this lab, you will understand how to configure and manage Inter-VLAN routing on a Layer 3 switch, allowing devices in different VLANs to communicate without the need for a separate router.
                </p>
            </div>
        </div>

        <!-- Project Files -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:1200}}>
            <h2 class="text-3xl font-bold mb-6 text-white">📎 Project Resources</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <a
                    href="https://github.com/Mhmdghost/svi-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-slate-700 hover:bg-slate-600 rounded-lg p-6 border border-slate-600 transition-colors group"
                >
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-xl font-semibold text-white mb-2">View on GitHub</h3>
                            <p class="text-slate-300">Complete lab documentation and Packet Tracer files</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                        </svg>
                    </div>
                </a>
                <a
                    href="https://github.com/Mhmdghost/svi-lab/raw/main/SVI-LAB.pkt"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-slate-700 hover:bg-slate-600 rounded-lg p-6 border border-slate-600 transition-colors group"
                >
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-xl font-semibold text-white mb-2">Download .pkt File</h3>
                            <p class="text-slate-300">Direct download of the Packet Tracer file</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414L-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>

        <!-- Technologies Used -->
        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:400}}>
            <h2 class="text-3xl font-bold mb-6 text-white">✅ Technologies Used</h2>
            <div class="flex flex-wrap gap-2">
                {#each project.technologies as tech}
                    <span class="px-3 py-1 text-slate-200 text-sm rounded-md bg-slate-700 border border-slate-600">
                        {tech}
                    </span>
                {/each}
            </div>
        </div>

        <!-- Navigation -->
        <div class="text-center" in:fade={{duration:700,delay:800}}>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="/projects"
                    class="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors border border-slate-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                    Back to Projects
                </a>
                <a
                    href="https://github.com/Mhmdghost/svi-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                    View on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</div>
