<script>
    let books = [
      {title: 'Book 1', price: '299', subject: 'Subject 1', image: '/static/img/bookcover2.png'},
      {title: 'Book 2', price: '399', subject: 'Subject 2', image: '/static/img/bookcover2.png'},
      {title: 'Book 3', price: '499', subject: 'Subject 3', image: '/static/img/bookcover2.png'},
      // add more books as needed
    ];
  
    function handleBookClick(book) {
      // replace with actual navigation logic
      console.log(`Navigating to details for ${book.title}`);
    }
  </script>
  
  <div class="grid grid-cols-3 gap-4">
    {#each books as book (book.title)}
      <div class="cursor-pointer shadow-pop-br" on:click={() => handleBookClick(book)}>
        <img src={book.image} alt={book.title} class="w-full">
        <div class="p-4 text-white bg-neutral-800">
          <h2 class="font-bold">{book.title}</h2>
          <div class="flex justify-between">
            <p>{book.price}</p>
            <p>{book.subject}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <style>
    .shadow-pop-br {
      transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    }
  
    .shadow-pop-br:hover {
      transform: translate(-8px, -8px);
      box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
    }
  </style>
  