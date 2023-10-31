<script>
  /** @type {import('./$types').PageData} */
  export let data;

  console.log(data); // Add this line
</script>

<section class="flex-row items-center justify-center mb-8 bg-white">
  
	<img id="postimage" class="absolute z-10 w-full opacity-75 blur-sm" src={data.props.post.Image} alt="Colors" />
	<div class="flex items-center justify-center" />
	<div class="flex items-center justify-center px-2 mt-3">
		<div class="max-w-[900px] mx-5 px-12 tiny:px-3 tiny:mx-1 py-6 z-20 mt-10 bg-white rounded-t-lg">
    <div id="topinfo" class="flex flex-col mt-4 space-x-2 tiny:space-x-0 tiny3:flex-col mb-7">
			<h1 id="posttitle" class="py-2 mt-4 text-3xl font-extrabold text-center text-zinc-800">
        {data.props.post.Title}
			</h1>
			
				<div>
          <div class="mt-5 mb-4">
            <div class="flex flex-col items-center justify-center">
              <div class="flex items-center space-x-1"></div> 
              <div class="flex items-center">
                <img class="object-cover w-10 h-10 mr-4 rounded-full" src="/img/SmallAvatar.webp" alt="Avatar of Writer"> 
                <div class="text-sm">
                  <strong class="leading-none text-gray-900" data-svelte-h="svelte-1eqnu94">Hardev Singh Sra</strong> 
                  <p class="text-gray-600" data-svelte-h="svelte-164jorp">ielts-hub.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-2 m-0 leading-6 text-gray-900">
            {#if Array.isArray(data.props.post.Tags)}
              {#each data.props.post.Tags as tag (tag)}
                <div class="flex items-center justify-center px-3 text-xs font-normal leading-6 text-gray-800 border-t border-b-2 border-solid rounded md:rounded border-x border-zinc-300 bg-zinc-100" style="border-width: 1px 1px 2px; min-height: 2.2em; min-width: 2.2em; box-shadow: none;">
                  {tag}
                </div>
              {/each}
            {/if}
          </div>

        <div id="postmain" class="flex flex-col px-6 py-4 mt-12 space-x-2 prose tiny:space-x-0 tiny3:flex-col">
          {@html data.props.post.Article}
        </div>
      </div>
    </div>
</section>


<style>
  
  
</style>