import { mergeConfig, defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: [...configDefaults.exclude],
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/__tests__/setup.js'],
    },
  })
);
