<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  {#if data.post}
    <title>{data.post.title} | Mohammed Waled</title>
    <meta name="description" content={data.post.description || `Blog post about ${data.post.title}`} />
  {:else}
    <title>Post Not Found | Mohammed Waled</title>
    <meta name="description" content="The blog post you are looking for could not be found." />
  {/if}
</svelte:head>

{#if data.post}
  <article class="max-w-6xl mx-auto">
    <div class="mb-8">
      <a href="/blog" class="inline-flex items-center text-primary hover:underline mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Back to Blog
      </a>
      <h1 class="text-3xl md:text-4xl font-bold text-white">{data.post.title}</h1>
      <div class="flex items-center text-gray-400 mt-4">
        <time datetime={data.post.date}>
          {new Date(data.post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        {#if data.post.tags && data.post.tags.length > 0}
          <span class="mx-2">•</span>
          <div class="flex flex-wrap gap-2">
            {#each data.post.tags as tag}
              <span class="text-gray-200 rounded-full px-4 py-1 text-sm" style="background: linear-gradient(145deg, #0D1117 0%, #161B22 100%); border: 1px solid #30363D;">
                {tag}
              </span>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    <div class="rounded-lg shadow-md p-6 mb-8 prose prose-invert max-w-none" style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;">
      {@html data.post.content}
    </div>
  </article>
{:else}
  <div class="text-center py-16">
    <h1 class="text-4xl font-bold mb-4">Post Not Found</h1>
    <p class="text-gray-400 mb-8">The blog post you are looking for could not be found.</p>
    <a href="/blog" class="btn btn-primary">Back to Blog</a>
  </div>
{/if}
