import { defineConfig } from 'tsup';

export default defineConfig([
  { entry: ['src/*.ts'], splitting: false, clean: true, format: 'cjs', outDir: './lib', dts: true },
  { entry: ['src/*.ts'], splitting: false, clean: true, format: 'esm', outDir: './es', dts: true },
  // { entry: ['src/index.ts'], clean: true, format: 'iife', outDir: './dist' },
]);
