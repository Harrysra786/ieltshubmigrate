<script>
    import { onMount } from 'svelte';
    import { db, auth } from '$lib/firebase2.js';
    import { doc, setDoc } from "firebase/firestore";

    export let scoringSchemaFile = '';
    export let jsonFile = '';
    export let collectionName = '';
    export let title = '';

    let scoringSchema = {};
    let answers = Array(40).fill('');
    let correctAnswers = {};
    let score = 0;
    let checked = false;
  
    onMount(async () => {
      const response = await fetch(jsonFile);
      correctAnswers = await response.json();
      const schemaResponse = await fetch(scoringSchemaFile);
      scoringSchema = await schemaResponse.json();
    });
  
    async function checkAnswers() {
        score = 0;
  let answerResults = {};
  answers.forEach((answer, index) => {
    const correctAnswer = correctAnswers[index + 1];
    let isCorrect = false;
    if (answer) {
      if (Array.isArray(correctAnswer)) {
        if (correctAnswer.map(ans => ans.toLowerCase()).includes(answer.trim().toLowerCase())) {
          score++;
          isCorrect = true;
        }
      } else {
        if (correctAnswer.toLowerCase() === answer.trim().toLowerCase()) {
          score++;
          isCorrect = true;
        }
      }
    }
    answerResults[index + 1] = isCorrect;
  });
  checked = true;

  // Calculate band score using the imported scoring schema
  let band = scoringSchema[score];
  if (band === undefined || typeof band !== 'number') {
    console.error('Invalid band score:', band);
    return;
}
  // Store the data in Firestore
  if (auth.currentUser) {
        const userEmail = auth.currentUser.email;
        const userDoc = doc(db, collectionName, userEmail);
        const data = {
            ...answerResults,
            score: score,
            bandscore: band
        };
        try {
            await setDoc(userDoc, data);
        } catch (error) {
            console.error('Error writing document: ', error);
        }
    }
}
</script>

<section class="flex flex-col items-center justify-center mt-8">
    <img class="block mx-auto mb-1 w-14 h-14 imgshadowed" src="/img/onlinecourse.svg" alt="clock">
    <h1 class="mx-2 mb-5 font-black tracking-wider s5 montserrat">{title}</h1>

  
    <div class="container px-4 mx-auto">
        <form on:submit|preventDefault={checkAnswers}>
          {#each Array(40) as _, i}
            <div class="my-4">
              <label for={`q${i + 1}`} class="block mb-2 text-sm font-bold text-gray-700">Question {i + 1}:</label>
              <div class="flex items-center">
                <input id={`q${i + 1}`} bind:value={answers[i]} class="mr-2 myinput" placeholder="Your answer" />
                {#if checked}
                  {#if typeof correctAnswers[i + 1] === 'string' ? answers[i].trim().toLowerCase() === correctAnswers[i + 1].toLowerCase() : correctAnswers[i + 1].map(ans => ans.toLowerCase()).includes(answers[i].trim().toLowerCase())}
                    <img src="/img/Confirm.svg" alt="Correct" class="w-6 h-6 text-green-500 imgshadowed" />
                  {:else}
                    <img src="/img/Delete.svg" alt="Incorrect" class="w-6 h-6 text-red-500 imgshadowed" />
                  {/if}
                {/if}
              </div>
              {#if checked && typeof correctAnswers[i + 1] !== 'string' && !correctAnswers[i + 1].map(ans => ans.toLowerCase()).includes(answers[i].trim().toLowerCase())}
                <p class="ml-2 text-red-500">Correct answer: {correctAnswers[i + 1]}</p>
              {/if}
            </div>
          {/each}
          <button type="submit" class="btn btn-primary">Check Answers</button>
    
          {#if checked}
          <p class="mt-4 text-xl font-bold">Your score is {score}/40.</p>
          <p class="mt-4 text-xl font-bold">Your band score is {scoringSchema[score]}.</p>
          
    {/if}
        </form>
      </div>
    </section>
