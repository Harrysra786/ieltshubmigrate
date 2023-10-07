<script>
    export let imgSrc = "";
    export let title = "";
    export let content = "";
  </script>
  
  <div class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105">
    <div class="flex flex-row items-center px-2 space-x-4">
      <img class="block mx-auto w-9 h-9 imgshadowed" src={imgSrc} alt={title}>
      <p class="text-xs font-semibold text-neutral-800">
        <b>{title}</b> <br> {content}
      </p>
    </div>
  </div>
  