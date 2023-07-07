<script>
  import Tooltip from "/src/lib/components/Tooltip.svelte";
</script>

<body data-sveltekit-preload-data="hover" class="bg-white">
  <main class="flex justify-center bg-white">
    <section
      class="flex w-[980px] justify-between mt-20 mb-20 tiny:flex-col bg-white"
    >
      <Tooltip />
      <!-- Left Side -->
      <div
        class="text-center flex flex-col space-y-8 tiny:items-center tiny:mb-10"
      >
        <h1 class="headline">
          Simplify <br /> IELTS <br /> Preparation
        </h1>
        <h1 class="text-zinc-800 text-1xl text-left font-black">
          A one stop solution to all your IELTS needs.
        </h1>
      </div>

      <!-- Right Side -->
      <div
        class="text-center flex flex-col space-y-3 max-w-[320px] self-center btext"
      >
        <button
          class="flex bg-white text-neutral-800 py-2 px-6 border-2 tiny:border tiny:shadow-sm tiny:shadow-black/25 border-black border-solid rounded-md transition duration-300 ease-in-out transform hover:bg-neutral-800 hover:text-white focus:outline-none h-11"
        >
          <img
            src="/img/Training.svg"
            class="w-6 h-6 mr-2 imgshadowed"
            alt="Icon"
          /> Introduction to IELTS
        </button>
        <button
          class="flex bg-white text-neutral-800 py-2 px-6 border-2 tiny:border tiny:shadow-sm tiny:shadow-black/25 border-black border-solid rounded-md transition duration-300 ease-in-out transform hover:bg-neutral-800 hover:text-white focus:outline-none h-11"
        >
          <img
            src="/img/technology.svg"
            class="w-6 h-6 mr-2 imgshadowed"
            alt="Icon"
          /> IELTS Free Stuff
        </button>
        <button
          class="flex bg-white text-neutral-800 py-2 px-6 border-2 tiny:border tiny:shadow-sm tiny:shadow-black/25 border-black border-solid rounded-md transition duration-300 ease-in-out transform hover:bg-neutral-800 hover:text-white focus:outline-none h-11"
        >
          <img
            src="/img/E-books.svg"
            class="w-6 h-6 mr-2 imgshadowed"
            alt="Icon"
          /> IELTS Bookstore
        </button>
        <button
          class="flex bg-white text-neutral-800 py-2 px-6 border-2 tiny:border tiny:shadow-sm tiny:shadow-black/25 border-black border-solid rounded-md transition duration-300 ease-in-out transform hover:bg-neutral-800 hover:text-white focus:outline-none h-11"
        >
          <img src="/img/onlinecourse.svg" class="w-6 h-6 mr-2" alt="Icon" /> IELTS
          Courses
        </button>
        <button
          class="flex bg-white text-neutral-800 py-2 px-6 border-2 tiny:border tiny:shadow-sm tiny:shadow-black/25 border-black border-solid rounded-md transition duration-300 ease-in-out transform hover:bg-neutral-800 hover:text-white focus:outline-none h-11"
        >
          <img
            src="/img/bolt.svg"
            class="w-6 h-6 mr-2 imgshadowed"
            alt="Icon"
          /> IELTS Apps and Tools
        </button>
      </div>
    </section>
  </main>
</body>
