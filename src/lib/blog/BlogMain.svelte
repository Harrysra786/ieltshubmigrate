<script>
  import Card from '$lib/reuse/BlogCard.svelte';

  const articles = [
    // Add your articles here in the following format:
    {
      href: 'https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
      title: 'International Artist Feature: Malaysia',
      author: 'Mary Winkler'
    },
    // Add more articles...
  ];
</script>

<h1>Cool Articles</h1>

<div class="band">
  {#each articles as article (article.href)}
    <Card {href}={article.href} {image}={article.image} {title}={article.title} {author}={article.author} />
  {/each}
</div>

<!-- Your existing style tag here -->
