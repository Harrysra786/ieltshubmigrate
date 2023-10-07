<script>
  import { onMount } from "svelte";
  import { onDestroy } from 'svelte';
  import lodash from 'lodash';
  const { debounce } = lodash;
  import BottomInfobox from '$lib/reuse/BottomInfo.svelte';
  import { fade } from 'svelte/transition';
  import { essayTopic, essayNumber } from './../../store'; // import the store
  let imageSrc = ' '
  let imageSrc2 = ' '
  let essays = [];
  let currentIndex = 0;
  let inputIndex = 0;
  let searchTerm = '';
  let searchResults = [];
  let filter = 'All Types';
  let message = '';
  let loading = true; // Add loading state
  let loadingTimeout; // Add a variable to hold the timeout
  let areaFilter = 'All';



  $: {
  if (essays[currentIndex]) {
    essayTopic.set(essays[currentIndex]?.essaytopic);
    essayNumber.set(essays[currentIndex]?.essaynumber);

    // Set the image source based on the essay type
    switch (essays[currentIndex]?.essaytype) {
      case 'CES Essay':
        imageSrc = '/img/problem.png';
        break;
      case 'Discussion Essay':
        imageSrc = '/img/discuss.png';
        break;
      case 'Agree Disagree Essay':
      case 'Agree Disagree (Absolute)':
      case 'Agree Disagree (Comparative)':
        imageSrc = '/img/disagree.png';
        break;
      case 'Positive-Negative Essay':
        imageSrc = '/img/posneg.png';
        break;
      case 'Unique Essay':
        imageSrc = '/img/unique.png';
        break;
      default:
        imageSrc = '/img/unique.png';
    }

    // Set the image source based on the essay area
    switch (essays[currentIndex]?.essayarea) {
      case 'Crime and Punishment':
        imageSrc2 = '/img/ideasbook/crime.svg';
        break;
      case 'Family Life':
        imageSrc2 = '/img/ideasbook/family.svg';
        break;
      case 'Technology and Science':
        imageSrc2 = '/img/ideasbook/technology.svg';
        break;
      case 'Health and Nutrition':
        imageSrc2 = '/img/ideasbook/health.svg';
        break;
      case 'Work life and Employment':
        imageSrc2 = '/img/ideasbook/work.svg';
        break;
      case 'Nature and Environment':
        imageSrc2 = '/img/ideasbook/environment.svg';
        break;
      case 'Art':
        imageSrc2 = '/img/ideasbook/art.svg';
        break;
      case 'Business and Economy':
        imageSrc2 = '/img/ideasbook/business.svg';
        break;
      case 'Education':
        imageSrc2 = '/img/ideasbook/education.svg';
        break;
      case 'Society and Culture':
        imageSrc2 = '/img/ideasbook/society.svg';
        break;
      case 'World Issues':
        imageSrc2 = '/img/ideasbook/world.svg';
        break;
      case 'The Media':
        imageSrc2 = '/img/ideasbook/media.svg';
        break;
      default:
        imageSrc2 = '/img/ideasbook/default.svg'; // replace with your default image
    }

    // Set a timeout to change the loading state after 500ms
    loadingTimeout = setTimeout(() => {
      loading = false;
    }, 500);
  }
}


function setAreaFilter(newFilter) {
  areaFilter = newFilter;
  currentIndex = essays.findIndex(essay => essayMatchesFilter(essay) && essayMatchesAreaFilter(essay));
  inputIndex = currentIndex;
  showMessage(`${areaFilter} Essay Area Loaded`);
}


