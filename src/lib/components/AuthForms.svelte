<script>
  import SignInForm from "./SignInForm.svelte";
  import SignUpForm from "./SignUpForm.svelte";
  import PasswordResetForm from "./PasswordResetForm.svelte";

  let activeForm = "signIn";
  let message = "";

</script>

<div class="flex flex-col mt-2">
  {#if message}
    <p>{message}</p>
  {/if}
  {#if activeForm === "signIn"}
  <SignInForm on:message="{(e) => (message = e.detail)}" />

    <button class="mt-2 bg-white text-black font-semibold py-2 px-6 border-2 border-black border-dashed rounded transition-colors duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none" on:click={() => (activeForm = "signUp")}
      >Sign Up</button
    >
    <button
      class="mt-2 bg-white text-black font-semibold py-2 px-6 border-2 border-black border-dashed rounded transition-colors duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none"
      on:click={() => (activeForm = "resetPassword")}>Reset Password</button
    >
  {:else if activeForm === "signUp"}
    <SignUpForm />
    <button class="mt-2 bg-white text-black font-semibold py-2 px-6 border-2 border-black border-dashed rounded transition-colors duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none" on:click={() => (activeForm = "signIn")}
      >Sign In</button
    >
  {:else if activeForm === "resetPassword"}
    <PasswordResetForm />
    <button class="mt-2 bg-white text-black font-semibold py-2 px-6 border-2 border-black border-dashed rounded transition-colors duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none" on:click={() => (activeForm = "signIn")}
      >Sign In</button
    >
  {/if}
</div>
