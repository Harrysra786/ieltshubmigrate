<script>
  import { onMount, onDestroy } from 'svelte';
  import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
  import { db } from '$lib/firebase.js';
  import SvelteMarkdown from 'svelte-markdown' // adjust the path to match your file structure
  import TextDiff from '$lib/reuse/TextDiff.svelte'; // Adjust the path according to your file structure
  let unsubscribe;
  let email = "";
let letternum = "";
let Topic = "";
let Letter = "";
let Lettergram = "";
let LetterAnalysis = "";
let Scores = "";
let emails = [];
let letternums = [];
let loading = true;

let html2pdf;

let downloadPdf = () => {
    let element = document.getElementById('review');
    
    // Set the PDF options
    let opt = {
      margin:       10,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.95 },
      html2canvas:  { scale: 2 },  // Increase the scale for higher resolution
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}

onMount(async () => {
  const module = await import('html2pdf.js');
    html2pdf = module.default;
  // Fetch emails
  const emailQuerySnapshot = await getDocs(collection(db, 'markings'));
  console.log(emailQuerySnapshot); // Log the entire snapshot
  emails = emailQuerySnapshot.docs.map(doc => doc.id);
  console.log("Fetched emails: ", emails);

  // Fetch essay numbers for the first email
  if (emails.length > 0) {
    email = emails[0];
    await fetchDropdownData(email);
  }

  // Set loading to false after fetching data
  loading = false;
});


async function fetchData() {
  loading = true;
  if (email && letternum) {
    const docRef = doc(db, 'markings', email, 'lettermarking', 'letter' + letternum);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      Topic = data.Topic || "";
      Letter = data.Letter || "";
      Lettergram = data.Lettergram || "";
      LetterAnalysis = data.LetterAnalysis || "";
      Scores = data.Scores || "";
    } else {
      console.log('No such document!');
    }
  }
  loading = false;
}


async function fetchDropdownData(selectedEmail) {
  try {
    // Fetch essay numbers for the selected email
    if (selectedEmail) {
      const letterQuerySnapshot = await getDocs(collection(db, 'markings', selectedEmail, 'lettermarking'));
letternums = letterQuerySnapshot.docs.map(doc => doc.id.replace('letter', ''));
console.log("Fetched letter numbers: ", letternums);

    }
  } catch (error) {
    console.error("Error fetching dropdown data: ", error);
  }
}

onDestroy(() => {
  if (typeof unsubscribe === 'function') {
    unsubscribe();
  }
});

</script>

{#if loading} <!-- If loading is true, show the loading element -->
  <div class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden z-[51] bg-amber-300">
    <span class="loading loading-infinity loading-lg"></span></div>
{/if}

<section class="flex items-center justify-center bg-white ">
<div id="review"
      class="flex flex-col items-center px-10 pt-3 pb-2 mx-6 mt-10 bg-white border-2 border-solid rounded-sm border-neutral-900 tiny:mx-6 max-w-[900px]"
    >
    <div class="flex justify-between w-10/12 mb-5">
      <select class="w-1/2 px-3 py-2 text-base border border-gray-300 rounded-md" bind:value={email} on:change={() => fetchDropdownData(email)}>
        {#each emails as emailOption}
          <option value={emailOption}>{emailOption}</option>
        {/each}
      </select>
          
      <select class="w-1/2 px-3 py-2 text-base border border-gray-300 rounded-md" bind:value={letternum} on:change={fetchData}
>
{#each letternums as letternum}




<option value={letternum}>{letternum}</option>


        {/each}
      </select>
    </div>
    <button class="text-xs btn4" on:click={downloadPdf}><b>Download as PDF</b></button>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/img/realavatar.png"
        class="relative w-24 h-24 mx-auto mt-8 rounded-lg"
      />
      <h1
        class="mx-5 mb-3 text-4xl font-bold text-center text-black my-web-font"
      >
        Your Letter feedback
      </h1>

      
      <div class="flex flex-row">
      </div>
<div class="text-xs" readonly><!-- Doc Name will go here --></div>
      <h1
        class="mx-5 mb-2 font-semibold text-center text-black s1 my-web-font"
      >
       Let's start this journey of learning!
      </h1>
      <div class="flex flex-row items-center mt-3 essay-Type"><img src="/img/essaytopic.svg" class="w-6 h-6 my-1 mr-3 imgshadowed" alt="Icon"> <p class="text-base font-bold">The Letter Topic</p></div>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{Topic}</div></div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/contract.png" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Your Letter Response</p></div>
      <h1
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
      You do not need to read this. It is just here for reference.
      </h1>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div id="original" class="px-6 py-4 topic bg-[#F8F0E3] s2">{Letter}</div>
     
      </div>

      

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/Grammar.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Grammatical And Lexical Issues</p></div>
<h1 class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font">
  Here is an assessment of your letter purely from a grammatical and lexical (vocabulary) perspective.
</h1>
<div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
  <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
  {#if Letter && Lettergram}
  <div id="comparison" class="px-6 py-4 topic bg-[#F8F0E3] s2">
    <TextDiff Essay={Letter} Correction={Lettergram} />

  </div>
{/if}

</div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/score.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Estimated Band Score(s)</p></div>
      <h1
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
      Based on your performance in terms of task coverage, grammatical accuracy and lexical appropriateness, here is an estimation of your score. 
      </h1>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2"><SvelteMarkdown class="prose" source={Scores} /></div></div>
      
      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/improved.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Your Ideas and Tone</p></div>
      <h1
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       Here is my feedback related to the ideas you used and the tone you employed.
      </h1>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
        <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
        <div class="px-6 py-4 topic bg-[#F8F0E3] s2">
          {LetterAnalysis}
        </div>
      </div>
    
</section>