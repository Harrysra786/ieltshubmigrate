<!-- Modal.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition'; // Add this line
  const dispatch = createEventDispatcher();
  let isOpen = false;
export let buttontext = '';
  function close() {
    dispatch('close');
    isOpen = false;
  }

  function open() {
    isOpen = true;
  }
</script>

<button class="px-4 py-1 rounded hover:bg-neutral-800 hover:text-[#F8F8F8] border-2 hover:border-[#f4c64e] cursor-pointer bg-[#f4c64e] text-neutral-800 border-neutral-800"on:click={open}>{buttontext}</button>

{#if isOpen}
<div class="fixed inset-0 z-50 flex items-center justify-center m-1">
  <div class="absolute inset-0 bg-black bg-opacity-50" on:click={close}></div>

  <div class="relative w-full h-full mx-auto overflow-auto bg-white rounded-lg shadow-lg"
       transition:fly={{ y: 1000, duration: 500 }} 
       on:click={close}>
       <button class="absolute flex items-center justify-center w-6 h-6 right-4 top-6 " on:click={close}>
        <img class="block w-6 h-6 imgshadowed" src="/img/Close.svg" alt="clock" />
      </button>
    <slot></slot>
  </div>
</div>
{/if}
