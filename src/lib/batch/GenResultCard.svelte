<script>
  import { onMount } from 'svelte';
  import { auth, db, doc } from '$lib/firebase'; // Import Firebase configuration
  import { getDoc } from 'firebase/firestore';
  
    let imgSrc = '';
    let name = '';
    let message = '';
    let showContent = false;
    let loading = true;
  
    onMount(async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'task2test', user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const profileRef = doc(db, '28augprofiles', user.email);
          const profileSnap = await getDoc(profileRef);
          if (profileSnap.exists()) {
            imgSrc = profileSnap.data()['question_dWDjZA'];
            name = profileSnap.data()['First Name'];
            showContent = true;
          } else {
            message = 'No profile data found';
          }
        } else {
          message = 'You did not attempt the full mock test';
        }
      } else {
        message = 'No user is signed in';
      }
      setTimeout(() => {
        loading = false;
      }, 1000);
    });
  </script>

  {#if loading}
  <p>Loading...</p>
{:else if showContent}

<section class="relative py-2 bg-blueGray-50">
  <div class="w-full px-4">
    <article class="relative flex flex-col w-full min-w-0 text-white break-words rounded shadow-lg bg-neutral-800">
      <header class="px-4 py-3 mb-0 border-0 rounded-t">
        <div class="flex flex-wrap items-center justify-center">
          <div class="relative flex items-center justify-center w-full max-w-full px-4">
              <img src={imgSrc} class="w-12 h-12 mr-4 bg-white border rounded-full imgshadowed" alt="User profile picture">
              <h3 class="text-lg font-semibold text-white">{name}</h3>
          </div>
        </div>
      </header>

      <div class="block w-full overflow-x-auto">
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
              <tr>
                <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">WT2</th>
                <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">WT2</th>
                <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">WRITING</th>
                <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">LISTENING</th>
                <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">READING</th>
                <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">SPEAKING</th>
                <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">OVERALL</th>
              </tr>
            </thead>

          <tbody>
            <tr>
              <td class="p-4 px-6 text-xs text-white align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">6.0</td>
              <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">7.0</td>
              <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">7.0</td>
              <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">8.0</td>
              <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">7.0</td>
              <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">7.0</td>
              <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">7.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  </div>
</section>
<p class="font-mono text-center">Please message Hardev Sir Directly if you have any questions about your feedback</p>
{:else}
  {#if message}
    <p>{message}</p>
  {/if}
{/if}

