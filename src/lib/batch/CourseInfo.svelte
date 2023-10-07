<script>
	import inView from '$lib/inView';
	import Results from '$lib/reuse/ResultsCarousel.svelte';
	import Testimonials from '$lib/reuse/Testimonials.svelte';

	let animate = false;
	let showModal = false;

    export let mainicon ='Elearning.svg';
    export let thinheading ='THE TARGET';
    export let boldheading ='8777 GENERAL IELTS MASTERCLASS';
    export let claim ='A track record of 400+ successful 8777 Results';

    export let date ='Monday, OCT 1';
    export let time ='6:00 to 9:00 PM';

	export let seats ='6 Students Only'

    export let currency ='INR';
	export let normalfee1 ='12200';
    export let discountfee1 ='10000';
	export let normalfee2 ='24400';
    export let discountfee2 ='15000';


    export let enrolllink ='https://imjo.in/WRn7zp';

    


	import { onMount } from 'svelte';

	onMount(async () => {
		const script = document.createElement('script');
		script.src = 'https://d2xwmjc4uy2hr5.cloudfront.net/im-embed/im-embed.min.js';
		document.body.appendChild(script);
	});

	function handleEnter() {
		animate = true;
	}

	function handleExit() {
		animate = false;
	}
</script>

<section class="flex flex-col items-center justify-center">
    

	<img src="/img/hartrans.png" class="relative w-24 h-24 max-w-3xl mx-auto mt-6" />
	<div
		class="mx-1 px-20 tiny:px-2 max-w-[980px] text-center pt-8 pb-5 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800"
	>
		<img class="block w-16 h-16 mx-auto mb-1 imgshadowed" src="/img/{mainicon}" alt="clock" />
		<h1 class="mx-2 tracking-wider s6 anton">
			<span class="mx-2 s5 montserrat">{thinheading} </span> <br /> {boldheading}
		</h1>
		<h3 class="mx-2 mt-2 mb-4 text-xs">
			{claim} <span class="text-lg imgshadowed">✅</span>
		</h3>
		<div class="flex flex-col items-center justify-center w-full space-y-2">
			<div
				class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105"
			>
				<div class="flex flex-row items-center px-2 space-x-4">
					<img class="block mx-auto w-9 h-9 imgshadowed" src="/img/Deadline.svg" alt="clock" />
					<p class="text-xs font-semibold text-neutral-800">
						<b>Starting</b> <br /> {date}
					</p>
				</div>
			</div>

			<div
				class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105"
			>
				<div class="flex flex-row items-center px-2 space-x-4">
					<img class="block mx-auto w-9 h-9 imgshadowed" src="/img/Examination.svg" alt="clock" />
					<p class="text-xs font-semibold text-neutral-800"><b>Time</b> <br /> {time}</p>
				</div>
			</div>

			<div
				class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105"
			>
				<div class="flex flex-row items-center px-2 space-x-4">
					<img class="block mx-auto w-11 h-11 imgshadowed" src="/img/Alumni.svg" alt="clock" />
					<div class="flex flex-col">
					<p class="text-xs font-semibold text-neutral-800"><b>Total Seats</b></p>
					<p class="mt-2 text-xs font-semibold text-neutral-800">{seats}</p>
				</div>
				</div>
			</div>

			<div
				class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105"
			>
				<div class="flex flex-row items-center px-2 space-x-4">
					
					<div id="discount" class="text-xs font-semibold text-neutral-800">
						<div class="flex flex-row items-center mt-3 space-x-4">
						<img class="flex w-10 h-10 imgshadowed" src="/img/Fees.svg" alt="clock" />
						<p><b>Fee Structure</b> ({currency})</p></div>
						<br />
						<p class="font-bold text-red-600 line-through">Normal Price: <span class="tracking-wider">{normalfee1}</span></p>
						<div
							class="relative p-2 mt-2 bg-orange-100 border-2 border-dashed rounded border-neutral-600"
						>
							<img
								class="absolute top-0 right-0 transform rotate-180 translate-x-1/2 -translate-y-1/2"
								src="/img/Scissor.svg"
								alt="scissors"
								width="20"
								height="20"
							/>
							{discountfee1} (1 Month)
						</div>
						<p class="mt-4 font-bold text-red-600 line-through">Normal Price: <span class="tracking-wider">{normalfee2}</span></p>
						<div
							class="relative p-2 mt-2 bg-orange-100 border-2 border-dashed rounded border-neutral-600"
						>
							<img
								class="absolute top-0 right-0 transform rotate-180 translate-x-1/2 -translate-y-1/2"
								src="/img/Scissor.svg"
								alt="scissors"
								width="20"
								height="20"
							/>
							{discountfee2} (2 Months)
						</div>
					</div>
				</div>
				<p class="w-5/6 mt-4 font-mono text-xs text-left s-pxe8EGBy05UQ">📅 Please note that <b>1 month equals 4 weeks</b> here. 2 Months equal 8 weeks and so on.</p>
				<p class="w-5/6 mt-4 font-mono text-xs text-left s-pxe8EGBy05UQ">💵 The <b>fee discount</b> for 2 months is only applicable if you pay in advance.</p>
			</div>

			<div
				class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105"
			>
				<div class="flex flex-row items-center px-2 space-x-4">
					<img class="block mx-auto w-9 h-9 imgshadowed" src="/img/Teacher.svg" alt="clock" />
					<p class="text-xs font-semibold text-neutral-800">
						<b>Tutors</b> <br /> Hardev Singh <br />Sukhpal Singh
					</p>
				</div>
			</div>
		</div>

		<p class="mt-6 shadow-lg border-y border-y-neutral-800">Scroll down for more details</p>
	</div>
	<div class="mt-6 border-y border-y-neutral-800">
		<Results />
	</div>
	<img
		class="mt-5 w-[40px] h-[40px] animate-bounce imgshadowed mx-auto block"
		data-svelte-h="svelte-1fh0e48"
		src="/img/downdown.svg"
	/>

	<div
		id="overview"
		class="flex flex-col items-center justify-center mt-6 border-2 border-dashed shadow-md p-7 border-zinc-800 shadow-black max-w-[520px] mx-1"
	>
		<img class="block w-12 h-12 mx-auto mb-1 imgshadowed" src="/img/Search (1).svg" alt="clock" />
		<h1 class="mx-2 mb-4 font-extrabold text-center s2">
			<span class="s4">An overview</span> <br />of what the course Includes
		</h1>

		<div class="mt-2">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center px-2 py-1 space-x-4">
					<img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Letters.svg" alt="clock" />
					<p class="text-xs font-bold text-slate-50">The Writing Module</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs"><span class="hue-rotate-90">✅</span> Daily Writing Lessons</p>
				<p class="text-xs"><span class="hue-rotate-90">✅</span> Daily Writing Corrections</p>
			</div>
			<div class="px-4" use:inView on:enter={handleEnter} on:exit={handleExit}>
				<a
					href="general/samplefeedback"
					class="block py-1 px-2 mt-4 text-xs font-medium text-center text-neutral-800 transition bg-[#f8f8f8] rounded shadow hover:shadow-lg hover:text-white hover:bg-neutral-800 imgshadowed focus:outline-none {animate
						? 'scale-up-bottom'
						: ''}"
					><span class="text-lg">👉</span> See Sample Feedback
				</a>
			</div>
		</div>

		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center px-2 py-1 space-x-4">
					<img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Book.svg" alt="clock" />
					<p class="text-xs font-extrabold text-slate-50">The Reading Module</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs"><span class="hue-rotate-90">✅</span> Daily Reading Test</p>
				<p class="text-xs"><span class="hue-rotate-90">✅</span> Daily Reading Discussion</p>
				<p class="text-xs"><span class="hue-rotate-90">✅</span> Tips and Tricks Sessions</p>
			</div>
		</div>

		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center px-2 py-1 space-x-4">
					<img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Conference.svg" alt="clock" />
					<p class="text-xs font-extrabold text-slate-50">The Speaking Module</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs"><span class="hue-rotate-90">✅</span> Tips and Tricks Sessions</p>
				<p class="text-xs"><span class="hue-rotate-90">✅</span> Daily Interviews (optional)</p>
			</div>
		</div>

		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center px-2 py-1 space-x-4">
					<img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Man.svg" alt="clock" />
					<p class="text-xs font-extrabold text-slate-50">The Listening Module</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs"><span class="hue-rotate-90">✅</span> Daily Listening Test</p>
				<p class="text-xs"><span class="hue-rotate-90">✅</span> Tips and Tricks Sessions</p>
			</div>
		</div>

		<p class="px-6 mt-6 mb-3 font-mono text-xs">
			For a detailed overview of the course, please click the button below.
		</p>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			href="./../../../../static/pdf/Details.pdf"
			class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			><div class="flex flex-row items-center px-2 py-1 space-x-4">
				<img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Dashboard.svg" alt="clock" />
				<p class="text-xs font-bold text-slate-50">Detailed Overview</p>
			</div></a
		>
	</div>

	<img
		class="mt-5 w-[40px] h-[40px] animate-bounce imgshadowed mx-auto block"
		data-svelte-h="svelte-1fh0e48"
		src="/img/downdown.svg"
	/>

	<div
		id="overview"
		class="flex flex-col items-center justify-center mt-6 border-2 border-dashed shadow-md p-7 border-zinc-800 shadow-black max-w-[520px] mx-1"
	>
		<img class="block h-12 mx-auto mb-1 w-13 imgshadowed" src="/img/Gift box.svg" alt="clock" />
		<h1 class="mx-2 mb-2 font-extrabold text-center s2">
			<span class="s4">Free Gifts</span> <br />Worth 6000 INR!!
		</h1>
		<p class="mt-1 mb-2 text-xs text-center">
			Limited Time Offer!! If you enroll now, get the following 7 absolutely free!!
		</p>
		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
					<img class="block w-12 h-12 mx-auto imgshadowed" src="/img/Elearning.svg" alt="clock" />
					<p class="text-xs font-bold text-center text-slate-50">
						<span>Gift #1:</span> Complete IELTS Reading Mastercourse
					</p>
					<p
						class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300"
					>
						Worth INR 4500
					</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs text-center">
					A 15 lesson video course including effective tips and strategies to tackle IELTS Reading
				</p>
			</div>
		</div>

		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
					<img class="block w-12 h-12 mx-auto imgshadowed" src="/img/essaybook.png" alt="clock" />
					<p class="text-xs font-bold text-center text-slate-50">
						Gift #2: The Biggest Book of Band 9 IELTS Books
					</p>
					<p
						class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300"
					>
						Worth INR 399
					</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs text-center">
					This ultimate guide, with 577 essay topics and two sample answers each, is your key to
					scoring a Band 9 in the IELTS writing test, catering to all proficiency levels.
				</p>
			</div>
		</div>

		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
					<img class="block w-12 h-12 mx-auto imgshadowed" src="/img/ideasbook.png" alt="clock" />
					<p class="text-xs font-bold text-center text-slate-50">
						Gift #3: The Big Book of Ideas for IELTS Essays
					</p>
					<p
						class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300"
					>
						Worth INR 299
					</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs text-center">
					Across its 12 meticulously crafted chapters and 282 pages, this book delves deeply into
					every conceivable topic that could be asked in the IELTS exam.
				</p>
			</div>
		</div>

		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
					<img class="block w-12 h-12 mx-auto imgshadowed" src="/img/grambook.png" alt="clock" />
					<p class="text-xs font-bold text-center text-slate-50">
						Gift #4: Functional Grammar for IELTS Task 2 Book
					</p>
					<p
						class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300"
					>
						Worth INR 299
					</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs text-center">
					The magic of "Functional Grammar for IELTS Task 2" lies in its unique problem-solving
					perspective. It doesn't just tell you what to do; it shows you how.
				</p>
			</div>
		</div>

		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
					<img class="block w-12 h-12 mx-auto imgshadowed" src="/img/part1book.png" alt="clock" />
					<p class="text-xs font-bold text-center text-slate-50">
						Gift #5: The Biggest Book of Speaking Part 1
					</p>
					<p
						class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300"
					>
						Worth INR 299
					</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs text-center">
					This comprehensive resource, covering an astounding 201 topics, is your ultimate companion
					to mastering the IELTS Speaking Part 1.
				</p>
			</div>
		</div>

		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
					<img class="block w-12 h-12 mx-auto imgshadowed" src="/img/cuebook.png" alt="clock" />
					<p class="text-xs font-bold text-center text-slate-50">
						Gift #6: Band 9 Cue Card Answers Book
					</p>
					<p
						class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300"
					>
						Worth INR 199
					</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs text-center">
					Achieve your Band 9 score with my reliable guide; your dream score is not a pipe dream,
					but an upcoming reality!
				</p>
			</div>
		</div>

		<div class="mt-6">
			<div
				class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"
			>
				<div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
					<img class="block w-12 h-12 mx-auto imgshadowed" src="/img/langbook.png" alt="clock" />
					<p class="text-xs font-bold text-center text-slate-50">Gift #7: Language Booster Book</p>
					<p
						class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300"
					>
						Worth INR 99
					</p>
				</div>
			</div>
			<div class="indent-3">
				<p class="mt-3 text-xs text-center">
					This guide, with 600 English sentences at three levels, is like a personal coach, guiding
					you from basic to expert English.
				</p>
			</div>
		</div>

		<div
			class="fixed bottom-0 z-40 flex justify-center w-full p-4 border-t-2 bg-orange-50 border-neutral-800"
		>
			<a
				href="{enrolllink}"
				class="w-1/2 px-4 py-2 text-center text-white transition-colors duration-200 ease-in-out rounded cursor-pointer md:w-1/3 lg:w-1/4 xl:w-1/6 bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600 active:bg-neutral-900"
				aria-label="Enroll Now">Enroll Now</a
			>
		</div>
	</div>
</section>
<div class="flex items-center justify-center mt-6">
	<Testimonials />
</div>

<div ID="login modal" />

<style>
</style>
