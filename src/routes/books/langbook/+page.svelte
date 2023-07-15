<script>
  import ProductPage from '../../../lib/components/ProductPage.svelte';

let productDescription = 'Are you ready to elevate your English language skills to new heights? "Language Booster" is your ticket to mastering the art of writing and speaking English with confidence and flair. This unique guide, priced at an unbeatable INR 1, is a treasure trove of 600 English sentences, each presented at basic, intermediate, and expert levels. It\'s like having a personal language coach, guiding you step by step from the rudiments to the nuances of the English language.<br><br>Imagine the satisfaction of seeing your language skills evolve as you journey through the book. With each sentence, you\'ll learn how to make more effective word choices, apply grammar rules accurately, and infuse your writing with rich details. "Language Booster" is not just a book, it\'s a transformative learning experience that will empower you to communicate your thoughts and ideas more clearly and persuasively.<br><br>So, why wait? Grab your copy of "Language Booster" today and embark on an exciting journey of linguistic discovery. Whether you\'re a language learner starting from scratch, a student seeking to improve your academic writing, or a professional aiming to polish your communication skills, this book is your passport to a world of improved English. Get ready to boost your language skills and unlock your full potential.';
</script>

<ProductPage 
  productName='langbook'
  price='1'
  redirectUrl='./langbook/read'
  productQuery='langbook'
  productImage='/img/productpage/langbook.jpg'
  productTitle='Language Booster - Simple TO Better TO Best!'
  productDescription={productDescription}
  freesample='/pdf/Language Booster - Free Sample.pdf'
  Format=' - Digital / Printable'
  Pages=' - 624'
  Howmanyitem='Units'
  Howmanynumber=' - 623'
  Language= 'English'
  Ratings='5.0'
  Ratingsnumber='7 Ratings'
/>
