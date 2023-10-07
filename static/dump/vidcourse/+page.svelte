<script>
  import { onMount } from 'svelte';
  import { collection, getDocs, query, where } from 'firebase/firestore';
  import { firestore, auth } from '../../lib/firebase';

  let purchased = false;

  onMount(async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const q = query(collection(firestore, "purchases"), where("userId", "==", user.uid), where("product", "==", "Video Course2"));
        const querySnapshot = await getDocs(q);
        purchased = querySnapshot.size > 0;
      }
    });
  });
</script>

{#if purchased}
  <div>
    <!-- The content of the video course -->
  </div>
{:else}
  <div>
    <p>You have not purchased this course yet. Please <a href="/vidcoursebuy">buy the course</a> to access the content.</p>
  </div>
{/if}
