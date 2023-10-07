<!--
This component gives a direct link to students to access all the study material. Either embed pcloud or use some other way. 
    
-->


<script>
 import Table from './GenTable.svelte';
 import Video from './GenVideo.svelte';
 
 let videos = [
        { text: 'No Video For Now', id: 'pv_6cj1gMQg', src: '' },
      
    ];

let data = [
    { number: 1, material: '200 Essay for IELTS', link: '/pdf/Wessay200.pdf' },
    { number: 2, material: 'Band 9 Essays for IELTS', link: '/pdf/Wletters.pdf' },
    { number: 3, material: '101 Band 9 Letters for IELTS', link: '/pdf/Wletters.pdf' },
    { number: 4, material: 'Ideas for IELTS', link: '/pdf/Wideas.pdf' },
   
];

</script>
<section>
<div class="flex justify-center mt-6 col items center">

<div class="flex flex-col max-w-[900px] mx-1 ">
    <p class="mb-3 text-center bb s7">The Writing Area</p>
    <div class="text-center flex flex-col space-y-3 max-w-[420px] self-center btext mt-6">
    <a href="/general/writing/submit"  class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11"><img src="/img/Letters.svg" class="w-6 h-6 mr-4 imgshadowed" alt="Icon"> Submit Writing Task </a></div>
    
<div class="px-4 pt-6 mt-6 border-2 border-dashed rounded border-neutral-800">
    <p class="px-4 py-2 mb-6 font-semibold text-center text-white rounded s4 bg-neutral-800">Download Study Material</p>
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
        <Table {data} />
<p class="text-xs font-bold text-center">* More stuff to be added soon</p>
      </div>
    </div>
  </div>
</div>
<div class="px-4 pt-6 mt-6 border-2 border-dashed rounded border-neutral-800">
    <p class="px-4 py-2 mb-6 font-semibold text-center text-white s4 bg-neutral-800">Watch Videos</p>
    {#each videos as video (video.id)}
    <Video {video} />
{/each}
</div>


</div>
</div>


</section>



<style>


</style>