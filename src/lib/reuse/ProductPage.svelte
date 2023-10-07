
<script>
    import { onMount } from 'svelte';
    import intlTelInput from 'intl-tel-input';
    import 'intl-tel-input/build/css/intlTelInput.css';
    import { user } from '$lib/store';
    import PaymentButton from '$lib/reusefire/PaymentButton.svelte';
    import { signUp, signIn } from '$lib/authService';
    export let productName;
    export let price;
    export let redirectUrl;
    export let productImage;
    export let productTitle;
    export let productDescription;
    export let freesample;
    export let Format;
    export let Pages;
    export let Howmanyitem;
    export let Howmanynumber;
    export let Language;
    export let Ratings;
    export let Ratingsnumber;
  
    onMount(() => {
      intlTelInput(document.querySelector('#mobile_code'), {
        initialCountry: "in",
        separateDialCode: true,
      });
    });
  
    let email = '';
    let password = '';
    let phone = "";
    let firstName = "";
    let lastName = "";
  
    async function handlePaymentSuccess() {
      let userEmail;
      user.subscribe(value => {
        userEmail = value?.email;
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
        window.location.href = redirectUrl;
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
      } catch (error) {
        console.error(error);
      }
    }
  </script>

<div class="flex flex-col items-center justify-center min-h-screen px-5 pt-6 tiny:pt-5">
    <!-- Book picture -->
    <a class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-sm bg-neutral-800 hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none" href="{freesample}">Download Free Sample</a>
    <p class="py-2"><b>Or</b></p>
    {#if $user}
    <PaymentButton {productName} {price} on:paymentSuccess={handlePaymentSuccess} />

      {:else}
      <button class="inline-flex items-center px-4 py-2 mb-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-sm bg-neutral-800 hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none" type="button" on:click={() => document.getElementById('loginModal').classList.add('modal-open')}>Buy Now</button>
      <div class="modal" id="loginModal">
        <div class="bg-white modal-box">
          <div class="relative flex items-center justify-center w-full mb-4">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
          src="/img/Hardev Sir Avatar.png"
          class="relative w-16 h-16 max-w-3xl mx-auto scale-up-bottom lg:max-w-none imgshadowed sm:m-0 rounded-2xl"
        />
      </div>
          <h2 class="mb-4 text-center text-md"><b>You need to be Logged In to buy!</b></h2>
          <h2 class="mb-6 text-center text-md">If you are already registered, you <b>only need to fill in the email and password to login.</b> If not registered, fill all fields and click register.</h2>
          <form class="space-y-4">
            <input class="text-black bg-white border-dashed input border-neutral-800" type="text" bind:value={firstName} placeholder="First Name">
            <input class="text-black bg-white border-dashed input border-neutral-800" type="text" bind:value={lastName} placeholder="Last Name">
    
            <input class="text-black bg-white border-dashed input border-neutral-800" type="email" bind:value={email} placeholder="Email">
            <input class="text-black bg-white border-dashed input border-neutral-800" type="password" bind:value={password} placeholder="Password">
            <input id="mobile_code" class="self-center p-2 mb-4 text-black bg-white border border-gray-300 rounded form-input" type="tel" bind:value={phone} placeholder="Phone Number" required />
    
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
      <img src="{productImage}" class="w-full max-w-[1420px]">
    </section>
    
    
    <!-- Book Information -->
    <section class="w-full flex justify-center border-black overflow-clip border-x-[1px] border-b-[1px] max-w-[1420px] mx-7 tiny:flex-col">
    
    <!-- Left Info Column -->
        <div class="flex-grow w-3/4 tiny:w-full">  
    
    
          <p class="flex font-extrabold text-2xl justify-center border-black border-b-[1px] px-10 py-7 text-center tiny:border-t-[1px]">{productTitle}</p>
    
    <div class="flex items-center justify-evenly">
      
      <p class="px-4 py-2 text-base font-semibold text-center"><span class="flex items-center"><img src="/img/money.png" alt="emoji" class="w-8 h-8 mr-2"/>INR {price}</span></p>

      <div class="border-l-[1px] border-black h-20"></div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <p class="px-4 py-2 text-base font-semibold text-center"><img src="/img/Hardev Sir Avatar.png" class="w-6 rounded-full avatar online "> Hardev Singh</p>
      <div class="border-l-[1px] border-black h-20"></div>
      <p class="px-4 py-2 text-base font-semibold text-center">⭐⭐⭐⭐⭐ {Ratingsnumber}</p>
      
              
    </div>
    
      <div>
        
       
        
    
    </div>
    <p class="flex justify-center px-6 border-black border-t-[1px] pt-4">
      {@html productDescription}<br><br>
    </p> <div class="flex flex-col items-center justify-center">
      <!-- Book picture -->
      <button class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-sm bg-neutral-800 hover:bg-white hover:text-neutral-800 hover:border-neutral-800 focus:outline-none">Download Free Sample</button>
      <p class="py-2"><b>Or</b></p>
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
        <input class="text-black bg-white border-dashed input border-neutral-800" type="text" bind:value={firstName} placeholder="First Name">
        <input class="text-black bg-white border-dashed input border-neutral-800" type="text" bind:value={lastName} placeholder="Last Name">

        <input class="text-black bg-white border-dashed input border-neutral-800" type="email" bind:value={email} placeholder="Email">
        <input class="text-black bg-white border-dashed input border-neutral-800" type="password" bind:value={password} placeholder="Password">
        <input id="mobile_code" class="self-center p-2 mb-4 text-black bg-white border border-gray-300 rounded form-input" type="tel" bind:value={phone} placeholder="Phone Number" required />

        <div class="flex justify-center space-x-4">
          <button class="bg-neutral-800 text-white py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-neutral-800 hover:border-solid mb-4" type="button" on:click={handleLogin}>Login</button>
          <button class="bg-neutral-800 text-white py-2 px-6 border-2 border-black border-dashed rounded-sm transition duration-300 ease-in-out transform hover:bg-[#f4c64e] hover:text-neutral-800 hover:border-solid mb-4" type="button" on:click={handleRegister}>Register</button>
        </div>
</form>

    </div>
  </div>
{/if}</div>
    
        </div>
    
    <!-- Right Info Column -->
        <div class="flex flex-col justify-evenly w-1/4 flex-shrink border-black border-l-[1px] tiny:flex-row tiny:w-full tiny:border-t-black tiny:border-t-[1px]">  
    
      
          <div class="flex flex-col justify-evenly mx-4 my-4 divide-black divide-y-[1px] border-black border-[1px] rounded-md tiny:w-1/2">
    
            <p class="px-2 py-2 ml-4 text-xs text-left"><span class="imgshadowed">🆔</span> <b>License</b> - Individual Lifetime
            </p>
    
            <p class="px-2 py-2 ml-4 text-xs text-left"><span class="imgshadowed">💾</span> <b>Format</b>
    
              {Format}
            </p>
    
            <p class="px-2 py-2 ml-4 text-xs text-left"><span class="imgshadowed">📃</span> <b>Pages</b>{Pages}
            </p>
            <p class="px-2 py-2 ml-4 text-xs text-left"><span class="imgshadowed">💭</span> <b>{Howmanyitem}</b> {Howmanynumber}
            </p>
    
            <p class="px-2 py-2 ml-4 text-xs text-left"><span class="imgshadowed">🌍</span> <b>Language</b> -
    
              {Language}
            </p>
    
          </div>
         
         
          <div class="border-t-[1px] border-black tiny:border-l-black tiny:border-l-[1px]"></div>
          
          <div class="px-4 py-4 tiny:w-1/2">
          <header>
            <h3 class="font-sans text-xl font-bold text-center">Ratings</h3>
            <div class="rating-rate">
              <span class="icon-rate icon-solid-star-rate">⭐</span>
              <div class="rating-average-rate">{Ratings}</div>({Ratingsnumber})
            </div>
          </header>
    
          <section class="histogram-rate" aria-label="Ratings histogram">
            <!-- Repeat this block for 5, 4, 3, 2, 1 star(s) -->
            <div class="rating-row-rate">
              <div><b>5 stars</b></div>
              <div class="bar-rate" aria-label="5 stars" aria-valuenow="90" aria-valuemax="100" aria-valuemin="0">
                <div class="bar-fill-rate" style="width: 90%"></div>
              </div>
              <div>90%</div>
            </div>
    
            <div class="rating-row-rate">
              <div><b>4 stars</b></div>
              <div class="bar-rate" aria-label="5 stars" aria-valuenow="5" aria-valuemax="100" aria-valuemin="0">
                <div class="bar-fill-rate" style="width: 5%"></div>
              </div>
              <div>5%</div>
            </div>
    
            <div class="rating-row-rate">
              <div><b>3 stars</b></div>
              <div class="bar-rate" aria-label="5 stars" aria-valuenow="3" aria-valuemax="100" aria-valuemin="0">
                <div class="bar-fill-rate" style="width: 3%"></div>
              </div>
              <div>3%</div>
            </div>
    
            <div class="rating-row-rate">
              <div><b>2 stars</b></div>
              <div class="bar-rate" aria-label="5 stars" aria-valuenow="2" aria-valuemax="100" aria-valuemin="0">
                <div class="bar-fill-rate" style="width: 2%"></div>
              </div>
              <div>2%</div>
            </div>
    
            <div class="rating-row-rate">
              <div><b>1 stars</b></div>
              <div class="bar-rate" aria-label="5 stars" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0">
                <div class="bar-fill-rate" style="width: 0%"></div>
              </div>
              <div>0%</div>
            </div>
    
        </section>
      
      </div>
    
        </div>
    
    </section>
     <!--
    <section class="p-5 bg-gray-100 w-full flex justify-center border-black overflow-clip border-x-[1px] border-b-[1px] max-w-[1420px] mx-7 tiny:flex-col">
      <div class="mx-auto max-w-7xl">
        <h2 class="mb-5 text-2xl font-bold">User Reviews</h2>
        <div class="space-y-6">
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/user.png" alt="User profile pic">
            <div>
              <h3 class="font-bold">Gurpreet Singh</h3>
              <p>Hardev Sir's book is a game-changer! No more surprises in the exam, thanks to these current cue cards. The Hindi translations are a blessing. Love it!</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/harpreetKaur.jpg" alt="User profile pic">
            <div>
              <h3 class="font-bold">Amritpal Kaur</h3>
              <p>This book by Hardev Sir is a roadmap for IELTS aspirants. It's user-friendly and the mix of English and Hindi is a real asset. Can't thank him enough!</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/user.png" alt="User profile pic">
            <div>
              <h3 class="font-bold">Jaspreet Kaur</h3>
              <p>I was struggling with IELTS, but Hardev Sir's guide has been a lifesaver. The Hindi translations make things so much easier. Feeling confident now.</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/user.png" alt="User profile pic">
            <div>
              <h3 class="font-bold">Sukhdeep Singh</h3>
              <p>Hardev Sir's book truly embodies 'ease of understanding'. The Hindi translations bridge the language gap and provide a comfortable study experience. Highly recommended!</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/user.png" alt="User profile pic">
            <div>
              <h3 class="font-bold">Aman Arora</h3>
              <p>Hardev Sir's 'Band 9 Cue Card Answers' is my new best friend. It's taken away my exam fear. A must-have for all IELTS students.</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/user.png" alt="User profile pic">
            <div>
              <h3 class="font-bold">Mohit Bansal</h3>
              <p>This is the perfect guide for IELTS study. Hardev Sir's cue cards made my prep smoother. And the Hindi translations are just superb! Grateful for this.</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/user.png" alt="User profile pic">
            <div>
              <h3 class="font-bold">Harman Singh</h3>
              <p>Totally impressed with Hardev Sir's book! The Hindi translations are so considerate. Plus, the sample answers help envision the nature of responses. A treasure for IELTS prep.</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/user.png" alt="User profile pic">
            <div>
              <h3 class="font-bold">Jaskaran Sra</h3>
              <p>I used to dread studying for the IELTS, but not anymore. Hardev Sir's guide makes things much less scary. The Hindi translations are a lifesaver. Great job!</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/user.png" alt="User profile pic">
            <div>
              <h3 class="font-bold">Baldeep Kaur</h3>
              <p>I'm really grateful for Hardev Sir's 'Band 9 Cue Card Answers'. The careful selection of the current cue cards is highly beneficial. Plus, the Hindi translations are a big help. Highly recommend it!</p>
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <img class="w-10 h-10 rounded-full" src="./../../../static/img/user1.png" alt="User profile pic">
            <div>
              <h3 class="font-bold">Naveen Sharma</h3>
              <p>Simply incredible! Studying for IELTS is now fun and confidence-building, all thanks to Hardev Sir's 'Band 9 Cue Card Answers'. It's been a great help. Thank you so much!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  -->
    
    </div>