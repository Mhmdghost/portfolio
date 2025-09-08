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

            <!-- Special content for VLAN + STP project -->
            {#if slug === 'vlan-stp'}
                <!-- Topology Image -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8 overflow-hidden" in:fly={{y:30,duration:600,delay:200}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">📸 Network Topology</h2>
                    <div class="text-center">
                        <img 
                            src="/images/vlan-lab.png" 
                            alt="VLAN Network Topology" 
                            class="max-w-full w-full h-auto rounded-lg border border-slate-600 shadow-lg"
                            in:scale={{duration:500}}
                        />
                    </div>
                </div>

                <!-- Technologies Used -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:400}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">✅ Tools & Technologies</h2>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                            <h3 class="font-semibold text-white mb-2">Cisco Packet Tracer</h3>
                            <p class="text-sm text-slate-300">Network simulation and configuration</p>
                        </div>
                        <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                            <h3 class="font-semibold text-white mb-2">VLAN Configuration</h3>
                            <p class="text-sm text-slate-300">Network segmentation and isolation</p>
                        </div>
                        <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                            <h3 class="font-semibold text-white mb-2">STP Protocol</h3>
                            <p class="text-sm text-slate-300">Loop prevention and redundancy</p>
                        </div>
                        <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                            <h3 class="font-semibold text-white mb-2">Trunking</h3>
                            <p class="text-sm text-slate-300">Multi-VLAN traffic transport</p>
                        </div>
                        <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                            <h3 class="font-semibold text-white mb-2">Inter-VLAN Routing</h3>
                            <p class="text-sm text-slate-300">Layer 3 switching and routing</p>
                        </div>
                        <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                            <h3 class="font-semibold text-white mb-2">CLI Configuration</h3>
                            <p class="text-sm text-slate-300">Command-line interface setup</p>
                        </div>
                    </div>
                </div>

                <!-- Project Files -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:600}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">📎 Project Files</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <a
                            href="https://github.com/Mhmdghost/vlan-stp-lab"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bg-slate-700 hover:bg-slate-600 rounded-lg p-6 border border-slate-600 transition-colors group"
                        >
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-semibold text-white mb-2">View on GitHub</h3>
                                    <p class="text-slate-300">Complete project repository with documentation</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                                </svg>
                            </div>
                        </a>
                        <a
                            href="https://github.com/Mhmdghost/vlan-stp-lab/raw/main/VLANS%2BSTP.pkt"
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
            {/if}

            {#if slug === 'static-default-routing'}
                <!-- Network Topology -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:150}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">📸 Network Topology</h2>
                    <div class="text-center">
                        <img 
                            src="https://raw.githubusercontent.com/Mhmdghost/static-default-routing-lab/main/topology.png" 
                            alt="Static & Default Routing Lab - Topology" 
                            class="max-w-full h-auto rounded-lg border border-slate-600 shadow-lg"
                            in:scale={{duration:500}}
                        />
                    </div>
                </div>

                <!-- Project Description -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:200}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">📖 Project Description</h2>
                    <p class="text-slate-300 leading-relaxed">
                        This project is a Cisco Packet Tracer lab designed to demonstrate Static Routing and the use of a Default Route in a small enterprise network. The topology includes two routers (R1, R2), a multilayer switch (MLS1), and four end devices. MLS1 provides LAN gateway functionality through a Switch Virtual Interface (SVI).
                    </p>
                    <div class="mt-4 text-slate-300 leading-relaxed">
                        <p class="mb-2">The project shows how to:</p>
                        <ul class="list-disc pl-6 space-y-2">
                            <li>Configure point-to-point /30 subnets for router interconnections</li>
                            <li>Add static routes for specific networks</li>
                            <li>Use a default route to forward unknown traffic</li>
                            <li>Verify connectivity across all devices including loopbacks</li>
                        </ul>
                    </div>
                </div>

                <!-- Learning Outcome -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:300}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">🎯 Learning Outcome</h2>
                    <ul class="text-slate-300 space-y-3">
                        <li class="flex items-start"><span class="text-green-400 mr-3">•</span>Understand how static routes are configured and propagated in a small network</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3">•</span>Learn the role of a default route as a gateway of last resort</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3">•</span>Validate routing with tools like ping and tracert</li>
                        <li class="flex items-start"><span class="text-green-400 mr-3">•</span>Gain confidence in troubleshooting connectivity in Cisco Packet Tracer</li>
                    </ul>
                </div>

                <!-- Project Resources -->
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8" in:fly={{y:30,duration:600,delay:400}}>
                    <h2 class="text-3xl font-bold mb-6 text-white">📂 Project Resources</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <a
                            href="https://github.com/Mhmdghost/static-default-routing-lab"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bg-slate-700 hover:bg-slate-600 rounded-lg p-6 border border-slate-600 transition-colors group"
                        >
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-semibold text-white mb-2">View on GitHub</h3>
                                    <p class="text-slate-300">Static & Default Routing Lab repository</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                                </svg>
                            </div>
                        </a>
                        <a
                            href="https://github.com/Mhmdghost/static-default-routing-lab/raw/main/static-default-routing.pkt"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bg-slate-700 hover:bg-slate-600 rounded-lg p-6 border border-slate-600 transition-colors group"
                        >
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-semibold text-white mb-2">Download .pkt File</h3>
                                    <p class="text-slate-300">Direct download from repo (static-default-routing.pkt)</p>
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
                    {#if slug === 'vlan-stp'}
                        <a
                            href="https://github.com/Mhmdghost/vlan-stp-lab"
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
                    {/if}
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