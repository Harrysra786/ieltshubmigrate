<script>
    import { onMount } from 'svelte';
    import { collection, getDocs, query, where } from 'firebase/firestore';
    import { firestore, auth } from '../../../lib/firebase';
    import Ideasbooktoc from "../../../lib/components/ideasbooktoc.svelte";
  
    let purchased = false;
  
    onMount(async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const q = query(collection(firestore, "purchases"), where("userId", "==", user.uid), where("product", "==", "Ideas Book v2"));
          const querySnapshot = await getDocs(q);
          purchased = querySnapshot.size > 0;
        }
      });
    });
  </script>
  
  {#if purchased}


  
  <Ideasbooktoc />
  



  {:else}
    <div>
      <p class="fade-in text-center mt-6">You have not purchased this course yet. Please <a class="bg-neutral-800 text-white p-4 mx-2 rounded-md" href="/vidcoursebuy">buy the course</a> to access the content.</p>
    </div>
  {/if}
  