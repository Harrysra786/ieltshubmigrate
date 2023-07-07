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
<section class="flex justify-center items-center">

    <!-- Inner Frame -->
    <section class="w-full max-w-screen-lg mt-6">
    
<p class="text-center bb s7">This Week`s Recordings</p>

    <!-- Video 1 -->
    <div data-video="1" class="mb-6 mt-12" style="display: none;">
        <p class="text-center bb s4 mb-3">Monday`s Class</p>
        <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_eSS3r4ZV" src="https://media.publit.io/file/NewRecordngs/W-3.1.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>
    
    </div>

    <!-- Video 2 -->
    <div data-video="2" class="mb-6 mt-12" style="display: none;">
        <p class="text-center bb s4 mb-3">Tuesday`s Class</p>
        <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_ZVHivj8S" src="https://media.publit.io/file/NewRecordngs/W-3.2-updated.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>

        </div>

         <!-- Video 3 -->
         <div data-video="3" class="mb-6 mt-12" style="display: none;">
            <p class="text-center bb s4 mb-3">Wednesday`s Class</p>
            <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50.7%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_b0Qavr5H" src="https://media.publit.io/file/NewRecordngs/W-3.3-new.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>
            
         <!-- Video 4 -->
         <div data-video="4" class="mb-6 mt-12" style="display: none;">
            <p class="text-center bb s4 mb-3">Thursday`s Class</p>
        <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_wT6p2Sqs" src="https://media.publit.io/file/W-3.1.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>

         <!-- Video 5 -->
         <div data-video="5" class="mb-6 mt-12" style="display: none;">
            <p class="text-center bb s4 mb-3">Friday`s Class</p>
        <div><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;" ><iframe id="pv_wT6p2Sqs" src="https://media.publit.io/file/W-3.1.html?player=onlinerec" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe></figure></div></div>
    
    </div>

    
    
    </section>
    
    </section>