<!--Start of Tawk.to Script-->

<script>
  import Fetch from "$lib/reuse/FBfetch.svelte"
  import { slide } from 'svelte/transition';
 
  
  let imageUrl;
  let firstName;

  let userEmail = null;
   

    let links = [
        { href: "/general/shortvids", img: "/img/Teacher.svg", text: "Short Videos Guide", imgWidth: "w-7", imgHeight: "h-7" },
        { href: "/general/classrecordings", img: "/img/Video clip.svg", text: "Daily Class Recordings", imgWidth: "w-7", imgHeight: "h-7" },
        { href: "/general/writing", img: "/img/Letters.svg", text: "Writing Area", imgWidth: "w-6", imgHeight: "h-6" },
        { href: "/general/reading", img: "/img/Book.svg", text: "Reading Area", imgWidth: "w-7", imgHeight: "h-7" },
        { href: "/general/speaking", img: "/img/Interview.svg", text: "Speaking Area", imgWidth: "w-6", imgHeight: "h-6" },
        { href: "/general/listening", img: "/img/Man.svg", text: "Listening Area", imgWidth: "w-6", imgHeight: "h-6" },
        { href: "/general/bonuscontent", img: "/img/bolt.svg", text: "Bonus Content", imgWidth: "w-6", imgHeight: "h-6" },
        { href: "/general/mocktest", img: "/img/Examination.svg", text: "Weekly Mock Test", imgWidth: "w-6", imgHeight: "h-6" }
    ];

    let performanceScore = 65; // Set this value manually for now
    let rotation = (performanceScore / 100) * 180 - 90; // Calculate rotation angle based on score
    
   
</script>
<div transition:slide={{ y: 800 }}>
<div class={`flex items-center justify-center bg-white`}>
    <div class={`px-20 tiny:px-2 max-w-[980px] text-center pb-10 flex flex-col  mt-6 mb-12`}>


            <Fetch 
            collectionName="28augprofiles" 
            documentName={userEmail} 
            field="First Name"
            bind:data={firstName}
        />
        <div class="mx-1 mt-6 px-20 tiny:px-2 max-w-[980px] text-center pt-8 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800">
            <img class="block mx-auto mb-1 w-14 h-14 imgshadowed" src="/img/Elearning.svg" alt="clock">
            <h1 class="mx-2 tracking-wider s7 anton"> <span class="mx-2 s5 montserrat">THE Target</span> <br> 8777 Programme</h1>
            <h3 class="mx-2 mt-2 mb-4 text-xs">A track record of <span class="font-bold">400+</span> successful <span class="font-bold">8777 Results</span> <span class="hue-rotate-90 imgshadowed s2">✅</span></h3>
            
            <h1 class="pt-3 pb-2 mx-2 mt-4 font-bold tracking-wider text-gray-100 rounded-t-full s5 bg-neutral-800">Welcome, {firstName}</h1>
            </div>
  
            <Fetch 
            collectionName="28augprofiles" 
            documentName={userEmail} 
            field="question_dWDjZA"
            bind:data={imageUrl}
        />
            <div class="flex flex-col items-center justify-center mt-5">
                <div class="avatar online">
                    <div class="w-24 border rounded-full border-neutral-600 imgshadowed">
                      <img src="{imageUrl}" />
                    </div>
                  </div></div>

<div class="flex flex-col items-center justify-center pb-8 mt-6 border border-solid border-neutral-800">
        <h2 class="mt-6 text-2xl font-semibold text-center text-neutral-800">Notifications</h2>

        <a href="https://live.ielts-hub.com/session/9387f8fd-eaf2-451f-b61c-ea0a938da53c" class="flex py-2 pl-5 pr-6 mt-4 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11"><img src="/img/Video clip.svg" class="mr-4 w-7 h-7 imgshadowed" alt="Icon"> Click Here To Join Today's Session </a>

        

        <div class="flex items-center justify-center bg-white">
            <!-- Existing content here -->
        
            <div class="relative w-4/5 max-h-[8rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 mt-6 mb-12 mx-auto rounded-lg shadow-lg bg-neutral-100 p-4 space-y-4">
                <div class="p-4 bg-white rounded-lg shadow-md">
                    <p class="text-neutral-800">This is a notification message. Something important happened!</p>
                </div>
                <div class="p-4 bg-white rounded-lg shadow-md">
                    <p class="text-neutral-800">Another notification message. Check this out!</p>
                </div>
                <div class="p-4 bg-white rounded-lg shadow-md">
                    <p class="text-neutral-800">Yet another notification message. Don't miss it!</p>
                </div>
                <div class="p-4 bg-white rounded-lg shadow-md">
                    <p class="text-neutral-800">One more notification message. Stay updated!</p>
                </div>
            </div>
        </div>
        <script async src="https://comments.app/js/widget.js?3" data-comments-app-website="29ew98gk" data-limit="10" data-color="F4C64E" data-colorful="1" data-dark="1"></script>
        <div class="flex flex-col items-center justify-center pb-1 mx-4 bg-white border-double border-neutral-800 border-y-2"><h2 class="mt-6 text-2xl font-semibold text-center text-neutral-800" data-svelte-h="svelte-1u1bcvl">Your Performance So Far</h2> <div class="relative flex flex-col items-center w-24 h-24"><img src="/img/Meter.svg" class="absolute w-full h-full" alt="Performance Meter"> <img src="/img/Needle.svg" class="absolute w-full h-full origin-bottom transform" style="rotate: 0deg; top: -8%;" alt="Performance Needle"></div> <p class="mt-4 text-lg font-semibold text-neutral-800">50%
            (OK)</p><br><p class="mx-4 text-xs">* Your performance is based on a few factors: attendance in daily writing session, submission of writing tasks, attending speaking interviews, participation in class, communication with me and Sukhpal sir + some confidential factors. </p></div>

        
        <div class="text-center flex flex-col space-y-3 max-w-[420px] self-center btext mt-6">
            <p class="text-xs text-red-600">Please note that the areas below are currently disabled. They will be enabled after today's LIVE class.</p>
            {#each links as link}
                <a href={link.href} class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11">
                    <img src={link.img} class="mr-4 {link.imgWidth} {link.imgHeight} imgshadowed" alt="Icon" /> {link.text}
                </a>
            {/each}
        </div>
    </div>
    </div>
</div></div>