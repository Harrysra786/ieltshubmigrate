<script>
  import { onMount } from 'svelte';
  import { auth, db } from '$lib/firebase.js';
  import { goto } from '$app/navigation';
  import { doc, getDoc} from "firebase/firestore"; 

  export let productName;

  let user;
  let isModalOpen = false;
  let hasAccess = false;
  let productLink;

  onMount(async () => {
    auth.onAuthStateChanged(async (currentUser) => {
      user = currentUser;

      if (!user) {
        isModalOpen = true;
      } else {
        // Check if the product is in the user's purchases
        const userDoc = doc(db, 'users', user.email, 'purchases', productName);
        const userDocData = await getDoc(userDoc);

        if (userDocData.exists()) {
          // The user has purchased the product
          hasAccess = true;
        } else {
          // The user has not purchased the product
          // Get the product's buying page link
          const productDoc = doc(db, 'data', 'content', 'products', productName);
          const productDocData = await getDoc(productDoc);

          if (productDocData.exists()) {
            productLink = productDocData.data().link;
            // Ask the user to purchase the product and redirect them to the buying page
            alert('Please purchase the product.');
            goto(productLink);
          }
        }
      }
    });
  });
</script>

{#if isModalOpen}
  <!-- Login Modal goes here -->
{/if}

{#if !isModalOpen && hasAccess}
  <slot />
{/if}
