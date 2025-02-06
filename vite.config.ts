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
		rollupOptions: {
			input: {
				soul: path.resolve(__dirname, 'src/index.html'),
				contact: path.resolve(__dirname, 'src/contact.html'),
				snippets: path.resolve(__dirname, 'src/explore.html'),
				404: path.resolve(__dirname, 'src/404.html'),
			},
		},
	},
});
