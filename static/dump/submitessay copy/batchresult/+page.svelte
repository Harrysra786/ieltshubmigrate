<script>
    import { onMount } from 'svelte';
    import Batchresult from "./../../../lib/components/batchessayresult.svelte";
    import { signIn, checkUserAuthentication } from './../../../lib/authService';

let isLoggedIn = false;

onMount(async () => {
  isLoggedIn = await checkUserAuthentication();
});
  </script>
  
  

  
  {#if isLoggedIn}
  <Batchresult />
  {:else}
  You need to be logged in to access this Page.
  {/if}
  
  
