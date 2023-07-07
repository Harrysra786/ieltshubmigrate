<script>
import { slide } from "svelte/transition"; // Add this line to import the slide transition
  let showMenu = false;
</script>

<section
  class="flex flex-col items-center justify-center px-16 pt-4 pb-2 bg-white border-b-2 border-black border-solid"
>
  <div class="flex flex-row items-center space-x-1">
    <img src="/img/education.svg" class="mr-2 w-9 h-9 imgshadowed" alt="Icon" />
    <div>
      <span class="text-2xl font-black my-web-font text-neutral-800"
        >IELTS Hub</span
      >
      <span class="self-end text-sm font-black text-black">By Hardev Sir</span>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img
    src="/img/doublearrow2.svg"
    class="w-5 h-5 mt-2 cursor-pointer imgshadowed"
    alt="Icon"
    on:click={() => (showMenu = !showMenu)}
  />

  {#if showMenu}
    <!-- Add this line to conditionally render the menu -->
    <div class="flex mt-3 gap-x-5" transition:slide={{ duration: 300 }}>
      <a
        href="/bookstore"
        class="text-base font-semibold text-neutral-800 hover:text-gray-300"
        >Bookstore</a
      >
      <a
        href="./courses"
        class="text-base font-semibold text-neutral-800 hover:text-gray-300"
        >Courses</a
      >
      <a
        href="./onlinebatch.html"
        class="text-base font-semibold text-neutral-800 hover:text-gray-300"
        >Apps</a
      >
      <a
        href="./samplebook"
        class="text-base font-semibold text-neutral-800 hover:text-gray-300"
        >Articles</a
      >
    </div>
    <div
      class="flex items-center mt-2 gap-x-5"
      transition:slide={{ duration: 300 }}
    >
      <a href="./loginregister" class="text-base font-black text-black bitbold">Login</a>
      <a href="./loginregister" class="text-xs font-black text-black">Register</a>
    </div>
  {/if}
  <!-- Add this line to close the conditional rendering block -->
</section>
<!-- <div class="p-2 box md:px-20"> -->
