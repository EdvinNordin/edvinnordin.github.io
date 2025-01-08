import {defineConfig} from "vite";
import inject from '@rollup/plugin-inject'; // Plugin for polyfills

export default defineConfig({
    base: "/", // Keep this as "/" if this is deployed to the root
    build: {
        outDir: "dist", // Default output directory (can be changed)
    },
    plugins: [
        // Use @rollup/plugin-inject to polyfill Buffer
        inject({
            Buffer: ['buffer', 'Buffer'], // Automatically replace 'Buffer' with the polyfill
        }),
    ],
    resolve: {
        alias: {
            // Polyfill for other missing modules (if necessary)
            stream: 'stream-browserify',
            crypto: 'crypto-browserify',
            path: 'path-browserify',
        },
    },
});
/*
import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject'; // Plugin for polyfills

export default defineConfig({
    plugins: [
        // Use @rollup/plugin-inject to polyfill Buffer
        inject({
            Buffer: ['buffer', 'Buffer'], // Automatically replace 'Buffer' with the polyfill
        }),
    ],
});*/