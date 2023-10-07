// In blog/[slug]/+page.server.js
import fs from 'fs';
import path from 'path';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params;
  const filePath = path.join('src/routes/blog', `${slug}.svelte`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const metadataMatch = fileContents.match(/export let metadata = (\{[\s\S]*?\});/);
  const metadata = metadataMatch ? JSON.parse(metadataMatch[1]) : {};

  return {
    post: {
      metadata,
      content: fileContents
    }
  };
}
