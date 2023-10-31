<script>
	import SampleCorrectionModal from '$lib/reuse/newmodal.svelte';
	import SampleCorrection from '$lib/checking/sampleresult.svelte';
	import Loginmodal from '$lib/reusefire/LoginModal.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { handlePayment, loadRazorpay } from '$lib/razorpaycall.js';
	import { collection, getDocs, doc, updateDoc, Timestamp} from 'firebase/firestore';
	import { onAuthStateChanged } from 'firebase/auth';

	import { db, auth } from '$lib/firebase';
	
	let productName = 'Pack of 10 Essay Correction';
	let price = 2500;
	let couponCode = '';
	let isCouponValid = false;
	let discountedPrice = price;
	let isCouponApplied = false;
	let slots = [];
	let isLoading = true;
	let error = null;
	let showPaySlider = false;
	let showLoginModal = false;
	let user = null;
	
	onMount(async () => {
	  onAuthStateChanged(auth, (currentUser) => {
		user = currentUser;
	  });

	  try {
		const slotsRef = collection(db, 'slots');
		const slotsSnapshot = await getDocs(slotsRef);
		slots = slotsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
		// Periodically check booked slots
		setInterval(checkBookedSlots, 60 * 1000); // Check every minute
	  } catch (e) {
		error = e.message;
	  } finally {
		isLoading = false;
	  }
  
	  loadRazorpay();
	});

	function applyCoupon() {
	  isCouponApplied = true;
	  if (couponCode.toUpperCase() === 'XYDLS2023') {
		discountedPrice = 1;
		productName = '50% Discounted Essay correction'
		isCouponValid = true;
	  } else {
		isCouponValid = false;
	  }
	}
  
	async function checkBookedSlots() {
	  const now = Date.now();
	  const tenMinutes = 10 * 60 * 1000;
	  const freeSlots = slots.filter(slot => slot.status === 'free').length;
  
	  slots.forEach(async slot => {
		if (slot.status === 'booked' && now - slot.bookedAt.toMillis() > tenMinutes && freeSlots < 2) {
		  try {
			// Update slot status in Firestore
			const slotRef = doc(db, 'slots', slot.id);
			await updateDoc(slotRef, { status: 'free' });
  
			// Update local state
			slot.status = 'free';
		  } catch (e) {
			error = e.message;
		  }
		}
	  });
	}
  
	async function handleSlotClick(slot) {
	  if (slot.status === 'free') {
	    showPaySlider = true;
	  }
	}

	async function checkUserAndHandlePayment(productName, price) {
  if (user) {
    showLoginModal = false;
    handlePayment(productName, price);
  } else {
    // show login modal
    console.log('Showing login modal'); // Add this line
    showLoginModal = true;
  }
}

</script>



