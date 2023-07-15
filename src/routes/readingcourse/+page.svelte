<script>
 import Readvid from "../../lib/components/readingvideos.svelte";

  import { onMount } from 'svelte';
  import { auth } from '../../lib/firebase';

  let allowedEmails = ['sra.bathinda@gmail.com', 'hssielts@gmail.com', 'rrobin1995@yahoo.com', 'avneetlehal@yahoo.com', 'karanjeettsingh@gmail.com', 'amandeep261196@gmail.com', 'ramantoor91@gmail.com', 'bhupinder.bs635@gmail.com', 'arshkaur154@gmail.com', 'robin.chem92@gmail.com', 'nehak3896@gmail.com', 'arshdeepkaur0216@gmail.com', 'sehbazsingh0001@gmail.com', 'arshkaur154@gmail.com', 'gagansuppal021@gmail.com', 'harmandeepsandhu77@gmail.com', 'snitika480@gmail.com'];
  
  let userHasAccess = false;

  onMount(async () => {
    auth.onAuthStateChanged((user) => {
      if (user && allowedEmails.includes(user.email)) {
        userHasAccess = true;
      } else {
        userHasAccess = false;
      }
    });
  });

</script>

{#if userHasAccess}

<Readvid />
{:else}
  <p class="mt-20 mb-20 text-center s6">You do not have access to this page.</p>
{/if}