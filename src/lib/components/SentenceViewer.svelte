<script>
  import { onMount } from "svelte";
  let sentences = [];
  let currentIndex = 0;

  onMount(async () => {
    const response = await fetch("../../sentence.json");
    sentences = await response.json();
  });

  function nextSentence() {
    if (currentIndex < sentences.length - 1) {
      currentIndex++;
    }
  }

  function prevSentence() {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }
</script>

<!-- Your content here -->
<div class="h-[8vh] flex flex-row justify-between">
  <div
    class="verreg h-full text-2xl bg-[#F1E0C5] text-center text-black/70 flex justify-center items-center w-20 rounded-br-lg shadow-xl border-r-2 border-b-2 border-black/75 border-solid"
  >
    <p>{sentences[currentIndex]?.["Sentence "]}</p>
  </div>
  <div
    class="tracking-[0.15em] h-full text-2xl tiny:text-sm bg-[#F1E0C5] text-center text-black/60 flex justify-center items-center rounded-b-lg shadow-xl border-b-2 border-r-2 border-l-2 border-l-black/75 border-r-black/75 border-b-black/75 border-solid ml-auto mr-auto"
  >
    <p class="mx-8 semibold-text">Hardev Sir's Sentence Improver</p>
  </div>
</div>

<!-- Simple sentence -->
<div
  class="verbold text-center mt-10 bg-[#F1E0C5] rounded-t-xl w-1/4 ml-20 mr-6 h-8 flex justify-center items-center border-t-2 border-x-2 border-dashed border-zinc-800 text-black"
>
  ⚠️ Simple
</div>
<div
  class="h-[20%] bg-[#F8F0E3] mb-2 rounded-sm s-fe16WiCk8hS4 shadow-lg ml-20 mr-8 border-2 border-zinc-800 border-dashed"
>
  <p
    class="verreg h-full p-6 s-fe16WiCk8hS4 tracking-tighter text-gray-800 text-base"
  >
    {sentences[currentIndex]?.Simple}
  </p>
</div>

<!-- Better sentence -->
<div
  class="verbold text-center mt-4 bg-[#F1E0C5] rounded-t-xl w-1/4 ml-20 mr-6 h-8 flex justify-center items-center border-t-2 border-x-2 border-dashed border-zinc-800 text-black"
>
  👍 Better
</div>
<div
  class="h-[30%] bg-[#F8F0E3] rounded-lg shadow-sm ml-20 mr-8 mb-4 border-2 border-zinc-800 border-dashed"
>
  <p
    class="verreg h-full p-8 s-fe16WiCk8hS4 tracking-tighter text-gray-800 text-base"
  >
    {sentences[currentIndex]?.Better}
  </p>
</div>

<!-- Best sentence -->
<div
  class="verbold text-center mt-2 bg-[#F1E0C5] rounded-t-xl w-1/4 ml-20 mr-6 h-8 flex justify-center items-center border-t-2 border-x-2 border-dashed border-zinc-800 text-black"
>
  ⭐ Best
</div>
<div
  class="h-[50%] bg-[#F8F0E3] mb-10 rounded-sm s-fe16WiCk8hS4 shadow-lg ml-20 mr-8 border-2 border-zinc-800 border-dashed"
>
  <p
    class="verreg h-full p-6 s-fe16WiCk8hS4 tracking-tighter text-gray-800 text-base"
  >
    {sentences[currentIndex]?.Best}
  </p>
</div>

<!-- Navigation -->
<div
  class="my-web-font h-[8vh] bg-[#F1E0C5] text-2xl tiny:text-sm text-center text-black/50 tracking-[0.15em] flex justify-evenly items-center rounded-t-md ml-20 mr-6 flex flex-row border-black/75 border-t-2 border-x-2"
>
  <div class="mr-5">
    <img
      src="/img/left.svg"
      class="w-8 h-8 imgshadowed s-OBYRr6PZP4N9 cursor-pointer s-VLgjXbRqAoIE"
      on:click={prevSentence}
    />
  </div>
  <div>
    <select
      bind:value={currentIndex}
      class="text-center text-lg w-full bg-white"
    >
      {#each sentences as sentence, index}
        <option value={index}>{sentence["Sentence "]}</option>
      {/each}
    </select>
  </div>
  <div class="ml-5">
    <img
      src="/img/right.svg"
      class="w-8 h-8 imgshadowed s-OBYRr6PZP4N9 cursor-pointer s-VLgjXbRqAoIE"
      on:click={nextSentence}
    />
  </div>
</div>
