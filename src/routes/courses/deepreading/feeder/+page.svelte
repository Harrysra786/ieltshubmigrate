<script>
  import { db, doc, updateDoc, getDoc } from '$lib/firebase.js';
  let paragraphs1 = '';
  let paragraphs2 = '';
  let answers = '';
  let confirmation = '';

  async function submitData() {
    const docRef = doc(db, '1data', 'deepreading');

    // Fetch the existing data
    const docSnap = await getDoc(docRef);

    // Check the last number used
    let lastNumberUsed = 0;
    if (docSnap.exists()) {
      lastNumberUsed = Object.keys(docSnap.data()).reduce((max, key) => Math.max(max, isNaN(Number(key)) ? 0 : Number(key)), 0);
    }

    // Increment the last number used
    const newNumber = lastNumberUsed + 1;

    // Prepare the new data
    const docData = {};
    docData[newNumber] = [newNumber.toString(), paragraphs1, paragraphs2, answers];

    // Update the document
    await updateDoc(docRef, docData);

    // Show confirmation
    confirmation = 'Successfully submitted.';

    // Clear confirmation after 2 seconds
    setTimeout(() => {
      confirmation = '';
    }, 2000);
  }
</script>

<div class="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-light-blue-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <input bind:value={paragraphs1} class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" placeholder="Paragraphs 1">
        </div>
        <div class="mt-4">
          <input bind:value={paragraphs2} class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" placeholder="Paragraphs 2">
        </div>
        <div class="mt-4">
          <input bind:value={answers} class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" placeholder="Answers">
        </div>
        <div class="mt-4">
          <button on:click={submitData} class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
          <p>{confirmation}</p>
        </div>
      </div>
    </div>
  </div>
</div>