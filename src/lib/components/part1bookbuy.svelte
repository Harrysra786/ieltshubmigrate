<script>
   import { onMount } from 'svelte';
   import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
  import { user } from './../store.js';
  import PaymentButton from './PaymentButton.svelte';
  import { signUp, signIn } from './../authService.js';
  onMount(() => {
    intlTelInput(document.querySelector('#mobile_code'), {
      initialCountry: "in",
      separateDialCode: true,
    });
  });
  let productName = 'part1book';
  let price = 2; // replace with the actual price
  let email = '';
  let password = '';
  let phone = "";
  let firstName = "";
  let lastName = "";
  async function handlePaymentSuccess() {
  let userEmail;
  // subscribe to user store to get the email
  user.subscribe(value => {
    userEmail = value?.email; // replace with the actual property name for email
  })();
  
  try {
    await fetch('https://h.albato.com/wh/38/1lfuq9k/O3OSzaaMaXXa72XF2uTbB1_88gILhv0ku6Eg4OZ4JKE/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail }),
    });
  } catch (error) {
    console.error('A problem occurred with your fetch operation: ', error);
  } finally {
    // Always redirect, even if the fetch operation fails
    window.location.href = '/ideasforielts/read';
  }
}

  
  async function handleLogin() {
    try {
      await signIn(email, password);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  
  async function handleRegister() {
  try {
    await signUp(email, password, phone, firstName, lastName);
    // handle success...
  } catch (error) {
    // handle error...
  }
}
  </script>
  
  
  
<div class="flex flex-col items-center justify-center min-h-screen px-5 pt-6 tiny:pt-5">
<!-- Book picture -->
{#if $user}
  <PaymentButton {productName} {price} on:paymentSuccess={handlePaymentSuccess} />
  {:else}
  <button class="inline-flex items-center px-4 py-2 mb-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-sm bg-neutral-800 hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none" type="button" on:click={() => document.getElementById('loginModal').classList.add('modal-open')}>Buy Now</button>
  <div class="modal" id="loginModal">
    <div class="modal-box">
      <div class="relative flex items-center justify-center w-full mb-4">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
      src="/img/Hardev Sir Avatar.png"
      class="relative w-16 h-16 max-w-3xl mx-auto scale-up-bottom lg:max-w-none imgshadowed sm:m-0 rounded-2xl"
    />
  </div>
      <h2 class="mb-4 text-center text-md"><b>You need to be Logged In to buy!</b></h2>
      <h2 class="text-center text-md">If you are already registered, you <b>only need to fill in the email and password to login.</b> If not registered, fill all fields and click register.</h2>
      <form class="space-y-4">
        <input class="border-dashed input border-neutral-800" type="text" bind:value={firstName} placeholder="First Name">
<input class="border-dashed input border-neutral-800" type="text" bind:value={lastName} placeholder="Last Name">


        <input class="border-dashed input border-neutral-800" type="email" bind:value={email} placeholder="Email">
        <input class="border-dashed input border-neutral-800" type="password" bind:value={password} placeholder="Password">
        <input id="mobile_code" class="self-center p-2 mb-4 border border-gray-300 rounded form-input" type="tel" bind:value={phone} placeholder="Phone Number" required />

        <div class="flex justify-center space-x-4">
          <button class="bg-neutral-800 text-white py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-neutral-800 hover:border-solid mb-4" type="button" on:click={handleLogin}>Login</button>
          <button class="bg-neutral-800 text-white py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-neutral-800 hover:border-solid mb-4" type="button" on:click={handleRegister}>Register</button>
        </div>
      </form>
    </div>
  </div>
{/if}



<section class="w-full flex justify-center border-black border-[1px] rounded-t-xl overflow-clip max-w-[1420px] mx-7">

  <!-- svelte-ignore a11y-missing-attribute -->
  <img src="/img/part1speakingfinalcover.png" class="w-full max-w-[1420px]">
</section>


<!-- Book Information -->
<section class="w-full flex justify-center border-black overflow-clip border-x-[1px] border-b-[1px] max-w-[1420px] mx-7 tiny:flex-col">

<!-- Left Info Column -->
    <div class="flex-grow w-3/4 tiny:w-full">  


      <p class="flex font-extrabold text-2xl justify-center border-black border-b-[1px] px-10 py-7 text-center tiny:border-t-[1px]">The Big Book of IELTS Speaking Part 1</p>

<div class="flex items-center justify-evenly">
  
  <p class="px-4 py-2 text-base font-semibold text-center">🪙 INR 299</p>
  <div class="border-l-[1px] border-black h-20"></div>
  <!-- svelte-ignore a11y-missing-attribute -->
  <p class="px-4 py-2 text-base font-semibold text-center"><img src="/img/Hardev Sir Avatar.png" class="w-6 rounded-full avatar online "> Hardev Singh</p>
  <div class="border-l-[1px] border-black h-20"></div>
  <p class="px-4 py-2 text-base font-semibold text-center">⭐⭐⭐⭐⭐ 17 Ratings</p>
  
          
</div>

  <div>
    <div class="flex flex-col items-center justify-center border-black border-t-[1px] pt-6">
      <!-- Book picture -->
      {#if $user}
  <PaymentButton {productName} {price} on:paymentSuccess={handlePaymentSuccess} />
  {:else}
  <button class="inline-flex items-center px-4 py-2 mb-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-sm bg-neutral-800 hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none" type="button" on:click={() => document.getElementById('loginModal').classList.add('modal-open')}>Buy Now</button>
  <div class="modal" id="loginModal">
    <div class="modal-box">
      <div class="relative flex items-center justify-center w-full mb-4">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
      src="/img/Hardev Sir Avatar.png"
      class="relative w-16 h-16 max-w-3xl mx-auto scale-up-bottom lg:max-w-none imgshadowed sm:m-0 rounded-2xl"
    />
  </div>
      <h2 class="text-center text-md"><b>You need to be Logged In to buy!</b></h2>
      <h2 class="text-center text-md">If you are already registered, just fill in the email and password to login. If not registered, fill all fields and click register.</h2>
      <form class="space-y-4">
        <input class="border-dashed input border-neutral-800" type="text" bind:value={firstName} placeholder="First Name">
<input class="border-dashed input border-neutral-800" type="text" bind:value={lastName} placeholder="Last Name">

        <input class="border-dashed input border-neutral-800" type="email" bind:value={email} placeholder="Email">
        <input class="border-dashed input border-neutral-800" type="password" bind:value={password} placeholder="Password">
        <input id="mobile_code" class="self-center p-2 mb-4 border border-gray-300 rounded form-input" type="tel" bind:value={phone} placeholder="Phone Number" required />

        <div class="flex justify-center space-x-4">
          <button class="bg-neutral-800 text-white py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-neutral-800 hover:border-solid mb-4" type="button" on:click={handleLogin}>Login</button>
          <button class="bg-neutral-800 text-white py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-neutral-800 hover:border-solid mb-4" type="button" on:click={handleRegister}>Register</button>
        </div>
      </form>
    </div>
  </div>
{/if}
    

</div>
<p class="flex justify-center px-6 pb-6">
  Unlock your potential with this comprehensive guide, brimming with a diverse array of essay topics meticulously organized into 12 unique categories. 
  <br><br>
  This book is your key to effortlessly discovering captivating ideas for your essays. Designed to elevate your IELTS writing task 2 score, this book is an indispensable tool for every student aiming for excellence.
  <br><br>
  It's not just a book, but a roadmap to success, guiding you through the labyrinth of topic selection with ease. With this treasure trove of inspiration at your fingertips, you're not just improving your score, you're transforming your academic journey."
</p></div>

    </div>

<!-- Right Info Column -->
    <div class="flex flex-col justify-evenly w-1/4 flex-shrink border-black border-l-[1px] tiny:flex-row tiny:w-full tiny:border-t-black tiny:border-t-[1px]">  

  
      <div class="flex flex-col justify-evenly mx-4 my-4 divide-black divide-y-[1px] border-black border-[1px] rounded-md tiny:w-1/2">

        <p class="px-2 py-2 text-xs text-center"> ⚖️ Individual License for 1 Person
        </p>

        <p class="px-2 py-2 text-xs text-center">📁 Format -

          Digital
          Non-printable
        </p>

        <p class="px-2 py-2 text-xs text-center">📃 Pages
          358
        </p>

        <p class="px-2 py-2 text-xs text-center">🌍Language 

          English
        </p>

      </div>
     
     
      <div class="border-t-[1px] border-black tiny:border-l-black tiny:border-l-[1px]"></div>
      
      <div class="px-4 py-4 tiny:w-1/2">
      <header>
        <h3 class="font-sans text-xl font-bold text-center">Ratings</h3>
        <div class="rating-rate">
          <span class="icon-rate icon-solid-star-rate">★</span>
          <div class="rating-average-rate">5.0</div>(17 ratings)
        </div>
      </header>

      <section class="histogram-rate" aria-label="Ratings histogram">
        <!-- Repeat this block for 5, 4, 3, 2, 1 star(s) -->
        <div class="rating-row-rate">
          <div>5 stars</div>
          <div class="bar-rate" aria-label="5 stars" aria-valuenow="90" aria-valuemax="100" aria-valuemin="0">
            <div class="bar-fill-rate" style="width: 90%"></div>
          </div>
          <div>90%</div>
        </div>

        <div class="rating-row-rate">
          <div>4 stars</div>
          <div class="bar-rate" aria-label="5 stars" aria-valuenow="5" aria-valuemax="100" aria-valuemin="0">
            <div class="bar-fill-rate" style="width: 5%"></div>
          </div>
          <div>5%</div>
        </div>

        <div class="rating-row-rate">
          <div>3 stars</div>
          <div class="bar-rate" aria-label="5 stars" aria-valuenow="3" aria-valuemax="100" aria-valuemin="0">
            <div class="bar-fill-rate" style="width: 3%"></div>
          </div>
          <div>3%</div>
        </div>

        <div class="rating-row-rate">
          <div>2 stars</div>
          <div class="bar-rate" aria-label="5 stars" aria-valuenow="2" aria-valuemax="100" aria-valuemin="0">
            <div class="bar-fill-rate" style="width: 2%"></div>
          </div>
          <div>2%</div>
        </div>

        <div class="rating-row-rate">
          <div>1 stars</div>
          <div class="bar-rate" aria-label="5 stars" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0">
            <div class="bar-fill-rate" style="width: 0%"></div>
          </div>
          <div>0%</div>
        </div>

    </section>
  </div>

    </div>

</section>
</div>