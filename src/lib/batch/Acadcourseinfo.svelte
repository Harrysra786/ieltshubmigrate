
<!--
This component is going to display all the necessary information about the course in a compact way

**Heading:** Complete IELTS MasterClass 

**Tagline:** The most Affordable and reliable IELTS Course

**Start:** Monday, ****28-August-2023

**Fee:** 2999 INR Only [+ Pay Now Button]

**Timing:** 9:00 AM - 2:00 PM

**Details (Modal):**

Detailed Timing

Detailed Schedule

Detailed Feedback Sample

**Add-ons:**

Speaking Interviews: 

Class Recordings:
Extra Corrections: 

**Results:**

-->

<script>
    import inView from '$lib/inView';
  import Results from './AcadResultsAd.svelte'
    let animate = false;
  let showModal = false;
  
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


    <img
    src="/img/hartrans.png"
    class="relative w-24 h-24 max-w-3xl mx-auto mt-6"
  />
<div class="mx-1 px-20 tiny:px-2 max-w-[980px] text-center pt-8 pb-5 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800">
    <img class="block w-12 h-12 mx-auto mb-1 imgshadowed" src="/img/Online education.svg" alt="clock">
    <h1 class="mx-2 tracking-wider s5 anton"> <span class="mx-2 s7 anton">THE COMPLETE</span> <br> Academic IELTS MASTERCLASS</h1>
    <h3 class="mx-2 mt-2 mb-4 text-xs">The Most <span class="font-bold">Afforfable</span> and <span class="font-bold">Reliable</span> IELTS Classes</h3>
    
<div class="flex flex-col items-center justify-center w-full space-y-2">
    <div class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105">
        <div class="flex flex-row items-center px-2 space-x-4"><img class="block mx-auto w-9 h-9 imgshadowed" src="/img/Deadline.svg" alt="clock"><p class="text-xs font-semibold text-neutral-800"><b>Starting</b> <br> Monday, Aug 28</p></div>
    </div>

    <div class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105">
        <div class="flex flex-row items-center px-2 space-x-4"><img class="block mx-auto w-9 h-9 imgshadowed" src="/img/Examination.svg" alt="clock"><p class="text-xs font-semibold text-neutral-800"><b>Time</b> <br> 9:00 to 2:00 PM</p></div>
    </div>

   <div class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105">
       <div class="flex flex-row items-center px-2 space-x-4">
           <img class="block mx-auto w-9 h-9 imgshadowed" src="/img/Fees.svg" alt="clock">
           <div id="discount" class="text-xs font-semibold text-neutral-800">
               <b>Fees (INR)</b> 
               <br> 
               <span class="font-bold text-red-600 line-through">Normal Price: 9000</span>
               <div class="relative p-2 mt-2 bg-orange-100 border-2 border-dashed rounded border-neutral-600">
                   <img class="absolute top-0 right-0 transform rotate-180 translate-x-1/2 -translate-y-1/2" src="/img/Scissor.svg" alt="scissors" width="20" height="20">
                   5999 (Monthly)
               </div>
           </div>
       </div>
       <p class="px-6 mt-2 font-mono text-xs text-left">🍁The fee for NRI students is 20% higher.</p>
   </div>
   

    <div class="flex flex-col items-center justify-center w-8/12 px-2 py-3 transition-all duration-500 ease-in-out transform bg-white border rounded shadow-lg border-neutral-600 hover:scale-105">
        <div class="flex flex-row items-center px-2 space-x-4"><img class="block mx-auto w-9 h-9 imgshadowed" src="/img/Teacher.svg" alt="clock"><p class="text-xs font-semibold text-neutral-800"><b>Tutors</b> <br> Hardev Singh  <br>Sukhpal Singh</p></div>
    </div>
</div>

<p class="mt-4 font-mono text-xs"> Scroll down for more details</p>

</div>

<img class="mt-5 w-[40px] h-[40px] animate-bounce imgshadowed mx-auto block" data-svelte-h="svelte-1fh0e48" src="/img/downdown.svg">

