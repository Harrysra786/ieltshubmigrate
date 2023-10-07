<!--
This component gives a direct link to students to access all the study material. Either embed pcloud or use some other way. 
    
-->


<script>
    import { onMount } from 'svelte';
    import { db } from '$lib/firebase.js';
    import { collection, getDocs, orderBy, query } from 'firebase/firestore';
    import Table from './GenTable.svelte';
    import { fetchVideos } from '$lib/fetchVideos.js'; // adjust the path to where you save the fetchVideos function
 
 let videos = [];
    let loading = true;
    let collectionName = 'readingEntries'; // Change this to the subcollection you want to read from
   
   let data = [
       { number: 1, material: 'Week 2 Reading Booklet', link: '/pdf/GenReadW1.pdf' },
       // More data...
   ];
   onMount(async () => {
    videos = await fetchVideos('Genvideos', 'Reading');
  });

   </script>
   <section>
   <div class="flex justify-center mt-6 col items center">
   
   <div class="flex flex-col max-w-[900px] mx-1 ">
       <p class="mb-3 text-center bb s7">The Reading Area</p>
       
       
   <div class="px-4 pt-6 mt-6 border-2 border-dashed rounded border-neutral-800">
       <p class="px-4 py-2 mb-6 font-semibold text-center text-white rounded s4 bg-neutral-800">Download Study Material</p>
     <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
       <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
         <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
           <Table {data} />
   
         </div>
       </div>
     </div>
   </div>
   <div class="px-4 pt-6 mt-6 border-2 border-dashed rounded border-neutral-800">
       <p class="px-4 py-2 mb-6 font-semibold text-center text-white s4 bg-neutral-800">Watch Videos</p>
       {#each videos as video (video.id)}
       <h2>{video.name}</h2>
       {@html `<div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 69.66%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 69.66%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="${video.id}" src="${video.src}" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>`}
     {/each}
   </div>
   
   
   </div>
   </div>
   
   
   </section>
   
   
   
   <style>
   
   
   </style>