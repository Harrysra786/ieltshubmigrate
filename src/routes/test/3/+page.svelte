<script>
    let showLogin = true;
    let showRegister = false;
    let showForgot = false;
  
    function toggleView(view) {
      showLogin = view === 'login';
      showRegister = view === 'register';
      showForgot = view === 'forgot';
    }
  </script>
  
  <div class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
  
      {#if showLogin}
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Sign in to your account
        </h2>
        
        <form class="mt-8 space-y-6" action="#" method="POST">
  
          <!-- Email input -->
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
          </div>
  
          <!-- Password input -->
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
  
          <div>
            <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
  
      {:else if showRegister}
  
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Create your account
        </h2>
        
        <!-- Registration form -->
        <form class="mt-8 space-y-6" action="#" method="POST">
  
          <!-- Name input -->
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="name" class="sr-only">Name</label>
              <input id="name" name="name" type="text" autocomplete="name" required class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name">
            </div>
          </div>
          
          <!-- Email input -->
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
          </div>
  
          <!-- Password input -->
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
  
          <div>
            <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign up
            </button>
          </div>
  
        </form>
  
      {:else if showForgot}
  
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Forgot your password?
        </h2>
        
        <p class="mt-2 text-sm text-center text-gray-600">
          We'll send a reset link to your inbox.
        </p>
        
        <!-- Forgot password form -->
        <form class="mt-8 space-y-6" action="#" method="POST">
        
          <!-- Email input -->
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
          </div>
  
          <div>
            <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Reset Password
            </button>
          </div>
          
        </form>
  
      {/if}
  
      <div class="mt-4 text-sm">
        <a href="javascript:void(0)" class="font-medium text-indigo-600 hover:text-indigo-500" on:click={() => toggleView('login')}>
          Sign in
        </a>
        <span class="mx-2">·</span>
        <a href="javascript:void(0)" class="font-medium text-indigo-600 hover:text-indigo-500" on:click={() => toggleView('register')}>
          Register
        </a>
        <span class="mx-2">·</span>      
        <a href="javascript:void(0)" class="font-medium text-indigo-600 hover:text-indigo-500" on:click={() => toggleView('forgot')}>
          Forgot password
        </a>
      </div>
  
    </div>
  </div>