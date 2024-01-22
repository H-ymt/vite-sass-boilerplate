import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const pageData = {
  '/index.html': {
    title: 'トップページ',
  },
  '/about/index.html': {
    title: 'アバウトページ',
  },
};

export default defineConfig({
  root: './src', //開発ディレクトリ設定
  base: '',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, './src/index.html'),
        contact: resolve(__dirname, './src/about/index.html'),
      },
      output: {
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(jpe?g|png|gif|svg)$/.test(name ?? '')) {
            return 'assets/img/[name].[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, './src/components'),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
});
