<script>
  import { onMount } from "svelte";
  import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
  import { firestore } from "../../lib/firebase";

  let ID = "";
  let Lesson = "";
  let LessonID = "";
  let LessonSrc = "";
  let coursecontent = [];

  onMount(async () => {
    const lessonsCollection = collection(firestore, "lessons");
    const unsubscribe = onSnapshot(lessonsCollection, (snapshot) => {
      coursecontent = snapshot.docs.map((doc) => doc.data());
    });

    return () => {
      unsubscribe();
    };
  });

  async function addLesson() {
    const lessonsCollection = collection(firestore, "lessons");
    await addDoc(lessonsCollection, {
      ID: parseInt(ID),
      Lesson,
      LessonID,
      LessonSrc,
    });

    ID = "";
    Lesson = "";
    LessonID = "";
    LessonSrc = "";
  }
</script>

<div class="container mx-auto p-4 flex flex-col">
  <h1 class="text-xl font-bold mb-4">Add Lesson</h1>
  <div class="grid grid-cols-2 gap-4">
    <input
      class="border border-gray-300 p-2 rounded"
      type="text"
      placeholder="ID"
      bind:value={ID}
    />
    <input
      class="border border-gray-300 p-2 rounded"
      type="text"
      placeholder="Lesson"
      bind:value={Lesson}
    />
    <input
      class="border border-gray-300 p-2 rounded"
      type="text"
      placeholder="LessonID"
      bind:value={LessonID}
    />
    <input
      class="border border-gray-300 p-2 rounded"
      type="text"
      placeholder="LessonSrc"
      bind:value={LessonSrc}
    />
  </div>
  <button
    class="bg-blue-500 text-white px-4 py-2 rounded mt-4"
    on:click={addLesson}
  >
    Add Lesson
  </button>

  <h2 class="text-xl font-bold mt-8 mb-4">Existing Lessons</h2>
  <ul>
    {#each coursecontent as lesson}
      <li class="border-b border-gray-300 py-2">
        <p><strong>ID:</strong> {lesson.ID}</p>
        <p><strong>Lesson:</strong> {lesson.Lesson}</p>
        <p><strong>LessonID:</strong> {lesson.LessonID}</p>
        <p><strong>LessonSrc:</strong> {lesson.LessonSrc}</p>
      </li>
    {/each}
  </ul>
</div>
