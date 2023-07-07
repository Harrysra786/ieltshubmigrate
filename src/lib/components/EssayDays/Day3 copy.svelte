<script>
  import { onMount } from "svelte";

  let textInput = '';
  let recognition;
  let listening = false;
  let buttonText = "Speak Sentence";
  let sentence = "";
  let showEditOptions = false;
  $: capitalizedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
  onMount(() => {
    if ('webkitSpeechRecognition' in window) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        let interim_transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            sentence = event.results[i][0].transcript.trim();
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
      };

      recognition.onend = () => {
        if (listening) {
          recognition.start();
        }
      };
    }
  });

  function toggleListening() {
  listening = !listening;
  if (listening) {
    recognition.start();
    buttonText = "Stop";
  } else {
    recognition.stop();
    buttonText = "Speak Sentence";
    showEditOptions = true;
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
  }
}


  function insertSentence() {
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
  textInput += sentence + " ";
  buttonText = "Speak Sentence";
  showEditOptions = false;
}

function autoResize(element) {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + "px";
}



  function speakAgain() {
    showEditOptions = false;
  }
  
  async function handleSubmit() {
  const nameInput = document.getElementById('nameInput').value;
  const textInput = document.getElementById('textInput').value;

  try {
    const response = await fetch("/api/submit-essay", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nameInput, textInput }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
    } else {
      const error = await response.json();
      alert(error.error);
    }
  } catch (error) {
    alert(error.message);
  }
}
</script>


<section class=" bg-white flex justify-center items-center">
  <div class="flex flex-col justify-center items-center max-w-[1000px] mt-8">
    <div
      class="flex flex-col items-center px-10 pb-6 border-neutral-900 border-2 border-solid bg-white rounded-md mt-10 pt-3 mx-6 tiny:mx-6 gridgrad"
    >
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/img/Hardev Sir Avatar.png"
        class="mx-auto w-24 h-24 imgshadowed relative mt-8"
      />
      <h1
        class="my-web-font text-4xl text-black font-bold mb-8 mx-5 mt-5 text-center"
      >
        Hardev Sir's Writing Task Submission Tool
      </h1>
      <h1
      class="my-web-font text-2xl text-black font-bold mb-8 mx-5 text-center"
    >
      Wednesday's Writing
    </h1>

    
      <textarea
  id="nameInput"
  rows="1"
  class="mb-5 px-4 py-2 bg-white border-2 border-dashed rounded-sm border-neutral-800 w-full"
  placeholder="Put your NAME here."
/>
<h1
      class="my-web-font text-base text-black mb-8 mx-5 text-center"
    >
      <b>Important note!</b> You have to submit your task in typed form and not handwritten. Don't worry if you have written it by hand. Just click the 'Speak' button below and read your essay. It will be typed in automatically. This takes only 3 to 5 minutes.
    </h1>
  
      <label
        for="textInput"
        class="sr-only border-2 border-dashed border-neutral-800"
        >Enter your text:</label
      >

      <button
      class="px-4 py-2 bg-green-500 text-white rounded mb-6"
      on:click={toggleListening}
    >
      {buttonText}
    </button>
    
    {#if showEditOptions}
      <div class="flex flex-col items-center w-11/12">
        <textarea
  bind:value={capitalizedSentence}
  class="mb-5 px-4 py-2 bg-white border-2 border-dashed rounded-sm border-neutral-800 w-full"
  on:input={(e) => autoResize(e.target)}
/>

        <div class="flex space-x-8 my-4 w-full justify-center">
          <button
            class="px-4 py-2 bg-green-500 text-white rounded"
            on:click={insertSentence}
          >
            Insert
          </button>
          <button
            class="ml-2 px-4 py-2 bg-red-500 text-white rounded"
            on:click={speakAgain}
          >
            Speak Again
          </button>
        </div>
      </div>
    {/if}

    <textarea
    bind:value={textInput}
    id="textInput"
    rows="12"
    class="mb-5 px-4 py-2 bg-white border-2 border-dashed rounded-sm border-neutral-800 w-11/12"
    placeholder="Type your writing task here OR click the 'Speak' button above"
  />
  
      <!-- ... -->
      <div class="flex space-x-8 my-4 w-9/12 justify-center">
        <button
        class=" bg-neutral-800 text-white font-black py-2 px-6 border-2 border-black border-dashed rounded-md transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-black hover:border-solid"
        on:click={handleSubmit}
      >
        Submit
      </button>
      
      </div>
      <p class="text-center" />
      <!-- ... -->
    </div>
  </div>
</section>