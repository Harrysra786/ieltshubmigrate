<script>
  import { onMount } from 'svelte';
  import { auth, db } from '$lib/firebase2';
  import { collection, doc, getDoc } from 'firebase/firestore';

  export let collectionName;
  export let documentName;
  export let field;

  export let data = '';

  onMount(async () => {
    const docRef = doc(collection(db, collectionName), documentName); // Use collection() and doc() functions
    try {
      const docSnap = await getDoc(docRef); // Use getDoc() function
      if (docSnap.exists()) {
        data = docSnap.data()[field];
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  });
</script>
