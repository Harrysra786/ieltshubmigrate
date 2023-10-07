<script>
    import { auth, db } from '$lib/firebase.js';
    import { collection, addDoc } from "firebase/firestore"; 
    import { onMount } from 'svelte';
    import { onAuthStateChanged } from "firebase/auth";
    
    let products = [];
    let email = '';
  
    onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            email = user.email;
            if (email !== 'sra.bathinda@gmail.com') {
                // Redirect to /myhub/notauthorized
                window.location.href = '/myhub/notauthorized';
            }
        } else {
            // Redirect to /myhub/notauthorized if user is not authenticated
            window.location.href = '/myhub/notauthorized';
        }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
});

  
    async function addEntry (event) {
      event.preventDefault();
      try {
          if (auth.currentUser && products.length > 0) {
              for (let product of products) {
                  await addDoc(collection(db, "purchases"), {
                      expiryDate: null,
                      price: "0",
                      product: product,
                      purchaseDate: new Date(),
                      userId: email,
                  });
              }
              
              // reset form values
              products = [];
          } else {
              console.log('User not authenticated or no products selected');
          }
      } catch (e) {
          console.error("Error adding document: ", e);
      }
    }
</script>


  




<form on:submit={addEntry} class="flex flex-col space-y-4">
    <div>
        <label for="userId" class="block text-sm font-medium text-gray-700">
          User UID
        </label>
        <input bind:value={email} class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" id="userId">
    </div>

    <div>
        <label for="product" class="block text-sm font-medium text-gray-700">
          Product
        </label>

        <div class="mt-2 space-y-4">
            <div class="flex items-start">
                <input id="ideasbook" name="product" type="checkbox" value="ideasbook" bind:group={products} class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <label for="ideasbook" class="block ml-3 text-sm text-gray-700">
                    Ideasbook
                </label>
            </div>
            
            <div class="flex items-start">
                <input id="langbook" name="product" type="checkbox" value="langbook" bind:group={products} class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <label for="langbook" class="block ml-3 text-sm text-gray-700">
                    Langbook
                </label>
            </div>
            
            <div class="flex items-start">
                <input id="grambook" name="product" type="checkbox" value="grambook" bind:group={products} class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <label for="grambook" class="block ml-3 text-sm text-gray-700">
                    Grambook
                </label>
            </div>
            
            <div class="flex items-start">
                <input id="cuecardbook" name="product" type="checkbox" value="cuecardbook" bind:group={products} class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <label for="cuecardbook" class="block ml-3 text-sm text-gray-700">
                    Cuecardbook
                </label>
            </div>
            
            <div class="flex items-start">
                <input id="part1book" name="product" type="checkbox" value="part1book" bind:group={products} class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <label for="part1book" class="block ml-3 text-sm text-gray-700">
                    Part1book
                </label>
            </div>
            
            <div class="flex items-start">
                <input id="essaybook" name="product" type="checkbox" value="essaybook" bind:group={products} class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <label for="essaybook" class="block ml-3 text-sm text-gray-700">
                    essaybook
                </label>
            </div>

            <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 disabled:opacity-50">
              Add Entry
            </button>
            </form>
            
