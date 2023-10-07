<script>
  import { onMount } from 'svelte';
  import { auth } from '$lib/firebase';

  let email = '';
  let password = '';
  let confirmPassword = '';
  let showLogin = true;
  let showRegister = false;
  let showForgotPassword = false;
  let errorMessage = '';

  const toggleLogin = () => {
    showLogin = true;
    showRegister = false;
    showForgotPassword = false;
  };

  const toggleRegister = () => {
    showLogin = false;
    showRegister = true;
    showForgotPassword = false;
  };

  const toggleForgotPassword = () => {
    showLogin = false;
    showRegister = false;
    showForgotPassword = true;
  };

  const handleLogin = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      console.log('User logged in:', userCredential.user);
      // You can add additional logic here, such as redirecting to a different page
    } catch (error) {
      errorMessage = error.message;
      console.error('Login error:', error);
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      errorMessage = "Passwords don't match";
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      console.log('User registered:', userCredential.user);
      // You can add additional logic here, such as redirecting to a different page
    } catch (error) {
      errorMessage = error.message;
      console.error('Registration error:', error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      console.log('Password reset email sent');
      // You can add additional logic here, such as showing a success message
    } catch (error) {
      errorMessage = error.message;
      console.error('Forgot password error:', error);
    }
  };

  onMount(() => {
    // Add any necessary initialization logic here
  });
</script>

<div class="flex flex-col items-center justify-center">
  <div class="mb-4">
    <button
      class="px-4 py-2 text-white bg-blue-500 rounded"
      class:font-bold={showLogin}
      on:click={toggleLogin}
    >
      Login
    </button>
    <button
      class="px-4 py-2 text-white bg-blue-500 rounded"
      class:font-bold={showRegister}
      on:click={toggleRegister}
    >
      Register
    </button>
    <button
      class="px-4 py-2 text-white bg-blue-500 rounded"
      class:font-bold={showForgotPassword}
      on:click={toggleForgotPassword}
    >
      Forgot Password
    </button>
  </div>

  {#if showLogin}
    <div>
      <h2 class="mb-4 text-2xl font-bold">Login</h2>
      {#if errorMessage}
        <p class="mb-2 text-red-500">{errorMessage}</p>
      {/if}
      <form class="w-full max-w-sm">
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" id="email" bind:value={email} class="w-full px-4 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password</label>
          <input type="password" id="password" bind:value={password} class="w-full px-4 py-2 border rounded" />
        </div>
        <button type="button" class="px-4 py-2 text-white bg-blue-500 rounded" on:click={handleLogin}>
          Login
        </button>
      </form>
    </div>
  {/if}

  {#if showRegister}
    <div>
      <h2 class="mb-4 text-2xl font-bold">Register</h2>
      {#if errorMessage}
        <p class="mb-2 text-red-500">{errorMessage}</p>
      {/if}
      <form class="w-full max-w-sm">
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" id="email" bind:value={email} class="w-full px-4 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password</label>
          <input type="password" id="password" bind:value={password} class="w-full px-4 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="confirmPassword" class="block mb-2">Confirm Password</label>
          <input type="password" id="confirmPassword" bind:value={confirmPassword} class="w-full px-4 py-2 border rounded" />
        </div>
        <button type="button" class="px-4 py-2 text-white bg-blue-500 rounded" on:click={handleRegister}>
          Register
        </button>
      </form>
    </div>
  {/if}

  {#if showForgotPassword}
    <div>
      <h2 class="mb-4 text-2xl font-bold">Forgot Password</h2>
      {#if errorMessage}
        <p class="mb-2 text-red-500">{errorMessage}</p>
      {/if}
      <form class="w-full max-w-sm">
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" id="email" bind:value={email} class="w-full px-4 py-2 border rounded" />
        </div>
        <button type="button" class="px-4 py-2 text-white bg-blue-500 rounded" on:click={handleForgotPassword}>
          Reset Password
        </button>
      </form>
    </div>
  {/if}
</div>
