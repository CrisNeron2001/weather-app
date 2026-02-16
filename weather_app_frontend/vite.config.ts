import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],  resolve: {
	alias: {
		'@': path.resolve(__dirname, './src'),
		'@components': path.resolve(__dirname, 'src/components'),
		'@interfaces':  path.resolve(__dirname, 'src/interfaces'),
		'@services':  path.resolve(__dirname, 'src/services'),
		'@hooks':  path.resolve(__dirname, 'src/hooks'),
		'@data':  path.resolve(__dirname, 'src/data'),
		'@layouts':  path.resolve(__dirname, 'src/layouts'),
		'@models':  path.resolve(__dirname, 'src/models'),
	},
	extensions: [".ts", ".tsx", ".js", "jsx"],
  }
})
