<script>
	import { onMount } from 'svelte';
	import { db, getDoc, doc } from '$lib/firebase.js';
	import SvelteMarkdown from 'svelte-markdown';
	import { writable } from 'svelte/store';
	import BottomInfobox from '$lib/reuse/BottomInfo.svelte';
	let data = writable({});
	let currentArrayIndex = writable(1);  // Start with 1, representing the array '1'
    let inputNumber = writable(1);  // Bind this to the input so it shows the number, not the array data
  
  
	onMount(async () => {
		const docRef = doc(db, '1data', 'deepreading');
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			data.set(docSnap.data()); // Fetch the entire document
		} else {
			console.log('No such document!');
		}
	});
  
	const loadPrevious = () => {
    if ($currentArrayIndex > 1) {
        currentArrayIndex.update(n => n - 1);
        inputNumber.set($currentArrayIndex);  // Keep inputNumber in sync
        window.scrollTo(0, 0);  // Scroll to the top of the page
    }
};

const loadNext = () => {
    if ($currentArrayIndex < Object.keys($data).length) {
        currentArrayIndex.update(n => n + 1);
        inputNumber.set($currentArrayIndex);  // Keep inputNumber in sync
        window.scrollTo(0, 0);  // Scroll to the top of the page
    }
};

const loadArray = () => {
    if ($data[inputNumber.toString()]) {
        currentArrayIndex.set(parseInt(inputNumber));
        window.scrollTo(0, 0);  // Scroll to the top of the page
    }
};
</script>

{#if $data && $data[$currentArrayIndex]}

<section class="flex-row items-center justify-center my-10 bg-white">
	
	<div class="flex items-center justify-center">
		<p class="text-center bb s7 max-w-[800px] mt-4 border-neutral-800 border-2 bg-white border-dashed px-5 py-6 z-50 mx-6">
			Hardev Sir's Deep Reading Course
		</p>
	</div>
	<div id="viewport" class="flex items-center justify-center px-2 mt-3">
		<BottomInfobox />
		<div class="max-w-[900px] mx-5 px-12 tiny:px-3 tiny:mx-1 py-6 border-2 border-dashed shadow-2xl bg-white shadow-black border-neutral-800">
			<p class="py-6 mt-4 mb-4 text-3xl font-black text-center">
				Deep Reading Exercise #{ $data[$currentArrayIndex][0] }
			</p>
			<div class="rounded-sm overflow-clip">
				<img src="/img/deepreading/{$data[$currentArrayIndex][0]}.webp" class="mr-4" alt="Icon">
			</div>
			<div class="flex flex-col mt-1">
				<div class="mt-2 border-2 rounded-md border-neutral-800 overflow-clip bg-zinc-100">
					<div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-zinc-100">
						<div class="flex flex-row items-center mt-3 essay-Type">
							<img src="/img/bolt.svg" class="w-6 h-6 my-1 mr-4 imgshadowed" alt="Icon" />
							<p class="text-base font-bold">Exercise</p>
						</div>
					</div>
					<div class="px-6 py-4 topic bg-zinc-100 s2">
						{$data[$currentArrayIndex][1]}
					</div>
					<div class="px-6 py-4 topic bg-zinc-100 s2">
						{$data[$currentArrayIndex][2]}
					</div>
				</div>
				<div class="mt-2 border-2 rounded-md border-neutral-800 overflow-clip bg-zinc-100">
					<div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-zinc-100">
						<div class="flex flex-row items-center mt-2 essay-Type">
							<img src="/img/vote.png" class="mr-4 w-7 h-7 imgshadowed" alt="Icon" />
							<p class="text-base font-bold">Solution</p>
						</div>
					</div>
					<div class="px-6 py-4 topic bg-zinc-100 s2">
						<SvelteMarkdown source={$data[$currentArrayIndex][3]} />
					</div>
				</div>
			</div>
			<nav class="flex flex-row justify-around px-2 py-3 my-2 mb-4 text-base border-2 border-dashed bottom-navigation border-neutral-800 bg-zinc-100">
				<a href=""><img src="/img/Turn left.svg" class="mr-4 w-9 h-9 imgshadowed" alt="Icon" on:click|preventDefault={loadPrevious} /></a>
				<div class="flex items-center space-x-4">
					<input class="w-12 text-center border-2 rounded border-neutral-500" type="number" bind:value={inputNumber} />
    <button class="btn7" on:click|preventDefault={loadArray}><p class="font-bold">Go</p></button>

				</div>
				<a href=""><img src="/img/Turn right.svg" class="mr-4 w-9 h-9 imgshadowed" alt="Icon" on:click|preventDefault={loadNext} /></a>
			</nav>

		</div>
	</div>
</section>
{:else}
    <p>Loading...</p>
{/if}