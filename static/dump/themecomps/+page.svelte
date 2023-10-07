<section class="fcen flex-col mt-10 mx-10 space-y-10">
  <!-- Button -->

  <div class="flex justify-center items-center">
    <button
      class="w-52 inline-flex justify-evenly items-center px-4 py-2 text-xs font-semibold tracking-widest text-neutral-800 uppercase transition duration-150 ease-in-out border-neutral-800 border-dashed border-2 rounded-[0.175rem] bg-white hover:bg-neutral-800 hover:text-white focus:outline-none"
    >
      <img src="/img/overview.svg" class="cursor-pointer w-7 h-7 imgshadowed" />
      Button 1.1
    </button>
  </div>

  <button
    class="rounded-[0.250rem] relative px-4 py-2 overflow-hidden text-neutral-800 bg-white border hover:border-white hover:drop-shadow-xl border-neutral-800 group"
  >
    <span
      class="absolute inset-0 transition-all duration-300 ease-in-out transform -translate-x-full bg-[#f4c64e] group-hover:translate-x-0"
    />
    <span class="relative">
      <div
        class="flex flex-row items-center justify-center w-full h-full space-x-3"
      >
        <img
          src="/img/overview.svg"
          class="cursor-pointer w-7 h-7 imgshadowed"
        />
        <b class="text-sm tracking-tighter bitbold text-neutral-700"
          >Button Solid Yellow</b
        >
      </div>
    </span>
  </button>
  <!-- Button -->
  <button
    class="rounded-[0.250rem] relative px-4 py-2 overflow-hidden text-neutral-800 bg-white border border-neutral-800 hover:text-white group"
  >
    <span
      class="absolute inset-0 transition-all duration-300 ease-in-out transform -translate-x-full bg-neutral-800 group-hover:translate-x-0"
    />
    <span class="relative">
      <div class="flex flex-row justify-center w-full h-full space-x-3">
        <img
          src="/img/overview.svg"
          class="cursor-pointer w-7 h-7 imgshadowed"
        />
        <b>Button Solid</b>
      </div>
    </span>
  </button>
  <!-- Book picture -->

  <button
    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-neutral-800 uppercase transition duration-150 ease-in-out border border-neutral-800 border-dashed border-2 rounded-md bg-white hover:bg-neutral-800 hover:text-white hover:border-neutral-800 focus:outline-none"
  >
    <img src="/img/overview.svg" class="cursor-pointer w-7 h-7 imgshadowed" />
    Button 1.1
  </button>

  <button
    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md bg-neutral-800 hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none"
  >
    <img src="/img/overview.svg" class="cursor-pointer w-7 h-7 imgshadowed" />
    Button 1
  </button>

  <button
    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border-2 rounded-full bg-neutral-800 border-neutral-800 hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none"
  >
    <img src="/img/overview.svg" class="cursor-pointer w-7 h-7 imgshadowed" />
    Button 2
  </button>

  <button
    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase transition duration-150 ease-in-out bg-white border-4 rounded-lg border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white focus:outline-none"
  >
    <img src="/img/overview.svg" class="cursor-pointer w-7 h-7 imgshadowed" />
    Button 3
  </button>

  <button
    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition-transform duration-300 ease-in-out border border-transparent rounded-md bg-neutral-800 group hover:scale-105 focus:outline-none"
  >
    <img
      src="/img/overview.svg"
      class="w-4 h-4 mr-2 transition-transform duration-300 ease-in-out transform group-hover:rotate-180"
    />
    Button 4
  </button>

  <button
    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 ease-in-out border-2 rounded-full bg-neutral-800 border-neutral-800 group hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none"
  >
    <img
      src="/img/overview.svg"
      class="w-4 h-4 mr-2 transition-all duration-300 ease-in-out group-hover:w-6 group-hover:h-6 animate-wiggle"
    />
    Button 5
  </button>
  <button
    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ease-in-out bg-white border-4 rounded-lg border-neutral-800 text-neutral-800 group hover:bg-neutral-800 hover:text-white hover:border-transparent focus:outline-none"
  >
    <img
      src="/img/overview.svg"
      class="w-4 h-4 mr-2 transition-colors duration-300 ease-in-out group-hover:text-white"
    />
    Button 6
  </button>

  <button
    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ease-in-out bg-white border-4 rounded-lg border-neutral-800 text-neutral-800 group hover:bg-neutral-800 hover:text-white hover:border-transparent focus:outline-none"
  >
    <img
      src="/img/overview.svg"
      class="w-4 h-4 mr-2 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0"
    />
    <img
      src="/img/overview.svg"
      class="absolute w-4 h-4 mr-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-150 blur group-hover:blur-none"
    />
    Button 6
    <style>
      .blur {
        filter: blur(4px);
      }
    </style>
  </button>

  <button class="btn"> Hover me </button>

  <style>
    .btn {
      font-size: 17px;
      background: transparent;
      border: none;
      padding: 1em 1.5em;
      color: #ffedd3;
      text-transform: uppercase;
      position: relative;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
    }

    .btn::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 0;
      background-color: #ffc506;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
    }

    .btn:hover {
      color: #ffffff;
      -webkit-transition-delay: 0.5s;
      transition-delay: 0.5s;
    }

    .btn:hover::before {
      width: 100%;
    }

    .btn::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0;
      width: 100%;
      background-color: #ffc506;
      -webkit-transition: 0.4s ease;
      transition: 0.4s ease;
      z-index: -1;
    }

    .btn:hover::after {
      height: 100%;
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;
      color: aliceblue;
    }
  </style>
</section>
