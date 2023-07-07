<script>
    let showLogin = false;
    let showRegister = false;
  </script>
  
  <div class="flex justify-center items-center h-screen bg-neutral-800">
    <div class="bg-white p-10 rounded-lg shadow-lg w-96">
      {#if !showLogin && !showRegister}
        <button class="w-full py-2 rounded bg-neutral-800 text-white" on:click={() => (showLogin = true)}>Login</button>
        <button class="w-full py-2 mt-4 rounded bg-neutral-800 text-white" on:click={() => (showRegister = true)}>Register</button>
      {/if}
  
      {#if showLogin}
        <form>
          <input class="w-full py-2 px-4 rounded mt-4" type="email" placeholder="Email ID">
          <input class="w-full py-2 px-4 rounded mt-4" type="password" placeholder="Password">
          <button class="w-full py-2 mt-4 rounded bg-neutral-800 text-white">Login</button>
          <p class="mt-4 text-right text-neutral-800 cursor-pointer" on:click={() => (showLogin = false)}>Forgot password?</p>
        </form>
      {/if}
  
      {#if showRegister}
        <form>
          <input class="w-full py-2 px-4 rounded mt-4" type="email" placeholder="Email ID">
          <input class="w-full py-2 px-4 rounded mt-4" type="password" placeholder="Password">
          <button class="w-full py-2 mt-4 rounded bg-neutral-800 text-white">Register</button>
        </form>
      {/if}
    </div>
  </div>
  