<div id="overview" class="flex flex-col items-center justify-center mt-6 border-2 border-dashed shadow-md p-7 border-zinc-800 shadow-black max-w-[520px] mx-1">
    <img class="block w-12 h-12 mx-auto mb-1 imgshadowed" src="/img/Search (1).svg" alt="clock">
    <h1 class="mx-2 mb-4 font-extrabold text-center s2"> <span class="s4">An overview</span> <br>of what the course Includes</h1>

    <div class="mt-2">
        <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"><div class="flex flex-row items-center px-2 py-1 space-x-4 "><img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Letter (3).svg" alt="clock"><p class="text-xs font-bold text-slate-50 ">The Writing Module</p></div></div>
        <div class="indent-3">
        <p class="mt-3 text-xs"><span class="hue-rotate-90">✅</span> Daily Writing Lessons</p>
        <p class="text-xs"><span class="hue-rotate-90">✅</span> Daily Writing Corrections</p>
      


        
    </div>
<div class="px-4" use:inView on:enter={handleEnter} on:exit={handleExit}>
  <a href="masterclass/samplefeedback" 
     class="block py-1 px-2 mt-4 text-xs font-medium text-center text-white transition bg-red-800 rounded shadow hover:shadow-lg hover:bg-neutral-800 focus:outline-none {animate ? 'scale-up-bottom' : ''}"><span class="text-lg">👉</span> See Sample Feedback
  </a>
</div>

    </div>

    <div class="mt-6">
        <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"><div class="flex flex-row items-center px-2 py-1 space-x-4 "><img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Book.svg" alt="clock"><p class="text-xs font-extrabold text-slate-50 ">The Reading Module</p></div></div>
        <div class="indent-3">
        <p class="mt-3 text-xs"><span class="hue-rotate-90">✅</span> Daily Reading Test</p>
        <p class="text-xs"><span class="hue-rotate-90">✅</span> Daily Reading Discussion</p>
        <p class="text-xs"><span class="hue-rotate-90">✅</span> Tips and Tricks Sessions</p></div>
    </div>


    <div class="mt-6">
        <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"><div class="flex flex-row items-center px-2 py-1 space-x-4 "><img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Conference.svg" alt="clock"><p class="text-xs font-extrabold text-slate-50 ">The Speaking Module</p></div></div>
        <div class="indent-3">
        <p class="mt-3 text-xs"><span class="hue-rotate-90">✅</span> Tips and Tricks Sessions</p>
        <p class="text-xs"><span class="hue-rotate-90">✅</span> Daily Interviews (optional)</p></div>
    </div>


    <div class="mt-6">
        <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"><div class="flex flex-row items-center px-2 py-1 space-x-4 "><img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Man.svg" alt="clock"><p class="text-xs font-extrabold text-slate-50 ">The Listening Module</p></div></div>
        <div class="indent-3">
        <p class="mt-3 text-xs"><span class="hue-rotate-90">✅</span> Daily Listening Test</p>
        <p class="text-xs"><span class="hue-rotate-90">✅</span> Tips and Tricks Sessions</p>
    </div>
    </div>

    <p class="mt-6 mb-3 font-mono text-xs">For a detailed overview of the course, please click the button below.</p>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a href='./../../../../static/pdf/Details.pdf' class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed"><div class="flex flex-row items-center px-2 py-1 space-x-4 "><img class="block mx-auto w-7 h-7 imgshadowed" src="/img/Dashboard.svg" alt="clock"><p class="text-xs font-bold text-slate-50">Detailed Overview</p></div></a>
</div>


<img class="mt-5 w-[40px] h-[40px] animate-bounce imgshadowed mx-auto block" data-svelte-h="svelte-1fh0e48" src="/img/downdown.svg">

<div id="overview" class="flex flex-col items-center justify-center mt-6 border-2 border-dashed shadow-md p-7 border-zinc-800 shadow-black max-w-[520px] mx-1">
    <img class="block h-12 mx-auto mb-1 w-13 imgshadowed" src="/img/Gift box.svg" alt="clock">
    <h1 class="mx-2 mb-2 font-extrabold text-center s2"> <span class="s4">Free Gifts</span> <br>Worth 6000 INR!!</h1>
    <p class="mt-1 mb-2 text-xs text-center">Limited Time Offer!! If you enroll now, get the following 7 absolutely free!!</p>
<div class="mt-2">
    <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed">
        <div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
            <img class="block w-12 h-12 mx-auto imgshadowed" src="/img/Elearning.svg" alt="clock">
            <p class="text-xs font-bold text-center text-slate-50"><span>Gift #1:</span> Complete IELTS Reading Mastercourse</p>
            <p class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300">Worth INR 4500</p>
        </div>
    </div>
    <div class="indent-3">
        <p class="mt-3 text-xs text-center">A 15 lesson video course including effective tips and strategies to tackle IELTS Reading</p>
    </div>
