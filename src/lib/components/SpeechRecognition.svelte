<!-- SpeechRecognition.svelte -->
<script>
    import { onMount } from 'svelte';
  
    let textbox: HTMLInputElement;
    let startStopBtn: HTMLButtonElement;
    let options: HTMLDivElement;
    let insertBtn: HTMLButtonElement;
    let cancelBtn: HTMLButtonElement;
    let recordedTextElement: HTMLInputElement;
  
    let recognition: SpeechRecognition | undefined;
    let isRecording = false;
    let recordedText = '';
  
    function startRecording() {
      recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = true;
      recognition.continuous = true;
  
      recognition.onresult = (event) => {
        let tempText = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          tempText += event.results[i][0].transcript;
        }
        recordedText = tempText;
        recordedTextElement.value = capitalizeFirstLetter(recordedText.trim()) + '.';
      };
  
      recognition.onend = () => {
        options.classList.remove('hidden');
      };
  
      recognition.start();
    }
  
    function stopRecording() {
      recognition?.stop();
    }
  
    function capitalizeFirstLetter(text: string) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  
    function onStartStopBtnClick() {
      if (!isRecording) {
        startRecording();
        startStopBtn.textContent = 'Stop';
        startStopBtn.classList.remove('bg-green-500');
        startStopBtn.classList.add('bg-red-500');
      } else {
        stopRecording();
        startStopBtn.textContent = 'Speak first sentence';
        startStopBtn.classList.remove('bg-red-500');
        startStopBtn.classList.add('bg-green-500');
      }
      isRecording = !isRecording;
    }
  
    function onInsertBtnClick() {
      textbox.value += recordedTextElement.value + ' ';
      options.classList.add('hidden');
      startStopBtn.textContent = 'Speak next sentence';
    }
  
    function onCancelBtnClick() {
      options.classList.add('hidden');
      startStopBtn.click();
    }
  </script>
  
  <input type="text" bind:this={textbox} />
  <button bind:this={startStopBtn} on:click={onStartStopBtnClick}>Start</button>
  <div bind:this={options} class="hidden">
    <input type="text" bind:this={recordedTextElement} />
    <button bind:this={insertBtn} on:click={onInsertBtnClick}>Insert</button>
    <button bind:this={cancelBtn} on:click={onCancelBtnClick}>Cancel</button>
  </div>
  