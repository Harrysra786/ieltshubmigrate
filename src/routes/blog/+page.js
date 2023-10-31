/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch }) {
  let posts = [];
  for (let i = 1; ; i++) {
    try {
      const res = await fetch(`/posts/post${i}.json`);
      if (res.ok) {
        const data = await res.json();
        posts.push(data);
      } else {
        console.log(`Failed to fetch post${i}.json: Response not OK. Status: ${res.status}, Status Text: ${res.statusText}`);
        if (res.status === 404) {
          // Break the loop if the post does not exist
          break;
        }
 else {
          console.log(`Failed to fetch post${i}.json: Response not OK`);
        }
      }
    } catch (error) {
      console.log(`Failed to fetch post${i}.json: ${error.message}`);
    }
  }
  return { props: { posts } };
}
