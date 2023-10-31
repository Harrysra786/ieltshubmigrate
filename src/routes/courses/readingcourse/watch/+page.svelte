<script>
    import { onMount } from 'svelte';
    import { getDoc, doc, db } from '$lib/firebase';
    import { getAuth } from 'firebase/auth';
    import { onAuthStateChanged } from 'firebase/auth';

    import LoginModal from '$lib/reusefire/LoginModal.svelte';
    import Readingvideos from '$lib/courses/readingvideos.svelte'

    let auth = getAuth();
let user = null;
    let showLoginModal = false;
    let hasAccess = false;
    
    onMount(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    user = currentUser;
    if (user) {
      const userDoc = doc(db, '1users', user.email);
      console.log('User Doc:', userDoc);

      const courseDoc = await getDoc(doc(userDoc, 'Purchases', 'ReadingCourse'));
      console.log('Course Doc:', courseDoc);

      hasAccess = courseDoc.exists();
      console.log('Has Access:', hasAccess);
    }
  });

  return () => unsubscribe();
});

    </script>
  {#if hasAccess}
    <Readingvideos />
    {:else}

    <div class="flex flex-col items-center justify-center h-full">
    
      <p class="text-lg text-gray-800">
        You do not have access to this course. 
      </p>
    
      <div class="flex space-x-2 text-blue-500">
        <button 
          class="underline"
          on:click={() => showLoginModal = true}
        >
          login
        </button>
    
        <p>or, if you are already logged in, </p>
    
        <a href="/courses/readingcourse" class="underline">
          purchase the course
        </a>
      </div>
    
    </div>
    
    <LoginModal bind:show={showLoginModal}/>
    
    {/if}