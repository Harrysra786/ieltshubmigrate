<script>
    import { onMount } from 'svelte';
    import { db } from '$lib/firebase.js';
    import { collection, getDocs, orderBy, query } from 'firebase/firestore';
    import Video from './GenVideo.svelte';
  
    let videos = [];
    let loading = true;
    let collectionName = 'videoEntries'; // Change this to the subcollection you want to read from
  
    onMount(async () => {
      const q = query(collection(db, 'Videos', 'WritingVideos', collectionName));


  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    videos.push(doc.data());
  });

  loading = false;
});
  </script>
  
  <section>
    <div class="flex justify-center mt-6 col items center">
      <div class="flex flex-col max-w-[900px] mx-1 ">
        <p class="mb-3 text-center bb s7">Daily Class Recordings</p>
        <div class="px-4 pt-6 mt-6 border-2 border-dashed rounded border-neutral-800">
          <p class="px-4 py-2 mb-6 font-semibold text-center text-white s4 bg-neutral-800 ">Watch Below</p>
          {#if loading}
            <p>Loading...</p>
          {:else}
            {#each videos as video (video.id)}
              <Video {video} />
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </section>
  