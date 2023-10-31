<script>
	import ResultDisplay from '$lib/reuse/ResultsCarousel.svelte';
	import Testimonials from '$lib/reuse/Testimonials.svelte';
	import { concurrent } from 'svelte-typewriter';
</script>

<body class="flex justify-center">
	<section class="flex flex-col items-center justify-center">
		<!-- Main Title -->

		<div class="flex flex-col items-center justify-center px-8 mb-4">
			<h1 class="relative z-10 mt-[80px] font-extrabold text-5xl">Super<span class="underline decoration-lime-400">charge</span> <span class="shine">Your</span><br>IELTS Prep <span class="text-sky-600">With</span> <span class="absolute translate-x-[8px]">🤳</span></h1>
			<p
				use:concurrent={{ interval: 30, delay: 500 }}
				class="px-6 mt-2 font-sans text-sm leading-6 tracking-tight text-left sm:text-sm sm:leading-6 text-neutral-700"
			>
				The <b>right guidance</b> and <b>targeted study material.</b>
			</p>
		</div>
		<p class="px-5 mt-6 text-center shadow-lg border-y border-y-neutral-800 ">Start Now <br><span class="text-xl imgshadowed">👇🏻</span> </p>
<a href="/enroll" class=""><img class="flex w-56 h-56 mt-2 mb-4 cursor-pointer imgshadowed rounded border-[#F4C64E] border-4" src="/img/NewCourse.png" alt="clock"></a>
		<p class="mt-8 mb-4 text-sm font-bold text-zinc-800">Take A Look At What's On Offer</p>

		<!-- 6 items - Books, Course, Corrections, Free stuff -->
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
			<a href="/bookstore" class="cursor-pointer shadow-pop-br">
			<div
				class="flex flex-col p-3 border border-solid rounded border-neutral-800 lg:max-w-[190px]"
			>
				<p
					class="text-sm font-bold tracking-tighter text-center s-j1AwrB440qqP"
					data-svelte-h="svelte-7p08mo"
				>
					The Bookstore
				</p>
				<img
					class="block w-20 h-20 mx-auto mb-4 imgshadowed s-j1AwrB440qqP"
					src="/img/mainbookstore.svg"
					alt="clock"
				/>
				<p class="pl-1 text-xs text-left s-j1AwrB440qqP" data-svelte-h="svelte-1ddxqty">
					Unlock IELTS Success, One Book at a Time!
				</p>
			</div>
		</a>
			<a href="/bookstore" class="cursor-pointer shadow-pop-br">
			<div
				class="flex flex-col p-3 border border-solid rounded border-neutral-800 lg:max-w-[190px]"
			>
				<p
					class="text-sm font-bold tracking-tighter text-center s-j1AwrB440qqP"
					data-svelte-h="svelte-7p08mo"
				>
					The Courses
				</p>
				<img
					class="block w-20 h-20 mx-auto mb-4 imgshadowed s-j1AwrB440qqP"
					src="/img/maincourses.svg"
					alt="clock"
				/>
				<p class="pl-1 text-xs text-left s-j1AwrB440qqP" data-svelte-h="svelte-1ddxqty">
					Reach Your Goals Through Interactive Learning
				</p>
			</div>
			</a>

			<a href="/markingservice" class="cursor-pointer shadow-pop-br">
			<div
				class="flex flex-col p-3 border border-solid rounded border-neutral-800 lg:max-w-[190px]"
			>
				<p
					class="text-sm font-bold tracking-tighter text-center s-j1AwrB440qqP"
					data-svelte-h="svelte-7p08mo"
				>
					The Corrections
				</p>
				<img
					class="block w-20 h-20 mx-auto mb-4 imgshadowed s-j1AwrB440qqP"
					src="/img/maincorrections.svg"
					alt="clock"
				/>
				<p class="pl-1 text-xs text-left s-j1AwrB440qqP" data-svelte-h="svelte-1ddxqty">
					Know Your Weak Points Through Expert Corrections
				</p>
			</div>
		</a>
			<a href="/bookstore" class="cursor-pointer shadow-pop-br">
			<div
				class="flex flex-col p-3 border border-solid rounded border-neutral-800 lg:max-w-[190px]"
			>
				<p
					class="text-sm font-bold tracking-tighter text-center s-j1AwrB440qqP"
					data-svelte-h="svelte-7p08mo"
				>
					Free Stuff
				</p>
				<img
					class="block w-20 h-20 mx-auto mb-4 imgshadowed s-j1AwrB440qqP"
					src="/img/mainfreestuff.svg"
					alt="clock"
				/>
				<p class="pl-1 text-xs text-left s-j1AwrB440qqP" data-svelte-h="svelte-1ddxqty">
					Explore, Learn, and Grow - For absolutely Free
				</p>
			</div>
			</a>

			<a href="/bookstore" class="cursor-pointer shadow-pop-br">
			<div
				class="flex flex-col p-3 border border-solid rounded border-neutral-800 lg:max-w-[190px]"
			>
				<p
					class="text-sm font-bold tracking-tighter text-center s-j1AwrB440qqP"
					data-svelte-h="svelte-7p08mo"
				>
					The Articles
				</p>
				<img
					class="block w-20 h-20 mx-auto mb-4 imgshadowed s-j1AwrB440qqP"
					src="/img/mainarticles.svg"
					alt="clock"
				/>
				<p class="pl-1 text-xs text-left s-j1AwrB440qqP" data-svelte-h="svelte-1ddxqty">
					A knowledge Base of IELTS Insights and Ideas
				</p>
			</div>
			</a>
			<a href="https://t.me/+-QNMMrQnEBM3M2E1" class="cursor-pointer shadow-pop-br">
			<div
				class="flex flex-col p-3 border border-solid rounded border-neutral-800 lg:max-w-[190px]"
			>
				<p
					class="text-sm font-bold tracking-tighter text-center s-j1AwrB440qqP"
					data-svelte-h="svelte-7p08mo"
				>
					Telegram Group
				</p>
				<img
					class="block w-20 h-20 mx-auto mb-4 imgshadowed s-j1AwrB440qqP"
					src="/img/maintelegram.svg"
					alt="clock"
				/>
				<p class="pl-1 text-xs text-left s-j1AwrB440qqP" data-svelte-h="svelte-1ddxqty">
					Let's All Connect and Conquer IELTS Together
				</p>
			</div>
		</a>
		</div>

		<!-- Why IELTS Hub? -->
		<div
			class="flex flex-col items-center w-full p-4 leading-7 text-center md:flex-row text-neutral-800 max-w-[950px] sm:mt-8 mt-2"
			style="border-radius: 50px 50px 0px 0px;"
		>
			<div
				class="flex-shrink-0 w-full max-w-full px-1 pt-12 mx-auto mt-0 leading-7 text-center text-neutral-800"
			>
				<h2
					class="font-sans text-5xl font-bold tracking-normal capitalize xl:text-3xl sm:text-1xl sm:leading-7 text-neutral-700"
					style="line-height: 62px; transition: background 0.3s ease 0s, border 0.3s ease 0s, border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s, -webkit-border-radius 0.3s ease 0s, -webkit-box-shadow 0.3s ease 0s;"
				>
					Why
					<span class="text-center capitalize" style="line-height: 62px;">IELTS Hub?</span>
				</h2>
				<div class="font-sans text-xl leading-6 tracking-normal text-zinc-500">
					Your One Stop Destination For Success
				</div>
			</div>
		</div>

		<div
			class="flex flex-col items-center w-full p-4 leading-7 text-center md:flex-row text-neutral-800 max-w-[950px] mt-2"
			style="border-radius: 50px 50px 0px 0px;"
		>
			<div class="w-1/2 mb-4 max-w-1/2 md:w-1/4 md:mb-0">
				<img
					class="max-h-[200px] max-w-full align-middle"
					alt="img11"
					src="/img/Online learning-amico.svg"
				/>
			</div>
			<div class="w-full md:w-3/4">
				<div class="text-neutral-800">
					<div
						class="px-6 text-lg tracking-normal text-left capitalize verreg text-neutral-800"
					>
						Live / Scheduled Lectures
					</div>
					<div
						class="px-6 font-sans text-sm leading-6 tracking-tight text-left text-neutral-700"
					>
						Join our interactive live classes led by experienced IELTS trainers, where you can ask
						questions, participate in discussions, and receive personalized feedback. <b
							>Can't make it to a live session?</b
						> No worries! Access our extensive library of on-demand videos anytime, anywhere, and study
						at your own pace. Get the best of both worlds with IELTS Hub!
					</div>
				</div>
			</div>
		</div>
		<img src="/img/commecting line.svg" class="mt-4 grayscale" alt="Grayscale image of connecting lines" />
		<div
			class="flex flex-col items-center w-full p-4 leading-7 text-center md:flex-row text-neutral-800 max-w-[950px] mt-2"
			style="border-radius: 50px 50px 0px 0px;"
		>
			<div class="w-full md:w-3/4">
				<div class="text-neutral-800">
					<div
						class="px-6 text-lg tracking-normal text-left capitalize verreg text-neutral-800"
					>
						Experience + Succesful Results = ✅
					</div>
					<div
						class="px-6 font-sans text-sm leading-6 tracking-tight text-left text-neutral-700"
					>
						Make the right decision for your IELTS success by choosing IELTS Hub. With over 10+
						years of experience and thousands of success stories, our track record speaks for
						itself. Hardev Sir and assistant trainers provide a safe and supportive learning
						environment, guiding you every step of the way towards achieving your desired band
						scores.
					</div>
				</div>
			</div>
			<div class="w-1/2 mb-4 max-w-1/2 md:w-1/4 md:mb-0">
				<img
					class="max-h-[200px] max-w-full align-middle"
					alt="img11"
					src="/img/Mathematics-pana.svg"
				/>
			</div>
		</div>

		<img src="/img/commecting line.svg" class="mt-4 rotate-180 grayscale -scale-y-100" />
		<div
			class="flex flex-col items-center w-full p-4 leading-7 text-center md:flex-row text-neutral-800 max-w-[950px]"
			style="border-radius: 50px 50px 0px 0px;"
		>
			<div class="w-1/2 mb-4 max-w-1/2 md:w-1/4 md:mb-0">
				<img
					class="max-h-[200px] max-w-full align-middle"
					alt="img11"
					src="/img/Thesis-amico.svg"
				/>
			</div>
			<div class="w-full md:w-3/4">
				<div class="text-neutral-800">
					<div
						class="px-6 text-lg tracking-normal text-left capitalize verreg text-neutral-800"
					>
						Structured And Targeted Study Material
					</div>
					<div
						class="px-6 font-sans text-sm leading-6 tracking-tight text-left text-neutral-700"
					>
						Carefully curated, our resources are designed to address every aspect of the IELTS exam,
						providing you with targeted content and strategies for maximum results. From practice
						exercises to model answers and exam techniques, our exclusive study material is your key
						to achieving your desired band scores.
					</div>
				</div>
			</div>
		</div>
		<img src="/img/commecting line.svg" class="mt-4 grayscale" alt="Grayscale image of connecting lines" />

		<div
			class="flex flex-col items-center w-full p-4 leading-7 text-center md:flex-row text-neutral-800 max-w-[950px]"
			style="border-radius: 50px 50px 0px 0px;"
		>
			<div class="w-full md:w-3/4">
				<div class="text-neutral-800">
					<div
						class="px-6 text-lg tracking-normal text-left capitalize verreg text-neutral-800"
					>
						Tests On Regular Basis For Progress Tracking
					</div>
					<div
						class="px-6 font-sans text-sm leading-6 tracking-tight text-left text-neutral-700"
					>
						Track your progress with regular tests at IELTS Hub. Our practice tests simulate real
						exam conditions, helping you identify strengths and areas for improvement. Get detailed
						feedback and analysis to fine-tune your study plan. Stay confident on your IELTS journey
						with our progress tracking system. Join IELTS Hub today and achieve your desired scores.
					</div>
				</div>
			</div>
			<div class="w-1/2 mb-4 max-w-1/2 md:w-1/4 md:mb-0">
				<img
					class="max-h-[200px] max-w-full align-middle"
					alt="img11"
					src="/img/Online test-amico.svg"
				/>
			</div>
		</div>
		<div class="mt-6">
			<h2
				class="m-0 font-sans text-2xl font-bold tracking-normal capitalize xl:text-3xl sm:p-4 sm:text-3xl sm:leading-7 text-neutral-700"
			>
				Writing
				<span class="text-center capitalize" style="line-height: 62px;">Band 7+ Achievers</span>
			</h2>
		</div>
		<ResultDisplay />

		<!-- Right Side -->
		<div>
			<h2
				class="px-4 m-0 font-sans text-2xl font-bold tracking-normal text-center capitalize xl:text-3xl sm:p-4 sm:text-3xl text-neutral-700"
			>
				See
				<span class="text-center capitalize" style="line-height: 62px;"
					>What Our Students Have To Say</span
				>
			</h2>
		</div>
		<div>
			<Testimonials />
		</div>

		<!-- Right Side -->
		<div class="mt-10" />

		<!-- Right Side -->
		<div />
	</section>
</body>
