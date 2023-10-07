<script>
  import { signIn, signUp } from "$lib/authService";
  import { createEventDispatcher } from 'svelte';

  let email = "";
  let password = "";
  let firstName = "";
  let lastName = "";
  let phone = "";
  let message = "";
  let isLogin = true;
  let isError = false;
  
  const dispatch = createEventDispatcher();

  async function handleSubmit() {
  try {
    if (isLogin) {
      await signIn(email, password);
      message = "Successfully logged in!";
      isError = false;
      dispatch('loggedIn'); // Dispatch the 'loggedIn' event
    } else {
      await signUp(email, password, phone, firstName, lastName);
      message = "Successfully registered! Please check your email for verification.";
      isError = false;
      isLogin = true; // Switch back to login after successful registration
    }
  } catch (error) {
    message = `Error: ${error.message}`;
    isError = true;
  }
}

  
  function switchForm() {
    isLogin = !isLogin;
    message = ""; // Clear the message when switching forms
  }
</script>
  
  <div class="flex flex-col px-10 pt-4 pb-8 mt-1 bg-white border-2 border-dashed rounded-sm shadow-md border-neutral-900">
  
    {#if message}
    <p class="mb-4 text-neutral-800 {isError ? 'text-red-500 font-bold' : 'text-green-500 font-bold'}">{message}</p>
    {/if}
    <form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
      {#if isLogin}
        <p class="mb-2 text-xs font-bold text-red">Enter your email and password to login.</p>
      {:else}
        <p class="mb-2 text-xs font-bold text-red">Enter your details to register.</p>
        <input class="p-2 mb-4 border border-gray-300 rounded myinput form-input" type="text" bind:value={firstName} placeholder="First Name" required />
        <input class="p-2 mb-4 border border-gray-300 rounded myinput form-input" type="text" bind:value={lastName} placeholder="Last Name" required />
        <input class="p-2 mb-4 border border-gray-300 rounded myinput form-input" type="tel" bind:value={phone} placeholder="Phone" required />
      {/if}
      <input class="p-2 mb-4 border border-gray-300 rounded myinput form-input" type="email" bind:value={email} placeholder="Email" required />
      <input class="p-2 mb-4 border border-gray-300 rounded myinput form-input" type="password" bind:value={password} placeholder="Password" required />
      <button class=" bg-neutral-800 text-white py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-neutral-800 hover:border-solid mt-4 mb-4" type="submit">{isLogin ? 'Login' : 'Register'}</button>
    </form>
    <button class="mt-4 underline" on:click={switchForm}>{isLogin ? 'Need to register?' : 'Already registered?'}</button>
  </div>
  