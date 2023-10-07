import fs from 'fs';
import path from 'path';
import { mdsvex } from 'mdsvex';
import matter from 'gray-matter';

export async function fetchPost(slug) {
  const filePath = path.join('src/routes/blog', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { content, data } = matter(fileContents);
  const { code } = await mdsvex().process(content);

  return {
    metadata: data,
    content: code
  };
}
