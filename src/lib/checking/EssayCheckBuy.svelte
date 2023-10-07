<script>
    import { onMount } from 'svelte';
    import { auth, db, doc, getDoc, setDoc } from '$lib/firebase';
    import { loadRazorpay, handlePayment } from '$lib/razorpaycall.js';

    
    let essayCount = 5;
    const pricePerEssay = 200;
    let successMessage = '';
  
    const increment = () => {
      essayCount += 1;
    };
  
    const decrement = () => {
      if (essayCount > 5) {
        essayCount -= 1;
      }
    };

    const payNow = async () => {
      const success = await handlePayment('Essay Corrections', essayCount * pricePerEssay);
      if (success) {
        successMessage = 'Payment successful! Your credits have been updated.';
      }
    };

    onMount(() => {
      loadRazorpay();
    });
</script>
  
  <div
      class="flex flex-col max-w-[840px] bg-white border-solid border-x-2 border-neutral-800 border-b-2 py-6 shadow-lg md:w-[840px]"
  >
      <div class="flex flex-row items-baseline self-center">
          <img class="block mx-auto mr-2 w-7 h-7 -scale-x-100" src="/img/CreditCard.svg" alt="clock" />
          <h1
              class="mb-4 text-base font-bold tracking-tighter text-center"
          >
              Checkout
          </h1>
      </div>
      <p class="pl-1 text-[0.80rem] text-center mt-2 pt-2">
          <b data-svelte-h="svelte-203ke9">{essayCount} Essays</b> - {essayCount * pricePerEssay} INR
      </p>
      <div class="flex items-center justify-center mt-3 space-x-4">
          <button
              class="text-white bg-neutral-800 hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-2 text-center flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600"
              on:click={decrement}
          >
              -
          </button>
          <button
              class="text-white bg-neutral-800 hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-2 text-center flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600"
              on:click={increment}
          >
              +
          </button>
      </div>
      <div class="flex items-center justify-center mt-5">
        <button
            class="text-white bg-neutral-800 hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2"
            on:click={payNow}
        >
            Pay Now
        </button>
        {#if successMessage}
  <div class="alert alert-success">
    {successMessage}
  </div>
{/if}
    </div>
  </div>