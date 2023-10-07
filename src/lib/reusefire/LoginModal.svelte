<script>
    import Login from "$lib/reusefire/auth3.svelte"
    export let show = false;
  </script>
  
  <svelte:window on:keydown={(e) => { if (e.key === 'Escape' && show) show = false }} />
    {#if show}  
  <Login on:loggedIn={() => show = false} />

  

  <div class="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-md">
    <div class="m-auto bg-white pointer-events-auto">
      <div id="modalogin" class="mx-1 mt-6 px-20 tiny:px-2 max-w-[980px] text-center pt-8 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800">
        <img class="block mx-auto w-14 h-14 imgshadowed" src="/img/Academic.svg" alt="clock">
        <h1 class="mx-2 mb-3 tracking-wider s7 anton">
          <span class="mx-2 s1 montserrat">You Need To Be Logged In To Purchase</span>
          <br> The IELTS HUB
        </h1>
        <Login />
        <h1 class="pt-3 pb-2 mx-2 mt-4 font-bold tracking-wider text-gray-100 rounded-t-full s5 bg-neutral-800">Welcome, Learner.</h1>
      </div>
    </div>
  </div>
  {/if}