import { defineConfig } from 'vite'
import svgLoader from "vite-svg-loader";
import vue from "vue";

export default defineConfig({
    plugins: [vue(), svgLoader()],
})