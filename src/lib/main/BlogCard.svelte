<script>
    export let post;
  </script>
  
  <a href="/blog/{post.slug}" class="card">
    <div class="thumb" style="background-image: url({post.image});"></div>
    <article>
      <h1>{post.title}</h1>
      <span>{post.author}</span>
    </article>
  </a>
  