<script>
    let currentLesson = null;
  
    function refreshPage() {
      window.location.reload();
    }
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen pt-6 mt-6 bg-gray-100">
      <div class="w-10/12 max-w-[785px] p-5 bg-white rounded shadow-lg border-2 border-neutral-800 border-dashed">
        <h1 class="pb-6 mt-6 mb-5 text-center border-b-2 border-solid headline2 border-neutral-800"><p class="headline3">The Big Book </p><br>of <br><br>Ideas for IELTS Essay <br><br><p class="s4">By Hardev Singh</p></h1>
        <div class="flex items-center justify-center">
        <ul class="flex-col ml-8 w/1/2">
          <li class="flex items-center my-5 cursor-pointer">
              <img src="/img/ideasbook/Lessons.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'preface'} class="ml-4 text-neutral-800 hover:underline">Preface</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
              <img src="/img/ideasbook/crime.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson1'} class="ml-4 text-neutral-800 hover:underline">Lesson #1 - Crime and Punishment</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/family.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson2'} class="ml-4 text-neutral-800 hover:underline">Lesson #2 - Family Life</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/technology.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson3'} class="ml-4 text-neutral-800 hover:underline">Lesson #3 - Science and Technology</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/health.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson4'} class="ml-4 text-neutral-800 hover:underline">Lesson #4 - Health and Nutrition</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/work.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson5'} class="ml-4 text-neutral-800 hover:underline">Lesson #5 - Work and Employment</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/environment.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson6'} class="ml-4 text-neutral-800 hover:underline">Lesson #6 - Natural Environment</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/art.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson7'} class="ml-4 text-neutral-800 hover:underline">Lesson #7 - Art and Language</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/business.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson8'} class="ml-4 text-neutral-800 hover:underline">Lesson #8 - Economy and Business</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/education.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson9'} class="ml-4 text-neutral-800 hover:underline">Lesson #9 - Education and Academic Life</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/society.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson10'} class="ml-4 text-neutral-800 hover:underline">Lesson #10 - Society and Culture</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/world.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson11'} class="ml-4 text-neutral-800 hover:underline">Lesson #11 - World Issues</a>
          </li>
          <li class="flex items-center my-5 cursor-pointer">
            <img src="/img/ideasbook/media.svg" class="cursor-pointer w-7 h-7 imgshadowed s-">
            <a on:click={() => currentLesson = 'lesson12'} class="ml-4 text-neutral-800 hover:underline">Lesson #12 - The Media</a>
          </li>
        </ul></div>
      </div>
    </div>
    
    <section>
        {#if currentLesson}
  <button class="fade-in"
    style="position: fixed; top: 10px; left: 10px; z-index: 999999999; background-color: #B30000; color: white; border: none; padding: 10px 20px; cursor: pointer;" 
    on:click={refreshPage}
  >
    Go Back
  </button>
{/if}
    {#if currentLesson === 'preface'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-introduction' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson1'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l1-crime-and-punishment' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson2'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l2-family-life' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson3'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l3-science-and-technology' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson4'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l4-health-and-nutrition' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson5'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l5-work-and-employment' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson6'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l6-natural-environment' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson7'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l7-art-and-language' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson8'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l8-economy-and-business' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson9'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l9-education-and-academic-life' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson10'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l10-society-and-culture' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson11'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l11-world-issues' style='border:0' allowfullscreen></iframe></div>
    {/if}
    {#if currentLesson === 'lesson12'}
      <div class='embed-container'><iframe src='https://flipbooklets.com/pdfflipbooklets/ideas-for-ielts-l12-the-media' style='border:0' allowfullscreen></iframe></div>
    {/if}
  </section>
  
  <style>.embed-container { position: fixed; top: 0; left: 0; right: 0; bottom: 0; margin: 0; padding: 0; overflow: hidden; width: 100%; max-width: 100%; z-index: 9999999;} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>
  