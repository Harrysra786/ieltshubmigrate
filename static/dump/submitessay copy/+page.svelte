<script>
  import { onMount } from 'svelte';
  import Essaycheck from "./../../lib/components/batchessaycheck.svelte";
  import { signIn, checkUserAuthentication } from './../../lib/authService';

  let isLoggedIn = false;

  onMount(async () => {
    isLoggedIn = await checkUserAuthentication();
  });
</script>

{#if isLoggedIn}
<Essaycheck />
{:else}
You need to be logged in to submit!
{/if}