</div>


<div class="mt-2">
    <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed">
        <div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
            <img class="block w-12 h-12 mx-auto imgshadowed" src="/img/essaybook.png" alt="clock">
            <p class="text-xs font-bold text-center text-slate-50">Gift #2: The Biggest Book of Band 9 IELTS Books</p>
            <p class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300">Worth INR 399</p>
        </div>
    </div>
    <div class="indent-3">
        <p class="mt-3 text-xs text-center">This ultimate guide, with 577 essay topics and two sample answers each, is your key to scoring a Band 9 in the IELTS writing test, catering to all proficiency levels.</p>
    </div>
</div>

<div class="mt-2">
    <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed">
        <div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
            <img class="block w-12 h-12 mx-auto imgshadowed" src="/img/ideasbook.png" alt="clock">
            <p class="text-xs font-bold text-center text-slate-50">Gift #3: The Big Book of Ideas for IELTS Essays</p>
            <p class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300">Worth INR 299</p>
        </div>
    </div>
    <div class="indent-3">
        <p class="mt-3 text-xs text-center">Across its 12 meticulously crafted chapters and 282 pages, this book delves deeply into every conceivable topic that could be asked in the IELTS exam.</p>
    </div>
</div>

<div class="mt-2">
    <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed">
        <div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
            <img class="block w-12 h-12 mx-auto imgshadowed" src="/img/grambook.png" alt="clock">
            <p class="text-xs font-bold text-center text-slate-50">Gift #4: Functional Grammar for IELTS Task 2 Book</p>
            <p class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300">Worth INR 299</p>
        </div>
    </div>
    <div class="indent-3">
        <p class="mt-3 text-xs text-center">The magic of "Functional Grammar for IELTS Task 2" lies in its unique problem-solving perspective. It doesn't just tell you what to do; it shows you how. </p>
    </div>
</div>

<div class="mt-2">
    <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed">
        <div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
            <img class="block w-12 h-12 mx-auto imgshadowed" src="/img/part1book.png" alt="clock">
            <p class="text-xs font-bold text-center text-slate-50">Gift #5: The Biggest Book of Speaking Part 1</p>
            <p class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300">Worth INR 299</p>
        </div>
    </div>
    <div class="indent-3">
        <p class="mt-3 text-xs text-center">This comprehensive resource, covering an astounding 201 topics, is your ultimate companion to mastering the IELTS Speaking Part 1.
        </p>
    </div>
</div>

<div class="mt-2">
    <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed">
        <div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
            <img class="block w-12 h-12 mx-auto imgshadowed" src="/img/cuebook.png" alt="clock">
            <p class="text-xs font-bold text-center text-slate-50">Gift #6: Band 9 Cue Card Answers Book</p>
            <p class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300">Worth INR 199</p>
        </div>
    </div>
    <div class="indent-3">
        <p class="mt-3 text-xs text-center">Achieve your Band 9 score with my reliable guide; your dream score is not a pipe dream, but an upcoming reality!</p>
    </div>
</div>

<div class="mt-2">
    <div class="flex flex-col items-center justify-center px-2 py-2 transition-all duration-500 ease-in-out transform border rounded-sm shadow-lg bg-neutral-800 border-neutral-600 hover:scale-105 imgshadowed">
        <div class="flex flex-row items-center justify-between px-2 py-1 space-x-2">
            <img class="block w-12 h-12 mx-auto imgshadowed" src="/img/langbook.png" alt="clock">
            <p class="text-xs font-bold text-center text-slate-50">Gift #7: Language Booster Book</p>
            <p class="pl-3 text-xs font-semibold border-l-2 border-dashed text-slate-50 border-l-amber-300">Worth INR 99</p>
        </div>
    </div>
    <div class="indent-3">
        <p class="mt-3 text-xs text-center">This guide, with 600 English sentences at three levels, is like a personal coach, guiding you from basic to expert English.</p>
    </div>
</div>
<div class="fixed bottom-0 flex justify-center w-full p-4 border-t-2 bg-orange-50 border-neutral-800">
    <a href="your-payment-link-here" class="w-1/2 px-4 py-2 text-center text-white transition-colors duration-200 ease-in-out rounded cursor-pointer md:w-1/3 lg:w-1/4 xl:w-1/6 bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600 active:bg-neutral-900" aria-label="Enroll Now">Enroll Now</a>
