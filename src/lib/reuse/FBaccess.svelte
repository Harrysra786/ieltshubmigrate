<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { auth, db } from '$lib/firebase2';
  import { collection, doc, getDoc } from 'firebase/firestore';

  export let documentName = '';
  export let field = '';
  export let redirectPath = '/onlinebatch';
  export let collectionName = '';

  let hasAccess = false;

  onMount(async () => {
    // Add a delay to ensure Firebase auth state is initialized
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = auth.currentUser;
    if (user) {
      documentName = user.email;
      const docRef = doc(collection(db, collectionName), documentName);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log('User data:', userData);
        hasAccess = userData && userData[field];
        console.log('Has access:', hasAccess);
        if (!hasAccess) {
          goto(redirectPath);
        }
      } else {
        console.log('No such document!');
        goto(redirectPath);
      }
    } else {
      console.log('No user signed in!');
      goto(redirectPath);
    }
  });
</script>

{#if hasAccess}
  <slot></slot>
{/if}
