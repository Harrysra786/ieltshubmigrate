<script>
    import { db } from '$lib/firebase.js';
    import { doc, getDoc, collection, query, limit, getDocs, orderBy, startAfter } from "firebase/firestore";
    import { onMount } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown'
    import TextDiff from '$lib/reuse/TextDiff.svelte';
    let html2pdf;
    let timestamp = '';
    let loading = true; // Add loading state
    let currentDoc = null;
    let docs = [];
    let currentIndex = 0;
    let docName = '';
  
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
  
    async function fetchDocs() {
      const docRef = doc(db, "batchessays", "SampleEssayFeedback");
      const docSnap = await getDoc(docRef);
    
      if (docSnap.exists()) {
        docs = [docSnap];
        loadDoc(0);
      } else {
        console.log("No such document!");
      }
    }
    
  
    function loadDoc(index) {
      if (index < 0 || index >= docs.length) return;
      const doc = docs[index];
      const data = doc.data();
      docName = doc.id; // Set docName to the document's id
      timestamp = data.timestamp;
      essaytopiced = data.topic;
      essayresponse = data.intro + "<br><br>" + data.mbp1 + "<br><br>" + data.mbp2 + "<br><br>" + data.conclusion;
      taskachievement = data.ontopic;
      gral = data.gramintro + "<br><br>" + data.grammbp1 + "<br><br>" + data.grammbp2 + "<br><br>" + data.gramconclusion;
      ebs = data.score;
      improved = data.improved;
      essayNum = data.essayNum; // Retrieve essayNum from Firestore
      loading = false; // Set loading to false after data is loaded
  
      // Call fetchEssayData() after essayNum is set
      fetchEssayData();
    }
  
    function nextDoc() {
      loadDoc(currentIndex + 1);
      currentIndex++;
    }
  
    function prevDoc() {
      loadDoc(currentIndex - 1);
      currentIndex--;
    }
  
    onMount(async () => {
      const module = await import('html2pdf.js');
      html2pdf = module.default;
      fetchDocs();
    });
  </script>
  
  
  <section class="flex items-center justify-center bg-white ">
  <div id="review"
        class="flex flex-col items-center px-10 pt-3 pb-6 mx-6 mt-10 bg-white border-2 border-solid rounded-sm border-neutral-900 tiny:mx-6 max-w-[900px]"
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
          src="/img/Hardev Sir Avatar.png"
          class="relative w-24 h-24 mx-auto mt-8 rounded-full imgshadowed"
        />
        <h1
          class="mx-5 mt-5 mb-8 text-4xl font-bold text-center text-black my-web-font"
        >
          Sample Essay feedback
        </h1>
    

        <button class="text-xs btn4" on:click={downloadPdf}><b>Download as PDF</b></button>
        <h1
        class="mx-5 mt-1 mb-4 text-xs font-normal text-center text-black my-web-font"
      >
      Keep it. It's all yours, forever.
      </h1>
        <div class="flex flex-row items-center mt-3 essay-Type"><img src="/img/essaytopic.svg" class="w-6 h-6 my-1 mr-3 imgshadowed" alt="Icon"> <p class="text-base font-bold">The Essay Topic</p></div>
        <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{essaytopiced}</div></div>
  
        <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/contract.png" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Your Essay Response</p></div>
        <h1
          class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
        >
        You do not need to read this. It is just here for reference.
        </h1>
        <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div id="original" class="px-6 py-4 topic bg-[#F8F0E3] s2">{@html essayresponse}</div></div>
  
  
        <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/ontopic.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Task Achievement</p></div>
        <h1
          class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
        >
         Let's see if any of your ideas were off-topic or not full relevant to the topic.
        </h1>
        <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{taskachievement}</div></div>
  
        <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/Grammar.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Grammatical And Lexical Issues</p></div>
  <h1 class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font">
    Here is an assessment of your essay purely from a grammatical and lexical (vocabulary) perspective.
  </h1>
  <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
    <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
    <div id="comparison" class="px-6 py-4 topic bg-[#F8F0E3] s2">
      {#if !loading} <!-- Only render TextDiff when not loading -->
        <TextDiff {essayresponse} {gral} />
      {/if}
    </div>
  </div>
  <h1 class="mx-5 mt-4 text-xs font-normal text-center text-black my-web-font">
    Here is the essay after the above corrections.
  </h1>
  <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
    <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
    <div id="correction" class="px-6 py-4 topic bg-[#F8F0E3] s2">
      {@html gral}
    </div>
  </div>
  
      
      
        <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/score.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">Estimated Band Score(s)</p></div>
        <h1
          class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
        >
        Based on your performance in terms of task coverage, grammatical accuracy and lexical appropriateness, here is an estimation of your score. 
        </h1>
        <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] "><div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div> <div class="px-6 py-4 topic bg-[#F8F0E3] s2"><SvelteMarkdown class="prose" source={ebs} /></div></div>
        
        <div class="flex flex-row items-center mt-9 essay-Type"><img src="/img/improved.svg" class="w-6 h-6 my-1 mr-2 imgshadowed" alt="Icon"> <p class="text-base font-bold">An Improved-rewrite</p></div>
        <h1
          class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
        >
         Here are my recommendations on how you could have written the same ideas in a slightly better langauge.
        </h1>
        <div class="mt-2 border-2 rounded border-neutral-800 overflow-clip bg-[#F8F0E3] ">
          <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]"></div>
          <div class="px-6 py-4 topic bg-[#F8F0E3] s2">
            {#if improved}
            <SvelteMarkdown class="prose" source={improved} />
  
            {/if}
          </div>
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