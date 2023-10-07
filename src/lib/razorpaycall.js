import { auth, db, doc, getDoc } from '$lib/firebase'; // import firebase auth and firestore
import { setDoc } from "firebase/firestore";

let Razorpay;

export async function loadRazorpay() {
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.onload = () => {
    Razorpay = window.Razorpay;
  };
  document.body.appendChild(script);
}

export async function handlePayment(productName, price) {
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
      // Log the purchase to Firestore
      const purchase = {
        product: productName,
        price: price,
        purchaseDate: new Date(),
      };
      const userDoc = doc(db, '1users', auth.currentUser.email);
      const purchaseDoc = doc(userDoc, 'Purchases', productName);
      await setDoc(purchaseDoc, purchase);
      
      // Add or update credits in Firestore
      const creditDoc = doc(userDoc, 'Purchases', 'EssayCredits');
      const creditSnapshot = await getDoc(creditDoc);
      let currentCredits = creditSnapshot.exists() ? creditSnapshot.data().Credits : 0;
      currentCredits += 5; // Add 5 credits
      await setDoc(creditDoc, { Credits: currentCredits });
    },
    ...order,
    currency: 'INR',
    amount: price * 100, // Razorpay uses paise, multiply by 100
  });

  newRazorpay.open();
}
