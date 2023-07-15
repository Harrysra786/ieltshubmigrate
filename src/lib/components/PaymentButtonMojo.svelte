<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { addPurchase } from './../purchaseService'; // import the function
  import { auth } from './../firebase'; // import firebase auth

  export let productName = '';
  export let price = 0;

  let Razorpay;

  const dispatch = createEventDispatcher();

  onMount(async () => {
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.onload = () => {
    Razorpay = window.Razorpay;
    // Rest of your code...
  };
  document.body.appendChild(script);
});


async function handlePayment() {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${import.meta.env.VITE_INSTAMOJO_ACCESS_TOKEN}` // use environment variable
    },
    body: new URLSearchParams({
      purpose: productName,
      amount: price,
      currency: 'INR',
      // Add more parameters as per your requirement
    })
  };

  const response = await fetch('https://api.instamojo.com/v2/payment_requests/', options);
  const paymentRequest = await response.json();

  if (paymentRequest.success) {
    // Redirect to payment URL
    window.location.href = paymentRequest.payment_request.longurl;
  } else {
    console.error('Payment request failed', paymentRequest);
  }
}

</script>

<button class="inline-flex items-center px-4 py-2 mb-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-sm bg-neutral-800 hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none" on:click={handlePayment}>Buy Now</button>