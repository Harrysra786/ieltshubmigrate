<script>
  import { onMount} from 'svelte';
  import { doc, getDoc, updateDoc, runTransaction } from "firebase/firestore";
  import { db, auth } from '$lib/firebase'; // import db and auth from firebase.js
  import Paynow from "$lib/reusefire/PaymentButton4.svelte";
  import { onAuthStateChanged } from "firebase/auth";
  let credits = 'X';
  let unsubscribe;
  
  onMount(() => {
  const unsubscribe = onAuthStateChanged(auth, async user => {
    if (user) {
      const encodedEmail = user.email.replace(/\./g, '_').replace(/\@/g, '_');
      const userCreditDoc = doc(db, 'userCredits', encodedEmail);
      const userCreditSnap = await getDoc(userCreditDoc);
      if (userCreditSnap.exists()) {
        credits = userCreditSnap.data().credits;
      }
    }
  });

  // Return a function that will be called when the component is destroyed
  return () => {
    unsubscribe();
  };
});

async function handlePaymentSuccess() {
  if (auth.currentUser) {
    const encodedEmail = auth.currentUser.email.replace(/\./g, '_').replace(/\@/g, '_');
    const userCreditDoc = doc(db, 'userCredits', encodedEmail);
    await runTransaction(db, async (transaction) => {
      const userCreditSnap = await transaction.get(userCreditDoc);
      let newCredits;
      if (!userCreditSnap.exists()) {
        newCredits = 10;
        transaction.set(userCreditDoc, { credits: newCredits });
      } else {
        newCredits = userCreditSnap.data().credits + 10;
        transaction.update(userCreditDoc, { credits: newCredits });
      }
    });
    credits += 10;
  }
}

  </script>
  
  <div class="flex items-center justify-center mb-4">
    <div class="flex-row max-w-[900px] mx-5 px-12 py-6 border-2 border-dashed shadow-2xl bg-zinc-100 shadow-black border-neutral-800">
      <p class="mb-4 text-center s1">You have <b class="text-lg">{credits}</b> essay corrections left.</p>
      <span class="flex items-center justify-center"><Paynow on:paymentSuccess={handlePaymentSuccess} productName="10 Essay Correction Pack" price="999" /></span>
      <span class="flex items-center justify-center mt-4"> 
        <div class="btn4">
    <a href="/bookstore/essaybook/read/getevaluated/sampleresult" class="flex items-center justify-center text-xs justify-items-center">
      <img src="/img/essaysample.svg" class="w-6 h-6 my-1 mr-4 imgshadowed invert-img" alt="Icon" /><b class="text-left">Click here to see a sample correction</b>
    </a></div>
</span>
    </div>
  </div>
  