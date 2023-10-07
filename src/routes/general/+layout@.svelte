<script>
    import { onMount } from 'svelte';
    import { checkAccess } from '$lib/checkAccess.js'; // Import the function
    import Login from "$lib/reusefire/auth2.svelte"
    import { onAuthStateChanged } from "firebase/auth";
    import { auth } from '$lib/firebase.js'; // Import your initialized Firebase auth
    import BackButton from '$lib/reuse/BackButton.svelte';
    let userAccess = false;
    let userEmail = null;

    onMount(async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user && user.email) {
        userEmail = user.email;
        userAccess = await checkAccess(userEmail, '28augbatch');
      }
    });
  });
</script>

<BackButton />
{#if !userAccess}
<div class="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-md">
    <div class="m-auto bg-white pointer-events-auto">
      <p>Welcome</p>
      
      <div id="modalogin" class="mx-1 mt-6 px-20 tiny:px-2 max-w-[980px] text-center pt-8 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800">
        <img class="block mx-auto mb-1 w-14 h-14 imgshadowed" src="/img/Elearning.svg" alt="clock">
        <h1 class="mx-2 tracking-wider s7 anton">
          <span class="mx-2 s2 montserrat">Members Only Area!</span>
          <br>
          <span class="mx-2 s5 montserrat">Log In to Continue...</span>
          <br> General Masterclass
        </h1>
        <h3 class="mx-2 mt-2 mb-4 text-xs">
          A track record of <span class="font-bold" data-svelte-h="svelte-1q6fv7n">400+</span>
          successful <span class="font-bold" data-svelte-h="svelte-9vasqf">8777 Results</span>
          <span class="hue-rotate-90 imgshadowed s2" data-svelte-h="svelte-144uqtf">✅</span>
        </h3>
        <Login />
        {#if userEmail}
        <h3 class="mx-2 mt-2 mb-4 text-xs max-w-[400px] px-4 text-red-600 tracking-wide font-normal">
          Please note that this is a members only area. If you have registered for the General batch but still do not have access, message us by clicking the button below:
        </h3>

        <a href="https://wa.me/+918528723949?text=I%20have%20logged%20in%20with%20my%20email%20Id%3A%20{encodeURIComponent(userEmail)}.%20However%2C%20I%20still%20do%20not%20have%20access%20to%20the%20dashboard.%20Please%20help%21" class="text-[#ecd4d48] transition duration-150 ease-in-out font-sans font-bold text-lg flex justify-center cursor-pointer"><img src="/img/whatsapp.svg" class="w-10 h-10 cursor-pointer imgshadowed"></a>
        {/if}
        
        <h1 class="pt-3 pb-2 mx-2 mt-4 font-bold tracking-wider text-gray-100 rounded-t-full s5 bg-neutral-800">Welcome, Learner.</h1>
      </div>

      </div>
  </div>
  {/if}
<slot />