<script>
    import { getSiteConfig, getOwnerConfig, getProjectsConfig } from '$lib/config.js';
    import { fade, fly, scale } from 'svelte/transition';
    
    // Load configuration from TOML files
    const siteConfig = getSiteConfig();
    const ownerConfig = getOwnerConfig();
    const projects = getProjectsConfig();

    const categories = [...new Set(projects.map(p => p.category))];
    let selectedCategory = $state('All');

    const filteredProjects = $derived(
        selectedCategory === 'All' 
            ? projects 
            : projects.filter(p => p.category === selectedCategory)
    );
</script>

<svelte:head>
    <title>Projects | {ownerConfig.name} - {ownerConfig.profession}</title>
    <meta
        name="description"
        content="Portfolio of {ownerConfig.profession} projects showcasing expertise in network engineering and cybersecurity."
    />
</svelte:head>

<div class="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
    <section class="py-16 px-4 max-w-6xl w-full mx-auto">
        <div class="text-center mb-16" in:fade={{duration:600}}>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight" in:fly={{y:40,duration:600}}>
                My Projects
            </h1>
            <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed" in:fade={{duration:800,delay:200}}>
                Here are some of the key projects I've worked on in network engineering, cybersecurity, 
                and penetration testing. Each project demonstrates my practical application of technical skills 
                and professional expertise.
            </p>
        </div>

        <div class="mb-12">
            <h2 class="text-3xl font-bold mb-8 text-white text-center">Filter by Category</h2>
            <div class="flex flex-wrap gap-3 justify-center">
                <button
                    class="px-6 py-3 rounded-lg font-semibold transition-colors {selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'}"
                    on:click={() => selectedCategory = 'All'}
                    in:scale={{duration:300}}
                >
                    All Projects
                </button>
                {#each categories as category, i}
                    <button
                        class="px-6 py-3 rounded-lg font-semibold transition-colors {selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'}"
                        on:click={() => selectedCategory = category}
                        in:scale={{duration:300,delay:100*i}}
                    >
                        {category}
                    </button>
                {/each}
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each filteredProjects as project, i}
                <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-colors" in:fly={{y:30,delay:100*i}}>
                    <div class="flex items-center mb-6">
                        <span class="text-4xl mr-4">{project.icon}</span>
                        <div>
                            <h3 class="text-xl font-bold text-white">{project.name}</h3>
                            <span class="text-sm text-blue-400 font-medium">{project.category}</span>
                        </div>
                    </div>
                    
                    <p class="text-slate-300 mb-6 leading-relaxed">
                        {project.description}
                    </p>
                    
                    <div class="mb-6">
                        <h4 class="text-sm font-semibold text-white mb-3">Key Highlights:</h4>
                        <ul class="text-sm text-slate-300 space-y-2">
                            {#each project.highlights as highlight}
                                <li class="flex items-start">
                                    <span class="text-green-400 mr-2 mt-1">•</span>
                                    {highlight}
                                </li>
                            {/each}
                        </ul>
                    </div>
                    
                    <div class="border-t pt-6 mb-6" style="border-color: #475569;">
                        <h4 class="text-sm font-semibold text-white mb-3">Technologies Used:</h4>
                        <div class="flex flex-wrap gap-2">
                            {#each project.technologies as tech}
                                <span class="px-3 py-1 text-slate-200 text-xs rounded-md bg-slate-700 border border-slate-600">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>

                    {#if project.link}
                        <div class="mt-6">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
                                in:fade={{duration:400,delay:100*i}}
                            >
                                View Project
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                                </svg>
                            </a>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>

        <div class="mt-16 text-center" in:fade={{duration:700}}>
            <div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <h2 class="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
                <p class="text-slate-300 mb-8 text-lg">
                    Interested in collaborating on network security projects or discussing cybersecurity challenges? 
                    I'm always open to new opportunities and conversations.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/blog"
                        class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        in:fade={{duration:500,delay:200}}
                    >
                        Read My Blog
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mohammed-waled-burhan-61b88a30a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors border border-slate-600"
                        in:fade={{duration:500,delay:300}}
                    >
                        Connect on LinkedIn
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div> 