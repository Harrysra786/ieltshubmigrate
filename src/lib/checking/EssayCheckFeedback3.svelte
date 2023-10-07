<script>
  import { onMount, onDestroy } from 'svelte';
  import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
  import { db } from '$lib/firebase.js';
  import SvelteMarkdown from 'svelte-markdown' // adjust the path to match your file structure
  import TextDiff from '$lib/reuse/TextDiff.svelte'; // Adjust the path according to your file structure
  let unsubscribe;
let email = "";
let essaynum = "";
let Topic = "";
let Essay = "";
let Relevance = "";
let Correction = "";
let Scores = "";
let Improved = "";
let emails = [];
let essaynums = [];
let Essaywarn = "";
let Introwarn = "";
let MBP1warn = "";
let MBP2warn = "";
let MBP1MBP2DiffWarn = "";
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
      jsPDF:        { unit: 'mm', format: 'a3', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}

onMount(async () => {
  const module = await import('html2pdf.js');
  html2pdf = module.default;
  // Fetch emails
  const emailQuerySnapshot = await getDocs(collection(db, 'markings')); // Changed from 'markings' to 'essaymarkings'
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
  if (email && essaynum) {
    const docRef = doc(db, 'markings', email, 'essaymarking', 'essay' + essaynum);
  
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      // Combine 'Intro', 'MBP1', 'MBP2', and 'Conc' to form 'Essay'
      Essay = [data.Intro, data.MBP1, data.MBP2, data.Conc].join('<br><br>');
      // Combine 'Introgram', 'MBP1gram', 'MBP2gram', and 'Concgram' to form 'Correction'
      Correction = [data.Introgram, data.MBP1gram, data.MBP2gram, data.Concgram].join('<br><br>');
     
      // Other data remains the same
      Topic = data.Topic || "";
      Relevance = data.Relevance || "";
      Scores = data.Scores || "";
      Improved = data.Improved || "";
      Essaywarn = data.Essaywarn || "";
      Introwarn = data.Introwarn || "";
      MBP1warn = data.MBP1warn || "";
      MBP2warn = data.MBP2warn || "";
      MBP1MBP2DiffWarn = data.MBP1MBP2DiffWarn || "";

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
      const essayQuerySnapshot = await getDocs(collection(db, 'markings', selectedEmail, 'essaymarking')); // Changed from 'markings' to 'essaymarkings'
      essaynums = essayQuerySnapshot.docs.map(doc => doc.id.replace('essay', ''));
      console.log("Fetched essay numbers: ", essaynums);
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
          
      <select class="w-1/2 px-3 py-2 text-base border border-gray-300 rounded-md" bind:value={essaynum} on:change={fetchData}>
        {#each essaynums as essaynumOption}
          <option value={essaynumOption}>{essaynumOption}</option>
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
        Detailed Essay feedback
      </h1>

      
      <div class="flex flex-row">
      </div>
<div class="text-xs" readonly><!-- Doc Name will go here --></div>
      <h1
        class="mx-5 mb-2 font-semibold text-center text-black s1 my-web-font"
      >
       Let's start this journey of learning!
      </h1>
      <div class="flex flex-row items-center mt-3 essay-Type"><img src="/img/essaytopic.svg" class="w-6 h-6 my-1 mr-3 imgshadowed" alt="Icon"> <p class="text-base font-bold">The Essay Topic</p></div>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{Topic}</div></div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/contract.png" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Your Essay Response</p></div>
      <h1
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
      You do not need to read this. It is just here for reference.
      </h1>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div id="original" class="px-6 py-4 topic bg-[#F8F0E3] s2">{@html Essay}</div>
     
      </div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/ontopic.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Task Achievement</p></div>
      <h1
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       Let's see if any of your ideas were off-topic or not full relevant to the topic.
      </h1>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{Relevance}</div></div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/Grammar.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Grammatical And Lexical Issues</p></div>
<h1 class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font">
  Here is an assessment of your essay purely from a grammatical and lexical (vocabulary) perspective.
</h1>
<div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
  <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
  {#if Essay && Correction}
  <div id="comparison" class="px-6 py-4 topic bg-[#F8F0E3] s2">
    <TextDiff {Essay} {Correction} />
  </div>
{/if}

</div>
<h1 class="mx-5 mt-4 text-xs font-normal text-center text-black my-web-font">
  Here is the essay after the above corrections.
</h1>
<div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
  <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
  <div id="correction" class="px-6 py-4 topic bg-[#F8F0E3] s2">{@html Correction}</div>
</div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/score.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Estimated Band Score(s)</p></div>
      <h1
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
      Based on your performance in terms of task coverage, grammatical accuracy and lexical appropriateness, here is an estimation of your score. 
      </h1>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2"><SvelteMarkdown class="prose" source={Scores} /></div></div>
      
      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/improved.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">An Improved-rewrite</p></div>
      <h1
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       Here are my recommendations on how you could have written the same ideas in a slightly better langauge.
      </h1>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
        <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
        <div class="px-6 py-4 topic bg-[#F8F0E3] s2">
          <SvelteMarkdown class="prose" source={Improved} />
        </div>
      </div>
      
      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/star.png" class="w-5 h-5 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Additional Feedback</p></div>
      <h1
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       Here are some additional aspects of your essay you need to pay attention to.
      </h1>
      <div id="additional" class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
        <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
        <div class="px-6 py-4 topic bg-[#F8F0E3] s2">
          <div class="box"><b>1.</b>{Essaywarn}</div><br>
          <div class="box"><b>2.</b>{Introwarn}</div><br>
          <div class="box"><b>3.</b>{MBP1warn}</div><br>
          <div class="box"><b>4.</b>{MBP2warn}</div><br>
          <div class="box">{MBP1MBP2DiffWarn}</div>
        </div>
      </div>
      
</section>

<style>

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

 
</style>