function essayMatchesAreaFilter(essay) {
  if (areaFilter === 'All') {
    return true;
  }
  return essay.essayarea === areaFilter;
}


  function showMessage(newMessage) {
    message = newMessage;
    setTimeout(() => { message = ''; }, 1500);
  }

  function setFilter(newFilter) {
  filter = newFilter;
  currentIndex = essays.findIndex(essay => essayMatchesFilter(essay) && essayMatchesAreaFilter(essay));
  inputIndex = currentIndex;
  showMessage(`${filter} Essay Type Loaded`);
}


  function essayMatchesFilter(essay) {
    switch (filter) {
      case 'Problem':
        return essay.essaytype === 'CES Essay';
      case 'Discussion':
        return essay.essaytype === 'Discussion Essay';
      case 'Agree-Disagree':
        return ['Agree Disagree Essay', 'Agree-Disagree (Comparative)', 'Agree-Disagree (Absolute)'].includes(essay.essaytype);
      case 'Pros-Cons':
        return essay.essaytype === 'Positive-Negative Essay';
      case 'Unique':
        return essay.essaytype === 'Unique Essay';
      default:
        return true;
    }
  }

  onMount(async () => {
    const response = await fetch("/EssayBook.json");
    const data = await response.json();
    essays = data.Sheet1;
  });

  function nextEssay() {
  let newIndex = currentIndex;
  do {
    newIndex = (newIndex + 1) % essays.length;
  } while (!essayMatchesFilter(essays[newIndex]) || !essayMatchesAreaFilter(essays[newIndex]));
  currentIndex = newIndex;
  localStorage.setItem('essayNum', currentIndex + 1); // store the essay number
  window.scrollTo({ top: 400, behavior: 'smooth' });
}

