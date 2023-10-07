<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { addPurchase } from '$lib/purchaseService'; // import the function
  import { auth } from '$lib/firebase'; // import firebase auth
  export let productName = '';
  export let price = 0;

  let Razorpay;
  const dispatch = createEventDispatcher();

  onMount(async () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      Razorpay = window.Razorpay;
    };
    document.body.appendChild(script);
  });

  async function handlePayment() {
    const response = await fetch('/api/razorpay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productName, price }),
    });

    const order = await response.json();

    const newRazorpay = new Razorpay({
      key: import.meta.env.VITE_RAZORPAY_KEY, // use environment variable
      name: productName,
      description: `Pay INR ${price}`,
      handler: async (response) => {
        console.log(response);
        const expiryDate = null; // calculate the expiry date based on the product, null for lifetime access
        const purchase = {
          userId: auth.currentUser.uid, // get the user ID from Firebase auth
          product: productName,
          price: price,
          purchaseDate: new Date(),
          expiryDate: expiryDate
        };
        await addPurchase(purchase);
        dispatch('paymentSuccess');
      },
      ...order,
      currency: 'INR',
      amount: price * 100, // Razorpay uses paise, multiply by 100
    });

    newRazorpay.on('payment.failed', function(response){
      alert('Payment failed. Please contact Hardev Sir directly.');
    });

    newRazorpay.open();
  }
</script>

<button class="inline-flex items-center px-4 py-2 mb-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-sm bg-neutral-800 hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none" on:click={handlePayment}>Buy More</button>
