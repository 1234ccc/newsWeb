import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/newsWeb/', 
  plugins: [vue()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': '/src',  // 配置 `@` 指向 `src` 目录
    },
  },
});
