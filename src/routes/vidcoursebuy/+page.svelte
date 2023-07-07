<script lang="ts">
  import { onMount } from 'svelte';
  import PaymentButton from './../../lib/components/PaymentButton.svelte';
  import { auth } from './../../lib/firebase';

  let user;
  let productName = 'Video Course 2';
  let price = 1;

  onMount(() => {
    auth.onAuthStateChanged((currentUser) => {
      user = currentUser;
    });
  });

  function handlePaymentSuccess() {
    window.location.href = '/vidcourse';
  }
</script>

{#if user}
  <PaymentButton {productName} {price} on:paymentSuccess={handlePaymentSuccess} />
{:else}
  <p>Please <a href="/loginregister">log in</a> to purchase this course.</p>
{/if}