<section class="flex flex-col items-center justify-center">
	<div>
		<div
			class="relative flex flex-col mx-1 mt-6 lg:px-20 tiny:px-2 max-w-[980px] text-center pt-8 pb-2 border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800 mb-40"
			data-svelte-h="svelte-saezsp"
		>
			<img class="absolute block w-20 h-20 mb-1 -top-1 -left-1" src="/img/banner.png" alt="clock" />
			<img class="block w-20 h-20 mx-auto mt-2 imgshadowed" src="/img/Exam.svg" alt="clock" />
			<h1 class="mx-2 text-3xl tracking-wider anton">
				<span class="mx-2 s5 montserrat">The IELTS Hub's</span> <br />
				Essay Marking Service
			</h1>
			<div class="flex flex-row justify-center mx-2 mt-2">
			<h3 class="mr-1 text-xs">
				The Most <b>Affordable</b> and <b>Detailed</b> Essay Correction Service. <u>Guaranteed!</u></h3>
				<img class="block w-5 h-5" src="/img/Secure.svg" alt="clock" />
			</div>
			<!-- 
			<div class="flex items-baseline justify-center hidden mx-4">
				<p
					class="pr-2 mt-6 text-xs font-bold underline decoration-dashed underline-offset-[3px] decoration-red-700"
				>
					Limited Time Discount. Get 50% off! Use Coupon Code:
				</p>
				<div
					class="text-xs relative p-2 mt-2 bg-orange-100 border-2 border-dashed rounded border-neutral-600 max-w-[150px]"
				>
					<img
						class="absolute top-0 right-0 transform rotate-180 translate-x-1/2 -translate-y-1/2"
						src="/img/Scissor.svg"
						alt="scissors"
						width="20"
						height="20"
					/>
					XYDLS2023
				</div>
			</div>
			Main section three steps -->
			<div class="flex flex-col items-center justify-center w-full mb-4 space-y-2">
				<!-- Main section three steps -->
				<section class="flex items-center justify-center mt-9">
					<div
						class="px-3 py-6 border-2 border-dashed rounded lg:px-0 border-neutral-800 max-w-[880px]"
					>
						<!-- Title -->
						<p class="text-xs text-center">The best essay correction</p>
						<p class="mb-6 text-lg font-black tracking-tighter text-center">
							Is Just 3 Easy Steps Away!
						</p>

						<div
							class="flex flex-col lg:flex-row max-w-[800px] px-6 justify-center items-center lg:items-start"
						>
							<!-- Step 1 -->
							<div
								class="flex flex-col p-3 border border-solid rounded-md border-neutral-800 lg:max-w-[190px]"
							>
								<p class="text-sm font-bold tracking-tighter text-center">Select The Topic</p>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/selectit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									Select from a list of 600 essay topics! Filter essays by type and topic Area, or
									search directly!
								</p>
							</div>
							<img
								class="self-center block m-2 mx-auto rotate-90 lg:rotate-0 w-14 h-14"
								src="/img/Right arrow.svg"
								alt="clock"
							/>
							<!-- Step 2 -->
							<div
								class="flex flex-col p-3 border border-solid rounded-md border-neutral-800 lg:max-w-[190px]"
							>
								<p class="text-sm font-bold tracking-tighter text-center">Write and Submit</p>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/writeit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									Take your time to write. 36 hour time limit for each essay. No
									hurries, no worries.
								</p>
							</div>
							<img
								class="self-center block m-2 mx-auto rotate-90 lg:rotate-0 w-14 h-14"
								src="/img/Right arrow.svg"
								alt="clock"
							/>
							<!-- Step 3 -->
							<div
								class="flex flex-col p-3 border border-solid rounded-md border-neutral-800 lg:max-w-[190px]"
							>
								<p class="text-sm font-bold tracking-tighter text-center">Get The Feedback</p>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/submitit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									In 6 to 12 hours, get ready to be amazed by the most in-depth feedback. Let's start now!
								</p>
							</div>
						</div>
					</div>
				</section>
				<section>
					<img
						class="block w-12 h-12 mx-auto mt-4 mb-2 rotate-180"
						src="/img/arrowup.svg"
						alt="clock"
					/>
				</section>

				<!-- Main section feedback details -->
				<section class="flex items-center justify-center mt-4">
					<div
						class="flex flex-col justify-center items-center px-3 py-6 border-2 border-dashed rounded lg:px-0 border-neutral-800 max-w-[880px] mt-1 mb-4"
					>
						<!-- Title -->
						<p class="pt-2 text-xs text-center">Here is what each one of</p>
						<p class="mb-6 text-lg font-black tracking-tighter text-center">
							The Essay Feedbacks Includes!
						</p>

						<div
							class="flex flex-col max-w-[400px] px-6 justify-center items-center"
						>
							<!-- 1 -->
							<div
								class="flex flex-col w-full p-3 border border-solid rounded-md border-neutral-800"
							>
								<p class="mt-3 text-xs font-bold tracking-tighter text-center">
									All Grammar & Vocabulary Issues
								</p>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/grammedit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									A comprehensive feedback, pointing out every single grammatical mistake and vocabulary  issue. Get to know exactly what's keeping your target score out of your reach.  								</p>
							</div>
							<img
								class="self-center block w-8 h-8 m-2 mx-auto rotate-90 lg:rotate-0"
								src="/img/PlusRound.svg"
								alt="clock"
							/>
							<!-- 2 -->
							<div
								class="flex flex-col w-full p-3 border border-solid rounded-md border-neutral-800"
							>
								<p class="mt-3 text-xs font-bold tracking-tighter text-center">
									Issues related to relevance and flow
								</p>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/flowedit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									Because it is important to stay on topic and to write smoothly. This will ensure your essays are always focused and engaging, increasing your chances of achieving a higher score.
								</p>
							</div>
							<img
								class="self-center block w-8 h-8 m-2 mx-auto rotate-90 lg:rotate-0"
								src="/img/PlusRound.svg"
								alt="clock"
							/>
							<!-- 3 -->
							<div
								class="flex flex-col w-full p-3 border border-solid rounded-md border-neutral-800"
							>
								<p class="mt-3 text-xs font-bold tracking-tighter text-center">
									Detailed Marking Criteria Score
								</p>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/markedit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									ask Achievement, Coherence-Cohesion, Lexical Resource, and Grammar Scores. With this, you'll gain a clear understanding of your strengths and areas for improvement, enabling you to strategize effectively for your next attempt.
								</p>
							</div>
							<img
								class="self-center block w-8 h-8 m-2 mx-auto rotate-90 lg:rotate-0"
								src="/img/PlusRound.svg"
								alt="clock"
							/>
							<!-- 4 -->
							<div
								class="flex flex-col w-full p-3 border border-solid rounded-md border-neutral-800"
							>
								<p class="mt-3 text-xs font-bold tracking-tighter text-center">
									An Improved Re-write Of Your Essay
								</p>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/improvedit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									Every single sentence of your essay re-written in better language. This not only enhances your essay but also provides you with practical examples of how to improve your writing skills.
								</p>
							</div>

							<img
								class="self-center block w-8 h-8 m-2 mx-auto rotate-90 lg:rotate-0"
								src="/img/PlusRound.svg"
								alt="clock"
							/>

							<!-- 5 -->
							<div
								class="flex flex-col w-full p-3 border border-solid rounded-md border-neutral-800"
							>
								<p class="mt-3 text-xs font-bold tracking-tighter text-center">
									A Band 7 and Band 9 Sample Answer
								</p>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/Samples.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									Two expertly written sample answers for you to read and understand. These samples will serve as a roadmap to success, demonstrating the quality of writing expected at each band level.
								</p>
							</div>
						</div>

						<div class="flex flex-row items-center justify-center pt-2 mx-4 mt-4 text-xs">
							<p class="font-normal"><u>Take A Look At A Sample Essay Correction</u></p>
							<p class="pr-1 text-lg imgshadowed heartbeat">👉</p>
							<button>
								<SampleCorrectionModal buttontext="Click">
									<SampleCorrection />
								</SampleCorrectionModal>
							</button>
						</div>
					</div>
				</section>
				<p class="pl-4 text-xs text-left">
					<b>Still have doubts? </b>Don't hesitate to contact us. Click the button below.
				</p>
				<a
					href="https://wa.me/+918528723949?text=Hi%2C%20Sir.%20I%20need%20some%20more%20information%20about%20your%20essay%20correction%20service."
					class="text-[#ecd4d48] transition duration-150 ease-in-out font-sans font-bold text-lg flex justify-center cursor-pointer"
					><img src="/img/WhatsappChat.svg" class="w-32 cursor-pointer imgshadowed" alt="Clickable image of a WhatsApp chat icon" /></a
				>
			</div>
			<div class="px-4 mt-2" />
		</div>
	</div>

	<div class="fixed bottom-0 z-40 flex flex-col justify-center w-full">
		{#if showPaySlider}
		  <div id="payslider" class="flex items-center justify-center mx-4" transition:slide="{{ y: 100 }}">

			<div
				class="flex flex-col w-full p-3 bg-white border-t-2 border-solid rounded-t border-x-2 border-neutral-800 max-w-[500px]"
			>
				<div class="flex flex-row items-baseline self-center pt-3">
					<img class="block mx-auto mr-2 w-7 h-7 -scale-x-100" src="/img/CreditCard.svg" alt="clock" />
					<p class="mb-4 text-base font-bold tracking-tighter text-center">Checkout</p>
				</div>
				<p class="pl-1 text-[0.80rem] text-center mt-2 pt-2">
          <b>Pack of 5 Essays</b> - 
          {#if isCouponValid}
            <s class="text-red-500">{price} INR</s> {discountedPrice} INR
          {:else}
            {price} INR
          {/if}
        </p>
        {#if isCouponApplied && !isCouponValid}
  <p class="text-xs text-center text-red-500">Invalid Coupon Code!</p>
{/if}


				<p class="pl-1 text-[0.80rem] text-center mt-4">Have any Coupon Code?</p>
        <div class="flex flex-row items-center justify-center">
          <div class="flex flex-row items-baseline justify-center">
            <input type="text" bind:value={couponCode} placeholder="Coupon Code" class="w-full px-2 text-center py-2 mx-2 mt-1 text-xs transition-all bg-white border rounded text-neutral-800 border-neutral-800 focus:outline-none focus:border-maroon-800 max-w-[250px]" autocomplete="off">
            <button on:click={applyCoupon} class="text-white bg-neutral-800 hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-1 text-center flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2">Apply</button>
          </div>

        
      </div>
      <div class="flex items-center justify-center">
		<button on:click={() => checkUserAndHandlePayment(productName, discountedPrice)} class="text-white bg-neutral-800 hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mt-5">
			Pay Now
		  </button>
		  
</div>
			</div>
		</div>
    {/if}
	<Loginmodal bind:show={showLoginModal} />
		<div id="bottomnav" class="w-full p-2 border-t-2 bg-orange-50 border-neutral-800">
			<p class="px-3 pt-2 pb-1 text-xs font-normal text-center text-neutral-800">
				In order to <b>maintain quality</b>, I can serve <b>only 5 students</b> at one time. If you
				see a <span class="font-bold text-lime-600">green</span> slot below, <u>click</u> to book it
				before its gone!
			</p>
			<div class="flex items-baseline justify-center mt-1 mb-1 space-x-4">
				{#if isLoading}
  <p>Loading...</p>
{:else if error}
  <p>Error: {error}</p>
{:else}
  {#each slots as slot (slot.id)}
    <button on:click={() => handleSlotClick(slot)}>
      <img class="relative flex w-12 imgshadowed" src={`/img/${slot.status === 'booked' ? 'Booked' : 'BookNow'}.svg`} alt="clock" />
    </button>
  {/each}
{/if}
		</div>
		</div>
	</div>
</section>

<style>
	.card3d {
		background: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
			rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	}
</style>
