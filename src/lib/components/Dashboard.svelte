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
    <div class="w-full p-6 bg-white rounded-lg shadow-md md:w-1/2 lg:w-1/3">
      <h2 class="mb-2 text-2xl font-bold">{purchase.product}</h2>
      <p class="text-lg text-gray-600">Price: <span class="font-semibold">{purchase.price}</span></p>
      <p class="text-sm text-gray-500">Purchased on: <span class="font-medium">{purchase.purchaseDate}</span></p>
      <p class="text-sm text-gray-500">Access until: <span class="font-medium">{purchase.expiryDate || 'Lifetime'}</span></p>
      <a href="./../../books/langbook/read" class="flex px-4 py-2 mt-2 rounded-md max-w-max text-amber-400 hover:underline border-neutral-900 bg-slate-900">Read Now</a>
    </div>
  {/each}
</div>

``