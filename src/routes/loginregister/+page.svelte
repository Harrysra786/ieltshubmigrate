<script>
    import { signIn, signUp, resetPassword } from "$lib/authService";
      import { onMount } from 'svelte';
      import intlTelInput from 'intl-tel-input';
      import 'intl-tel-input/build/css/intlTelInput.css';
    
      let email = "";
      let password = "";
      let phone = "";
      let firstName = "";
      let lastName = "";
      let activeForm = "";
      let formVisible = false;
      let message = "";
      onMount(() => {
        intlTelInput(document.querySelector('#mobile_code'), {
          initialCountry: "in",
          separateDialCode: true,
        });
      });
    
      function initPhoneInput() {
        setTimeout(() => {
          intlTelInput(document.querySelector('#mobile_code'), {
            initialCountry: "in",
            separateDialCode: true,
          });
        }, 0);
      }
    
      
      async function handleSubmit() {
  try {
    if (activeForm === "Login") {
      await signIn(email, password);
      message = "Successfully logged in!";
    } else if (activeForm === "Register") {
      await signUp(email, password); // use signUp function here
      message = "Successfully registered!";
    } else if (activeForm === "Reset Password") {
      await resetPassword(email);
      message = "Password reset email sent! Please check your spam folder if you do not see the email";
    }
  } catch (error) {
    message = `Error: ${error.message}`;
  }
}

    
    </script>
    
    <section class="flex items-center justify-center">
    
    <div class="flex flex-col px-10 pt-4 pb-8 mt-8 bg-white border-2 border-dashed rounded-sm shadow-md border-neutral-900">
      <div class="relative flex items-center justify-center w-full mb-4">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
          src="/img/Hardev Sir Avatar.png"
          class="relative w-32 h-32 max-w-3xl mx-auto scale-up-bottom lg:max-w-none imgshadowed sm:m-0 rounded-2xl"
        />
      </div>
      <h2 class="mx-6 font-black text-center">
        <p class="text-2xl tiny:text-base">Hardev Sir's</p>
        <p class="mb-8 text-4xl md:text-5xl">IELTS-HUB</p>
      </h2>
      {#if message}
      <p class="mb-4 text-neutral-800">{message}</p>
      {/if}
      {#if !formVisible}
      <button class="p-2 mb-2 text-black bg-gray-200 rounded form-button" on:click={() => { activeForm = "Login"; formVisible = true; initPhoneInput(); }}>Login</button>
    <button class="p-2 mb-2 text-black bg-gray-200 rounded form-button" on:click={() => { activeForm = "Register"; formVisible = true; initPhoneInput(); }}>Register</button>
    
    {/if}
    
      {#if formVisible}
      <form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
        {#if activeForm === "Register"}
        <input class="p-2 mb-4 border border-gray-300 rounded form-input" type="text" bind:value={firstName} placeholder="First Name" required />
        <input class="p-2 mb-4 border border-gray-300 rounded form-input" type="text" bind:value={lastName} placeholder="Last Name" required />
        {/if}
        <input class="p-2 mb-4 border border-gray-300 rounded form-input" type="email" bind:value={email} placeholder="Email" required />
    {#if activeForm !== "Reset Password"}
      <input class="p-2 mb-4 border border-gray-300 rounded form-input" type="password" bind:value={password} placeholder="Password" required />
      {#if activeForm === "Register"}
        <input id="mobile_code" class="self-center p-2 mb-4 border border-gray-300 rounded form-input" type="tel" bind:value={phone} placeholder="Phone Number" required />
      {/if}
    {/if}
    
        <button class=" bg-neutral-800 text-white py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-neutral-800 hover:border-solid mt-4 mb-4" type="submit">{activeForm}</button>
      </form>
      {#if activeForm === "Login"}
      <button class="p-2 text-black bg-gray-200 rounded form-button" on:click={() => (activeForm = "Reset Password")}>Reset Password</button>
    {/if}
    
      {/if}
    </div>
  </section>