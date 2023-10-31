<script>
	import { getAuth } from 'firebase/auth';
	import {
		getFirestore,
		doc,
		setDoc,
		collection,
		getDoc,
		serverTimestamp,
		getDocs,
		increment,
		updateDoc
	} from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/firebase.js';
	import { essayTopic } from '$lib/store';
	import TextArea from '$lib/reuse/textareanarrow.svelte';
	import Topicselector from '$lib/reuse/topicselector.svelte';
	import { onAuthStateChanged } from 'firebase/auth';

	let credits = 0;
	let loading = true;
	let topic = "";

	onMount(() => {
		const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
			if (user) {
				const creditDocRef = doc(db, '1users', user.email, 'Purchases', 'EssayCredits');
				const creditDoc = await getDoc(creditDocRef);

				if (creditDoc.exists()) {
					credits = creditDoc.data().Credits;
				} else {
					console.log("No such document!");
				}
			} else {
				console.error('User is not logged in');
			}

			loading = false;
		});

		return () => unsubscribe();
	});

	let name = '';
	let essay = "";
	let intro = "";
	let mbp1 = "";
	let mbp2 = "";
	let conclusion = "";

	essayTopic.subscribe((value) => {
		topic = value;
	});

	const handleSubmit = async () => {
		const user = getAuth().currentUser;
		if (!user) {
			console.error('User is not logged in');
			return;
		}

		const userDocRef = doc(db, 'users', user.uid);
		const userDoc = await getDoc(userDocRef);
		const userData = userDoc.data();

		const phone = userData.phoneNumber;
		const email = user.email;
		const time = serverTimestamp();

		const essayCollectionRef = collection(doc(db, 'markings', `${email}`), 'essaymarking');
		const essayCount = (await getDocs(essayCollectionRef)).size;
		const essayDocRef = doc(essayCollectionRef, `essay${essayCount + 1}`);

		await setDoc(essayDocRef, {
			Topic: topic,
			Intro: intro,
			MBP1: mbp1,
			MBP2: mbp2,
			Conc: conclusion,
			Time: time,
			name,
			email,
			uid: user.uid,
			phone
		});

		const creditDocRef = doc(db, '1users', user.email, 'Purchases', 'EssayCredits');
		await updateDoc(creditDocRef, {
			Credits: increment(-1)
		});

		alert('Submission successful!');
	};
</script>

<section class="flex items-center justify-center bg-white">
	<div class="max-w-[840px]">
		<div class="flex flex-col items-center justify-center border-2 border-double rounded-b-[0.250rem] border-x-neutral-800 border-b-neutral-800">
			<div
				class="flex flex-row px-10 pt-2 pb-3 space-x-3 border-b rounded-b-lg border-neutral-800 border-x bg-amber-50"
			>
				<h1
					class="self-center text-sm font-bold tracking-tighter text-center"
					data-svelte-h="svelte-7p08mo"
				>
					Step #1: <span class="pl-2 font-normal">Select The Topic</span>
				</h1>
				<div>
				<img
					class="flex w-8"
					src="/img/selectit.svg"
					alt="clock"
				/></div>
			</div>
			<Topicselector />
			<TextArea
				bind:value={essay}
				id="essay"
				placeholder="Paste your essay here."
				title="Essay"
			/>
		</div>
		<div>
			<div class="flex flex-col items-center justify-center pb-10 mx-2 mt-10 border border-neutral-800">
				<div
					class="flex flex-row px-10 pt-2 pb-3 mb-4 space-x-3 border-b rounded-b-lg border-neutral-800 border-x bg-amber-50"
				>
					<h1
						class="self-center text-sm font-bold tracking-tighter text-center"
						data-svelte-h="svelte-7p08mo"
					>
						Step #2: <span class="pl-2 font-normal">Write & Submit</span>
					</h1>
					<div>
						<img
							class="flex w-8"
							src="/img/selectit.svg"
							alt="clock"
						/>
					</div>
				</div>
				<TextArea
					bind:value={intro}
					id="intro"
					placeholder="Speak or type your introduction here."
					title="Introduction"
				/>
				<TextArea
					bind:value={mbp1}
					id="mbp1"
					placeholder="Speak or type your first main body paragraph here"
					title="Main Body Paragraph 1"
					minHeight="200px"
				/>
				<TextArea
					bind:value={mbp2}
					id="mbp2"
					placeholder="Speak or type your second main body paragraph here"
					title="Main Body Paragraph 2"
					minHeight="200px"
				/>
				<TextArea
					bind:value={conclusion}
					id="conclusion"
					placeholder="Speak or type your conclusion here"
					title="Conclusion"
				/>
				<div class="flex flex-col items-center self-center justify-center mt-2 space-y-3 text-center btext">
					{#if loading}
						<div>Loading...</div>
					{:else if credits > 0}
						<button on:click={handleSubmit} class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm cursor-pointer text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11">
							<img src="/img/Letters.svg" class="w-6 h-6 mr-4 imgshadowed" alt="Icon"> Submit Essay
						</button>
					{:else}
						<div class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 focus:outline-none h-11">
							<img src="/img/Close.svg" class="w-6 h-6 mr-4 imgshadowed" alt="Icon"> No Corrections Left
				  </div>
				{/if}
			  </div>
		</div>
		
	</div>
	
</section>

