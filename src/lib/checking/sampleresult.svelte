<script>
  import { onMount, onDestroy } from 'svelte';
  import { doc, getDoc } from 'firebase/firestore';
  import { db } from '$lib/firebase.js';
  import SvelteMarkdown from 'svelte-markdown' // adjust the path to match your file structure
  import TextDiff from '$lib/reuse/TextDiff.svelte'; // Adjust the path according to your file structure
  let unsubscribe;
  let email = "sra.bathinda@gmail.com";
  let essaynum = "10"; // Default essay number set to '10'
  let Topic = "";
  let Essay = "";
  let Relevance = "";
  let Correction = "";
  let Scores = "";
  let Improved = "";
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
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  }

  onMount(async () => {
    const module = await import('html2pdf.js');
    html2pdf = module.default;

    // Call fetchData function
    await fetchData();
  });

  async function fetchData() {
    console.log("fetchData called"); // Log when function is called
    loading = true;
    const docRef = doc(db, 'markings', email, 'essaymarking', 'essay' + essaynum);
    try {
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
    } catch (error) {
      console.error("Error fetching document: ", error); // Log any errors
    }
    loading = false;
    console.log("fetchData finished"); // Log when function is finished
  }

  onDestroy(() => {
    if (typeof unsubscribe === 'function') {
      unsubscribe();
    }
  });

</script>

<svelte:head>
    <title>Sample Essay Correction</title>
    <meta name="description" content="Transparency is the rule. Check this essay correction to see what you can expect from our essay correction service." />
  </svelte:head>


{#if loading} <!-- If loading is true, show the loading element -->
  <div class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden z-[51] bg-amber-300">
    <span class="loading loading-infinity loading-lg"></span></div>
{/if}
<section class="flex items-center justify-center bg-white ">
<div id="review"
      class="flex flex-col items-center px-10 pt-3 pb-2 mx-6 mt-10 bg-white border-2 border-solid rounded-sm border-neutral-900 tiny:mx-6 max-w-[900px]"
    >

    <button class="text-xs btn4" on:click={downloadPdf}><b>Download as PDF</b></button>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/img/realavatar.png" alt="Hardev Sir Avatar"
        class="relative w-24 h-24 mx-auto mt-8 rounded-lg"
      />
      <h1
        class="mx-5 mb-3 text-4xl font-bold text-center text-black my-web-font"
      >
        Sample Essay feedback
</h1>

      
      <div class="flex flex-row">
      </div>
<div class="text-xs" readonly><!-- Doc Name will go here --></div>
      <p
        class="mx-5 mb-2 font-semibold text-center text-black s1 my-web-font"
      >
       Let's start this journey of learning!
      </p>
      <div class="flex flex-row items-center mt-3 essay-Type"><img src="/img/essaytopic.svg" class="w-6 h-6 my-1 mr-3 imgshadowed" alt="Icon"> <p class="text-base font-bold">The Essay Topic</p></div>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2 text-left">{Topic}</div></div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/contract.png" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Your Essay Response</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
      You do not need to read this. It is just here for reference.
      </p>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div id="original" class="px-6 py-4 topic bg-[#F8F0E3] s2 text-left">{@html Essay}</div>
     
      </div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/ontopic.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Task Achievement</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       Let's see if any of your ideas were off-topic or not full relevant to the topic.
      </p>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2 text-left">{Relevance}</div></div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/Grammar.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Grammatical And Lexical Issues</p></div>
<p class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font">
  Here is an assessment of your essay purely from a grammatical and lexical (vocabulary) perspective.
</p>
<div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
  <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
  {#if Essay && Correction}
  <div id="comparison" class="px-6 py-4 topic bg-[#F8F0E3] s2 text-left">
    <TextDiff {Essay} {Correction} />
  </div>
{/if}

</div>
<p class="mx-5 mt-4 text-xs font-normal text-center text-black my-web-font">
  Here is the essay after the above corrections.
</p>
<div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
  <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
  <div id="correction" class="px-6 py-4 topic bg-[#F8F0E3] s2 text-left">{@html Correction}</div>
</div>

      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/score.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Estimated Band Score(s)</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
      Based on your performance in terms of task coverage, grammatical accuracy and lexical appropriateness, here is an estimation of your score. 
      </p>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2 text-left"><SvelteMarkdown class="prose" source={Scores} /></div></div>
      
      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/improved.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">An Improved-rewrite</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       Here are my recommendations on how you could have written the same ideas in a slightly better langauge.
      </p>
      <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
        <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
        <div class="px-6 py-4 topic bg-[#F8F0E3] s2 text-left">
          <SvelteMarkdown class="prose" source={Improved} />
        </div>
      </div>
      
      <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/star.png" class="w-5 h-5 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Additional Feedback</p></div>
      <p
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       Here are some additional aspects of your essay you need to pay attention to.
      </p>
      <div id="additional" class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
        <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
        <div class="px-6 py-4 topic bg-[#F8F0E3] s2">
          <div class="text-left box"><b>1.</b>{Essaywarn}</div><br>
          <div class="text-left box"><b>2.</b>{Introwarn}</div><br>
          <div class="text-left box"><b>3.</b>{MBP1warn}</div><br>
          <div class="text-left box"><b>4.</b>{MBP2warn}</div><br>
          <div class="text-left box">{MBP1MBP2DiffWarn}</div>
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
