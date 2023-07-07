<script>
  import { mainPageData } from "./../../store.js";
  let pageData = $mainPageData[3];
  let img1 =
    "https://i.pinimg.com/564x/d2/ce/41/d2ce415a0159b22fc40ccc26d2ba623c.jpg";
  // Short img2
  let img2 =
    "https://images.pexels.com/photos/175712/pexels-photo-175712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let img3 =
    "https://images.pexels.com/photos/12467508/pexels-photo-12467508.jpeg";
  // Short img4
  let img4 =
    "https://i.pinimg.com/564x/d2/76/08/d27608fa2f28fed73ae988d628911e18.jpg";
</script>

<div class="bg-gray-900 py-6 sm:py-8 lg:py-12 md:px-24">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
      <!-- image - start -->
      <a
        href="/"
        class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
      >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={pageData.img1}
          loading="lazy"
          alt="Photo by Minh Pham"
          class="w-full h-full object-cover object-right-bottom absolute inset-0 group-hover:scale-110 transition duration-200"
        />

        <div
          class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
        />

        <span
          class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3"
          >{pageData.img1text}</span
        >
      </a>
      <!-- image - end -->

      <!-- image - start -->
      <a
        href="/"
        class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
      >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={pageData.img2}
          loading="lazy"
          alt="Photo by Magicle"
          class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
        />

        <div
          class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
        />

        <span
          class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3"
          >{pageData.img2text}</span
        >
      </a>
      <!-- image - end -->

      <!-- image - start -->
      <a
        href="/"
        class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
      >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={pageData.img3}
          loading="lazy"
          alt="Photo by Martin Sanchez"
          class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
        />

        <div
          class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
        />

        <span
          class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3"
          >{pageData.img3text}</span
        >
      </a>
      <!-- image - end -->

      <!-- image - start -->
      <a
        href="/"
        class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative "
      >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={pageData.img4}
          loading="lazy"
          alt="Photo by Lorenzo Herrera"
          class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110   transition duration-200"
        />

        <div
          class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
        />

        <span
          class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3"
          >{pageData.img4text}</span
        >
      </a>
      <!-- image - end -->
    </div>
  </div>
</div>
