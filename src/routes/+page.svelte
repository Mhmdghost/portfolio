<script>
    import { getSiteConfig, getOwnerConfig, getSkillsConfig } from '$lib/config.js';
    import { fade, fly, scale } from 'svelte/transition';
    import { onMount } from 'svelte';
    let showHero = false;
    
    onMount(() => { 
        showHero = true;
    });
    
    const siteConfig = getSiteConfig();
    const ownerConfig = getOwnerConfig();
    const skillsConfig = getSkillsConfig();
    const networkingSkills = skillsConfig.networking || [];
    const technicalSkills = skillsConfig.technical || [];
    const certifications = skillsConfig.certifications || [];
</script>

<svelte:head>
    <title>Mohammed Waled | Network Engineer & CyberOps Associate</title>
    <meta name="description" content="Portfolio of Mohammed Waled, specialized in network security, SOC operations, and practical defensive security projects." />
</svelte:head>

<div class="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
    <section class="py-16 px-4 max-w-6xl w-full mx-auto">
        {#if showHero}
        <div class="flex flex-col items-center justify-center text-center mb-16" in:fade={{duration:700}}>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight" in:fly={{y:40,duration:700}}>
                محمد وليد
            </h1>
            <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4" in:fade={{duration:800,delay:200}}>
                أنا محمد وليد، خريج مهندسة الكمبيوتر ومدرب أمن المعلومات مع حماس لعمليات مركز العمليات الأمنية والدفاع عن الشبكات. أنا متخصص في أدوات مثل pfSense، Wireshark، وأنظمة IDS/IPS، وأعمل باستمرار على بناء محفظتي بالمشاريع العملية في المراقبة والكشف عن التهديدات.
            </p>
            <p class="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" in:fade={{duration:900,delay:400}}>
                المعلومات والبرامج التعليمية حول أمن الشبكات، أمن المعلومات، والاختراق التجريبي.
            </p>
        </div>
        {/if}

        <div class="grid md:grid-cols-2 gap-8 mb-16">
            <div class="bg-slate-800 rounded-xl p-8 border border-slate-700" in:scale={{duration:500}}>
                <h2 class="text-2xl font-bold text-white mb-4">مهندسة الشبكات وأمن المعلومات</h2>
                <div class="space-y-4">
                    {#each networkingSkills as skill, i}
                        <div class="flex items-center p-4 bg-slate-700 rounded-lg" in:fly={{x:-30,delay:100*i}}>
                            <span class="text-2xl mr-4">{skill.icon}</span>
                            <div>
                                <h3 class="font-semibold text-white">{skill.name}</h3>
                                {#if skill.level}<p class="text-sm text-slate-300">{skill.level}</p>{/if}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>

            <div class="bg-slate-800 rounded-xl p-8 border border-slate-700" in:scale={{duration:500,delay:100}}>
                <h2 class="text-2xl font-bold text-white mb-4">المهارات الفنية والأدوات</h2>
                <div class="space-y-4">
                    {#each technicalSkills as skill, i}
                        <div class="flex items-center p-4 bg-slate-700 rounded-lg" in:fly={{x:30,delay:100*i}}>
                            <span class="text-2xl mr-4">{skill.icon}</span>
                            <div>
                                <h3 class="font-semibold text-white">{skill.name}</h3>
                                {#if skill.level}<p class="text-sm text-slate-300">{skill.level}</p>{/if}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-16" in:fade={{duration:700}}>
            <h2 class="text-2xl font-bold text-white mb-6">الشهادات والمؤهلات</h2>
            <div class="grid md:grid-cols-2 gap-6">
                {#each certifications as cert, i}
                    <div class="flex items-center p-6 bg-slate-700 rounded-lg" in:fly={{y:30,delay:100*i}}>
                        <span class="text-3xl mr-4">{cert.icon}</span>
                        <div>
                            <h3 class="font-semibold text-white text-lg">{cert.name}</h3>
                            {#if cert.description}<p class="text-slate-300">{cert.description}</p>{/if}
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="text-center">
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/blog" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors" in:fade={{duration:500,delay:200}}>
                    استكشف مدونتي
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="/projects" class="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors border border-slate-600" in:fade={{duration:500,delay:300}}>
                    عرض مشاريعي
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</div>
