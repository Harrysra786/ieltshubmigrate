<script>
	import { getAuth } from "firebase/auth";
	import { getFirestore, doc, setDoc, collection, getDoc, serverTimestamp, getDocs } from "firebase/firestore";
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/firebase.js';
	let topic, mbp1, mbp2, conclusion, intro;
	

	let recognition;
let transcript = '';
let lastActiveElement;
let isClicked = false;
let activeElementId;

onMount(() => {
  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      transcript = event.results[0][0].transcript;
      transcript = transcript; // This line is necessary to make Svelte react to the change
    };

    recognition.onend = () => {
      if (transcript) {
        // Display the transcribed text and the 'insert' button
      }
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

function toggleClick(event) {
    activeElementId = event.target.dataset.textareaId;
    isClicked = !isClicked;
    if (isClicked) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }


function formatTranscript(transcript) {
  return transcript.charAt(0).toUpperCase() + transcript.slice(1) + '.';
}

function insertTranscript() {
    if (activeElementId) {
      let formattedTranscript = formatTranscript(transcript);
      switch (activeElementId) {
        case 'topic':
          topic += ' ' + formattedTranscript;
          break;
      case 'intro':
        intro += ' ' + formattedTranscript;
        break;
      case 'mbp1':
        mbp1 += ' ' + formattedTranscript;
        break;
      case 'mbp2':
        mbp2 += ' ' + formattedTranscript;
        break;
      case 'conclusion':
        conclusion += ' ' + formattedTranscript;
        break;
      default:
        break;
    }
    transcript = '';
  }
}



	const handleSubmit = async () => {
	  console.log('handleSubmit called');
  
	  const user = getAuth().currentUser;
	  if (!user) {
		console.error('User is not logged in');
		return;
	  }
  
	  const userDocRef = doc(db, 'users', user.uid);
  
	  try {
		const userDoc = await getDoc(userDocRef);
		const userData = userDoc.data();
		const name = `${userData.firstName} ${userData.lastName}`;
		const phone = userData.phoneNumber;
		const email = user.email;
		const time = serverTimestamp();
  
		const essayCollectionRef = collection(doc(db, 'markings', `${email}`), 'essaymarking');

		const essayCount = (await getDocs(essayCollectionRef)).size;
		const essayDocRef = doc(essayCollectionRef, `essay${essayCount + 1}`);
  
		await setDoc(essayDocRef, {
		  Topic: topic,
		  Intro: intro,
		  MBP1: mbp1,
		  MBP2: mbp2,
		  Conc: conclusion,
		  Time: time,
		  name,
		  email,
		  uid: user.uid,
		  phone
		});
  
		alert('Submission successful!');
	  } catch (error) {
		console.error('Error in handleSubmit:', error);
	  }
	};
  </script>


<section class="flex items-center justify-center mt-8 bg-white ">
	<div class="max-w[800px] text-center">
	  <p class="pl-4 mt-2 font-semibold text-center s2">The Topic</p>
	  <div class="relative">
		<textarea
		  bind:value={topic}
		  id="topic"
		  class="w-11/12 p-4 mt-2 mb-5 text-xs font-normal text-center border-2 border-solid rounded bg-amber-50 mx-7 border-neutral-800"
		  placeholder="Your topic here..."
		/>
		<!-- Repeat this button for each textarea -->
		<button 
		  class="absolute top-2 left-2 px-1 py-1 font-bold text-white rounded {isClicked && activeElementId === 'topic' ? 'bg-rose-900 animate-pulse' : 'bg-neutral-500 hover:bg-neutral-800'}" 
		  on:click|stopPropagation={toggleClick}
		  data-textarea-id="topic"
		>
		  <img
			src="/img/speech.svg"
			class="{isClicked && activeElementId === 'topic' ? 'w-3 h-3 cursor-pointer animate-pulse' : 'w-3 h-3 cursor-pointer'}"
		  />
		</button>
		{#if transcript && activeElementId === 'topic'}
		  <div class="absolute top-0 left-0 p-2 mt-12 bg-white border border-black rounded">
			<p class="mb-2">{formatTranscript(transcript)}</p>
			<button 
			  class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" 
			  on:click|stopPropagation={insertTranscript}
			>
			  Insert
			</button>
		  </div>
		{/if}
	  </div>
	  
	
	<div class="max-w[800px] text-center">
<p class="pl-4 mt-2 font-semibold text-center s2">The Topic</p>
			<textarea
				bind:value={topic}
				id="topic"
				class="w-11/12 p-4 mt-2 mb-5 text-xs font-normal text-center border-2 border-solid rounded bg-amber-50 mx-7 border-neutral-800"
				placeholder="Let me know the exact topic you are writing on so that I can check your essay for Task Achievement (on topic or off topic)."
				on:focus={() => (lastActiveElement = 'topic')}
				/>
			<textarea
				bind:value={intro}
				id="intro"
				class="w-11/12 p-4 mt-2 mb-5 text-xs font-normal text-center bg-white border-2 border-solid rounded mx-7 border-neutral-800"
				placeholder="Your Intro here..."
				on:focus={() => (lastActiveElement = 'intro')}
				/>
			<textarea
				bind:value={mbp1}
				id="mbp1"
				class="w-11/12 p-4 mt-2 mb-5 text-xs font-normal text-center bg-white border-2 border-solid rounded mx-7 border-neutral-800"
				placeholder="Your Main Body Paragraph 1 here..."
				on:focus={() => (lastActiveElement = 'mbp1')}
				/>
			<textarea
				bind:value={mbp2}
				id="mbp2"
				class="w-11/12 p-4 mt-2 mb-5 text-xs font-normal text-center bg-white border-2 border-solid rounded mx-7 border-neutral-800"
				placeholder="Your Main Body Paragraph 2 here..."
				on:focus={() => (lastActiveElement = 'mbp2')}
				/>
			<textarea
				bind:value={conclusion}
				id="conclusion"
				class="w-11/12 p-4 mt-2 mb-5 text-xs font-normal text-center bg-white border-2 border-solid rounded mx-7 border-neutral-800"
				placeholder="Your Conclusion here..."
				on:focus={() => (lastActiveElement = 'conclusion')}
				/>

			<button
				on:click={handleSubmit}
				class="cursor-pointer transition-all bg-neutral-800 text-white px-6 py-2 rounded-lg
border-neutral-700
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mb-6">
				Submit</button
			>
		</div>
</section>
