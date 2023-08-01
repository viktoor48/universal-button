import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('/assets/') && /\.(svg)$/.test(id)) {
                        return 'assets'
                    }
                },
            },
        },
        chunkSizeWarningLimit: 600,
    },
})