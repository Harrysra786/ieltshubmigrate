<script>
  import { onMount } from 'svelte';
  import { doc, getDoc } from 'firebase/firestore';
  import { firestore, auth } from '$lib/firebase';

  let purchased = false;

  onMount(async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(firestore, "users", user.email, "Purchases", "grambook");
        const docSnap = await getDoc(docRef);
        purchased = docSnap.exists();
      }
    });
  });
</script>

{#if purchased}

<style>.embed-container { position: fixed; top: 0; left: 0; right: 0; bottom: 0; margin: 0; padding: 0; overflow: hidden; width: 100%; max-width: 100%; z-index: 9999999;} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/functional-grammar-for-ielts' style='border:0' allowfullscreen></iframe></div>

{:else}
  <div>
    <p class="mt-6 text-center fade-in">You have not purchased this course yet OR you are not logged in. Please <a class="p-4 mx-2 text-white rounded-md bg-neutral-800" href="/books/grambook">buy the course</a> or log in to access the content.</p>
  </div>
{/if}