// In blog/+page.server.js
import fs from 'fs';
import path from 'path';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const directory = path.join('src/routes/blog');
  const filenames = fs.readdirSync(directory);
  const posts = filenames.filter(filename => filename.endsWith('.svelte')).map(filename => {
    const filePath = path.join(directory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const metadataMatch = fileContents.match(/export let metadata = (\{[\s\S]*?\});/);
    const metadata = metadataMatch ? JSON.parse(metadataMatch[1]) : {};
    const slug = filename.replace('.svelte', '');

    return {
      metadata,
      slug
    };
  });
  console.log(posts);
  return {
    posts
  };
}
