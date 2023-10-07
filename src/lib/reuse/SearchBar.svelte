<script>
    import { onMount } from 'svelte';
    import { db, doc, getDoc } from '$lib/firebase.js';
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';
    let search = '';
    let results = writable([]);
    let loading = false;
    
    const fetchResults = async (search) => {
      if (search) {
        loading = true;
        const docRef = doc(db, '1data', 'pages');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const filtered = Object.values(data).filter(item => item.name.toLowerCase().includes(search.toLowerCase())).slice(0, 8);
          results.set(filtered);
        } else {
          console.log("No such document!");
        }
        loading = false;
      }
    }
  
    const selectResult = (result) => {
  search = '';
  results.set([]); // clear the results
  goto(result.pageLink);
}

    const splitName = (name) => {
  const words = name.split(' ');
  const firstWord = words.shift();
  const restOfName = words.join(' ');
  return { firstWord, restOfName };
}
onMount(() => {
  const closeDropdown = () => results.set([]);
  document.addEventListener('click', closeDropdown);

  return () => {
    document.removeEventListener('click', closeDropdown);
  };
});

    $: fetchResults(search);
  </script>
  
  <div class="relative">
    <input type="text" placeholder="Jump to your destination" bind:value={search} class="w-full px-6 py-2 mx-2 text-xs transition-all bg-white border rounded text-neutral-800 border-neutral-800 focus:outline-none focus:border-maroon-800" />
    {#if $results.length > 0}
    <div class="absolute z-10 w-full mt-1 overflow-auto text-sm bg-white border border-gray-300 rounded" on:click|stopPropagation>

        {#each $results as result (result.name)}
          <div class="flex items-center px-3 py-2 transition-colors cursor-pointer hover:bg-gray-200" on:click={() => selectResult(result)}>
            <img src={`/img/${result.iconLink}`} alt={result.name} class="w-3 h-3 mr-2" />
            <span>
              <strong>{splitName(result.name).firstWord}</strong> {splitName(result.name).restOfName}
            </span>
          </div>
        {/each}
      </div>
    {/if}
    {#if loading}
      <div class="absolute z-10 flex items-center justify-center w-full mt-1 overflow-auto bg-white border border-gray-300 rounded max-h-2/3">
        <span class="loading loading-infinity loading-lg"></span>
      </div>
    {/if}
  </div>