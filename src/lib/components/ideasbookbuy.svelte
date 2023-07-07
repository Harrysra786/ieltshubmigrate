<script>
import PaymentButton from './PaymentButton.svelte';

let productName = 'Ideas Book v2';
let price = 299; // replace with the actual price

function handlePaymentSuccess() {
  window.location.href = '/ideasforielts/read';
}
</script>

<div class="flex flex-col items-center justify-center min-h-screen px-5 pt-6 tiny:pt-5">
<!-- Book picture -->
<PaymentButton {productName} {price} on:paymentSuccess={handlePaymentSuccess} />
<section class="w-full flex justify-center border-black border-[1px] rounded-t-xl overflow-clip max-w-[1420px] mx-7">

  <!-- svelte-ignore a11y-missing-attribute -->
  <img src="/img/ideascover2.png" class="w-full max-w-[1420px]">
</section>


<!-- Book Information -->
<section class="w-full flex justify-center border-black overflow-clip border-x-[1px] border-b-[1px] max-w-[1420px] mx-7 tiny:flex-col">

<!-- Left Info Column -->
    <div class="w-3/4 tiny:w-full flex-grow">  


      <p class="flex font-extrabold text-2xl justify-center border-black border-b-[1px] px-10 py-7 text-center tiny:border-t-[1px]">The Big Book of Ideas for IELTS Essays</p>

<div class="flex justify-evenly items-center">
  
  <p class="text-base font-semibold text-center px-4 py-2">🪙 INR 299</p>
  <div class="border-l-[1px] border-black h-20"></div>
  <!-- svelte-ignore a11y-missing-attribute -->
  <p class="text-base font-semibold text-center px-4 py-2"><img src="/img/Hardev Sir Avatar.png" class="avatar online w-6 rounded-full "> Hardev Singh</p>
  <div class="border-l-[1px] border-black h-20"></div>
  <p class="text-base font-semibold text-center px-4 py-2">⭐⭐⭐⭐⭐ 11 Ratings</p>
  
          
</div>

  <div>
    <div class="flex flex-col items-center justify-center border-black border-t-[1px] pt-6">
      <!-- Book picture -->
      <PaymentButton {productName} {price} on:paymentSuccess={handlePaymentSuccess} /></div>
<p class="flex justify-center pb-6 px-6">
  Unleash your potential with 'The Big Book of IELTS Speaking Part 1'. This comprehensive guide is packed with sample answers to every question you might encounter in the IELTS Speaking Test Part 1. 
  <br><br>
  Expertly crafted, it offers clear, concise, and effective responses that will boost your confidence and enhance your English proficiency. This book is your key to achieving a high band score, providing you with the tools to express your thoughts fluently and coherently. 
  <br><br>
  Don't just prepare for the IELTS, master it with 'The Big Book of IELTS Speaking Part 1'. Your journey to success starts here.
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
        <h3 class="text-center text-xl font-bold font-sans">Ratings</h3>
        <div class="rating-rate">
          <span class="icon-rate icon-solid-star-rate">★</span>
          <div class="rating-average-rate">5.0</div>(11 ratings)
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