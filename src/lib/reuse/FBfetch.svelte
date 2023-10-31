<script>
  import { onMount } from 'svelte';
  import { db } from '$lib/firebase2';
  import { collection, doc, getDoc } from 'firebase/firestore';

  export let collectionName;
  export let documentName;
  export let field;

  export let data = null;
let docData = null;


onMount(async () => {
    const docRef = doc(collection(db, collectionName), documentName); // Use collection() and doc() functions
    try {
      const docSnap = await getDoc(docRef); // Use getDoc() function
      if (docSnap.exists()) {
        docData = field ? docSnap.data()[field] : docSnap.data();
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
});

$: if (docData !== null) data = docData;


</script>
