<script>
  import { auth } from '$lib/firebase.js';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';

  async function login() {
      try {
          await auth.signInWithEmailAndPassword(email, password);
          goto('/');
      } catch (error) {
          alert(error.message);
      }
  }
</script>

<div class="flex items-center justify-center min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8">
<div class="w-full max-w-md space-y-8">
  <div>
    <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
      Sign in to your account
    </h2>
  </div>
  <form class="mt-8 space-y-6" on:submit|preventDefault={login}>
    <input type="hidden" name="remember" value="true">
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input bind:value={email} id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input bind:value={password} id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
      </div>
    </div>
    <div>
      <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md group hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Sign in
      </button>
    </div>
  </form>
</div>
</div>
