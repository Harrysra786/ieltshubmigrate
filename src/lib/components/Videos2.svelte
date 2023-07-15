<script>
    import { onMount } from 'svelte';
  
    let videos;
  
    onMount(() => {
      let today = new Date().getDay();
      today = today === 0 ? 7 : today; // Adjust Sunday to 7 instead of 0
      videos = document.querySelectorAll('[data-video]');
  
      videos.forEach((video, index) => {
        if (index < today || today >= 5) {
          video.style.display = 'block';
        } else {
          
          video.style.display = 'none';
        }
      });
    });
  </script>
  

<!-- Outer Frame -->
<section class="flex items-center justify-center">

    <!-- Inner Frame -->
    <section class="w-full max-w-screen-lg mt-6">
    
<p class="text-center bb s7">This Week`s Recordings</p>

    <!-- Video 1 -->
    <div data-video="1" class="mt-12 mb-6" style="display: none;">
        <p class="mb-3 text-center bb s4">Monday`s Class</p>
        <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_6cj1gMQm" src="https://media.publit.io/file/NewRecordngs/W-2.1.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>
    
    </div>

    <!-- Video 2 -->
    <div data-video="2" class="mt-12 mb-6" style="display: none;">
        <p class="mb-3 text-center bb s4">Tuesday`s Class</p>
        <p class="mb-3 text-center bb s2">Tuesday`s Class - Updated writing Topic</p>
        <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_ShevjSRG" src="https://media.publit.io/file/video1093390460.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>
        <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_qzuQNSNG" src="https://media.publit.io/file/NewRecordngs/w-2.2.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>


         <!-- Video 3 -->
         <div data-video="3" class="mt-12 mb-6" style="display: none;">
            <p class="mb-3 text-center bb s4">Wednesday`s Class</p>
        <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_dgRX0Joo" src="https://media.publit.io/file/NewRecordngs/W-2.3.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>

         <!-- Video 4 -->
         <div data-video="4" class="mt-12 mb-6" style="display: none;">
            <p class="mb-3 text-center bb s4">Thursday`s Class</p>
            <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_N3GsD11V" src="https://media.publit.io/file/NewRecordngs/W-2.4.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>

         <!-- Video 5 -->
         <div data-video="5" class="mt-12 mb-6" style="display: none;">
            <p class="mb-3 text-center bb s4">Friday`s Class</p>
            <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_Tas0GHZn" src="https://media.publit.io/file/NewRecordngs/W-2.5-Correct.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>
    
    </div>

    
    
    </section>
    
    </section>