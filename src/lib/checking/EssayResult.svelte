<script>
  import { auth, db } from '$lib/firebase.js';
  import { doc, getDoc } from "firebase/firestore";
  import { onMount } from 'svelte';
  import { onAuthStateChanged } from "firebase/auth";
  import SvelteMarkdown from 'svelte-markdown'
  import TextDiff from '$lib/reuse/TextDiff.svelte';
  import BottomInfobox from '$lib/reuse/BottomInfo.svelte';
  let html2pdf;
  let timestamp = '';
  let loading = false; // Add loading state
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

  let essaytopiced = "";
  let essayresponse = "";
  let taskachievement = "";
  let gral = "";
  let ebs = "";
  let improved = "";
  let email = '';
  let essayNum = '';
  let sample9 = "Band 9 sample answer text";
  let sample7 = "Simpler version sample answer text";

  async function fetchEssayData() {
  const response = await fetch('/EssayBook.json');
  const data = await response.json();
  const essays = data.Sheet1; // get the array of essays
  const essay = essays.find(essay => essay.essaynumber === essayNum); // compare numbers

  if (essay) {
  sample7 = essay.essaysample7.replace(/\r\n/g, '<br>');
  sample9 = essay.essaysample9.replace(/\r\n/g, '<br>');
}

}

/*
function isSevenHoursAhead() {
  const currentTime = new Date();
  const timestampDate = new Date(timestamp);
  timestampDate.setHours(timestampDate.getHours() + 6);
  return currentTime >= timestampDate;
}
*/

  onMount(async () => {
    const module = await import('html2pdf.js');
    html2pdf = module.default;




onAuthStateChanged(auth, async (user) => {
  if (user) {
    email = user.email;
    const docRef = doc(db, "essays", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      timestamp = data.timestamp; // Retrieve timestamp from Firestore
      essaytopiced = data.topic;
      essayresponse = data.intro + "<br><br>" + data.mbp1 + "<br><br>" + data.mbp2 + "<br><br>" + data.conclusion;
      taskachievement = data.ontopic;
      gral = data.gramintro + "<br><br>" + data.grammbp1 + "<br><br>" + data.grammbp2 + "<br><br>" + data.gramconclusion;
      ebs = data.score;
      improved = data.improved;
      essayNum = data.essayNum; // Retrieve essayNum from Firestore
      loading = false; // Set loading to false after data is loaded

      // Call fetchEssayData() after essayNum is set
      await fetchEssayData();
    } else {
      console.log("No such document!");
    }
  } else {
    // Redirect to /myhub/notauthorized if user is not authenticated
    window.location.href = '/myhub/notauthorized';
  }
});

// Reactive statement to fetch essay data when essayNum changes
if (essayNum) fetchEssayData();

// Cleanup subscription on unmount
return () => unsubscribe();

  });
</script>

<svelte:head>
    <title>Essay Evaluation Result</title>
    <meta name="description" content="Check you latest essay correction. Work on your mistakes. Ask me if you do not understand a mistake." />
  </svelte:head>

