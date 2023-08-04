// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
import swap from "ultrahtml/dist/transformers/swap";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Montserrat: true,
      Raleway: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      display: 'swap',
    },
  },
  vite: {
    plugins: [svgLoader(),],
    server: {
      fs: {
        strict: false
      }
    }
  },
})
