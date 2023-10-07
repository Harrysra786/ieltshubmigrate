<script>
  import { getAuth } from "firebase/auth";
  import { getFirestore, doc, setDoc, collection, getDoc, serverTimestamp, getDocs } from "firebase/firestore";
  import { onMount } from 'svelte';
  import { auth, db } from '$lib/firebase.js';
  import Topicselector from '$lib/reuse/topicselector.svelte'
  
  let topic, mbp1, mbp2, conclusion, intro;
  
  const handleSubmit = async () => {
    console.log('handleSubmit called');

    const user = getAuth().currentUser;
    if (!user) {
      console.error('User is not logged in');
      return;
    }

    const userDocRef = doc(db, 'users', user.uid);

    try {
      const userDoc = await getDoc(userDocRef);
      const userData = userDoc.data();
      const name = `${userData.firstName} ${userData.lastName}`;
      const phone = userData.phoneNumber;
      const email = user.email;
      const time = serverTimestamp();

      const essayCollectionRef = collection(doc(db, '1scripts/essaymarking', `${email}`), 'submissions');
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

      alert('Submission successful!');
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };
</script>


<section class="flex items-center justify-center bg-white gridgrad">
	<div class="flex flex-col justify-center items-center w-full max-w-[800px] mt-8">
		<div class="fixed flex justify-start w-full pb-4 pr-4 top-8 inset-x-8">
			<button
				class="px-2 py-2 font-bold text-white rounded-full bg-neutral-500 hover:bg-neutral-800 svelte-1b2p5e6"
				><img src="/img/speech.svg" class="w-8 h-8 cursor-pointer svelte-1b2p5e6" /></button
			>
		</div>
		<div
			class="flex flex-col items-center w-full px-10 pt-3 pb-2 mx-6 mt-10 bg-white border-2 border-solid rounded-sm border-neutral-900 tiny:mx-6"
		>
			<img
				src="/img/Letters.svg"
				class="relative w-24 h-24 mx-auto mt-6 rounded-full imgshadowed"
			/>
			<p class="text-center font-mono text-2xl max-w-[800px] mt-3 mb-1 px-2 sm:px-5 py-2 z-50 mx-2 sm:mx-6">
				Select Your Essay Topic
			</p>
<Topicselector />

			<textarea
				bind:value={intro}
				id="conclusion"
				class="w-11/12 p-4 mt-1 mb-1 bg-white border-2 border-solid rounded resize-y border-neutral-800"
				placeholder="Your Intro here..."
			/>
			<textarea
				bind:value={mbp1}
				id="mbp1"
				class="w-11/12 p-4 mt-1 mb-1 bg-white border-2 border-solid rounded resize-y h-60 border-neutral-800"
				placeholder="Your Main Body Paragraph 1 here..."
			/>
			<textarea
				bind:value={mbp2}
				id="mbp2"
				class="w-11/12 p-4 mt-1 mb-1 bg-white border-2 border-solid rounded resize-y border-neutral-800 h-60"
				placeholder="Your Main Body Paragraph 2 here..."
			/>
			<textarea
				bind:value={conclusion}
				id="conclusion"
				class="w-11/12 p-4 mt-1 mb-1 bg-white border-2 border-solid rounded resize-y border-neutral-800"
				placeholder="Your Conclusion here..."
			/>

			<button
				on:click={handleSubmit}
				class="bg-neutral-800 text-white font-bold py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-black hover:border-solid mt-4"
				>Submit</button
			>
		</div>
	</div>
</section>