{#if loading} <!-- If loading is true, show the loading element -->
  <div class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden z-[51] bg-amber-300">
    <span class="loading loading-infinity loading-lg"></span></div>
{/if}
<!--
{#if loading && isSevenHoursAhead()} <!-- If loading is true and current time is at least 7 hours ahead of the timestamp, show the loading element 
  <div class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden z-[51] bg-amber-300">
    <span class="loading loading-infinity loading-lg"></span></div>
{:else}
  <div class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden z-[51] bg-neutral-800">
    <div class="w-1/2 pt-5 pb-4 bg-white rounded-lg sm:p-6 sm:pb-4">
      <div class="flex items-center justify-center">
        <img src="/img/Hardev Sir Avatar.png" alt="Avatar of Hardev Sir" class="w-20 h-20 icon imgshadowed" alt="Icon" />
      </div>
      <div class="mt-3 text-center sm:mt-5">
        <h3 class="px-2 text-xs font-medium leading-6 text-left text-gray-900" id="modal-title">Hello there! I understand how excited you must be to receive your corrected essay.<br> But it's still in the process of being reviewed. As soon as it's ready, you'll find it right here. Typically, this process takes between 6 and 12 hours after submission. Thanks for your patience and understanding!</h3></div></div>3
  </div>
{/if} -->

<section class="flex items-center justify-center bg-white ">
<div id="review"
      class="flex flex-col items-center px-10 pb-6 bg-white border-2 border-solid rounded-sm border-neutral-900 tiny:mx-6 lg:min-w-[840px] max-w-[840px]"
    >
    <BottomInfobox />
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/img/Hardev Sir Avatar.png" alt="Avatar of Hardev Sir"
        class="relative w-24 h-24 mx-auto mt-8 rounded-full imgshadowed"
      />
      <h1
        class="mx-5 mt-5 mb-8 text-4xl font-bold text-center text-black my-web-font"
      >
        Detailed Essay feedback
</h1>
      <p
        class="mx-5 mb-8 font-semibold text-center text-black s1 my-web-font"
      >
       Let's start this journey of learning!!<br><br> <p class="text-xs font-normal">Select any word or phrase to see its Hindi and Punjabi Translation!</p>
      <button class="text-xs btn4" on:click={downloadPdf}><b>Download as PDF</b></button>
      <p
      class="mx-5 mt-1 mb-4 text-xs font-normal text-center text-black my-web-font"
    >
    Keep it. It's all yours, forever.
    </p>
      <div class="flex flex-row items-center mt-3 essay-Type"><img src="/img/essaytopic.svg" class="w-6 h-6 my-1 mr-3 imgshadowed" alt="Icon"> <p class="text-base font-bold">The Essay Topic</p></div>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{essaytopiced}</div></div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/contract.png" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Your Essay Response</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
      You do not need to read this. It is just here for reference.
      </p>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div id="original" class="px-6 py-4 topic bg-[#F8F0E3] s2">{@html essayresponse}</div></div>


      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/ontopic.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Task Achievement</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       Let's see if any of your ideas were off-topic or not full relevant to the topic.
      </p>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{taskachievement}</div></div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/Grammar.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Grammatical And Lexical Issues</p></div>
<p class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font">
  Here is an assessment of your essay purely from a grammatical and lexical (vocabulary) perspective.
</p>
<div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
  <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
  <div id="comparison" class="px-6 py-4 topic bg-[#F8F0E3] s2">
    {#if !loading} <!-- Only render TextDiff when not loading -->
      <TextDiff {essayresponse} {gral} />
    {/if}
  </div>
</div>
<p class="mx-5 mt-4 text-xs font-normal text-center text-black my-web-font">
  Here is the essay after the above corrections.
</p>
<div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
  <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
  <div id="correction" class="px-6 py-4 topic bg-[#F8F0E3] s2">
    {@html gral}
  </div>
</div>

    
    
      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/score.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Estimated Band Score(s)</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
      Based on your performance in terms of task coverage, grammatical accuracy and lexical appropriateness, here is an estimation of your score. 
      </p>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2"><SvelteMarkdown class="prose" source={ebs} /></div></div>
      
      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/improved.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">An Improved-rewrite</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       Here are my recommendations on how you could have written the same ideas in a slightly better langauge.
      </p>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
        <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
        <div class="px-6 py-4 topic bg-[#F8F0E3] s2">
          {#if improved}
          <SvelteMarkdown class="prose" source={improved} />

          {/if}
        </div>
      </div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/essaysample.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">My Sample Answer</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       I am sharing two sample answers with you here. One is a Band 9 response and the second one, a simpler re-write of the same essay (just in case you find the first one too difficult to understand)
      </p>
      <div class="flex flex-row items-center mt-4 essay-Type"><img src="/img/band9essay.svg" class="w-5 h-5 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-xs font-bold">Band 9 sample Answer</p></div>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{@html sample9}</div></div>
      <div class="flex flex-row items-center mt-6 essay-Type"><img src="/img/band7essay.svg" class="w-5 h-5 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-xs font-bold">Simpler Version</p></div>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{@html sample7}</div></div>
      
  </div>
</section>

<style>
  .loader {
    border-top-color: #f4c64e;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
  }

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