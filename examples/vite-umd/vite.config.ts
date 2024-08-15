import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin({
      'react': 'React',
      'react-dom': 'ReactDOM',
      '@sensoro-design/react': 'sensoro',
      '@sensoro-design/charts': ['sensoro', 'charts'],
    }),
  ],
  server: {
    port: 3000,
  },
});
