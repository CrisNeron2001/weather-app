import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
	alias: [
		{ find: /^@components\/(.*)/, replacement: path.resolve(__dirname, 'src/components') + '/$1' },
		{ find: /^@interfaces\/(.*)/, replacement: path.resolve(__dirname, 'src/interfaces') + '/$1' },
		{ find: /^@services\/(.*)/, replacement: path.resolve(__dirname, 'src/services') + '/$1' },
		{ find: /^@hooks\/(.*)/, replacement: path.resolve(__dirname, 'src/hooks') + '/$1' },
		{ find: /^@data\/(.*)/, replacement: path.resolve(__dirname, 'src/data') + '/$1' },
		{ find: /^@layouts\/(.*)/, replacement: path.resolve(__dirname, 'src/layouts') + '/$1' },
		{ find: /^@models\/(.*)/, replacement: path.resolve(__dirname, 'src/models') + '/$1' },
	]
  }
})
