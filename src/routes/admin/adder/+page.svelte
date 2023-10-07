<script>
  import { db } from '$lib/firebase.js';
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
  import { onMount } from 'svelte';

  let text = '';
  let code = '';
  let collectionName = '';
  let message = '';

  const addEntry = async () => {
    const id = code.match(/id="([^"]*)/)[1];
    const src = code.match(/src="([^"]*)"/)[1];
    const timestamp = serverTimestamp();
    const entry = { text, id, src, timestamp };

    try {
      await addDoc(collection(db, 'Videos', 'WritingVideos', collectionName), entry);
      message = 'Entry added successfully';
    } catch (e) {
      console.error('Error adding entry: ', e);
      message = 'Error adding entry: ' + e;
    }
  };

  onMount(() => {
    message = '';
  });
</script>

<div class="p-5 bg-white rounded-lg shadow-lg bg-opacity-20 backdrop-blur-md">
<label class="block mb-2">
  <span class="text-gray-700">Text:</span>
  <input class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" type="text" bind:value={text} />
</label>
<label class="block mb-2">
  <span class="text-gray-700">Code:</span>
  <textarea class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" bind:value={code}></textarea>
</label>
<label class="block mb-2">
  <span class="text-gray-700">Collection:</span>
  <select class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" bind:value={collectionName}>
    <option value="">Select a collection</option>
    <option value="videoEntries">videoEntries</option>
    <option value="listeningEntries">listeningEntries</option>
    <option value="readingEntries">readingEntries</option>
    <option value="speakingEntries">speakingEntries</option>
  </select>
</label>
<button class="px-4 py-2 mt-3 text-white transition-colors duration-200 bg-blue-500 rounded hover:bg-blue-600" on:click={addEntry}>Add</button>
{#if message}
  <div class="p-2 mt-3 text-white bg-green-500 rounded">{message}</div>
{/if}
</div>
