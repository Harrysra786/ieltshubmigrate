<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>{data.post.metadata.title}</title>
  <meta name="description" content={data.post.metadata.description}>
</svelte:head>

<section class="flex items-center justify-center">
<article class="mt-10 max-w-[900px] mx-5 px-12 tiny:px-3 tiny:mx-1 py-6 border-2 border-dashed bg-zinc-100 shadow-black border-neutral-800">
  <div class="h-48 bg-center bg-cover lg:h-96" style="background-image: url('{data.post.metadata.image}')"></div>
  <div class="mt-6 text-xs font-bold text-gray-500 uppercase">
    <span>{data.post.metadata.author}</span>
    <span>{data.post.metadata.wordCount} words</span>
    <span>{data.post.metadata.readingTime} min read</span>
    <span>{data.post.metadata.starRating} stars</span>
  </div>
  <div class="mt-6 prose">{@html data.post.content}</div>
  <div class="mt-6">
    <h2>Related Posts</h2>
    <div class="grid w-full grid-cols-1 gap-5 mx-auto md:grid-cols-2">
      {#each data.post.relatedPosts as relatedPost}
        <a href="/blog/{relatedPost.slug}" class="flex flex-col h-full text-gray-900 transition-all duration-100 bg-white shadow hover:shadow-lg hover:-translate-y-1 shadow-neutral-400 hover:shadow-neutral-800">
          <div class="h-48 bg-center bg-cover lg:h-96" style="background-image: url('{relatedPost.metadata.image}')"></div>
          <article class="flex flex-col justify-between flex-1 p-5">
            <h1 class="text-lg text-gray-800 lg:text-xl">{relatedPost.metadata.title}</h1>
            <p>{relatedPost.metadata.description}</p>
            <div class="mt-8 text-xs font-bold text-gray-500 uppercase">
              <span>{relatedPost.metadata.author}</span>
              <span>{relatedPost.metadata.wordCount} words</span>
              <span>{relatedPost.metadata.readingTime} min read</span>
              <span>{relatedPost.metadata.starRating} stars</span>
            </div>
          </article>
        </a>
      {/each}
    </div>
  </div>
  
  
  
  
</article>
</section>



