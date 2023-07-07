import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
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
