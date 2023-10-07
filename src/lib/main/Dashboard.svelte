<script>
  import { onMount } from 'svelte';
  import { collection, doc, getDocs } from 'firebase/firestore';
  import { firestore, auth } from '$lib/firebase';

  let purchases = [];

  const productNames = {
    'ideasbook': 'The Big Book of Ideas For IELTS Essays',
    'cuecardbook': 'Band 9 Cue Card Answers - May-Aug 2023',
    'part1book': 'The Big Book of Speaking Part 1 Questions',
    'langbook': 'Language Booster - Simple TO Better TO Best!',
    'grambook': 'Functional Grammar for IELTS Task 2',
    'essaybook': 'The Biggest Book of Band 9 IELTS Essays'
  };

  onMount(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log("User:", user); // Log the user object
      if (user) {
        setTimeout(async () => {
          const userDoc = doc(firestore, "1users", user.email);
          const purchasesCollection = collection(userDoc, "Purchases");
          const querySnapshot = await getDocs(purchasesCollection);
          console.log("Query Snapshot:", querySnapshot); // Log the query snapshot
          purchases = querySnapshot.docs.map(doc => doc.id) // The product name is the document ID
            .filter(product => product in productNames); // Only include products that exist in the productNames object
          console.log("Purchases:", purchases); // Log the purchases array
        }, 1000); // Wait for 2 seconds before fetching the data
      }
    });
  });
</script>


<div class="flex flex-col items-center justify-center space-y-4">
  {#each purchases as purchase}
    <div class="w-full p-6 bg-white rounded-lg shadow-md md:w-1/2 lg:w-1/3">
      <h2 class="mb-2 text-2xl font-bold">{productNames[purchase]}</h2>
      <a href={`/bookstore/${purchase}/read`} class="flex px-4 py-2 mt-2 rounded-md max-w-max text-amber-400 hover:underline border-neutral-900 bg-slate-900">Read Now</a>
    </div>
  {/each}
</div>
