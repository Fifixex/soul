import { defineConfig } from 'vite';
import path from 'node:path';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
	plugins: [injectHTML()],
	root: 'src',
	publicDir: '../public',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	build: {
		emptyOutDir: true,
		outDir: '../dist',
	},
});
