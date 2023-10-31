<script>
  import { onMount } from 'svelte';
  import { auth, db, getDoc, doc } from '$lib/firebase.js';
  import Essaysubmit from '$lib/checking/EssayCheckSubmit2.svelte'
  import Essayresult from '$lib/checking/EssayCheckFeedback.svelte'
  import Essaybuy from '$lib/checking/EssayCheckBuy.svelte'
  
  let left = '3';
  let activeTab = 'tab-profile';

  function changeAtiveTab(event, tabID) {
    activeTab = tabID;
  }

  onMount(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, '1users', user.email, 'Purchases', 'EssayCredits');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          left = docSnap.data().Credits;
        } else {
          console.log("No such document!");
        }
      }
    });
  });
</script>

<section class="flex flex-col items-center justify-center">
<div class="flex max-w-[840px] border-x border-b border-neutral-800">
  <div class="flex flex-row-reverse px-10 py-2 bg-slate-200"><h1 class="self-center pr-4 text-sm tracking-tighter text-center">You have {left} essay corrections left. </h1> <div><img class="flex w-8 mr-3" src="/img/Exam.svg" alt="clock"></div></div>
</div>
</section>






  <section class="flex flex-col items-center justify-center">
    <div class="flex max-w-[840px] px-2">
  <div class="flex flex-wrap" id="tabs-id">
    <div class="w-full">
      <ul class="flex flex-row mt-5 border-2 border-neutral-800 rounded-t-md">
        <li class="w-1/3 text-center cursor-pointer">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-t block leading-normal {activeTab === 'tab-profile' ? 'text-white bg-neutral-800' : 'text-neutral-800 bg-white'}" on:click="{(e) => changeAtiveTab(e, 'tab-profile')}">
            <i class="mr-1 text-base fas fa-paper-plane"></i>  Submit Essay
          </a>
        </li>
        <li class="w-1/3 text-center cursor-pointer">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-t block leading-normal {activeTab === 'tab-settings' ? 'text-white bg-neutral-800' : 'text-neutral-800 bg-white'}" on:click="{(e) => changeAtiveTab(e, 'tab-settings')}">
            <i class="mr-1 text-base fas fa-cog"></i>  Essay Feedback
          </a>
        </li>
        <li class="w-1/3 text-center cursor-pointer">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-t block leading-normal {activeTab === 'tab-options' ? 'text-white bg-neutral-800' : 'text-neutral-800 bg-white'}" on:click="{(e) => changeAtiveTab(e, 'tab-options')}">
            <i class="mr-1 text-base fas fa-briefcase"></i>  Buy More
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div class="flex-auto">
          <div class="tab-content tab-space">
            <div class="{activeTab === 'tab-profile' ? 'block' : 'hidden'}" id="tab-profile">
              <Essaysubmit />
            </div>
            <div class="{activeTab === 'tab-settings' ? 'block' : 'hidden'}" id="tab-settings">
              <Essayresult />
            </div>
            <div class="{activeTab === 'tab-options' ? 'block' : 'hidden'}" id="tab-options">
              <Essaybuy />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>