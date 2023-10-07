<script>
  import { doc, setDoc, Timestamp } from "firebase/firestore"; 
  import { getFirestore } from "firebase/firestore";
  
  let selectedDay = '';
  let selectedModule = '';
  let selectedType = '';
  let selectedStart = '';
  let textInput = '';
  let embedInput = '';
  let date = '';
  let span = '';
  let message = '';
  let setMessage = msg => message = msg;
  let firestore = getFirestore();

  let submitData = async () => {
  if (!selectedDay || !selectedModule || !selectedType || !textInput || !embedInput) {
    setMessage('Please fill all the fields');
    return;
  }
  let id = embedInput.match(/id="([^"]*)/)[1];
  let src = embedInput.match(/src="([^"]*)/)[1];
  let types = selectedType === 'Both' ? ['Acad', 'Gen'] : [`${selectedType.slice(0, 4)}`];
  for (let type of types) {
    let docRef = doc(firestore, `1data/${type}videos/${selectedModule}/day ${selectedDay}`);
    let videoData = `${textInput}*${id}*${src}`;
    let videoField = `video${Math.floor(Math.random() * 1000)}`; // generates a random video field name
    await setDoc(docRef, { [videoField]: videoData }, { merge: true });
  }
  setMessage('Success!');
}



  let setData = async () => {
    if (!date || !span || !selectedStart) {
      setMessage('Please fill all the fields');
      return;
    }
    let docRef = doc(firestore, `1data/${selectedStart}videos/control`);
    await setDoc(docRef, { date: Timestamp.fromDate(new Date(date)), days: Number(span) }, { merge: true });
    setMessage('Success!');
  }
</script>

<section class="flex flex-col items-center justify-center mt-8">
  <div class="flex flex-col items-center justify-center mt-6 border-2 border-dashed shadow-md p-7 border-zinc-800 shadow-black max-w-[920px] mx-1">
  <div class="flex flex-col">
    <h1 class="mb-3 tracking-wider text-center s7 anton">Day Selection</h1>
    <div class="grid">
      {#each [1, 2, 3, 4] as j}
        <div class="flex justify-between">
          {#each Array(7).fill() as _, i}
            <label class="flex flex-col items-center justify-center p-2 cursor-pointer">
              <input type="radio" id="day-{7*(j-1) + i + 1}" class="hidden" bind:group={selectedDay} value={7*(j-1) + i + 1} />
              
              <div class="flex items-center justify-center w-20 h-6 text-sm text-black bg-gray-200 rounded">
                Day {7*(j-1) + i + 1}
              </div>
            </label>
          {/each}
        </div>
      {/each}
    </div>

    <div class="flex flex-col mt-4">
      <h1 class="mb-3 tracking-wider text-center s7 anton">Module Selection</h1>
      <div class="flex justify-center">
        {#each ['Reading', 'Speaking', 'Writing', 'Listening', 'Others'] as value}
          <label class="flex flex-col items-center justify-center p-2 cursor-pointer">
            <input type="radio" id="module-{value}" class="hidden" bind:group={selectedModule} value={value} />
            
            <div class="flex items-center justify-center w-20 h-6 text-sm text-black bg-gray-200 rounded">
              {value}
            </div>
          </label>
        {/each}
      </div>
    </div>
  </div>

  <div class="flex flex-col mt-4">
    <h1 class="mb-3 tracking-wider text-center s7 anton">Type Selection</h1>
    <div class="flex justify-center">
      {#each ['Academic', 'General', 'Both'] as value}
        <label class="flex flex-col items-center justify-center p-2 cursor-pointer">

<input type="radio" id="type-{value}" class="hidden" bind:group={selectedType} value={value} />

          <div class="flex items-center justify-center w-20 h-6 text-sm text-black bg-gray-200 rounded">
            {value}
          </div>
        </label>
      {/each}
    </div>
  </div>
  
  <div class="flex flex-col w-full px-4 mt-4">
    <textarea id="name-input" bind:value={textInput} rows="2" class="w-full p-2 border rounded" placeholder="Video name here"></textarea>
    <textarea id="embed-input" bind:value={embedInput} rows="6" class="w-full p-2 mt-1 border rounded" placeholder="Place your embed code here"></textarea>
    
  </div>
  
  <!-- Submit Button -->
  <div class="flex justify-center mt-4">
    <button id="submit-button" class="px-4 py-2 text-white rounded bg-neutral-800" on:click={submitData}>Submit</button>
  </div>
  
  <!-- Date Selector and Span Input -->
  <div class="flex justify-between mt-12 space-x-4">
    <input id="date-selector" type="date" bind:value={date} class="p-2 border rounded" />
    <input id="span-input" type="text" bind:value={span} placeholder="Span" class="p-2 border rounded" />
  </div>

  <div class="flex justify-center">
    {#each ['Academic', 'General'] as value}
      <label class="flex flex-col items-center justify-center p-2 cursor-pointer">

<input type="radio" id="type-{value}" class="hidden" bind:group={selectedStart} value={value} />

        <div class="flex items-center justify-center w-20 h-6 text-sm text-black bg-gray-200 rounded">
          {value}
        </div>
      </label>
    {/each}
  </div>

  <!-- Set Button -->
  <div class="flex justify-center mt-4">
    <button id="set-button" class="px-4 py-2 text-white rounded bg-neutral-800" on:click={setData}>Set</button>
  </div>
  <p>{message}</p>

</div>
</section>

<style>
  input:checked + div {
    background-color: #F4c64e;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  button {
    transition: all 0.3s ease;
  }
  
  button:hover {
    transform: scale(1.1);
  }
  
  button:active {
    transform: scale(0.9);
  }
  
</style>
