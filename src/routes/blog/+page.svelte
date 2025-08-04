<script>
  /** @type {import('./$types').PageData} */
  let { data } = $props();
  import { fade } from 'svelte/transition';
  let showHero = false;
  import { onMount } from 'svelte';
  onMount(() => { showHero = true; });
  const posts = data.posts;
</script>

<svelte:head>
  <title>Blog | Mohammed Waled</title>
  <meta name="description" content="Blog posts about network security, penetration testing, and web security." />
</svelte:head>

<div class="min-h-screen bg-slate-900">
  <section class="py-16 px-4 max-w-6xl mx-auto">
    {#if showHero}
    <div class="text-center mb-16" in:fade={{duration:700}}>
      <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">Blog</h1>
      <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed" in:fade={{duration:900,delay:200}}>
        Insights and tutorials about network security, cybersecurity, and penetration testing.
      </p>
    </div>
    {/if}

    {#if posts.length === 0}
      <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
        <p class="text-slate-400 text-lg">No blog posts found. Check back soon for new content!</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each posts as post (post.slug)}
          <div class="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-colors">
            <div class="mb-6">
              <h2 class="text-xl font-bold mb-3 text-white">
                <a href="/blog/{post.slug}" class="text-white hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </a>
              </h2>
              <p class="text-sm text-slate-400 mb-4">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            
            {#if post.description}
              <p class="text-slate-300 mb-6 text-base leading-relaxed">
                {post.description}
              </p>
            {/if}
            
            {#if post.tags && post.tags.length > 0}
              <div class="flex flex-wrap gap-2">
                {#each post.tags as tag}
                  <span class="px-3 py-1 text-xs font-medium text-slate-200 rounded-md bg-slate-700 border border-slate-600">
                    {tag}
                  </span>
                {/each}
              </div>
            {/if}
            
            <div class="mt-6">
              <a 
                href="/blog/{post.slug}" 
                class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </section>
</div>
