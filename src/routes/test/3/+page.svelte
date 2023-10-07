<script>
  import { onMount } from 'svelte';
  export let placeholder = 'Put your text here';
  export let id = 'myTextArea';
  export let title = 'Paragraph';
  export let showWordCount = true;
  export let showMic = true;
  export let bgcolor = 'bg-[#F8F8F8]';
  let text = '';
  let isClicked = false;
  let recognition;
  let transcript = '';
  let lastActiveElement;

  onMount(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.continuous = true;

      recognition.onresult = (event) => {
        transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        transcript = transcript; // This line is necessary to make Svelte react to the change
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
    lastActiveElement = document.getElementById(id);
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
        case id:
          text += ' ' + formattedTranscript;
          break;
        default:
          break;
      }
      transcript = '';
    }
  }

  $: wordCount = text.split(' ').filter(function(n) { return n != '' }).length;
</script>

<div class="flex flex-col items-center mt-4">
  <p class="text-sm font-semibold tracking-wide text-neutral-800">{title}</p>
  <div class="relative md:min-w-[700px] max-w-[800px] w-11/12">
    {#if showWordCount}
    <p class="absolute top-[-24px] z-0 bg-neutral-700 text-[#F8F8F8] text-xs pb-4 px-2 rounded-t-md pt-1">{wordCount} words</p>
  {/if}
  
    
    <button 
  class="absolute z-20 font-bold text-white rounded" 
  on:click={toggleClick}
>
{#if showMic}
  <img
    src="/img/newerspeech.svg"
    class="{isClicked ? 'h-20 cursor-pointer animate-pulse' : 'h-[100px] w-[33px] cursor-pointer'}"
  />
  {/if}
</button>

{#if transcript}
  <div class="absolute top-[-50px] left-0 p-2 bg-white border border-black rounded z-20">
    <textarea 
      bind:value={transcript} 
      class="mb-2 text-xs border-none outline-none resize-none"
    ></textarea>
    <button 
      class="text-lg font-bold text-white rounded hover:bg-neutral-700" 
      on:click={insertTranscript}
    >
      🔽
    </button>
  </div>
{/if}




<textarea 
  bind:value={text} 
  placeholder={placeholder} 
  class="w-full min-h-[100px] px-2 py-1 pl-8 {bgcolor} text-neutral-800 border-2 border-neutral-800 resize-y  transition-all duration-200 ease-in-out focus:border-red-800 focus:outline-none focus:scale-102 rounded text-sm z-10 relative"
  style="height: 100px;"
  id={id}
  on:input="{() => wordCount = text.split(' ').filter(function(n) { return n != '' }).length}"
></textarea>
  </div>
</div>

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
