<script>
  import { onMount } from "svelte";
  import { auth } from "$lib/firebase";
 
  let userEmail = "";
  let isAuthenticated = false;
 
  onMount(async () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        isAuthenticated = true;
        userEmail = user.email;
      } else {
        isAuthenticated = false;
        userEmail = "";
      }
    });
  });
 </script>
 
 {#if isAuthenticated}
  <p>{userEmail}</p>
 {:else}
  <p>ABC</p>
 {/if}
 