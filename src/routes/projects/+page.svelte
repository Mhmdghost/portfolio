<script>
    import { getSiteConfig, getOwnerConfig, getProjectsConfig } from '$lib/config.js';
    import { fade, fly } from 'svelte/transition';
    
    // Load configuration from TOML files
    const siteConfig = getSiteConfig();
    const ownerConfig = getOwnerConfig();
    const projects = getProjectsConfig();
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
            <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-center" in:fade={{duration:800,delay:200}}>
                Here are some of the key projects I've worked on in network engineering and cybersecurity. 
                Click on any project to view detailed information.
            </p>
        </div>

        <!-- Project Cards -->
        <div class="flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
                {#each projects as project, i}
                    <a 
                        href={project.link}
                        class="block bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer hover:shadow-xl no-underline" 
                        in:fly={{y:30,delay:100*i}}
                    >
                        <div class="text-center">
                            <div class="text-5xl mb-4">{project.icon}</div>
                            <h3 class="text-xl font-bold text-white mb-3">{project.name}</h3>
                            <p class="text-slate-300 text-sm mb-4 line-clamp-3 text-center">
                                {project.description}
                            </p>
                            <div class="flex flex-wrap gap-2 justify-center mb-4">
                                {#each project.technologies.slice(0, 3) as tech}
                                    <span class="px-2 py-1 text-xs rounded-md bg-slate-700 text-slate-200 border border-slate-600">
                                        {tech}
                                    </span>
                                {/each}
                                {#if project.technologies.length > 3}
                                    <span class="px-2 py-1 text-xs rounded-md bg-blue-600 text-white">
                                        +{project.technologies.length - 3} more
                                    </span>
                                {/if}
                            </div>
                            <div class="text-center">
                                <span class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>

        <!-- Empty State -->
        {#if projects.length === 0}
            <div class="text-center py-16" in:fade={{duration:600}}>
                <div class="text-6xl mb-6">📁</div>
                <h3 class="text-2xl font-bold text-white mb-4">No Projects Yet</h3>
                <p class="text-slate-300 max-w-md mx-auto">
                    I'm currently working on new projects. Check back soon for updates!
                </p>
            </div>
        {/if}

        <!-- Contact Section -->
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