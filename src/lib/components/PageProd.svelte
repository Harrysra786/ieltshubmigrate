<script>
  import { mainPageData } from "./../../store.js";
  let pgdata = $mainPageData[2];
</script>

<section class="bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div
        class="grid p-6 bg-gradient-to-b from-slate-600 to-gray-900 rounded place-content-center sm:p-8 shadow-2xl"
      >
        <div class="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 class="text-xl font-bold text-sky-500 sm:text-5xl">
              {pgdata.title}
            </h2>

            <p class="mt-4 text-slate-400">
              {pgdata.text}
            </p>
          </header>

          <a
            href="/products"
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 hover:bg-transparent rounded hover:shadow focus:outline-none focus:ring"
          >
            {pgdata.btn}
          </a>
        </div>
      </div>

      <div class="lg:col-span-2 lg:py-8">
        <ul class="grid grid-cols-2 gap-4">
          <li>
            <a
              href="/products"
              class="block group shadow-2xl hover:shadow-cyan-500 transition duration-200"
            >
              <img
                src={pgdata.img1}
                alt=""
                class="object-cover w-full rounded aspect-square"
              />
            </a>
          </li>

          <li>
            <a
              href="/products"
              class="block group shadow-2xl hover:shadow-cyan-500 transition duration-200"
            >
              <img
                src={pgdata.img2}
                alt=""
                class="object-cover w-full rounded aspect-square"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
