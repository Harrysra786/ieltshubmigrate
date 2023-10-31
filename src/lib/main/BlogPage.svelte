<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  <svelte:head>
    <title>Blog</title>
  </svelte:head>
  
  <section class="flex items-center justify-center">
    <div class="max-w-[1200px] px-4 mt-10">
      <div class="flex flex-row items-baseline justify-center mb-4">
        <img src="/img/Teacher.svg" class="w-12 h-12 mr-2 translate-y-1" alt=""/>
        <h1 class="text-2xl font-bold text-left">Mastering IELTS: Tips & Techniques</h1>
      </div>
      <div class="grid grid-cols-1 gap-5 mx-auto w-9/10 md:grid-cols-2 lg:grid-cols-4">
        {#each data.posts as post, index}
          <a href="/blog/{post.slug}" class="flex flex-col h-full text-gray-900 transition-all duration-100 bg-white shadow hover:shadow-lg hover:-translate-y-1 shadow-neutral-400 hover:shadow-neutral-800 {index === 0 ? 'lg:col-span-2' : ''}">
            <div class="h-48 bg-center bg-cover lg:h-96" style="background-image: url('{post.metadata.image}')"></div>
            <article class="flex flex-col justify-between flex-1 p-5">
              <h1 class="text-lg text-gray-800 lg:text-xl">{post.metadata.title}</h1>
              <p>{post.metadata.description}</p>
              <span class="mt-8 text-xs font-bold text-gray-500 uppercase">{post.metadata.author}</span>
            </article>
          </a>
        {/each}
      </div>
    </div>
  </section>