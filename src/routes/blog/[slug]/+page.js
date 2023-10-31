/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch, params }) {
  // Fetch the post data
  const res = await fetch(`/posts/${params.slug}.json`);
  const data = await res.json();

  // Check if the post data was fetched successfully
  if (!data) {
      return { status: 404 };
  }

  // Return the post data
  return { props: { post: data } };
}
