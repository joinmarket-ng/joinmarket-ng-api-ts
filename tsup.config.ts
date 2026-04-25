import path from 'node:path';
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/**/*.ts'],
    format: ['esm'],
    dts: true,
    clean: true,
    bundle: false,
    splitting: false,
    external: ['@tanstack/react-query'],
    tsconfig: path.resolve(__dirname, './tsconfig.json')
});
