<script>
    import { onMount } from 'svelte';
    import { collection, getDocs, query, where } from 'firebase/firestore';
    import { firestore, auth } from '$lib/firebase';
    import EssayPage from "$lib/books/EssayBook.svelte";
    let purchased = false;
  
    onMount(async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const q = query(collection(firestore, "purchases"), where("userId", "==", user.uid), where("product", "==", "essaybook"));
          const querySnapshot = await getDocs(q);
          purchased = querySnapshot.size > 0;
        }
      });
    });
  </script>
  
  {#if purchased}


  
  <EssayPage />
  

  {:else}
    <div>
      <p class="mt-6 text-center fade-in">You have not purchased this course yet OR you are not logged in. Please <a class="p-4 mx-2 text-white rounded-md bg-neutral-800" href="/books/essaybook">buy the course</a> or log in to access the content.</p>
    </div>
  {/if}
  