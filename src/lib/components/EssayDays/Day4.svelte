<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('./../../../routes/api/discuss.js');
    const discuss = await res.json();

    return { props: { discuss } };
  }
</script>

<script lang="ts">
  import { writable } from "svelte/store";

  export let discuss;

  let status = writable("");

  async function handleSubmit() {
    for (let i = 0; i < discuss.length; i++) {
      const payload = {
        name: `Essay ${discuss[i].Essay}`,
        text: discuss[i].Topic,
      };

      const response = await fetch('https://h.albato.com/wh/38/1lfuq9k/65uAwE5kYWHmwF_u-naSKRM_G6gDC_MLrBVIm0fj2NM/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      console.log(data);
      status.set(`Essay ${discuss[i].Essay} sent`);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
</script>



<section class=" bg-white flex justify-center items-center">
  <div class="flex flex-col justify-center items-center max-w-[1000px] mt-8">
    <div
      class="flex flex-col items-center px-10 pb-6 border-neutral-900 border-2 border-solid bg-white rounded-md mt-10 pt-3 mx-6 tiny:mx-6 gridgrad"
    >
      <img
        src="/img/Hardev Sir Avatar.png"
        class="mx-auto w-24 h-24 imgshadowed relative mt-8"
      />
      <h1
        class="my-web-font text-4xl text-black font-bold mb-8 mx-5 mt-5 text-center"
      >
        Hardev Sir's Writing Task Submission Tool
      </h1>
      <h1
        class="my-web-font text-2xl text-black font-bold mb-8 mx-5 text-center"
      >
        Monday's Writing
      </h1>

      <div class="flex space-x-8 my-4 w-9/12 justify-center">
        <button
  class=" bg-neutral-800 text-white font-black py-2 px-6 border-2 border-black border-dashed rounded-md transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-black hover:border-solid"
  on:click={handleSubmit}
  disabled={!discuss}
>
  Submit
</button>
      </div>

      <p class="text-center" />
      <h2 class="my-web-font text-2xl text-black font-bold mb-8 mx-5 text-center">
        {status}
      </h2>
    </div>
  </div>
</section>
