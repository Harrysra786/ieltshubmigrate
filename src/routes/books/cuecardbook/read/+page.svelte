<script>
    import { onMount } from 'svelte';
    import { collection, getDocs, query, where } from 'firebase/firestore';
    import { firestore, auth } from './../../../../lib/firebase';
  
    let purchased = false;
  
    onMount(async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const q = query(collection(firestore, "purchases"), where("userId", "==", user.uid), where("product", "==", "cuecardbook"));
          const querySnapshot = await getDocs(q);
          purchased = querySnapshot.size > 0;
        }
      });
    });
  </script>
  
  {#if purchased}


  
  <style>.embed-container { position: fixed; top: 0; left: 0; right: 0; bottom: 0; margin: 0; padding: 0; overflow: hidden; width: 100%; max-width: 100%; z-index: 9999999;} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/cuecardbookfinal' style='border:0' allowfullscreen></iframe></div>
  

  {:else}
    <div>
      <p class="mt-6 text-center fade-in">You have not purchased this course yet. Please <a class="p-4 mx-2 text-white rounded-md bg-neutral-800" href="/vidcoursebuy">buy the course</a> to access the content.</p>
    </div>
  {/if}
  