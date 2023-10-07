<script>
  import { onMount, onDestroy } from 'svelte';
  import { onAuthStateChanged } from "firebase/auth";
  import { onSnapshot } from 'firebase/firestore';
  import { collection, addDoc } from "firebase/firestore";
  import { essayTopic, essayNumber } from '$lib/store'; // import the stores
  import EssayCred from '$lib/reuse/EssayCred.svelte';
  import { doc, getDoc, setDoc, updateDoc, runTransaction } from "firebase/firestore";
  import { db, auth } from '$lib/firebase'; // import db and auth from firebase.js
  
  let intro = "";
  let mbp1 = "";
  let mbp2 = "";
  let conclusion = "";
  let submitDisabled = false;
  let submitStatus = 'idle'; // 'idle' | 'sending' | 'sent'
  let topic = 'Default topic';
  let credits = '';
  let submitText = 'Submit';
  let essayNum = 'Default number';
  // subscribe to the essayTopic store to get the current essay topic
  const unsubscribeNum = essayNumber.subscribe(value => {
  essayNum = value;
});

  const unsubscribe = essayTopic.subscribe(value => {
    topic = value;
  });

  // make sure to unsubscribe from the store when the component is destroyed
  onDestroy(() => {
    unsubscribe();
  });

  let isClicked = false;
  let recognition;
  let transcript = '';
  let lastActiveElement;

  onMount(async () => {
    const essayNum = localStorage.getItem('essayNum');
    const response = await fetch("/EssayBook.json");
    const data = await response.json();
    topic = data.Sheet1[Number(essayNum) - 1]?.essaytopic;
  });

  onMount(async () => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        transcript = event.results[0][0].transcript;
        transcript = transcript; // This line is necessary to make Svelte react to the change
      };

      recognition.onend = () => {
        if (transcript) {
          // Display the transcribed text and the 'insert' button
        }
      };
    } else {
      console.log('Web Speech API is not supported by this browser or OS.');
    }

    const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    textarea.addEventListener('focus', () => {
      lastActiveElement = textarea;
    });
  });

    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const encodedEmail = user.email.replace(/\./g, '_').replace(/@/g, '_');
        const userCreditDoc = doc(db, 'userCredits', encodedEmail);
        onSnapshot(userCreditDoc, (doc) => {
          credits = doc.data().credits;
        });
      }
    });

    return () => {
      unsubscribe();
    };
  });

  function toggleClick() {
    isClicked = !isClicked;
    if (isClicked) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  function formatTranscript(transcript) {
    return transcript.charAt(0).toUpperCase() + transcript.slice(1) + '.';
  }

  function insertTranscript() {
    if (lastActiveElement) {
      let formattedTranscript = formatTranscript(transcript);
      switch (lastActiveElement.id) {
        case 'intro':
          intro += ' ' + formattedTranscript;
          break;
        case 'mbp1':
          mbp1 += ' ' + formattedTranscript;
          break;
        case 'mbp2':
          mbp2 += ' ' + formattedTranscript;
          break;
        case 'conclusion':
          conclusion += ' ' + formattedTranscript;
          break;
        default:
          break;
      }
      transcript = '';
    }
  }

  // Reactive statement to calculate word count
  $: wordCount = (intro.split(" ").length - 1) + (mbp1.split(" ").length - 1) + (mbp2.split(" ").length - 1) + (conclusion.split(" ").length - 1);

  // Reactive statement to check word count and update state
  $: {
    if (wordCount >= 281) {
      submitDisabled = true;
    } else {
      submitDisabled = false;
    }
  }
  $: {
    if (credits <= 0) {
      submitDisabled = true;
    } else {
      submitDisabled = false;
    }
  }

  async function deductCredit() {
    if (auth.currentUser) {
      const encodedEmail = auth.currentUser.email.replace(/\./g, '_').replace(/@/g, '_');
      const userCreditDoc = doc(db, 'userCredits', encodedEmail);
      await runTransaction(db, async (transaction) => {
        const userCreditSnap = await transaction.get(userCreditDoc);
        if (!userCreditSnap.exists()) {
          throw "Document does not exist!";
        }
        const newCredits = userCreditSnap.data().credits - 1;
        transaction.update(userCreditDoc, { credits: newCredits });
      });
      credits -= 1;
    }
  }

  async function sendData() {
  submitStatus = 'sending';

  // Remove line breaks from each paragraph
  intro = intro.replace(/\n/g, ' ');
  mbp1 = mbp1.replace(/\n/g, ' ');
  mbp2 = mbp2.replace(/\n/g, ' ');
  conclusion = conclusion.replace(/\n/g, ' ');


  const data = { 
    intro, 
    mbp1, 
    mbp2, 
    conclusion, 
    email: auth.currentUser.email, 
    topic, 
    essayNum,
    ontopic: '', 
    gramintro: '', 
    grammbp1: '', 
    grammbp2: '', 
    gramconclusion: '', 
    score: '', 
    improved: '',
  };
  
  try {
    // Create a new document with the ID set to the user's email
    await setDoc(doc(db, "essays", auth.currentUser.email), data);

    // If the document is successfully created, deduct credit
    await deductCredit();

    submitStatus = 'sent';
  } catch (error) {
    console.error('Error:', error);
    submitStatus = 'idle';
  }
}

</script>


<section class="flex items-center justify-center bg-white ">
  <div class="flex flex-col justify-center items-center max-w-[1000px] mt-8">
    <div class="fixed flex justify-start pb-4 pr-4 top-8 inset-x-8">
      <button 
        class="px-2 py-2 font-bold text-white rounded-full {isClicked ? 'bg-rose-900 animate-pulse' : 'bg-neutral-500 hover:bg-neutral-800'}" 
        on:click={toggleClick}
      >
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
      src="/img/speech.svg"
      class="{isClicked ? 'w-8 h-8 cursor-pointer animate-pulse' : 'w-8 h-8 cursor-pointer'}"
    />
      </button>
      
      {#if transcript}
  <div class="p-2 ml-4 bg-white border border-black rounded">
    <p class="mb-2">{formatTranscript(transcript)}</p>
    <button 
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" 
      on:click={insertTranscript}
    >
      Insert
    </button>
  </div>
{/if}


    </div>
    
  
  
    <div
      class="flex flex-col items-center px-10 pt-3 pb-6 mx-6 mt-10 bg-white border-2 border-solid rounded-sm border-neutral-900 tiny:mx-6 gridgrad"
    >
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/img/Hardev Sir Avatar.png"
        class="relative w-24 h-24 mx-auto mt-8 rounded-full imgshadowed"
      />
      <p class="text-center bb s6 max-w-[800px] mt-4 mb-6 px-5 py-6 z-50 mx-6">Hardev Sir's<br> Essay Correction Service</p>
<EssayCred />

<a href="/books/essaybook/read/getevaluated/result" class="flex items-center justify-center px-4 py-1 mt-2 mb-2 text-xs font-light text-center border rounded-md cursor-pointer justify-items-center border-neutral-800 s-26tAHspIZohb bg-stone-800 text-slate-50 imgshadowed">
  <img src="/img/Right click.svg" class="w-6 h-6 my-1 mr-4 imgshadowed" alt="Icon" /><b class="text-left">My Last Correction</b>
</a>

<p id="topic" class="w-11/12 p-4 mt-2 mb-5 font-semibold text-center border-2 border-solid rounded mx-7 border-neutral-800 bg-amber-50">
  {topic}
</p>
      <h1
        class="mx-5 mt-1 text-xs font-normal text-center text-black my-web-font"
      >
       <b>Don't want to type?</b> Click the mic button on the top left to use 'Speak to Type' function. 
      </h1>
    <div class="flex-col self-end w-11/12 mt-4">
    
      
      <p class="pl-4 mt-2 font-semibold text-justify s2">Introduction</p>
        <textarea id="intro" bind:value={intro} class="w-11/12 p-4 mt-1 mb-1 bg-white border-2 border-solid rounded resize-y border-neutral-800" placeholder="Type your Introduction here..."></textarea>
        <p class="pl-4 mt-2 font-semibold text-justify s2">Main Body Paragraph 1</p>
        <textarea id="mbp1" bind:value={mbp1} class="w-11/12 p-4 mt-1 mb-1 bg-white border-2 border-solid rounded resize-y h-60 border-neutral-800" placeholder="Type your Main Body Paragraph 1 here..."></textarea>
        <p class="pl-4 mt-2 font-semibold text-justify s2">Main Body Paragraph 2</p>
        <textarea id="mbp2" bind:value={mbp2} class="w-11/12 p-4 mt-1 mb-1 bg-white border-2 border-solid rounded resize-y border-neutral-800 h-60" placeholder="Type your Main Body Paragraph 2 here..."></textarea>
        <p class="pl-4 mt-2 font-semibold text-justify s2">Conclusion</p>
        <textarea id="conclusion" bind:value={conclusion} class="w-11/12 p-4 mt-1 mb-1 bg-white border-2 border-solid rounded resize-y border-neutral-800" placeholder="Type your Conclusion here..."></textarea>
    </div>

    <p id="wordcount" class="mb-4 w-6/12 px-4 py-2 font-bold text-center border rounded-sm bg-amber-50 border-neutral-800 {wordCount >= 301 ? 'text-red-600 font-bold' : ''}"> {wordCount} Words {wordCount >= 301 ? '(Reduce down to less than 300 words to submit)' : ''} </p>

    {#if submitStatus !== 'sent'}
    <button
      class=" bg-neutral-800 text-white font-bold py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-black hover:border-solid"
      disabled={submitDisabled || submitStatus === 'sending'}
      on:click={sendData}
    >
      {submitStatus === 'idle' ? (submitDisabled ? '😓 Zero Corrections Left' : 'Submit') : 'Sending...'}
    </button>
  {/if}
  
  {#if submitStatus === 'sent'}
    <p class="text-green-600">Task submitted successfully. You should get your evaluation within 24 hours!</p>
  {/if}
      </div>
      <!-- ... -->
    </div>
</section>

<style>

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
</style>