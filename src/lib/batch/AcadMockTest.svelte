<script>
	import Readingtest from './Genreadingtestchecker.svelte';
	import Listeningtest from './Genlisteningtestchecker.svelte';
	import Writingtest1 from '$lib/checking/Gensubmittask1.svelte';
	import Writingtest2 from '$lib/checking/EssayCheckSubmit.svelte';
    import Modal from '$lib/reuse/newmodal.svelte';
    let currentTest = null;
  let isModalOpen = false;

  function openTest(test) {
    currentTest = test;
    isModalOpen = true;
  }

  function closeModal() {
    currentTest = null;
    isModalOpen = false;
  }
</script>


<section class="flex flex-col items-center justify-center h-screen bg-white">
	<p class="text-center bb s6 max-w-[800px] mt-4 mb-3 px-5 py-6 z-50 mx-6">
		Submit<br /> Your Answers Below
	</p>
	<div class="text-center flex flex-col space-y-3 max-w-[420px] self-center btext mt-6">
		<button on:click={() => openTest('listening')}
			
			class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11"
			><img src="/img/Teacher.svg" class="mr-4 w-7 h-7 imgshadowed" alt="Icon" /> Listening Test
    </button><button on:click={() => openTest('reading')}
			
			class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11"
			><img src="/img/Video clip.svg" class="mr-4 w-7 h-7 imgshadowed" alt="Icon" /> Reading Test
		</button><button on:click={() => openTest('writing1')}
			
			class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11"
			><img src="/img/Letters.svg" class="w-6 h-6 mr-4 imgshadowed" alt="Icon" /> Writing Test
		</button>
	</div>
</section>

{#if isModalOpen}
  <Modal on:close={closeModal}>
    {#if currentTest === 'listening'}
      <Listeningtest />
    {:else if currentTest === 'reading'}
      <Readingtest />
    {:else if currentTest === 'writing1'}
      <Writingtest1 />
      <Writingtest2 />
    {/if}
  </Modal>
{/if}
