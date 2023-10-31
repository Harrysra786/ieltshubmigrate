<script>
	import Loginmodal from '$lib/reusefire/LoginModal.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { handlePayment, loadRazorpay } from '$lib/razorpaycallreading.js';
	import { onAuthStateChanged } from 'firebase/auth';
	
	import { auth } from '$lib/firebase';
	
	let productName = 'ReadingCourse';
	let price = 4500;
	let couponCode = '';
	let isCouponValid = false;
	let discountedPrice = price;
	let isCouponApplied = false;
	let showPaySlider = false;
	let showLoginModal = false;
	let user = null;
	
	onMount(async () => {
	  onAuthStateChanged(auth, (currentUser) => {
		user = currentUser;
	  });
	
	  loadRazorpay();
	});
	
	function applyCoupon() {
	  isCouponApplied = true;
	  if (couponCode.toUpperCase() === 'XYDLS2023') {
		discountedPrice = 1500;
		productName = 'ReadingCourse'
		isCouponValid = true;
	  } else {
		isCouponValid = false;
	  }
	}
	
	async function checkUserAndHandlePayment() {
	  if (user) {
		showLoginModal = false;
		handlePayment(productName, discountedPrice);
	  } else {
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
			<img class="block mx-auto mt-2 w-44 h-44" src="/img/Course app-pana.svg" alt="clock" />
			<h1 class="mx-2 text-3xl tracking-wider">
				<span class="mx-2 s5">Hardev Sir's</span> <br />
				<span class="s5 bb">Reading Improvement</span> <br />
				<span class="mx-2 text-[2.62rem] font-extrabold">
					Mastercourse
				</span> 
			</h1>
			<div class="flex flex-row justify-center mx-2 mt-2">
			<h3 class="mr-1 text-xs">
				The Most <b>Practical</b> and <b>To-the-point</b> Reading Improvement Course. <u>Guaranteed!</u></h3>
				<img class="block w-5 h-5" src="/img/Secure.svg" alt="clock" />
			</div>
			
			<div class="flex items-baseline justify-center mx-4">
				<h1
					class="pr-2 mt-6 text-xs font-bold underline decoration-dashed underline-offset-[3px] decoration-red-700"
				>
					Limited Time Discount. Get 66% off! Use Coupon Code:
				</h1>
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
		
			<div class="flex flex-col items-center justify-center w-full mb-4 space-y-2">
				<!-- Main section three steps -->
				<section class="flex items-center justify-center mt-9">
					<div
						class="px-3 mb-5 py-6 border-2 border-dashed rounded lg:px-0 border-neutral-800 max-w-[880px]"
					>
						<!-- Title -->
						<p class="text-xs text-center"><span class="text-base font-extrabold text-red-800">15 Lessons</span> Covering Important Tips and Strategies</p>
						<h1 class="mt-2 mb-6 text-lg font-black tracking-tighter text-center">
							Each Lesson Follows Three Simple Steps
						</h1>

						<div
							class="flex flex-col lg:flex-row max-w-[800px] px-6 justify-center items-center lg:items-start"
						>
							<!-- Step 1 -->
							<div
								class="flex flex-col p-3 border border-solid rounded-md border-neutral-800 lg:max-w-[190px]"
							>
								<h1 class="text-sm font-bold tracking-tighter text-center">The Tips Video</h1>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/selectit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									A carefully crafted video explaining how to effectively tackle one specific part of the IELTS Reading test.
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
								<h1 class="text-sm font-bold tracking-tighter text-center">The Exercise</h1>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/writeit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									An exercise for the same part of the reading test, so that you can try to implement the suggested strategy.
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
								<h1 class="text-sm font-bold tracking-tighter text-center">The Solution Video</h1>
								<img
									class="block w-20 h-20 mx-auto mb-4 imgshadowed"
									src="/img/submitit.svg"
									alt="clock"
								/>
								<p class="pl-1 text-[0.70rem] text-left">
									A walkthrough video by Hardev Sir as he undertakes the same exercise using the strategies highlighted earlier.
								</p>
							</div>
						</div>
					</div>
				</section>
			
				<p class="pl-4 text-xs text-left">
					<b>Still have doubts? </b>Don't hesitate to contact us. Click the button below.
				</p>
				<a
					href="https://wa.me/+918528723949?text=Hi%2C%20Sir.%20I%20need%20some%20more%20information%20about%20your%20reading%20improvement%20course."
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
					<h1 class="mb-4 text-base font-bold tracking-tighter text-center">Checkout</h1>
				</div>
				<p class="pl-1 text-[0.80rem] text-center mt-2 pt-2">
          <b>IELTS Reading Improvement Mastercourse</b> - 
          {#if isCouponValid}
		  <div class="flex flex-col">
            <span><s class="font-extrabold text-red-500">{price} INR</s></span> <span class="text-3xl font-extrabold text-green-700">{discountedPrice} INR</span></div>
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
			<div class="flex items-baseline justify-center mb-1">
				
				<button 
				on:click={() => showPaySlider = true}
				class="text-white bg-neutral-800 hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mt-1 s-zald5Mqjm0Sf">
				Buy Now
				</button>
				
						</div>
			<h1 class="px-3 pt-2 pb-2 pl-6 text-xs font-normal text-left text-neutral-800">
				This course is backed by  <b>hundreds of successful results</b>, students who saw improvements from 0.5 to 1.5 band within one week.Unlike, many other IELTS courses, it is based on <b>tried and tested tips and strategies </b>tested with students from the Indian subcontinent over a period of 10+ years.You will see  <b>immediate results! </b>			</h1>
			
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
