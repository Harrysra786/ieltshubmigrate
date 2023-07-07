<script>
  import { mainPageData } from "./../../store.js";
  let pageStats = $mainPageData[5];
</script>

<section
  class="bg-gray-800 border-t-2 border-slate-400 bg-gradient-to-t from-gray-800 to-gray-900 "
>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold text-teal-500 sm:text-4xl">
        {pageStats.title}
      </h2>

      <p class="mt-4 text-gray-500 sm:text-xl">
        {pageStats.subtitle}
      </p>
    </div>

    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {#each pageStats.stats as item}
          <div
            class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center duration-200 transition-all  hover:border-sky-500  hover:bg-gray-900 "
          >
            <dt class="order-last text-lg font-medium text-gray-500">
              {item.title}
            </dt>

            <dd class="text-4xl font-extrabold text-sky-500 md:text-5xl">
              {item.value}
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</section>
