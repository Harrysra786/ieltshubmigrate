<script>
import { slide } from "svelte/transition"; // Add this line to import the slide transition
import SearchBar from '$lib/reuse/SearchBar.svelte'
  let showMenu = false;
</script>

<section
  class="flex flex-col items-center justify-center px-8 pt-4 pb-2 bg-white border-b-2 border-black border-solid"
>
  <a href="/" class="flex flex-row items-center space-x-1 cursor-pointer">
    <img src="/img/education.svg" class="mr-2 w-9 h-9 imgshadowed" alt="Icon" />
    <div>
      <span class="text-2xl font-black my-web-font text-neutral-800"
        >IELTS Hub</span
      >
      <span class="self-end text-xs font-light text-black">By Hardev Sir</span>
      
    </div>
  </a>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="flex items-center justify-center mt-4">
  <SearchBar />
</div>
  <!-- Add this line to close the conditional rendering block -->
</section>
<!-- <div class="p-2 box md:px-20"> -->
