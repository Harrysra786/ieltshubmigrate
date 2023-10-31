<script>
    /** @type {import('./$types').PageData} */
    export let data;
  
    console.log(data); // Add this line
</script>
  
<svelte:head>
    <title>Blog</title>
</svelte:head>
  
<section class="flex items-center justify-center">
  <div class="grid grid-cols-1 gap-5 mx-auto w-9/10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {#if data && data.props && data.props.posts}
      {#each data.props.posts as post, index}
        <a href="/blog/post{post.Post}" class="flex flex-col h-full text-gray-900 transition-all duration-100 bg-white shadow hover:shadow-lg hover:-translate-y-1 shadow-neutral-400 hover:shadow-neutral-800 ">
          <div class="h-48 bg-center bg-cover lg:h-96" style="background-image: url('{post.Image}')"></div>
          <article class="flex flex-col justify-between flex-1 p-5">
            <h1 class="text-lg text-gray-800 lg:text-xl">{post.Title}</h1>
            <p>{post.Description}</p>
            <span class="mt-8 text-xs font-bold text-gray-500 uppercase">Hardev Singh</span>
          </article>
        </a>
      {/each}
    {/if}
  </div>
</section>
  
