<script>
  import { mainPageData } from "./../../store.js";
  let pageData = $mainPageData[4];
</script>

<section class="bg-gray-900 text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold sm:text-5xl">{pageData.title}</h2>

      <p class="mt-4 text-gray-300">
        {pageData.subtitle}
      </p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each pageData.featuresDesc as item}
        <a
          class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-500/10 hover:shadow-cyan-500/10"
          href="/services/digital-campaigns"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-cyan-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 class="mt-4 text-xl font-bold text-white">{item.title}</h2>

          <p class="mt-1 text-sm text-gray-300">
            {item.description}
          </p>
        </a>
      {/each}
    </div>

    <div class="mt-12 text-center">
      <a
        href="/products"
        class="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-sky-600 focus:outline-none "
      >
        {pageData.btnText}
      </a>
    </div>
  </div>
</section>
