<script>
  import { onMount } from 'svelte';
  import { auth } from '$lib/firebase2.js';
  import { doc, getDoc } from "firebase/firestore";
  import { db } from '$lib/firebase2.js';
  import Login from "$lib/reusefire/auth2.svelte"
  import { writable } from 'svelte/store';

  let showMembersOnly = writable(false);

onMount(() => {
  auth.onAuthStateChanged(async user => {
    try {
      if (user) {
        // User is signed in.
        const email = user.email;
        const userDocRef = doc(db, "1users", email);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          // User document doesn't exist.
          showMembersOnly.set(true);
        } else {
          // User document exists, check the "Purchases" subcollection.
          const purchaseDocRef = doc(db, "1users", email, "Purchases", "28augbatch");
          const purchaseDocSnap = await getDoc(purchaseDocRef);

          if (!purchaseDocSnap.exists()) {
            // "28augbatch" document doesn't exist in the "Purchases" subcollection.
            showMembersOnly.set(true);
          }
        }
      } else {
        // User is signed out or not logged in at all.
        showMembersOnly.set(true);
      }
    } catch (error) {
      // An error occurred while accessing Firestore.
      console.error("Error accessing Firestore: ", error);
      showMembersOnly.set(true);
    }
  });
});
</script>

{#if $showMembersOnly}
  
<div id="modalogin" class="mx-1 mt-6 px-20 tiny:px-2 max-w-[980px] text-center pt-8 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800">
  <img class="block mx-auto mb-1 w-14 h-14 imgshadowed" src="/img/Login.svg" alt="clock">
  <h1 class="mx-2 tracking-wider s7 anton">
    <span class="mx-2 s2 montserrat">Members Only Area!</span>
    <br>
    <span class="mx-2 s5 montserrat">Log In to Continue...</span>
    <br> 8777 Programme
  </h1>
  <h3 class="mx-2 mt-2 mb-4 text-xs">
    A track record of <span class="font-bold">400+</span> successful <span class="font-bold">8777 Results</span>
    <span class="hue-rotate-90 imgshadowed s2">✅</span>
  </h3>
  <Login />
  <h1 class="pt-3 pb-2 mx-2 mt-4 font-bold tracking-wider text-gray-100 rounded-t-full s5 bg-neutral-800">Welcome, Learner.</h1>
</div>
{/if}

  