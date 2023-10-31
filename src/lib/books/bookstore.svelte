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
  <section class="flex flex-col items-center justify-center">
<div class="mx-1 mt-6 px-20 tiny:px-2 max-w-[980px] text-center pt-8 pb-3 mb-5 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] "><img class="block w-16 h-16 mx-auto mb-1 s-pxe8EGBy05UQ" src="/img/Elearning.svg" alt="clock"> <h1 class="mx-2 tracking-wider s6 anton s-pxe8EGBy05UQ"><span class="mx-2 s5 montserrat s-pxe8EGBy05UQ">Hardev Sir's</span> <br class="s-pxe8EGBy05UQ"> Exclusive IELTS Bookstore</h1> <h3 class="mx-2 mt-2 mb-4 text-xs s-pxe8EGBy05UQ">🧰 <b>Carefully Crafted Unique Guides:</b> Your Secret Weapon for IELTS Achievement 🔑</h3> </div>
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
</section>