function prevEssay() {
  let newIndex = currentIndex;
  do {
    newIndex = (newIndex - 1 + essays.length) % essays.length;
  } while (!essayMatchesFilter(essays[newIndex]) || !essayMatchesAreaFilter(essays[newIndex]));
  currentIndex = newIndex;
  localStorage.setItem('essayNum', currentIndex + 1); // store the essay number
  window.scrollTo({ top: 400, behavior: 'smooth' });
}



  function goToEssay() {
    if (filter === 'All Types' && inputIndex >= 0 && inputIndex < essays.length) {
      currentIndex = inputIndex -1;
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  }

  function selectSearchResult(result) {
    currentIndex = essays.findIndex(essay => essay.essaynumber === result.essaynumber);
    searchResults = [];
    setFilter('All Types');
  }

  function search() {
    if (searchTerm.trim() !== '') {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      searchResults = essays.filter((essay) => 
        essay.essaytopic.toLowerCase().includes(lowerCaseSearchTerm)
      ).slice(0, 10);
    } else {
      searchResults = [];
    }
  }
  
  let debouncedSearch = debounce(search, 300);

  function showMoreResults() {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    searchResults = essays.filter((essay) => 
      essay.essaytopic.toLowerCase().includes(lowerCaseSearchTerm)
    ).slice(0, searchResults.length + 10);
  }
  onDestroy(() => {
  clearTimeout(loadingTimeout);
});
</script>

{#if loading} <!-- If loading is true, show the loading element -->
  <div class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden z-[51] bg-amber-300">
    <span class="loading loading-infinity loading-lg"></span></div>
{/if}
<section class="flex-row items-center justify-center my-8 bg-white">
  <div class="flex items-center justify-center">
    <BottomInfobox />
      <p class="text-center bb s7 max-w-[800px] mt-16 mb-6 border-neutral-800 border-2 bg-zinc-100 border-dashed shadow-2xl shadow-black px-5 py-6 z-50 mx-6">The <s>Big</s>Biggest Book Of IELTS Band 9 Essays</p>
  </div>
 

  <div class="flex items-center justify-center mt-6">
  <div class="mb-2"><div class="relative">
    <input 
      bind:value={searchTerm} 
      on:input={debouncedSearch} 
      class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none border-bg-neutral focus:outline-none focus:shadow-outline" 
      placeholder="Search Essay" 
      autocomplete="off"
    />
    <div class="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded shadow">
      {#each searchResults as result (result.essaynumber)}
        <a 
          href="#"
          on:click|preventDefault={() => { currentIndex = essays.findIndex(essay => essay.essaynumber === result.essaynumber); searchResults = []; }}
          class="block px-4 py-2 border border-gray-700 border-dashed hover:bg-gray-200"
        >
          {result.essaytopic}
        </a>
      {/each}
      {#if searchResults.length === 10}
        <a href="#" on:click|preventDefault={showMoreResults} class="block px-4 py-2 hover:bg-gray-200">See more results</a>
      {/if}
      {#if searchResults.length === 0 && searchTerm !== ''}
        <div class="block px-4 py-2">No essay topic matches your query!</div>
      {/if}
    </div>
  </div>
  </div></div>

<div class="flex items-center justify-center mt-6">
    <p class="text-center bb s2 max-w-[800px] mt-2 px-5 font-extrabold">Filter By Essay Type</p>
</div>
<div class="flex items-center justify-center">
  <div class="flex flex-wrap items-center justify-center mx-2 mt-4 max-w-[800px]">
    
    <a href="#" on:click|preventDefault={() => setFilter('All Types')}><span class="mx-2 tag tag-javascript tag-lg {$$props.class = filter === 'All Types' ? 'border-red-700 border-2' : ''}">🌍 All Types</span></a>
    <a href="#" on:click|preventDefault={() => setFilter('Problem')}><span class="tag tag-typescript tag-lg {$$props.class = filter === 'Problem' ? 'border-red-700 border-2' : ''}">⚠️ Problem</span></a>
    <a href="#" on:click|preventDefault={() => setFilter('Discussion')}><span class="tag tag-firebase tag-lg {$$props.class = filter === 'Discussion' ? 'border-red-700 border-2' : ''}">🎙️ Discussion</span></a>
    <a href="#" on:click|preventDefault={() => setFilter('Agree-Disagree')}><span class="tag tag-ios tag-lg {$$props.class = filter === 'Agree-Disagree' ? 'border-red-700 border-2' : ''}">🎗️ Agree-Disagree</span></a>
    <a href="#" on:click|preventDefault={() => setFilter('Pros-Cons')}><span class="tag tag-stripe tag-lg {$$props.class = filter === 'Pros-Cons' ? 'border-red-700 border-2' : ''}">👍👎Pros-Cons</span></a>
    <a href="#" on:click|preventDefault={() => setFilter('Unique')}><span class="tag tag-angular tag-lg {$$props.class = filter === 'Unique' ? 'border-red-700 border-2' : ''}">🌈 Unique</span></a>


</div>
</div>
<div class="flex items-center justify-center mt-6">
  <p class="text-center bb s2 max-w-[800px] mt-2 px-5 font-extrabold">Filter By Essay Area</p>
</div>
<div class="flex items-center justify-center">
  <div class="flex flex-col items-center justify-center mx-2 mt-4 max-w-[800px]">
    
    <div class="flex flex-row">
  
      <a href="#" on:click|preventDefault={() => setAreaFilter('All')}>
        <span class="flex items-center justify-center mx-2 border-2 tag tag-javascript tag-lg {$$props.class = areaFilter === 'All' ? 'border-red-700 border-2' : ''}">
          <img src="/img/bolt.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
          <div>All Areas</div>
        </span>
      </a>
  </div>
  <div class="flex flex-row">
    <a href="#" on:click|preventDefault={() => setAreaFilter('Crime and Punishment')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-angular tag-lg {$$props.class = areaFilter === 'Crime and Punishment' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/crime.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Crime</div>
      </span>
    </a>
    <a href="#" on:click|preventDefault={() => setAreaFilter('Family Life')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-2 tag-lg {$$props.class = areaFilter === 'Family Life' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/family.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Family</div>
      </span>
    </a>
    <a href="#" on:click|preventDefault={() => setAreaFilter('Technology and Science')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-6 tag-lg {$$props.class = areaFilter === 'Technology and Science' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/technology.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Technology</div>
      </span>
    </a>
    <a href="#" on:click|preventDefault={() => setAreaFilter('Health and Nutrition')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-7 tag-lg {$$props.class = areaFilter === 'Health and Nutrition' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/health.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Health</div>
      </span>
    </a>
  </div>
  <div class="flex flex-row">
    <a href="#" on:click|preventDefault={() => setAreaFilter('Work life and Employment')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-8 tag-lg {$$props.class = areaFilter === 'Work life and Employment' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/work.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Work</div>
      </span>
    </a>
    <a href="#" on:click|preventDefault={() => setAreaFilter('Nature and Environment')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-9 tag-lg {$$props.class = areaFilter === 'Nature and Environment' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/environment.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Environment</div>
      </span>
    </a>
  
  

    <a href="#" on:click|preventDefault={() => setAreaFilter('Art')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-10 tag-lg {$$props.class = areaFilter === 'Art' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/art.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Art</div>
      </span>
    </a>
    <a href="#" on:click|preventDefault={() => setAreaFilter('Business and Economy')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-11 tag-lg {$$props.class = areaFilter === 'Business and Economy' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/business.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Business</div>
      </span>
    </a>
  </div>
  <div class="flex flex-row">
    <a href="#" on:click|preventDefault={() => setAreaFilter('Education')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-12 tag-lg {$$props.class = areaFilter === 'Education' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/education.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Education</div>
      </span>
    </a>
    <a href="#" on:click|preventDefault={() => setAreaFilter('Society and Culture')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-13 tag-lg {$$props.class = areaFilter === 'Society and Culture' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/society.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Society</div>
      </span>
    </a>
    <a href="#" on:click|preventDefault={() => setAreaFilter('World Issues')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-14 tag-lg {$$props.class = areaFilter === 'World Issues' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/world.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>World</div>
      </span>
    </a>
    <a href="#" on:click|preventDefault={() => setAreaFilter('The Media')}>
      <span class="flex items-center justify-center mx-2 border-2 tag tag-15 tag-lg {$$props.class = areaFilter === 'The Media' ? 'border-red-700 border-2' : ''}">
        <img src="/img/ideasbook/media.svg" class="w-3 h-3 mr-1 imgshadowed" alt="Icon" />
        <div>Media</div>
      </span>
    </a>
  
  </div>
  
  </div>
  </div>

<div class="flex items-center justify-center">

</div>

<div class="flex items-center justify-center mt-4">

  <nav class="max-w-[900px] w-full flex flex-row px-2 py-3 my-2 mb-4 text-base border-2 border-dashed bottom-navigation border-neutral-800 justify-around bg-[#F8F0E3]">
  <a href="" on:click|preventDefault={prevEssay}>
      <img
      src="/img/Turn left.svg"
      class="mr-4 w-9 h-9 imgshadowed"
      alt="Icon"
      />
  </a>
  {#if filter === 'All Types'}
<div class="flex items-center space-x-4">
<input bind:value={inputIndex} class="w-12 text-center border-2 rounded border-neutral-500" type="number" min="0" max={essays.length - 1}>
<button class="btn7" on:click|preventDefault={goToEssay}>
<p class="font-bold">Go</p>
</button>
</div>
{/if}


  <a href="" on:click|preventDefault={nextEssay}>
      <img
      src="/img/Turn right.svg"
      class="mr-4 w-9 h-9 imgshadowed"
      alt="Icon"
      />
  </a>
</nav></div>
  <div id="viewport" class="flex items-center justify-center px-2 mt-3">

    
    <div class="max-w-[900px] mx-5 px-12 tiny:px-3 tiny:mx-1 py-6 border-2 border-dashed shadow-2xl bg-zinc-100 shadow-black border-neutral-800">
        
                  <p class="py-6 mt-4 mb-4 text-3xl font-black text-center">Essay Number #{essays[currentIndex]?.essaynumber}</p>
                  <div class="border-2 rounded-sm border-neutral-800 overflow-clip">
                      <div class="flex flex-col tiny3:flex-row tiny3:items-center px-2 py-3 text-base topic-Info justify-evenly bg-[#F1E0C5] border-b-neutral-800 border-2 overflow-clip">
                          <div class="flex flex-row items-center essay-Type">
                            <img
  src={imageSrc}
  class="w-12 h-12 mr-4 imgshadowed"
  alt="Icon"
/>

                              <p class="text-base font-bold"> {essays[currentIndex]?.essaytype}
                              </p>
                              
                          </div>
                          <div class="flex flex-row items-center essay-Type">
                            <img
  src={imageSrc2}
  class="w-12 h-12 mr-4 imgshadowed"
  alt="Icon"
/>

                              <p class="text-base font-bold"> {essays[currentIndex]?.essayarea}
                              </p>
                              
                          </div>
                      </div>
                 
                      <div class="px-6 py-4 topic s3 bg-[#F8F0E3]">{essays[currentIndex]?.essaytopic}
                      </div>
                  </div>
                  <div class="flex flex-col mt-1 space-x-2 tiny:space-x-0 tiny3:flex-row">
                      <div class="mt-2 border-2 rounded-md border-neutral-800 overflow-clip bg-[#F8F0E3]">
                          <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]">
                              <div class="flex flex-row items-center mt-3 essay-Type">
                                  <img
                                  src="/img/bolt.svg"
                                  class="w-6 h-6 my-1 mr-4 imgshadowed"
                                  alt="Icon"
                                  />
                                  <p class="text-base font-bold"> Band 9 Sample Answer
                                  </p>
                              </div>
                          </div>
                          <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{@html essays[currentIndex]?.essaysample9.replace(/\n/g, '<br>')}</div>
                      </div>
                      <div class="mt-2 border-2 rounded-md border-neutral-800 overflow-clip bg-[#F8F0E3]">
                          <div class="flex flex-row px-2 pt-3 text-base topic-Info justify-evenly bg-[#F8F0E3]">
                              <div class="flex flex-row items-center mt-2 essay-Type">
                                  <img
                                  src="/img/vote.png"
                                  class="mr-4 w-7 h-7 imgshadowed"
                                  alt="Icon"
                                  />
                                  <p class="text-base font-bold"> Simpler Version
                                  </p>
                              </div>
                          </div>
                          <div class="px-6 py-4 topic bg-[#F8F0E3] s2">{@html essays[currentIndex]?.essaysample7.replace(/\n/g, '<br>')}</div>
                      </div>
                  </div>
                  <nav class="flex flex-row px-2 py-3 my-2 mb-4 text-base border-2 border-dashed bottom-navigation border-neutral-800 justify-around bg-[#F8F0E3]">
                      <a href="" on:click|preventDefault={prevEssay}>
                          <img
                          src="/img/Turn left.svg"
                          class="mr-4 w-9 h-9 imgshadowed"
                          alt="Icon"
                          />
                      </a>
                      {#if filter === 'All Types'}
  <div class="flex items-center space-x-4">
    <input bind:value={inputIndex} class="w-12 text-center border-2 rounded border-neutral-500" type="number" min="0" max={essays.length - 1}>
    <button class="btn7" on:click|preventDefault={goToEssay}>
      <p class="font-bold">Go</p>
    </button>
  </div>
{/if}

                    
                      <a href="" on:click|preventDefault={nextEssay}>
                          <img
                          src="/img/Turn right.svg"
                          class="mr-4 w-9 h-9 imgshadowed"
                          alt="Icon"
                          />
                      </a>
                  </nav>
              </div>
          </div>

          

</section>
  <style>
    :root {
      --red: #ff3860;
      --red-dark: #ff1443;
      --red-light: #ff5c7c;
      --blue: #498afb;
      --blue-dark: #2674fa;
      --blue-light: #6ca0fc;
      --orange: #fa8142;
      --orange-dark: #f96a1f;
      --orange-light: #fb9865;
      --green: #09c372;
      --green-dark: #07a15e;
      --green-light: #0be586;
      --purple: #9166cc;
      --purple-dark: #7d4bc3;
      --purple-light: #a481d5;
      --yellow: #ffdd57;
      --yellow-dark: #ffd633;
      --yellow-light: #ffe47a;
      --pink: #ff4088;
      --pink-dark: #ff1c72;
      --pink-light: #ff649e;
      --gray0: #f8f8f8;
      --gray1: #dbe1e8;
      --gray2: #b2becd;
      --gray3: #6c7983;
      --gray4: #454e56;
      --gray5: #2a2e35;
      --gray6: #12181b;
      --nav-width: 4em;
      --font-body: "sofia-pro", sans-serif;
      --font-head: "sofia-pro", sans-serif;
      --font-code: "attribute-mono", monospace;
      --font-size: 20px;
      --max-width-bp: 768px;
      --orange-pink: linear-gradient(
        to bottom right,
        var(--orange-light),
        var(--orange-dark) 85%
      );
      --green-grad: linear-gradient(
        to bottom right,
        var(--green-light),
        var(--green-dark) 85%
      );
      --background: var(--gray6);
      --text-color: var(--gray2);
      --h-color: #fff;
      --nav-shadow: 4px 0 10px -3px #010101;
      --card-shadow: 0 4px 8px rgba(0, 0, 0, 0.38);
      --toc-shadow: rgba(0, 0, 0, 0.7) 0px 10px 20px 0px;
      --nav-bg: var(--gray5);
      --tag-bg: var(--gray4);
      --code-bg: #22262f;
      --card-bg: var(--gray5);
      --overlay-bg: rgba(0, 0, 0, 0.9);
      --h-border: 2px dashed var(--nav-bg);
      --nav-border: 2px dashed var(--text-color);
      --card-radius: 0.25em;
      transition: all 0.3s ease;
    }

    .tag {
      display: flex;
      border-radius: 3px;
      padding: 0.2em 1.5em 0.3em;
      border-radius: 2px;
      background: var(--tag-bg);
      color: var(--text-color);
      font-weight: 600;
      margin: 0.25em 0.3em;
    }

    .tag-lg {
      font-size: 0.7em;
      border-radius: 4px;
    }

    .tag-javascript {
      background: #f0db4f;
      color: #000;
    }

    .tag-javascript2 {
      background: #f4c64e;
      color: #000;
    }

    .tag-typescript {
      background: #2775c3;
      color: #fff;
    }

    .tag-angular {
      background: #dc0530;
      color: #fff;
    }

    .tag-firebase {
      background: #ffcb2b;
      color: #12181a;
    }

    .tag-stripe {
      color: #fff;
      background: #6675e0;
    }

    .tag-ios {
      color: #fff;
      background: #000;
    }

    .tag-1 {
  background: #7FDBFF;
  color: #000;
}

.tag-2 {
  background: #013e73;
  color: #fff;
}

.tag-3 {
  background: #01FF70;
  color: #000;
}

.tag-4 {
  background: #a41811;
  color: #fff;
}

.tag-5 {
  background: #FF851B;
  color: #000;
}

.tag-6 {
  background: #000000;
  color: #fff;
}

.tag-7 {
  background: #920a25;
  color: #ffffff;
}

.tag-8 {
  background: #ffb300;
  color: #000;
}

.tag-9 {
  background: #2775c3;
      color: #fff;
}

.tag-10 {
  background: #a50251;
  color: #fff;
}

.tag-11 {
  background: #072c1c;
  color: #fff;
}

.tag-12 {
  background: #ffc400;
  color: #000;
}

.tag-13 {
  background: #1d3500;
  color: #fff;
}

.tag-14 {
  background: #39CCCC;
  color: #000;
}

.tag-15 {
  background: #181717;
  color: #fff;
}

  
  </style>
