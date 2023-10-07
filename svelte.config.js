import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';
import { mdsvex } from 'mdsvex';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			layout: {
				blog: './src/lib/BlogLayout.svelte'
			},
			smartypants: {
				dashes: 'oldschool'
			}
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
