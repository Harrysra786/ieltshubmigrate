<script>
  import { writable } from 'svelte/store';
  import { db, doc, addDoc, updateDoc, deleteDoc } from '$lib/firebase.js';

  export let collection;
  export let docId;
  export let data;
  export let operation;
  export let successMessage = 'Operation successful';
  export let errorMessage = 'Operation failed';

  const status = writable('');

  const performOperation = async () => {
    try {
      const docRef = doc(db, collection, docId);
      switch(operation) {
        case 'add':
          await addDoc(docRef, data);
          break;
        case 'update':
          await updateDoc(docRef, data);
          break;
        case 'delete':
          await deleteDoc(docRef);
          break;
        default:
          throw new Error('Invalid operation');
      }
      status.set(successMessage);
    } catch (error) {
      console.error(error);
      status.set(errorMessage);
    }
  }

  performOperation();
</script>

<p>{$status}</p>
