<script>
    import Courseinfo from '$lib/batch/CourseInfo.svelte';
    import { fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
  
    let stage = 0;
    let ieltsType = '';
    let country = '';
    let coaching = '';
  
    let acinoff = false;
    let acinon = false;
    let acot = false;
    let genin = false;
    let genot = false;
  
    const selectIeltsType = (type) => {
      ieltsType = type;
      stage++;
    }
  
    const selectCountry = (selectedCountry) => {
      country = selectedCountry;
      stage++;
      if (ieltsType === 'Academic' && country === 'Others') {
        acot = true;
      }e
      if (ieltsType === 'General' && country === 'India') {
        genin = true;
      }
      if (ieltsType === 'General' && country === 'Others') {
        genot = true;
      }
    }
  
    const selectCoaching = (selectedCoaching) => {
      coaching = selectedCoaching;
      stage++;
      if (ieltsType === 'Academic' && country === 'India' && coaching === 'Offline') {
        acinoff = true;
      }
      if (ieltsType === 'Academic' && country === 'India' && coaching === 'Online') {
        acinon = true;
      }
    }
  </script>
  <svelte:head>
    <title>IELTS HUB - The Best LIVE Courses</title>
    <meta name="description" content="Backed by thousands of success stories,our Offline and Online courses are here to guide you on your IELTS journey with to-the-point guidance and targeted study material." />
  </svelte:head>
  <!-- First Screen -->
  {#if stage === 0}
  <section class="flex flex-col items-center justify-center mt-6" in:fade={{ delay: 300, duration: 300, easing: quintOut }} out:fade={{ duration: 300, easing: quintOut }}>
    <h1 class="w-5/6 mt-3 mb-5 text-lg x-2">Please answer a few <span class="underline decoration-sky-600 decoration-4 underline-offset-4">Quick Questions</span> so that the right course and details can be suggested.</h1>
      <div class="mx-1 max-w-[980px] text-center pt-8 pb-5 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800 w-11/12 ">
        <img class="block w-16 h-16 mx-auto mb-1 imgshadowed " src="/img/Teacher.svg" alt="clock" />
        <p class="mx-2 mt-3 mb-2 tracking-wider">Which <span class="underline decoration-red-800 decoration-2 underline-offset-4">IELTS Exam</span> do you plan on taking?</p>
        <div class="flex flex-row justify-center mt-4 space-x-5">
         
          <button class="flex flex-row items-center px-3 py-2 space-x-3 text-sm rounded bg-neutral-800 text-slate-100 hover:bg-amber-300 hover:text-neutral-800" on:click={() => selectIeltsType('Academic')}>
            <img class="block w-8 h-8 mx-auto mb-1 imgshadowed" src="/img/Elearning.svg" alt="clock" />
            <p>Academic IELTS</p>
          </button>
          <button class="flex flex-row items-center px-3 py-2 space-x-3 text-sm rounded bg-neutral-800 text-slate-100 hover:bg-amber-300 hover:text-neutral-800 " on:click={() => selectIeltsType('General')}>
            <img class="block w-8 h-8 mx-auto mb-1 imgshadowed" src="/img/Portfolio.svg" alt="clock" />
            <p>General IELTS</p>
          </button>
        </div>
        <p class="mt-6 shadow-lg border-y border-y-neutral-800 ">Choose One Option</p>
      </div>
    </section>
   <!-- Second Screen -->
  {:else if stage === 1}
  <section class="flex flex-col items-center justify-center mt-6" in:fade={{ delay: 300, duration: 300, easing: quintOut }} out:fade={{ duration: 300, easing: quintOut }}>
      
    <div class="mx-1 max-w-[980px] text-center pt-8 pb-5 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800 w-11/12 ">
      <img class="block w-16 h-16 mx-auto mb-1 imgshadowed " src="/img/Teacher.svg" alt="clock" />
      <p class="mx-2 mt-3 mb-2 tracking-wider">Which  <span class="underline decoration-red-800 decoration-2 underline-offset-4">Country</span> are you  <span class="underline decoration-red-800 decoration-2 underline-offset-4">Currently</span> living in?</p>
      <div class="flex flex-row justify-center mt-4 space-x-5">
        <button class="flex flex-row items-center px-3 py-2 space-x-3 text-sm rounded bg-neutral-800 text-slate-100 hover:bg-amber-300 hover:text-neutral-800" on:click={() => selectCountry('India')}>
          <img class="block w-6 h-6 mx-auto mb-1 imgshadowed " src="/img/India.svg" alt="clock" />
          <p>India</p>
        </button>
        <button class="flex flex-row items-center px-3 py-2 space-x-3 text-sm rounded bg-neutral-800 text-slate-100 hover:bg-amber-300 hover:text-neutral-800" on:click={() => selectCountry('Others')}>
          <img class="block w-6 h-6 mx-auto mb-1 imgshadowed " src="/img/Canada2.svg" alt="clock" />
          <p>Others</p>
        </button>
      </div>
      <p class="mt-6 shadow-lg border-y border-y-neutral-800 ">Choose One Option</p>
    </div>
  </section>
  {:else if stage === 2 && ieltsType === 'Academic' && country === 'India'}
  <!-- Third Screen -->
  <section class="flex flex-col items-center justify-center mt-6" in:fade={{ delay: 300, duration: 300, easing: quintOut }} out:fade={{ duration: 300, easing: quintOut }}>
     
    <div class="mx-1 max-w-[980px] text-center pt-8 pb-5 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800 w-11/12 ">
      <img class="block w-16 h-16 mx-auto mb-1 imgshadowed " src="/img/Teacher.svg" alt="clock" />
      <p class="mx-2 mt-3 mb-2 tracking-wider">Which  <span class="underline decoration-red-800 decoration-2 underline-offset-4">mode of teaching</span> would you prefer?</p>
      <div class="flex flex-row justify-center mt-4 space-x-5">
        <button class="flex flex-row items-center px-3 py-2 space-x-3 text-sm rounded bg-neutral-800 text-slate-100 hover:bg-amber-300 hover:text-neutral-800" on:click={() => selectCoaching('Online')}>
          <img class="block w-8 h-8 mx-auto mb-1 imgshadowed " src="/img/Dashboard.svg" alt="clock" />
          <p>Online</p>
        </button>
        <button class="flex flex-row items-center px-3 py-2 space-x-3 text-sm rounded bg-neutral-800 text-slate-100 hover:bg-amber-300 hover:text-neutral-800" on:click={() => selectCoaching('Offline')}>
          <img class="block w-8 h-8 mx-auto mb-1 imgshadowed " src="/img/Book.svg" alt="clock" />
          <p>Offline</p>
        </button>
      </div>
      <p class="mt-6 shadow-lg border-y border-y-neutral-800 ">Choose One Option</p>
    </div>
  </section>
  {:else}
  <!-- Fourth Screen -->
  <section class="flex flex-col items-center justify-center mt-6" in:fade={{ delay: 300, duration: 300, easing: quintOut }} out:fade={{ duration: 300, easing: quintOut }}>
    
        {#if acinoff}
        <Courseinfo 
        mainicon='Online education.svg'
        thinheading='THE Academic'
        boldheading='IELTS MASTER Course'
        claim='The most reliable and affordable IELTS classes.'
        date='Monday, OCT 23'
        time='9:00 AM to 2:00 PM'
        currency='INR'
        normalfee1='10000'
        discountfee1='8500'
        normalfee2='20000'
        discountfee2='14000'
        seats='8 Students Only'
        enrolllink='https://imjo.in/fRwhsw'
    />
    
        {:else if acinon}
        <Courseinfo 
        mainicon='Online education.svg'
        thinheading='THE Academic'
        boldheading='IELTS MASTER Course'
        claim='The most reliable and affordable IELTS classes.'
        date='Monday, OCT 23'
        time='9:00 AM to 2:00 PM'
        currency='INR'
        normalfee1='9000'
        discountfee1='6000'
        normalfee2='18000'
        discountfee2='10000'
        seats='8 Students Only'
        enrolllink='https://imjo.in/fRwhsw'
    />
    
        {:else if acot}
        <Courseinfo 
        mainicon='Online education.svg'
        thinheading='THE Academic'
        boldheading='IELTS MASTER Course'
        claim='The most reliable and affordable IELTS classes.'
        date='Monday, OCT 23'
        time='9:00 AM to 2:00 PM (IST)'
        currency='USD'
        normalfee1='$150'
        discountfee1='$125'
        normalfee2='$300'
        discountfee2='$200'
        seats='8 Students Only'
        enrolllink='/enroll/international'
    />
  
        {:else if genin}
        <Courseinfo 
        mainicon='Elearning.svg'
        thinheading='THE TARGET'
        boldheading='8777 GENERAL IELTS MASTERCLASS'
        claim='A track record of 400+ successful 8777 Results'
        date='Monday, OCT 30'
        time='3:00 to 9:00 PM'
        currency='INR'
        normalfee1='12200'
        discountfee1='10000'
        normalfee2='24500'
        discountfee2='15000'
        seats='6 Students Only'
        enrolllink='https://imjo.in/WRn7zp'
        />
  
        {:else if genot}
        <Courseinfo 
        mainicon='Elearning.svg'
        thinheading='THE TARGET'
        boldheading='8777 GENERAL IELTS MASTERCLASS'
        claim='A track record of 400+ successful 8777 Results'
        date='Monday, OCT 30'
        time='6:00 to 9:00 PM'
        currency='USD'
        normalfee1='$175'
        discountfee1='$145'
        normalfee2='$350'
        discountfee2='$220'
        seats='6 Students Only'
        enrolllink='/enroll/international'
        />
        {/if}
      <p class="mt-6 shadow-lg border-y border-y-neutral-800 ">Your Fee</p>
  </section>
  {/if}
  