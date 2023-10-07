<script>
  import { onMount } from 'svelte';
  import { db } from '$lib/firebase.js';
  import { doc, getDoc, collection, getDocs } from "firebase/firestore";
  import Resultcard from '$lib/batch/GenResultCard.svelte';

  let resultCards = [];

  onMount(async () => {
    const collections = ['task1test', 'task2test', 'listeningtest', 'readingtest', '28augprofiles'];
    const fields = ['bandscore', 'bandscore', 'bandscore', 'bandscore', ['question_dWDjZA', 'First Name']];
    const scoreNames = ['wt1Score', 'wt2Score', 'listeningScore', 'readingScore'];

    const task2testDocs = await getDocs(collection(db, 'task2test'));
    for (let docData of task2testDocs.docs) {
      const userEmail = docData.id;
      let card = {
        imgSrc: '',
        name: '',
        wt1Score: '',
        wt2Score: '',
        listeningScore: '',
        readingScore: ''
      };
      for (let i = 0; i < collections.length; i++) {
        const docRef = doc(db, collections[i], userEmail);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log(`Data for ${collections[i]}:`, data);
          if (Array.isArray(fields[i])) {
            card.imgSrc = data[fields[i][0]];
            card.name = data[fields[i][1]];
          } else {
            card[scoreNames[i]] = data[fields[i]];
          }
        }
      }
      console.log('Updated card:', card); // Add this line to log the updated card
      resultCards = [...resultCards, card];
    }
  });
</script>

<section class="flex flex-col items-center justify-center">
  {#each resultCards as card (card.name)}
    <Resultcard 
      imgSrc={card.imgSrc} 
      name={card.name} 
      wt1Score={card.wt1Score} 
      wt2Score={card.wt2Score} 
      listeningScore={card.listeningScore} 
      readingScore={card.readingScore} 
    />
  {/each}
</section>