</div>

</div>

<img class="mt-5 w-[40px] h-[40px] animate-bounce imgshadowed mx-auto block" data-svelte-h="svelte-1fh0e48" src="/img/downdown.svg">



{#if showModal}
<div class="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out bg-black bg-opacity-50 backdrop-blur-md" on:click={() => showModal = false}>
  <div id="feepay" class="flex flex-col items-center justify-center mt-6 border-2 border-dashed shadow-md p-7 border-zinc-800 shadow-black max-w-[600px] mx-1 bg-white" on:click|stopPropagation>
    <img class="block h-12 mx-auto mb-1 w-13 imgshadowed" src="/img/Wallet.svg" alt="clock">
    <h1 class="mx-2 mb-2 font-extrabold text-center s4">Fee Details</h1>
    <p class="mt-1 mb-2 text-xs text-center">The fee is <b>2999 INR</b> but there are two optional add-ons you can choose from.</p>

    <div class="w-full pl-4">
        <!-- Add-on 1 -->
        <article class="px-3 pb-2 mt-4 border border-solid rounded shadow-xl border-neutral-800">
            <div class="flex justify-between px-5 pt-2 pb-3 mt-4 border-2 border-dashed bg-orange-50 border-neutral-800 s-hOE26P1wEpmn">
                <div class="flex flex-row s-hOE26P1wEpmn">
                    <img class="mr-2 w-7 h-7 imgshadowed s-hOE26P1wEpmn" src="/img/Interview.svg" alt="Add-on 1"> 
                    <span class="self-end mr-2 text-xs font-semibold s-hOE26P1wEpmn">Daily Speaking Interviews (+1000 INR)</span> 
                </div>

            </div> 
            <p class="pl-3 mt-2 mb-2 text-xs text-left s-hOE26P1wEpmn">Each interview is a one to one interview lasting 10 Minutes, including feedback at the end.<br><br>
            
                <span class="imgshadowed s4 hue-rotate-30">💔</span> Yes, I know that it's a 'letdown'' to pay more for speaking interviews. But to keep the course prices down, it's tough to include them since I need to hire dedicated teachers for the interviews.
            </p>
        </article>

        <!-- Add-on 2 -->
        <article class="px-3 pb-2 mt-5 border border-solid rounded shadow-xl border-neutral-800">
            <div class="flex justify-between px-5 pt-2 pb-3 mt-4 border-2 border-dashed bg-orange-50 border-neutral-800 s-hOE26P1wEpmn">
                <div class="flex flex-row s-hOE26P1wEpmn">
                    <img class="mr-2 w-7 h-7 imgshadowed s-hOE26P1wEpmn" src="/img/Video clip.svg" alt="Add-on 1"> 
                    <span class="self-end mr-2 text-xs font-semibold s-hOE26P1wEpmn">Daily Class Recordings (+1000 INR)</span> 
                </div>
            </div> 
            
            <p class="pl-3 mt-2 mb-2 text-xs text-left s-hOE26P1wEpmn">Never miss a class and cover the course at your own pace. This gives you 3 months access to the class recordings.<br><br>
            
            <span class="imgshadowed s5 hue-rotate-30">📡</span>Again, secure video hosting can be an expensive affair. I need to prevent illegal download and sharing of the videos.</p>

        </article>


            <div class="flex items-center justify-center mt-5">
                <a href="https://www.instamojo.com/@IELTSHARDEV/l16a2dc984b82465899620c70e4594401/" class="px-4 py-2 text-center text-white transition-colors duration-200 ease-in-out rounded cursor-pointer bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600 active:bg-neutral-900" aria-label="Enroll Now">Pay Now</a>
            </div>

    </div>

  </div>
</div>
{/if}

<div class="fixed bottom-0 flex justify-center w-full p-4 mt-16 border-t-2 bg-orange-50 border-neutral-800">
  <button on:click={() => showModal = true} class="w-1/2 px-4 py-2 text-center text-white transition-colors duration-200 ease-in-out rounded cursor-pointer md:w-1/3 lg:w-1/4 xl:w-1/6 bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600 active:bg-neutral-900" aria-label="Enroll Now">Enroll Now</button>
</div>


</section>


<div ID="login modal">


</div>

<style>

</style>