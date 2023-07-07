<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { collection, onSnapshot } from "firebase/firestore";
  import { firestore } from "../../lib/firebase";

  let showMenu = false;
  let coursecontent = [];
  let selectedLesson = {
    LessonID: "",
    LessonSrc: "",
    Lesson: "",
  };
  let arrowRotation = 0;

  onMount(async () => {
    const lessonsCollection = collection(firestore, "lessons");
    const unsubscribe = onSnapshot(lessonsCollection, (snapshot) => {
      coursecontent = snapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => a.ID - b.ID);
    });

    return () => {
      unsubscribe();
    };
  });

  function goToPreviousLesson() {
    const currentIndex = coursecontent.findIndex(
      (lesson) => lesson.ID === selectedLesson.ID
    );
    if (currentIndex > 0) {
      selectedLesson = coursecontent[currentIndex - 1];
    }
  }

  function goToNextLesson() {
    const currentIndex = coursecontent.findIndex(
      (lesson) => lesson.ID === selectedLesson.ID
    );
    if (currentIndex < coursecontent.length - 1) {
      selectedLesson = coursecontent[currentIndex + 1];
    }
  }
</script>

<!-- Contaienr -->
<div class="flex justify-center items-center bg-neutral-800">
  <section
    class="bg-white flex flex-row ml-5 border-neutral-800 border-l-2 border-b-2 border-t-2 w-full my-5 max-w-screen-xl max-h-[928px]"
  >
    <!-- Main Frame -->
    <div
      id="mainframe"
      class="w-full flex flex-col justify-center items-center"
    >
      <!-- Lesson Name -->
      <h1 class="py-2 pt-4 border-neutral-800 border-b-2 border-solid w-full">
        <p
          class="px-4 text-lg font-extrabold text-gray-800 text-center my-web-font tracking-tight"
        >
          {selectedLesson.Lesson}
        </p>
      </h1>
      <!-- Lesson Video -->
      <div class="w-full h-full px-7 pb-2 pt-5" style="height: 56.25vw;">
        <div class="relative h-0 w-full" style="padding-bottom: 56.25%;">
          <style>
            @media (max-width: 640px) {
              div[style="height: 56.25vw;"] {
                height: 50vh;
              }
            }
          </style>
          <iframe
            id={selectedLesson.LessonID}
            class="absolute inset-0 w-full h-full"
            src={selectedLesson.LessonSrc}
          />
        </div>
      </div>

      <!-- Next and Previous Buttons -->
      <div class="flex flex-row space-x-10 tiny:space-x-2 my-5">
        <button
          class="flex bg-white text-neutral-800 font-black py-1 px-6 border-2 tiny:border tiny:shadow-sm tiny:shadow-black/25 border-neutral-800 border-solid rounded-sm transition duration-300 ease-in-out transform hover:bg-neutral-800 hover:text-white focus:outline-none h-6 text-xs items-center"
          on:click={goToPreviousLesson}
          ><img
            src="/img/doublearrowleft.svg"
            class="w-3 h-3 mr-2 imgshadowed"
            alt="Icon"
          /> Previous</button
        >
        <button
          class="flex flex-row-reverse bg-white text-neutral-800 font-black py-1 px-6 border-2 tiny:border tiny:shadow-sm tiny:shadow-black/25 border-black border-solid rounded-sm transition duration-300 ease-in-out transform hover:bg-neutral-800 hover:text-white focus:outline-none h-6 text-xs items-center"
          on:click={goToNextLesson}
          ><img
            src="/img/doublearrowright.svg"
            class="w-3 h-3 ml-2 imgshadowed"
            alt="Icon"
          /> Next</button
        >
      </div>
      <div>Discussion Area</div>
    </div>
    <!-- Side Frame Collapsable-->
    <section
      class="flex flex-row-reverse bg-white border-neutral-800 border-l-2 border-solid"
    >
      <div
        class="tvrl rotate-180 text-center my-web-font text-lg font-black text-neutral-800"
      >
        Lessons
      </div>
      <img
        src="/img/doublearrowleft.svg"
        class="w-5 h-5 mt-2 cursor-pointer imgshadowed self-center transform ml-4 {showMenu
          ? 'rotate-180'
          : ''}"
        alt="Icon"
        on:click={() => (showMenu = !showMenu)}
      />

      {#if showMenu}
        <div class="w-full pl-4 pr-4 text-left">
          {#each coursecontent as lesson}<a
              class="block w-full text-left text-sm tiny:text-xs font-bold py-1 border-black border-b-[2px] lesson-link cursor-pointer hover:bg-[#f4c64e]"
              on:click={() => (selectedLesson = lesson)}
            >
              {lesson.Lesson}
            </a>{/each}
        </div>
      {/if}
    </section>
  </section>
</div>
