<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { db, auth } from '$lib/firebase';
    import { doc, getDoc } from 'firebase/firestore';
    import { onAuthStateChanged } from 'firebase/auth';
    import Submittask2 from "$lib/batch/Submittask2.svelte";
    import Submittask1 from "$lib/batch/Gensubmittask1.svelte";
    let access = false;
    let selectedTask = null;
  
    onMount(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(db, '28augprofiles', user.email);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            access = docSnap.data().access['Task Submission'];  // replace 'pageName' with the actual page name
          }
  
          if (!access) {
            goto('/myhub/notauthorized');
          }
        }
      });
  
      // Clean up the listener when the component is unmounted
      return unsubscribe;
    });
  
    function selectTask(taskNumber) {
      selectedTask = taskNumber;
    }
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <p class="mt-5 mb-8 text-2xl font-semibold">What kind of masterpiece are we creating today?</p>
    <div class="flex space-x-4">
      <div class="flex flex-row items-center space-x-5">
  
        <a on:click={() => selectTask(1)} class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm cursor-pointer text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11"><img src="/img/cover-letter.png" class="mr-4 w-7 h-7 imgshadowed" alt="Icon"> A Letter</a>
  
        <a on:click={() => selectTask(2)} class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm cursor-pointer text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11"><img src="/img/contract.png" class="mr-4 w-7 h-7 imgshadowed" alt="Icon"> An Essay</a>
  
  
       </div>  </div>
  
    {#if selectedTask === 1}
      <Submittask1 />
    {:else if selectedTask === 2}
      <Submittask2 />
    {/if}
  </div>
  