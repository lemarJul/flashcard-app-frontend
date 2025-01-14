import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/#:~:text=Vite%20also%20supports%20TypeScript%20config%20files.%20You%20can%20use%20vite.config.ts%20with%20the%20defineConfig%20helper%20function%20above%2C%20or%20with%20the%20satisfies%20operator%3A
export default {
  plugins: [react()],
} satisfies UserConfig;
