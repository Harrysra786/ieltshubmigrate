<script>
  import { onMount } from 'svelte';
  import { auth } from '$lib/firebase.js';

  let user;
  let isModalOpen = true;

  onMount(() => {
    auth.onAuthStateChanged((currentUser) => {
      console.log('Auth state changed:', currentUser);
      user = currentUser;

      if (!user) {
        console.log('User is not logged in, opening modal...');
        isModalOpen = true;
      }
    });
  });
</script>


{#if isModalOpen}
  
<div>Hello, world!</div>.

{/if}

{#if !isModalOpen}
<slot />
{/if}