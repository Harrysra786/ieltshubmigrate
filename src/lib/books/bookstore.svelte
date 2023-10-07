<script>
    let products = Array(0).fill({
      title: '200 Essential Essays For IELTS',
      imgUrl: 'img/Onlythebook2.png',
      route: 'samplebook',
      attributes: [
        { icon: '/img/icon1.png', text: 'IELTS Writing /' },
        { icon: '/img/icon2.png', text: '210 Pages /' },
        { icon: '/img/icon3.png', text: ' Lifetime Access' },
      ],
      rating: '⭐ 4.9 (15)',
      price: '🧑🏼‍🎓₹50',
    });
  
    products.push({
    title: 'Biggest Book of Band 9 IELTS Essays',
    imgUrl: '/img/bookstore/essaybook.jpg',
    route: 'bookstore/essaybook',
    attributes: [
      { icon: '/img/rupee (2).png', text: 'INR 399' },
      { icon: '/img/star (1).png', text: '5 (3)' },
    ],
  });

    products.push({
    title: 'The Big Book of Ideas For IELTS Essays',
    imgUrl: '/img/bookstore/ideasbook.jpg',
    route: 'bookstore/ideasbook',
    attributes: [
      { icon: '/img/rupee (2).png', text: 'INR 299' },
      { icon: '/img/star (1).png', text: '5.0 (2)' },
    ],
  });

  products.push({
    title: 'Functional Grammar for IELTS Task 2',
    imgUrl: '/img/bookstore/grambook.jpg',
    route: 'bookstore/grambook',
    attributes: [
      { icon: '/img/rupee (2).png', text: 'INR 299' },
      { icon: '/img/star (1).png', text: '0 (0)' },
    ],
  });

  products.push({
    title: 'The Biggest Book of Speaking Part 1',
    imgUrl: '/img/bookstore/part1book.jpg',
    route: 'bookstore/part1book',
    attributes: [
      { icon: '/img/rupee (2).png', text: 'INR 299' },
      { icon: '/img/star (1).png', text: '4.9 (3)' },
    ],
  });

  products.push({
    title: 'Band 9 Cue Card Answers (May-Aug 2023)',
    imgUrl: '/img/bookstore/cuecardbook.jpg',
    route: 'bookstore/cuecardbook',
    attributes: [
      { icon: '/img/rupee (2).png', text: 'INR 199' },
      { icon: '/img/star (1).png', text: '4.7 (7)' },
    ],
  });

  products.push({
    title: '(Free) Language Booster Book',
    imgUrl: '/img/bookstore/langbook.jpg',
    route: 'bookstore/langbook',
    attributes: [
      { icon: '/img/rupee (2).png', text: 'INR 1' },
      { icon: '/img/star (1).png', text: '0 (0)' },
    ],
  });

  
  
  
  </script>
  
  <div class="product-card-grid px-10 max-w-[1300px]">
    {#each products as product}
      <article class="grid m-3 border-black shadow-pop-br">
        <a href="/{product.route}">
          <div class="flex justify-center font-mono">
            <img src="{product.imgUrl}" alt="Book cover" class="w-full border-black border-x-[1px] border-t-[1px] rounded-t-lg">
          </div>
          <div class="border-black border-r-black border-[1px] font-mono text-base text-center bg-white rounded-b-lg">
            <header class="">
              <div class="flex justify-center py-2 font-bold px-7">{product.title}</div>
              <div class="flex border-y-[1px] border-t-black justify-evenly items-center pb-2 pt-3"> <!-- added items-center -->
                {#each product.attributes as attribute}
                  <div class="font-sans text-xs divide-black text-zinc-700">
                    <img src="{attribute.icon}" alt="Icon" class="inline-block w-6 h-6 mb-2 mr-1 imgshadowed"> <!-- replaced emoji with img tag -->
                   <p class="font-bold"> {attribute.text}</p>
                  </div>
                {/each}
              </div>
            </header>
        
        </a>
      </article>
    {/each}
  </div>
  