import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base:null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server:{
        hmr: {
            host: 'localhost',
        },
    },
    build: {
        outDir: path.resolve(__dirname, 'public/build'), // Update your build path
        emptyOutDir: true,
        manifest: true, // Add a manifest to map the assets
        rollupOptions: {
            input: 'resources/js/app.js',
        }
    }
});
