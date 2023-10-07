<script>
  import { onMount } from 'svelte';
  import { doc, setDoc, getDocs, collection } from "firebase/firestore";

  import { db, auth } from '$lib/firebase'; // import db and auth from firebase.js
  
  let name = "";
  let email = "";
  let letter = "";
  let submitDisabled = false;
  let submitStatus = 'idle'; // 'idle' | 'sending' | 'sent'
  let Topic = `You have been living in a rental apartment for the past year. Recently a new neighbour moved in and has been making a lot of noise, which disturbs you.
Write a letter to the landlord. In your letter:
explain the situation
describe why it bothers you
suggest a solution`;
  let isClicked = false;
  let recognition;
  let transcript = '';
  let lastActiveElement;

  onMount(() => {
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

      document.querySelectorAll('textarea').forEach((textarea) => {
        textarea.addEventListener('focus', () => {
          lastActiveElement = textarea;
        });
      });
    } else {
      console.log('Web Speech API is not supported by this browser or OS.');
    }
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
        case 'letter':
          letter += ' ' + formattedTranscript;
          break;
        default:
          break;
      }
      transcript = '';
    }
  }

  // Reactive statement to calculate word count
  $: wordCount = letter.split(" ").length - 1;

  // Reactive statement to check word count and update state
  $: {
    if (wordCount >= 281) {
      submitDisabled = true;
    } else {
      submitDisabled = false;
    }
  }

  async function sendData() {
    submitStatus = 'sending';

    // Get the email of the currently signed in user
    email = auth.currentUser.email;

    const data = { 
      Letter: letter, // use the letter as the Letter
      Topic, // use the Topic defined above
      email, // use the email entered by the user
    };
    
    try {
    // Get the number of existing documents in the 'lettermarking' subcollection for this user
    const querySnapshot = await getDocs(collection(db, "markings", email, "lettermarking"));
    const docCount = querySnapshot.size;

    // Create a new document with the ID set to 'letter' followed by the count of existing documents + 1
    await setDoc(doc(db, "markings", email, "lettermarking", `letter${docCount + 1}`), data);
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
      <h1
        class="mx-5 mt-5 mb-8 text-4xl font-bold text-center text-black my-web-font"
      >
        Hardev Sir's Task 1 Submission Tool
      </h1>

      <p id="topic"
      class="w-11/12 p-4 mt-2 mb-5 font-semibold text-center border-2 border-solid rounded mx-7 border-neutral-800 bg-amber-50"
    >
      {Topic}
    </p>
    <div class="flex-col self-end w-11/12">
      <form class="flex w-11/12">
        <input id="name" bind:value={name} class="w-11/12 p-4 mx-1 mt-2 mb-5 bg-white border-2 border-solid rounded resize-none border-neutral-800" placeholder="Name..." />

        <input id="email" bind:value={email} class="w-11/12 p-4 mx-1 mt-2 mb-5 bg-white border-2 border-solid rounded resize-none border-neutral-800" placeholder="Email ID..." />
        
      </form>
      
        <textarea id="letter" bind:value={letter} class="w-11/12 p-4 mt-1 mb-1 bg-white border-2 border-solid rounded resize-y border-neutral-800" placeholder="Type your Letter here..."></textarea>
      
    </div>

    <p id="wordcount" class="mb-4 w-6/12 px-4 py-2 font-bold text-center border rounded-sm bg-amber-50 border-neutral-800 {wordCount >= 281 ? 'text-red-600 font-bold' : ''}"> {wordCount} Words {wordCount >= 281 ? '(Reduce down to 280 words or less to submit)' : ''} </p>

    {#if submitStatus !== 'sent'}
    <button
      class=" bg-neutral-800 text-white font-bold py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-black hover:border-solid"
      disabled={submitDisabled || submitStatus === 'sending'}
      on:click={sendData}
    >
      {submitStatus === 'idle' ? (submitDisabled ? 'Disabled' : 'Submit') : 'Sending...'}
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