<script>
  import { onMount } from 'svelte';
  import { collection, getDocs, query, where } from 'firebase/firestore';
  import { firestore, auth } from './../firebase';

  let purchases = [];

  onMount(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const q = query(collection(firestore, "purchases"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        purchases = querySnapshot.docs.map(doc => doc.data());
      }
    });
  });
</script>

<div class="flex flex-col items-center justify-center space-y-4">
  {#each purchases as purchase}
    <div class="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 lg:w-1/3">
      <h2 class="text-2xl font-bold mb-2">{purchase.product}</h2>
      <p class="text-lg text-gray-600">Price: <span class="font-semibold">{purchase.price}</span></p>
      <p class="text-sm text-gray-500">Purchased on: <span class="font-medium">{purchase.purchaseDate}</span></p>
      <p class="text-sm text-gray-500">Access until: <span class="font-medium">{purchase.expiryDate || 'Lifetime'}</span></p>
    </div>
  {/each}
</div>
