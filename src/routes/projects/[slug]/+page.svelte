<script>
    import { getOwnerConfig, getProjectsConfig } from '$lib/config.js';
    import { fade, fly, scale } from 'svelte/transition';
    import { page } from '$app/stores';
    
    const ownerConfig = getOwnerConfig();
    const projects = getProjectsConfig();
    
    // Get the slug from the URL
    $: slug = $page.params.slug;
    
    // Find the project based on the slug
    $: project = projects.find(p => p.link === `/projects/${slug}`);
    
    // If project not found, redirect or show 404
    $: if (!project) {
        // You can handle 404 here
        console.error(`Project with slug "${slug}" not found`);
    }
</script>

<svelte:head>
    <title>{project ? `${project.name} | ${ownerConfig.name} - ${ownerConfig.profession}` : 'Project Not Found'}</title>
    <meta
        name="description"
        content={project ? project.description : 'Project not found'}
    />
</svelte:head>

{#if project}
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
                <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-center" in:fade={{duration:800,delay:200}}>
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

            <!-- Special content for Enterprise Network Lab project -->
            {#if slug === 'switching-routing-ospf-nat-acl-dhcp-ntp-ssh'}
                <!-- Project Introduction -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:150}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">🚀 Enterprise Network Lab - Switching, Routing & Services</h2>
                    <div class="text-slate-300 leading-relaxed space-y-3 text-base">
                        <p>
                            This project represents my most advanced and complete networking lab so far. It integrates multiple Cisco technologies into a single enterprise-style topology, showing my ability to design, implement, secure, and verify a complex IT infrastructure.
                        </p>
                    </div>
                </div>

                <!-- Network Topology -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8 overflow-hidden" in:fly={{y:30,duration:600,delay:200}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">📸 Network Topology</h2>
                    <div class="text-center">
                        <img 
                            src="/images/enterprise-network-topology.png" 
                            alt="Enterprise Network Lab - Network Topology" 
                            class="max-w-full w-full h-auto rounded-lg border border-slate-600 shadow-lg"
                            in:scale={{duration:500}}
                            on:error={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'block';
                            }}
                        />
                        <div class="hidden bg-slate-700 rounded-lg p-8 border border-slate-600">
                            <div class="text-slate-400 text-center">
                                <svg class="mx-auto h-16 w-16 text-slate-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p class="text-lg font-semibold mb-2">Network Topology Image</p>
                                <p class="text-sm">Complete network topology showing routers, switches, and end devices with their interconnections</p>
                            </div>
                        </div>
                        <p class="text-slate-400 text-sm mt-4 italic">
                            Complete network topology showing routers, switches, and end devices with their interconnections
                        </p>
                    </div>
                </div>

                <!-- Switching & VLANs -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:250}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">🌐 Switching & VLANs</h2>
                    <ul class="text-slate-300 space-y-3 text-base">
                        <li class="flex items-start"><span class="text-green-400 mr-3 text-lg">•</span>Designed multiple VLANs for logical segmentation and traffic isolation.</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3 text-lg">•</span>Implemented Spanning Tree Protocol (STP) to ensure loop-free redundancy.</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3 text-lg">•</span>Configured SVIs on the multilayer switch (MLS1) to provide default gateways for the PC subnet.</li>
                    </ul>
                </div>

                <!-- Routing -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:300}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">📡 Routing</h2>
                    <ul class="text-slate-300 space-y-3 text-base">
                        <li class="flex items-start"><span class="text-blue-400 mr-3 text-lg">•</span>Implemented Router-on-a-Stick on R3 with subinterfaces for VLAN10, VLAN20, VLAN30, and VLAN40.</li>
                        <li class="flex items-start"><span class="text-blue-400 mr-3 text-lg">•</span>Enabled OSPF dynamic routing between R1, R2, R3, and MLS1 to guarantee connectivity across all networks.</li>
                        <li class="flex items-start"><span class="text-blue-400 mr-3 text-lg">•</span>Configured static and default routes on R1 for Internet access through the simulated ISP.</li>
                    </ul>
                </div>

                <!-- Security & Remote Access -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:350}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">🔐 Security & Remote Access</h2>
                    <ul class="text-slate-300 space-y-3 text-base">
                        <li class="flex items-start"><span class="text-red-400 mr-3 text-lg">•</span>Applied NAT/PAT on R1 for address translation between private and public networks.</li>
                        <li class="flex items-start"><span class="text-red-400 mr-3 text-lg">•</span>Deployed ACLs to restrict access and control which subnets are allowed Internet connectivity.</li>
                        <li class="flex items-start"><span class="text-red-400 mr-3 text-lg">•</span>Configured SSH access on MLS1 for secure remote management (tested from PC1).</li>
                    </ul>
                </div>

                <!-- Network Services -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:400}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">⚙️ Network Services</h2>
                    <ul class="text-slate-300 space-y-3 text-base">
                        <li class="flex items-start"><span class="text-yellow-400 mr-3 text-lg">•</span><strong class="text-lg">DHCP:</strong> Automatically assigns IP addresses to laptops in different VLANs.</li>
                        <li class="flex items-start"><span class="text-yellow-400 mr-3 text-lg">•</span><strong class="text-lg">NTP:</strong> Configured time synchronization across all routers and switches.</li>
                        <li class="flex items-start"><span class="text-yellow-400 mr-3 text-lg">•</span><strong class="text-lg">Loopbacks:</strong> Used as router IDs for OSPF and for network testing.</li>
                    </ul>
                </div>

                <!-- IP Addressing Plan -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:450}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">🖥️ IP Addressing Plan</h2>
                    <div class="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <div class="grid md:grid-cols-2 gap-6 text-slate-300">
                            <div>
                                <h3 class="text-xl font-semibold text-white mb-4">Routers & Switches</h3>
                                <ul class="space-y-2 text-sm">
                                    <li><strong class="text-base">R1:</strong> 172.16.0.2/30, 1.1.1.2/30, 172.16.0.5/30, 10.0.0.1/30, Loopback1 8.8.8.8/32</li>
                                    <li><strong class="text-base">R2:</strong> 172.16.0.9/30, 172.16.0.6/30</li>
                                    <li><strong class="text-base">R3:</strong> 192.168.10.1/24, 192.168.20.1/24, 192.168.30.1/24, 192.168.40.1/24 (Subinterfaces), 10.0.0.3/30</li>
                                    <li><strong class="text-base">MLS1:</strong> 172.16.0.1/30, 172.16.1.20/24, Loopback0 9.9.9.9/32, Loopback1 10.20.30.40/32</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-white mb-4">Hosts</h3>
                                <ul class="space-y-2 text-sm">
                                    <li><strong class="text-base">PCs:</strong> 172.16.1.1, 172.16.1.2, 172.16.1.3, 172.16.1.4</li>
                                    <li><strong class="text-base">Laptops:</strong> 192.168.10.2, 192.168.20.2, 192.168.30.2, 192.168.40.2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Verification -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:500}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">✅ Verification</h2>
                    <ul class="text-slate-300 space-y-3 text-base">
                        <li class="flex items-start"><span class="text-green-400 mr-3 text-lg">•</span>NAT translations confirmed on R1 (show ip nat translations).</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3 text-lg">•</span>ACL filtering validated by testing access between inside and outside networks.</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3 text-lg">•</span>OSPF neighbors & learned routes visible (show ip ospf neighbor, show ip route).</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3 text-lg">•</span>DHCP bindings confirmed (show ip dhcp binding).</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3 text-lg">•</span>NTP synchronization tested (show ntp associations, show clock).</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3 text-lg">•</span>SSH remote access verified (ssh -l user MLS1_IP).</li>
                    </ul>
                </div>

                <!-- Key Takeaways -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:550}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">🎯 Key Takeaways</h2>
                    <ul class="text-slate-300 space-y-3 text-base">
                        <li class="flex items-start"><span class="text-purple-400 mr-3 text-xl">🛠️</span>Demonstrated ability to design and configure an end-to-end enterprise network.</li>
                        <li class="flex items-start"><span class="text-purple-400 mr-3 text-xl">🔐</span>Integrated multiple services (NAT, ACL, DHCP, NTP, SSH) in a single topology.</li>
                        <li class="flex items-start"><span class="text-purple-400 mr-3 text-xl">📡</span>Used OSPF as the dynamic routing protocol to achieve full connectivity.</li>
                        <li class="flex items-start"><span class="text-purple-400 mr-3 text-xl">💡</span>Gained hands-on experience in troubleshooting and verifying advanced configurations.</li>
                    </ul>
                </div>

                <!-- Conclusion -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:600}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">🌟 Conclusion</h2>
                    <div class="text-slate-300 leading-relaxed space-y-4 text-base">
                        <p>
                            This lab reflects my capability to build, secure, and manage enterprise-grade network infrastructures. From Switching & VLANs to Dynamic Routing, NAT, ACLs, and Network Services, the project shows that I can combine all major concepts of the CCNA curriculum into a single, functioning, production-like network.
                        </p>
                        <p class="text-xl font-semibold text-blue-400">
                            🚀 This is my capstone networking project — bringing together everything I've learned into one complete design.
                        </p>
                    </div>
                </div>

                <!-- Project Resources -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:650}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">📂 Resources</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <a
                            href="https://github.com/Mhmdghost/SWITCHING-ROUTING-OSPF-NAT-ACL-DHCP-NTP-SSH"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bg-slate-700 hover:bg-slate-600 rounded-lg p-6 border border-slate-600 transition-colors group"
                        >
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-semibold text-white mb-2">🔗 GitHub Repository</h3>
                                    <p class="text-slate-300 text-base">View on GitHub</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                                </svg>
                            </div>
                        </a>
                        <a
                            href="https://github.com/Mhmdghost/SWITCHING-ROUTING-OSPF-NAT-ACL-DHCP-NTP-SSH/raw/main/project/lab4.pkt"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bg-slate-700 hover:bg-slate-600 rounded-lg p-6 border border-slate-600 transition-colors group"
                        >
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-semibold text-white mb-2">📥 Download Packet Tracer File</h3>
                                    <p class="text-slate-300 text-base">lab4.pkt</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414L-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            {/if}

            <!-- Technologies Used -->
            <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:400}}>
                <h2 class="text-3xl font-bold mb-6 text-white">✅ Technologies Used</h2>
                <div class="flex flex-wrap gap-2">
                    {#each project.technologies as tech}
                        <span class="px-3 py-1 text-slate-200 text-base rounded-md bg-slate-700 border border-slate-600">
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
                        class="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors border border-slate-600 text-base"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                        Back to Projects
                    </a>
                    <a
                        href="https://github.com/Mhmdghost/SWITCHING-ROUTING-OSPF-NAT-ACL-DHCP-NTP-SSH"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-base"
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
{:else}
    <!-- 404 Page -->
    <div class="min-h-screen bg-slate-900 flex items-center justify-center">
        <div class="text-center" in:fade={{duration:600}}>
            <div class="text-6xl mb-6">🔍</div>
            <h1 class="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <p class="text-slate-300 mb-8 text-lg">
                The project you're looking for doesn't exist or has been moved.
            </p>
            <a
                href="/projects"
                class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
                Back to Projects
            </a>
        </div>
    </div>
{/if}
