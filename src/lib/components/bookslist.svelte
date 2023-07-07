<script>
  let products = Array(2).fill({
    title: '200 Essential Essays For IELTS',
    imgUrl: 'img/Onlythebook2.png',
    attributes: [
      { icon: '✒️', text: 'IELTS Writing /' },
      { icon: '📃', text: '210 Pages /' },
      { icon: '📅', text: ' Lifetime Access' },
    ],
    rating: '⭐ 4.9 (15)',
    price: '🧑🏼‍🎓₹50',
  });

  products.push({
  title: 'Grammar for IELTS',
  imgUrl: '/img/bookcover2.png',
  attributes: [
    { icon: '🔖', text: 'Writing' },
    { icon: '📚', text: '110 Pages' },
    { icon: '⏰', text: 'Lifetime Access' },
  ],
  rating: '⭐ 4.8 (10)',
  price: '🧑🏼‍🎓₹60',
});

</script>

<div class="product-card-grid px-10 max-w-[1300px]0">
  {#each products as product}
    <article class="grid m-3 border-black shadow-pop-br">
      <a href="/samplebook">
        <div class="flex justify-center font-mono">
          <img src="{product.imgUrl}" alt="Book cover" class="w-full border-black border-x-[1px] border-t-[1px] rounded-t-lg">
        </div>
        <div class="border-black border-[1px] font-mono text-base text-center bg-white">
          <header>
            <h3 class="flex justify-center">{product.title}</h3>
            <div class="flex border-y-[1px] border-black">
              {#each product.attributes as attribute}
                <h3 class="font-sans text-xs divide-black text-zinc-700">{attribute.icon} {attribute.text}</h3>
              {/each}
            </div>
          </header>
          


          <footer class="flex divide-x-[1px] divide-black static justify-around">
            
            <div class="w-full px-5 py-3 text-xs font-semibold text-center">⭐ 4.9 (15)</div> 
            
            <div class="w-full py-3 text-xs font-semibold text-center">🧑🏼‍🎓₹50</div>
          
          </footer>

          
        </div>
      </a>
    </article>
  {/each}
</div>
