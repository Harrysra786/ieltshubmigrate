import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import imagemin from 'vite-plugin-imagemin';


export default defineConfig({
	plugins: [
		sveltekit(),
		imagemin({
			gifsicle: {},
			jpegtran: {},
			optipng: {},
			svgo: {}
		})
	],
	
	
	build: {
		assetsInclude: ['**/static/fonts/**/*']
	},
	server: {
		fs: {
			allow: ['..'],
			
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
