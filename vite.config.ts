import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name;
          if (!name) {
            return `assets/[name]-[hash][extname]`;
          }
          let extType = name.split('.').at(1);
          if (extType && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  publicDir: 'public',
});
