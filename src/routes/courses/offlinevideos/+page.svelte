<script>
  import Coursecontent from "../../../lib/components/offlinecontent.svelte";
  import { onMount } from 'svelte';
  import { auth } from '../../../lib/firebase';

  let allowedEmails = ['sra.bathinda@gmail.com', 'hssielts@gmail.com', 'singhgurjotbaragudha@gmail.com', 'kajalarora67000@gmail.com', 'bhavjotsingh184@gmail.com'];
  
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
<Coursecontent />
{:else}
  <p class="text-center mt-20 mb-20 s6">You do not have access to this page. Please message Hardev Sir.</p>
{/if}