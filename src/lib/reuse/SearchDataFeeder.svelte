<script>
    import { db, doc, updateDoc, getDoc } from '$lib/firebase.js';
    
    let data = Array.from({length: 10}, () => ({ iconLink: '', name: '', pageLink: '' }));
  
    const submitData = async () => {
      // Filter out empty objects from the data array
      const filledData = data.filter(row => row.iconLink || row.name || row.pageLink);
  
      // Get the current 'pages' document
      const docRef = doc(db, '1data', 'pages');
      const docSnap = await getDoc(docRef);
  
      // Start from the next page if the 'pages' document already exists
      let startIndex = docSnap.exists() ? Object.keys(docSnap.data()).length : 0;
  
      // Create an object from the filled data array
      const pagesData = filledData.reduce((acc, curr, index) => {
        acc[`page${startIndex + index + 1}`] = curr;
        return acc;
      }, {});
  
      // Update the 'pages' document with the new data
      await updateDoc(docRef, pagesData);
    }
  </script>
  
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-4/5 p-6 mt-10 bg-white rounded shadow-lg md:w-2/3 lg:w-1/2 xl:w-1/3">
      <h2 class="mb-4 text-2xl font-bold text-center">Data Feeder</h2>
      {#each data as row, index (index)}
        <div class="grid grid-cols-3 gap-4 mb-4">
          <input type="text" bind:value={row.iconLink} placeholder="Icon Link" class="px-3 py-2 transition-all border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
          <input type="text" bind:value={row.name} placeholder="Name" class="px-3 py-2 transition-all border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
          <input type="text" bind:value={row.pageLink} placeholder="Page Link" class="px-3 py-2 transition-all border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
      {/each}
      <button class="w-full py-2 text-white transition-colors bg-indigo-500 rounded shadow hover:bg-indigo-600" on:click={submitData}>Submit</button>
    </div>
  </div>
  