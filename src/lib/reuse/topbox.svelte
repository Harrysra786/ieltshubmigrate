<script>
    import InfoBox from '$lib/reuse/infobox.svelte';
    export let smallHeading = "";
    export let bigHeading = "";
    export let headerText = "";
    export let infoBoxes = [];
    export let footerText = "";
  </script>
  
  <div class="mx-1 px-20 tiny:px-2 max-w-[980px] text-center pt-8 pb-5 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800" data-svelte-h="svelte-saezsp">
    <img class="block mx-auto mb-1 w-14 h-14 imgshadowed" src="/img/Elearning.svg" alt="clock"> 
    <h1 class="mx-2 tracking-wider s7 anton">
      <span class="mx-2 s5 montserrat">{smallHeading}</span> <br> {bigHeading}
    </h1> 
    <h3 class="mx-2 mt-2 mb-4 text-xs">{headerText} <span class="hue-rotate-90 imgshadowed s2">✅</span></h3> 
    <div class="flex flex-col items-center justify-center w-full space-y-2">
      {#each infoBoxes as infoBox (infoBox.title)}
        <InfoBox imgSrc={infoBox.imgSrc} title={infoBox.title} content={infoBox.content} />

      {/each}
    </div> 
    <div class="px-4 mt-2"></div>  
    <p class="mt-4 font-mono text-xs">{footerText}</p>
  </div>
  