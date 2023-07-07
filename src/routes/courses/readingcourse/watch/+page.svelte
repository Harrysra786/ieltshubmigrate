<script>
    import { onMount } from 'svelte';
    import { collection, getDocs, query, where } from 'firebase/firestore';
    import { firestore, auth } from '../../../../lib/firebase';
    import Readvid from "../../../../lib/components/readingvideos.svelte";
  
    let purchased = false;
  
    onMount(async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const q = query(collection(firestore, "purchases"), where("userId", "==", user.uid), where("product", "==", "Reading course"));
          const querySnapshot = await getDocs(q);
          purchased = querySnapshot.size > 0;
        }
      });
    });
    
    </script>

    <Readvid />
