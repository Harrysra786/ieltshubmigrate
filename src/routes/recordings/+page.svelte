<script>
  import Videos1 from "../../lib/components/Videos1.svelte";
  import Videos2 from "../../lib/components/Videos2.svelte";
  import Videos3 from "../../lib/components/Videos3.svelte";
  import Videos4 from "../../lib/components/Videos4.svelte";

  import { onMount } from 'svelte';
  import { auth } from '../../lib/firebase';

  let allowedEmails = ['sra.bathinda@gmail.com', 'hssielts@gmail.com', 'rrobin1995@yahoo.com', 'avneetlehal@yahoo.com', 'karanjeettsingh@gmail.com', 'amandeep261196@gmail.com', 'ramantoor91@gmail.com', 'bhupinder.bs635@gmail.com', 'arshkaur154@gmail.com', 'robin.chem92@gmail.com', 'nehak3896@gmail.com', 'chouhannavdeep456@gmail.com', 'kjot59@gmail.com', 'prabhsimransran75@gmail.com', 'Gagansuppal021@gmail.com', 'chouhannavdeep456@gmail.com', 'sehbazsingh0001@gmail.com', 'gagansuppal021@gmail.com', 'arshdeepkaur0216@gmail.com' ];
  
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

  let isVisible1 = true;
  let isVisible2 = false;
  let isVisible3 = false;
  let isVisible4 = false;
</script>

{#if userHasAccess}
{#if isVisible1}
  <Videos1 />
{/if}
{#if isVisible2}
  <Videos2 />
{/if}
{#if isVisible3}
  <Videos3 />
{/if}
{#if isVisible4}
  <Videos4 />
{/if}

{:else}
  <p class="mt-20 mb-20 text-center s6">You do not have access to this page.</p>
{/if}